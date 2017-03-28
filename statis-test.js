
const diatom = require( "diatom" );
const statis = require( "./statis.js" );

console.log( require( "util" ).inspect( statis( diatom( "Test" ) )
	.attach( "hello", "world" )
	.attach( 123, "yeah" )
	.bind( {
		"test": "test123"
	} )
	.eject( ), { "showHidden": true } ) );
