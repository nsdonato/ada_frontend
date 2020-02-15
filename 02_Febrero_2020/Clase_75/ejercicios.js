/*Ejercicio 1*/
//Mediante el metodo GET, obtener la lista de usuarios y mostrarla en consola.

fetch(`https://meli-nnaykhkakj.now.sh/user/list`, {
    method: 'GET',
})
    .then(data => data.json())
    .then(result => console.log(result))

//-----------------------------------------------------------------------------
//    Usando el metodo POST, agregar sus datos a la lista de usuarios.

// const usuarioNuevo = {
//     name: 'Noelia',
//     lastname: 'Donato',
//     phone: '0303456',
//     email: 'noeliadonato@gmail.com',
// };

// fetch(`https://meli-nnaykhkakj.now.sh/user`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(usuarioNuevo),
// })
//     .then(data => data.json())
//     .then(result => console.log(result))

// -----------------------------------------------------------------------------
//     Usando el metodo PUT, modificar alguno de los datos en su propio usuario.

// const usuarioNuevo = {
//     name: 'Noelia',
//     lastname: 'Donato',
//     phone: 1564784786,
//     email: 'noeliadonato@gmail.com',
// };
// let id = 3;
// fetch(`https://meli-nnaykhkakj.now.sh/user/edit/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(usuarioNuevo),
// })
//     .then(data => data.json())
//     .then(result => console.log(result))

// -----------------------------------------------------------------------------
//     Usando el metodo POST, agregar un usuario con un nombre falso.


// const usuarioNuevo = {
//     name: 'Gia',
//     lastname: 'Donato',
//     phone: '0303456',
//     email: 'giadonato@gmail.com',
// };

// fetch(`https://meli-nnaykhkakj.now.sh/user`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(usuarioNuevo),
// })
//     .then(data => data.json())
//     .then(result => console.log(result))

// -----------------------------------------------------------------------------
//     Usando el metodo DELETE, borrar ese usuario.


// let id = 11;
// fetch(`https://meli-nnaykhkakj.now.sh/user/remove/${id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(usuarioNuevo),
// })
//     .then(data => data.json())
//     .then(result => console.log(result))

// -----------------------------------------------------------------------------
//     Cuidado! Sus compañeras van a estar editando los datos al mismo tiempo que ustedes.Chequeen bien antes de borrar o editar.
// -----------------------------------------------------------------------------