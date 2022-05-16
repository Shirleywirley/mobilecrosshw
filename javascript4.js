var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;

var incrementor = 50;
var decrementor = 100

function Square() {
  ctx.fillStyle = "red";
  ctx.fillRect(x, 25, 24, 23);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Square();
  
   while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }

  x += incrementor;
  console.log(incrementor + "  incrementor value");


}

setInterval(drawBoxxy, 10);
