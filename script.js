let userName = "";
let noCount = 0;

function goToPage2() {
  userName = document.getElementById("nameInput").value || "Sayang";
  document.getElementById("login").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
  document.getElementById("userName").textContent = userName;
}

function sayNo() {
  noCount++;
  document.getElementById("warning").classList.remove("hidden");

  const yesBtn = document.getElementById("yesBtn");
  yesBtn.style.transform = `scale(${1 + noCount * 0.15})`;
}

function sayYes() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
  document.getElementById("userName2").textContent = userName;
}

function showBouquet() {
  document.getElementById("bouquetArea").classList.remove("hidden");
  createConfetti();
}

function createConfetti() {
  const confetti = document.getElementById("confetti");

  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.textContent = "💖";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDelay = Math.random() * 2 + "s";
    confetti.appendChild(span);

    setTimeout(() => span.remove(), 3000);
  }
}
function launchConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ff6b81", "#ffc0cb", "#ff9ff3", "#feca57"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 3 + Math.random() * 2 + "s";

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
function toggleVinyl() {
  const music = document.getElementById("bgMusic");
  const vinyl = document.getElementById("vinyl");

  if (music.paused) {
    music.play();
    vinyl.classList.add("playing");
  } else {
    music.pause();
    vinyl.classList.remove("playing");
  }
}
const vinyl = document.getElementById("vinyl");
vinyl.classList.add("playing");
