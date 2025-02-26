const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener('click', function (e) {
    // console.log(e);
    mouse.x = e.x;
    mouse.y = e.y;

    // console.log(mouse);
    // drawCircle();
});

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    // console.log(mouse);
    // drawCircle();
});

function drawCircle() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
    ctx.fill();
}








function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();

    requestAnimationFrame(animate);
}

animate();

