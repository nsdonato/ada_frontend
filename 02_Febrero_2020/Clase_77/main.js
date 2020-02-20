//SPREAD OPERATOR 
// copiar arrays y objetos, concatenar, agregar propiedades

const numerosImpares = [1, 3, 5, 7];
const numerosPAres = [2, 4, 6];
const nuevoArray = [...numerosImpares, ...numerosPAres];
console.log(nuevoArray);

// copio un objeto.
const persona = {
    nombre: 'ada',
    apellido: 'lovelace'
}

const copiaDePersona = { ...persona };
copiaDePersona.edad = 29;
console.log(persona);
console.log(copiaDePersona);


const persona2 = {
    nombre: 'ada',
    apellido: 'lovelace'
}

const copiaDePersona2 = {
    edad: 29,
    profesion: 'programadora',
    ...persona2
}

console.log(persona2);
console.log(copiaDePersona2);

//------------------------------------------------------------------------------------------

// Destructuring
// asignación por destructuración.

const alumna = {
    nombre: 'Lili',
    edad: 34,
    calificaciones: {
        matematica: 8,
        lengua: 10,
        plastica: 5,
        gimnasia: 2
    }
}

// Esto, es lo mismo que abajo.
const nombre = alumna.nombre;
const edad = alumna.edad;

// desestructurando el objeto mediante los nombres de las propiedades del mismo.
const { nombre, edad, calificaciones: { matematica, lengua, plastica } } = alumna;
console.log(lengua);


const alumno = {
    nombre: 'Juan'
}
const { nombre, edad = "No disponible" } = alumno;

console.log(edad);

const alumnas = ["Noe", "Sabri", "Ivana"];
const [noelia, sabrina, ivana] = alumnas; // el orden es el indece en el array.

console.log(noelia);

// Otro ejemplo:
const alumnas = ["Noe", "Sabri", "Ivana", "Tefi"];

const [noelia, sabrina, , tefi] = alumnas; // el orden es el indece en el array.

console.log(tefi);

//------------------------------------------------------------------------------------------

// Array dentro de array;
const alumnas = ["Noe", "Sabri", ["Ivana", "Tefi"]];

const [noelia, sabrina, , tefi] = alumnas; // el orden es el indece en el array.

console.log(tefi);

//------------------------------------------------------------------------------------------

const buscarPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(data => data.json())
        .then(charmander => console.log(charmander))
}

//async await se usa siempre en funciones
// la funcion queda definida como una funcion asincrona con async
// y lo que devuelve como una promesa con await
const buscarPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    const charmander = await data.json()
    console.log(charmander)
}

buscarPokemon();

