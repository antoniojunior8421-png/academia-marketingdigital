// CONTADOR SIMPLES
let countDownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML = days + " dias restantes";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Promoção terminou";
  }
}, 1000);
