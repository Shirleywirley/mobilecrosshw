let canvas;
let ctx;

let incrementor = 600;
let decrementor = 500;
let whee = incrementor + 100;
let what = incrementor + 50;
let why = decrementor + 600;
let who = decrementor / 5;

window,onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};


function drawBoxxy() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = "blue";
  ctx.fillRect(decrementor--, 10, 100, 100);
  ctx.fillStyle = "green";
  ctx.fillRect(decrementor--, why--, 250, 250);
  ctx.fillStyle = "red";
  ctx.fillRect(400, decrementor--, incrementor++, what--);
  ctx.fillStyle = "magenta";
  ctx.fillRect(who++, decrementor++, 300, 250);
}
