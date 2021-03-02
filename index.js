console.log("JavaScript - Async Programming");

// To identify easily part for the code will run asynchronous you will have to look to functions that ar bound by an event
// Every function bound to and event will be stored in a que of function that will be brought back for usage when the event is triggered
// The functions bound to events are called "callback-functions"

document.addEventListener("click", onClick);

let counter = 0;
// "onClick" function is a callback function and as you above can see is bound to be called by "click" event
// even thou a callback function is stored in a que to be later used, the function still has access to the global variables/constant declared
// in this case "counter" variable will be used from global context in the function to be incremented each time the user clicks in the document
function onClick() {
  console.log("just a click in the app");
  counter++;
  console.log("counter:", counter);
}
console.log("counter:", counter);

// "setTimeout" has the functionality of calling a callback-function with a delay
// the first argument in this case is a anonymous function or in other terms a function without a name
setTimeout(function () {
  console.log("1");
}, 2000);
console.log("2");

// yu don't need to have a anonymous function as an argument it can be a classic named function
setTimeout(setTimeoutFunction, 2000);

function setTimeoutFunction() {
  console.log("3");
}

// the below example will show the order of how the instruction all called
// even thou the delay for the first and second timeout are the same "Second" and "Third will be printed in this order"
// as is stated above we have a que of callback-functions so in case we have a event that triggers callbacks at the same time, the oldest function added in que will be the first to be called back.
console.log("First");
setTimeout(function () {
  console.log("Second");
}, 0);
setTimeout(function () {
  console.log("Third");
}, 0);
console.log("Fourth");
setTimeout(function () {
  console.log("Fifth");
}, 1);

// "setInterval" has the functionality of calling the callback-function at a set interval
// for this case it will be printed to the console "Ping" every 1000 milliseconds or 1 second
const pingReference = setInterval(function () {
  console.log("ping");
}, 1000);

document.getElementById("stop-ping").addEventListener("click", function () {
  clearInterval(pingReference);
});
