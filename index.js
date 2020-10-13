let mensaje= "Bienvenidos a mi sitio!";
alert(mensaje);

let avanzar = confirm ("¿Queres avanzar?");
let siguiente = document.querySelector(".siguiente");
if (avanzar == false) {
siguiente.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble."
} else if (avanzar == true) {
    siguiente.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!"
}

let nombre = prompt ("Ingresa tu nombre");
let saludar = document.querySelector(".ingresado");
saludar.innerHTML = "Bienvenido " + nombre;

let edad = prompt ("Ingrese su edad");
if (edad < 18){
    ingreso= alert("Phohibido continuar")
} else if (edad > 18){
    ingreso= alert("Puedes continuar navegando en el sitio");let oscuro = confirm("Desea ultilizar el modo oscuro?");

    let modo = document.querySelector(".mode");
if (oscuro == true){
    modo.style.backgroundColor = "dimgrey"; mode.style.backgroundColor = "white";
}
}
let diaDeSemana = ("Domingo");
if (diaDeSemana == "Domingo"){
    alert("Hoy es dia de descanso!");
}


