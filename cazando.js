let canvas=document.getElementById("areaDeJuego");
let ctx=canvas.getContext("2d");

let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

const anchoGato = 80;
const altoGato = 50;
const altoComida = 20;
const anchoComida = 20;  

let puntos = 0;
let tiempo = 15;//
let intervalo;

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, anchoGato,altoGato, "#1900ff");
}

function graficarComida() {
    graficarRectangulo(comidaX,comidaY,anchoComida, altoComida, "#FF0808");
}

function iniciarJuego() {

    gatoX = (canvas.width / 2) - (anchoGato / 2);
    gatoY = (canvas.height / 2) - (altoGato / 2);

    comidaX = generarAleatorio(0,480);
    comidaY = generarAleatorio(0,480);

    puntos = 0;
    tiempo = 15;//

    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);

    limpiarCanvas();
    graficarGato();
    graficarComida();

    intervalo = setInterval(restarTiempo,1500);
}

// TIEMPO

function restarTiempo(){
    tiempo--;
    mostrarEnSpan("tiempo", tiempo);
    if(tiempo == -1){//
        alert("GAME OVER");
        clearInterval(intervalo);
    }
}

// MOVIMIENTO

function moverIzquierda(){
    gatoX -=10;
    actualiza0();
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

// COLISIÓN

function detectarColision(){

    if(
        gatoX < comidaX + anchoComida &&
        gatoX + anchoGato > comidaX &&
        gatoY < comidaY + altoComida &&
        gatoY + altoGato > comidaY
    ){
        puntos++;
        mostrarEnSpan("puntos", puntos);

        comidaX = generarAleatorio(0,480);
        comidaY = generarAleatorio(0,480);
        if(puntos == 6){
            alert("GANASTE!");
            clearInterval(intervalo);
        }
    }
    tiempo=15;//
}

function reiniciarJuego(){
    clearInterval(intervalo);
    iniciarJuego();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}
