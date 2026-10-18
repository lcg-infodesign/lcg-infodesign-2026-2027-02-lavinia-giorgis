function preload() {
  // put preload code here
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  background(0); 
  noLoop();
  
  let numeroGlifi = 25;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = sqrt(numeroGlifi);
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numeroGlifi; g++) {
    mioGlifo(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2, dimRiga * 0.8);
    xCorrente = xCorrente + dimColonna;

    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

// occhio
function mioGlifo(_x, _y, _size) 
{
  push();
  translate(_x, _y);

  let altezzaEllisse = _size * 0.6; 

 stroke(0);
strokeWeight(1.5);

  // --- OCCHIO ---
  fill(255);
  stroke(0);
  ellipse(0, 0, _size, altezzaEllisse);

  //iride e pupilla
  let occhio = 0;
  if (occhio == 0) 
  {
    let traslox = random(-_size * 0.20, _size * 0.20);
    let trasloy = random(-altezzaEllisse * 0.13, altezzaEllisse * 0.13);

    push();
    translate(traslox, trasloy);
    
    // Iride coloree
    fill(random(3, 255), random(3, 255), random(3, 255));
    circle(0, 0, altezzaEllisse * 0.8);

    // Pupilla
    let dimPupilla = random(_size / 9, _size / 4);
    fill(0, 0, 0);
    circle(0, 0, dimPupilla);
    
    pop();
  }

  pop();
}