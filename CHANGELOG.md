# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2019-11-05

### Added

- Add the typographizer-js package to produce better typography

### Changed

- The package now returns a promise to support typographizer
- Reworked the code to get better results from non word characters
- The options have been completely changed
- typographize? Wheter or not to use the typographizer-js package
- ignoreLineBreaks? Ignore all line breaks in the string
- The default mode now supports unicode
- escapeToHTML? Switch to escape every soft-hyphen and non word character to it's HTML char code representation

## [2.2.0] - 2018-06-26

### Added

- Add the options to add zero-width spaces after a forward slash (see README)

## [2.1.1] - 2018-06-23

### Changed

- Fixed some typos in the documentation
- Slightly changed README
- Add Browser-Endpoint to package.json

## [2.1.0] - 2018-06-23

### Added

- Add webpack version to the npm package (see README)

### Changed

- Minor fixes in versioning
- Fix some spelling issues
- Change to webpack for browserfied version

## [2.0.1] - 2018-06-22

### Changed

- Minor Bugfixes due to publishing the package

## [2.0.0] - 2018-06-22

### Added

- The script now correctly parses linebreaks
- You can now completely ignore linebreaks
- You can set a custom string as linebreak in HTML mode

### Changed

- Code completely rewritten
- Options are now handled in a different way
- Readme now shows the new usage of the library

### Removed

- Removed usage of callbacks

## [1.0.2] - 2017-09-25

### Changed

- Fix a bug where numbers wheren't parsed

## [1.0.1] - 2017-09-22

### Added

- CHANGELOG

### Changed

- README now shows the correct installation instructions

## [1.0.0] - 2017-09-21

### Added

- Parser can output in Unicode now

### Changed

- Dramatically better parser using RegEx
- Now parsing all words in a correct way
- Update README to make usage production-able

## [0.1.1] - 2017-09-21

### Changed

- Clean repo for publishing as npm package
- Beautify the code
