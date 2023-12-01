import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

let camera, scene, renderer;
init();
function init() {
	const container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 0.25, 20 );
	camera.position.set( 0, 0, -1 );

	scene = new THREE.Scene();

	new RGBELoader()
		.setPath( './src/' )
		.load( 'royal_esplanade_1k.hdr', function ( texture ) {

			texture.mapping = THREE.EquirectangularReflectionMapping;
			// scene.background = texture;
			scene.environment = texture;
			render();

			// model
			const loader = new GLTFLoader().setPath( './src/' );
			loader.load( 'apple-vision-pro.glb', async function ( gltf ) {
				const model = gltf.scene;
				await renderer.compileAsync( model, camera, scene );
				scene.add( model );
				render();
			} );
		} );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	container.appendChild( renderer.domElement );

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render );
	controls.minDistance = 1;
	controls.maxDistance = 5;
	controls.target.set( 0, 0, 0 );
	controls.update();

	window.addEventListener( 'resize', onWindowResize );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	render();
}

function render() {
	renderer.setClearColor(0x000000,0)
	renderer.render( scene, camera );
}
