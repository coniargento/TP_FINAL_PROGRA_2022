/*document.onkeydown = function (event){

    document.write(event);
}*/

//PARA QUE EL REQUIRED FUNCIONE TENGO QUE AGREGAR EL FORMULARIO UN SUBMIT
document.getElementById("formulario1").onsubmit = function(){

    //console.log("%holaaaaaa")
    //OBTENGO LA INFO CARGADA
    var usuario = document.getElementById("pedido").value;
    console.log(usuario);

    cambiodepantallas2();

    //OBLIGATORIO PARA QUE NO SE RECARGUE LA PANTALLA
    return false;
}

// VARIABLE GLOBAL DE PALABRAS RANDOM (PALABRAS_2)

    var palabras_2;

    var cant_errores = 0; // cuantas veces me equivoque

    var cant_aciertos = 0; // cuantas veces acerte

    var puntos = 0; // variable puntos usuario


//FUNCIONES CAMBIO DE PANTALLA
function cambiodepantallas1(){
    document.querySelector("#pantalla1").style.display = "none";
    document.querySelector("#pantalla2").style.display = "block";
}
function cambiodepantallas2(){
    document.querySelector("#pantalla2").style.display = "block";
    document.querySelector("#pantalla1").style.display = "none";
}


/*TODO:
//VARIABLE PARA QUE TE APAREZCA RU NOMBRE EN EL JUEGO
var cambio = function(){

    var nom = document.getElementById("pedido").value;

    document.getElementById("empezar").innerHTML = "¡Empecemos" + nom;
}*/

//DECLARAMOS LA VARIABLE DE TECLADO
var teclado = "";

//ARRAY LETRAS PARA HACER EL TECLADO
var letras = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//CLICK ADIVINAR LETRA
//FOR PARA QUE RECORRA ESE ARRAY Y OBTENGAMOS UN BOTON CON CADA LETRA
for(i=0; i<letras.length; i++){

    teclado += "<button class= 'boton' onclick= 'mostrarletra(\""+letras[i]+"\")'>" + letras[i]+"</button>";
}

document.getElementById("botones").innerHTML = teclado;

    function mostrarletra(letras){

    }

//ARRAY QUE CONTIENE LAS 20 PALABRAS QUE TE PUEDEN TOCAR EN EL JUEGO
var palabras = ["HEURISTICAS", "PROTOTIPO", "RESEARCH", "PATRONES", "FUNCIONALIDAD", "INTERFAZ", "BENCHMARK", "ENCUESTAS", "ARQUETIPOS", "INTERACCION", "CONTENIDO", "USUARIO", "EXPERIENCIA", "COLORES", "HIPOTESIS", "TIPOGRAFIA", "GRILLA", "METODOLOGIA", "TESTEOS", "ETICA"];

// FUNCION SPAN <P> HTML //return retorna busca el elemento y lo devuelve

        function id ( str ) {
            return document.getElementById ( str );
        }

// REUTILIZO LA FUNCION DE ARRIBA ACA TAMB (ID)
    
//var btn_obtenerpalabra = document.getElementById('palabra');
var btn_obtenerpalabra = id ('palabra');

var imagen = id('ahorcado');

// FUNCION ASOCIADA A EVENTOS--> ONCLIC ONMOUSEOVER,ETC = ESCUCHADORES DE EVENTOS
//CLICK EN INICIAR JUEGO!
btn_obtenerpalabra.addEventListener('click', cambiar );

console.log(btn_obtenerpalabra);

// FUNCION RANDOM PALABRAS 

function cambiar(cambio){

    imagen.src = '../TP_FINAL_PROGRA_2022/IMAGENES/img0.png';
// propiedad para que el boton se toque una vez sola
//false activo  true inactivo
btn_obtenerpalabra.disabled = true;

        cant_errores = 0; 
        cant_aciertos = 0; 

    var parrafo =  id ('adivinar_palabra');

//genero espacios vacios 
    parrafo.innerHTML = ' ';

    var cant_palabras = palabras.length;

// VARIABLE RANDOM --> C/NRO DEL 0 AL 20 (20 PALABRAS)

    var random = Math.floor(Math.random()*(20-0))+0;

// PALABRAS RANDOM DEL ARRAY 

     palabras_2 = palabras [random];

//VARIABLE DICE CANT LETRAS DDE PALABRA

    var cant_letas = palabras_2.length;

    console.error(palabras_2);

            for (i = 0; i< btn_botones.length; i++ ){

                btn_botones [ i ].disabled = false;

            }

// FOR PARA CREAR SPAN EN EL PARRAFO  // CREE UNA FUNCION ARRIBA
        for ( i = 0 ; i< cant_letas; i++){

            var span = document.createElement( 'span' );

// AÑADIMOS SPAN AL PARRAFO
            parrafo.appendChild(span);

            span.innerHTML = " __ ";
        }
//CLASSLIST PONE CLASES AL SPAN
        span.classList.add("espacios_span");
    
    // no puedo hacer q se vean los span 
           
    console.info(span);
}

// var botones letras teclado c/for

var btn_botones = document.querySelectorAll ("#botones button");

    for (i = 0; i< btn_botones.length; i++ ){

        btn_botones[ i ].addEventListener ('click', click_letras);

    }
// FUNCION CLICK LETRAS 

function click_letras (cambio) {

    var spans =  document.querySelectorAll ('#adivinar_palabra span');
// target = dice q elemento de html toque
    var button =  cambio.target;  

    button.disabled = true;

    var letra_teclado = button.innerHTML;

    //variables acerto letra

    var acerto = false;

    // recorro con un for la cadena de texto y con un if me fijo si la letra existe en essa palabra 
        for (i =0; i< palabras_2.length; i++){

            if (letra_teclado == palabras_2[i] ){
                // variable i = posicion de la letra en la palabra
                // se supone q coincide con el span creado
            
                spans[i].innerHTML = letra_teclado
            
            cant_aciertos++;

            //SUMARLE 5 PUNTOS SI ACIERTA UNA LETRA
            puntos = puntos + 5;

            puntos = id('puntos'); // SUMO 5PUNTOS X CADA LETRRA ACERTADA

            console.error(puntos);

                acerto = true;
            }
        }

            if ( acerto == false ){

                cant_errores++;

                var agregar_img = `../TP_FINAL_PROGRA_2022/IMAGENES/img${cant_errores}.png`;

                var imagen = id('ahorcado');

                imagen.src = agregar_img;
            
                //  "../"../TP_FINAL_PROGRA_2022/IMAGENES/cabeza.png"
            }

            // limite de errores = CAMBIO DE PANTALLA PERDISTE

                if ( cant_errores == 8 ) {

                    id ('perdiste').innerHTML = "PERDISTE, LA PALABRA ERA: " + palabras_2;
                    
                    game_over ();

                    function cambiodepantallas2(){
                        document.querySelector("#pantalla2").style.display = "none";
                        document.querySelector("#pantalla3").style.display = "block";
                    }
                    function cambiodepantallas3(){
                        document.querySelector("#pantalla3").style.display = "block";
                        document.querySelector("#pantalla2").style.display = "none";
                    }
                }
                    
            console.log ( " la letra " + letra_teclado + " en la palabra "  + palabras_2 + "¿existe?: " + acerto);
        }

// VARIABLE PARA QUE LOS PUNTOS INICIALICEN EN 0:
var puntos = 0;

// FUNCION PARA LOS PUNTOS:

function puntos_ahorcado(){
    var texto_puntos = "Tus puntos: " + puntos;
}






// FIN DEL JUEGO
            function game_over (){
                
                for (i = 0; i< btn_botones.length; i++ ){

                    btn_botones [ i ].disabled = true;

                }

                btn_obtenerpalabra.disabled = false;

            }

        game_over( );

// CONCATENAR NOMBRE DE USUARIO Y LOS PUNTOS //