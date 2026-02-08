const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const responseSection = document.querySelector(".response");
const firstContainer = document.querySelector(".first");
const wmax = window.innerWidth - noButton.offsetWidth;
const hmax = window.innerHeight - noButton.offsetHeight;
const message = document.querySelector(".message");
const body = document.body;
const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", () => {
  responseSection.style.display = "none";
});

function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

yesButton.addEventListener("click", (e) => {
  responseSection.style.display = "block";
  firstContainer.style.display = "none";
  launchConfetti();
});

function showMessage(text) {
  message.textContent = text;

  message.classList.remove("animate");
  void message.offsetWidth;
  message.classList.add("animate");
}

function error404() {
  showMessage("Error 404: Message not found!");
  main.style.display = "none";
  body.classList.add("error404");
}

let counter = 0;
noButton.addEventListener("mouseenter", (e) => {
  counter++;

  if (counter === 5) {
    showMessage("Please click the YES button!");
  } else if (counter === 7) {
    showMessage("Don't be shy, click the YES button!");
    yesButton.classList.add("action");
  } else if (counter === 10) {
    showMessage("There is no option!");
  } else if (counter === 15) {
    showMessage("I'm getting tired of moving the NO button!");
  } else if (counter === 20) {
    showMessage("Don't you love me? Click the Yes button!");
  } else if (counter > 25) {
    showMessage("Okay, I quit! You win!");
    setTimeout(error404, 2000);

    counter = 0;
  }
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * wmax + "px";
  noButton.style.top = Math.random() * hmax + "px";
});
