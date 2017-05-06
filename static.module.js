"use strict";

/*;
	@submodule-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-submodule-license

	@submodule-configuration:
		{
			"package": "statis",
			"path": "statis/static.module.js",
			"file": "static.module.js",
			"module": "statis",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/statis.git",
			"test": "statis-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Static wrapper for class.

		This will implement necessary methods to facilitate static specification.
	@end-submodule-documentation

	@include:
		{
			"arid": "arid",
			"diatom": "diatom",
			"falzy": "falzy",
			"harden": "harden",
			"protype": "protype",
			"raze": "raze",
			"stagn": "stagn",
			"vound": "vound"
		}
	@end-include
*/

const arid = require( "arid" );
const diatom = require( "diatom" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const protype = require( "protype" );
const raze = require( "raze" );
const stagn = require( "stagn" );
const vound = require( "vound" );

const Static = diatom( "Static" );

const BLUEPRINT = Symbol( "blueprint" );

Static.prototype.initialize = function initialize( blueprint ){
	/*;
		@meta-configuration:
			{
				"blueprint:required": "function"
			}
		@end-meta-configuration
	*/

	if( falzy( blueprint ) || !protype( blueprint, FUNCTION ) ){
		throw new Error( "invalid blueprint" );
	}

	this[ BLUEPRINT ] = blueprint;

	this.implement( "stasis", function stasis( ){
		return Static( this );
	} );

	this.insert( "stasis", function stasis( ){
		return Static( blueprint );
	} );

	return this;
};

/*;
	@method-documentation:
		This will be used for multiple attachment of static properties.
	@end-method-documentation
*/
Static.prototype.bind = function bind( set ){
	/*;
		@meta-configuration:
			{
				"set:required": [
					Array,
					"object",
					"..."
				]
			}
		@end-meta-configuration
	*/

	if( falzy( this[ BLUEPRINT ] ) ){
		throw new Error( "cannot bind, blueprint empty" );
	}

	if( arid( arguments ) ){
		throw new Error( "invalid set" );
	}

	stagn.apply( null, [ this[ BLUEPRINT ] ].concat( raze( arguments ) ) );

	return this;
};

/*;
	@method-documentation:
		This will be used to attach single static property.
	@end-method-documentation
*/
Static.prototype.attach = function attach( property, value ){
	/*;
		@meta-configuration:
			{
				"property:required": [
					"number",
					"string",
					"symbol"
				],
				"value:required": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( this[ BLUEPRINT ] ) ){
		throw new Error( "cannot attach property, blueprint empty" );
	}

	if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
		throw new Error( "invalid property" );
	}

	harden( property, value, this[ BLUEPRINT ] );

	return this;
};

/*;
	@method-documentation:
		Attach static method to the blueprint with binding.
	@end-method-documentation
*/
Static.prototype.implement = function implement( name, method ){
	/*;
		@meta-configuration:
			{
				"name:required": "string"
				"method:required": "function"
			}
		@end-meta-configuration
	*/

	if( falzy( this[ BLUEPRINT ] ) ){
		throw new Error( "cannot implement method, blueprint empty" );
	}

	if( falzy( name ) || !protype( name, STRING ) ){
		throw new Error( "invalid method name" );
	}

	if( falzy( method ) || !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	harden( name, vound( method, this[ BLUEPRINT ] ), this[ BLUEPRINT ] );

	return this;
};

/*;
	@method-documentation:
		Insert prototype method.
	@end-method-documentation
*/
Static.prototype.insert = function insert( name, method ){
	/*;
		@meta-configuration:
			{
				"name:required": "string"
				"method:required": "function"
			}
		@end-meta-configuration
	*/

	if( falzy( this[ BLUEPRINT ] ) ){
		throw new Error( "cannot insert prototype method, blueprint empty" );
	}

	if( falzy( name ) || !protype( name, STRING ) ){
		throw new Error( "invalid method name" );
	}

	if( falzy( method ) || !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	this[ BLUEPRINT ].prototype[ name ] = method;

	return this;
};

/*;
	@method-documentation:
		Retrieve the blueprint from the static context.
	@end-method-documentation
*/
Static.prototype.eject = function eject( ){
	try{
		return this[ BLUEPRINT ];

	}finally{
		delete this[ BLUEPRINT ];
	}
};

module.exports = Static;
