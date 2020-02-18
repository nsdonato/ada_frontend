/*const form = document.forms[0];
const tarjeta = document.querySelector(".card");
const forecast = document.getElementById("forecast");
const tarj3horas = document.querySelector(".tresHoras");

form.onsubmit = (e) => {
  e.preventDefault()

  const buscarCiudad = form.elements[0].value

  if (buscarCiudad) {
    tarjeta.classList.remove('nomostrar');
    forecast.classList.remove('nomostrar');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${buscarCiudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
      .then(res => res.json())
      .then(info => {
        const clima = info.weather[0].description;
        tarjeta.innerHTML = `
      <div class="izq">
        <div class="ciudad">
          <h1>${info.name}</h1>
          <h3>${clima}</h3>
        </div>
        <div class="temp">
          <div class="icono"><img class="img1" src="https://openweathermap.org/img/wn/${info.weather[0].icon}.png"></div>
          <div class="grados">${info.main.temp} <span class="span1">ºC</span></div>
        </div>
      </div>
      <div class="dcha">
        <div class="viento">
          <p>Humedad: ${info.main.humidity} %</p>
          <p>Viento: ${info.wind.speed} m/s</p>
        </div>
      </div>
  `
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${buscarCiudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
          .then(res => res.json())
          .then(info => {
            let clima3 = "";
            let icono3 = "";
            let acc = "";
            info.list.forEach(horas3 => {
              let clima3 = horas3.weather[0].description;
              let hora = horas3.dt_txt;
              acc += `
      <div class="cadaTarjeta">
      <p>${hora}</p>
      <div class="temperatura">
        <div class="icono3"><img class="img3" src="https://openweathermap.org/img/wn/${horas3.weather[0].icon}.png"></div>
        <div class="grados3">${horas3.main.temp} <span class="span3">ºC</span></div>
      </div>
      <p>${clima3}</p>
      </div>
      `
            });
            tarj3horas.innerHTML = acc;
          })
      })
  } else {
    alert("Por favor ingresa una ciudad")
    tarjeta.classList.add('nomostrar');
    forecast.classList.add('nomostrar');
  }
}*/

const input = document.getElementById("ciudad");
input.onkeyup = (event) => {
  console.log(typeof event.target.value)
}
