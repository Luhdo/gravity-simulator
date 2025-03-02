import "./style.css";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Initialize canvas size
function initCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
initCanvasSize();

window.addEventListener("resize", () => {
  initCanvasSize();
});

/** @type {GravityObject[]} */
const objects = [];
const G = 0.1; // Gravitational constant

// UI Elements
const densityInput = document.getElementById("density");
const sizeInput = document.getElementById("size");
const colorInput = document.getElementById("color");

class GravityObject {
  constructor(x, y, radius, mass) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.mass = mass;
    this.vx = 0;
    this.vy = 0;
    this.color = colorInput.value;
  }

  applyForce(fx, fy) {
    this.vx += fx / this.mass;
    this.vy += fy / this.mass;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }
}

function addObject(x, y) {
  const radius = parseFloat(sizeInput.value) || 10;
  const density = parseFloat(densityInput.value) || 1;
  const mass = density * radius * radius;
  objects.push(new GravityObject(x, y, radius, mass));
}

canvas.addEventListener("click", (event) => {
  event.preventDefault();
  addObject(event.clientX, event.clientY);
});

canvas.addEventListener("touchstart", (event) => {
  event.preventDefault();
  const touch = event.touches[0];
  addObject(touch.clientX, touch.clientY);
});

function applyGravity() {
  for (let i = 0; i < objects.length; i++) {
    for (let j = i + 1; j < objects.length; j++) {
      const objectA = objects[i];
      const objectB = objects[j];
      const dx = objectB.x - objectA.x;
      const dy = objectB.y - objectA.y;
      const distanceSq = dx * dx + dy * dy;
      const distance = Math.sqrt(distanceSq);
      const minDistance = objectA.radius + objectB.radius;

      if (distance > minDistance) {
        const force = (G * objectA.mass * objectB.mass) / distanceSq;
        const fx = force * (dx / distance);
        const fy = force * (dy / distance);
        objectA.applyForce(fx, fy);
        objectB.applyForce(-fx, -fy);
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  applyGravity();
  for (const obj of objects) {
    obj.update();
    obj.draw();
  }
  requestAnimationFrame(animate);
}
animate();
