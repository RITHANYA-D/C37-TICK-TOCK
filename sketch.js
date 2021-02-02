function setup() {

  createCanvas(1366,657);
  angleMode(DEGREES);

}

function draw() {
  
  background("black");

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);  
  
  push() 
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(800, 350, 600, 400);
  pop()

  push() 
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(600, 300, 600, 400);
  pop()

  push() 
  rotate(scAngle);
  stroke("lime");
  strokeWeight(7);
  line(500, 500, 600, 400);
  pop()


  drawSprites();

}