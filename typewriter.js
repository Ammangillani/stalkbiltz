var typed;

function initializeTyped() {
  typed = new Typed(".auto-type", {
    strings: ["Code."],
    typeSpeed: 0,
    backSpeed: 0,
    loop: false,
  });
}

function initializeFullTyped() {
  typed = new Typed(".auto-type", {
    strings: [
      "Code.",
      "Learn New Framework.",
      "Teach New Framework.",
      "Collaborate.",
      "Present Live Demo.",
      "Run live Example.",
      "Create Bug Report.",
      "Review Bug Report.",
      "Get Feedback.",
    ],
    typeSpeed: 20,
    backSpeed: 10,
    loop: true,
  });
}

function checkScreenSize() {
  if (window.innerWidth < 768) {
    initializeTyped();
  } else {
    initializeFullTyped();
  }
}

checkScreenSize();
window.addEventListener("resize", checkScreenSize);
