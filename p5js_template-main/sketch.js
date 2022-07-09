
var ball = {
  x : 20,
  y: 30,
  r:30,
  velocityY : 3,
  velocityX : 5,
  color : ["blue","red","green","purpel"]
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[1]);
  ball.x = ball.x + 5;
}