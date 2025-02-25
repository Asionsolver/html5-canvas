const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const mouse = {
    x: null,
    y: null,
};

canvas.addEventListener('click', function (e) {
    // console.log(e);
    mouse.x = e.x;
    mouse.y = e.y;
    // console.log(mouse);
    drawCircle();
});

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
    drawCircle();
});

function drawCircle() {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

