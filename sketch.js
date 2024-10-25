let jj;

function preload() {
  jj = loadImage("jj.png");
}
function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(220);
  image(jj, 0, 0, 1280, 720);
  
  noStroke()
  fill(174,173,205);
  triangle(583,149,672,118,677,165);//1
    fill(175,175,216);
  triangle(672,118,677,165,739,126);//2
    fill(156,156,195);
  triangle(677,165,739,126,758,231);//3
    fill(123,127,189);
  triangle(826,215,739,126,758,231);//4
    fill(129,132,188);
  triangle(826,215,818,267,758,231);//5
    fill(178,179,215);
  triangle(583,149,591,210,677,165);//6
   fill(182,182,219);
  triangle(654,230,591,210,677,165);//7
  fill(136,134,199);
  triangle(654,230,758,231,677,165);//8
   fill(104,103,165);
  triangle(654,230,758,231,757,271);//9
   fill(119,119,178);
  triangle(818,267,758,231,757,271);//10
  
  
}
