/* Ejercicio 1
Crear un programa que valide la identidad de un usuario
Pedir con un prompt el nombre de usuario
Pedir con un prompt la contraseña
Si el nombre de usuario es "AdaLove" y la contraseña es "ada2019", mostrar un alerta diciendo "Bienvenida, AdaLove".*/

const usuario = prompt("Por favor indica tu nombre");
const contraseña = prompt("Por favor indica tu contraseña");

if (usuario === "AdaLove" && contraseña === "ada2019") {
     alert("Bienvenida, AdaLove");
}