let tablero = document.getElementById("ahorcado").getContext('2d');
let pantalla=document.getElementById("areaDibujo");
tablero.width = pantalla.offsetWidth;
tablero.height =  pantalla.offsetHeight;

let ancho =  1000;
let alto = 600;

console.log(ancho)
console.log(alto)
//mitades
let anchoMitad=ancho/2;
let altoMitad=alto/1.5;
//posiciones letras
let letrasPosicionY=alto-(alto/11);
let letrasPosicionX=altoMitad/2.4;
let moverX=anchoMitad+(anchoMitad/1.5)
//lineas
let posicionX=anchoMitad+(anchoMitad/7);
let posicionY=altoMitad-(altoMitad/1.2);
//soga
let posicionXavanzando=posicionX+(posicionX/4)
let poscionYavanzaCabeza=posicionY+(posicionY/1.2)
//poscionYavanzdo
//cabeza
var radio = 35;
var cabezaX = posicionXavanzando-radio;
var cabezaY = posicionY+(poscionYavanzaCabeza/1.7);
//cuerpo
var cuerpoX = posicionXavanzando;
var cuerpoY = cabezaY+8;
//tener en cuenta el valor
var posYcuerpo=cuerpoY+(cuerpoY/1.5)
//manos

//dibujarCanvas();
function start(){
    
}
function dibujarCanvas(){
    
    tablero.lineWidth=8;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    //opasidad
    tablero.globalAlpha=0.1;
    tablero.fillStyle="#061124" 
    tablero.strokeStyle="#8A387";
    tablero.fillRect(0,0,ancho,alto);
    tablero.stroke();
    tablero.closePath();


    medio("black",30);
    medio("#6E2C00",15);
    
    dibujarLinea( "black" ,10);
    dibujarLinea("#6E2C00" ,5);
    
}
function medio(color,anchura){
    tablero.globalAlpha=1;
   

    tablero.lineWidth=anchura;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle=color 
    tablero.strokeStyle=color;

    tablero.beginPath();
    //linea
   //tablero.moveTo(650 , 500);
   tablero.moveTo(anchoMitad , altoMitad);
   tablero.lineTo(moverX,altoMitad);

   tablero.stroke();
   tablero.closePath();

}


function dibujarLinea(color,letraanchura){
   

    tablero.beginPath();
    tablero.lineWidth=letraanchura;


    tablero.fillStyle=color;
    tablero.strokeStyle=color;
    
    let anchura= 600/palabraSecreta.length;
    for(let i=0; i< palabraSecreta.length; i++){
        tablero.moveTo(letrasPosicionX + (anchura*i), letrasPosicionY );
        tablero.lineTo(letrasPosicionX+50 + (anchura*i), letrasPosicionY );
        //
    }
  
    tablero.stroke();
    tablero.closePath();

  
}

function dibujarLetras(letra){
    tablero.beginPath();
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    tablero.fillStyle="white";
    tablero.strokeStyle="#00FF00";
    


    tablero.font = "50px Verdana";
    let anchura= 600/palabraSecreta.length;
    tablero.beginPath();
    for (let i = 0; i < palabraSecreta.length; i++) {
        if(palabraSecreta[i]===letra){
        tablero.fillText(palabraSecreta[i], letrasPosicionX + (anchura*i), letrasPosicionY-10);
        ganador[i]=palabraSecreta[i];
        //console.log(ganador[]);
      
        } 

    }





    Ganaste();
       tablero.fill();
    tablero.stroke();
    tablero.closePath();
    textoIntro();

    
}
function textoIntro(){
    
    tablero.beginPath();
    tablero.strokeStyle="#000000";
    tablero.fillStyle="#000000";
    tablero.font = "50px Verdana";
    tablero.fillText("Juego del Ahorcado", 50, 50);
    tablero.font="30px Arial";
    tablero.fillText('vidas \u{2764} :'+vidas,90,90);
    tablero.stroke();
    tablero.closePath();
}
function puntaje(){
    tablero.clearRect(210,62,20,30)
}



function lineaArriba(color, letraAnchura){
    tablero.lineWidth= letraAnchura;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle=color;
    
    tablero.beginPath();
    tablero.moveTo(posicionX , altoMitad-12);
    tablero.lineTo(posicionX , posicionY);
    tablero.stroke();
    tablero.closePath();

}

function lineaMedio(color, letraAnchura){
    tablero.beginPath();
    tablero.lineWidth= letraAnchura;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle=color


    tablero.beginPath();
    tablero.moveTo(posicionX , posicionY);
    tablero.lineTo(posicionXavanzando , posicionY);
    tablero.stroke();
    tablero.closePath();


   
}
function soga(color,letraAnchura){
    tablero.beginPath();
    tablero.lineWidth= letraAnchura;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.fillStyle=color;
    tablero.strokeStyle=color;

    tablero.moveTo(posicionXavanzando , posicionY);
    tablero.lineTo(posicionXavanzando , poscionYavanzaCabeza);
    tablero.stroke();
    tablero.closePath();

}


function cabeza(){
    let boca=cabezaX/2;
    let ojos=5;
    let finalCabeza=poscionYavanzaCabeza+(poscionYavanzaCabeza/4)
 
    tablero.lineWidth=4;
     
    tablero.fillStyle="#00FF00";
    tablero.strokeStyle="black"
    //cabeza
    tablero.beginPath();
    tablero.arc(cabezaX+3, cabezaY, radio, 0, 2 * Math.PI,true);//Circulo
    tablero.fill();
    tablero.stroke();

    tablero.fillStyle = "black";
    // ojo izquierdo
    tablero.moveTo(cabezaX,cabezaY);
    tablero.beginPath();
    tablero.arc(cabezaX-10,cabezaY-5,radio/6,0,Math.PI*2,true);  // ojo izquierdo
    tablero.fill();
    // ojo derecho
    tablero.moveTo(cabezaX,cabezaY);
    tablero.beginPath();
    tablero.arc(cabezaX+10,cabezaY-5,radio/6,0,Math.PI*2,true);  // ojo derecho
    tablero.fill();
    //boca
   
    tablero.beginPath();
    tablero.arc(cabezaX,cabezaY+15,radio/3,0,2*Math.PI,false);   // boca (dextrógiro)
    tablero.fill();
   
    tablero.beginPath();
    tablero.fillStyle="#00FF00";
    tablero.arc(cabezaX,cabezaY+20,radio/3,0,2*Math.PI);
	tablero.fill();
   

}



function cuerpo(color ,letraAnchura){
    //tablero.lineWidth= 10;
    //tablero.strokeStyle="#00FF00";
    //cuerpo
    tablero.lineWidth= letraAnchura;
    tablero.strokeStyle= color;
    tablero.moveTo(cuerpoX  , cuerpoY);
    tablero.lineTo(cuerpoX , posYcuerpo);
    tablero.stroke();
    tablero.closePath();
    //cuello
    tablero.beginPath();
    tablero.lineWidth= 15;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.fillStyle="#00FF00";
    tablero.strokeStyle="#000000";
    tablero.moveTo(cuerpoX , cuerpoY);
    tablero.lineTo(cuerpoX , cuerpoY+5);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.lineWidth= 10;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    //tablero.fillStyle="#00FF00";
    tablero.strokeStyle="#ece2c6";
    tablero.moveTo(cuerpoX , cuerpoY);
    tablero.lineTo(cuerpoX , cuerpoY+5);
    tablero.stroke();
    tablero.closePath();

}
function manoIzquierda(color ,letraAnchura){
    tablero.beginPath();
    tablero.lineWidth= letraAnchura;
    tablero.strokeStyle=color;
    var manoIzquierdaX=cuerpoX-(cuerpoX/32)
    var manoIzquierdaY=cuerpoY+(posYcuerpo/6)
    tablero.moveTo(cuerpoX-5 , manoIzquierdaY);
    tablero.lineTo(manoIzquierdaX, manoIzquierdaY+50);
    tablero.stroke();
    tablero.closePath();

}
function manoDerecha(color ,letraAnchura){
    tablero.beginPath();
    tablero.lineWidth= letraAnchura;
    tablero.strokeStyle=color;
    var manoIzquierdaX=cuerpoX+(cuerpoX/30)
    var manoIzquierdaY=cuerpoY+(posYcuerpo/6)
 
    tablero.moveTo(cuerpoX+5 , manoIzquierdaY);
    tablero.lineTo(manoIzquierdaX, manoIzquierdaY+50);
    tablero.stroke();
    tablero.closePath();

}

function piernasIzquierda(color ,letraAnchura){
    var manoIzquierdaY=posYcuerpo;
    var manoIzquierdaX=cuerpoX-2;
    var posYpiernas=manoIzquierdaY+(manoIzquierdaY/10)
    tablero.lineWidth= letraAnchura;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle=color;
    

    tablero.beginPath()

    tablero.moveTo(cuerpoX-5 , manoIzquierdaY+2);
    tablero.lineTo(cuerpoX-10, manoIzquierdaY+5);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath()

    tablero.moveTo(cuerpoX-10 , manoIzquierdaY+5);
    tablero.lineTo(manoIzquierdaX-15, manoIzquierdaY+60);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath()

    tablero.moveTo(manoIzquierdaX-15 , manoIzquierdaY+60);
    tablero.lineTo(manoIzquierdaX-25, manoIzquierdaY+68);
    tablero.stroke();
    tablero.closePath();
}
function piernasDerechas(color ,letraAnchura){
    var manoIzquierdaY=posYcuerpo;
    var manoIzquierdaX=cuerpoX+2
    
    tablero.lineWidth= letraAnchura;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle=color;

    tablero.beginPath()

    tablero.moveTo(cuerpoX+5 , manoIzquierdaY+2);
    tablero.lineTo(cuerpoX+10, manoIzquierdaY+5);
    tablero.stroke();
    tablero.closePath();


    tablero.beginPath()

    tablero.moveTo(cuerpoX+10 , manoIzquierdaY+5);
    tablero.lineTo(manoIzquierdaX+15, manoIzquierdaY+60);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath()

    tablero.moveTo(manoIzquierdaX+15 , manoIzquierdaY+60);
    tablero.lineTo(manoIzquierdaX+20, manoIzquierdaY+68);
    tablero.stroke();
    tablero.closePath();
}



