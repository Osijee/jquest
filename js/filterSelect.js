const buttonArray = document.querySelectorAll(".btnFilter");
const backBlue = document.getElementById("backSelect");

buttonArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttonArray.forEach((secBtn) => {
      secBtn.classList.remove("active_filter");
    });
    btn.classList.add("active_filter");
    backBlue.style.height = "31px";
    backBlue.style.top = btn.offsetTop + "px";
  });
});

const catVidArray = document.querySelectorAll(".btn_vid_filt");
const backVidFilt = document.getElementById("backVidFilt");

catVidArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    backVidFilt.style.left = btn.offsetLeft + "px";
    console.log();
    switch (e.srcElement.innerHTML) {
      case "Pub":
        document.querySelector(".pub").style.display = "block";
        document.querySelector(".plats").style.display = "none";
        document.querySelector(".cuisine").style.display = "none";
        break;
      case "Plats":
        document.querySelector(".pub").style.display = "none";
        document.querySelector(".cuisine").style.display = "none";
        document.querySelector(".plats").style.display = "block";
        break;
      default:
        document.querySelector(".pub").style.display = "none";
        document.querySelector(".cuisine").style.display = "block";
        document.querySelector(".plats").style.display = "none";
        break;
    }
  });
});
