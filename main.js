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
    return element
    
    /*
        NavBar Code
    */
    
    // const navBar = document.createElement('div');
    // navBar.classList.add("navBar")

    // const home = document.createElement('div');
    // home.textContent = "Home";
    // const menu = document.createElement('div');
    // menu.textContent = "Menu";
    // const content = document.createElement('div');
    // content.textContent = "Content";

    // navBar.appendChild(home)
    // navBar.appendChild(menu)
    // navBar.appendChild(content)
    // element.appendChild(navBar)


    

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUtJOzs7Ozs7Ozs7VUMxQko7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDZ0M7QUFDSTs7O0FBR3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSwyQ0FBTTtBQUNsQixZQUFZLCtDQUFROzs7QUFHcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIilcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkh1c2t5TGFuZFwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKVxuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSBcIi4uL2ltYWdlcy9odXNreS1nOWE0MDgwMjg5XzEyODAucG5nXCI7XG4gICAgXG5cbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZTIudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnRcIjtcbiAgICB0aXRsZTIuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpXG4gICAgXG4gICAgXG4gICAgbG9nby5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBsb2dvLmFwcGVuZENoaWxkKGltYWdlKVxuICAgIGxvZ28uYXBwZW5kQ2hpbGQodGl0bGUyKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgICBcbiAgICAvKlxuICAgICAgICBOYXZCYXIgQ29kZVxuICAgICovXG4gICAgXG4gICAgLy8gY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIilcblxuICAgIC8vIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgLy8gY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gY29udGVudC50ZXh0Q29udGVudCA9IFwiQ29udGVudFwiO1xuXG4gICAgLy8gbmF2QmFyLmFwcGVuZENoaWxkKGhvbWUpXG4gICAgLy8gbmF2QmFyLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgLy8gbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChuYXZCYXIpXG5cblxuICAgIFxuXG59XG5cbmV4cG9ydCB7XG4gICAgaGVhZGVyLFxufSIsImNvbnN0IG1haW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIC8vIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJIdXNreUxhbmQgUmVzdGF1cmFudFwiO1xuXG4gICAgY29uc3QgYXJ0aWNsZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3BlbiBmb3IgQnVzaW5lc3NcIjtcblxuICAgIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnRpY2xlLnRleHRDb250ZW50ID0gXCJIdXNreSBMYW5kIGlzIHRoZSBiZXN0IHJlc3R1YXJhbnQgZm9yIGRvZ3MgYW5kIHNvbWUgcGVvcGxlLiBBbGwgZG9ncyBkZXNlcnZlIHRvIGVhdCBhdCB0aGUgZmluZXN0IHJlc3RhdXJhbnQgYW5kIHRoYXQgcGxhY2UgaXMgY2FsbGVkIEh1c2t5IExhbmQuIFwiXG4gICAgXG4gICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGVIZWFkaW5nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRpY2xlKVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5jb25zdCBpbWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gXCIvVXNlcnMvbG9jYWxhZG1pbi9yZXBvcy9yZXN0YXVyYW50UGFnZS9pbWFnZXMvaHVza3ktZzlhNDA4MDI4OV8xMjgwLnBuZ1wiXG59XG5cbmV4cG9ydCB7XG4gICAgaW1hZ2UsXG4gICAgbWFpblBhZ2UsXG4gIH07XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOb3cgcmVtb3ZlIHRob3NlIGVsZW1lbnRzIGZyb20gdGhlIEhUTUwgKHNvIGxlYXZlIG9ubHkgdGhlIDxodG1sPixcbi8vICA8Ym9keT4sIGFuZCA8ZGl2IGlkPVwiY29udGVudFwiPiB0YWdzKSBhbmQgaW5zdGVhZCBjcmVhdGUgdGhlbSBieSB1c2luZyBKYXZhU2NyaXB0IG9ubHksIGUuZy4gXG4vLyBieSBhcHBlbmRpbmcgZWFjaCBuZXcgZWxlbWVudCB0byBkaXYjY29udGVudCBvbmNlIHRoZSBwYWdlIGlzIGZpcnN0IGxvYWRlZC4gXG4vLyBTaW5jZSB3ZeKAmXJlIGFsbCBzZXQgdXAgdG8gd3JpdGUgb3VyIGNvZGUgaW4gbXVsdGlwbGUgZmlsZXMsIGxldOKAmXMgd3JpdGUgdGhpcyBpbml0aWFsIFxuLy8gcGFnZS1sb2FkIGZ1bmN0aW9uIGluc2lkZSBvZiBpdHMgb3duIG1vZHVsZSBhbmQgdGhlbiBpbXBvcnQgYW5kIGNhbGwgaXQgaW5zaWRlIG9mIGluZGV4LmpzLlxuXG4vLyBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBsb2dvLmlubmVyVGV4dCA9IFwiSHVza3lMYW5kIFJlc3RhdXJhbnRcIlxuLy8gbG9nby5zdHlsZS5mb250U2l6ZSA9IFwieHgtbGFyZ2VcIjtcbi8vIGxvZ28uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGxvZ28pXG5cbi8vIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gaW1nLnNyYyA9IFwiL1VzZXJzL2xvY2FsYWRtaW4vcmVwb3MvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2h1c2t5LWc5YTQwODAyODlfMTI4MC5wbmdcIlxuLy8gaW1nLmhlaWdodCA9IFwiMjAwXCJcbi8vIGltZy53aWR0aCA9IFwiMjAwXCJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChpbWcpXG5cbi8vIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGVsZW1lbnQuaW5uZXJUZXh0ID0gXCJPcGVuIGZvciBCdXNpbmVzc1wiXG4vLyBlbGVtZW50LnN0eWxlLmZvbnRTaXplID0gXCJ4LWxhcmdlXCI7ICAgICAgIFxuLy8gZWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZWxlbWVudClcblxuLy8gY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGVsZW1lbnQyLmlubmVyVGV4dCA9IFwiSHVza3kgTGFuZCBpcyB0aGUgYmVzdCByZXN0dWFyYW50IGZvciBkb2dzIGFuZCBzb21lIHBlb3BsZS4gQWxsIGRvZ3MgZGVzZXJ2ZSB0byBlYXQgYXQgdGhlIGZpbmVzdCByZXN0YXVyYW50IGFuZCB0aGF0IHBsYWNlIGlzIGNhbGxlZCBIdXNreSBMYW5kLiBcIlxuLy8gZWxlbWVudDIuc3R5bGUuZm9udFNpemUgPSBcIm1lZGl1bVwiO1xuLy8gZWxlbWVudDIuc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZWxlbWVudDIpXG5cbi8qIFxuXG5zdGFydCBvZiBjb2RlXG5cbiovXG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHttYWluUGFnZX0gZnJvbSAnLi9tYWluUGFnZSc7XG5cblxuZnVuY3Rpb24gd3JpdGVUb1BhZ2UoY29tcG9uZW50KSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbXBvbmVudCgpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpXG59XG5cbmZ1bmN0aW9uIGRyYXdUb1BhZ2UoY29tcG9uZW50KXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWxlbWVudC5zcmMgPSBjb21wb25lbnQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7ICAgIFxufVxuXG53cml0ZVRvUGFnZShoZWFkZXIpXG53cml0ZVRvUGFnZShtYWluUGFnZSk7XG5cblxuLy8gY29udGVudC5hcHBlbmRDaGlsZCh3cml0ZVRvUGFnZShuYXZCYXIoKSkpXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==