# Changelog
All notable changes to this package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4] - 2023-09-23
Update `@bagatell/core` to `0.0.2` and adapt the web components.

## [0.0.3] - 2023-07-09
Don't use `instanceof` to check if object is instance of GUI component, since that doesn't work in production (don't know why), but use `object.constructor.name` instead.

## [0.0.2] - 2023-07-09
Log an error if a GUI component from `@bagawork/core` is used and no corresponding GUI element exists.

## [0.0.1] - 2023-07-08
Fixed wrongly imported dependency on `@bagawork/core`.

## [0.0.0] - 2023-07-08
This is a release to just get things going. Breaking changes will most likely be made before `1.0.0`.