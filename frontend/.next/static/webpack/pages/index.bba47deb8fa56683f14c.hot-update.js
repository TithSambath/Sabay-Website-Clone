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
                    className: "group-hover:block transition-all duration-500 ease-in-out  text-white font-hanuman translate-y-16 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 md:font-xs",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWNlbnRfYXJ0aWNsZXMuanMiXSwibmFtZXMiOlsiUmVjZW50QXJ0aWNsZXMiLCJhcnRpY2xlcyIsInNsaWNlIiwibWFwIiwiYXJ0aWNsZSIsImlkeCIsImlzRXZlbiIsIndpZHRoIiwiY2xhc3NOYW1lcyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBRWpEQSxVQUFRLEdBQUdBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBWDtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdFQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSxnQkFHUUQsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzNCLFlBQUlDLE1BQU0sR0FBR0QsR0FBRyxHQUFHLENBQU4sSUFBVyxDQUF4QjtBQUNBLFlBQUlFLEtBQUssR0FBR0MsaURBQVUsQ0FBQztBQUFDLHdEQUE4Q0Y7QUFBL0MsU0FBRCxFQUF5RDtBQUFDLHdEQUE4QyxDQUFDQTtBQUFoRCxTQUF6RCxDQUF0QjtBQUNBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFFLHdCQUFaO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFFRSxpREFBVSxDQUFDRCxLQUFELEVBQVE7QUFBQywrQ0FBaUNEO0FBQWxDLGFBQVIsRUFBbUQ7QUFBQywrQ0FBaUMsQ0FBQ0E7QUFBbkMsYUFBbkQsQ0FBMUI7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUVFLGlEQUFVLENBQUMsd0RBQUQsRUFBMkRELEtBQTNELENBQTFCO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFFQyxpREFBVSxDQUFDLHlGQUFELEVBQTRGRCxLQUE1RixDQUExQjtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQywyQ0FBZjtBQUFBLDBDQUNJO0FBQUksNkJBQVMsRUFBQyxpS0FBZDtBQUFBLDhCQUVtRUgsT0FBTyxDQUFDSyxVQUFSLENBQW1CQztBQUZ0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBSUk7QUFBSSw2QkFBUyxFQUFDLDJLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFvQkgsT0F2QkQ7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUE4Qkk7QUFBSyxlQUFTLEVBQUMsMERBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsNEVBQWY7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBQyxNQUFYO0FBQWtCLGdCQUFNLEVBQUMsTUFBekI7QUFBZ0MsYUFBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIO0tBN0N1QlYsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYmE0N2RlYjhmYTU2NjgzZjE0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZW50QXJ0aWNsZXMoeyBhcnRpY2xlcyB9KSB7XG5cbiAgICBhcnRpY2xlcyA9IGFydGljbGVzLnNsaWNlKDAsIDQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG1kOnctNzUwcHggbGc6dy05NzBweCB4bDp3LTExNzBweCBtLWF1dG8gcGwtNSBwci01IG10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICAgbmV3LWFydGljbGUgZmxleCBmbGV4LXdyYXAgXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5tYXAoKGFydGljbGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXZlbiA9IGlkeCAlIDIgPT0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGNsYXNzTmFtZXMoeydtZDptaW4tdy0xODBweCBsZzptaW4tdy0yNTBweCBtZDptYXgtdy0zLzUnOiBpc0V2ZW59LCB7J21kOm1pbi13LTE2MHB4IGxnOm1pbi13LTE4MHB4IG1kOm1heC13LTIvNSc6ICFpc0V2ZW59IClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hcnRpY2xlL3dlLWxvdmUtcGl6emEnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMod2lkdGgsIHsnbmV3LWFydGljbGUtY29udGVudCBiYXNpcy0zLzUnOiBpc0V2ZW59LCB7J25ldy1hcnRpY2xlLWNvbnRlbnQgYmFzaXMtMi81JzogIWlzRXZlbn0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdiZy1jb3ZlciBiZy1jZW50ZXIgaC02NCBvYmplY3QtY2VudGVyIGJnLXByZXZpZXctaW1hZ2UnLCB3aWR0aCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdncm91cCBsYXllci1vdmVybGF5IHctZnVsbCBoLWZ1bGwgZmxleCBiZy1ibGFjay1vcHQtNTAgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgbWF4LWgtNjQnLCB3aWR0aCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtaW5mbyB3LWZ1bGwgYWJzb2x1dGUgYm90dG9tLTAgcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC0yeGwgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNlbWlib2xkIHBiLTMgb3BhY2l0eS0xMDAgdGV4dC13aGl0ZSB0cmFuc2xhdGUteS0xNiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj57YXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6YmxvY2sgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtd2hpdGUgZm9udC1oYW51bWFuIHRyYW5zbGF0ZS15LTE2IG9wYWNpdHktMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgbWQ6Zm9udC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOGemOGegOGem+GevuGegOGek+GfgeGfh+GekeGfkuGemuGehOGfi+GekeGfkuGemuGetuGemeGemeGegOGfkuGen+GeoOGfkuGemOGehCEg4Z6Y4Z634Z6T4Z6P4Z+S4Z6a4Z654Z6Y4oCL4Z6P4Z+CIENvbWViYWNrIOGekeGfgSDhnpjhnrbhnpPigIsgV29ybGQgVG91ciDhnpHhn4Dhno9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1hdXRvIG1sLTIgZmxvYXQtcmlnaHQgbWQ6Z3JpZCBncmlkLXJvd3MtMiBnYXAtMiBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTMwMHB4IG1heC13LTMwMHB4IG1pbi1oLTI1MHB4IG1heC1oLTI1MHB4IHctZnVsbCBoLWF1dG8gYmctZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXJcIj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctMzAwcHggbWF4LXctMzAwcHggbWluLWgtMjUwcHggbWF4LWgtMjUwcHggYmctZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly9hZHMuc2FiYXkuY29tL2ltYWdlcy80ZmRhYjExODRkZTc4NWFlZmQ1ZWRhYzNhZWRlZjEwMC5qcGdcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9