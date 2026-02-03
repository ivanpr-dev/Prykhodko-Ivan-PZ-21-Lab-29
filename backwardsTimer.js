let timeLeft = prompt("Введіть кількість секунд: ");

function time() {
  console.log(`Залишилося: ${timeLeft} секунд`);
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdown);
    console.log('Час вийшов!');
  }
}

const countdown = setInterval(time, 1000);