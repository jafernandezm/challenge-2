//selectores
let btnStart =document.getElementById('Iniciar-Juego');
let pantallaInicio =document.getElementById('inicio');
let pantallaJuego=document.querySelector(".juego");
let teclado=document.querySelector(".teclas");
let tecla=document.querySelector(".tecla");
let btnReiniciar=document.getElementById("reiniciar");

//palabras
let palabras=['ALURA','ORACLE','ONE','JAVASCRIPT','AHORCADO','MANZANA','PLATANO'];
let palabraSecreta="";
let tecladoLetras="QWERTYUIOPASDFGHJKLZXCVBNM";
//jugador
let comprobarLetra;
let vidas=8;
let contador=0;
let ganador;
pantallaJuego.style.display = 'none';

let botones=true;
//boton Juego
// evento teclado
var letra=function(event){
    //recoge la info de la teclas y tolowerCase transforma a miniscula las mayusculas
    
    var regex = new RegExp("^[a-zA-Z ]+$");

    let key= event.key.toUpperCase();
    if(key != null)
        if(regex.test(key))
        btnCorrectos(key);
//document.addEventListener('keydown', letra);
//document.removeEventListener('keydown', letra);
}
btnStart.addEventListener('click', () => {
    pantallaJuego.style.display = 'flex';
    pantallaInicio.style.display = 'none';
    

    iniciarJuego();
});
//reiniciar
btnReiniciar.addEventListener('click', () => {
    
    //tecla.style.background="#f0f0f0f0";
    Reiniciar();
});


//palabra secreta
function escojerPalabraSecreta(){
    let palabra=palabras[Math.floor(Math.random()* palabras.length)];
    palabraSecreta =palabra;
    ganador=new Array(palabraSecreta.length);
    console.log(palabraSecreta);
}
//Ganaste
function Ganaste(){
    var victoria=ganador.join('');
    if(victoria == palabraSecreta){
        swal.fire("Ganaste");
    }

}

//iniciar Juego
function iniciarJuego(){
    //funcionalidades
    document.addEventListener('keydown', letra);
    escojerPalabraSecreta();

    generarBtnletras();
    dibujarCanvas();
    dibujarLinea();
   
}
//Reiniciar
function Reiniciar(){
    tablero.clearRect(0,0,ancho,alto)
    vidas=8;
    contador=0;
  


    iniciarJuego();
    reiniciarTeclas();
    //tecla.style.background="#f0f0f0f0";
    //return true;
}

function reiniciarTeclas(){
    for(let i=0;i<tecladoLetras.length;i++){
        let btnLetra = document.getElementById("tecla"+tecladoLetras[i])
        btnLetra.style.background="#f0f0f0f0";
    }
}
//teclado
function generarBtnletras(){
    //botones=Reiniciar()
    if(botones){
        for(let i=0;i<tecladoLetras.length;i++){
            teclado.innerHTML += '<button onclick="verificar(this)" class="tecla" id="tecla'+tecladoLetras[i]+'">'+tecladoLetras[i]+'</button><br>'
        }
    }
    botones=false
}
//botones correctos
function btnCorrectos(key){
    let btnLetra = document.getElementById("tecla"+key);
    verificar(btnLetra);
}

//verificacion de letras precionadas
function verificar(btnLetra){
    perder();
    let letra = btnLetra.innerHTML;
    if(vidas>0){
        if(!palabraSecreta.includes(letra)){
            btnLetra.style. background= "#FF0000";//rojo
            contador++;
            puntaje();
            vidas--;
           
        }else{
            btnLetra.style. background= "#008000";
        }
        dibujarLetras(letra);
        console.log(vidas)
        switch(contador){
            case 1: lineaArriba();
            lineaMedio();
            break;
            case 2: 
            soga()
            break;
            case 3: cabeza();
            break;  
            case 4: cuerpo();
            break;
            case 5: manoIzquierda();
            break;
            case 6: manoDerecha()
            break;
            case 7: piernasIzquierda();
            break;
            case 8: piernasDerechas()
            break;
        }
    }
}

function perder(){
    if(vidas==0){
    document.removeEventListener('keydown', letra);
    swal.fire("Perdiste");
    }
}











