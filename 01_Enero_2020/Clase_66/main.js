let form = document.getElementById('form');

let userName = form.elements[0].value;
let password = form.elements[1].value;

let div = document.getElementById('info');
div.innerHTML = `<ul>
                <li>Nombre: ${form.elements[0].name} valor: ${userName}</li>
                <li>Nombre: ${form.elements[1].name} valor: ${password}`;

form.onsubmit = (e) => {
    e.preventDefault();
}