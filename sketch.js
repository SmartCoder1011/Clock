var hrs,mins,secs;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  hrs=hour();
  mins=minute();
  secs=second();
  console.log(hrs+":"+mins+":"+secs)
  secsAngle=map(secs,0,60,0,360);
  minsAngle=map(mins,0,60,0,360);
  hrsAngle=map(hrs%12,0,12,0,360);

  translate(200,200);

push();
  strokeWeight(7);
  stroke("red");
  rotate(secsAngle);
  line(0,0,100,0);
pop();
  
push();
  strokeWeight(7);
  stroke("blue");
  rotate(minsAngle);
  line(0,0,75,0)
pop();

push();
strokeWeight(7);
  stroke("green");
  rotate(hrsAngle);
  line(0,0,50,0)
  pop();
  drawSprites();


point(200,200);
strokeWeight(7);
noFill();
stroke("red");
arc(0,0,180,180,0,secsAngle);
stroke("blue");
arc(0,0,150,150,0,minsAngle);
stroke("green");
arc(0,0,100,100,0,hrsAngle);
  
}