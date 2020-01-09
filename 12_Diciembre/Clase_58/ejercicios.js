/*-----------------------------  INFO CLASE -------------------------------------------------------------

Me falta ver la clase.

/*-----------------------------  EJERCICIOS -------------------------------------------------------------

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
