/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBreeds\": () => (/* binding */ getBreeds),\n/* harmony export */   \"getImgsByBreed\": () => (/* binding */ getImgsByBreed)\n/* harmony export */ });\nfunction getBreeds(callback) {\n  fetch(\"https://dog.ceo/api/breeds/list/all\")\n    .then((r) => r.json())\n    .then((json) => {\n      callback(Object.keys(json.message));\n    });\n}\n\nfunction getImgsByBreed(breed, callback) {\n  fetch(`https://dog.ceo/api/breed/${breed}/images`)\n    .then((r) => r.json())\n    .then((json) => {\n      callback(json.message);\n    });\n}\n\n\n//# sourceURL=webpack://national6-radusi/./src/api.js?");

/***/ }),

/***/ "./src/authentication.js":
/*!*******************************!*\
  !*** ./src/authentication.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAuthentication\": () => (/* binding */ setAuthentication)\n/* harmony export */ });\nfunction setAuthentication() {\n  if (!localStorage.getItem(\"name\") || !localStorage.getItem(\"password\")) {\n    window.location = \"/login.html\";\n  }\n\n  document.getElementById(\"logout\").addEventListener(\"click\", () => {\n    localStorage.removeItem(\"name\");\n    localStorage.removeItem(\"password\");\n    window.location = \"/\";\n  });\n}\n\n\n//# sourceURL=webpack://national6-radusi/./src/authentication.js?");

/***/ }),

/***/ "./src/breedImgCarousel.js":
/*!*********************************!*\
  !*** ./src/breedImgCarousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateDogImg\": () => (/* binding */ updateDogImg),\n/* harmony export */   \"updatePageNumber\": () => (/* binding */ updatePageNumber),\n/* harmony export */   \"goToNextImg\": () => (/* binding */ goToNextImg),\n/* harmony export */   \"goToPreviousImg\": () => (/* binding */ goToPreviousImg)\n/* harmony export */ });\nconst dogImgHtmlRef = document.getElementById(\"breed-image\");\nconst pageNumberHtmlRef = document.getElementById(\"page-number\");\n\nfunction updateDogImg(img) {\n  dogImgHtmlRef.src = img;\n}\n\nfunction updatePageNumber(nr) {\n  pageNumberHtmlRef.innerText = nr + 1;\n}\n\nfunction goToNextImg(currentDogImg, dogImages) {\n  localStorage.setItem(\"currentDogImg\", currentDogImg);\n  updatePageNumber(currentDogImg);\n  updateDogImg(dogImages[currentDogImg]);\n}\n\nfunction goToPreviousImg(currentDogImg, dogImages) {\n  localStorage.setItem(\"currentDogImg\", currentDogImg);\n  updatePageNumber(currentDogImg);\n  updateDogImg(dogImages[currentDogImg]);\n}\n\n\n//# sourceURL=webpack://national6-radusi/./src/breedImgCarousel.js?");

/***/ }),

/***/ "./src/breedList.js":
/*!**************************!*\
  !*** ./src/breedList.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBreeds\": () => (/* binding */ renderBreeds)\n/* harmony export */ });\nfunction renderBreeds(breeds, currentBreed, callback) {\n  console.log(breeds);\n  for (const breed of breeds) {\n    generateBreedButton(breed, currentBreed, callback);\n  }\n}\n\nfunction generateBreedButton(breed, currentBreed, callback) {\n  const p = document.createElement(\"p\");\n  p.classList.add(\"breed-button\");\n  p.innerText = breed;\n  document.getElementById(\"breeds\").appendChild(p);\n\n  if (breed === currentBreed) {\n    p.classList.add(\"breed-button-selected\");\n  }\n\n  p.addEventListener(\"click\", () => {\n    const currentSelectedButton = document.querySelector(\n      \".breed-button-selected\"\n    );\n    if (currentSelectedButton)\n      currentSelectedButton.classList.remove(\"breed-button-selected\");\n\n    p.classList.add(\"breed-button-selected\");\n\n    localStorage.setItem(\"currentBreed\", breed);\n    callback(breed);\n  });\n}\n\n\n//# sourceURL=webpack://national6-radusi/./src/breedList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _breedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breedList */ \"./src/breedList.js\");\n/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication */ \"./src/authentication.js\");\n/* harmony import */ var _breedImgCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breedImgCarousel */ \"./src/breedImgCarousel.js\");\nconsole.log(\"JavaScript - Dogs App\");\n\n\n\n\n\n\n(0,_authentication__WEBPACK_IMPORTED_MODULE_2__.setAuthentication)();\n\n// HOMEWORK SOLUTION\n\nlet currentBreed = localStorage.getItem(\"currentBreed\");\nlet currentDogImg = Number(localStorage.getItem(\"currentDogImg\")) || 0;\nlet dogImages = [];\n\nif (currentBreed) {\n  (0,_api__WEBPACK_IMPORTED_MODULE_0__.getImgsByBreed)(currentBreed, (imgs) => {\n    dogImages = imgs;\n    (0,_breedImgCarousel__WEBPACK_IMPORTED_MODULE_3__.updatePageNumber)(currentDogImg);\n    (0,_breedImgCarousel__WEBPACK_IMPORTED_MODULE_3__.updateDogImg)(dogImages[currentDogImg]);\n  });\n}\n\n(0,_api__WEBPACK_IMPORTED_MODULE_0__.getBreeds)((breeds) => {\n  (0,_breedList__WEBPACK_IMPORTED_MODULE_1__.renderBreeds)(breeds, currentBreed, (breed) => {\n    currentDogImg = 0;\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.getImgsByBreed)(breed, (imgs) => {\n      dogImages = imgs;\n      (0,_breedImgCarousel__WEBPACK_IMPORTED_MODULE_3__.updatePageNumber)(currentDogImg);\n      (0,_breedImgCarousel__WEBPACK_IMPORTED_MODULE_3__.updateDogImg)(dogImages[currentDogImg]);\n    });\n  });\n});\n\ndocument.getElementById(\"backward\").addEventListener(\"click\", () => {\n  if (currentDogImg - 1 >= 0) {\n    currentDogImg--;\n    (0,_breedImgCarousel__WEBPACK_IMPORTED_MODULE_3__.goToPreviousImg)(currentDogImg, dogImages);\n  }\n});\n\ndocument.getElementById(\"forward\").addEventListener(\"click\", () => {\n  if (currentDogImg + 1 <= dogImages.length - 1) {\n    currentDogImg++;\n    (0,_breedImgCarousel__WEBPACK_IMPORTED_MODULE_3__.goToNextImg)(currentDogImg, dogImages);\n  }\n});\n\n\n//# sourceURL=webpack://national6-radusi/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;