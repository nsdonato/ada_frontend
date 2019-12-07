/*-----------------------------  INFO CLASE -------------------------------------------------------------

const obtenerNombre = nombre => { // los parentesis son opcionales cuando tenemos un solo parametro
	return nombre;
}

const obtenerApellido = () => { // cuando no tenemos paretro los parentesis son obligatorios.
	return nombre;
}

const obtenerUnNumero = () => 1 + 2; // cuando tenemos una linea sola, no es necesario poner return ni las llaves.

console.log(suma("Noelia")); // No así al llamar a la función.

- La palabra return, corta la ejecución de la función.
- Se puede usar mas de un return, según lo que necesitemos..
- Sintaxis vieja de funciones:

const esUnaFuncion = function(param1, param2) {
	// código
}
*/

/*-----------------------------  EJERCICIOS -------------------------------------------------------------
*/

console.log("--------------------------------------------------------------------------------------------------------");

console.log(`Ejercicio 3:
Crear la funcion obtenerResto(a, b) que retorne el resto de dividir a y b`);
const obtenerResto = (a, b) => a % b;

console.log("4 % 2");
console.log(`Resto: ${obtenerResto(4, 2)}`);

console.log("--------------------------------------------------------------------------------------------------------");

console.log(`Ejercicio 4:
Crear la funcion esPar(num) que retorne true si el numero es par, y false si es impar.
Dentro de esa funcion debe utilizarse lo retornado por la funcion obtenerResto creada en 2.3.`);

const esPar = num => obtenerResto(num, 2) === 0;

console.log(`4 es par: ${esPar(4)}`);
console.log(`5 es par: ${esPar(5)}`);

console.log("--------------------------------------------------------------------------------------------------------");

console.log(`Ejercicio 5:
Declarar la siguiente variable:
const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
Crear una funcion llamada encontrarPares() que recorre el array recibido por parametros
y retorna un nuevo array compuesto solo por los numeros impares.
Para saber si un número es par debe utilizarse la funcion esPar() creada en 2.4.`);

const listaDeNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];

const encontrarPares = arr => {
	let impares = [];

	for (let i = 0; i < arr.length; i++) {
		if (!esPar(arr[i])) {
			impares.push(arr[i]);
		}
	}

	return impares;
}

console.log(encontrarPares(listaDeNumeros));