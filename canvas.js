let tablero = document.getElementById("ahorcado").getContext('2d');
let ancho =document.getElementById("ahorcado").clientWidth;
let alto =document.getElementById("ahorcado").clientHeight;
//mitades
let anchoMitad=ancho/2;
let altoMitad=alto/1.5;
//posiciones letras
let letrasPosicionY=alto-(alto/12);
let letrasPosicionX=altoMitad/2.2;
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

function dibujarCanvas(){
    
    tablero.lineWidth=8;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    //opasidad
    tablero.globalAlpha=0.1;
    tablero.fillStyle="#061124" 
    tablero.strokeStyle="#8A387";
    tablero.fillRect(0,0,ancho,alto);
    tablero.beginPath();
     //linea
    //tablero.moveTo(650 , 500);
    tablero.moveTo(anchoMitad , altoMitad);
    tablero.lineTo(moverX,altoMitad);
    tablero.stroke();
    tablero.closePath();
    dibujarLinea();
    
}

function dibujarLinea(){
    tablero.globalAlpha=1;
    tablero.lineWidth=6;
    tablero.lineCap="round";
    tablero.lineJoin="round";
    //tablero.fillStyle="#F3F5F6";
    tablero.fillStyle="#8A387";
    tablero.strokeStyle="#00FF00";
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
    tablero.fillStyle="rgb(24, 243, 243)";
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



function lineaArriba(){
    tablero.beginPath();
    tablero.lineWidth= 20;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle="maroon"
    
    tablero.beginPath();
    tablero.lineWidth=12;
    tablero.moveTo(posicionX , altoMitad);
    tablero.lineTo(posicionX , posicionY);
    tablero.stroke();
    tablero.closePath();
}

function lineaMedio(){
    tablero.beginPath();
    tablero.lineWidth= 15;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle="maroon"


    tablero.beginPath();
    tablero.lineWidth=10;
    tablero.moveTo(posicionX , posicionY);
    tablero.lineTo(posicionXavanzando , posicionY);
    tablero.stroke();
    tablero.closePath();
}
function soga(){
    tablero.beginPath();
    tablero.lineWidth= 7;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.fillStyle="yellow";
    tablero.strokeStyle="yellow";

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



function cuerpo(){
	
    //cuerpo
    tablero.lineWidth= 10;
    tablero.strokeStyle="#00FF00";
    tablero.moveTo(cuerpoX  , cuerpoY);
    tablero.lineTo(cuerpoX , posYcuerpo);
    tablero.stroke();
    tablero.closePath();
    //cuello
    tablero.beginPath();
    tablero.lineWidth= 15;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.fillStyle="yellow";
    tablero.strokeStyle="yellow";
    tablero.moveTo(cuerpoX , cuerpoY);
    tablero.lineTo(cuerpoX , cuerpoY+5);
    tablero.stroke();
    tablero.closePath();

}
function manoIzquierda(){
    tablero.beginPath();
    tablero.lineWidth= 8;
    tablero.strokeStyle="#00FF00";
    var manoIzquierdaX=cuerpoX-(cuerpoX/30)
    var manoIzquierdaY=cuerpoY+(posYcuerpo/6)
    tablero.moveTo(cuerpoX , manoIzquierdaY);
    tablero.lineTo(manoIzquierdaX, manoIzquierdaY+50);
    tablero.stroke();
    tablero.closePath();

}
function manoDerecha(){
    tablero.beginPath();
    tablero.lineWidth= 8;
    tablero.strokeStyle="#00FF00";
    var manoIzquierdaX=cuerpoX+(cuerpoX/30)
    var manoIzquierdaY=cuerpoY+(posYcuerpo/6)
 
    tablero.moveTo(cuerpoX , manoIzquierdaY);
    tablero.lineTo(manoIzquierdaX, manoIzquierdaY+50);
    tablero.stroke();
    tablero.closePath();

}

function piernasIzquierda(){
    var manoIzquierdaY=posYcuerpo;
    var manoIzquierdaX=cuerpoX-2;
    var posYpiernas=manoIzquierdaY+(manoIzquierdaY/10)
    tablero.lineWidth= 8;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle="#00FF00";
    

    tablero.beginPath()

    tablero.moveTo(cuerpoX , manoIzquierdaY);
    tablero.lineTo(cuerpoX-5, manoIzquierdaY+5);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath()

    tablero.moveTo(cuerpoX-5 , manoIzquierdaY+5);
    tablero.lineTo(manoIzquierdaX-10, manoIzquierdaY+60);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath()

    tablero.moveTo(manoIzquierdaX-10 , manoIzquierdaY+60);
    tablero.lineTo(manoIzquierdaX-20, manoIzquierdaY+68);
    tablero.stroke();
    tablero.closePath();
}
function piernasDerechas(){
    var manoIzquierdaY=posYcuerpo;
    var manoIzquierdaX=cuerpoX+2
    
    tablero.lineWidth= 8;
    tablero.lineCap= "round";
    tablero.lineJoin="round";
    tablero.strokeStyle="#00FF00";

    tablero.beginPath()

    tablero.moveTo(cuerpoX , manoIzquierdaY);
    tablero.lineTo(cuerpoX+5, manoIzquierdaY+5);
    tablero.stroke();
    tablero.closePath();


    tablero.beginPath()

    tablero.moveTo(cuerpoX+5 , manoIzquierdaY+5);
    tablero.lineTo(manoIzquierdaX+10, manoIzquierdaY+60);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath()

    tablero.moveTo(manoIzquierdaX+10 , manoIzquierdaY+60);
    tablero.lineTo(manoIzquierdaX+20, manoIzquierdaY+68);
    tablero.stroke();
    tablero.closePath();
}



