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

const cards = [
  {
    title: "Lorem Ipsum",
    description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    icon: "ion-ios-analytics-outline",
    iconColor: "#ff689b"
  },
  {
    title: "Dolor Sitema",
    description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    icon: "ion-ios-bookmarks-outline",
    iconColor: "#e9bf06"
  },
  {
    title: "Sed ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    icon: "ion-ios-paper-outline",
    iconColor: "#3fcdc7"
  },
  {
    title: "Magni Dolores",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    icon: "ion-ios-speedometer-outline",
    iconColor: "#41cf2e"
  },
  {
    title: "Nemo Enim",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    icon: "ion-ios-world-outline",
    iconColor: "#d6ff22"
  },
  {
    title: "Eiusmod Tempor",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    icon: "ion-ios-clock-outline",
    iconColor: "#4680ff"
  }
]

let acumuladoraTarjetas = "";

for (let i = 0; i < cards.length; i++) {
  acumuladoraTarjetas += `<div class="services__card">
  <div class="services__img">
    <i class="ionic ${cards[i].icon}" style="color: ${cards[i].iconColor}"></i>
  </div>
  <div class="services__text">
    <h4><a href="#">${cards[i].title}</a></h4>
    <p>${cards[i].description}</p>
  </div>
</div>`;
}

const htmlServices = document.getElementById("services");

htmlServices.innerHTML = `<div class="services__container">
      <header>
        <h1>Services</h1>
        <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
      </header>
      <section class="services__main">
        ${acumuladoraTarjetas}
      </section>
    </div>`;