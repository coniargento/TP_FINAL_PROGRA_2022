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

//FOR PARA QUE RECORRA ESE ARRAY Y OBTENGAMOS UN BOTON CON CADA LETRA
for(i=0; i<letras.length; i++){

    teclado += "<button class= 'boton' onclick= 'mostrarletra(\""+letras[i]+"\")'>" + letras[i]+"</button>";
}

document.getElementById("botones").innerHTML = teclado;

    function mostrarletra(letras){

        alert(letras);
    }

//ARRAY QUE CONTIENE LAS 20 PALABRAS QUE TE PUEDEN TOCAR EN EL JUEGO
var palabras = ["Heurística", "Prototipo", "Research", "Patrones", "Funcionalidad", "Interfaz", "Benchmark", "Encuestas", "Arquetipos", "Interacción", "Contenido", "Usuario", "Experiencia", "Colores", "Hipótesis", "Tipografía", "Grilla", "Metodología", "Testeos", "Ética"];

// FUNCION SPAN <P> HTML //return retorna busca el elemento y lo devuelve

        function id ( str ) {
            return document.getElementById ( str );
        }

// REUTILIZO LA FUNCION DE ARRIBA ACA TAMB (ID)
    
//var btn_obtenerpalabra = document.getElementById('palabra');
var btn_obtenerpalabra = id ('palabra');

// FUNCION ASOCIADA A EVENTOS--> ONCLIC ONMOUSEOVER,ETC = ESCUCHADORES DE EVENTOS

btn_obtenerpalabra.addEventListener('click', cambiar );

console.log(btn_obtenerpalabra);

// FUNCION RANDOM PALABRAS 

function cambiar(cambio){

// propiedad para que el boton se toque una vez sola
//false activo  true inactivo
btn_obtenerpalabra.disabled = true;


    var parrafo =  id ('adivinar_palabra');

//genero espacios vacios 
    parrafo.innerHTML = ' '

    var cant_palabras = palabras.length;

// VARIABLE RANDOM --> C/NRO DEL 0 AL 20 (20 PALABRAS)

    var random = Math.floor(Math.random()*(20-0))+0;

// PALABRAS RANDOM DEL ARRAY 

    var palabras_2 = palabras [random];

//VARIABLE DICE CANT LETRAS DDE PALABRA

    var cant_letas = palabras_2.length;

    console.error(palabras_2);

// FOR PARA CREAR SPAN EN EL PARRAFO  // CREE UNA FUNCION ARRIBA
        for ( i = 0 ; i< cant_letas; i++){

            var span = document.createElement( 'span' );

// AÑADIMOS SPAN AL PARRAFO
            parrafo.appendChild(span);

        }
    console.info(span);
}