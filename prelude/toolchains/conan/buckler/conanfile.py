from conans import ConanFile
from conans.model import Generator

import collections
import os
import re


def _rel_to_root(rootpath, path):
    """Make the given path relative to the given root path."""
    return os.path.relpath(path, rootpath)


def _map_rel_to_root(rootpath, paths):
    """Make all given paths relative to the given root path."""
    return [_rel_to_root(rootpath, p) for p in paths]


_LibraryFiles = collections.namedtuple("_LibraryFiles", ["static", "shared"])


def _find_libs(rootpath, lib_paths, lib_names):
    """Collect static and shared library files for the given library names.

    Searches for library files under the given library search paths.
    Retains order as defined in the given library names in case it matters for
    linking order.
    """
    result = collections.OrderedDict((name, _LibraryFiles([], [])) for name in lib_names)

    name_pattern = "(?P<name>{})".format("|".join(lib_names))
    ext_pattern = "(?:(?P<static>a|lib)|(?P<shared>so(?:\.\d+(?:\.\d+)?)?|dylib|dll))"
    regex = re.compile("lib{}.{}".format(name_pattern, ext_pattern))

    files = (
        os.path.join(libdir, filepath)
        for libdir in lib_paths
        for filepath in os.listdir(os.path.join(rootpath, libdir))
        if os.path.isfile(os.path.join(rootpath, libdir, filepath))
    )

    for filepath in files:
        m = regex.match(os.path.basename(filepath))
        if m:
            name = m.group("name")
            # TODO[AH] Can we distinguish static and static-pic libs?
            if m.group("static"):
                result[name].static.append(filepath)
            elif m.group("shared"):
                result[name].shared.append(filepath)

    return result


class _Requirement(collections.namedtuple("_Requirement", ["package", "component"])):
    """Represents a Conan requirement.

    Requirements can be
    * a relative reference to a component of the current package - `package` None, `component` set,
    * an absolute reference to a package - `package` set, `component` None, or
    * an absolute reference to another package's component - `package` set, `component` set.
    """

    @classmethod
    def parse(cls, requirement):
        """Parse a Conan requirement.

        These take the form
        * `somecomponent` for a relative component reference,
        * `somepackage::somepackage` for an absolute package reference, or
        * `somepackage::somecomponent` for an absolute component reference.
        """
        if "::" in requirement:
            package, component = requirement.split("::", 1)
            if package == component:
                return cls(package, None)
            else:
                return cls(package, component)
        else:
            return cls(None, requirement)

    def to_name(self, current_package):
        """Generate the Buck2 target name for a requirement."""
        package = self.package or current_package
        component = self.component or package
        return "_component_{}_{}".format(package, component)

    def to_label(self, current_package):
        """Generate the Buck2 label for a requirement.

        Relative requirements use the given current package's name to refer directly to the component target.
        Absolute requirements refer to the package target or sub-target.
        """
        if self.package and self.component:
            return ":{}[{}]".format(self.package, self.component)
        elif self.package:
            return ":{}".format(self.package)
        else:
            return ":{}".format(self.to_name(current_package))


class _BucklerDepCppComponent(object):
    """A Conan package component or the package itself if it has no components.

    You can learn more about Conan package components [here][conan-components].

    [conan-components]: https://docs.conan.io/en/1.53/creating_packages/package_information.html#using-components
    """

    def __init__(self, package_name, component_info):
        self.package_name = package_name
        self.component_name = component_info.name
        self.rootpath = component_info.rootpath
        rootpath = self.rootpath

        self.defines = component_info.defines
        self.cflags = component_info.cflags
        self.cppflags = component_info.cppflags
        # TODO[AH] Do we need these?
        # self.sharedlinkflags = component_info.sharedlinkflags
        # self.exelinkflags = component_info.exelinkflags

        self.include_paths = _map_rel_to_root(rootpath, component_info.include_paths)

        lib_paths = _map_rel_to_root(rootpath, component_info.lib_paths)
        self.libs = _find_libs(rootpath, lib_paths, component_info.libs)
        self.system_libs = component_info.system_libs

        self.requires = [_Requirement.parse(req) for req in component_info.requires]

    def generate(self):
        """Generate Buck2 target definitions for the component."""
        name = _Requirement(None, self.component_name).to_name(self.package_name)
        deps = [req.to_label(self.package_name) for req in self.requires]
        return """\

conan_component(
    name = {name},
    defines = {defines},
    cflags = {cflags},
    cppflags = {cppflags},
    include_paths = {include_paths},
    libs = {libs},
    static_libs = {static_libs},
    shared_libs = {shared_libs},
    system_libs = {system_libs},
    deps = {deps},
    install = None,  # TODO[AH] Depend on prebuilt conan_install target.
)
""".format(
            name = repr(name),
            defines = repr(self.defines),
            cflags = repr(self.cflags),
            cppflags = repr(self.cppflags),
            include_paths = repr(self.include_paths),
            libs = repr(list(self.libs.keys())),
            static_libs = repr({
                name: sorted(libs.static)
                for name, libs in self.libs.items()
                if libs.static
            }),
            shared_libs = repr({
                name: sorted(libs.shared)
                for name, libs in self.libs.items()
                if libs.shared
            }),
            system_libs = repr(self.system_libs),
            deps = repr(deps))


class _BucklerDepCpp(object):
    """A Conan package."""

    def __init__(self, dep_name, dep_cpp_info):
        self.name = dep_name
        self.rootpath = dep_cpp_info.rootpath
        rootpath = self.rootpath
        if dep_cpp_info.components:
            self.components = collections.OrderedDict(
                (name, _BucklerDepCppComponent(dep_name, component_info))
                for (name, component_info) in dep_cpp_info.components.items()
            )
        else:
            self.components = collections.OrderedDict([
                (dep_name, _BucklerDepCppComponent(dep_name, dep_cpp_info))
            ])


    def generate(self):
        """Generate Buck2 target definitions for the package and its components."""
        result = """\

conan_dep(
    name = {name},
    components = {components},
    visibility = [],  # TODO[AH] Make direct dependencies according to the top-level conanfile public.
)
""".format(
            name = repr(self.name),
            components = repr({
                name: _Requirement(None, name).to_label(self.name)
                for name in self.components.keys()
            }))

        for component in getattr(self, "components", {}).values():
            result += component.generate()

        return result


class BucklerGenerator(Generator):
    @property
    def filename(self):
        return "conan-imports.bzl"

    @property
    def content(self):
        result = """\
# @generated
# Update with TODO
"""

        for dep_name, dep_cpp_info in self.deps_build_info.dependencies:
            buckler_dep = _BucklerDepCpp(dep_name, dep_cpp_info)
            result += buckler_dep.generate()

        return result


class Buckler(ConanFile):
    name = "buckler"
    version = "0.1"
    description = """\
Buckler - Conan extension for Buck2

This package provides a
- [Generator][generator] to import Conan built packages into Buck2.
- [Toolchain][toolchain] to expose the Buck2 configuration to Conan.

[generator]: https://docs.conan.io/en/latest/reference/generators.html#generators-reference
[toolchain]: https://docs.conan.io/en/latest/creating_packages/toolchains.html
"""
    url = "https://github.com/facebookincubator/buck2"
    license = "Apache-2.0"