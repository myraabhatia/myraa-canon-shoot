

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
Engine = Matter.Engine
World = Matter.World
Bodies = Matter.Bodies

var engine,world,ground,canon1,canon2,canon3,canon4,canon5,ball1,ball2
ball3,ball4,ball5;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 engine = Engine.create();
 world = engine.world;
 
    canvas = createCanvas(1200,400);
 ground = new Ground(600,400,1200,50);
 canon6 = new Canon (200,100,50,20)
 canon5 = new Canon(200,100,20,30)
 canon4 = new Canon(200,200,50,40)
 canon = new Canon(200,200,100,30)
 canon2 = new Canon(200,200,100,20)
 canon3 = new Canon(200,200,100,20)
ball1 = new ball(800,50,20,20);
ball2 = new ball(750,50,20,20);
ball3 = new ball(900,50,20,20);
ball4 = new ball(650,50,20,20);
ball5 = new ball(500,50,20,20);
 
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
ground.display();
canon.display();
canon2.display();
canon3.display();
canon4.display();
canon5.display();
canon6.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}