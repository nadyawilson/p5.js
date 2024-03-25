//let circleX= 100;
let g,p,n,m

function setup() {
  createCanvas(400, 400);
  background(0,0,0);
  print("hello")
 
}

function draw() {
  //rectMode(CENTER)
  //fill(0,0,23,100)
  //stroke(200,60,234)
  //strokeWeight(2)
  //rect(200,170,70,80)
  //g=random(400)
  //p=random(400)
  n=random(mouseY)
  m=random(mouseX)
  noStroke()
  //this is another shape
  fill(n,m,50,50)//<change the alpha at the end to make the color fade 
  circle(mouseX,mouseY, 100)//you can put circleX in the middle statment
  //circle(g,p,24)
  //circleX=circleX+5;
  
}
//function mousePressed(){
  //background(0,0,0);
//}