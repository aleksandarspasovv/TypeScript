const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let size = Math.min(window.innerWidth, window.innerHeight) * 0.8; // start BIG
const minSize = 5;
const sizeStep = 1;
let angle = 0;
const angleStep = 0.01;

function drawOctagon(x: number, y: number, radius: number, rotation: number) {
  const sides = 8;
  const step = (Math.PI * 2) / sides;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const px = Math.cos(i * step) * radius;
    const py = Math.sin(i * step) * radius;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = getRandomColor();
  ctx.fill();
  ctx.restore();
}

function getRandomColor(): string {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function animate() {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  drawOctagon(cx, cy, size, angle);
  size -= sizeStep;
  angle += angleStep;

  if (size < minSize) {
    size = Math.min(canvas.width, canvas.height) * 0.8;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  requestAnimationFrame(animate);
}

animate();
