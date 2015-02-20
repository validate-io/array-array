Array of Arrays
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an array of arrays.


## Installation

``` bash
$ npm install validate.io-array-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isArrayArray = require( 'validate.io-array-array' );
```

#### isArrayArray( value )

Validates if a `value` is an `array` of `arrays`.

``` javascript
var value = [[],[]];

var bool = isArrayArray( value );
// returns true
```

__Note__: the method will return `false` for an empty `array`.


## Examples

``` javascript
var isArrayArray = require( 'validate.io-array-array' );

console.log( isArrayArray( [[],[]] ) );
// returns true

console.log( isArrayArray( [] ) );
// returns false

console.log( isArrayArray( [[],{},[]] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-array-array.svg
[npm-url]: https://npmjs.org/package/validate.io-array-array

[travis-image]: http://img.shields.io/travis/validate-io/array-array/master.svg
[travis-url]: https://travis-ci.org/validate-io/array-array

[coveralls-image]: https://img.shields.io/coveralls/validate-io/array-array/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/array-array?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/array-array.svg
[dependencies-url]: https://david-dm.org/validate-io/array-array

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/array-array.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/array-array

[github-issues-image]: http://img.shields.io/github/issues/validate-io/array-array.svg
[github-issues-url]: https://github.com/validate-io/array-array/issues
