/*
CubeSea
*/

function CubeSea(gridSize, cubeSize) {
	var map = new THREE.TextureLoader().load( 'textures/cube-sea.png' );

	var sea = new THREE.Object3D();

	var geo = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );
	var mat = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		map: map
	});
	var _cube = new THREE.Mesh( geo, mat );

	for ( var x = 0; x < gridSize; ++x ) {
		for ( var y = 0; y < gridSize; ++y ) {
			for ( var z = 0; z < gridSize; ++z ) {
				if ( x == 0 && y == 0 && z == 0 )
					continue;
				var cube = _cube.clone();
				cube.position.set( x - gridSize/2, y - gridSize/2, z - gridSize/2 );
				sea.add( cube );
			}
		}
	}

	return sea;
}
