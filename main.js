// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// White Plane with Grid Lines
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2; // Face the camera
scene.add(plane);

const gridHelper = new THREE.GridHelper(10, 10, 0x0000ff, 0x808080); // Blue grid lines
scene.add(gridHelper);

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Polygon Class
class Polygon {
  constructor(vertices, color) {
    this.vertices = vertices;
    this.color = color;
    this.mesh = null;

    this.createMesh();
  }

  createMesh() {
    const shape = new THREE.Shape(this.vertices.map(v => new THREE.Vector2(v.x, v.z)));
    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshBasicMaterial({ color: this.color });
    this.mesh = new THREE.Mesh(geometry, material);

    const edges = new THREE.EdgesGeometry(geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }); // Red edge lines
    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);

    this.mesh.add(edgeLines);
    scene.add(this.mesh);
  }

  setPosition(x, z) {
    if (this.mesh) {
      this.mesh.position.set(x, 0, z);
    }
  }
}

// Variables
let vertices = [];
let polygons = [];
let activePolygon = null;
let replica = null;

// Mouse Interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(plane);

  if (intersects.length > 0) {
    const point = intersects[0].point;

    if (!activePolygon) {
      vertices.push(point); // Add vertex
    } else if (replica) {
      replica.setPosition(point.x, point.z); // Place replica
      replica = null;
    }
  }
});

// Complete Button
document.getElementById('completeBtn').addEventListener('click', () => {
  if (vertices.length >= 3) {
    const newPolygon = new Polygon(vertices, 0x00ff00); // Green polygon
    polygons.push(newPolygon);
    activePolygon = newPolygon;
    vertices = [];
  }
});

// Copy Button
document.getElementById('copyBtn').addEventListener('click', () => {
  if (activePolygon) {
    const replicaPolygon = new Polygon(activePolygon.vertices, 0xffff00); // Yellow replica
    replicaPolygon.setPosition(0, 0);
    polygons.push(replicaPolygon);
    replica = replicaPolygon;
  }
});

// Reset Button
document.getElementById('resetBtn').addEventListener('click', () => {
  // Remove all polygons from the scene
  polygons.forEach(polygon => {
    if (polygon.mesh) {
      scene.remove(polygon.mesh);
    }
  });

  // Clear all state variables
  polygons = [];
  vertices = [];
  activePolygon = null;
  replica = null;

  console.log("Reset complete.");
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  if (replica) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(plane);

    if (intersects.length > 0) {
      const point = intersects[0].point;
      replica.setPosition(point.x, point.z); // Move replica with cursor
    }
  }

  renderer.render(scene, camera);
}
animate();