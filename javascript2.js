var borderBarx = 500;
var borderBary = 700;
var pageHeight = 1400;
var pageWidth = 2300;

var canvas = document.getElementById("creativeCoding");
var ctx = canvas.getContext("2d");
dpi= window.devicePixelRatio;

function fix_dpi() {
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    }
  };
  canvas.setAttribute("width", style.width() * dpi);
  canvas.setAttribute("height", style.height() * dpi);
}

function draw() {
  var canvas = document.getElementById("creativeCoding");
  if (canvas.getContext) {
    fix_dpi();
    var ctx = canvas.getContext("2d");
  
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(borderBarx, 0, 60, pageHeight);
    ctx.fillRect(0, borderBary, pageWidth, 50);
    ctx.fillRect(0, 50, borderBary, 80);
    ctx.fillRect(0, 400, pageWidth, 80);
    // Red
    ctx.fillStyle = "rgb(60, 100, 0)";
    ctx.fillRect(borderBarx + 60, 0, pageWidth - borderBarx, borderBary);
    // Blue
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(0, borderBary + 50, borderBarx, borderBary + pageHeight);
    // Black
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(1800, borderBary, 60, borderBary + pageHeight);
    // Black
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(1800, borderBary + 300, pageWidth - borderBary, 60);
   
    ctx.fillStyle = "rgb(75, 700, 0)";
    ctx.fillRect(1860, borderBary + 360, borderBarx, borderBary + pageHeight);
  }
}
