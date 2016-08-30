
# js-analyse

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Analyse javascript code.

## Installation

    $ npm install js-analyse

## Usage

```js
var Analyse = require('js-analyse')

var a = Analyse(`// LLOC 1
foo();

// LLOC 2 & 3
bar(); foo();`)
a.lloc() // => 3
```

## API

### Analyse(code)

- `code` - code to analyse

### .lloc()

**Returns:** Logical lines of code.

### .expressionCount(name)

- `name` - name of expression to count

**Returns:** number of times expression is used in code

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/jsAnalyse.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/jsAnalyse
[git-image]: https://img.shields.io/github/tag/joshrtay/jsAnalyse.svg?style=flat-square
[git-url]: https://github.com/joshrtay/jsAnalyse
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/js-analyse.svg?style=flat-square
[npm-url]: https://npmjs.org/package/js-analyse
