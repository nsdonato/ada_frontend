/*
-------------------- TEORIA  ------------------------------------------------------- 
Nuevo tipo de dato: Array

Array: Variable con más de un valor, esuna colección de datos, va dentro de corchetes con comas separados.

Let primerArray = ['Ivana', 'Sabri', 'Ceci' ]
console.log(primerArray)

Si quiero poner en mayusculas por ejemplo, cada nombre de arriba, necesito acceder a cada uno de los datos, ¿Cómo lo hago? Por su índice.
console.log(elNombreDelArray[0].toUpperCase()) El que está en la posición 0 es Ivana

Métodos de Arrays

Let alumnas = ['Lili', 'Maria', 'NiL', 'SaBri', 'SOl', 'Tefi'];

alumnas[0].toUpperCase();
alumnas[1].toUpperCase();
alumnas[2].toUpperCase();
alumnas[3].toUpperCase();

For (let i = 0; i < array.lenght; i++) {
	Let nombreEnMinusculas = alumnas[i].toLowerCase(); -> todas las alumnas me quedan en minúsculas
	Let primeraLetra = nombreEnMinusculas.charAt(0).toUpperCase() -> convertir a mayúscula la primera letra	
	Let restoDelNombre = nombreEnMinusculas.slice(1, nombreEnMinusculas.length)
primeraLetra.concat(restoDelNombre);
} 

https://github.com/Ada-IT/bootcamp-frontend/blob/master/03_javascript/arrays/ejercicios

Los arrays tienen métodos propios, nos permite, editar, agregar o quitar elementos.

Sintaxis de array: nombreDelArray.nombreDelMetodo(datoAccesorio o parámetro)

Push: Agregar un elemento al final del array, modifica el array original.

alumnas.push('Tefi');
console.log(alumnas);

Unshift: Agrega un elemento al principio del array, modifica el array original.

alumnas.unshift('Tefi');
console.log(alumnas);

Pop: Elimina el último elemento de un array
alumnas.pop(); ->Sin parámetro porque siempre va a sacar al último.

Shift: Elimina el primer elemento de un array.
alumnas.shift(); ->Sin parámetro porque siempre va a sacar al primero.

Slice: Si queremos seleccionar un elemento del medio, desde una posición hasta otra.  No modifica el array original. 
Let alumnas = ['Lili', 'Maria', 'NiL', 'SaBri', 'SOl', 'Tefi'];
console.log (alumnas.slice(3, 5))

Splice: Permite agregar y quitar elementos de un array, si modifica el array original. Tiene un tercer parámetro opcional, funciona si quiero agregar un parámetro.
alumnas.splice(a partir del índice 2, quiero eliminar 1 alumna);
opcional-> alumnas.splice(a partir del índice 2, quiero eliminar 1 alumna o agregar 'Noe');
Si no se pone el segundo parámetro, el navegador borra a partir del primer parámetro todo.

Las bases de datos con las que nos comunicamos, suelen utilizar Array.
Dentro de un array puedo tener cualquier tipo de dato de Javascript, puedo tener arrays dentro de arrays.

Arrays dentro de arrays

Let usuarios = [
	['maria', 'Abihaggle', 25, 26115266369],
	['Lili', 'Belliski', 25, 26115266369],
	['Ceci', 'Morales', 25, 26115266369],
	['SOL', 'Alvarez', 25, 26115266369],
	['Celi', 'Gijan', 25, 26115266369],
];

Podemos ver los arrays así, pero se recomienda hacerlo con un for:
Let primerElemento = usuarios[0][0] (Voy a ver 'maria')
console.log(primerElemento[0];(Voy a ver 'maria')

Los arrays se pueden recorrer con un for:

For (let i = 0; i < usuarios.length; i++) {
	console.log(usuarios[i][1].toUpperCase())
}

Para recorrer arrays dentro de arrays, usamos un for dentro de un for.

For dentro de for 

for (let i = 0; i < usuarios.length; i++) { // primera vuelta i vale 0
console.log(usuarios[i]) // dentro del primer for
	for (let j = 0; j < usuarios[1].length; j++) { (Le cambiamos i por j porque no podemos poner el mismo)
	If (typeof usuarios[i] [j].toUpperCase()) === 'string') {
	console.log(usuarios[i] [j].toUpperCase()) // soy el for dentro del for
	}
};
console.log(después del for)
};

-------------------- EJERCICIOS -------------------------------------------------------
*/

/*


console.log(`Ejercicio 1: 
Dado el array playlistFoo, mostrar en consola la canción que está en segundo y quinto lugar.
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];`);
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];
console.log(playlistFoo[1]);
console.log(playlistFoo[4]);

------------------------------------------------------------------------------------------------

console.log(`Ejercicio 2: 
Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 10).

Guardar en variables el valor del primer, tercer y sexto elemento del array.

Mostrar por consola los siguientes 3 mensajes:

La banda en primer lugar es: [NOMBRE_DE_LA_PRIMER_BANDA]
La banda en tercer lugar es: [NOMBRE_DE_LA_TERCER_BANDA]
La banda en sexto lugar es: [NOMBRE_DE_LA_SEXTA_BANDA]`);
let bandas = ['Drake', 'The Strokes', 'Louta', 'The Magic Numbers', 'King of convenience', 'El otro yo', 'Soda'];
let valor1 = bandas[0];
let valor3 = bandas[2];
let valor6 = bandas[5];

console.table(bandas);
console.log(`La banda en primer lugar es: ${valor1}`);
console.log(`La banda en tercer lugar es: ${valor3}`);
console.log(`La banda en sexto lugar es: ${valor6}`);

------------------------------------------------------------------------------------------------

console.log(`Ejercicio 5: 
Declarar un array vacio con el nombre alumnas
Asignar el nombre de una alumna en los ínidices: 0, 1, 2, 3, 4 y 5
Mostrar en consola cada uno de los elementos utilizando los índices dados
Ejemplo de formato de salida:
índice 0: Ada
índice 1: Grace
índice 2: Radia
índice 3: Janie
índice 4: Sheryl
índice 5: Hedy
-------------------------------------------------------------------------`);

let alumnas = [];

alumnas[0] = "Gabu";
alumnas[1] = "Manu";
alumnas[2] = "Lili";
alumnas[3] = "Marian";
alumnas[4] = "Maria";
alumnas[5] = "Pieri";

for (let i = 0; i < alumnas.length; i++) {
    console.log(`índice ${i}: ${alumnas[i]}`);
}

------------------------------------------------------------------------------------------------

console.log(`Ejercico 8: 
Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
Mostrar en consola la cantidad de etiquetas guardadas en el array`);
let etiquetasHtml = ['html','head','title','body','h1', 'br','footer'];
console.log(`2da etiqueta: ${etiquetasHtml[1].toUpperCase()}`)
console.log(`2da etiqueta: ${etiquetasHtml[4].toLowerCase()}`)
console.log(`Cantidad de etiquetas guardadas en el array: ${etiquetasHtml.length}`);

------------------------------------------------------------------------------------------------

console.log(`Ejercicio 9: 
Teniendo el array ganadorasRupaul, mostrar en consola el nombre de la primer y última ganadora.
Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica como si no supieramos la cantidad exacta de elementos
var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];`);

var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

console.log(`Primer ganadora de Ru Paul: ${ganadorasRupaul[0]}`);
console.log(`Ultima ganadora de Ru Paul: ${ganadorasRupaul[ganadorasRupaul.length -1]}`);

------------------------------------------------------------------------------------------------

console.log(`Ejercicio 10: 
Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla 'La playlist de Nirvana tiene más canciones' si el array playlistNirvana tiene más canciones, o 'La playlist de Foo Fighters tiene más canciones' si el array playlistFoo tiene más elementos.
var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];`);

var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

if (playlistNirvana.length > playlistFoo.length) {
    console.log(`La playlist de Nirvana tiene más canciones`);
} else {
    console.log(`La playlist de Foo Fighters tiene más canciones`);
}

------------------------------------------------------------------------------------------------

*/