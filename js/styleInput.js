function show(anything) {
  document.querySelector(".textBox").value = anything;
}
function showType(anything) {
  document.querySelector(".textBoxType").value = anything;
}

const dropdownArray = document.querySelectorAll(".dropDown");

dropdownArray.forEach((dropdown) => {
  let isHover = false;
  dropdown.onclick = function () {
    dropdown.classList.toggle("active");
  };
  dropdown.onmouseenter = () => {
    isHover = true;
  };
  dropdown.onmouseleave = () => {
    isHover = false;
  };

  document.addEventListener("click", () => {
    if (dropdown.classList.contains("active") && !isHover) {
      dropdown.classList.remove("active");
    }
  });
});

const search_btn = document.querySelector(".btn-search-advanced");
search_btn.addEventListener("click", (e) => {
  let region = document.getElementById("region").value;
  let pers = document.getElementById("pers").value;
  let typeHot = document.getElementById("typeHot").value;
  let price = document.getElementById("gold").value;

  region = region == "" ? (region = "Italien") : region;
  typeHot = typeHot == "" ? (typeHot = "1 étoile") : typeHot;
  pers = pers == "" ? (pers = 1) : pers;
  price = price == "" ? (price = 32000) : price;

  switch (typeHot) {
    case "5 étoiles":
      typeHot = 5;
      break;
    case "4 étoiles":
      typeHot = 4;
      break;
    case "3 étoiles":
      typeHot = 4;
      break;
    case "2 étoiles":
      typeHot = 2;
      break;

    default:
      typeHot = 1;
      break;
  }

  format_list();
  const hotels_re = hotels_db.filter(
    (hot) =>
      hot.cat == region &&
      hot.popularity >= typeHot &&
      hot.prix <= price &&
      hot.stock >= pers
  );
  hotels_re.sort((a, b) => {
    b.popularity - a.popularity;
  });
  hotels_re.length == 0
    ? (spanResult.innerHTML =
        "Aucune résultat sur " + hotels_db.length + " recettes")
    : (spanResult.innerHTML =
        "Il y a " +
        hotels_re.length +
        " résultat(s) trouver sur " +
        hotels_db.length +
        " bâtiments"),
    affichage_hotel(hotels_re);
});
