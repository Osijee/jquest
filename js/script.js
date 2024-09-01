const container = document.querySelector("#containerP");
let spanResult = document.querySelector(".resultSearch");

function createStrIcon(number, pointer) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result +=
      '<img src="' + pointer + '/images/icon/star_yellow.png" alt="e" />';
  }
  for (let i = 0; i < 5 - number; i++) {
    result +=
      '<img src="' + pointer + '/images/icon/star_false.png" alt="e" />';
  }
  return result;
}

function findDispo(n) {
  return n ? "Oui" : "Non";
}

const hotels_db = data_base;
function affichage_hotel(hotels) {
  for (let i = 0; i < hotels.length; i++) {
    let hotel = hotels[i];

    let classAcces = "goodAccess";
    !hotel.available && (classAcces = "badAcces");
    let article =
      '<article class="product"><span class="modal"><button onclick="viewMore(' +
      hotel.id +
      ')">Voir plus</button></span><img src="' +
      hotel.img +
      '" alt="Hotels" /><strong class="nameProduct">' +
      hotel.name +
      '</strong><div class="etoile">' +
      //variable
      createStrIcon(hotel.popularity, "..") +
      '</div><p class="access">Disponible : <strong class="' +
      classAcces +
      '">' +
      findDispo(hotel.available) +
      "</strong></p><p><img src='../images/icon/tag2.png' alt='e' />" +
      hotel.prix +
      " Ar</p><p><img src='../images/icon/cat.png' alt='e' /> :  " +
      hotel.cat +
      "</p><p>En stock : " +
      hotel.stock +
      "</p></article>";

    container.insertAdjacentHTML("afterbegin", article);
  }
}

// filter process
function popular_plat() {
  spanResult.innerHTML = "Les plus populaires";
  format_list();
  const hotels_pop = [...hotels_db];
  hotels_pop.sort((a, b) => a.popularity - b.popularity); // trier le tableaux
  affichage_hotel(hotels_pop);
}

function stock_plat() {
  spanResult.innerHTML = "Trier par les stocks restants";
  format_list();
  const hotels_re = [...hotels_db];
  hotels_re.sort((a, b) => a.stock - b.stock);
  affichage_hotel(hotels_re);
}

function price_plat() {
  spanResult.innerHTML = "Trier par le prix";
  format_list();
  const hotels_re = [...hotels_db];
  hotels_re.sort((a, b) => a.prix - b.prix);
  affichage_hotel(hotels_re);
}

function acces_plat() {
  spanResult.innerHTML = "Les disponible seulement";
  format_list();
  affichage_hotel(hotels_db.filter((a) => a.available == true));
}

const format_list = () => {
  // suprime tout les enfants du container

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
