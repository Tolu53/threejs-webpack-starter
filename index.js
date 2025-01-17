var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

var geometry = new THREE.SphereGeometry(1, 40, 40);
var material = new THREE.MeshLambertMaterial({color: 0xF94A29});
var mesh = new THREE.Mesh(geometry, material);



scene.add(mesh);



var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(10,0,250);
scene.add(light);
var render = function(){
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render()


