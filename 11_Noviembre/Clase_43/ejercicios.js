const alumnasOnline = [
	["Maria", "Abihaggle", 23],
	["Noe", "Potrero", 32],
	["Sol", "Alvarez", 26],
];

console.table(alumnasOnline);	
// alta baja modificacion 

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
debugger;
if (accion === "AGREGAR") {
	let usuarioAAgregar = prompt("Indique que dato desea AGREGAR")

	for (let i = 0; i < alumnasOnline.length; i++) {
		for (let j = 0; j < alumnasOnline[i].length; j++) {

			if (alumnasOnline[i][j] === usuarioAAgregar) {
				alert("No podes agregar un usuario existente!");
				break;
			} else {
				alumnasOnline[alumnasOnline.length+1][alumnasOnline.length+1] = usuarioAAgregar;
				alert("Usuario agregado!");
				break;
			}
		}
	}
}

console.table(alumnasOnline);