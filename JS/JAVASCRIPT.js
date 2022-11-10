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

// PROBBANDO FUNCIONAMIENTO AHORCADO //

var btn_obtenerpalabra = document.getElementById('palabra');

btn_obtenerpalabra.addEventListener
