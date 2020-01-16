const imagenes = [
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-1.png",
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-2.png",
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-3.png",
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-4.png",
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-5.png",
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-6.png",
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-7.png",
  "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-8.png",
]

let acumuladora = "";

for (let i = 0; i < imagenes.length; i++) {
  acumuladora += `<div class="client-container">
    <div class="client-logo">
      <img src=${imagenes[i]} alt="client-${i}">
    </div>
  </div>`
}

const html = document.getElementById("our-clients");

html.innerHTML = `<div class="container-our-clients">
<div class="header-our-clients">
  <h3 class="h3-our-clients">Our CLients</h3>
  <p class="text-our-clients">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque dere santome nida.
  </p>
</div>
<div class="clients">
  <div class="clients-block">
    ${acumuladora}
  </div>
</div>`;
