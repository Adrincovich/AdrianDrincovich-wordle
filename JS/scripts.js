


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

var estadoGanador = false;
var estadoPerdedor = false;

function bloqueoFieldsetGanarOPerder() {
    for (let indice = 0; indice < 6; indice++){
        let fieldset = document.getElementById(`fila${indice}`);
        if (estadoGanador || estadoPerdedor)
        fieldset.disabled=true;
    }
}

// function ValidaEspacioEnBlanco() {
//     let validarCaracter = document.querySelectorAll(`#fila${indice} input`);
//     if( validarCaracter[0].value == "" ||
//         validarCaracter[1].value == "" ||
//         validarCaracter[2].value == "" ||
//         validarCaracter[3].value == "" ||
//         validarCaracter[4].value == ""){
//         alert("pone algo");
//         console.log(validarCaracter)
//     }
// }


function inicio () {
    for (let indice = 0; indice < 6; indice++){
        let fieldset = document.getElementById(`fila${indice}`);
        fieldset.onkeydown = function (event){
            if(event.key === `Enter`){
                let validarCaracter = document.querySelectorAll(`#fila${indice} input`);
                if( validarCaracter[0].value == "" ||
                    validarCaracter[1].value == "" ||
                    validarCaracter[2].value == "" ||
                    validarCaracter[3].value == "" ||
                    validarCaracter[4].value == ""){
                    alert("pone algo");
                    console.log(validarCaracter)
                }else{
                    guardarRespuesta(indice);

                    let respuestaUsuario = respuestas[indice];
                    let respuestaUsuarioString = respuestaUsuario.join('');

                    if (respuestaUsuarioString == palabraGanadora){
                        estadoGanador = true;
                        showBtn();
                        document.getElementById("mensaje-resultado").innerHTML = "--- GANASTE!! --- ";
                        bloqueoFieldsetGanarOPerder()
                    }

                    if (indice == 0 && respuestaUsuarioString != palabraGanadora){
                        document.getElementById("fila1").disabled=false;
                        document.getElementById("fila0").disabled=true;
                        document.getElementById("f1c0").focus();
                    }
                    if (indice == 1 && respuestaUsuarioString != palabraGanadora){
                        document.getElementById("fila2").disabled=false;
                        document.getElementById("fila1").disabled=true;
                        document.getElementById("f2c0").focus();
                    }
                    if (indice == 2 && respuestaUsuarioString != palabraGanadora){
                        document.getElementById("fila3").disabled=false;
                        document.getElementById("fila2").disabled=true;
                        document.getElementById("f3c0").focus();
                    }
                    if (indice == 3 && respuestaUsuarioString != palabraGanadora){
                        document.getElementById("fila4").disabled=false;
                        document.getElementById("fila3").disabled=true;
                        document.getElementById("f4c0").focus();
                    }
                    if (indice == 4 && respuestaUsuarioString != palabraGanadora){
                        document.getElementById("fila5").disabled=false;
                        document.getElementById("fila4").disabled=true;
                        document.getElementById("f5c0").focus();
                    }
                    if (indice == 5  && respuestaUsuarioString != palabraGanadora){
                        estadoPerdedor = true;
                        showBtn();
                        document.getElementById("mensaje-resultado").innerHTML = `Game OVER! No quedan mas intentos. La palabra es: "${palabraGanadora}"`;
                        bloqueoFieldsetGanarOPerder()
                    }
                }
            }
            // for(let index = 0; index < 5; index++){
            //     let input = document.getElementById(`f${indice}c${index}`);
            //     input.onkeydown = function (event){
            //         if(event.key === `Backspace`){
            //             alert("hola")
            //         }
            //     }
            // }
        }
    }
}

function guardarRespuesta(indice){
    for (let iCol = 0; iCol < 5; iCol++){
        let input = document.getElementById(`f${indice}c${iCol}`).value;
        respuestas[indice].push(input);
    }
    revisarResultado(respuestas[indice], indice);
}

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

// Funcion para generar palabras randon

const palabrasDisponibles = ['mates', 'pasto','toser', 'pisar', 'marco', 'dardo', 'freir', 'truco', 'poste', 'cenar',
                            'aguja', 'audio', 'cueva', 'domar', 'grave', 'fumar', 'freir', 'furia', 'ganar', 'gasto',
                            'perro', 'pista', 'arroz', 'arena', 'mirar', 'salto', 'corte', 'mareo', 'multa', 'micro',
                            'risas', 'nubes', 'notar', 'plomo', 'pulpa', 'pesar', 'parar', 'porra', 'techo', 'titan',
                            'brisa', 'acero', 'birra', 'barra', 'marzo', 'abril', 'junio', 'julio', 'enero', 'asado']

function elegirPalabraAlAzar(palabrasDisponibles) {
    return palabrasDisponibles[Math.floor(Math.random() * palabrasDisponibles.length)]
}

var palabraGanadora = elegirPalabraAlAzar(palabrasDisponibles);

var arrayPalabraGanadora = palabraGanadora.split("")

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



function showBtn() {
    document.getElementById("volver-a-jugar-partida").style.display="inline-block";
    document.getElementById("guardar-partida").style.display="none";
    document.getElementById("mensaje-resultado").style.display="inline-block";
    document.getElementById("time").style.display="none";
    document.getElementById("timer").style.display="none";
}

window.onload = function(){

    //Funcion para ingresar nombre

    const nuevaPartida = document.getElementById("nueva-partida");
    const jugarPartida = document.getElementById("volver-a-jugar-partida");

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
            estadoGanador = false;
            inicio();
            pintarTablero();
            timer();
            hideBtn();
            document.getElementById("fila0").disabled=false;
            document.getElementById("f0c0").focus();
        }
    }

    nuevaPartida.addEventListener("click", function(){
        user();
    })

    jugarPartida.addEventListener("click", function(){
        location.reload();
    })

    // Nueva partida, esconder botones
    function hideBtn() {
        document.getElementById("nueva-partida").style.display="none";
        document.getElementById("cargar-partida").style.display="none";
        document.getElementById("guardar-partida").style.display="inline-block";
        document.getElementById("timer").style.display="block";
        document.getElementById("time").style.display="inline";
        }

    // function timer(startStop) {
    //     if (startStop){
    //         var fiveMinutes = 60 * 5,
    //         display = document.querySelector('#time');
    //         startTimer(fiveMinutes, display);
    //         }
    //     else {
    //         clearInterval(reloj);
    //     }
    // }

    function timer() {
        var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    }

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var reloj = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (estadoGanador || estadoPerdedor){
                clearInterval(reloj);
            }

            if (timer < 60 * 3){
                document.getElementById("time").style.color="rgb(226, 226, 85)";
            }

            if (timer < 60){
                document.getElementById("time").style.color="rgb(160, 29, 29)";
            }

            if (--timer < 0) {
                estadoPerdedor = true;
                timer = duration;
                showBtn();
                document.getElementById("mensaje-resultado").innerHTML = `Game OVER! Tiempo finalizado. La palabra es: ${palabraGanadora}`;
                bloqueoFieldsetGanarOPerder()
            }
        }, 1000);
    }
}



//<a href="javascript:popUp('ejemplo44.html')" class="btn btn-info" role="button">Ver ejemplo</a>