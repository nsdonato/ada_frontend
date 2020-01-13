/*-----------------------------  INFO CLASE -------------------------------------------------

OBJETOS:

- Los arrays son listas y generalmente deberían ser de datos todos iguales, no para guardar información de usuarios, por ejemplo, porque solo tenemos indices, no es que algo nos hace referencia a que hay en tal posición.

- Los objetos nos dejan guardar información, asignandole un nombre acorde a lo que se va a guardar en esa PROPIEDAD, las propiedades pueden guardar diferentes tipos de datos, number, array, strings, objetos, funciones, etc.

- Así se declara un objeto vacio (x ej si solo (x el momento) queremos declarar una varible de tipo objeto)
let objeto = {};

	ej de un objeto del tipo persona, como notamos, las personas tienen diferentes tipos de PROPIEDADES:

- Las propiedades son de clave-valor, por ej, una de las propiedades es nombre: 'noelia', donde la clave es nombre y el valor 'noelia', que es una variable del tipo string.

- Las propiedades se escriben en camelCase, pero se pueden escribir de cualquier manera, aunque no pueden arrancar declaradas con un numero.

	let persona = {
		nombre: "noelia",
		edad: 33,
		sabeProgramar: true
	}

- OPCIONALMENTE, las propiedades también se pueden ver escritas de la siguiente manera (ella no lo recomienda)

	let persona = {
		"nombre": "noelia"
	}

- Agregar una propiedad que no tiene al objeto:

	persona.apellido = "Donato" // se agrega al objeto, si hacemos un console log, ahora vamos a ver todas las propiedades anterior mas esta.

- De la misma manera, pero con una propiedad existente, cambiamos el valor contenido, ej:
	persona.nombre = "Pepita"

- Si el objeto lo declaramos como const, podemos agregar propiedades, pero no eliminar variables que ya tenía. Da error.

- Las "comillas magicas" : `` se llaman BACKTICK

- Para acceder a la información del objeto sería, por ej:

	let persona = {
		nombre: "noelia",
		edad: 33,
		direccion: {
			calle: esmeralda
			cp: 1007
		}
		sabeProgramar: true
	}

	console.log(persona.nombre); //noelia
	console.log(persona.direccion.calle); //esmeralda

api.themoviedb.org -> la api de peliculas 

- Los array son una lista de cosas, por ej en un objeto guardaríamos:

	let persona = {
		nombre: "noelia",
		edad: 33,
		lenguajesDeProgramacion: ["JavaScript", "C#", "Java"],
		hijos: [
			{
				nombre: "gia"
				edad 14
			}
		]
	}

- Para acceder a los nombres del array hijos, usamos un for y accedemos hasta ahí de esta manera

	De esta manera simplemente vamos mostrando nombre por nombre, podríamos usar una variable acumuladora y después mostrar todo junto.
	for (let i = 0; i < array.length; i++) {
		console.log(persona.hijos[i].nombre); 
	}

/*-----------------------------  EJERCICIOS -------------------------------------------------

Ejercicios del 1 al 5

*/

console.log(`Ejercicio 1
Crear una variable llamada user, a la que le vamos a asignar un objeto.
El objeto tiene que tener 3 propiedades: firstName, lastName email, age, con tus datos
Mostrar en consola el objeto user
Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE DE PILA] y tengo [ACA LA EDAD] años`);
let user = {
	firstName: "Noelia",
	lastName: "Donato",
	email: "noeliadonato@gmail.com",
	age: 33
}
console.log(`Resultado: Hola, mi nombre es ${user.firstName} y tengo ${user.age} años`);
console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 2
Tenemos un listado de personas y necesitamos guardarlo en una base de datos
Los datos que tenemos son un id, email, nombre y teléfono
Crear un objeto para cada persona que nos pasaron
Mostrar por consola todos los objetos creados
// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1, ada@gmail.com, Ada Lovelace, 1234567890
// 2, grace@hotmail.com, Grace Hopper, 0987654321
// 3, hedy@gmail.com, Hedy Lamarr, 6789054321
// 4, radia@yahoo.com, Radia Perlman, 1234509876
// 5, sheryl@facebook.com, Sheryl Sandberg, 5432167890


// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// const usuarioEjemplo = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }`);
let usuarioUno = {
	id: 1,
	nombre: "ada@gmail.com",
	email: "Ada Lovelace",
	telefono: "1234567890"
}

let usuarioDos = {
	id: 2,
	nombre: "grace@hotmail.com",
	email: "Grace Hopper",
	telefono: "0987654321"
}

let usuarioTres = {
	id: 3,
	nombre: "hedy@gmail.com",
	email: "Hedy Lamarr",
	telefono: "6789054321"
}

let usuarioCuatro = {
	id: 4,
	nombre: "radia@yahoo.com",
	email: "Radia Perlman",
	telefono: "1234509876"
}


let usuarioCinco = {
	id: 5,
	nombre: "sheryl@facebook.com",
	email: "Sheryl Sandberg",
	telefono: "5432167890"
}

console.log(`${usuarioUno.id},${usuarioUno.email},${usuarioUno.nombre}, ${usuarioUno.telefono}`);
console.log(`${usuarioDos.id},${usuarioDos.email},${usuarioDos.nombre}, ${usuarioDos.telefono}`);
console.log(`${usuarioTres.id},${usuarioTres.email},${usuarioTres.nombre}, ${usuarioTres.telefono}`);
console.log(`${usuarioCuatro.id},${usuarioCuatro.email},${usuarioCuatro.nombre}, ${usuarioCuatro.telefono}`);
console.log(`${usuarioCinco.id},${usuarioCinco.email},${usuarioCinco.nombre}, ${usuarioCinco.telefono}`);

console.log("---------------------------------------------------------------------------------------------");
console.log(`Ejercicio 3
Con los objetos creados en el ejercicio anterior, mostrar en la consola los siguientes datos de cada persona:
// 1. El nombre de Ada:

// 2. El ID de Grace

// 3. El email de Hedy

// 4. El ID y nombre de Radia

// 5. El telefono de Sheryl`);

console.log(usuarioUno.nombre);
console.log(usuarioDos.id);
console.log(usuarioTres.nombre);
console.log(usuarioCuatro.id, usuarioCuatro.nombre);
console.log(usuarioTres.telefono);
console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 4
Tenemos un objeto con información de un disco:
const disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};
Mostrar en consola el siguiente mensaje usando las propiedades del objeto:
El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011`);
const disco = {
	id: 1,
	nombre: 'Wasting Light',
	anioLanzamiento: 2011,
	cantidadDeTemas: 12,
	banda: {
		nombre: 'Foo Fighters',
		anioFormacion: 1994
	}
};
console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`);
console.log("---------------------------------------------------------------------------------------------");