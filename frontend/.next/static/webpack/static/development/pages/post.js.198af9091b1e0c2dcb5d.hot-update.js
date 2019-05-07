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
        style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_16__["coy"]
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
  }, ".post-content.jsx-1147873188{width:85vw;max-width:800px;z-index:1;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;padding-bottom:40px;}.post-date.jsx-1147873188{font-size:16px;}.post-title.jsx-1147873188{color:white;}.post-back.jsx-1147873188{margin-top:30px;color:#D2CABA !important;text-transform:uppercase;background:#192E43;padding:6px;border:2px solid #D2CABA !important;border-radius:6px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;display:inline-block;}.post-back.jsx-1147873188:focus{outline-color:white;}.post-back.jsx-1147873188:hover{color:#ffffff !important;background:#f6b93b;border-color:#f6b93b !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pqL1Byb2plY3RzL1JlYWN0L3BlcnNvbmFsLXNpdGUvZnJvbnRlbmQvcGFnZXMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBRzRCLEFBVUksQUFLcEIsQUFHcUIsQUFhSSxBQUlLLFdBbENULENBY3BCLEdBSkEsQ0FTNkIsSUFZN0IsS0FJdUIsRUFsQ1QsVUFFSyxJQWlCVSxHQWdCTyxzQkFmYixVQWdCdkIsU0FmZ0IsWUFDd0IsRUFsQmhCLG9CQUN4QixjQWtCc0Isa0JBQ1UsZ0VBQ1AscUJBQ3pCIiwiZmlsZSI6Ii9ob21lL2pqL1Byb2plY3RzL1JlYWN0L3BlcnNvbmFsLXNpdGUvZnJvbnRlbmQvcGFnZXMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGcmFnbWVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaGVsbCBmcm9tICcuLi9jb21wb25lbnRzL1NoZWxsJztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyBjb3kgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3Qvc3R5bGVzL3ByaXNtXCI7XG5cbmNsYXNzIENvZGVCbG9jayBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxhbmd1YWdlOiBudWxsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSBzdHlsZT17Y295fT5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0OiB7IHRpdGxlLCBjcmVhdGVkQXQsIGNvbnRlbnQgfSB9KSA9PiAoXG4gICAgPFNoZWxsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj57bW9tZW50KGNyZWF0ZWRBdCkuZm9ybWF0KCdMTExMJyl9PC9oMz5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2NvbnRlbnR9IHJlbmRlcmVycz17eyBjb2RlOiBDb2RlQmxvY2sgfX0gLz5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb3N0LWJhY2tcIj5CYWNrIFRvIFBvc3RzPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wb3N0LWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NXZ3O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcblxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcblxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdC1kYXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0LXRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3QtYmFjayB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRDJDQUJBICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTkyRTQzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRDJDQUJBICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdC1iYWNrOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5wb3N0LWJhY2s6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2YjkzYjtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNmI5M2IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvU2hlbGw+IFxuKTtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcXVlcnk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wb3N0cy8ke2lkfWApO1xuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHBvc3QpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdCxcbiAgICB9XG59XG4gICAgXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG4iXX0= */\n/*@ sourceURL=/home/jj/Projects/React/personal-site/frontend/pages/post.js */"));
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
//# sourceMappingURL=post.js.198af9091b1e0c2dcb5d.hot-update.js.map