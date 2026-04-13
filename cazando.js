let canvas=document.getElementById("areaDeJuego");
let ctx=canvas.getContext("2d");

// posiciones
let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

// tamaños
const anchoGato = 80;
const altoGato = 50;
const altoComida = 20;
const anchoComida = 20;  

// -------------------
// LIMPIAR

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

// -------------------
// DIBUJAR

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, anchoGato,altoGato, "#1900ff");
}

function graficarComida() {
    graficarRectangulo(comidaX,comidaY,anchoComida, altoComida, "#FF0808");
}

// -------------------
// INICIAR

function iniciarJuego() {

    gatoX = (canvas.width / 2) - (anchoGato / 2);
    gatoY = (canvas.height / 2) - (altoGato / 2);

    graficarGato();
    graficarComida();
}

// -------------------
// MOVIMIENTOS

function moverIzquierda(){
    gatoX -=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX +=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY -=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY +=10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

// -------------------
// COLISIÓN

function detectarColision(){

    if(
        gatoX < comidaX + anchoComida &&
        gatoX + anchoGato > comidaX &&
        gatoY < comidaY + altoComida &&
        gatoY + altoGato > comidaY
    ){
        alert("¡El gato comió la comida!");
    }
}

// -------------------
// UTILIDAD

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}