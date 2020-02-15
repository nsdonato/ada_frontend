/* finge que le podemos pasar un post https://reqres.in/

GET -> obtener info
POST -> crear info
PUT -> actualizar info
DELETE -> eliminar info

fetch(url, configuración)
ej

fetch('http://reqres/api/users', {
    method: 'POST',
    headers: {
        'Content-type': 'application-json'
    },
    body: JSON.stringify({
        name: 'Lelee',
        job: 'Maestra Jardinera'
    })
    .then(res => res.json())
    .then(info => {
        console.log(info)
    })
})
*/


