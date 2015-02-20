/**
*
*	VALIDATE: array-array
*
*
*	DESCRIPTION:
*		- Validates if a value is an array of arrays.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// IS ARRAY OF ARRAYS //

/**
* FUNCTION: isArrayArray( value )
*	Validates if a value is an array of arrays.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of arrays
*/
function isArrayArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isArray( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isArrayArray()


// EXPORTS //

module.exports = isArrayArray;
