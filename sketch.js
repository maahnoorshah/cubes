function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(204,229,255);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  box(100,100,100);(mouseX, mouseY, 20, 20);
	translate (100,100,-100)
	fill (255,178,102)
  box(100,100,100);(mouseX, mouseY, 20, 20);
	translate (100,100,-100)
	fill (255,204,153);
	box(100,100,100);(mouseX, mouseY, 20, 20);
	translate (100,100,-100)
	fill (255,153,51)
	box(100,100,100);(mouseX, mouseY, 20, 20);
	translate (100,100,-100)
	fill (255,229,204)

}
