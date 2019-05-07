webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Shell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Shell */ "./components/Shell.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism */ "./node_modules/react-syntax-highlighter/dist/styles/prism/index.js");
/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_16__);



















var CodeBlock =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CodeBlock, _PureComponent);

  function CodeBlock() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CodeBlock);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CodeBlock).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          language = _this$props.language,
          value = _this$props.value;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_15__["Prism"], {
        language: language,
        style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_16__["okaidia"]
      }, value);
    }
  }]);

  return CodeBlock;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(CodeBlock, "defaultProps", {
  language: null
});

var Post = function Post(_ref) {
  var _ref$post = _ref.post,
      title = _ref$post.title,
      createdAt = _ref$post.createdAt,
      content = _ref$post.content;
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Shell__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-1147873188" + " " + "post-content"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
    className: "jsx-1147873188" + " " + "post-title"
  }, title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
    className: "jsx-1147873188" + " " + "post-date"
  }, moment__WEBPACK_IMPORTED_MODULE_10___default()(createdAt).format('LLLL')), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
    className: "jsx-1147873188"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_13___default.a, {
    source: content,
    renderers: {
      code: CodeBlock
    }
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", {
    className: "jsx-1147873188"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/posts"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "jsx-1147873188" + " " + "post-back"
  }, "Back To Posts"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "1147873188"
  }, ".post-content.jsx-1147873188{width:85vw;max-width:800px;z-index:1;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;padding-bottom:40px;}.post-date.jsx-1147873188{font-size:16px;}.post-title.jsx-1147873188{color:white;}.post-back.jsx-1147873188{margin-top:30px;color:#D2CABA !important;text-transform:uppercase;background:#192E43;padding:6px;border:2px solid #D2CABA !important;border-radius:6px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;display:inline-block;}.post-back.jsx-1147873188:focus{outline-color:white;}.post-back.jsx-1147873188:hover{color:#ffffff !important;background:#f6b93b;border-color:#f6b93b !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pqL1Byb2plY3RzL1JlYWN0L3BlcnNvbmFsLXNpdGUvZnJvbnRlbmQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBRzRCLEFBVUksQUFLcEIsQUFHcUIsQUFhSSxBQUlLLFdBbENULENBY3BCLEdBSkEsQ0FTNkIsSUFZN0IsS0FJdUIsRUFsQ1QsVUFFSyxJQWlCVSxHQWdCTyxzQkFmYixVQWdCdkIsU0FmZ0IsWUFDd0IsRUFsQmhCLG9CQUN4QixjQWtCc0Isa0JBQ1UsZ0VBQ1AscUJBQ3pCIiwiZmlsZSI6Ii9ob21lL2pqL1Byb2plY3RzL1JlYWN0L3BlcnNvbmFsLXNpdGUvZnJvbnRlbmQvcGFnZXMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGcmFnbWVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaGVsbCBmcm9tICcuLi9jb21wb25lbnRzL1NoZWxsJztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyBva2FpZGlhIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L3N0eWxlcy9wcmlzbVwiO1xuXG5jbGFzcyBDb2RlQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYW5ndWFnZTogbnVsbFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPXtsYW5ndWFnZX0gc3R5bGU9e29rYWlkaWF9PlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgUG9zdCA9ICh7IHBvc3Q6IHsgdGl0bGUsIGNyZWF0ZWRBdCwgY29udGVudCB9IH0pID0+IChcbiAgICA8U2hlbGw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBvc3QtZGF0ZVwiPnttb21lbnQoY3JlYXRlZEF0KS5mb3JtYXQoJ0xMTEwnKX08L2gzPlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0gcmVuZGVyZXJzPXt7IGNvZGU6IENvZGVCbG9jayB9fSAvPlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvc3QtYmFja1wiPkJhY2sgVG8gUG9zdHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnBvc3QtY29udGVudCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1dnc7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0LWRhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3QtdGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdC1iYWNrIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEMkNBQkEgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOTJFNDM7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNEMkNBQkEgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0LWJhY2s6Zm9jdXMge1xuICAgICAgICAgICAgICAgIG91dGxpbmUtY29sb3I6IHdoaXRlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnBvc3QtYmFjazpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZiOTNiO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y2YjkzYiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9TaGVsbD4gXG4pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Bvc3RzLyR7aWR9YCk7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocG9zdCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwb3N0LFxuICAgIH1cbn1cbiAgICBcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbiJdfQ== */\n/*@ sourceURL=/home/jj/Projects/React/personal-site/frontend/pages/post.js */"));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, id, res, post;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            id = query.id;
            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default()("http://localhost:1337/posts/".concat(id));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            post = _context.sent;
            console.log(post);
            return _context.abrupt("return", {
              post: post
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.dd5224398ae4f9545b06.hot-update.js.map