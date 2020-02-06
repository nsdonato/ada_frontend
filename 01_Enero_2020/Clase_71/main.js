/*
https://github.com/malerey/Metodos-de-array-ejercicios/blob/master/README.md


console.log(`Ejercicio 1:
Tenemos un array llamado numbers con números enteros al azar.

Utilizando reduce, queremos calcular la suma de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 155`)

const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio
let suma = numbers.reduce((acumuladora, valoractual) => {
    return acumuladora + valoractual;
})

console.log(suma)
// deberia mostrar 155



console.log(`Ejercicio 2:
Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3, 4], la suma de todos los números es 24
const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 977976`);

const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio
const sum = numbers.reduce((acumuladora, valorActual) => {
    return acumuladora * valorActual;
})
// deberia mostrar 977976
console.log(sum)



console.log(`Ejercicio 3:
Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
Usando reduce, queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
const notasDeTPs = [4, 7, 8, 5, 10];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 6.8`);

const notasDeTPs = [4, 7, 8, 5, 10];

// codea debajo de este comentario la solucion al ejercicio
const promedio = notasDeTPs.reduce((acumuladora, valorActual) => {
    return acumuladora + valorActual;
}, 0)
// deberia mostrar 6.8
console.log(promedio / notasDeTPs.length);

console.log(`Ejercicio 4:
Tenemos un array en una variable libros con libros para leer sobre Javascript.
Usar la función reduce para crear un string con todos los titulos de los libros encerrados en una etiqueta <li></li>.
Mostrar por consola el array nuevo
Ayuda: ojo con el valor de comienzo
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
// <li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>`)

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
let string = "";

let total = librosDeJS.reduce((acumuladora, valorActual) => {
    return `${acumuladora}<li>${valorActual}</li>`;
}, '')

console.log(total);


console.log(`Ejercicio 5:
Tenemos un array de objetos llamado personas con personas y edades .

Utilizando reduce, queremos calcular la suma de todas las edades que están en el array.
Ayuda: ojo con el valor de comienzo
const personas = [
    {nombre: "Grace",
    edad: 6
    },
    {nombre: "Ada",
    edad: 19
    },
    {nombre: "Hedy",
    edad: 34
    }
  ];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 59`);

const personas = [
    {
        nombre: "Grace",
        edad: 6
    },
    {
        nombre: "Ada",
        edad: 19
    },
    {
        nombre: "Hedy",
        edad: 34
    }
];

// codea debajo de este comentario la solucion al ejercicio
const suma = personas.reduce((acumuladora, valorActual) => {
    return acumuladora + valorActual.edad;
}, 0)
// deberia mostrar 59
console.log(suma);


console.log(`Ejercicio 6:
integrador de todos los metodos
Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
Queremos eliminar todos los números negativos
Con los números restantes, obtener el doble de cada uno
Finalmente, obtener la suma de todos los números que obtuvimos
const datos = [2, -4, 6, 0, 5, -1];

// codear acá la solución del ejercicio
const total = ;`)

const datos = [2, -4, 6, 0, 5, -1];

const total = datos.filter(el => el > 0).reduce((acumuladora, valorActual) => {
    return acumuladora + valorActual * 2;
}, 0)

console.log(total);

// NIL: 
const total = datos.reduce((acc, curr) => {
    if (curr >= 0) {
        return acc + curr * 2
    }
    else {
        return acc
    }
}, 0)
console.log(total)
*/

//Asi lo mejoro Male: 
const datos = [2, -4, 6, 0, 5, -1];
const total = datos.reduce((acc, curr) => {
    return curr >= 0 ? acc + curr * 2 : acc;
}, 0)

console.log(total);