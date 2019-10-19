// EJERCICIOS DEL 27 AL 32
//https://github.com/Ada-IT/bootcamp-frontend/tree/master/03_javascript/operadores/ejercicios
/*  
----------------------------------- EJERCICIO 27 ------------------------------------------------
Declarar 2 variables con los nombres numero1 y numero2
Asignarle a cada variable un valor del tipo number
Para cada operación mostrar el mensaje de la siguiente forma:
Ejemplos: sumo 2 + 3 y el resultado es 5 (donde 2 y 3 son los valores de las variables y 5 es el resultado de la operación)
Mostrar en consola el resultado de la suma de las dos variables
Mostrar en consola el resultado de la resta de las dos variables
Mostrar en consola el resultado de la multiplicación de las dos variables
Mostrar en consola el resultado de la división de las dos variables
Mostrar en consola el resultado del resto de las dos variables */
console.log("Ejercicio 27: ");
const numero1 = 2;
const numero2 = 3;
console.log(`Sumo ${numero1} + ${numero2} y el resultado es: ` + (numero1 + numero2));
console.log(`Resto ${numero1} - ${numero2} y el resultado es: ` + (numero1 - numero2));
console.log(`Multiplico ${numero1} * ${numero2} y el resultado es: ` + (numero1 * numero2));
console.log(`Divido ${numero1} / ${numero2} y el resultado es: ` + (numero1 / numero2));
console.log(`Modulo de ${numero1} % ${numero2} y el resultado es: ` + (numero1 % numero2));
console.log("--------------------------------------------------------------------------------");
/*
---------------------------------- EJERCICIO 28 ------------------------------------------------
Declarar la variable numero y asignar el valor 9
Mostrar en consola la tabla del 9 de 1 a 10 usando la variable numero
*/
console.log("Ejercicio 28: ");
const numero = 9;
console.log(`${numero} * 1 = ` + numero * 1);
console.log(`${numero} * 2 = ` + numero * 2);
console.log(`${numero} * 3 = ` + numero * 3);
console.log(`${numero} * 4 = ` + numero * 4);
console.log(`${numero} * 5 = ` + numero * 5);
console.log(`${numero} * 6 = ` + numero * 6);
console.log(`${numero} * 7 = ` + numero * 7);
console.log(`${numero} * 8 = ` + numero * 8);
console.log(`${numero} * 9 = ` + numero * 9);
console.log(`${numero} * 10 = ` + numero * 10);
console.log("--------------------------------------------------------------------------------");
/*
---------------------------------- EJERCICIO 29 ------------------------------------------------
Calcular y mostrar en consola el perímetro de un cuadrado (el perímetro es simplemente cuatro veces la longitud del lado)
La longitud del lado es de 10
*/
console.log("Ejercicio 29: ");
console.log("El perimetro de un cuadrado (longitud de lado = 10) es: " + (4 * 10));
console.log("--------------------------------------------------------------------------------");
/*
---------------------------------- EJERCICIO 30 ------------------------------------------------
Calcular y mostrar en consola el área de un cuadrado (lado al cuadrado)
La longitud del lado es de 5
*/
console.log("Ejercicio 29: ");
console.log("Calcular área de un cuadrado. longitud de lado = 5). Resultado: " + (5 * 5));
console.log("--------------------------------------------------------------------------------");
/*
---------------------------------- EJERCICIO 31 ------------------------------------------------
Calcular y mostrar en consola el perímetro de un triangulo (sumar los lados)
El lado 1 es de 10
El lado 2 es de 20
El lado 3 es de 5
*/
const lado1 = 20;
const lado2 = 20;
const lado3 = 5;
console.log("Ejercicio 31: ");
console.log(`Calcular perímetro de un triangulo.
lado 1 = ${lado1}, 
lado 2 = ${lado2},
lado 3 = ${lado3}. 
Resultado: ` + (lado1 + lado2 + lado3));
console.log("--------------------------------------------------------------------------------");
/*
--------------------------------- EJERCICIO 32 ------------------------------------------------
Declarar la variable altura y asignar el valor 10
Declarar la variable base y asignar el valor 4
Mostrar en consola el cálculo del perímetro (suma de los lados) y el área (base por altura).
*/
console.log("Ejercicio 32: ");
const altura = 10;
const base = 4;
console.log(`Cálculo de perímetro. 
Base: ${base}. 
Altura: ${altura}. 
Resultado: ` + (base * altura));
console.log("--------------------------------------------------------------------------------");
/*
--------------------------------- EJERCICIO 33 ------------------------------------------------
Declarar la cariable cantidadDePersonas y asignar el valor 100
Incrementar la cantidad de personas en 5
Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
Se dieron de baja 3 personas
Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
Compramos una empresa y los personas se duplicaron
Mostrar en consola la cantidad de personas en este momento y el mensaje: Cantidad de personas: cantidadDePersonas
*/
console.log("Ejercicio 33: ");
let cantidadDePersonas = 100;
console.log(`Cantidad de personas: ${cantidadDePersonas}`);
cantidadDePersonas+=5;
console.log(`Se incrementó la cantidad de personas en 5. Cantidad de personas: ${cantidadDePersonas}`);
cantidadDePersonas-=3;
console.log(`Se dieron de baja 3 personas. Cantidad de personas: ${cantidadDePersonas}`);
cantidadDePersonas*=2;
console.log(`Se compró una empresa y se duplicó el personal. Cantidad de personas: ${cantidadDePersonas}`);
console.log("--------------------------------------------------------------------------------");
/*
--------------------------------- EJERCICIO 34 ------------------------------------------------
Este todavía no lo podemos hacer.
--------------------------------- EJERCICIO 35 ------------------------------------------------
Declar la variable number numeroDeCliente y asignar el valor 143245
Declar la variable numeroDeClienteIngresado y asignar el valor '143245'
Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor)
Utilizar el siguiente mensaje: El número ingresado por el cliente es correcto: true o false
Mostrar en consola si el dato ingresado y el número de cliente son iguales (comparación por valor y tipo de dato)
Utilizar el siguiente mensaje: El cliente ingresó un número de cliente válido: true o false
*/
let numeroDeCliente = 143245;
let numeroDeClienteIngresado = '143245';
console.log(`Numero de cliente ingresado: ${numeroDeClienteIngresado}. 
Numero de cliente: ${numeroDeCliente}. 
El número ingresado por el cliente es correcto: ` + (numeroDeCliente == numeroDeClienteIngresado) + `
El cliente ingresó un número de cliente válido: ` + (numeroDeCliente === numeroDeClienteIngresado));
console.log("--------------------------------------------------------------------------------");



