webpackHotUpdate("static/development/pages/TIP.js",{

/***/ "../../node_modules/common/src/containers/Agency/BlogSection2/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/BlogSection2/index.js ***!
  \**************************************************************************************************************************/
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
/* harmony import */ var reusecore_src_elements_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Agency2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/Agency2 */ "../../node_modules/common/src/data/Agency2/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _blogSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blogSection.style */ "../../node_modules/common/src/containers/Agency/BlogSection2/blogSection.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/BlogSection2/index.js";












var BlogSection = function BlogSection(_ref) {
  var row = _ref.row,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      blogTitle = _ref.blogTitle,
      blogMeta = _ref.blogMeta;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blogSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "blogSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "TOKEN PROP PORTFOLIO"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "View Our Featured Properties"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), _data_Agency2__WEBPACK_IMPORTED_MODULE_9__["default"].blog.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "post_key-".concat(index),
      id: "post_id-".concat(post.id),
      className: "blog__post",
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: post.thumbnail_url,
        alt: "Blog Image ".concat(post.id),
        className: "blog__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }),
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Link__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        href: post.postLink
      }, blogTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), post.title),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: post.date
      }, blogMeta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }))));
}; // BlogSection style props


BlogSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  blogTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  blogMeta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // BlogSection default style

BlogSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px',
    mb: '12px',
    mt: '12px'
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.5',
    mb: '10px',
    letterSpacing: '-0.020em'
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BlogSection);

/***/ })

})
//# sourceMappingURL=TIP.js.782952c85660280b7e3d.hot-update.js.map