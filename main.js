/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "image": () => (/* binding */ image),
/* harmony export */   "mainPage": () => (/* binding */ mainPage)
/* harmony export */ });
const mainPage = () => {
    const container = document.createElement('div');
    
    const heading = document.createElement('div');
    heading.textContent = "HuskyLand Restaurant";

    const articleHeading = document.createElement('div');
    articleHeading.textContent = "Open for Business";

    const article = document.createElement('div');
    article.textContent = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
    
    container.appendChild(heading)
    container.appendChild(articleHeading)
    container.appendChild(article)

    return container
}

const image = () => {
    return "/Users/localadmin/repos/restaurantPage/images/husky-g9a4080289_1280.png"
}






/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBar": () => (/* binding */ navBar)
/* harmony export */ });
const navBar = () => {

    // create 3 elements and return them
    // 3 elements as an array
    
    return "Home Menu About"
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ "./src/mainPage.js");
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ "./src/navBar.js");
// Now remove those elements from the HTML (so leave only the <html>,
//  <body>, and <div id="content"> tags) and instead create them by using JavaScript only, e.g. 
// by appending each new element to div#content once the page is first loaded. 
// Since we’re all set up to write our code in multiple files, let’s write this initial 
// page-load function inside of its own module and then import and call it inside of index.js.

// const logo = document.createElement('div');
// logo.innerText = "HuskyLand Restaurant"
// logo.style.fontSize = "xx-large";
// logo.style.fontWeight = "bold";
// document.querySelector("#content").appendChild(logo)

// const img = document.createElement('img');
// img.src = "/Users/localadmin/repos/restaurantPage/images/husky-g9a4080289_1280.png"
// img.height = "200"
// img.width = "200"
// document.querySelector("#content").appendChild(img)

// const element = document.createElement('div');
// element.innerText = "Open for Business"
// element.style.fontSize = "x-large";       
// element.style.fontWeight = "bold";
// document.querySelector("#content").appendChild(element)

// const element2 = document.createElement('div');
// element2.innerText = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
// element2.style.fontSize = "medium";
// element2.style.fontWeight = "normal";
// document.querySelector("#content").appendChild(element2)

/* 

start of code

*/





function writeToPage(component) {
    const content = document.querySelector("#content");

    console.log(component())
    content.appendChild(component())
}

function drawToPage(component){
    const element = document.createElement('img');
    element.src = component;
    return element;    
}


writeToPage(_mainPage__WEBPACK_IMPORTED_MODULE_0__.mainPage);


// content.appendChild(writeToPage(navBar()))

// content.appendChild(writeToPage(articleHeading()))
// content.appendChild(writeToPage(article()))
// content.appendChild(drawToPage(image()))




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUtJOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVvQztBQUNGOzs7QUFHbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsWUFBWSwrQ0FBUTs7O0FBR3BCOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21haW5QYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL25hdkJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJIdXNreUxhbmQgUmVzdGF1cmFudFwiO1xuXG4gICAgY29uc3QgYXJ0aWNsZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3BlbiBmb3IgQnVzaW5lc3NcIjtcblxuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlLnRleHRDb250ZW50ID0gXCJIdXNreSBMYW5kIGlzIHRoZSBiZXN0IHJlc3R1YXJhbnQgZm9yIGRvZ3MgYW5kIHNvbWUgcGVvcGxlLiBBbGwgZG9ncyBkZXNlcnZlIHRvIGVhdCBhdCB0aGUgZmluZXN0IHJlc3RhdXJhbnQgYW5kIHRoYXQgcGxhY2UgaXMgY2FsbGVkIEh1c2t5IExhbmQuIFwiXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGVIZWFkaW5nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRpY2xlKVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5jb25zdCBpbWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gXCIvVXNlcnMvbG9jYWxhZG1pbi9yZXBvcy9yZXN0YXVyYW50UGFnZS9pbWFnZXMvaHVza3ktZzlhNDA4MDI4OV8xMjgwLnBuZ1wiXG59XG5cbmV4cG9ydCB7XG4gICAgaW1hZ2UsXG4gICAgbWFpblBhZ2UsXG4gIH07XG5cblxuIiwiY29uc3QgbmF2QmFyID0gKCkgPT4ge1xuXG4gICAgLy8gY3JlYXRlIDMgZWxlbWVudHMgYW5kIHJldHVybiB0aGVtXG4gICAgLy8gMyBlbGVtZW50cyBhcyBhbiBhcnJheVxuICAgIFxuICAgIHJldHVybiBcIkhvbWUgTWVudSBBYm91dFwiXG59XG5cbmV4cG9ydCB7XG4gICAgbmF2QmFyLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTm93IHJlbW92ZSB0aG9zZSBlbGVtZW50cyBmcm9tIHRoZSBIVE1MIChzbyBsZWF2ZSBvbmx5IHRoZSA8aHRtbD4sXG4vLyAgPGJvZHk+LCBhbmQgPGRpdiBpZD1cImNvbnRlbnRcIj4gdGFncykgYW5kIGluc3RlYWQgY3JlYXRlIHRoZW0gYnkgdXNpbmcgSmF2YVNjcmlwdCBvbmx5LCBlLmcuIFxuLy8gYnkgYXBwZW5kaW5nIGVhY2ggbmV3IGVsZW1lbnQgdG8gZGl2I2NvbnRlbnQgb25jZSB0aGUgcGFnZSBpcyBmaXJzdCBsb2FkZWQuIFxuLy8gU2luY2Ugd2XigJlyZSBhbGwgc2V0IHVwIHRvIHdyaXRlIG91ciBjb2RlIGluIG11bHRpcGxlIGZpbGVzLCBsZXTigJlzIHdyaXRlIHRoaXMgaW5pdGlhbCBcbi8vIHBhZ2UtbG9hZCBmdW5jdGlvbiBpbnNpZGUgb2YgaXRzIG93biBtb2R1bGUgYW5kIHRoZW4gaW1wb3J0IGFuZCBjYWxsIGl0IGluc2lkZSBvZiBpbmRleC5qcy5cblxuLy8gY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gbG9nby5pbm5lclRleHQgPSBcIkh1c2t5TGFuZCBSZXN0YXVyYW50XCJcbi8vIGxvZ28uc3R5bGUuZm9udFNpemUgPSBcInh4LWxhcmdlXCI7XG4vLyBsb2dvLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChsb2dvKVxuXG4vLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbi8vIGltZy5zcmMgPSBcIi9Vc2Vycy9sb2NhbGFkbWluL3JlcG9zL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9odXNreS1nOWE0MDgwMjg5XzEyODAucG5nXCJcbi8vIGltZy5oZWlnaHQgPSBcIjIwMFwiXG4vLyBpbWcud2lkdGggPSBcIjIwMFwiXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW1nKVxuXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBlbGVtZW50LmlubmVyVGV4dCA9IFwiT3BlbiBmb3IgQnVzaW5lc3NcIlxuLy8gZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwieC1sYXJnZVwiOyAgICAgICBcbi8vIGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpXG5cbi8vIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBlbGVtZW50Mi5pbm5lclRleHQgPSBcIkh1c2t5IExhbmQgaXMgdGhlIGJlc3QgcmVzdHVhcmFudCBmb3IgZG9ncyBhbmQgc29tZSBwZW9wbGUuIEFsbCBkb2dzIGRlc2VydmUgdG8gZWF0IGF0IHRoZSBmaW5lc3QgcmVzdGF1cmFudCBhbmQgdGhhdCBwbGFjZSBpcyBjYWxsZWQgSHVza3kgTGFuZC4gXCJcbi8vIGVsZW1lbnQyLnN0eWxlLmZvbnRTaXplID0gXCJtZWRpdW1cIjtcbi8vIGVsZW1lbnQyLnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQyKVxuXG4vKiBcblxuc3RhcnQgb2YgY29kZVxuXG4qL1xuXG5pbXBvcnQge21haW5QYWdlfSBmcm9tICcuL21haW5QYWdlJztcbmltcG9ydCB7IG5hdkJhciB9IGZyb20gJy4vbmF2QmFyJztcblxuXG5mdW5jdGlvbiB3cml0ZVRvUGFnZShjb21wb25lbnQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgY29uc29sZS5sb2coY29tcG9uZW50KCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb21wb25lbnQoKSlcbn1cblxuZnVuY3Rpb24gZHJhd1RvUGFnZShjb21wb25lbnQpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlbGVtZW50LnNyYyA9IGNvbXBvbmVudDtcbiAgICByZXR1cm4gZWxlbWVudDsgICAgXG59XG5cblxud3JpdGVUb1BhZ2UobWFpblBhZ2UpO1xuXG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JpdGVUb1BhZ2UobmF2QmFyKCkpKVxuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKHdyaXRlVG9QYWdlKGFydGljbGVIZWFkaW5nKCkpKVxuLy8gY29udGVudC5hcHBlbmRDaGlsZCh3cml0ZVRvUGFnZShhcnRpY2xlKCkpKVxuLy8gY29udGVudC5hcHBlbmRDaGlsZChkcmF3VG9QYWdlKGltYWdlKCkpKVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9