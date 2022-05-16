let canvas;
let ctx;

let incrementor = 450;
let decrementor = 500;
let you = incrementor + 800;
let are = incrementor + 250;
let a = decrementor + 365;
let nugget = decrementor / 90;

window,onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};


function drawBoxxy() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "yellow";
  ctx.fillRect(decrementor--, 10, 85, 30);
  ctx.fillStyle = "green";
  ctx.fillRect(decrementor--, a--, 450, 350);
  ctx.fillStyle = "blue";
  ctx.fillRect(400, decrementor--, incrementor++, are--);
  ctx.fillStyle = "red";
  ctx.fillRect(nugget++, decrementor++, 150, 250);
}
