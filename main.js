import "./style.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

canvas.addEventListener("click", (event) => {
  const radius = parseFloat(sizeInput.value) || 10;
  const density = parseFloat(densityInput.value) || 1;
  const mass = density * radius * radius;
  objects.push(new GravityObject(event.clientX, event.clientY, radius, mass));
});

function applyGravity() {
  for (let i = 0; i < objects.length; i++) {
    for (let j = i + 1; j < objects.length; j++) {
      const a = objects[i];
      const b = objects[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > a.radius + b.radius) {
        const force = (G * a.mass * b.mass) / (distance * distance);
        const fx = force * (dx / distance);
        const fy = force * (dy / distance);
        a.applyForce(fx, fy);
        b.applyForce(-fx, -fy);
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  applyGravity();
  objects.forEach((obj) => {
    obj.update();
    obj.draw();
  });
  requestAnimationFrame(animate);
}
animate();
