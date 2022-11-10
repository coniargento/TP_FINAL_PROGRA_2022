/*document.onkeydown = function (event){

    document.write(event);
}*/

//VARIABLE PARA QUE AL APRETAR EL BOTON A JUGAR TE APAREZCA TU NOMBRE
var cambio = function(){

    var nom = document.getElementById("pedido").value;

    document.getElementById("nombre").innerHTML = "¿Estas listx para jugar " + nom + "?";
}

document.getElementById("jugar").onclick = cambio;

//CAMBIO DE PANTALLA DE UNA SECCIÓN A OTRA DESDE UN SET TIME OUT

tiempo();
function imagen (){
    if(imagen1 == true){
        document.getElementById("imagen1").setAttribute("src", "img/2.jpg");
        imagen1 = false;
    } else{
        document.getElementById("imagen1").setAttribute("src", "img/1.jpg");
        imagen1 = true;
    }
    tiempo();
}

function tiempo(){ 
    var temp = setTimeout( imagen, 3000)
}

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

