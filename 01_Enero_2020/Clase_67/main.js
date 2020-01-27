const formAnimales = document.forms[0]

formAnimales.onsubmit = e => {
    e.preventDefault();

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    let opcionesElegidas = []
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            opcionesElegidas.push(checkboxes[i].value)
        }
    };

    if (!opcionesElegidas.length) {

        alert("Por favor selecciona una opcion");

    } else {

        if (opcionesElegidas.length === 1) {
            alert(`Elegiste la opcion ${opcionesElegidas[0]}`)
        }
        else {
            alert(`Elegiste las opciones ${opcionesElegidas.join(", ")}`)
        }
    }
}
