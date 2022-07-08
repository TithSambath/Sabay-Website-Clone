self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/recent_articles.js":
/*!***************************************!*\
  !*** ./components/recent_articles.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RecentArticles; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/tithsambath/document/Folder@Oneworld/my-project/frontend/components/recent_articles.js";


function RecentArticles(_ref) {
  var _this = this;

  var articles = _ref.articles;
  articles = articles.slice(0, 4);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "hidden md:flex md:w-750px lg:w-970px xl:w-1170px m-auto pl-5 pr-5 mt-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: " new-article flex flex-wrap ",
      children: articles.map(function (article, idx) {
        var isEven = idx % 2 == 0;
        var width = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          'md:min-w-180px lg:min-w-250px md:max-w-3/5': isEven
        }, {
          'md:min-w-160px lg:min-w-180px md:max-w-2/5': !isEven
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: '/article/we-love-pizza',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(width, {
              'new-article-content basis-3/5': isEven
            }, {
              'new-article-content basis-2/5': !isEven
            }),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bg-cover bg-center h-64 object-center bg-preview-image', width),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('group layer-overlay w-full h-full flex bg-black-opt-50 cursor-pointer relative max-h-64', width),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "article-info w-full absolute bottom-0 p-5",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    className: "title text-2xl transition duration-500 ease-in-out  font-semibold pb-3 opacity-100 text-white translate-y-16  group-hover:translate-y-0 group-hover:opacity-100",
                    children: article.attributes.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 49
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                    className: "group-hover:block transition-all duration-500 ease-in-out  text-white text-base font-hanuman translate-y-16 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 md:font-xs",
                    children: "\u1798\u1780\u179B\u17BE\u1780\u1793\u17C1\u17C7\u1791\u17D2\u179A\u1784\u17CB\u1791\u17D2\u179A\u17B6\u1799\u1799\u1780\u17D2\u179F\u17A0\u17D2\u1798\u1784! \u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u200B\u178F\u17C2 Comeback \u1791\u17C1 \u1798\u17B6\u1793\u200B World Tour \u1791\u17C0\u178F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 45
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 41
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "h-auto ml-2 float-right md:grid grid-rows-2 gap-2 hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "min-w-300px max-w-300px min-h-250px max-h-250px w-full h-auto bg-gray-300 cursor-pointer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "min-w-300px max-w-300px min-h-250px max-h-250px bg-gray-300 cursor-pointer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          width: "100%",
          height: "100%",
          src: "https://ads.sabay.com/images/4fdab1184de785aefd5edac3aedef100.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = RecentArticles;

var _c;

$RefreshReg$(_c, "RecentArticles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWNlbnRfYXJ0aWNsZXMuanMiXSwibmFtZXMiOlsiUmVjZW50QXJ0aWNsZXMiLCJhcnRpY2xlcyIsInNsaWNlIiwibWFwIiwiYXJ0aWNsZSIsImlkeCIsImlzRXZlbiIsIndpZHRoIiwiY2xhc3NOYW1lcyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBRWpEQSxVQUFRLEdBQUdBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBWDtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdFQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSxnQkFHUUQsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzNCLFlBQUlDLE1BQU0sR0FBR0QsR0FBRyxHQUFHLENBQU4sSUFBVyxDQUF4QjtBQUNBLFlBQUlFLEtBQUssR0FBR0MsaURBQVUsQ0FBQztBQUFDLHdEQUE4Q0Y7QUFBL0MsU0FBRCxFQUF5RDtBQUFDLHdEQUE4QyxDQUFDQTtBQUFoRCxTQUF6RCxDQUF0QjtBQUNBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFFLHdCQUFaO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFFRSxpREFBVSxDQUFDRCxLQUFELEVBQVE7QUFBQywrQ0FBaUNEO0FBQWxDLGFBQVIsRUFBbUQ7QUFBQywrQ0FBaUMsQ0FBQ0E7QUFBbkMsYUFBbkQsQ0FBMUI7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUVFLGlEQUFVLENBQUMsd0RBQUQsRUFBMkRELEtBQTNELENBQTFCO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFFQyxpREFBVSxDQUFDLHlGQUFELEVBQTRGRCxLQUE1RixDQUExQjtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQywyQ0FBZjtBQUFBLDBDQUNJO0FBQUksNkJBQVMsRUFBQyxpS0FBZDtBQUFBLDhCQUVtRUgsT0FBTyxDQUFDSyxVQUFSLENBQW1CQztBQUZ0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBSUk7QUFBSSw2QkFBUyxFQUFDLHFMQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFvQkgsT0F2QkQ7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUE4Qkk7QUFBSyxlQUFTLEVBQUMsMERBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsNEVBQWY7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBQyxNQUFYO0FBQWtCLGdCQUFNLEVBQUMsTUFBekI7QUFBZ0MsYUFBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIO0tBN0N1QlYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZDRlMWFhNzUwM2RlZGMzZjQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZW50QXJ0aWNsZXMoeyBhcnRpY2xlcyB9KSB7XG5cbiAgICBhcnRpY2xlcyA9IGFydGljbGVzLnNsaWNlKDAsIDQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG1kOnctNzUwcHggbGc6dy05NzBweCB4bDp3LTExNzBweCBtLWF1dG8gcGwtNSBwci01IG10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICAgbmV3LWFydGljbGUgZmxleCBmbGV4LXdyYXAgXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5tYXAoKGFydGljbGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXZlbiA9IGlkeCAlIDIgPT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGNsYXNzTmFtZXMoeydtZDptaW4tdy0xODBweCBsZzptaW4tdy0yNTBweCBtZDptYXgtdy0zLzUnOiBpc0V2ZW59LCB7J21kOm1pbi13LTE2MHB4IGxnOm1pbi13LTE4MHB4IG1kOm1heC13LTIvNSc6ICFpc0V2ZW59IClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hcnRpY2xlL3dlLWxvdmUtcGl6emEnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMod2lkdGgsIHsnbmV3LWFydGljbGUtY29udGVudCBiYXNpcy0zLzUnOiBpc0V2ZW59LCB7J25ldy1hcnRpY2xlLWNvbnRlbnQgYmFzaXMtMi81JzogIWlzRXZlbn0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdiZy1jb3ZlciBiZy1jZW50ZXIgaC02NCBvYmplY3QtY2VudGVyIGJnLXByZXZpZXctaW1hZ2UnLCB3aWR0aCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdncm91cCBsYXllci1vdmVybGF5IHctZnVsbCBoLWZ1bGwgZmxleCBiZy1ibGFjay1vcHQtNTAgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgbWF4LWgtNjQnLCB3aWR0aCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtaW5mbyB3LWZ1bGwgYWJzb2x1dGUgYm90dG9tLTAgcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC0yeGwgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNlbWlib2xkIHBiLTMgb3BhY2l0eS0xMDAgdGV4dC13aGl0ZSB0cmFuc2xhdGUteS0xNiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj57YXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6YmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd2hpdGUgdGV4dC1iYXNlIGZvbnQtaGFudW1hbiB0cmFuc2xhdGUteS0xNiBvcGFjaXR5LTAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIG1kOmZvbnQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDhnpjhnoDhnpvhnr7hnoDhnpPhn4Hhn4fhnpHhn5LhnprhnoThn4vhnpHhn5LhnprhnrbhnpnhnpnhnoDhn5Lhnp/hnqDhn5LhnpjhnoQhIOGemOGet+Gek+Gej+GfkuGemuGeueGemOKAi+Gej+GfgiBDb21lYmFjayDhnpHhn4Eg4Z6Y4Z624Z6T4oCLIFdvcmxkIFRvdXIg4Z6R4Z+A4Z6PXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtYXV0byBtbC0yIGZsb2F0LXJpZ2h0IG1kOmdyaWQgZ3JpZC1yb3dzLTIgZ2FwLTIgaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0zMDBweCBtYXgtdy0zMDBweCBtaW4taC0yNTBweCBtYXgtaC0yNTBweCB3LWZ1bGwgaC1hdXRvIGJnLWdyYXktMzAwIGN1cnNvci1wb2ludGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTMwMHB4IG1heC13LTMwMHB4IG1pbi1oLTI1MHB4IG1heC1oLTI1MHB4IGJnLWdyYXktMzAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHNyYz1cImh0dHBzOi8vYWRzLnNhYmF5LmNvbS9pbWFnZXMvNGZkYWIxMTg0ZGU3ODVhZWZkNWVkYWMzYWVkZWYxMDAuanBnXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==