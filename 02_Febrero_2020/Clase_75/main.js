/*
Ejercicio 2
En el HTML y CSS tienen una tabla ya maquetada.
Deben crearla con JS, luego de hacer un fetch para obtener la lista de usuarios, y completarla con los datos que reciban.
*/
const tableBody = document.getElementsByTagName('tbody');

fetch(`https://meli-nnaykhkakj.now.sh/user/list`, {
    method: 'GET',
})
    .then(data => data.json())
    .then(result => {
        console.log(result)

        let acumuladora = "";

        result.users.forEach(element => {
            acumuladora += `<tr>
              <td>${element.name}</td>
              <td>${element.lastname}</td>
              <td>${element.phone}</td>
              <td>${element.email}</td>
              <td class="list__body--actions">
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
              </td>
            </tr>`
        });

        tableBody[0].innerHTML = acumuladora;
    })

