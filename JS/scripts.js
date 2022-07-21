
/*
vamos a crear 2 funciones cuando se abre el navegador
inicio();
pintarTablero();

*/


//matriz colores del tablero

var colorTablero = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

// necesitamos variable colores:

var colores = {
    VERDE: 1,
    AMARILLO: 2,
    GRIS: 3,
    BLANCO: 0
}

function pintarTablero(){
    for (let iFila = 0; iFila < 6; iFila++) {
        for (let iCol=0; iCol<5; iCol++){
            let input = document.getElementById(`f${iFila}c${iCol}`)
            switch(colorTablero[iFila][iCol]){
                case colores.VERDE:
                    input.classList.add("verde");
                    break;
                case colores.AMARILLO:
                    input.classList.add("amarillo");
                    break;
                case colores.GRIS:
                    input.classList.add("gris");
                    break;
                case colores.BLANCO:
                    input.classList.add("blanco");
                    break;
            }
        }
    }
}


var respuestas = [
    [],
    [],
    [],
    [],
    [],
    [],
]

function inicio () {
    for (let indice = 0; indice < 6; indice++){
        let fieldset = document.getElementById(`fila${indice}`);
        fieldset.onkeydown = function (event){
            if(event.key === `Enter`){
                guardarRespuesta(indice)
            }
        }
    }
}


function guardarRespuesta(indice){
    for (let iCol = 0; iCol < 5; iCol++){
        let input = document.getElementById(`f${indice}c${iCol}`).value;
        respuestas[indice].push(input);
    }
    revisarResultado(respuestas[indice], indice);
    console.log(respuestas[indice])
}

// Funcion para generar palabras randon

const palabrasDisponibles = ['mates', 'pasto','toser', 'pisar', 'marco', 'dardo', 'freir', 'truco', 'poste', 'cenar',
                            'aguja', 'audio', 'cueva', 'domar', 'grave', 'fumar', 'freir', 'furia', 'ganar', 'gasto',
                            'perro', 'pista', 'arroz', 'arena', 'mirar', 'salto', 'corte', 'mareo', 'multa', 'micro',
                            'risas', 'nubes', 'notar', 'plomo', 'pulpa', 'pesar', 'parar', 'porra', 'techo', 'titan',
                            'brisa', 'acero', 'birra', 'barra', 'marzo', 'abril', 'junio', 'julio', 'enero', 'asado']

function elegirPalabraAlAzar(palabrasDisponibles) {
    return palabrasDisponibles[Math.floor(Math.random() * palabrasDisponibles.length)]
}

var palabraGanadora = elegirPalabraAlAzar(palabrasDisponibles)


var arrayPalabraGanadora = palabraGanadora.split("")


function revisarResultado(respuesta, indice){
    respuesta.forEach(function(elemento, index){
        if(elemento === arrayPalabraGanadora[index]){
            colorTablero[indice][index] = colores.VERDE;
        }
        else if(arrayPalabraGanadora.includes(elemento)){
            colorTablero[indice][index] = colores.AMARILLO;
        }
        else if(!arrayPalabraGanadora.includes(elemento)){
            colorTablero[indice][index] = colores.GRIS;
        }
    })
    pintarTablero();
}


// salto de input

function tabular(obj, tam) {
    let frm = obj.form;
    let largo = obj.value.length;
        if (largo == tam) {
            for(i=0;i<frm.elements.length;i++) {
                if(frm.elements[i]==obj) {
                if (i==frm.elements.length-1) { i=-1; }
            break;
        }
    }

    frm.elements[i+1].focus();
    return false;

    }
    }


    window.onload = function(){

    //Funcion para ingresar nombre

    const usuario = document.getElementById("nueva-partida");

    function user() {
        let player = {
          name: null
        }
        player.name = prompt("Ingrese su nombre para jugar:");
        if (!player.name) {
            alert("Debe ingresar un nombre para jugar.");
            return;
        } else {
            alert("Muchas gracias, el juego ha comenzado " + player.name + "!");
            inicio();
            pintarTablero();
            timer();
            hideBtn();
        }
    }

    usuario.addEventListener("click", function(){
        user();
    })

    // Nueva partida, esconder botones
    function hideBtn() {
        document.getElementById("nueva-partida").style.display="none";
        document.getElementById("timer").style.display="block";
        document.getElementById("time").style.display="inline";

        }

       function timer() {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
       }

       function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
}



