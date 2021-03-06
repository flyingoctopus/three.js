var Dice249UV = function () {

	var scope = this;

	THREE.Geometry.call(this);

	v( -1.000000, -1.000000, 1.000000 );
	v( -1.000000, 1.000000, 1.000000 );
	v( 1.000000, -1.000000, 1.000000 );
	v( 1.000000, 1.000000, 1.000000 );
	v( 1.000000, -1.000000, -1.000000 );
	v( 1.000000, 1.000000, -1.000000 );
	v( -1.000000, -1.000000, -1.000000 );
	v( -1.000000, 1.000000, -1.000000 );

	f4( 0, 2, 3, 1, -0.577349, -0.577349, 0.577349 );
	f4( 2, 4, 5, 3, 0.577349, -0.577349, 0.577349 );
	f4( 4, 6, 7, 5, 0.577349, -0.577349, -0.577349 );
	f4( 6, 0, 1, 7, -0.577349, -0.577349, -0.577349 );
	f4( 1, 3, 5, 7, -0.577349, 0.577349, 0.577349 );
	f4( 2, 0, 6, 4, 0.577349, -0.577349, 0.577349 );

	uv( 0.011675, 0.325550, 0.488325, 0.325550, 0.488325, 0.007784, 0.011675, 0.007784);
	uv( 0.511675, 0.325550, 0.988325, 0.325550, 0.988325, 0.007784, 0.511675, 0.007784);
	uv( 0.011675, 0.658883, 0.488325, 0.658883, 0.488325, 0.341117, 0.011675, 0.341117);
	uv( 0.511675, 0.658883, 0.988325, 0.658883, 0.988325, 0.341117, 0.511675, 0.341117);
	uv( 0.011675, 0.992216, 0.488325, 0.992216, 0.488325, 0.674450, 0.011675, 0.674450);
	uv( 0.988325, 0.674450, 0.511675, 0.674450, 0.511675, 0.992216, 0.988325, 0.992216);

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c, nx, ny, nz ) {

		scope.faces.push( new THREE.Face3( a, b, c, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	function f4( a, b, c, d, nx, ny, nz ) {

		scope.faces.push( new THREE.Face4( a, b, c, d, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	function uv( u1, v1, u2, v2, u3, v3, u4, v4 ) {

		var uv = [];
		uv.push( new THREE.UV( u1, v1 ) );
		uv.push( new THREE.UV( u2, v2 ) );
		uv.push( new THREE.UV( u3, v3 ) );
		if ( u4 && v4 ) uv.push( new THREE.UV( u4, v4 ) );
		scope.uvs.push( uv );
	}

}

Dice249UV.prototype = new THREE.Geometry();
Dice249UV.prototype.constructor = Dice249UV;