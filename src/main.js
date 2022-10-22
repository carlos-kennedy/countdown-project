import "./scss/index.css";

const timer = [
  document.querySelector(".counter ul li:nth-child(1) h2"),
  document.querySelector(".counter ul li:nth-child(2) h2"),
  document.querySelector(".counter ul li:nth-child(3) h2"),
  document.querySelector(".counter ul li:nth-child(4) h2"),
];

let countDownDate = new Date("Oct 31, 2022 15:37:15").getTime();
const countDownEvery1Second = setInterval(function () {
  const currentDate = new Date().getTime();
  const distanceNowAndCountDownDate = countDownDate - currentDate;
  const d =
    "0" +
    Math.floor(distanceNowAndCountDownDate / (1000 * 60 * 60 * 24)) +
    " : ";
  const h =
    Math.floor(
      (distanceNowAndCountDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ) + " : ";
  const m =
    Math.floor((distanceNowAndCountDownDate % (1000 * 60 * 60)) / (1000 * 60)) +
    " : ";
  const s = Math.floor((distanceNowAndCountDownDate % (1000 * 60)) / 1000);

  timer[0].innerHTML = d;
  timer[1].innerHTML = h;
  timer[2].innerHTML = m;
  timer[3].innerHTML = s;
}, 1000);
