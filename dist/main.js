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

    const logo = document.createElement('div');
    logo.classList.add("logo")

    const title = document.createElement('div');
    title.textContent = "HuskyLand";
    title.classList.add("title")

    const image = document.createElement('img');
    image.src = "../images/husky-g9a4080289_1280.png";
    
    const title2 = document.createElement('div');
    title2.textContent = "Restaurant";
    title2.classList.add("title")
       
    logo.appendChild(title)
    logo.appendChild(image)
    logo.appendChild(title2)
    element.appendChild(logo);
    
    /*
        NavBar Code
    */
    
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
/* harmony export */   "mainPage": () => (/* binding */ mainPage)
/* harmony export */ });
const mainPage = () => {
    const container = document.createElement('div');
    container.classList.add("mainPage")
    
    const articleContainer = document.createElement("div")
    articleContainer.classList.add("articleContainer");

    const articleHeading = document.createElement('div');
    articleHeading.textContent = "Open for Business";
    articleHeading.classList.add("articleHeading");

    const article = document.createElement('div');
    article.textContent = "Husky Land is the best restuarant for dogs and some people. All dogs deserve to eat at the finest restaurant and that place is called Husky Land. "
    article.classList.add("articleBody");

    const articleHeading2 = document.createElement('div');
    articleHeading2.textContent = "A Howling Good Time!";
    articleHeading2.classList.add("articleHeading");

    const article2 = document.createElement('div');
    article2.textContent = "-A good dog that would not lie to you";
    article2.classList.add("articleBody");

    articleContainer.appendChild(articleHeading)
    articleContainer.appendChild(article)
    articleContainer.appendChild(articleHeading2)
    articleContainer.appendChild(article2)

    const image = document.createElement("img")
    image.src = "../images/pexels-yaroslav-shuraev-9631892.jpg"

    container.appendChild(articleContainer)
    container.appendChild(image)

    return container
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




function writeToPage(component) {
    const content = document.querySelector("#content");
    content.appendChild(component())
}

writeToPage(_header__WEBPACK_IMPORTED_MODULE_0__.header)
writeToPage(_mainPage__WEBPACK_IMPORTED_MODULE_1__.mainPage);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJSTs7Ozs7Ozs7O1VDdkNKO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0k7OztBQUdwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLDJDQUFNO0FBQ2xCLFlBQVksK0NBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIilcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkh1c2t5TGFuZFwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBcIi4uL2ltYWdlcy9odXNreS1nOWE0MDgwMjg5XzEyODAucG5nXCI7XG4gICAgXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUyLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50XCI7XG4gICAgdGl0bGUyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuICAgICAgIFxuICAgIGxvZ28uYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgbG9nby5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICBsb2dvLmFwcGVuZENoaWxkKHRpdGxlMilcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIFxuICAgIC8qXG4gICAgICAgIE5hdkJhciBDb2RlXG4gICAgKi9cbiAgICBcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdkJhclwiKVxuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJDb250ZW50XCI7XG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSlcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudSlcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5hdkJhcilcblxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7XG4gICAgaGVhZGVyLFxufSIsImNvbnN0IG1haW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VcIilcbiAgICBcbiAgICBjb25zdCBhcnRpY2xlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGFydGljbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFydGljbGVDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhcnRpY2xlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJPcGVuIGZvciBCdXNpbmVzc1wiO1xuICAgIGFydGljbGVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJhcnRpY2xlSGVhZGluZ1wiKTtcblxuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlLnRleHRDb250ZW50ID0gXCJIdXNreSBMYW5kIGlzIHRoZSBiZXN0IHJlc3R1YXJhbnQgZm9yIGRvZ3MgYW5kIHNvbWUgcGVvcGxlLiBBbGwgZG9ncyBkZXNlcnZlIHRvIGVhdCBhdCB0aGUgZmluZXN0IHJlc3RhdXJhbnQgYW5kIHRoYXQgcGxhY2UgaXMgY2FsbGVkIEh1c2t5IExhbmQuIFwiXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwiYXJ0aWNsZUJvZHlcIik7XG5cbiAgICBjb25zdCBhcnRpY2xlSGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlSGVhZGluZzIudGV4dENvbnRlbnQgPSBcIkEgSG93bGluZyBHb29kIFRpbWUhXCI7XG4gICAgYXJ0aWNsZUhlYWRpbmcyLmNsYXNzTGlzdC5hZGQoXCJhcnRpY2xlSGVhZGluZ1wiKTtcblxuICAgIGNvbnN0IGFydGljbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJ0aWNsZTIudGV4dENvbnRlbnQgPSBcIi1BIGdvb2QgZG9nIHRoYXQgd291bGQgbm90IGxpZSB0byB5b3VcIjtcbiAgICBhcnRpY2xlMi5jbGFzc0xpc3QuYWRkKFwiYXJ0aWNsZUJvZHlcIik7XG5cbiAgICBhcnRpY2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGVIZWFkaW5nKVxuICAgIGFydGljbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbiAgICBhcnRpY2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGVIZWFkaW5nMilcbiAgICBhcnRpY2xlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGUyKVxuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaW1hZ2Uuc3JjID0gXCIuLi9pbWFnZXMvcGV4ZWxzLXlhcm9zbGF2LXNodXJhZXYtOTYzMTg5Mi5qcGdcIlxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGVDb250YWluZXIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5leHBvcnQge1xuICAgIG1haW5QYWdlLFxuICB9O1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtoZWFkZXJ9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7bWFpblBhZ2V9IGZyb20gJy4vbWFpblBhZ2UnO1xuXG5cbmZ1bmN0aW9uIHdyaXRlVG9QYWdlKGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb21wb25lbnQoKSlcbn1cblxud3JpdGVUb1BhZ2UoaGVhZGVyKVxud3JpdGVUb1BhZ2UobWFpblBhZ2UpO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==