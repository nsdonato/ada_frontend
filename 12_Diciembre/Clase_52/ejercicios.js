/*-----------------------------  INFO CLASE -------------------------------------------------------------

Tipos de errores:
1) errores del programador, no se, por ej, dividir por 0, tratar de reinicializar una constante, etc.
2) errores que dependen del input del usuario, que no tuvimos en cuenta a la hroa de codear y pueden pasar.
3) los errores manejados.
	throw "esto es un error manejado" -> mala practica.
	throw new Error("Esto es un error controlado");

try {
	console.log("soy un cacho de código");
	let a, b, total = 0;
	const PI = 3.14;
	PI = "error"; // solo queda atrapado este error por el catch

	if (b === 0) {
		throw new Error("No se puede dividir por 0");
	} else {
		total = a / 2;
	}

} catch (cacaPis) {
	console.log(`Ocurrió un error ${cacaPis}`)
} finally {
	console.log("Pase lo que pase tenemos que ganar");
}

> Instalación de jest, un paquete de npm para realizar pruebas en javascript:

1) creamos la carpeta testing
2) abrimos la carpeta con visual code
3) npm init
4) npm i jest -D (para agregarlo solo como dependencia de desarrollo)

/*-----------------------------  EJERCICIOS -------------------------------------------------------------
*/

try {
	console.log("soy un cacho de código");
	let a, b, total = 0;
	const PI = 3.14;
	PI = "error"; // solo queda atrapado este error por el catch

	if (b === 0) {
		throw new Error("No se puede dividir por 0");
	} else {
		total = a / 2;
	}

} catch (cacaPis) {
	console.log(`Ocurrió un error ${cacaPis}`)
} finally {
	console.log("Pase lo que pase tenemos que ganar");
}