/*document.onkeydown = function (event){

    document.write(event);
}*/

//FUNCIONES CAMBIO DE PANTALLA
function cambiodepantallas1(){
    document.querySelector("#pantalla1").style.display = "none";
    document.querySelector("#pantalla2").style.display = "block";
}
function cambiodepantallas2(){
    document.querySelector("#pantalla2").style.display = "block";
    document.querySelector("#pantalla1").style.display = "none";
}

/*
//VARIABLE PARA QUE AL EMPEZAR A JUGAR TE APAREZCA TU NOMBRE
var cambio = function(){

    var nom = document.getElementById("pedido").value;

    document.getElementById("jugar").innerHTML = "¿Estas listx para jugar " + nom + "?";
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


var palabras = ["Heurística", "Prototipo", "Research", "Patrones", "Funcionalidad", "Interfaz", "Benchmark", "Encuestas", "Arquetipos", "Interacción", "Contenido", "Usuario", "Experiencia", "Colores", "Hipótesis", "Tipografía", "Grilla", "Metodología", "Testeos", "Ética"];

