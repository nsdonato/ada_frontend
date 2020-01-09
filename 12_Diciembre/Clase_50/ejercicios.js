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