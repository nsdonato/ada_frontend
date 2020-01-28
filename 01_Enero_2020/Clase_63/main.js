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


for (let i = 0; i < imagesAsObjects.length; i++) {
    acumuladoraCards += `<div class="card">
    <img src=${imagesAsObjects[i].img} alt=${imagesAsObjects[i].title}>
  <div class="desc">${imagesAsObjects[i].title}</div>
  </div>`;


}

const containerHtml = document.getElementById("container");

containerHtml.innerHTML = acumuladoraCards;


const modal = document.getElementById("myModal");

const botonAbrirModal = document.getElementsByTagName("img");
const modalcontenido = document.querySelector(".modalcontent")



for (let i = 0; i < botonAbrirModal.length; i++) {
    botonAbrirModal[i].onclick = () => {
        console.log(`Cualquier cosa`)
        modal.classList.remove("nomostrar")

        modalcontenido.innerHTML = `
        <img src=${imagesAsObjects[i].img} alt=${imagesAsObjects[i].title}>
        <div class="desc">${imagesAsObjects[i].title}</div>
        `
    }

}
const botonCerrarModal = document.getElementById("cerrarModal")


botonCerrarModal.onclick = () => {
    console.log(`Aprete boton`)
    modal.classList.add("nomostrar")
}
