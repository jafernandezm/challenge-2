//selectores
let tablero = document.getElementById("forca").getContext('2d');
let ancho =document.getElementById("forca").clientWidth;
let alto =document.getElementById("forca").clientHeight;

let teclado=document.querySelector(".teclas");

let palabras=['ALURA','ORACLE','ONE','JAVASCRIPT'];
let palabraSecreta="";
let tecladoLetras="QWERTYUIOPASDFGHJKLZXCVBNM";
//palabra secreta

function escojerPalabraSecreta(){
    let palabra=palabras[Math.floor(Math.random()* palabras.length)];
    palabraSecreta =palabra;
}


//iniciar Juego
function iniciarJuego(){
    document.getElementById('Iniciar-Juego').style.display = 'none';
    escojerPalabraSecreta();
    //lineas
    dibujarCanvas()
    dibujarLinea()
    lineaArriba()
    lineaMedio()
    document.getElementById("forca").style.display = 'flex';

    document.addEventListener('keydown', letra);

    generar_letras();
}


var letra=function(event){
    //recoge la info de la teclas y tolowerCase transforma a miniscula las mayusculas
    let key= event.key.toLowerCase();
    coloresBoton(key);
//document.addEventListener('keydown', letra);
//document.removeEventListener('keydown', letra);
}






function generar_letras(){
    for(let i=0;i<tecladoLetras.length;i++){
        teclado.innerHTML += '<button onclick="verificar(this)" class="tecla" id="tecla'+tecladoLetras[i]+'">'+tecladoLetras[i]+'</button><br>'
    }

}

function verificar(boton){
    let btnCompleto=boton.innerHTML;
    if(!palabraSecreta.includes(btnCompleto)){
        boton.style.background="#cf1500";
        console.log("aqui")
    }
    else{
        boton.style.background="#8f9044";
    }
    verificarLetras(btnCompleto);
}

function coloresBoton(letra){
    let boton=document.getElementById("tecla"+letra);
    verificar(boton);
}

function verificarLetras(btnCompleto,evento){
    
}

function reiniciarJuego(){};









    //lineas DIBUJAR COSAS
    
  
    
  
    /*dibujarLinea();
    lineaArriba();
    lineaMedio();
    cabeza();
    cuerpo();
    manoIzquierda();
    manoDerecha()
    piernasIzquierda();
    piernasDerechas()
*/