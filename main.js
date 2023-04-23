/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
const header = () => {
    const element = document.createElement('div');
    element.classList.add("header")

    const title = document.createElement('div');
    title.textContent = "HuskLand Restaurant";

    const navBar = document.createElement('div');
    navBar.classList.add("navBar")

    const home = document.createElement('div');
    home.textContent = "Home";
    const menu = document.createElement('div');
    menu.textContent = "Menu";
    const content = document.createElement('div');
    content.textContent = "Content";

    navBar.appendChild(home)
    navBar.appendChild(menu)
    navBar.appendChild(content)

    
    element.appendChild(title);
    element.appendChild(navBar)

    return element
}



/***/ }),

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
    
    // const heading = document.createElement('div');
    // heading.textContent = "HuskyLand Restaurant";

    const articleHeading = document.createElement('div');
    articleHeading.textContent = "Open for Business";

    const article = document.createElement('div');
    article.textContent = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
    
    // container.appendChild(heading)
    container.appendChild(articleHeading)
    container.appendChild(article)

    return container
}

const image = () => {
    return "/Users/localadmin/repos/restaurantPage/images/husky-g9a4080289_1280.png"
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage */ "./src/mainPage.js");
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

writeToPage(_header__WEBPACK_IMPORTED_MODULE_0__.header)
writeToPage(_mainPage__WEBPACK_IMPORTED_MODULE_1__.mainPage);


// content.appendChild(writeToPage(navBar()))





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFLSTs7Ozs7Ozs7O1VDMUJKO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ2dDO0FBQ0k7OztBQUdwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksMkNBQU07QUFDbEIsWUFBWSwrQ0FBUTs7O0FBR3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21haW5QYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIilcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkh1c2tMYW5kIFJlc3RhdXJhbnRcIjtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFyXCIpXG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNvbnRlbnRcIjtcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lKVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51KVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuYXZCYXIpXG5cbiAgICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQge1xuICAgIGhlYWRlcixcbn0iLCJjb25zdCBtYWluUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAvLyBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gaGVhZGluZy50ZXh0Q29udGVudCA9IFwiSHVza3lMYW5kIFJlc3RhdXJhbnRcIjtcblxuICAgIGNvbnN0IGFydGljbGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk9wZW4gZm9yIEJ1c2luZXNzXCI7XG5cbiAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZS50ZXh0Q29udGVudCA9IFwiSHVza3kgTGFuZCBpcyB0aGUgYmVzdCByZXN0dWFyYW50IGZvciBkb2dzIGFuZCBzb21lIHBlb3BsZS4gQWxsIGRvZ3MgZGVzZXJ2ZSB0byBlYXQgYXQgdGhlIGZpbmVzdCByZXN0YXVyYW50IGFuZCB0aGF0IHBsYWNlIGlzIGNhbGxlZCBIdXNreSBMYW5kLiBcIlxuICAgIFxuICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRpY2xlSGVhZGluZylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcblxuICAgIHJldHVybiBjb250YWluZXJcbn1cblxuY29uc3QgaW1hZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFwiL1VzZXJzL2xvY2FsYWRtaW4vcmVwb3MvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2h1c2t5LWc5YTQwODAyODlfMTI4MC5wbmdcIlxufVxuXG5leHBvcnQge1xuICAgIGltYWdlLFxuICAgIG1haW5QYWdlLFxuICB9O1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTm93IHJlbW92ZSB0aG9zZSBlbGVtZW50cyBmcm9tIHRoZSBIVE1MIChzbyBsZWF2ZSBvbmx5IHRoZSA8aHRtbD4sXG4vLyAgPGJvZHk+LCBhbmQgPGRpdiBpZD1cImNvbnRlbnRcIj4gdGFncykgYW5kIGluc3RlYWQgY3JlYXRlIHRoZW0gYnkgdXNpbmcgSmF2YVNjcmlwdCBvbmx5LCBlLmcuIFxuLy8gYnkgYXBwZW5kaW5nIGVhY2ggbmV3IGVsZW1lbnQgdG8gZGl2I2NvbnRlbnQgb25jZSB0aGUgcGFnZSBpcyBmaXJzdCBsb2FkZWQuIFxuLy8gU2luY2Ugd2XigJlyZSBhbGwgc2V0IHVwIHRvIHdyaXRlIG91ciBjb2RlIGluIG11bHRpcGxlIGZpbGVzLCBsZXTigJlzIHdyaXRlIHRoaXMgaW5pdGlhbCBcbi8vIHBhZ2UtbG9hZCBmdW5jdGlvbiBpbnNpZGUgb2YgaXRzIG93biBtb2R1bGUgYW5kIHRoZW4gaW1wb3J0IGFuZCBjYWxsIGl0IGluc2lkZSBvZiBpbmRleC5qcy5cblxuLy8gY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gbG9nby5pbm5lclRleHQgPSBcIkh1c2t5TGFuZCBSZXN0YXVyYW50XCJcbi8vIGxvZ28uc3R5bGUuZm9udFNpemUgPSBcInh4LWxhcmdlXCI7XG4vLyBsb2dvLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChsb2dvKVxuXG4vLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbi8vIGltZy5zcmMgPSBcIi9Vc2Vycy9sb2NhbGFkbWluL3JlcG9zL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9odXNreS1nOWE0MDgwMjg5XzEyODAucG5nXCJcbi8vIGltZy5oZWlnaHQgPSBcIjIwMFwiXG4vLyBpbWcud2lkdGggPSBcIjIwMFwiXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoaW1nKVxuXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBlbGVtZW50LmlubmVyVGV4dCA9IFwiT3BlbiBmb3IgQnVzaW5lc3NcIlxuLy8gZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwieC1sYXJnZVwiOyAgICAgICBcbi8vIGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpXG5cbi8vIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBlbGVtZW50Mi5pbm5lclRleHQgPSBcIkh1c2t5IExhbmQgaXMgdGhlIGJlc3QgcmVzdHVhcmFudCBmb3IgZG9ncyBhbmQgc29tZSBwZW9wbGUuIEFsbCBkb2dzIGRlc2VydmUgdG8gZWF0IGF0IHRoZSBmaW5lc3QgcmVzdGF1cmFudCBhbmQgdGhhdCBwbGFjZSBpcyBjYWxsZWQgSHVza3kgTGFuZC4gXCJcbi8vIGVsZW1lbnQyLnN0eWxlLmZvbnRTaXplID0gXCJtZWRpdW1cIjtcbi8vIGVsZW1lbnQyLnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQyKVxuXG4vKiBcblxuc3RhcnQgb2YgY29kZVxuXG4qL1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7bWFpblBhZ2V9IGZyb20gJy4vbWFpblBhZ2UnO1xuXG5cbmZ1bmN0aW9uIHdyaXRlVG9QYWdlKGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zb2xlLmxvZyhjb21wb25lbnQoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKVxufVxuXG5mdW5jdGlvbiBkcmF3VG9QYWdlKGNvbXBvbmVudCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVsZW1lbnQuc3JjID0gY29tcG9uZW50O1xuICAgIHJldHVybiBlbGVtZW50OyAgICBcbn1cblxud3JpdGVUb1BhZ2UoaGVhZGVyKVxud3JpdGVUb1BhZ2UobWFpblBhZ2UpO1xuXG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JpdGVUb1BhZ2UobmF2QmFyKCkpKVxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=