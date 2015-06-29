"""Setup for pdf XBlock."""

import os
from setuptools import setup


def package_data(pkg, root):
    """Generic function to find package_data for `pkg` under `root`."""
    data = []
    for dirname, _, files in os.walk(os.path.join(pkg, root)):
        for fname in files:
            data.append(os.path.relpath(os.path.join(dirname, fname), pkg))

    return {pkg: data}


setup(
    name='simstudent-xblock',
    version='0.1',
    description='simstudent XBlock',   # TODO: write a better description.
    packages=[
        'pdf',
    ],
    install_requires=[
        'XBlock',
    ],
    entry_points={
        'xblock.v1': [
            'simstudent = simstudent:simstudentXBlock',
        ]
    },
    package_data=package_data("simstudent", "static"),
)
