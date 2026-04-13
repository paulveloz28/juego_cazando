let canvas=document.getElementById("areaDeJuego");
let ctx=canvas.getContext("2d");

//posicion gato
let gatoX=0;
let gatoY=0;

//posicion comida
let comidaX=0;
let comidaY=0;

//tamaños
const anchoGato = 80;
const altoGato = 50;
const altoComida = 20;
const anchoComida = 20;  

// -------------------

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

// -------------------

function graficarGato() {
    let colorG= "#1900ff";
    graficarRectangulo(gatoX, gatoY, anchoGato,altoGato, colorG);
}

function graficarComida() {
    graficarRectangulo(comidaX,comidaY,anchoComida, altoComida, "#FF0808");
}

// -------------------

function iniciarJuego() {

    gatoX = (canvas.width / 2) - (anchoGato / 2);
    gatoY = (canvas.height / 2) - (altoGato / 2);

    graficarGato();
    graficarComida();
}

// -------------------

function moverIzquierda(){
    gatoX = gatoX - 10;

    limpiarCanvas();
    graficarGato();
    graficarComida();
}

// -------------------

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}