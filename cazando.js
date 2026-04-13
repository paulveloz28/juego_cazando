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

// juego
let puntos = 0;

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

    // comida aleatoria desde el inicio
    comidaX = generarAleatorio(0,480);
    comidaY = generarAleatorio(0,480);

    puntos = 0;
    mostrarEnSpan("puntos", puntos);

    limpiarCanvas();
    graficarGato();
    graficarComida();
}

// -------------------
// MOVIMIENTOS

function moverIzquierda(){
    gatoX -=10;
    actualizar();
}

function moverDerecha(){
    gatoX +=10;
    actualizar();
}

function moverArriba(){
    gatoY -=10;
    actualizar();
}

function moverAbajo(){
    gatoY +=10;
    actualizar();
}

function actualizar(){
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

// -------------------
// COLISIÓN + PUNTOS

function detectarColision(){

    if(
        gatoX < comidaX + anchoComida &&
        gatoX + anchoGato > comidaX &&
        gatoY < comidaY + altoComida &&
        gatoY + altoGato > comidaY
    ){
        // sumar puntos
        puntos++;
        mostrarEnSpan("puntos", puntos);

        // mover comida a posición aleatoria
        comidaX = generarAleatorio(0,480);
        comidaY = generarAleatorio(0,480);
    }
}

// -------------------
// UTILIDAD

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}