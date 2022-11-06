/*document.onkeydown = function (event){

    document.write(event);
} */

var cambio = function(){
    var nom = prompt("Ingrese su nombre");
    document.getElementById("nombre").innerHTML = "Bienvenido " + nom;
}

document.getElementById("jugar").onclick = cambio;

