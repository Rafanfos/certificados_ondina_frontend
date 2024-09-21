"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/AuthContext */ \"(app-pages-browser)/./src/app/contexts/AuthContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Login = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { login } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        try {\n            await login(email, password);\n        } catch (err) {\n            setError(\"Falha no login. Verifique suas credenciais.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 shadow-md rounded-lg w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"/assets/images/enpon-logo.png\",\n                    alt: \"Logo\",\n                    height: 100,\n                    width: 100\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-6\",\n                    children: \"P\\xe1gina de Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-1\",\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true,\n                                    className: \"w-full px-3 py-2 border rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-1\",\n                                    children: \"Senha:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true,\n                                    className: \"w-full px-3 py-2 border rounded-md\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-500\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white py-2 rounded-md mt-4\",\n                            children: \"Entrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rafae\\\\OneDrive\\\\Documentos\\\\Projetos\\\\certificados_ondina\\\\certificados_ondina_app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"szM58ovXfPPm84vbjD7jdZM4DlE=\", false, function() {\n    return [\n        _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDYjtBQUNrQjtBQUVqRCxNQUFNRyxRQUFROztJQUNaLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sRUFBRVUsS0FBSyxFQUFFLEdBQUdSLDhEQUFPQTtJQUV6QixNQUFNUyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSixTQUFTO1FBRVQsSUFBSTtZQUNGLE1BQU1DLE1BQU1OLE9BQU9FO1FBQ3JCLEVBQUUsT0FBT1EsS0FBVTtZQUNqQkwsU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDOzs7Ozs4QkFDRCw4REFBQ2hCLGtEQUFLQTtvQkFDSmlCLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLFFBQVE7b0JBQ1JDLE9BQU87Ozs7Ozs4QkFHVCw4REFBQ0M7b0JBQUdOLFdBQVU7OEJBQTBCOzs7Ozs7OEJBQ3hDLDhEQUFDTztvQkFBS0MsVUFBVWI7O3NDQUNkLDhEQUFDSTs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNTO29DQUFNVCxXQUFVOzhDQUFhOzs7Ozs7OENBQzlCLDhEQUFDVTtvQ0FDQ0MsTUFBSztvQ0FDTEMsT0FBT3hCO29DQUNQeUIsVUFBVSxDQUFDakIsSUFBTVAsU0FBU08sRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDeENHLFFBQVE7b0NBQ1JmLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FBTVQsV0FBVTs4Q0FBYTs7Ozs7OzhDQUM5Qiw4REFBQ1U7b0NBQ0NDLE1BQUs7b0NBQ0xDLE9BQU90QjtvQ0FDUHVCLFVBQVUsQ0FBQ2pCLElBQU1MLFlBQVlLLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7b0NBQzNDRyxRQUFRO29DQUNSZixXQUFVOzs7Ozs7Ozs7Ozs7d0JBR2JSLHVCQUFTLDhEQUFDd0I7NEJBQUVoQixXQUFVO3NDQUFnQlI7Ozs7OztzQ0FDdkMsOERBQUN5Qjs0QkFDQ04sTUFBSzs0QkFDTFgsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTdETWI7O1FBSWNELDBEQUFPQTs7O0tBSnJCQztBQStETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHsgbG9naW4gfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3IoXCJcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmFsaGEgbm8gbG9naW4uIFZlcmlmaXF1ZSBzdWFzIGNyZWRlbmNpYWlzLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggc2hhZG93LW1kIHJvdW5kZWQtbGcgdy05NlwiPlxyXG4gICAgICAgIDxmaWd1cmU+PC9maWd1cmU+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9lbnBvbi1sb2dvLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTZcIj5Qw6FnaW5hIGRlIExvZ2luPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMVwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMVwiPlNlbmhhOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcm91bmRlZC1tZCBtdC00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsInVzZUF1dGgiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvZ2luIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlndXJlIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwicCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});