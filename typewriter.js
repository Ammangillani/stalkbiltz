// The typewriter element
var typeWriterElement = document.getElementById("typewriter");

// The TextArray:
var textArray = [
  "Hey, I'm Tim.",
  "I like JavaScript.",
  "I Love to Develop.",
  "I like this Typewriter.",
];

// function to generate the backspace effect
function delWriter(text, i, cb) {
  if (i >= 0) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    // generate a random Number to emulate backspace hitting.
    var rndBack = 10 + Math.random() * 100;
    setTimeout(function () {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb == "function") {
    cb();
  }
}

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
  if (i < text.length + 1) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    // generate a random Number to emulate Typing on the Keyboard.
    var rndTyping = 250 - Math.random() * 100;
    setTimeout(function () {
      typeWriter(text, i++, cb);
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(function () {
      delWriter(text, i, cb);
    }, 1000);
  }
}

// the main writer function
function StartWriter(i) {
  var index = i % textArray.length; // Use modulo to loop through the textArray
  typeWriter(textArray[index], 0, function () {
    StartWriter(i + 1);
  });
}
// start the typewriter
StartWriter(0);
