const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Setup canvas to full window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Optional: Clear background when resizing
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
let angle = 0;
let radius = 0;
let fontSize = 16;
const angleStep = 10 * (Math.PI / 180); // 10 degrees
const radiusStep = 2.5;
const fontGrowth = 0.5;
const numWords = 300;
let index = 0;
const DRAW_EVERY_N_FRAMES = 3;
let frameCounter = 0;
const word = "Mal";
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
function drawWord(x, y, rotation, fontSize, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(word, 0, 0);
    ctx.restore();
}
function animateSpiralWords() {
    if (index >= numWords)
        return;
    frameCounter++;
    if (frameCounter >= DRAW_EVERY_N_FRAMES) {
        frameCounter = 0;
        const hue = index / numWords;
        const color = hslToHex(hue, 1, 0.5);
        // Recalculate center every frame
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        drawWord(x, y, angle, fontSize, color);
        angle += angleStep;
        radius += radiusStep;
        fontSize += fontGrowth;
        index += 1;
    }
    requestAnimationFrame(animateSpiralWords);
}
// Start with a black background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
animateSpiralWords();
