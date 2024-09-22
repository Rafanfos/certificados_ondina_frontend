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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StudentsProvider: function() { return /* binding */ StudentsProvider; },\n/* harmony export */   useStudents: function() { return /* binding */ useStudents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ StudentsProvider,useStudents auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst StudentsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst StudentsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const fetchStudents = async ()=>{\n        const baseUrl1 = \"\".concat(\"http://localhost:8000\", \"/api\");\n        const contextUrl = \"\".concat(baseUrl1, \"/students\");\n        try {\n            const token = localStorage.getItem(\"token\");\n            if (!contextUrl) {\n                throw new Error(\"Base URL not defined\");\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(contextUrl, \"/list/\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return response.data;\n        } catch (error) {\n            console.error(error);\n            throw new Error(\"Falha ao listar alunos\");\n        }\n    };\n    const generateCertificate = async (studentId)=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/api/students/\".concat(studentId, \"/certificate\"), {}, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            alert(\"Certificado gerado com sucesso!\");\n        } catch (error) {\n            console.error(\"Failed to generate certificate\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setContextUrl(\"\".concat(baseUrl, \"/students\"));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StudentsContext.Provider, {\n        value: {\n            fetchStudents,\n            generateCertificate\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rafael/Documentos/certificados ondina/certificados_ondina_app/src/contexts/StudentsContext.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StudentsProvider, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = StudentsProvider;\nconst useStudents = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StudentsContext);\n};\n_s1(useStudents, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StudentsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFlO0FBQ1c7QUFtQjFCLE1BQU1JLGdDQUFrQkosb0RBQWFBLENBQ25DLENBQUM7QUFHSSxNQUFNSyxtQkFBbUI7UUFBQyxFQUFFQyxRQUFRLEVBQXlCOztJQUVsRSxNQUFNQyxnQkFBZ0I7UUFDcEIsTUFBTUMsV0FBVSxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUM7UUFDdkQsTUFBTUcsYUFBYSxHQUFXLE9BQVJKLFVBQVE7UUFFOUIsSUFBSTtZQUNGLE1BQU1LLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztZQUVuQyxJQUFJLENBQUNILFlBQVk7Z0JBQ2YsTUFBTSxJQUFJSSxNQUFNO1lBQ2xCO1lBRUcsTUFBTUMsV0FBVyxNQUFNZCw2Q0FBS0EsQ0FBQ2UsR0FBRyxDQUFDLEdBQWMsT0FBWE4sWUFBVyxXQUFTO2dCQUN6RE8sU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOUDtnQkFDM0I7WUFDRjtZQUVBLE9BQU9JLFNBQVNJLElBQUk7UUFDdEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZCxNQUFNLElBQUlOLE1BQU07UUFDbEI7SUFDRjtJQUVBLE1BQU1RLHNCQUFzQixPQUFPQztRQUNqQyxJQUFJO1lBQ0YsTUFBTVosUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBQ25DLE1BQU1aLDZDQUFLQSxDQUFDdUIsSUFBSSxDQUNkLHNDQUFnRCxPQUFWRCxXQUFVLGlCQUNoRCxDQUFDLEdBQ0Q7Z0JBQ0VOLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTlA7Z0JBQzNCO1lBQ0Y7WUFFRmMsTUFBTTtRQUNSLEVBQUUsT0FBT0wsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtJQUNGO0lBR0FwQixnREFBU0EsQ0FBQztRQUVSMEIsY0FBYyxHQUFXLE9BQVJwQixTQUFRO0lBQzNCO0lBRUEscUJBQ0UsOERBQUNKLGdCQUFnQnlCLFFBQVE7UUFBQ0MsT0FBTztZQUFFdkI7WUFBZWlCO1FBQW9CO2tCQUNuRWxCOzs7Ozs7QUFHUCxFQUFFO0dBdkRXRDtLQUFBQTtBQXlETixNQUFNMEIsY0FBYzs7SUFDekIsT0FBTzlCLGlEQUFVQSxDQUFDRztBQUNwQixFQUFFO0lBRlcyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvU3R1ZGVudHNDb250ZXh0LnRzeD8xMjZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlRWZmZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG50eXBlIElTdHVkZW50RGF0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgZnVsbF9uYW1lOiBzdHJpbmc7XG4gIGdyYWR1YXRpb25fdGVybTogYm9vbGVhbjtcbiAgZGlwbG9tYV9nZW5lcmF0ZWQ6IGJvb2xlYW47XG4gIGhpZ2hsaWdodF9jZXJ0aWZpY2F0ZV9nZW5lcmF0ZWQ6IGJvb2xlYW47XG59O1xuXG50eXBlIFN0dWRlbnRzQ29udGV4dERhdGEgPSB7XG4gIGZldGNoU3R1ZGVudHM6ICgpID0+IFByb21pc2U8SVN0dWRlbnREYXRhW10+O1xuICBnZW5lcmF0ZUNlcnRpZmljYXRlOiAoc3R1ZGVudElkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG59O1xuXG50eXBlIFN0dWRlbnRzUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IFN0dWRlbnRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3R1ZGVudHNDb250ZXh0RGF0YT4oXG4gIHt9IGFzIFN0dWRlbnRzQ29udGV4dERhdGFcbik7XG5cbmV4cG9ydCBjb25zdCBTdHVkZW50c1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogU3R1ZGVudHNQcm92aWRlclByb3BzKSA9PiB7XG5cbiAgY29uc3QgZmV0Y2hTdHVkZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPElTdHVkZW50RGF0YVtdPiA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGlgO1xuICAgIGNvbnN0IGNvbnRleHRVcmwgPSBgJHtiYXNlVXJsfS9zdHVkZW50c2A7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgICAgaWYgKCFjb250ZXh0VXJsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQmFzZSBVUkwgbm90IGRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7Y29udGV4dFVybH0vbGlzdC9gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhbGhhIGFvIGxpc3RhciBhbHVub3MnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZSA9IGFzeW5jIChzdHVkZW50SWQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc3R1ZGVudHMvJHtzdHVkZW50SWR9L2NlcnRpZmljYXRlYCxcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgYWxlcnQoJ0NlcnRpZmljYWRvIGdlcmFkbyBjb20gc3VjZXNzbyEnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIGNlcnRpZmljYXRlJywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gICAgc2V0Q29udGV4dFVybChgJHtiYXNlVXJsfS9zdHVkZW50c2ApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxTdHVkZW50c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZmV0Y2hTdHVkZW50cywgZ2VuZXJhdGVDZXJ0aWZpY2F0ZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0dWRlbnRzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTdHVkZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU3R1ZGVudHNDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlN0dWRlbnRzQ29udGV4dCIsIlN0dWRlbnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImZldGNoU3R1ZGVudHMiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMIiwiY29udGV4dFVybCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkVycm9yIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJnZW5lcmF0ZUNlcnRpZmljYXRlIiwic3R1ZGVudElkIiwicG9zdCIsImFsZXJ0Iiwic2V0Q29udGV4dFVybCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdHVkZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/StudentsContext.tsx\n"));

/***/ })

});