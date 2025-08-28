// Choisir un nombre aléatoire entre 1 et 100

let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;
function jouer() {
  alert("العب تبدأ! حاول تخمن رقم من 1 إلى 100.");
}

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');
  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "ادخل رقم بين 1 و 100!";
    return;
  }
  if (guess === secretNumber) {
    feedback.textContent = "مبروك! ربحته!";
    score += 10;
    document.getElementById('score').textContent = score;
    secretNumber = Math.floor(Math.random() * 100) + 1; // رقم جديد للعب مرة أخرى
  } else if (guess > secretNumber) {
    feedback.textContent = "نقص شويّ!";
  } else {
    feedback.textContent = "زيد شويّ!";
  }
}

  
