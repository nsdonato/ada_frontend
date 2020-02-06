/*
Ejercicios: https://github.com/malerey/Metodos-de-array-ejercicios

console.log(`Ejercicio 1:
Tenemos un array en una variable playlist con una lista de canciones de un disco.
Recorrer la lista con la función forEach y mostrarlas una por una utilizando console.log()
const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];`);

const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach(element => {
    console.log(element);
});
console.log("--------------------------------------------------------------------------------------");

console.log(`
Ejercicio 2:
Tenemos un array en una variable librosDeJS con una lista de libros de javascript.
Queremos saber la cantidad de libros que tenemos en el array
Nos pidieron que evitemos usar la propiedad length para contar los elementos de un array y que tenemos que usar si o si un forEach
Completá el siguiente código para que funcione el último console.log() y muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros
const librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];

/// ¡escribir en este espacio la solución del ejercicio!

console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');`);

let totalLibros = 0;

const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
];

librosDeJS.forEach(element => {
    totalLibros++
});

console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');

console.log("--------------------------------------------------------------------------------------")

console.log(`Ejercicio 3:
Tenemos un array en una variable playlist con una lista de canciones de un disco.
Recorrer la lista con la función forEach y mostrar la posición y el nombre de la canción utilizando un console.log()
const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

/// completá acá el código

// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt`)

const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach((element, index) => {
    console.log(`${index} - ${element}`);
});

// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt


console.log(`
Tenemos un array llamado numbers con números enteros al azar.
Queremos calcular la suma de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
Es necesario utilizar forEach para conseguir la suma
const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

// codea debajo de este comentario la solucion al ejercicio

console.log(sum);
// deberia mostrar 155`);

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

// codea debajo de este comentario la solucion al ejercicio
numbers.forEach(el => {
    sum += el;
});

console.log(sum);

console.log("--------------------------------------------------------------------------------------")
console.log("--------------------------------------------------------------------------------------")

MAP:
console.log(`Ejercicio 1:
Tenemos un array en una variable numeros con números al azar.
Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable numerosMasDiez
Mostrar por consola el array original y el nuevo
const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez;

// codear acá la solución del ejercicio


console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]`);

const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez;

// codear acá la solución del ejercicio
numerosMasDiez = numeros.map(el => el + 10);

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15];

console.log("--------------------------------------------------------------------------------------")

console.log(`Ejercicio 2:
Tenemos un array en una variable numeros con números al azar.
Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable dobles
Mostrar por consola el array original y el nuevo
const numeros = [3, 7, 13, 99];

// codear acá la solución del ejercicio


console.log(numeros); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]`)

const numeros = [3, 7, 13, 99];
let dobles;
// codear acá la solución del ejercicio
dobles = numeros.map(el => el * 2);

console.log(numeros); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]


console.log(`Ejercicios 3:
Tenemos un array en una variable frases con frases al azar.
Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
Mostrar por consola el array original y el nuevo
const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// codear acá la solución del ejercicio


console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]`)

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
let frasesExclamadas;
// codear acá la solución del ejercicio

frasesExclamadas = frases.map(el => `¡${el}!`);

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

console.log("--------------------------------------------------------------------------------------")

*/

console.log(`Ejercicio 4:
Tenemos un array en una variable libros con libros para leer sobre Javascript.
Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>
const librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];

// codear acá la solución del ejercicio



// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>`)

const librosDeJS2 = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
];

let listaLibrosDeJS = librosDeJS2.map(libro => `<li>${libro}</li>`)

console.log(`<ul>${listaLibrosDeJS}</ul>`);



console.log(`Ejercicio 2:
Tenemos un array en una variable numeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares = ;
const numerosImpares = ;

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]`);

const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];

// codea acá tu solución
let numerosPares = [];
let numerosImpares = [];

numerosPares = masNumeros.filter(valorActual => {
    return numerosPares.push((valorActual % 2) === 0);
})

numerosImpares = masNumeros.filter(valorActual => {
    return (valorActual % 2) === 0;
})

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
