let indexInStorage = parseInt(localStorage.getItem("index_product"));
let hotel_use = hotels_db[0];
if (indexInStorage) {
  hotel_use = hotels_db[indexInStorage];
}

function viewMore(id) {
  hotel_use = hotels_db[id - 1];
  localStorage.setItem("index_product", id - 1);
  window.location.href = "./product.html";
}

function review(id) {
  localStorage.setItem("index_product", id - 1);
  window.location.reload();
}

const affichageSuggest = (hotels_db) => {
  return hotels_db
    .filter((e) => e.id !== hotel_use.id)
    .map(
      (hotel) => `
      <button class="platSection suggestion" onclick="review(${hotel.id})">
        <img src="${hotel.img}" class="pdp" alt="prd" />
        <div class="detailPlat">
          <h3>${hotel.name}</h3>
          <div class="etoile">${createStrIcon(hotel.popularity, "..")}</div>
        </div>
      </button>
    `
    )
    .join("");
};

const affichagePlat = (hot) => {
  // let plat = [];
  // hot.plat.map((n) => plat.push(platDB.filter((e) => e.id == n)));
  return hot.ingredient
    .map(
      (n) =>
        `<div class="platSection ingredient">
    <img src="${matierPremier[n - 1].img}" alt="plat" />
    <div class="detailPlat">
      <h3>${matierPremier[n - 1].name}</h3>
      <p>${matierPremier[n - 1].type}</p>
    </div>
  </div>`
    )
    .join("");
};

function filterSugg() {
  document.querySelector(".containerResult").innerHTML = affichageSuggest(
    hotels_db.filter((n) =>
      n.name
        .toLowerCase()
        .includes(document.querySelector("#searchSugg").value.toLowerCase())
    )
  );
}

function create_content_page() {
  const totalForce = hotel_use.proteine + hotel_use.glucide + hotel_use.lipide;

  let string_insert = `
  <div class="leftPage">
        <nav>
          <a href="./produit.html">
            <img src="../images/icon/arrowlefwhite.png" alt="back" />
          </a>
          <h2>Suggestion</h2>
          <br />
        </nav>
        <div class="searchBar">
          <input type="text" placeholder="Nom du plat ..." id="searchSugg" onchange="filterSugg()"/>
          <button onclick="filterSugg()"><img src="../images/icon/searchgr.png" alt="" /></button>
        </div>
        <div class="containerResult"><br>
          ${affichageSuggest(hotels_db)}
        </div>
      </div>
      <div class="rightPage">
        <div class="spaceProduct">
          <img src="${hotel_use.img}" alt="hotel" />
          <h1>
            ${hotel_use.name}
            <div class="etoile">${createStrIcon(
              hotel_use.popularity,
              ".."
            )}</div>
          </h1>
          <p class="place">${hotel_use.cat}</p>
          <div class="carterisitque">
            <div class="cartLeft">
              <h4>Détails</h4>
              <p>Nombre en stock</p>
              <div class="statTotal">
                <div class="detailStat">
                  <p>${parseInt(hotel_use.stock)}/20</p>
                </div>
                <div class="stat" id="statStock" style="width: ${
                  (hotel_use.stock * 220) / 20
                }px ;"></div>
                </div>
              <p>Limite de consommation :</p>
              <p class="dlcClass">${hotel_use.dlc}</p>
              
              <p style="color:#fff;">Disponible : ${findDispo(
                hotel_use.available
              )}</p>
            </div>
            <div class="cartRigh">
              <h4>Caractéristique</h4>
              <p>Proteine : ${parseInt(
                (hotel_use.proteine * 100) / totalForce
              )} %</p>
              <div class="statTotal">
              <div class="detailStat" >
              <p>${hotel_use.proteine} / ${totalForce}</p>
                </div>
                <div class="stat statG" style="width: ${
                  (hotel_use.proteine * 220) / totalForce
                }px ;"></div>
              </div>
              <p>Glucide : ${parseInt(
                (hotel_use.glucide * 100) / totalForce
              )} %</p>
              <div class="statTotal">
              <div class="detailStat" >
              <p>${hotel_use.glucide} / ${totalForce}</p>
                </div>
                <div class="stat statG" style="width: ${
                  (hotel_use.glucide * 220) / totalForce
                }px ;"></div>
              </div>
              <p>Lipide : ${parseInt(
                (hotel_use.lipide * 100) / totalForce
              )} %</p>
              <div class="statTotal">
              <div class="detailStat" >
              <p>${hotel_use.lipide} / ${totalForce}</p>
                </div>
                <div class="stat statG" style="width: ${
                  (hotel_use.lipide * 220) / totalForce
                }px ;"></div>
              </div>
              <h4>Prix</h4>
              <p>Standard : ${hotel_use.prix} Ar</p>
              <p>Commercial : ${parseInt(hotel_use.prix * 0.2)} Ar</p>
            </div>
          </div>
        </div>
        <div class="spaceFood">
          <h2>Ingredients</h2>
          ${affichagePlat(hotel_use)}
        </div>
      </div>
  `;
  document
    .querySelector(".container")
    .insertAdjacentHTML("afterbegin", string_insert);
}
