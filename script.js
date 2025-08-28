// Choisir un nombre aléatoire entre 1 et 100

let secretNumber = 21;
let score = 0;
function jouer() {
  alert("العب تبدأ! حاول تخمن رقم من 1 إلى 100.");
}

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');
  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "";
    return;
  }
  if (guess === secretNumber) {
    feedback.textContent = "zeyed maak mon héros";
    score += 10;
    document.getElementById('score').textContent = score;
    secretNumber = 21; // رقم جديد للعب مرة أخرى
    winSound.play()
  } else if (guess > secretNumber) {
    feedback.textContent = "nakes chwaya aayech habibi";
  } else {
    feedback.textContent = "zyd chwaya aayech habibi";
  const winSound = new Audio('sounds/win.mp3');

  }
}

  
