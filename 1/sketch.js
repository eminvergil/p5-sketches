
let rows,cols,xoff,yoff;
let scl=60,v,r,index,inc=0.0002;

function setup() {
  // canvas
  background(255,15);
  createCanvas(600,600);
  // initial values
  cols = width/scl -0/scl;
  rows = height/scl -0/scl;
  xoff = 0;
  yoff = 0;

}

//control parameters
let aa = 4,bb = 255;

//for angle
let ang;
let tt;
function draw() {
  // background(255);
 // randomSeed(aa);
  tt = frameCount/60;
  for (let x = 0; x < cols; x+=1) 
  {
    for (let y = 0; y < rows; y+=1) 
    {
        // initial for particles
        index = (x + y * width) * aa;
        r = noise(xoff,yoff) * bb
        // TODO: sonra random yerine noise kullan map yada lerp ile
        ang = map(sin(tt/yoff + yoff*r*0.00001*x - xoff*y*0.01),-1,1,0,PI*2);
        v = p5.Vector.fromAngle(ang);
        xoff += inc + x*0.000001;
        yoff += inc*0.1 + y*0.00001;

        // xoff = map(xoff,0,1,0,0.25);
        // yoff = map(yoff,0,0.1,0,0.5);
        
        stroke(155,5);
        push();
        translate(x * scl , y * scl );
        rotate(v.heading());
        line(0,0,scl*2/3,0);
        pop();
    }
  }
}