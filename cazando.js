//obtener canvas
let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

//Crear una función graficarGato (sin parámetros) que dibuje un rectángulo centrado en el canvas. 
function graficarGato(){
    context.fillStyle = "blue";
    context.fillRect(250,250,25,25);
}