function setup() {
  createCanvas(400, 400);
}

  let olhoX;
  let olhoY;

function draw() {
  background('pink');
  fill('rgb(230,152,230)');
  stroke(100);
  strokeWeight(4);
  circle(200, 200, 300);
  fill('white');
  circle (150, 150, 60);
  circle (250, 150, 60);
   fill('#8585EE');
  line (150, 270, 250, 235);
  triangle(200, 180, 170, 220, 220, 220);
  line(123,115,178,113);
  line(225,116,279,106);
  
  olhoX = map(mouseX, 1, 400, 160, 170);
  olhoY = map(mouseY, 1, 400, 140, 170);
  
  circle(olhoX, olhoY, 10);
  circle(olhoX + 100, olhoY, 10);
  if(mouseIsPressed) {
  console.log(mouseX, mouseY);
 }
}
