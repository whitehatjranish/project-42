// calculating time using predefined func from p5.js
 

function setup() {
  createCanvas(800,800);
 
  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background("black"); 

  let h = hour();
  text('Current hour:\n' + h, 650, 750);
  translate(20,20);
 
  
  let m = minute();
  text('Current minute: \n' + m, 600, 700);
  translate(35,350);
  
   let s = second();
  text('Current second: \n' + s, 100, 300);
  translate(200,20);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,50,100,0);
  
  stroke(255,248,42);
  strokeWeight(7);
  line(0,25,100,0);

  stroke(15,60,255);
  strokeWeight(7);
  line(0,0,200,0);

  angleMode("DEGREES");

  scAngle = map(sc,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);

  arc(150, 155, 150, 200, 200, HALF_PI);



  drawSprites();
}