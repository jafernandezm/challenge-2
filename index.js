//selectores
let btnStart =document.getElementById('Iniciar-Juego');
let pantallaInicio =document.getElementById('inicio');
let pantallaJuego=document.querySelector(".juego");
let teclado=document.querySelector(".teclas");
let tecla=document.querySelector(".tecla");
let btnReiniciar=document.getElementById("reiniciar");
let btnVolver=document.getElementById("volver");
let pantallaAnadir=document.getElementById("tipo-anadir");
let btnAnadir=document.getElementById("anadir");
let palabraNueva=document.getElementById("texto-anadir")
//palabras
//let palabras=['ALURA','ORACLE','ONE','JAVASCRIPT','AHORCADO','MANZANA','PLATANO'];




let palabras={
    Frutas: [
        'MANZANA','PLATANO','DURAZNO','MELON','SANDIA'
    ],
    Musica:[
        'JAZZ','ROCK','CUMBIA'
    ],
    ObjetosCasa:[
        'CAMA','MESA','COCINA'
    ],
}


let palabraSecreta="";
let tecladoLetras="QWERTYUIOPASDFGHJKLZXCVBNM";
//jugador
let comprobarLetra;
let vidas=8;
let contador=0;
let ganador;
pantallaJuego.style.display = 'none';
let letrasIncorrectas="";
let botones=true;
let tipo=eleccionJuego();
//boton Juego
// evento teclado
var letra=function(event){
    //recoge la info de la teclas y tolowerCase transforma a miniscula las mayusculas
    
    var regex = new RegExp("^[a-zA-Z ]+$");

    let key= event.key.toUpperCase();
    if(key != null)
        if(regex.test(key))
            if(!letrasIncorrectas.includes(key)){
                letrasIncorrectas+=key;
                btnCorrectos(key);
            }

               
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
    Reiniciar();
});

btnVolver.addEventListener('click',()=>{
    pantallaJuego.style.display = 'none';
    pantallaInicio.style.display = 'flex';
});

btnAnadir.addEventListener('click', () => {
    Guardar();
    palabraNueva.value="";
});

escojerPalabraSecreta();
//palabra secreta
function escojerPalabraSecreta(){
    //let tipo=eleccionJuego();
    let palabra=palabras[tipo][Math.floor(Math.random()* palabras[tipo].length)];
    console.log(palabra);
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
    textoIntro();
   
   
}
//Reiniciar
function Reiniciar(){
    tablero.clearRect(0,0,ancho,alto)
    tablero.closePath();
    vidas=8;
    contador=0;
    letrasIncorrectas="";


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
    let letra = btnLetra.innerHTML;
    if(vidas>0){
        console.log(vidas)
        if(!palabraSecreta.includes(letra)){
            btnLetra.style. background= "#FF0000";//rojo
            contador++;
            
            vidas--;
            puntaje();
           
        }else{
            btnLetra.style. background= "#008000";
        }
        dibujarLetras(letra);
      
     
        switch(contador){
            case 1: lineaArriba();
                    lineaMedio();
            break;
            case 2: soga()
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
    perder();
}

function perder(){
    if(vidas===0){
    document.removeEventListener('keydown', letra);
    swal.fire("Perdiste la palabra era :"+palabraSecreta);
    }
}


//tomaremos el valor del select
function eleccionJuego(){
    
    //tomamos el valor de del tipo de juego
    var tipoJuego=document.getElementById("tipo").value;
    //alert(tipoJuego);
    //console.log(palabras1[tipoJuego][1]);

    //para devolver el texto de los selectores
    /*var tipoJuego=document.getElementById("tipo");
    var tiposelected=tipoJuego.options[tipoJuego.selectedIndex].text;
    alert(tiposelected);
    console.log(tiposelected);*/
    return tipoJuego;
}

function anadirPalabra(){
    pantallaInicio.style.display = 'none';
    pantallaAnadir.style.display="flex";
}
function btnCancelar(){
    pantallaInicio.style.display = 'flex';
    pantallaAnadir.style.display="none";
}
function Guardar(){
    let palabraN=palabraNueva.value;
    if(palabraN!= ""){
        if(palabraN.length > 3  && palabraN.length < 8){
            palabraN=palabraN.toUpperCase();
        palabras[tipo].push(palabraN);
        console.log(palabras[tipo]);
        swal.fire("Palabra Guardada");
        pantallaAnadir.style.display="none";
        pantallaInicio.style.display = 'flex';
        
        }else swal.fire("Minimo 3 palabras, Maximo 8");
    }else{
        swal.fire("No escribio ninguna palabra");
    }
    
}



