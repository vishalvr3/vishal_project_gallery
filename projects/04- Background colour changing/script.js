console.log("Background colour changing");

/*
// 1

const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red", "yellow", "blue", "pink", "violet", "coral", "orange"];

button.addEventListener("click", function () {
  const colorIndex = Math.round(Math.random() * colors.length);
  const color = colors[colorIndex];

  body.style.backgroundColor = color;
});
*/

// 2

const body = document.querySelector("body");
const itemContainer = document.querySelector(".itemContainer");
const input = document.querySelector("input");
const containerWrite = document.querySelector(".container__write");
const containerSelect = document.querySelector(".container__select");
const buttonWrite = document.querySelector(".button__write");
const buttonSelect = document.querySelector(".button__select");
const colorPalette = document.querySelector(".color__palette");

let colorName;

// write color
buttonWrite.addEventListener("click", function () {
  colorName = input.value;
  body.style.backgroundColor = colorName;

  input.value = "";
  // containerSelect.style.opacity = 0;
});

// Select color
buttonSelect.addEventListener("click", function () {
  colorName = colorPalette.value;

  body.style.backgroundColor = colorName;
  // containerWrite.style.opacity = 0;
  // document.querySelector(".para__select").style.opacity = 0;
});
