let jj;

function preload (){
  jj=(loadImage('jj.png'))
}
function setup() {
  createCanvas(1280, 720);
  
}

function draw() {
  background(220);
  image(jj,0,0,1280,720);
}
