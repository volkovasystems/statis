
const diatom = require( "diatom" );
const statis = require( "./statis.js" );

var Test = statis( diatom( "Test" ) )
	.attach( "hello", "world" )
	.attach( 123, "yeah" )
	.bind( {
		"test": "test123"
	} )
	.implement( "testing", function testing( ){
		console.log( this );
	} )
	.eject( );
console.log( require( "util" ).inspect( Test, { "showHidden": true } ) );

console.log( Test.testing( ) );
