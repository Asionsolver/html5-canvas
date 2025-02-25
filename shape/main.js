const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // ctx.fillStyle = 'white';
    // ctx.fillRect(10, 10, 50, 50);
});

// ctx.fillStyle = 'white';
// ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.stroke();