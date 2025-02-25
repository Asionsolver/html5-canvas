const canvas = document.getElementById("myCanvas");
// console.log(canvas);
const ctx = canvas.getContext("2d");
// console.log(ctx);
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);

ctx.fillStyle = "blue";      // Set fill color
ctx.fillRect(50, 50, 100, 100); // Draw a blue square
ctx.save();                  // Save the current state
ctx.fillStyle = "red";     // Change fill color
ctx.fillRect(70, 70, 50, 50);  // Draw a smaller green square
ctx.restore();               // Restore the original state (blue fill)
ctx.fillRect(90, 90, 30, 30);