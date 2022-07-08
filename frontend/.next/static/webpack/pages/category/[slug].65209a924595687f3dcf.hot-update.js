self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./components/search.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/tithsambath/document/Folder@Oneworld/my-project/frontend/components/nav.js",
    _this = undefined,
    _s = $RefreshSig$();






var Nav = function Nav(_ref) {
  _s();

  var categories = _ref.categories;
  var route = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var currentCate = route.query.slug;

  var isActive = function isActive(pathname) {
    if (pathname == "/") return "bg-secon-custom-red text-white font-bold";
    return currentCate == pathname ? "bg-secon-custom-red text-white font-bold" : "";
  };

  var triggerMenu = function triggerMenu() {
    document.getElementById('sm-nav').style.display = "block";
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "bg-cus-black pt-4 font-bayon text-lg hidden md:block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container md:w-750px lg:w-970px xl:w-1170px m-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "nav-head flex",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-navbar-left pl-5 pr-5",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: '/',
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                width: 80,
                className: "cursor-pointer",
                src: "https://news.sabay.com.kh/img/logo.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-full h-12 mt-4 bg-pri-custom-red flex items-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "pl-5 pr-5 flex justify-between h-full z-50 md:w-750px lg:w-970px xl:w-1170px m-auto font-bold text-gray-300",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "".concat(isActive(route.pathname), " flex items-center p-3.5 w-fit text-center cursor-pointer hover:text-white active:text-white"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "uk-link-reset uppercase",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, _this)
            }, 'id-home', false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), categories.map(function (category) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/category/".concat(category.attributes.slug),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "".concat(isActive(category.attributes.slug), " flex items-center p-3.5 w-fit hover:text-white text-center cursor-pointer active:text-white"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "uk-link-reset uppercase",
                  children: category.attributes.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 23
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      id: "sm-nav",
      className: "sm-nav bg-black pt-4 pb-4 font-bayon text-lg block w-full md:hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container w-full m-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "nav-head w-full flex justify-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return triggerMenu();
            },
            className: "menu-icon",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              "class": "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M4 6h16M4 12h16M4 18h7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: '/',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              width: 40,
              className: "cursor-pointer",
              src: "https://news.sabay.com.kh/img/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            width: 40,
            className: "cursor-pointer",
            src: "https://media.sabay.com/media/Testing(1)/gif/611c767eaf4c2_1629255240.gif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "w-full mt-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "".concat(isActive(route.pathname), " flex items-center p-3.5 w-full text-center cursor-pointer hover:text-white active:text-white"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "uk-link-reset uppercase",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "class": "h-5 w-5",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this)
            }, 'id-home', false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-2",
            children: categories.map(function (category) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/category/".concat(category.attributes.slug),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: "".concat(isActive(category.attributes.slug), " flex items-center p-3.5 w-full hover:text-white text-center cursor-pointer active:text-white"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset uppercase",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 25
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full flex justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            width: 40,
            className: "cursor-pointer",
            src: "https://media.sabay.com/media/Testing(1)/gif/611c767eaf4c2_1629255240.gif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Nav, "JD5qVJBo0MNDbUb5oI+DMKChels=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInJvdXRlIiwidXNlUm91dGVyIiwiY3VycmVudENhdGUiLCJxdWVyeSIsInNsdWciLCJpc0FjdGl2ZSIsInBhdGhuYW1lIiwidHJpZ2dlck1lbnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwibWFwIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFFOUIsTUFBTUMsS0FBSyxHQUFHQyxrRUFBUyxFQUF2QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQWhDOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBYztBQUU3QixRQUFJQSxRQUFRLElBQUksR0FBaEIsRUFDRSxPQUFPLDBDQUFQO0FBQ0YsV0FBT0osV0FBVyxJQUFJSSxRQUFmLEdBQTBCLDBDQUExQixHQUF1RSxFQUE5RTtBQUNELEdBTEQ7O0FBT0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsWUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxDQUF3Q0MsT0FBeEMsR0FBZ0QsT0FBaEQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsc0RBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsb0RBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQywwQkFB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QUFBQSxpQkFkRixlQTBDRTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQSxpQ0FDRTtBQUFLLGlCQUFLLEVBQUUsRUFBWjtBQUFnQixxQkFBUyxFQUFDLGdCQUExQjtBQUEyQyxlQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQ0Y7QUFBQSxrQkFERjtBQXVGRCxDQXZHRDs7R0FBTWxCLEc7VUFFVUcsOEQ7OztLQUZWSCxHO0FBeUdOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tzbHVnXS42NTIwOWE5MjQ1OTU2ODdmM2RjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiXG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGN1cnJlbnRDYXRlID0gcm91dGUucXVlcnkuc2x1ZztcblxuICBjb25zdCBpc0FjdGl2ZSA9IChwYXRobmFtZSkgPT4ge1xuXG4gICAgaWYgKHBhdGhuYW1lID09IFwiL1wiKVxuICAgICAgcmV0dXJuIFwiYmctc2Vjb24tY3VzdG9tLXJlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiO1xuICAgIHJldHVybiBjdXJyZW50Q2F0ZSA9PSBwYXRobmFtZSA/IFwiYmctc2Vjb24tY3VzdG9tLXJlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiIDogXCJcIjtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJNZW51ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbS1uYXYnKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy1jdXMtYmxhY2sgcHQtNCBmb250LWJheW9uIHRleHQtbGcgaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1kOnctNzUwcHggbGc6dy05NzBweCB4bDp3LTExNzBweCBtLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1oZWFkIGZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstbmF2YmFyLWxlZnQgcGwtNSBwci01XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD17ODB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPVwiaHR0cHM6Ly9uZXdzLnNhYmF5LmNvbS5raC9pbWcvbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgbXQtNCBiZy1wcmktY3VzdG9tLXJlZCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC01IHByLTUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaC1mdWxsIHotNTAgbWQ6dy03NTBweCBsZzp3LTk3MHB4IHhsOnctMTE3MHB4IG0tYXV0byBmb250LWJvbGQgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17J2lkLWhvbWUnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNBY3RpdmUocm91dGUucGF0aG5hbWUpfSBmbGV4IGl0ZW1zLWNlbnRlciBwLTMuNSB3LWZpdCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlIGFjdGl2ZTp0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCB1cHBlcmNhc2VcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQWN0aXZlKGNhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Zyl9IGZsZXggaXRlbXMtY2VudGVyIHAtMy41IHctZml0IGhvdmVyOnRleHQtd2hpdGUgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IHVwcGVyY2FzZVwiPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPG5hdiBpZD1cInNtLW5hdlwiIGNsYXNzTmFtZT1cInNtLW5hdiBiZy1ibGFjayBwdC00IHBiLTQgZm9udC1iYXlvbiB0ZXh0LWxnIGJsb2NrIHctZnVsbCBtZDpoaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdy1mdWxsIG0tYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWhlYWQgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRyaWdnZXJNZW51KCl9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1pY29uXCI+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwiaC02IHctNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoN1wiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPXs0MH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCJodHRwczovL25ld3Muc2FiYXkuY29tLmtoL2ltZy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8aW1nIHdpZHRoPXs0MH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCJodHRwczovL21lZGlhLnNhYmF5LmNvbS9tZWRpYS9UZXN0aW5nKDEpL2dpZi82MTFjNzY3ZWFmNGMyXzE2MjkyNTUyNDAuZ2lmXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy1mdWxsIG10LTVcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9eydpZC1ob21lJ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQWN0aXZlKHJvdXRlLnBhdGhuYW1lKX0gZmxleCBpdGVtcy1jZW50ZXIgcC0zLjUgdy1mdWxsIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtd2hpdGUgYWN0aXZlOnRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJoLTUgdy01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMC43MDcgMi4yOTNhMSAxIDAgMDAtMS40MTQgMGwtNyA3YTEgMSAwIDAwMS40MTQgMS40MTRMNCAxMC40MTRWMTdhMSAxIDAgMDAxIDFoMmExIDEgMCAwMDEtMXYtMmExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjJhMSAxIDAgMDAxIDFoMmExIDEgMCAwMDEtMXYtNi41ODZsLjI5My4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNGwtNy03elwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQWN0aXZlKGNhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Zyl9IGZsZXggaXRlbXMtY2VudGVyIHAtMy41IHctZnVsbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIGFjdGl2ZTp0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IHVwcGVyY2FzZVwiPntjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9ezQwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz1cImh0dHBzOi8vbWVkaWEuc2FiYXkuY29tL21lZGlhL1Rlc3RpbmcoMSkvZ2lmLzYxMWM3NjdlYWY0YzJfMTYyOTI1NTI0MC5naWZcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwic291cmNlUm9vdCI6IiJ9