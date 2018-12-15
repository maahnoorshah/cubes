var button;
var StepSize =  5 
var Counter = 100
var Sign =1; 
var running=true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	centerX=windowWidth/2;
	centerY=windowHeight/2;
	background(0,0,255);
	frameRate(1000);
	
}
function draw() {		
	if (running) {
		Counter = Counter + Sign * StepSize;
	}

fill(204,153,205);
noStroke();
ellipse(centerX,centerY,frameCount%750,frameCount%250);
fill(229,204,255);
ellipse(centerX,centerY,frameCount%200,frameCount%350)

}
