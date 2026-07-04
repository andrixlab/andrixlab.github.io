const signals = [
  "patterns emerge slowly",
  "clarity is a moving target",
  "the signal is below the surface",
  "systems remember",
  "meaning hides in layers",
  "look closer, then simplify",
  "structure waits under noise"
];

const signalLine = document.querySelector("#signalLine");
const signalButton = document.querySelector("#signalButton");

function pickSignal() {
  if (!signalLine) return;

  const nextSignal = signals[Math.floor(Math.random() * signals.length)];
  signalLine.textContent = nextSignal;
}

pickSignal();

if (signalButton) {
  signalButton.addEventListener("click", pickSignal);
}
