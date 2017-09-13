"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "statis",
			"path": "statis/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/statis.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"statis": "statis"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const statis = require( "./statis.js" );
//: @end-server






//: @server:
describe( "statis", ( ) => {

	describe( "`statis with blueprint`", ( ) => {
		it( "should chain static attachment", ( ) => {
			let Test = statis( function Test( ){ } )
			.attach( "hello", "world" )
			.attach( 123, "yeah" )
			.bind( {
				"test": "test123"
			} )
			.implement( "testing", function testing( ){
				return "test value";
			} )
			.merge( [ 1, 2, 3 ] )
			.eject( );


			assert.equal( Test.hello, "world" );

			assert.equal( Test[ 123 ], "yeah" );

			assert.equal( Test.test, "test123" );

			assert.equal( typeof Test.testing, "function" );

			assert.equal( Test.testing( ), "test value" );

			assert.deepEqual( Test.slice( ), [ 1, 2, 3 ] );
		} );
	} );

} );
//: @end-server






