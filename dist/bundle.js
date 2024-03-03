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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./src/js/validateForm.js\");\n\n\n//ELEMENTS FROM DOM\nconst nameInput = document.querySelector('.name-input');\nconst idInput = document.querySelector('.id-input');\nconst manufacturerInput = document.querySelector('.manufacturer-input');\nconst expirationDateInput = document.querySelector('.expiration-date-input');\nconst quantityInput = document.querySelector('.quantity-input');\n\nconst selectInput = document.querySelector('.select-input');\nconst volumeInput = document.querySelector('.volume-input');\nconst contentInput = document.querySelector('.content-input');\n\nconst errorMsg = document.querySelector('.error-message');\n\nconst submitButton = document.querySelector('.submit-button');\n\n//FORM VALIDATION\nsubmitButton.addEventListener('click', (e)=>{\n\te.preventDefault();\n\t(0,_validateForm__WEBPACK_IMPORTED_MODULE_0__.validateInput)(nameInput.value, manufacturerInput.value, expirationDateInput.value, quantityInput.value, selectInput.value, volumeInput.value, contentInput.value, errorMsg);\n})\n\nselectInput.addEventListener('change', ()=>{\n\tif(selectInput.value === 'liquid'){\n\t\tvolumeInput.removeAttribute('disabled');\n\t\tcontentInput.setAttribute('disabled', '');\n\t\tcontentInput.value = '';\n\t} else if (selectInput.value === 'capsule'){\n\t\tvolumeInput.setAttribute('disabled', '');\n\t\tcontentInput.removeAttribute('disabled');\n\t\tvolumeInput.value = '';\n\t}\n})\n\n//ID GENERATOR\nconst generateId = ()=>{\n\tconst randomNum = Math.floor(Math.random()*1000000);\n\treturn randomNum;\n}\n\n//CLASSES\nclass Product {\n\tconstructor(name, id, manufacturer, date, quantity, volume){\n\t\tthis.name = name;\n\t\tthis.id = id;\n\t\tthis.manufacturer = manufacturer;\n\t\tthis.date = date;\n\t\tthis.quantity = quantity;\n\t\tthis.volume = volume;\n\t\tthis.ID = Date.now();\n\t}\n}\n\nclass LiquidProduct extends Product {\n\tconstructor(name, id, manufacturer, date, quantity, content){\n\t\tsuper(name, id, manufacturer, date, quantity)\n\t\tthis.content = content;\n\t\tthis.ID = Date.now();\n\t}\n}\n\n//# sourceURL=webpack://assignment_2/./src/js/app.js?");

/***/ }),

/***/ "./src/js/validateForm.js":
/*!********************************!*\
  !*** ./src/js/validateForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateInput: () => (/* binding */ validateInput)\n/* harmony export */ });\nconst validateInput = (name, manufacturer, expirationDate, quantity,selectElement, volume, content, errorSpan)=>{\n\tlet errors = {\n\t\terrorStatus: false,\n\t\terrorMsg: '',\n\t}\n\tif (!name || !manufacturer || !expirationDate || !quantity){\n\t\terrors = {\n\t\t\terrorStatus: true,\n\t\t\terrorMsg: 'All fields must be filled out'\n\t\t}\n\t\terrorSpan.style.visibility = 'visible';\n\t\terrorSpan.textContent = errors.errorMsg;\n\t} if (selectElement === 'select'){\n\t\terrors = {\n\t\t\terrorStatus: true,\n\t\t\terrorMsg: 'All fields must be filled out',\n\t\t}\n\t\terrorSpan.style.visibility = 'visible';\n\t\terrorSpan.textContent = errors.errorMsg;\n\t}else if(selectElement === 'liquid' && !volume){\n\t\terrors = {\n\t\t\terrorStatus: true,\n\t\t\terrorMsg: 'All fields must be filled out',\n\t\t}\n\t\terrorSpan.style.visibility = 'visible';\n\t\terrorSpan.textContent = errors.errorMsg;\n\t} else if (selectElement === 'capsule' && !content){\n\t\terrors = {\n\t\t\terrorStatus: true,\n\t\t\terrorMsg: 'All fields must be filled out',\n\t\t}\n\t\terrorSpan.style.visibility = 'visible';\n\t\terrorSpan.textContent = errors.errorMsg;\n\t} else {\n\t\terrors = {\n\t\t\terrorStatus: false,\n\t\t\terrorMsg: ''\n\t\t}\n\t\terrorSpan.style.visibility = 'hidden';\n\t\terrorSpan.textContent = errors.errorMsg;\n\t}\n\t\n\tconst validationErrorStatus = ()=>{\n\t\treturn errors.errorStatus\n\t}\n\treturn {validationErrorStatus}\n}\n\n// const removeErrorMsg =(name, id, manufacturer, expirationDate, quantity, form, errorSpan)=>{\n// \tif (name && manufacturer && expirationDate && quantity){\n// \t\terrorSpan.style.visibility = 'hidden';\n// \t}\n// }\n\n\n\n//# sourceURL=webpack://assignment_2/./src/js/validateForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;