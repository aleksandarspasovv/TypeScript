const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
resizeCanvas();
function resizeCanvas() {
    canvas.width = 800;
    canvas.height = 800;
}
let size = 20;
let angle = 0;
const angleStep = 10 * (Math.PI / 180);
const numShapes = 300;
let index = 0;
const DRAW_EVERY_N_FRAMES = 10; // ← Slower draw rate (higher = slower)
let frameCounter = 0;
function hslToHex(h, s, l) {
    h = h % 1;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => {
        const k = (n + h * 12) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color);
    };
    return `#${[f(0), f(8), f(4)].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}
function drawOctagon(cx, cy, radius, rotation, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const a = (Math.PI * 2 / 8) * i;
        const x = Math.cos(a) * radius;
        const y = Math.sin(a) * radius;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
}
function animateSpiral() {
    if (index >= numShapes)
        return;
    frameCounter++;
    if (frameCounter >= DRAW_EVERY_N_FRAMES) {
        frameCounter = 0;
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const hue = index / numShapes;
        const color = hslToHex(hue, 1, 0.5);
        drawOctagon(cx, cy, size, angle, color);
        size += 1;
        angle += angleStep;
        index += 1;
    }
    requestAnimationFrame(animateSpiral);
}
// Clear background and start
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
animateSpiral();
