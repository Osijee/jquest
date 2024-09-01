let loader = document.querySelector(".productContent");
loader = loader ? loader : document.querySelector(".container");

window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
  loader != null && (loader.style.display = "flex");
});
