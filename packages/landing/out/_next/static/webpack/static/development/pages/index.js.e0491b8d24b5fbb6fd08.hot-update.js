webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/containers/Portfolio/Clients2/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Clients2/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var _clients_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients.style */ "../../node_modules/common/src/containers/Portfolio/Clients2/clients.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Clients2/index.js";










var ClientsSection = function ClientsSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      row = _ref.row;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "We can't do this alone.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "We have developed partnerships and working relationships with great companies and entrepreneurs all over the world.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_8__["CLIENTS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_clients_style__WEBPACK_IMPORTED_MODULE_9__["ClientsImage"], {
      key: "client-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: item.image,
      alt: item.title,
      title: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }))));
};

ClientsSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ClientsSection.defaultProps = {
  sectionWrapper: {
    pt: ['40px', '60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '100px', '130px', '130px']
  },
  secTitleWrapper: {
    mb: '60px'
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center'
  },
  secDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ClientsSection);

/***/ })

})
//# sourceMappingURL=index.js.e0491b8d24b5fbb6fd08.hot-update.js.map