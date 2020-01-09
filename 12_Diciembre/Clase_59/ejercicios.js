/*-----------------------------  INFO CLASE -------------------------------------------------------------


/*-----------------------------  EJERCICIOS -------------------------------------------------------------

Objetos




*/
//--------------------------------------------------------------------------------------------------
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

console.log(`Ejercicio 5
Crear un array llamado tecnologiasConocidas donde se listen las tecnologias que aprendiste durante el curso y las que ya supieras de antes

Agregar al objeto creado en el ejercicio 1 dos propiedades:

sabeProgramar: true
tecnologiasConocidas: [el array que creaste recien]`);
let tecnologiasConocidas = ["html5", "CSS3", "SASS", "JavaScript", "ETC"];
user.sabeProgramar = true;
user.tecnologiasConocidas = tecnologiasConocidas;
console.log(user);
console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 6
Crear una funcion llamada mostrarTecnologias que reciba como parametros las propiedades recien creadas
Dentro de la funcion, crear la siguiente lógica:
Si la propiedad "sabeProgramar" es true, mostrar en consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES/TECNOLOGIAS]"
Ejecutar la funcion`);
const mostrarTecnologias = (sabeProgramar, tecnologiasConocidas) => {
	if (sabeProgramar) {
		console.log(`Hola, mi nombre es ${user.firstName} y programo en ${tecnologiasConocidas}`)
	}
};

mostrarTecnologias(user.sabeProgramar, user.tecnologiasConocidas);
console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 7
Agregar el string "Proximamente DOM" al array dentro del objeto "user".
Ejecutar la funcion`);

tecnologiasConocidas.push("proximamente DOM");
mostrarTecnologias(user.sabeProgramar, user.tecnologiasConocidas);
console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 8
Por un cambio en los requerimientos del proyecto, necesitamos que el nombre del objeto user ahora sea un objeto con el siguiente formato:

const user = {
  name: {
    first: 'Grace',
    last: 'Hopper'
  },
  // y las demas propiedades
}
Tenemos que crear un nuevo objeto, y guardarlo en la variable newUser, conteniendo las mismas propiedades excepto firstName y lastName.
El nombre hay que guardarlo con el formato expresado en el punto anterior.
No podemos escribir nuevamente los valores, sino utilizar los que ya estan guardados en el objeto user.`);

const newUser = {
	name: {
		first: user.firstName,
		last: user.lastName,
	},
	email: user.email,
	age: user.age,
	sabeProgramar: user.sabeProgramar,
	tecnologiasConocidas: user.tecnologiasConocidas
}

console.log(newUser);
console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 9
Tenemos un array de objetos con las ganadoras de algunas temporadas de Rupaul.
Cada objeto tiene las propiedades nombre, temporada y foto.
Crea una funcion con el nombre mostrarGanadoras, que reciba el objeto como parametro.
Dentro de la funcion, recorrer el array utilizando un ciclo for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6
const ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
];

///// RETORNO DE LA FUNCION
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6`);

const ganadoras = [
	{
		nombre: 'Bebe Zahara Benet',
		temporada: '1',
		foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
	},
	{
		nombre: 'Tyra Sanchez',
		temporada: '2',
		foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
	},
	{
		nombre: 'Raja',
		temporada: '3',
		foto: 'http://www.nokeynoshade.party/images/raja.jpg'
	},
	{
		nombre: 'Sharon Needles',
		temporada: '4',
		foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
	},
	{
		nombre: 'Jinkx Monsoon',
		temporada: '5',
		foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
	},
	{
		nombre: 'Bianca Del Rio',
		temporada: '6',
		foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
	}
];

const mostrarGanadoras = (ganadorasRuPaul) => {

	for (let i = 0; i < ganadorasRuPaul.length; i++) {
		console.log(`${ganadorasRuPaul[i].nombre} ganó la temporada ${ganadorasRuPaul[i].temporada}`);
	}
}

mostrarGanadoras(ganadoras);
console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 10
Tenemos un array de objetos, con las canciones de un disco de Nirvana
Cada objeto representa una canción, y tiene las propidades id, nombre, duracion (en segundos)
Queremos calcular:
La duración total del disco (suma de la duración de cada canción)
La duración promedio por canción (un promedio entre todas las duraciones)
Para ello crear las funciones calcularDuracionTotal y calcularPromedioPorCancion
const nevermind = [
  { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
  { id: 2, nombre: "In Bloom", duracion: 255 },
  { id: 3, nombre: "Come As You Are", duracion: 219 },
  { id: 4, nombre: "Breed", duracion: 184 },
  { id: 5, nombre: "Lithium", duracion: 257 }
];

///// RESULTADO
console.log(calcularDuracionTotal); // 1217
console.log(calcularPromedioPorCancion); // 243.4`);

const nevermind = [
	{ id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
	{ id: 2, nombre: "In Bloom", duracion: 255 },
	{ id: 3, nombre: "Come As You Are", duracion: 219 },
	{ id: 4, nombre: "Breed", duracion: 184 },
	{ id: 5, nombre: "Lithium", duracion: 257 }
];

let calcularDuracionTotal = 0;
let calcularPromedioPorCancion = 0;
let totalCanciones = nevermind.length;

for (let i = 0; i < nevermind.length; i++) {
	calcularDuracionTotal += nevermind[i].duracion;
}

calcularPromedioPorCancion = calcularDuracionTotal / totalCanciones;

console.log(calcularDuracionTotal);
console.log(calcularPromedioPorCancion);

console.log("---------------------------------------------------------------------------------------------");

console.log(`Ejercicio 11
Tenemos un array de objetos, que representa un listado de bandas
Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
Crear una funcion que muestre en consola cada banda del array, con la siguiente lógica:
Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"
const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990`);

const bandas = [
	{ id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
	{ id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
	{ id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
	{ id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
	{ id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

const mostrarBandas = (arrayBandas) => {

	for (let i = 0; i < arrayBandas.length; i++) {
		if (arrayBandas[i].activa) {
			console.log(`${arrayBandas[i].nombre} está activa desde el año ${arrayBandas[i].fundacion}`);
		} else {
			console.log(`${arrayBandas[i].nombre} no está activa`);
		}
	}

}

mostrarBandas(bandas);

//--------------------------------------------------------------------------------------------------
