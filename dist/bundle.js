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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./src/js/validateForm.js\");\n\n\n//ELEMENTS FROM DOM\nconst nameInput = document.querySelector('.name-input');\nconst manufacturerInput = document.querySelector('.manufacturer-input');\nconst expirationDateInput = document.querySelector('.expiration-date-input');\nconst selectInput = document.querySelector('.select-input');\nconst dosageInput = document.querySelector('.dosage-input');\nconst quantityInput = document.querySelector('.quantity-input');\n\nconst errorMsg = document.querySelector('.error-message');\nconst submitForm = document.querySelector('.input-form');\nconst productUl = document.querySelector('.product-ul');\n\n//ARRAYS ---------------------------------------------------------------\nconst allProducts = JSON.parse(localStorage.getItem('productData')) || [];\n\n//ADDEVENTLISTENERS ------------------------------------------------------\n\ndocument.addEventListener('DOMContentLoaded', ()=>{\n\tUI.renderProducts(allProducts);\n})\n\nsubmitForm.addEventListener('submit', (e)=>{\n\te.preventDefault();\n\tconst {validationErrorStatus} = (0,_validateForm__WEBPACK_IMPORTED_MODULE_0__.validateInput)(nameInput.value.trim(), manufacturerInput.value.trim(), expirationDateInput.value, selectInput.value, dosageInput.value.trim(), quantityInput.value.trim(), errorMsg);\n\tif (validationErrorStatus()){\n\t\treturn\n\t} else {\n\t\tlet newProduct;\n\t\tif (selectInput.value === 'liquid'){\n\t\t\tnewProduct = new LiquidProduct(\n\t\t\t\tnameInput.value,\n\t\t\t\tmanufacturerInput.value,\n\t\t\t\texpirationDateInput.value,\n\t\t\t\tselectInput.value,\n\t\t\t\tdosageInput.value\n\t\t\t);\n\t\t} else if (selectInput.value === 'capsule') {\n\t\t\tnewProduct = new CapsuleProduct(\n\t\t\t\tnameInput.value,\n\t\t\t\tmanufacturerInput.value,\n\t\t\t\texpirationDateInput.value,\n\t\t\t\tselectInput.value,\n\t\t\t\tquantityInput.value\n\t\t\t);\n\t\t}\n\t\tProduct.addProduct(newProduct);\n\t\tstoreProduct(allProducts);\n\t\tUI.renderProducts(allProducts);\n\t\tsubmitForm.reset();\n\t}\n})\n\nselectInput.addEventListener('change', ()=>{\n\tif(selectInput.value === 'liquid'){\n\t\tdosageInput.removeAttribute('disabled');\n\t\tquantityInput.setAttribute('disabled', '');\n\t\tquantityInput.value = '';\n\t} else if (selectInput.value === 'capsule'){\n\t\tdosageInput.setAttribute('disabled', '');\n\t\tquantityInput.removeAttribute('disabled');\n\t\tdosageInput.value = '';\n\t}\n})\n\n// CLASSES ------------------------------------------------------------------------\nclass Product {\n\tconstructor(name, manufacturer, expirationDate, form){\n\t\tthis.name = name;\n\t\tthis.manufacturer = manufacturer;\n\t\tthis.expirationDate = expirationDate;\n\t\tthis.form = form;\n\t\tthis.ID = Date.now();\n\t}\n\tstatic addProduct(product) {\n\t\tallProducts.push(product);\n\t}\n\tstatic deleteProduct(id, productArray){\n\t\tconst index = productArray.findIndex(product => product.ID.toString() === id.toString());\n\t\tif(index !== -1){\n\t\t\tproductArray.splice(index, 1);\n\t\t\tUI.renderProducts(productArray);\n\t\t\tif (productArray.length <= 0){\n\t\t\t\tlocalStorage.removeItem('productData');\n\t\t\t} else {\n\t\t\t\tstoreProduct(productArray);\n\t\t\t}\n\t\t}\n\t}\n}\n\nclass LiquidProduct extends Product {\n\tconstructor(name, manufacturer, expirationDate, form, dosage){\n\t\tsuper(name, manufacturer, expirationDate, form)\n\t\tthis.dosage = dosage;\n\t}\n}\n\nclass CapsuleProduct extends Product {\n\tconstructor(name, manufacturer, expirationDate, form, quantity){\n\t\tsuper(name, manufacturer, expirationDate, form)\n\t\tthis.quantity = quantity;\n\t}\n}\n\n//RENDER CLASS ------------------------------------------------------------------------\nclass UI {\n\tstatic renderProducts(allProducts) {\n\t\tproductUl.textContent = '';\n\t\tlet index = 0;\n\n\t\tallProducts.forEach((product)=>{\n\t\t\tindex ++;\n\n\t\t\t//ELEMENTS FROM DOM ---------------------------\n\t\t\tconst productRow = document.createElement('li');\n\t\t\tconst renderNumber = document.createElement('span');\n\t\t\tconst renderName = document.createElement('span');\n\t\t\tconst renderManufactorer = document.createElement('span');\n\t\t\tconst renderExpirationDate = document.createElement('span');\n\t\t\tconst renderForm = document.createElement('span');\n\t\t\tconst renderQuantity = document.createElement('span');\n\t\t\tconst renderRemove = document.createElement('span');\n\t\t\tconst removeButton = document.createElement('button');\n\t\t\t\n\t\t\t//APPEND ------------------------------------\n\t\t\tproductUl.append(productRow);\n\t\t\tproductRow.append(renderNumber, renderName, renderManufactorer, renderExpirationDate, renderForm, renderQuantity, renderRemove );\n\t\t\trenderRemove.append(removeButton);\n\t\t\t\n\t\t\t//ADD CLASSES ------------------------------------\n\t\t\tproductRow.classList.add('product-row');\n\t\t\tremoveButton.classList.add('delete-button');\n\n\t\t\t//TEXTCONTENT ------------------------------------\n\t\t\trenderNumber.textContent = index;\n\t\t\trenderName.textContent = product.name;\n\t\t\trenderManufactorer.textContent = product.manufacturer;\n\t\t\trenderExpirationDate.textContent = product.expirationDate;\n\n\t\t\trenderForm.textContent = product.form;\n\t\t\tremoveButton.textContent = 'Delete';\n\n\t\t\tif(product instanceof CapsuleProduct){\n\t\t\t\trenderQuantity.textContent = `${product.quantity} pcs`;\n\t\t\t} else if (product instanceof LiquidProduct) {\n\t\t\t\trenderQuantity.textContent = `${product.dosage} ml`;\n\t\t\t}\n\t\t\t\n\t\t\t//DELETE ---------------------------------------------\n\t\t\tproductRow.dataset.id = product.ID;\n\n\t\t\tremoveButton.addEventListener('click', (e)=>{\n\t\t\t\tconst productId = e.currentTarget.parentElement.parentElement.dataset.id;\n\t\t\t\tProduct.deleteProduct(productId, allProducts);\n\t\t\t})\n\t\t})\n\t}\n}\n\n//LOCAL STORAGE ------------------------------------------------------\nfunction storeProduct(productArray){\n\tlocalStorage.setItem('productData', JSON.stringify(productArray));\n};\n\n//# sourceURL=webpack://assignment_2/./src/js/app.js?");

/***/ }),

/***/ "./src/js/validateForm.js":
/*!********************************!*\
  !*** ./src/js/validateForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateInput: () => (/* binding */ validateInput)\n/* harmony export */ });\nconst validateInput = (name, manufacturer, expirationDate, selectElement, dosage, quantity, errorSpan)=>{\n\tlet errors = {\n\t\terrorStatus: false,\n\t\terrorMsg: '',\n\t}\n\tif (!name || !manufacturer || !expirationDate || selectElement === 'select'){\n\t\terrors.errorStatus = true;\n\t\terrors.errorMsg = 'All fields must be filled out';\n\t\terrorSpan.style.visibility = 'visible';\n\t\n\t} else if (selectElement === 'liquid' && !dosage){\n\t\terrors.errorStatus = true;\n\t\terrors.errorMsg = 'All fields must be filled out';\n\t\terrorSpan.style.visibility = 'visible';\n\n\t} else if (selectElement === 'capsule' && !quantity){\n\t\terrors.errorStatus = true;\n\t\terrors.errorMsg = 'All fields must be filled out';\n\t\terrorSpan.style.visibility = 'visible';\n\n\t} else {\n\t\terrors.errorStatus = false;\n\t\terrors.errorMsg = '';\n\t\terrorSpan.style.visibility = 'hidden';\n\t}\n\n\terrorSpan.textContent = errors.errorMsg;\n\t\n\tconst validationErrorStatus = ()=>{\n\t\treturn errors.errorStatus\n\t}\n\treturn {validationErrorStatus}\n}\n\n\n\n//# sourceURL=webpack://assignment_2/./src/js/validateForm.js?");

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