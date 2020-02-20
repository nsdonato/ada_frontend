/*-----------------------------  INFO CLASE -------------------------------------------------------------

let alumnas = ["Noe", "Pieri", "Tefi"]
vimos como hacer ciertas funciones a mano
console.log(alumnas.indexOf("Tefi")) // retorna el indice. Si el elemento no existe retorna -1 

// Funcion Pura
function doble(num) {
  return num * 2; // No modifica el argumento.
}

function doblarLista(listado){
  // Retorna un nuevo listado sin modificar nada.
  return listado.map(doble); 
}

// Funcion Impura
function doblarLista(listado){
  for( var i =0; i < listado.items; i++ ){
    // Cambiamos los valores entregados como argumentos, porque apunta a ese puntero de la memoria (referencia)
    listado[i] = doble(listado[i]);
  }  
}

/*
let listado = [1, 2, 3, 4, 5, 6];

debugger;

// Funcion Pura
function doble(num) {
    return num * 2; // No modifica el argumento.
}

function doblarLista(listado) {
    debugger;
    // Retorna un nuevo listado sin modificar nada.
    return listado.map(doble);
}

// Funcion Impura

function doblarLista(listado) {
    for (var i = 0; i < listado.items; i++) {
        // Cambiamos los valores entregados como argumentos
        listado[i] = doble(listado[i]);
    }
}

function doblarLista(listado) {
    for (var i = 0; i < listado.items; i++) {
        // Cambiamos los valores entregados como argumentos
        listado[i] = doble(listado[i]);
    }
}

const doblarLista = listadoParam => {
    let listadoArrayNuevo = [];

    for (let i = 0; i < listadoParam.length; i++) {

        listadoArrayNuevo[i] = doble(listadoParam[i]);

    }

    return listadoArrayNuevo;
}


// Una manera de hacer esta función
const saludo = (nombre) => {
    return `Hola ${nombre}`;
}

// Segunda manera de hacer la función
const saludoMejorado = nombre => `Hola ${nombre}`;

let retornoFuncionSaludo = saludo("Noe");

console.log(saludo("Pieri"));      // Hola Pieri
console.log(retornoFuncionSaludo); // Hola Noe
console.log(saludoMejorado("Cornelio")); // Hola Cornelio
*/

// const calculo = () => {
//   let saludo = "hola";

//   return saludo.toUpperCase();
// };


// console.log(calculo());
/*
console.log('Listado')
console.table(listado);
console.log('-------------------')
console.log('arrayNuevo')
console.table();*/

/*-----------------------------  EJERCICIOS -------------------------------------------------------------
*/
/*
let nombre = "guada"

const concatenarAlgo = (str1, str2) => {
	nombre = str1 + str2;
	return concatenarAlgo;
}

console.log(concatenarAlgo(nombre, " la explotadora de mugrientos"));*/

let number = 765.99;
console.log(number.toLocaleString(number));