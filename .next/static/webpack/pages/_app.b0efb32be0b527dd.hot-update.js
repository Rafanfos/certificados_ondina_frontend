"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/StudentsContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/StudentsContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StudentsProvider: function() { return /* binding */ StudentsProvider; },\n/* harmony export */   useStudents: function() { return /* binding */ useStudents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ StudentsProvider,useStudents auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst StudentsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst StudentsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [contextUrl, setContextUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchStudents = async ()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        const contextUrl = \"\".concat(baseUrl, \"/students\");\n        console.log(contextUrl);\n        try {\n            const token = localStorage.getItem(\"token\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(contextUrl, \"/list\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return response.data;\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao listar alunos\");\n        }\n    };\n    const generateCertificate = async (studentId)=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/students/\".concat(studentId, \"/certificate\"), {}, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            alert(\"Certificado gerado com sucesso!\");\n        } catch (error) {\n            console.error(\"Failed to generate certificate\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const baseUrl = \"\".concat(\"http://localhost:8000\", \"/api\");\n        setContextUrl(\"\".concat(baseUrl, \"/users\"));\n    }, [\n        fetchStudents,\n        generateCertificate\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StudentsContext.Provider, {\n        value: {\n            fetchStudents,\n            generateCertificate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/StudentsContext.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StudentsProvider, \"fl2EubHxOl+LV++8dlUN9vn1u1c=\");\n_c = StudentsProvider;\nconst useStudents = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StudentsContext);\n};\n_s1(useStudents, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StudentsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFlO0FBQ1c7QUFtQjFCLE1BQU1LLGdDQUFrQkwsb0RBQWFBLENBQ25DLENBQUM7QUFHSSxNQUFNTSxtQkFBbUI7UUFBQyxFQUFFQyxRQUFRLEVBQXlCOztJQUNsRSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQVM7SUFDckQsTUFBTVMsZ0JBQWdCO1FBQ3BCLE1BQU1DLFVBQVUsR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDO1FBQ3ZELE1BQU1KLGFBQWEsR0FBVyxPQUFSRyxTQUFRO1FBQzlCSSxRQUFRQyxHQUFHLENBQUNSO1FBQ1osSUFBSTtZQUNGLE1BQU1TLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztZQUVuQyxNQUFNQyxXQUFXLE1BQU1oQiw2Q0FBS0EsQ0FBQ2lCLEdBQUcsQ0FBQyxHQUFjLE9BQVhiLFlBQVcsVUFBUTtnQkFDckRjLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47Z0JBQzNCO1lBQ0Y7WUFFQSxPQUFPRyxTQUFTSSxJQUFJO1FBQ3RCLEVBQUUsT0FBT0MsT0FBTztZQUNkVixRQUFRVSxLQUFLLENBQUNBO1lBQ2QsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxzQkFBc0IsT0FBT0M7UUFDakMsSUFBSTtZQUNGLE1BQU1YLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztZQUNuQyxNQUFNZiw2Q0FBS0EsQ0FBQ3lCLElBQUksQ0FDZCxzQ0FBZ0QsT0FBVkQsV0FBVSxpQkFDaEQsQ0FBQyxHQUNEO2dCQUNFTixTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5OO2dCQUMzQjtZQUNGO1lBRUZhLE1BQU07UUFDUixFQUFFLE9BQU9MLE9BQU87WUFDZFYsUUFBUVUsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDbEQ7SUFDRjtJQUdBdEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxVQUFVLEdBQXVDLE9BQXBDQyx1QkFBbUMsRUFBQztRQUN2REgsY0FBYyxHQUFXLE9BQVJFLFNBQVE7SUFDM0IsR0FBRTtRQUFDRDtRQUFlaUI7S0FBb0I7SUFFdEMscUJBQ0UsOERBQUN0QixnQkFBZ0IwQixRQUFRO1FBQUNDLE9BQU87WUFBRXRCO1lBQWVpQjtRQUFvQjtrQkFDbkVwQjs7Ozs7O0FBR1AsRUFBRTtHQW5EV0Q7S0FBQUE7QUFxRE4sTUFBTTJCLGNBQWM7O0lBQ3pCLE9BQU8vQixpREFBVUEsQ0FBQ0c7QUFDcEIsRUFBRTtJQUZXNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1N0dWRlbnRzQ29udGV4dC50c3g/MTI2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxuICB1c2VDb250ZXh0LFxuICBSZWFjdE5vZGUsXG4gIHVzZUVmZmVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxudHlwZSBJU3R1ZGVudERhdGEgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGZ1bGxfbmFtZTogc3RyaW5nO1xuICBncmFkdWF0aW9uX3Rlcm06IGJvb2xlYW47XG4gIGRpcGxvbWFfZ2VuZXJhdGVkOiBib29sZWFuO1xuICBoaWdobGlnaHRfY2VydGlmaWNhdGVfZ2VuZXJhdGVkOiBib29sZWFuO1xufTtcblxudHlwZSBTdHVkZW50c0NvbnRleHREYXRhID0ge1xuICBmZXRjaFN0dWRlbnRzOiAoKSA9PiBQcm9taXNlPElTdHVkZW50RGF0YVtdPjtcbiAgZ2VuZXJhdGVDZXJ0aWZpY2F0ZTogKHN0dWRlbnRJZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xufTtcblxudHlwZSBTdHVkZW50c1Byb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBTdHVkZW50c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0dWRlbnRzQ29udGV4dERhdGE+KFxuICB7fSBhcyBTdHVkZW50c0NvbnRleHREYXRhXG4pO1xuXG5leHBvcnQgY29uc3QgU3R1ZGVudHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFN0dWRlbnRzUHJvdmlkZXJQcm9wcykgPT4ge1xuICBjb25zdCBbY29udGV4dFVybCwgc2V0Q29udGV4dFVybF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgZmV0Y2hTdHVkZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPElTdHVkZW50RGF0YVtdPiA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGlgO1xuICAgIGNvbnN0IGNvbnRleHRVcmwgPSBgJHtiYXNlVXJsfS9zdHVkZW50c2A7XG4gICAgY29uc29sZS5sb2coY29udGV4dFVybClcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Y29udGV4dFVybH0vbGlzdGAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFsaGEgYW8gbGlzdGFyIGFsdW5vcycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUNlcnRpZmljYXRlID0gYXN5bmMgKHN0dWRlbnRJZDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zdHVkZW50cy8ke3N0dWRlbnRJZH0vY2VydGlmaWNhdGVgLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBhbGVydCgnQ2VydGlmaWNhZG8gZ2VyYWRvIGNvbSBzdWNlc3NvIScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2VuZXJhdGUgY2VydGlmaWNhdGUnLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2FwaWA7XG4gICAgc2V0Q29udGV4dFVybChgJHtiYXNlVXJsfS91c2Vyc2ApO1xuICB9LFtmZXRjaFN0dWRlbnRzLCBnZW5lcmF0ZUNlcnRpZmljYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R1ZGVudHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGZldGNoU3R1ZGVudHMsIGdlbmVyYXRlQ2VydGlmaWNhdGUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHVkZW50c0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU3R1ZGVudHMgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFN0dWRlbnRzQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlN0dWRlbnRzQ29udGV4dCIsIlN0dWRlbnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNvbnRleHRVcmwiLCJzZXRDb250ZXh0VXJsIiwiZmV0Y2hTdHVkZW50cyIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsIkVycm9yIiwiZ2VuZXJhdGVDZXJ0aWZpY2F0ZSIsInN0dWRlbnRJZCIsInBvc3QiLCJhbGVydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdHVkZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/StudentsContext.tsx\n"));

/***/ })

});