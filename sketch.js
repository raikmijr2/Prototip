let fondo, topo;
let topoX, topoY;
let tiempoAnterior = 0;
let intervalo = 2000; // 2 segundos

// Coordenadas de los agujeros (ajusta según la imagen)
let agujeros = [
  [180, 320],[400, 300], [620, 320], 
  [250, 480], [500, 500],[750, 480]
];

function preload() {
  topo = loadImage("assets/topo.png");
  fondo = loadImage("assets/fondo.jpg");
}
function setup() {
  createCanvas(736, 416);
  colorEllipse = color(0, 100, 255);
  image(topo, 10, 160);
  image(fondo, 0, 0, 736, 416);
  
}

function draw() {
  for (let i = 0; i <= agujeros.lenght; i++){
    circle(agujeros[i][0], agujeros[i][1], 90);
  }

  
}

function nuevoTopo() {
  let indice = int(random(agujeros.length)); // Elegir un agujero aleatorio
  topoX = agujeros[indice][0];
  topoY = agujeros[indice][1];
  image(topo, topoX, topoY, 160, 90);
}

function mousePressed() {
  // Verificar si el clic fue sobre el topo
  if (mostrarTopo && mouseX > topoX && mouseX < topoX + 80 && mouseY > topoY && mouseY < topoY + 80) {
    nuevoTopo(); // Mover el topo a otro agujero inmediatamente
  }
}