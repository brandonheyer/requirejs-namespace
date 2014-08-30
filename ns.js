define( [ 'module' ], function ( module ) {
	'use strict';
	
	var ns, _namespaces = {};
	
	ns = {
		version: '0.1',
		
		/**
		 * Handle loading of the namespace. Creates object shells for imported modules
		 * to be stored in.
		 */	
		load: function( name, require, onload, config ) {
			var i, 
				currSpace = _namespaces,
				nameParts = name.split( '.' );
			
			// Traverse though the name parts and create the empty objects
			for ( i = 0; i < nameParts.length; i++ ) {
				currSpace = currSpace[ nameParts[ i ] ] = currSpace[ nameParts[ i ] ] || {};
			}
			
			// Load as the root namespace for faster includes
			// This will allow both [ 'ns!foo', 'ns!foo.bar.xyz' ] and [ 'ns!foo.bar.xyz' ]
			// style namespace module definitions
			onload( _namespaces[ nameParts[ 0 ] ] );
		}
	};

	return ns;
} );