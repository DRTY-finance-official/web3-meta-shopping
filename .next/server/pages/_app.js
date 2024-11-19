/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./services/whishlistcontext.tsx":
/*!***************************************!*\
  !*** ./services/whishlistcontext.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WishlistProvider: () => (/* binding */ WishlistProvider),\n/* harmony export */   useWishlist: () => (/* binding */ useWishlist)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst WishlistContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst WishlistProvider = ({ children })=>{\n    const [wishlist, setWishlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToWishlist = (product)=>{\n        setWishlist([\n            ...wishlist,\n            product\n        ]);\n    };\n    const removeFromWishlist = (product)=>{\n        setWishlist(wishlist.filter((item)=>item.id !== product.id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WishlistContext.Provider, {\n        value: {\n            wishlist,\n            addToWishlist,\n            removeFromWishlist\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\working\\\\current\\\\meta-shopping1.0\\\\services\\\\whishlistcontext.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\nconst useWishlist = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WishlistContext);\n    if (!context) {\n        throw new Error(\"useWishlist must be used within a WishlistProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy93aGlzaGxpc3Rjb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBU25FLE1BQU1JLGdDQUFrQkgsb0RBQWFBLENBQW1DSTtBQUVqRSxNQUFNQyxtQkFBNEQsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDcEYsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFZLEVBQUU7SUFFdEQsTUFBTU8sZ0JBQWdCLENBQUNDO1FBQ3JCRixZQUFZO2VBQUlEO1lBQVVHO1NBQVE7SUFDcEM7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0Q7UUFDMUJGLFlBQVlELFNBQVNLLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsRUFBRSxLQUFLSixRQUFRSSxFQUFFO0lBQzVEO0lBRUEscUJBQ0UsOERBQUNYLGdCQUFnQlksUUFBUTtRQUFDQyxPQUFPO1lBQUVUO1lBQVVFO1lBQWVFO1FBQW1CO2tCQUM1RUw7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNVyxjQUFjO0lBQ3pCLE1BQU1DLFVBQVVqQixpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSSxDQUFDZSxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWV0YS1zaG9wcGluZy8uL3NlcnZpY2VzL3doaXNobGlzdGNvbnRleHQudHN4P2NjNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy90eXBlJztcclxuXHJcbmludGVyZmFjZSBXaXNobGlzdENvbnRleHRQcm9wcyB7XHJcbiAgd2lzaGxpc3Q6IFByb2R1Y3RbXTtcclxuICBhZGRUb1dpc2hsaXN0OiAocHJvZHVjdDogUHJvZHVjdCkgPT4gdm9pZDtcclxuICByZW1vdmVGcm9tV2lzaGxpc3Q6IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBXaXNobGlzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFdpc2hsaXN0Q29udGV4dFByb3BzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpc2hsaXN0UHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbd2lzaGxpc3QsIHNldFdpc2hsaXN0XSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xyXG5cclxuICBjb25zdCBhZGRUb1dpc2hsaXN0ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcclxuICAgIHNldFdpc2hsaXN0KFsuLi53aXNobGlzdCwgcHJvZHVjdF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21XaXNobGlzdCA9IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XHJcbiAgICBzZXRXaXNobGlzdCh3aXNobGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBwcm9kdWN0LmlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXaXNobGlzdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgd2lzaGxpc3QsIGFkZFRvV2lzaGxpc3QsIHJlbW92ZUZyb21XaXNobGlzdCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9XaXNobGlzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VXaXNobGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChXaXNobGlzdENvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VXaXNobGlzdCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgV2lzaGxpc3RQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIldpc2hsaXN0Q29udGV4dCIsInVuZGVmaW5lZCIsIldpc2hsaXN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIndpc2hsaXN0Iiwic2V0V2lzaGxpc3QiLCJhZGRUb1dpc2hsaXN0IiwicHJvZHVjdCIsInJlbW92ZUZyb21XaXNobGlzdCIsImZpbHRlciIsIml0ZW0iLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXaXNobGlzdCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/whishlistcontext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_whishlistcontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/whishlistcontext */ \"./services/whishlistcontext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_services_whishlistcontext__WEBPACK_IMPORTED_MODULE_3__.WishlistProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Meta-shopping\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\working\\\\current\\\\meta-shopping1.0\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\working\\\\current\\\\meta-shopping1.0\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\working\\\\current\\\\meta-shopping1.0\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\working\\\\current\\\\meta-shopping1.0\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThCO0FBRUY7QUFDdUM7QUFFcEQsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRTtrQkFDRSw0RUFBQ0gsd0VBQWdCQTs7OEJBQ2pCLDhEQUFDRCxrREFBSUE7OEJBQ0gsNEVBQUNLO2tDQUFNOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0Y7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUk5QiIsInNvdXJjZXMiOlsid2VicGFjazovL01ldGEtc2hvcHBpbmcvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBXaXNobGlzdFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2hpc2hsaXN0Y29udGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgIDxXaXNobGlzdFByb3ZpZGVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWV0YS1zaG9wcGluZzwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1dpc2hsaXN0UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJXaXNobGlzdFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();