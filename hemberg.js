let close = document.getElementById("close");
let open = document.getElementById("open");
let nav = document.querySelector(".navanchors");

function openmenu() {
  nav.style.right = "0";
}
function closemenu() {
  nav.style.right = "-1000px";
}

open.addEventListener("click", openmenu);
close.addEventListener("click", closemenu);
