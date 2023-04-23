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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUtJOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVvQztBQUNGOzs7QUFHbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsWUFBWSwrQ0FBUTs7O0FBR3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbmF2QmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFpblBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkh1c2t5TGFuZCBSZXN0YXVyYW50XCI7XG5cbiAgICBjb25zdCBhcnRpY2xlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJPcGVuIGZvciBCdXNpbmVzc1wiO1xuXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFydGljbGUudGV4dENvbnRlbnQgPSBcIkh1c2t5IExhbmQgaXMgdGhlIGJlc3QgcmVzdHVhcmFudCBmb3IgZG9ncyBhbmQgc29tZSBwZW9wbGUuIEFsbCBkb2dzIGRlc2VydmUgdG8gZWF0IGF0IHRoZSBmaW5lc3QgcmVzdGF1cmFudCBhbmQgdGhhdCBwbGFjZSBpcyBjYWxsZWQgSHVza3kgTGFuZC4gXCJcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZUhlYWRpbmcpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGUpXG5cbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmNvbnN0IGltYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiBcIi9Vc2Vycy9sb2NhbGFkbWluL3JlcG9zL3Jlc3RhdXJhbnRQYWdlL2ltYWdlcy9odXNreS1nOWE0MDgwMjg5XzEyODAucG5nXCJcbn1cblxuZXhwb3J0IHtcbiAgICBpbWFnZSxcbiAgICBtYWluUGFnZSxcbiAgfTtcblxuXG4iLCJjb25zdCBuYXZCYXIgPSAoKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgMyBlbGVtZW50cyBhbmQgcmV0dXJuIHRoZW1cbiAgICAvLyAzIGVsZW1lbnRzIGFzIGFuIGFycmF5XG4gICAgXG4gICAgcmV0dXJuIFwiSG9tZSBNZW51IEFib3V0XCJcbn1cblxuZXhwb3J0IHtcbiAgICBuYXZCYXIsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOb3cgcmVtb3ZlIHRob3NlIGVsZW1lbnRzIGZyb20gdGhlIEhUTUwgKHNvIGxlYXZlIG9ubHkgdGhlIDxodG1sPixcbi8vICA8Ym9keT4sIGFuZCA8ZGl2IGlkPVwiY29udGVudFwiPiB0YWdzKSBhbmQgaW5zdGVhZCBjcmVhdGUgdGhlbSBieSB1c2luZyBKYXZhU2NyaXB0IG9ubHksIGUuZy4gXG4vLyBieSBhcHBlbmRpbmcgZWFjaCBuZXcgZWxlbWVudCB0byBkaXYjY29udGVudCBvbmNlIHRoZSBwYWdlIGlzIGZpcnN0IGxvYWRlZC4gXG4vLyBTaW5jZSB3ZeKAmXJlIGFsbCBzZXQgdXAgdG8gd3JpdGUgb3VyIGNvZGUgaW4gbXVsdGlwbGUgZmlsZXMsIGxldOKAmXMgd3JpdGUgdGhpcyBpbml0aWFsIFxuLy8gcGFnZS1sb2FkIGZ1bmN0aW9uIGluc2lkZSBvZiBpdHMgb3duIG1vZHVsZSBhbmQgdGhlbiBpbXBvcnQgYW5kIGNhbGwgaXQgaW5zaWRlIG9mIGluZGV4LmpzLlxuXG4vLyBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBsb2dvLmlubmVyVGV4dCA9IFwiSHVza3lMYW5kIFJlc3RhdXJhbnRcIlxuLy8gbG9nby5zdHlsZS5mb250U2l6ZSA9IFwieHgtbGFyZ2VcIjtcbi8vIGxvZ28uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGxvZ28pXG5cbi8vIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuLy8gaW1nLnNyYyA9IFwiL1VzZXJzL2xvY2FsYWRtaW4vcmVwb3MvcmVzdGF1cmFudFBhZ2UvaW1hZ2VzL2h1c2t5LWc5YTQwODAyODlfMTI4MC5wbmdcIlxuLy8gaW1nLmhlaWdodCA9IFwiMjAwXCJcbi8vIGltZy53aWR0aCA9IFwiMjAwXCJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChpbWcpXG5cbi8vIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGVsZW1lbnQuaW5uZXJUZXh0ID0gXCJPcGVuIGZvciBCdXNpbmVzc1wiXG4vLyBlbGVtZW50LnN0eWxlLmZvbnRTaXplID0gXCJ4LWxhcmdlXCI7ICAgICAgIFxuLy8gZWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZWxlbWVudClcblxuLy8gY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGVsZW1lbnQyLmlubmVyVGV4dCA9IFwiSHVza3kgTGFuZCBpcyB0aGUgYmVzdCByZXN0dWFyYW50IGZvciBkb2dzIGFuZCBzb21lIHBlb3BsZS4gQWxsIGRvZ3MgZGVzZXJ2ZSB0byBlYXQgYXQgdGhlIGZpbmVzdCByZXN0YXVyYW50IGFuZCB0aGF0IHBsYWNlIGlzIGNhbGxlZCBIdXNreSBMYW5kLiBcIlxuLy8gZWxlbWVudDIuc3R5bGUuZm9udFNpemUgPSBcIm1lZGl1bVwiO1xuLy8gZWxlbWVudDIuc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZWxlbWVudDIpXG5cbi8qIFxuXG5zdGFydCBvZiBjb2RlXG5cbiovXG5cbmltcG9ydCB7bWFpblBhZ2V9IGZyb20gJy4vbWFpblBhZ2UnO1xuaW1wb3J0IHsgbmF2QmFyIH0gZnJvbSAnLi9uYXZCYXInO1xuXG5cbmZ1bmN0aW9uIHdyaXRlVG9QYWdlKGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zb2xlLmxvZyhjb21wb25lbnQoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKVxufVxuXG5mdW5jdGlvbiBkcmF3VG9QYWdlKGNvbXBvbmVudCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVsZW1lbnQuc3JjID0gY29tcG9uZW50O1xuICAgIHJldHVybiBlbGVtZW50OyAgICBcbn1cblxuXG53cml0ZVRvUGFnZShtYWluUGFnZSk7XG5cblxuLy8gY29udGVudC5hcHBlbmRDaGlsZCh3cml0ZVRvUGFnZShuYXZCYXIoKSkpXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==