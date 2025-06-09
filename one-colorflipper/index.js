const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

// Grab buttons by ID
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const randomButton = document.getElementById("random");

// event listeners

greenButton.addEventListener("click", () => setColor("green"))
redButton.addEventListener("click", () => setColor("red"))
blueButton.addEventListener("click", () => setColor("blue"))


randomButton.addEventListener("click", () => setColor(getRandomColor()))

// random color generator
function getRandomColor() {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}