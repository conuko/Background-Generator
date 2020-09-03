var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorButton = document.getElementById("colorButton");

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value +
    ", "
    + color2.value +
    ")";

    css.textContent = body.style.background + ";";
}

// Functions for the Random-Color-Button:
function randomColor() {
    var random= "#"+((1<<24)*Math.random()|0).toString(16)
    return random;
  }

function backgroundColor() {
    color1.value=randomColor();
    color2.value=randomColor();
    setGradient();
  }

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

colorButton.addEventListener("click", backgroundColor);