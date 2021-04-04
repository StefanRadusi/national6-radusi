console.log("JavaScript - Browser Object Model - BOM")


// BOM is a object much la the DOM but it is like it parent
// The context for the BOM is the entire browser window not just the current tab like for the DOM
// The are a number of attributes and methods that can be used on the BOM, some of them can be seen below
// The BOM is accessed in javascript by using the implicit object "window"
// For the entire list of them check: https://developer.mozilla.org/en-US/docs/Web/API/Window 


// will print info on client screen characteristics like with and height
console.log(window.screen);

// will open a new tab and optional you can pass and url
document.getElementById("open").addEventListener("click", () => {
  window.open("https://google.com");
});


// will close the current tab
document.getElementById("close").addEventListener("click", () => {
  window.close();
});

// "load" event will be triggered only after all the js and css resources all loaded
// "load" event is heavily used by third party libraries like jQuery 
window.addEventListener("load", () => {
  console.log("all is loaded");
});

// "resize" event is trigger every time the use resizes the window
// as we can see all tabs in the window have the inherited dimension from the window
// "resize" is heavily used to reposition elements in you app when the use changes size like changing the screen orientation
window.addEventListener("resize", (event) => {
  console.log(event);
});


// ".location" attribute can retrieve the current url of the app or when is set it can change url having as impact a redirect to another url
document.getElementById("redirect").addEventListener("click", () => {
  window.location = "https://google.com";
});
