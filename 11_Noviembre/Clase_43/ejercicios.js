/* const alumnasOnline = ["Maria", "Cyn", "Tefi"];

// console.log(alumnasOnline); // Vemos por consola: Maria, Cyn, Tefi
// Manera directa de modificar un array:
// alumnasOnline[0] = "Noe"; // en un for esto sería alumnasOnline[i] = "Noe"; (i o la variable que hayamos usado en el for)
console.log(alumnasOnline); // Ahora vemos por consola: Noe, Cyn, Tefi 

------------------------------------------------------------------------------------------------------------------
Tema nuevo - WHILE (mientras):
------------------------------------------------------------------------------------------------------------------

Ejecutamos código, hasta que la condición de escape sea falsa.

while(condicion){
	// código...
}

ej:

// Esto se repite MIENTRAS, numero sea MENOR o LLEGUE a 10
let numero = 1;
while(numero <= 10){
	console.log(numero);
	numero++; // si no aumentaramos 1 en nro, se colgaría el explorador porque la condición de corte del while siempre sería verdadera, ya que numero siempre sería 1 (que es como lo definimos al comienzo, por ende es mejor y tampoco igual a 10)
}
------------------------------------------------------------------------------------------------------------------
Tema nuevo - DO WHILE (mientras):
------------------------------------------------------------------------------------------------------------------

Ejecutamos código, hasta que la condición de escape sea falsa.

do{
	// código...
}
while(condicion);

ej:

// Esto se repite MIENTRAS, numero sea MENOR o LLEGUE a 10
let numero = 1;
do{
	console.log(numero);
	numero++; // si no aumentaramos 1 en nro, se colgaría el explorador porque la condición de corte del while siempre sería verdadera, ya que numero siempre sería 1 (que es como lo definimos al comienzo, por ende es mejor y tampoco igual a 10)
}while(numero <= 10);

*/
/*
------------------------------------------------------------------------------------------------------------------
EJERCICIO:
------------------------------------------------------------------------------------------------------------------
*/
const alumnasOnline = [
	["Maria", "Abihaggle", 23],
	["Noe", "Potrero", 32],
	["Sol", "Alvarez", 26],
];

let accion = prompt("Por favor, indique que accion desea tomar");

if (accion === "BORRAR") {
	let usuarioABorrar = prompt("Indique que usuario desea borrar")

	for (let i = 0; i < alumnasOnline.length; i++) {
		for (let j = 0; j < alumnasOnline[i].length; j++) {

			if (alumnasOnline[i][j] === usuarioABorrar) {
				alumnasOnline.splice(i, 1);
				alert("Hemos borrado al usuario identificado como" + usuarioABorrar);
				break;
			}
		}
	}
	console.log(alumnasOnline)
};

if (accion === "EDITAR") {
	let usuarioAEditar = prompt("Indique que dato desea editar")

	for (let i = 0; i < alumnasOnline.length; i++) {
		for (let j = 0; j < alumnasOnline[i].length; j++) {

			if (alumnasOnline[i][j] === usuarioAEditar) {
				let datoAModificar = prompt("Por cual dato queres modificarlo?")
				alumnasOnline[i][j] = datoAModificar;
			}
		}
	}
}

if (accion === "AGREGAR") {
	let nombreAAgregar = prompt("Indique el nombre del contacto a AGREGAR");
	let apellidoAAgregar = prompt("Indique el apellido del contacto a AGREGAR");
	let edadAAgregar = prompt("Indique la edad del contacto a AGREGAR");

	let nuevaAlumna = [`${nombreAAgregar}`, `${apellidoAAgregar}`, Number(`${edadAAgregar}`)]
	alumnasOnline.push(nuevaAlumna);
	
	alert("Se agregó el usuario correctamente");
}

console.table(alumnasOnline);
