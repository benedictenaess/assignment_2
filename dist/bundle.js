/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("class Product {\n\tconstructor(name, id, manufacturer, date, quantity, volume){\n\t\tthis.name = name;\n\t\tthis.id = id;\n\t\tthis.manufacturer = manufacturer;\n\t\tthis.date = date;\n\t\tthis.quantity = quantity;\n\t\tthis.volume = volume;\n\t\tthis.ID = Date.now();\n\t}\n}\n\nclass LiquidProduct extends Product {\n\tconstructor(name, id, manufacturer, date, quantity, content){\n\t\tsuper(name, id, manufacturer, date, quantity)\n\t\tthis.content = content;\n\t\tthis.ID = Date.now();\n\t}\n}\n\n//# sourceURL=webpack://assignment_2/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;