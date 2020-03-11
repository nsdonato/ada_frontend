
/*FUNCIONES

const unaFuncion = () => {
	// cualquier codigo de js
}

const unaFuncion = (parametro = "") => {
	// cualquier codigo de js
	console.log("Valor del parametro: " + parametro);
	const otraFuncion = () => {
	}
}

unaFuncion("holis");
unaFuncion("chauz");

La funcion declarada adentro de la funcion, solo puede ser usada por ella.
La funcion padre, puede ser usada desde afuera de ese codigo.
parametro = "", significa que primero va a tomar el valor que le mandan, y sino por defecto lo va a poner vacio, así no se le muestra al usuario -> undefined

-----------------------------------------------------------------------------
*/

/*
console.log(`Ejercicio Funciones 001
Declarar una función que muestre en consola los números pares del 0 al 100`);

const numPares = () => {

	for (let i = 0; i <= 100; i++) {
		if (i % 2 === 0) {
			console.log(`${i} es un numero par`);
		}
	}

}

numPares();

console.log("-----------------------------------------------------------------");

console.log(`Ejercicio Funciones 002
Declarar una función que muestre los siguientes datos en consola:
Tu Nombre
Edad
Teléfono
Calle
Altura
Código postal`);

const misDatos = () => {
	console.log(`
	Tu Nombre: Noelia
	Edad: 33
	Teléfono: 0303456
	Calle: Av Siempre Viva
	Altura: 742
	Código postal: 1007`);
}

misDatos();
console.log("-----------------------------------------------------------------");
*/

const numeros = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
let acumuladora = 0;
let anterior = 0;
let total = 0;
debugger
const fibonacci = (num) => {
	if(num <= 34) {
		anterior = num;
		acumuladora = 1 + num;
		if(acumuladora === 0 || acumuladora === 1){
			console.log(num);
				fibonacci(1);
		} else {
			for (let index = num; index < 10; index++) {
				anterior = index;
				fibonacci(total);
				// acumuladora = index;
				// total = index + acumuladora;
				// console.log(total)
			}
		}
	}
}

fibonacci(0);
console.log(fibo)
/*
0 -> muestro 0
anterior = 0
sumo = 0 + 1 = 1 -> muestro 1
1
anterior = suma (1);
sumo = 1 + 1 = 2;
2
anterior = 2
sumo = 1 + 2


0 1 1 2 3 5 8 13 21

0
1+0=1
1+1=2
2+1=3
3+2=5
5+3=8
8+5=13

*/