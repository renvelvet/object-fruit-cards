let arrayOfFruits = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guava_ID.jpg/220px-Guava_ID.jpg",
    nama: "Jambu",
    kingdom: "Plantae",
    namaLatin: "Psidium guajava",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/220px-Bananavarieties.jpg",
    nama: "Pisang",
    kingdom: "Plantae",
    namaLatin: "M. acuminata",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Papaya_cross_section_BNC.jpg/220px-Papaya_cross_section_BNC.jpg",
    nama: "Pepaya",
    kingdom: "Plantae",
    namaLatin: "Carica papaya",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Watermelon_cross_BNC.jpg/220px-Watermelon_cross_BNC.jpg",
    nama: "Semangka",
    kingdom: "Plantae",
    namaLatin: "Citrullus lanatus",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg/220px-Sacred_lotus_Nelumbo_nucifera.jpg",
    nama: "Lotus Flower",
    kingdom: "Plantae",
    namaLatin: "Nelumbo nucifera",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/220px-Sunflower_sky_backdrop.jpg",
    nama: "Sunflower",
    kingdom: "Plantae",
    namaLatin: "Harpalium ",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/220px-Pitaya_cross_section_ed2.jpg",
    nama: "Buah Naga",
    kingdom: "Plantae",
    namaLatin: "Hylocereus undatus",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Kiwi_%28Actinidia_chinensis%29_2_Luc_Viatour.jpg/240px-Kiwi_%28Actinidia_chinensis%29_2_Luc_Viatour.jpg",
    nama: "Kiwi",
    kingdom: "Plantae",
    namaLatin: "Actinidia deliciosa",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/200px-Table_grapes_on_white.jpg",
    nama: "Anggur",
    kingdom: "Plantae",
    namaLatin: "Vitis vinifera",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pineapple1.JPG/220px-Pineapple1.JPG",
    nama: "Nanas",
    kingdom: "Plantae",
    namaLatin: "Ananas comosus",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mangga_gedong_gincu_071021-0845_tmo.jpg/250px-Mangga_gedong_gincu_071021-0845_tmo.jpg",
    nama: "Mangga",
    kingdom: "Plantae",
    namaLatin: "Mangifera indica",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mangosteen.jpeg/250px-Mangosteen.jpeg",
    nama: "Manggis",
    kingdom: "Plantae",
    namaLatin: "Garcinia mangostana",
  },
];

const container = document.querySelector(".container");
const displayCards = () => {
  arrayOfFruits.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 18rem;");
    // <div class="card" style="width: 18rem;"></div>
    card.innerHTML = `
        <img src="${element.image}" class="card-img-top" alt="${element.nama}" />
        <div class="card-body">
          <h5 class="card-title">${element.nama}</h5>
          <p class="card-text">
            Kingdom: ${element.kingdom}
          </p>
          <p class="card-text">
            Nama Latin: ${element.namaLatin}
          </p>
        </div>
    `;
    container.appendChild(card);
  });
};
displayCards();

// body.addEventListener("click", displayCards());
