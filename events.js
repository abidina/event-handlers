// giving variables to each element that needs an event listener
var outputEl = document.getElementById("output-target");
var articleEl = document.getElementsByClassName("article-section");
var h1El = document.getElementById("page-title");
var fieldEl = document.getElementById("keypress-input");
var guineaEl = document.getElementById("guinea-pig");
var colorButton = document.getElementById("add-color");
var hulkButton = document.getElementById("make-large");
var capButton = document.getElementById("add-border");
var roundButton = document.getElementById("add-rounding");

// loops through the articleEl and prints the one that's clicked 
function handleSectionClick(MouseEvent) {
  var elementText = MouseEvent.target.innerHTML;
  outputEl.innerHTML = "You clicked on the " + elementText + " section.";
}

for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
}

// add a hover event and another 
h1El.addEventListener("mouseover", function(event) {
  outputEl.innerHTML = "You moved your mouse over the header.";
});
h1El.addEventListener("mouseout", function(event) {
  outputEl.innerHTML = "You left me!!";
});

// user input mirrors output text
fieldEl.addEventListener("keyup", function (event) {
  outputEl.innerHTML = event.target.value;
});

// give buttons click events -- set attributes to connect to css classes
colorButton.addEventListener("click", function() {
  guineaEl.setAttribute("class", "blue");
});
hulkButton.addEventListener("click", function() {
  guineaEl.setAttribute("class", "hulkify");
});
capButton.addEventListener("click", function() {
  guineaEl.setAttribute("class", "capture");
});
roundButton.addEventListener("click", function() {
  guineaEl.setAttribute("class", "rounded");
});
