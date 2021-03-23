console.log("JavaScript - Digital Clock");
// Using the new knowledge leaned in index.js file we can implement a digital clock
// The digital clock will use existing html objects in index.html file
// Using "setInterval" we will calculate the value for seconds, minutes and hours an update the page every second to reflect the time spend on the page

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

let interval;
document.getElementById("start").addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(function () {
      renderDigits(seconds, secondsParagraphs);
      renderDigits(minutes, minutesParagraphs);
      renderDigits(hours, hoursParagraphs);

      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      if (hours === 24) {
        hours = 0;
      }
    }, 100);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);
});

document.getElementById("save").addEventListener("click", () => {
  const clock = document.querySelector(".digital-clock");
  const clockCopy = clock.cloneNode(true);
  document.body.appendChild(clockCopy);
});

function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}
