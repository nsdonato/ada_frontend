const imagesAsObjects = [
    {
        title: "Forest",
        img: "https://www.w3schools.com/css/img_forest.jpg"
    },
    {
        title: "5 terre",
        img: "https://www.w3schools.com/css/img_5terre.jpg"
    },
    {
        title: "Northern lights",
        img: "https://www.w3schools.com/css/img_lights.jpg"
    },
    {
        title: "Mountains",
        img: "https://www.w3schools.com/css/img_mountains.jpg"
    }
]

let acumuladoraCards = "";
const imgAbrirModal = document.getElementsByTagName("img");
const containerHtml = document.getElementById("container");
const contenedorModal = document.getElementById("contenedorModal");

for (let i = 0; i < imagesAsObjects.length; i++) {
    acumuladoraCards += `<div class="card">
    <img src=${imagesAsObjects[i].img} alt=${imagesAsObjects[i].title}>
  <div class="desc">${imagesAsObjects[i].title}</div>
  </div>`;
}

containerHtml.innerHTML = acumuladoraCards;
contenedorModal.innerHTML = `
<div id="myModal" class="modal nomostrar">
  <div class="modalcontent">
  </div>
  <div><button id="cerrarModal">Cerrar Modal</button></div>
</div>`;

const botonCerrarModal = document.getElementById("cerrarModal");
botonCerrarModal.onclick = () => {
    modal.classList.add("nomostrar");
}

const modal = document.getElementById("myModal");
const modalContent = document.getElementsByClassName("modalcontent");

for (let x = 0; x < imagesAsObjects.length; x++) {
    imgAbrirModal[x].onclick = (e) => {

        modalContent[0].innerHTML = `<img src="${imagesAsObjects[x].img}" alt="${imgAbrirModal[x].title}">
        <span>${imagesAsObjects[x].title}</span>
        `;
        modal.classList.remove("nomostrar");
    }
}

