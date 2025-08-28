// Choisir un nombre aléatoire entre 1 et 10
let nombreSecret = Math.floor(Math.random() * 10) + 1;

function verifierNombre() {
  const guess = document.getElementById("guess").value;
  const result = document.getElementById("result");

  if (!guess) {
    result.textContent = "⛔️ Entrer un nombre, stp.";
    return;
  }

  const guessNumber = parseInt(guess);

  if (guessNumber === nombreSecret) {
    result.textContent = "🎉 Bravo ! Tu as deviné le bon nombre !";
  } else if (guessNumber < nombreSecret) {
    result.textContent = "📉 Trop petit ! Essaie encore.";
  } else {
    result.textContent = "📈 Trop grand ! Essaie encore.";
  }
}
