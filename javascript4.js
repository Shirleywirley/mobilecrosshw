var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.width = window.innerWidth;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;

function Square() {
  ctx.fillStyle = "#FFC300";
  ctx.fillRect(x, y, 200, 100);

  ctx.fillStyle = "#FF5733";
  ctx.fillRect(x, 1, 10, 100);

  ctx.fillStyle = "#C70039 ";
  ctx.fillRect(20, y, 360, 50);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);



  ctx.font = "25px Exo";
  ctx.fillStyle = "#C2CE8F";
  ctx.fillText("no", x, 250);
  ctx.fillText("Yehorat", 500, y);

 
  let something = "ohorat";
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
