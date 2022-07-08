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
                lineNumber: 25,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
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
                lineNumber: 36,
                columnNumber: 17
              }, _this)
            }, 'id-home', false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
                  lineNumber: 46,
                  columnNumber: 23
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 19
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "sm-nav bgblack pt-4 pb-4 font-bayon text-lg block w-full md:hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container w-full m-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "nav-head w-full flex justify-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
                lineNumber: 60,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: '/',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              width: 40,
              className: "cursor-pointer",
              src: "https://news.sabay.com.kh/img/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            width: 40,
            className: "cursor-pointer",
            src: "https://media.sabay.com/media/Testing(1)/gif/611c767eaf4c2_1629255240.gif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
                    lineNumber: 75,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this)
            }, 'id-home', false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
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
                    lineNumber: 88,
                    columnNumber: 25
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full flex justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            width: 40,
            className: "cursor-pointer",
            src: "https://media.sabay.com/media/Testing(1)/gif/611c767eaf4c2_1629255240.gif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2F0ZWdvcmllcyIsInJvdXRlIiwidXNlUm91dGVyIiwiY3VycmVudENhdGUiLCJxdWVyeSIsInNsdWciLCJpc0FjdGl2ZSIsInBhdGhuYW1lIiwibWFwIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBOztBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFFOUIsTUFBTUMsS0FBSyxHQUFHQyxrRUFBUyxFQUF2QjtBQUNBLE1BQU1DLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLElBQWhDOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBYztBQUU3QixRQUFJQSxRQUFRLElBQUksR0FBaEIsRUFDRSxPQUFPLDBDQUFQO0FBQ0YsV0FBT0osV0FBVyxJQUFJSSxRQUFmLEdBQTBCLDBDQUExQixHQUF1RSxFQUE5RTtBQUNELEdBTEQ7O0FBT0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxzREFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxvREFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFFLEdBQVo7QUFBQSxxQ0FDRTtBQUFLLHFCQUFLLEVBQUUsRUFBWjtBQUFnQix5QkFBUyxFQUFDLGdCQUExQjtBQUEyQyxtQkFBRyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtB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QU1iLEc7VUFFVUcsOEQ7OztLQUZWSCxHO0FBbUdOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tzbHVnXS44MzYxMmUxMmE0N2E5Mjc0Nzc4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiXG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGN1cnJlbnRDYXRlID0gcm91dGUucXVlcnkuc2x1ZztcblxuICBjb25zdCBpc0FjdGl2ZSA9IChwYXRobmFtZSkgPT4ge1xuXG4gICAgaWYgKHBhdGhuYW1lID09IFwiL1wiKVxuICAgICAgcmV0dXJuIFwiYmctc2Vjb24tY3VzdG9tLXJlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiO1xuICAgIHJldHVybiBjdXJyZW50Q2F0ZSA9PSBwYXRobmFtZSA/IFwiYmctc2Vjb24tY3VzdG9tLXJlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiIDogXCJcIjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctY3VzLWJsYWNrIHB0LTQgZm9udC1iYXlvbiB0ZXh0LWxnIGhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtZDp3LTc1MHB4IGxnOnctOTcwcHggeGw6dy0xMTcwcHggbS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaGVhZCBmbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0IHBsLTUgcHItNVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9ezgwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz1cImh0dHBzOi8vbmV3cy5zYWJheS5jb20ua2gvaW1nL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTEyIG10LTQgYmctcHJpLWN1c3RvbS1yZWQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGwtNSBwci01IGZsZXgganVzdGlmeS1iZXR3ZWVuIGgtZnVsbCB6LTUwIG1kOnctNzUwcHggbGc6dy05NzBweCB4bDp3LTExNzBweCBtLWF1dG8gZm9udC1ib2xkIHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9eydpZC1ob21lJ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzQWN0aXZlKHJvdXRlLnBhdGhuYW1lKX0gZmxleCBpdGVtcy1jZW50ZXIgcC0zLjUgdy1maXQgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC13aGl0ZWB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgdXBwZXJjYXNlXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc0FjdGl2ZShjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWcpfSBmbGV4IGl0ZW1zLWNlbnRlciBwLTMuNSB3LWZpdCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIGFjdGl2ZTp0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCB1cHBlcmNhc2VcIj57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwic20tbmF2IGJnYmxhY2sgcHQtNCBwYi00IGZvbnQtYmF5b24gdGV4dC1sZyBibG9jayB3LWZ1bGwgbWQ6aGlkZGVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHctZnVsbCBtLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1oZWFkIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LWljb25cIj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJoLTYgdy02XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGg3XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XG4gICAgICAgICAgICAgIDxpbWcgd2lkdGg9ezQwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz1cImh0dHBzOi8vbmV3cy5zYWJheS5jb20ua2gvaW1nL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9ezQwfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz1cImh0dHBzOi8vbWVkaWEuc2FiYXkuY29tL21lZGlhL1Rlc3RpbmcoMSkvZ2lmLzYxMWM3NjdlYWY0YzJfMTYyOTI1NTI0MC5naWZcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17J2lkLWhvbWUnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNBY3RpdmUocm91dGUucGF0aG5hbWUpfSBmbGV4IGl0ZW1zLWNlbnRlciBwLTMuNSB3LWZ1bGwgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC13aGl0ZWB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNSB3LTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAwbC03IDdhMSAxIDAgMDAxLjQxNCAxLjQxNEw0IDEwLjQxNFYxN2ExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi0yYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MmExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi02LjU4NmwuMjkzLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0bC03LTd6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMlwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNBY3RpdmUoY2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnKX0gZmxleCBpdGVtcy1jZW50ZXIgcC0zLjUgdy1mdWxsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgdXBwZXJjYXNlXCI+e2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZyB3aWR0aD17NDB9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgc3JjPVwiaHR0cHM6Ly9tZWRpYS5zYWJheS5jb20vbWVkaWEvVGVzdGluZygxKS9naWYvNjExYzc2N2VhZjRjMl8xNjI5MjU1MjQwLmdpZlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdLCJzb3VyY2VSb290IjoiIn0=