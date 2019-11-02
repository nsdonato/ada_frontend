/*Ejercicio 2
Crear un programa para validar si un número es par o impar.
Con un prompt, solicitar que el usuario ingrese un número.
Si el número es par, mostrar un alerta que diga "El número es par".
Si el número es impar, mostrar un alerta que diga "El número es impar".
const numero = Number(prompt("Por favor ingresa un número"));

let esPar = (numero % 2) === 0;

if (esPar) {
     alert("El número es par");
}

if (!esPar) {
     alert("El número es impar");
}

/*Ejercicio 3
Crear un programa para validar si un usuario es mayor de edad.
Pedir al usuario que ingrese su edad con un prompt.
Si el usuario tiene 18 o más años, mostrar un alerta que diga "Ud. es mayor de edad".
En caso contrario, mostrar un alerta que diga "Ud. es menor de edad".

const edad = Number("Por favor ingrese su edad");

bEsMayor = edad > 18;

if (bEsMayor) {
     alert("Es mayor de edad");
} else {
     alert("No es mayor de edad");
}

/*
Ejercicio 4
Rehacer los ejercicios 1 y 2 utilizando el "else".
En el ejercicio 1, en caso de que los datos sean incorrectos, mostrar un alerta diciendo "Los datos no son correctos".
En el ejercicio 2, alterar el código para que sea un if/else en lugar de dos if.


// EJ1:
const usuario = prompt("Por favor indica tu nombre");
const contraseña = prompt("Por favor indica tu contraseña");

if (usuario === "AdaLove" && contraseña === "ada2019") {
     alert("Bienvenida, AdaLove");
} else {
     alert("Los datos no son correctos");
}

// EJ2:
const numero = Number(prompt("Por favor ingresa un número"));
let esPar = (numero % numero) === 0;

if (esPar) {
     alert("El número es par");
} else {
     alert("El número es impar");
}

/*
Ejercicio 5
Refactorizar los tres programas escritos hasta ahora utilizando el operador ternario


// EJ1:
const usuario = prompt("Por favor indica tu nombre");
const contraseña = prompt("Por favor indica tu contraseña");

usuario === "AdaLove" && contraseña === "ada2019" ? alert("Bienvenida, AdaLove") : alert("Los datos no son correctos");

// EJ2:
const numero = Number(prompt("Por favor ingresa un número"));
let esPar = (numero % numero) === 0;

esPar ? alert("El número es par") : alert("El número es impar");


/*
Ejercicio 6
Hacer un programa que salude al usuario dependiendo de la hora.
Con un prompt, pedirle al usuario que diga qué hora es.
Si la hora es mayor que 5 y menor a 12 entonces mostrar el alerta: "Buen día"
Si la hora es mayor o igual a 12 y menor a 20 entonces mostrar el alerta: "Buenas tardes"
En cualquier otro caso mostrar el mensaje "Buenas noches".
*/

/*
const hora = Number(prompt("Por favor ingrese que era es, sin minutos."));

if(hora > 5 && hora < 12) {
     alert("Buen día");
}else if (hora >= 12 && hora < 20) {
     alert("Buenas tardes");
} else{
     alert("Buenas noches");
}
*/

/*
Ejercicio 7
Hacer un programa que determine si un alumnó aprobó o no un examen.
Con un prompt, pedir que el usuario ingrese una nota del 0 al 10.
Si la nota es mayor o igual a 9 entonces mostrar un alerta: "La nota es excelente".
Si la nota es menor que 9 y mayor o igual que 6, mostrar el alerta "La nota es buena".
Si no, mostrar el alerta "El examen no está aprobado".
*/

const nota = Number(prompt("Ingrese una nota del 0 al 10"));

if (nota >= 9) {
     alert("La nota es excelente");
} else if (nota < 9 && nota >= 6) {
     alert("La nota es buena");
} else {
     alert("El examen no está aprobado");
}
