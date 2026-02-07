const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const responseSection = document.querySelector(".response");
const firstContainer = document.querySelector(".first");

document.addEventListener("DOMContentLoaded", () => {
  responseSection.style.display = "none";
});

yesButton.addEventListener("click", (e) => {
  responseSection.style.display = "block";
  firstContainer.style.display = "none";
});

let counter = 0;
noButton.addEventListener("mouseenter", (e) => {
  counter++;

  if (counter === 5) {
    alert("Please click the YES button!");
  } else if (counter === 7) {
    alert("Don't be shy, click the YES button!");
  } else if (counter === 10) {
    alert("There is no option!");
  } else if (counter === 15) {
    alert("I'm getting tired of moving the NO button!");
  } else if (counter === 20) {
    alert("Don't you love me? click the YES button!");
    counter = 0;
  }
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 500 + "px";
  noButton.style.top = Math.random() * 600 + "px";
});
