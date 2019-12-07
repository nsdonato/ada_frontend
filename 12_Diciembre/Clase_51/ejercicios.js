/*-----------------------------  INFO CLASE -------------------------------------------------------------

Funciones en javascript.
Callstack:
	first in, first out. muestra como se ve en la consola del desarrolador. como se llaman una a otra y cuando se termina su scope.

Callbacks:
	func x param

	ej con setTimeout


/*-----------------------------  EJERCICIOS -------------------------------------------------------------

Ejercicio que dejó Male para hacer:
Hacer un codigo que determine si un password es valido o no.

Hacer una funcion que reciba un string como parametro. La funcion debe retornar true si el parametro:

Tiene seis caracteres o mas
Tiene al menos un numero
Tiene al menos una letra
Y false en caso contrario.

El archivo 51.js tiene ya fragmentos de codigo que pueden servirles para hacer las funciones
*/

let password = prompt("Ingrese su password"); //"lili12"

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

debugger;
// la funcion que chequea el largo es mas o menos asi:
const LargoValido = (password) => password.length >= 6;

// la funcion que chequea si tiene numeros es mas o menos asi:
const TieneNumeros = () => {
	for (let i = 0; i < password.length; i++) {
		if (numeros.indexOf(password[i]) != -1) {
			return true;
		}
	}
	return false;
}

const TieneLetras = () => {
	// la funcion que chequea si tiene letras  es mas o menos asi:
	for (let i = 0; i < password.length; i++) {
		if (letras.indexOf(password[i]) != -1) {
			return true;
		}
	}
	return false;
}


const VerificarPassword = (password) => {
	if (LargoValido(password) && TieneNumeros(password) && TieneLetras(password)) {
		alert("Password valido");
	} else {
		alert("Por favor verificar el password");
	}
}

VerificarPassword(password);

