'use strict';

var isArrayArray = require( './../lib' );

console.log( isArrayArray( [[],[]] ) );
// returns true

console.log( isArrayArray( [] ) );
// returns false

console.log( isArrayArray( [[],{},[]] ) );
// returns false
