
const assert = require( "assert" );
const statis = require( "./statis.js" );

let Test = statis( function Test( ){ } )
	.attach( "hello", "world" )
	.attach( 123, "yeah" )
	.bind( {
		"test": "test123"
	} )
	.implement( "testing", function testing( ){
		return "test value";
	} )
	.eject( );

assert.equal( Test.hello, "world", "should have value 'world'" );

assert.equal( Test[ 123 ], "yeah", "should have value 'yeah'" );

assert.equal( Test.test, "test123", "should have value 'test123'" );

assert.equal( typeof Test.testing == "function", true, "should be true" );

assert.equal( Test.testing( ), "test value", "should have value 'test value'" );

console.log( "ok" );
