//setup runs once, draw runs over and over and over


function setup() {//function is box of code that does things that are connected
  createCanvas(400, 400);//(width of canvas, hight of canvas)
background(1, 40, 40);
}

function draw() {
  noStroke()
 fill('green') 
  circle(mouseX, mouseY, 20)// x position, y position and the diamiter

}