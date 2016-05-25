/*
CubeSea
*/

function CubeSea( gridSize, cubeSize, lit ) {
	var sea = new THREE.Object3D();

	new THREE.TextureLoader().load( 'textures/cube-sea.png', function( map ){

	var geo = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );
	var mat = new (!lit ? THREE.MeshBasicMaterial : THREE.MeshLambertMaterial)({
		color: 0xffffff,
		map: map
	});
	var _cube = new THREE.Mesh( geo, mat );

	for ( var x = 0; x < gridSize; ++x ) {
		for ( var y = 0; y < gridSize; ++y ) {
			for ( var z = 0; z < gridSize; ++z ) {
				var cube = _cube.clone();
				var position = new THREE.Vector3( x - gridSize/2, y - gridSize/2, z - gridSize/2 );
				if ( position.x == 0 && position.y == 0 && position.z == 0 )
					continue;
				cube.position.copy( position );
				sea.add( cube );
			}
		}
	}

	});

	return sea;
}


// Singule mesh
function CubeSea2( gridSize, cubeSize, lit ) {
	var sea = new THREE.Object3D();

	new THREE.TextureLoader().load( 'textures/cube-sea.png', function( map ){

	var _geo = new THREE.Geometry();
	var geo = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );

	for ( var x = 0; x < gridSize; ++x ) {
		for ( var y = 0; y < gridSize; ++y ) {
			for ( var z = 0; z < gridSize; ++z ) {
				var position = new THREE.Vector3( x - gridSize/2, y - gridSize/2, z - gridSize/2 );
				if ( position.x == 0 && position.y == 0 && position.z == 0 )
					continue;

				_geo.merge( geo, new THREE.Matrix4().makeTranslation( position.x, position.y, position.z ) );
			}
		}
	}

	var mat = new (!lit ? THREE.MeshBasicMaterial : THREE.MeshLambertMaterial)({
		color: 0xffffff,
		map: map
	});
	var _cubes = new THREE.Mesh( _geo, mat );

	sea.add( _cubes );

	});

	return sea;
}
