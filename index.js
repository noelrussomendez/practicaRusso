//bienvenida//

alert ("¡Bienvenidos a mi sitio!");

//continuar//

let confirmacion = confirm ("¿Esta seguro que desea continuar?");
termina = document.querySelector(".siguiente");
if (confirmacion == false) {termina.innerHTML = "Lamentamos que no querias continuar tu visita por este sitio increible."}

else if (confirmacion == true) {termina.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!";

//nombre//

nombre = prompt ("Ingrese su nombre de usuario");  
console.log(nombre);
saludo = document.querySelector(".ingresado");
saludo.innerHTML = "Bienvendido " + nombre;

//edad//

edad = prompt("Porfavor, ingrese su edad");
 if (edad>= 18){acceso= alert("Permitido su acceso");oscuro = confirm ("¿Desea utilizar el modo oscuro?")
cuerpo = document.querySelector(".mode");}
else if (edad <18){acceso= alert("Prohibido continuar");
termina.style.color="white"; saludo.style.color="white";
}
if (oscuro == true) {cuerpo.style.backgroundColor = "dimgray"; cuerpo.style.color = "white";}
 


//dia de semana//

diaDeSemana = ("Domingo")
if (diaDeSemana = "Domingo"){alert("¡Hoy es día de descanso!")} 
}

