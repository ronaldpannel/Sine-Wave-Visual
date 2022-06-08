/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;
let r = 300;
let increment = 0.1

function drawCircle() {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
  ctx.stroke();
}

function drawMover() {
  // ctx.fillStyle = "yellow";
  // ctx.lineWidth = 2;
  // ctx.beginPath();
  // ctx.arc(x + canvas.width / 2, y + canvas.height / 2, 10, 0, Math.PI * 2);
  // ctx.fill();

  ctx.beginPath();
  for (let a = 0 -1; a < Math.PI * 2; a += increment) {
    let x = r * Math.cos(a);
    let y = r * Math.sin(a);
    ctx.strokeStyle = "white";
    ctx.arc(x + canvas.width/2, y + canvas.height/2, 2, 0, Math.PI * 2)
    ctx.stroke()

    increment += 0.01
    a += 0.09


  }

  // angle += 0.06;
  // r -= Math.random() * 1 - 0.2;
}

function animate() {
//ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  //drawCircle();
  drawMover();

  //.log(angle);

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight
  animate()
  
})
