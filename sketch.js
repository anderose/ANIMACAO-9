let counter = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 204, 0);
  noFill();
  colorMode(RGB);
  stroke(255, 204, 255);
  background(0);
  
  d = height/2;
  
}

function draw() {

  background("rgba(0,0,0,0.01)");
  
  let y = (sin(counter) * 200) + height/2;
  let x = (cos(counter) * 200) + width/2;
  
  let y1 = (sin(counter) * 150) + height/2;
  let x1 = (cos(counter) * 150) + width/2;
  
  let y2 = (sin(counter) * 100) + height/2;
  let x2 = (cos(counter) * 100) + width/2;
  
  let y3 = (sin(counter) * 50) + height/2;
  let x3 = (cos(counter) * 50) + width/2;
  
  
  
  ellipse(x, y, 40, 40);
  
  ellipse(x1, y1, 40, 40);
  
  ellipse(x2, y2, 40, 40);
  
  ellipse(x3, y3, 40, 40);
  
  
  ellipseMode(CENTER);
  
  
 
  
  counter += 0.03;
  
}