let close = document.getElementById("close");
let open = document.getElementById("open");
let nav = document.querySelector(".nav-content");

function openmenu() {
  nav.style.right = "20px";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  nav.style.right = "-1000px";
}
close.addEventListener("click", closemenu);
