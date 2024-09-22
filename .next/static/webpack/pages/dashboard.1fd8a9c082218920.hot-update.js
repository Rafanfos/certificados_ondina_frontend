"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/students-table/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/students-table/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/StudentsContext */ \"./src/contexts/StudentsContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst StudentTable = ()=>{\n    _s();\n    const [students, setStudents] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { fetchStudents } = (0,_contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_1__.useStudents)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getStudents = async ()=>{\n            const studentsData = await fetchStudents();\n            if (studentsData) {\n                console.log(studentsData);\n                const studentsFormatted = studentsData.map((student)=>({\n                        id: student.id,\n                        name: student.full_name,\n                        trimester: student.graduation_term,\n                        hasCertificate: student.highlight_certificate_generated,\n                        hasDiploma: student.diploma_generated\n                    }));\n                setStudents(studentsFormatted);\n            }\n        };\n        getStudents();\n    }, [\n        fetchStudents\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"min-w-full bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Nome\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Trimestre\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Certificado de Destaque\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"py-2 px-4 border\",\n                            children: \"Diploma\"\n                        }, void 0, false, {\n                            fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: students.map((student, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.name\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.trimester\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.hasCertificate ? \"Sim\" : \"N\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"py-2 px-4 border\",\n                                children: student.hasDiploma ? \"Sim\" : \"N\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/components/students-table/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StudentTable, \"dNOBdgpzEFAQX7V2V5pObio/Pxw=\", false, function() {\n    return [\n        _contexts_StudentsContext__WEBPACK_IMPORTED_MODULE_1__.useStudents\n    ];\n});\n_c = StudentTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentTable);\nvar _c;\n$RefreshReg$(_c, \"StudentTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdHVkZW50cy10YWJsZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RTtBQUMzQjtBQVU1QyxNQUFNRyxlQUFlOztJQUNuQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQWtCLEVBQUU7SUFFNUQsTUFBTSxFQUFFSSxhQUFhLEVBQUUsR0FBR04sc0VBQVdBO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGNBQWM7WUFDbEIsTUFBTUMsZUFBZSxNQUFNRjtZQUUzQixJQUFJRSxjQUFjO2dCQUNoQkMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDWixNQUFNRyxvQkFBb0JILGFBQWFJLEdBQUcsQ0FBQyxDQUFDQyxVQUEyQjt3QkFDckVDLElBQUlELFFBQVFDLEVBQUU7d0JBQ2RDLE1BQU1GLFFBQVFHLFNBQVM7d0JBQ3ZCQyxXQUFXSixRQUFRSyxlQUFlO3dCQUNsQ0MsZ0JBQWdCTixRQUFRTywrQkFBK0I7d0JBQ3ZEQyxZQUFZUixRQUFRUyxpQkFBaUI7b0JBQ3ZDO2dCQUNBakIsWUFBWU07WUFDZDtRQUNGO1FBQ0FKO0lBQ0YsR0FBRztRQUFDRDtLQUFjO0lBRWxCLHFCQUNFLDhEQUFDaUI7UUFBTUMsV0FBVTs7MEJBQ2YsOERBQUNDOzBCQUNDLDRFQUFDQzs7c0NBQ0MsOERBQUNDOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7c0NBQ2pDLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBbUI7Ozs7OztzQ0FDakMsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3JDLDhEQUFDSTswQkFDRXhCLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxTQUFTZ0Isc0JBQ3RCLDhEQUFDSDs7MENBQ0MsOERBQUNJO2dDQUFHTixXQUFVOzBDQUFvQlgsUUFBUUUsSUFBSTs7Ozs7OzBDQUM5Qyw4REFBQ2U7Z0NBQUdOLFdBQVU7MENBQW9CWCxRQUFRSSxTQUFTOzs7Ozs7MENBQ25ELDhEQUFDYTtnQ0FBR04sV0FBVTswQ0FDWFgsUUFBUU0sY0FBYyxHQUFHLFFBQVE7Ozs7OzswQ0FFcEMsOERBQUNXO2dDQUFHTixXQUFVOzBDQUNYWCxRQUFRUSxVQUFVLEdBQUcsUUFBUTs7Ozs7Ozt1QkFQekJROzs7Ozs7Ozs7Ozs7Ozs7O0FBY25CO0dBbERNMUI7O1FBR3NCSCxrRUFBV0E7OztLQUhqQ0c7QUFvRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3R1ZGVudHMtdGFibGUvaW5kZXgudHN4PzAyZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0dWRlbnREYXRhLCB1c2VTdHVkZW50cyB9IGZyb20gJ0AvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0dWRlbnRUYWJsZSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHJpbWVzdGVyOiBzdHJpbmc7XG4gIGhhc0NlcnRpZmljYXRlOiBib29sZWFuO1xuICBoYXNEaXBsb21hOiBib29sZWFuO1xufVxuXG5jb25zdCBTdHVkZW50VGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdHVkZW50cywgc2V0U3R1ZGVudHNdID0gdXNlU3RhdGU8SVN0dWRlbnRUYWJsZVtdPihbXSk7XG5cbiAgY29uc3QgeyBmZXRjaFN0dWRlbnRzIH0gPSB1c2VTdHVkZW50cygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0U3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBzdHVkZW50c0RhdGEgPSBhd2FpdCBmZXRjaFN0dWRlbnRzKCk7XG5cbiAgICAgIGlmIChzdHVkZW50c0RhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coc3R1ZGVudHNEYXRhKTtcbiAgICAgICAgY29uc3Qgc3R1ZGVudHNGb3JtYXR0ZWQgPSBzdHVkZW50c0RhdGEubWFwKChzdHVkZW50OiBJU3R1ZGVudERhdGEpID0+ICh7XG4gICAgICAgICAgaWQ6IHN0dWRlbnQuaWQsXG4gICAgICAgICAgbmFtZTogc3R1ZGVudC5mdWxsX25hbWUsXG4gICAgICAgICAgdHJpbWVzdGVyOiBzdHVkZW50LmdyYWR1YXRpb25fdGVybSxcbiAgICAgICAgICBoYXNDZXJ0aWZpY2F0ZTogc3R1ZGVudC5oaWdobGlnaHRfY2VydGlmaWNhdGVfZ2VuZXJhdGVkLFxuICAgICAgICAgIGhhc0RpcGxvbWE6IHN0dWRlbnQuZGlwbG9tYV9nZW5lcmF0ZWQsXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0U3R1ZGVudHMoc3R1ZGVudHNGb3JtYXR0ZWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0U3R1ZGVudHMoKTtcbiAgfSwgW2ZldGNoU3R1ZGVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9J21pbi13LWZ1bGwgYmctd2hpdGUnPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncHktMiBweC00IGJvcmRlcic+Tm9tZTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncHktMiBweC00IGJvcmRlcic+VHJpbWVzdHJlPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSdweS0yIHB4LTQgYm9yZGVyJz5DZXJ0aWZpY2FkbyBkZSBEZXN0YXF1ZTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncHktMiBweC00IGJvcmRlcic+RGlwbG9tYTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7c3R1ZGVudHMubWFwKChzdHVkZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3B5LTIgcHgtNCBib3JkZXInPntzdHVkZW50Lm5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3B5LTIgcHgtNCBib3JkZXInPntzdHVkZW50LnRyaW1lc3Rlcn08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHktMiBweC00IGJvcmRlcic+XG4gICAgICAgICAgICAgIHtzdHVkZW50Lmhhc0NlcnRpZmljYXRlID8gJ1NpbScgOiAnTsOjbyd9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHktMiBweC00IGJvcmRlcic+XG4gICAgICAgICAgICAgIHtzdHVkZW50Lmhhc0RpcGxvbWEgPyAnU2ltJyA6ICdOw6NvJ31cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50VGFibGU7XG4iXSwibmFtZXMiOlsidXNlU3R1ZGVudHMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0dWRlbnRUYWJsZSIsInN0dWRlbnRzIiwic2V0U3R1ZGVudHMiLCJmZXRjaFN0dWRlbnRzIiwiZ2V0U3R1ZGVudHMiLCJzdHVkZW50c0RhdGEiLCJjb25zb2xlIiwibG9nIiwic3R1ZGVudHNGb3JtYXR0ZWQiLCJtYXAiLCJzdHVkZW50IiwiaWQiLCJuYW1lIiwiZnVsbF9uYW1lIiwidHJpbWVzdGVyIiwiZ3JhZHVhdGlvbl90ZXJtIiwiaGFzQ2VydGlmaWNhdGUiLCJoaWdobGlnaHRfY2VydGlmaWNhdGVfZ2VuZXJhdGVkIiwiaGFzRGlwbG9tYSIsImRpcGxvbWFfZ2VuZXJhdGVkIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsImluZGV4IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/students-table/index.tsx\n"));

/***/ })

});