import "./scss/index.css";

const timer = [
  document.querySelector(".counter ul li:nth-child(1) h2"),
  document.querySelector(".counter ul li:nth-child(2) h2"),
  document.querySelector(".counter ul li:nth-child(3) h2"),
  document.querySelector(".counter ul li:nth-child(4) h2"),
];

const countDownDate = new Date("nov 1, 2022 15:32:15").getTime();
const countDownEvery1Second = setInterval(function () {
  const currentDate = new Date().getTime();
  const distanceNowAndCountDownDate = countDownDate - currentDate;
  const d = Math.floor(distanceNowAndCountDownDate / (1000 * 60 * 60 * 24));
  const h = Math.floor(
    (distanceNowAndCountDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const m = Math.floor(
    (distanceNowAndCountDownDate % (1000 * 60 * 60)) / (1000 * 60)
  );
  const s = Math.floor((distanceNowAndCountDownDate % (1000 * 60)) / 1000);
  if (distanceNowAndCountDownDate <= 0) {
    document.querySelector("ul").innerHTML = "O FOGUETE JÁ FOI LANÇADO";
    clearInterval(x);
    const d = date.getDay() + 1;
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    timer[0].innerHTML = d <= 9 ? "0" + d + " :" : d + " :";
    timer[1].innerHTML = h <= 9 ? "0" + h + " :" : h + " :";
    timer[2].innerHTML = m <= 9 ? "0" + m + " :" : m + " :";
    timer[3].innerHTML = s <= 9 ? "0" + s : s;
  } else {
    timer[0].innerHTML = d <= 9 ? "0" + d + " :" : d + " :";
    timer[1].innerHTML = h <= 9 ? "0" + h + " :" : h + " :";
    timer[2].innerHTML = m <= 9 ? "0" + m + " :" : m + " :";
    timer[3].innerHTML = s <= 9 ? "0" + s : s;
  }
});
