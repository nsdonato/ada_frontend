/*-----------------------------  INFO CLASE -------------------------------------------------------------

const suma = (a,b) => {
	return a + b;
}

console.log(suma(2,3));

return: sirve para retornar lo que se hace dentro de la función..


*/

/*-----------------------------  EJERCICIOS -------------------------------------------------------------
Ejercicios del 1 al 5

console.log(`Ejercicio 1:
Crear una función llamada mostrarNombreCompleto.
Esta función recibe 2 parámetros: nombre y apellido.
La función debe mostrar en consola el nombre completo de la persona, concatenando nombre y apellido
Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'`);

const mostrarNombreCompleto = (nombre, apellido) => {
	console.log(`${nombre} ${apellido}`);
};

mostrarNombreCompleto("noelia", "donato");

console.log("------------------------------------------------------------------------------------------");

console.log(`Ejercicio 2:
		Crear una funcion llamada sonIguales() que reciba dos parametros.
La funcion debe mostrar en consola "true" si los parametros son iguales, y "false" si son diferentes.`);

const sonIguales = (param1, param2) => {
	console.log(Number(param1) === Number(param2));
}

console.log("Los valoreS: 1, 1 son iguales?");
sonIguales(1, 1);

console.log("Los valoreS: 1, 2 son iguales?");
sonIguales(1, 2);

console.log("------------------------------------------------------------------------------------------")

console.log(`Ejercicio 3:
		Crear una funcion llamada agregarNumero() que reciba dos parametros: un array y un numero.
La funcion debe agregar el numero recibido al array, y mostrar el array resultante en consola.`);

let arr = [0, 1, 2, 3];
console.log("Array antes: ");
console.log(arr);

const agregarNumero = (paramArray, paramNum) => {
	paramArray.push(paramNum);
	console.log("Array después: ");
	console.log(paramArray);
}

agregarNumero(arr, 4);

console.log("------------------------------------------------------------------------------------------")

console.log(`Ejercicio 4:
		Crear una funcion llamada comprobarPosicion() que reciba dos parametros: un array de strings y un string
La funcion debe revisar si el string esta incluido dentro del array, y mostrar en consola "true" o "false".`);

let alumnas = ["pieri", "tefi", "gabu", "agos", "noe"];

console.log("Array de alumnas: ");
console.log(alumnas);

const comprobarPosicion = (arrString, paramString) => {
	let estaIncluido = false;

	for (let i = 0; i < arrString.length; i++) {
		if (arrString[i].toLowerCase() === paramString.toLowerCase()) {
			estaIncluido = true;
			break;
		}
	}

	console.log(estaIncluido);
}

comprobarPosicion(alumnas, "noe");
comprobarPosicion(alumnas, "Pieri");

console.log("------------------------------------------------------------------------------------------")

console.log(`Ejercicio 5:
		Crear una función llamada calcularPromedio()
La función recibe un único parámetro, del tipo array, con números enteros
La funcion debe mostrar en consola el promedio entre todos los números que pertenecen al array`);

const calcularPromedio = (arr) => {
	let cont = 0;

	for (let i = 0; i < arr.length; i++) {
		cont += arr.[i];
	}

	if (arr.length == 0) {
		console.log("No se puede dividir por cero");
	} else {
		console.log(cont / (arr.length - 1));
	}
}

let arrInt = [1, 2, 3];
calcularPromedio(arrInt);

console.log("------------------------------------------------------------------------------------------")

2. Ejercicios con return

console.log("------------------------------------------------------------------------------------------")

console.log(`Ejercicio 2.1:
Crear una función que se llame obtenerNombre y retorne tu nombre como string
Probarlo con la siguiente linea de codigo
console.log("Mi nombre es " + obtenerNombre());`);

const obtenerNombre = () => {
	return "Noelia";
}

console.log("Mi nombre es " + obtenerNombre());

console.log("------------------------------------------------------------------------------------------")

console.log(`Ejercicio 2.2:
En el mismo código, crear una función llamada obtenerSaludo, que retorne un valor string
Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable.
Retornar un texto de la forma: ¡Hola, ${nombre}!, donde nombre tiene que ser el valor guardado en la variable de arriba.
Ejecutar la función obtenerSaludo y mostrar el resultado por consola.
console.log(obtenerSaludo());`);

console.log("------------------------------------------------------------------------------------------")

const obtenerNombre = () => {
	return "Noelia";
}

const obtenerSaludo = () => {
	let nombre = obtenerNombre();
	return `¡Hola, ${nombre}!`;
}

console.log(obtenerSaludo());

*/