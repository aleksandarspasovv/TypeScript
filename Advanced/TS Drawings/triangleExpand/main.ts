const canvas2 = document.getElementById("canvas") as HTMLCanvasElement;
const ctx2 = canvas.getContext("2d")!;
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function resizeCanvas2() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

let size2 = 5;
const maxSize2 = Math.min(window.innerWidth, window.innerHeight) * 0.8;
const sizeIncrement2 = 1;

function drawTriangle2(x: number, y: number, s: number) {
  ctx.beginPath();
  ctx.moveTo(x, y - s / 2); // Top
  ctx.lineTo(x - s / 2, y + s / 2); // Bottom left
  ctx.lineTo(x + s / 2, y + s / 2); // Bottom right
  ctx.closePath();
  ctx.fillStyle = getRandomColor();
  ctx.fill();
}

function getRandomColor2(): string {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function animate2() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  drawTriangle2(centerX, centerY, size);
  size += sizeIncrement;

  if (size > maxSize) {
    size = 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  }

  requestAnimationFrame(animate2);
}

animate2();
