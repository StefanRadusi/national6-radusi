// document.addEventListener("click", () => {
//   console.log("click");
// });

// setTimeout(() => {
//   console.log("time end");
// }, 1000);

// const interval = setInterval(() => {
//   console.log("ping");
// }, 2000);

// clearInterval(interval);

// we need to call "secondStep" only after "firstStep" ended
// function thirdStep() {
//   setTimeout(() => {
//     console.log("End of third step");
//   }, 500);
// }

// function firstStep() {
//   setTimeout(() => {
//     console.log("End of first step");
//     secondStep();
//   }, 2000);
// }

// function secondStep() {
//   setTimeout(() => {
//     console.log("End of second step");
//     thirdStep();
//   }, 1000);
// }

// firstStep();

// Promises

function firstStep() {
  return new Promise();
}
