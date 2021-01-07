const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playingTo = document.querySelector('#playingTo');
const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', function() {
    if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
        isGameOver = true;
        p1Display.classList.add("has-text-success");
        p2Display.classList.add("has-text-danger");
        p1Btn.disabled = true;
        p2Btn.disabled = true;
    }
    p1Display.textContent = `${p1Score} `;
    }
})

p2Btn.addEventListener("click", function () {
    if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-danger");
      p2Display.classList.add("has-text-success");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p2Display.textContent = `${p2Score} `
    }
});

resetBtn.addEventListener('click', function() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = `${p1Score} `;
    p2Display.textContent = `${p2Score} `;
    p1Display.classList.remove("has-text-success", "has-text-danger");
    p2Display.classList.remove("has-text-success", "has-text-danger");
    p1Btn.disabled = false;
    p2Btn.disabled = false;
});

playingTo.addEventListener('change', function() {
    const toScoreNum = parseInt(this.value);
    winningScore = toScoreNum;
})



