/*document.onkeydown = function (event){

    document.write(event);
}*/

var cambio = function(){
    var nom = document.getElementById("pedido").value;
    document.getElementById("nombre").innerHTML = "Bienvenido " + nom;
}

document.getElementById("jugar").onclick = cambio;


var palabras = ["Heurística", "Prototipo", "Research", "Patrones", "Funcionalidad", "Interfaz", "Benchmark", "Encuestas", "Arquetipos", "Interacción", "Contenido", "Usuario", "Experiencia", "Colores", "Hipótesis", "Tipografía", "Grilla", "Metodología", "Testeos", "Ética"];

