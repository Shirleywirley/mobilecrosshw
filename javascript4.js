var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;

function Square() {
  ctx.fillStyle = "#DAF7A6";
  ctx.fillRect(x, y, 300, 500);

  ctx.fillStyle = "#BB8FCE ";
  ctx.fillRect(x, 1, 10, 100);

  ctx.fillStyle = "#CE9B8F";
  ctx.fillRect(10, y, 100, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.font = "50px exo";
  ctx.fillStyle = "red";
  ctx.fillText("ohorat", x, 250);
  ctx.fillText("wee", 500, y);


  let something = "yehet";
  ctx.fillText(something, x, y);

  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);
