webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/containers/Agency/BlogSection/blogSection.style.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/BlogSection/blogSection.style.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    padding: 60px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 40px 0;\n  }\n\n  .feature__block {\n    &.blog__post {\n      border-radius: 5px;\n      overflow: hidden;\n      position: relative;\n      width: calc(100% / 3 - 24px);\n      height: 450px;\n      margin: 0 12px;\n      transition: all 0.3s ease;\n      @media only screen and (max-width: 1200px) {\n        height: 400px;\n      }\n      @media only screen and (max-width: 991px) {\n        width: calc(100% / 2 - 24px);\n        margin-bottom: 24px;\n        &:first-child {\n          width: 100%;\n        }\n      }\n      @media only screen and (max-width: 767px) {\n        width: calc(100% - 24px);\n      }\n      .icon__wrapper {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n      .content__wrapper {\n        opacity: 0;\n        visibility: hidden;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        padding: 25px;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        background-color: rgba(0, 0, 0, 0.9);\n        background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n        transition: all 0.3s ease;\n        a {\n          transform: translateY(50px);\n          transition: all 0.3s ease;\n        }\n        p {\n          transform: translateY(50px);\n          transition: all 0.35s ease;\n        }\n      }\n\n      &:hover {\n        .content__wrapper {\n          opacity: 1;\n          visibility: visible;\n          a {\n            transform: translateY(0);\n          }\n          p {\n            transform: translateY(0);\n          }\n        }\n      }\n      &:first-child {\n        .content__wrapper {\n          @media (max-width: 990px) {\n            opacity: 1;\n            visibility: visible;\n            a {\n              transform: translateY(0);\n            }\n            p {\n              transform: translateY(0);\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BlogSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (BlogSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/BlogSection/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/BlogSection/index.js ***!
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
/* harmony import */ var reusecore_src_elements_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _blogSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blogSection.style */ "../../node_modules/common/src/containers/Agency/BlogSection/blogSection.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/BlogSection/index.js";












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
    content: "PORTFOLIO"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Meet our work experience from customers"
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
  }), _data_Agency__WEBPACK_IMPORTED_MODULE_9__["default"].blog.map(function (post, index) {
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
    mr: '-12px'
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "../../node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "../../node_modules/react-stickynode/index.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var common_src_theme_saas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/theme/saas */ "../../node_modules/common/src/theme/saas/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var common_src_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/containers/Saas/saas.style */ "../../node_modules/common/src/containers/Saas/saas.style.js");
/* harmony import */ var common_src_containers_Saas_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/containers/Saas/Navbar */ "../../node_modules/common/src/containers/Saas/Navbar/index.js");
/* harmony import */ var common_src_containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/containers/Saas/BannerSection */ "../../node_modules/common/src/containers/Saas/BannerSection/index.js");
/* harmony import */ var common_src_containers_Saas_FeatureSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/containers/Saas/FeatureSection */ "../../node_modules/common/src/containers/Saas/FeatureSection/index.js");
/* harmony import */ var common_src_containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/containers/Saas/VisitorSection */ "../../node_modules/common/src/containers/Saas/VisitorSection/index.js");
/* harmony import */ var common_src_containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/containers/Saas/ServiceSection */ "../../node_modules/common/src/containers/Saas/ServiceSection/index.js");
/* harmony import */ var common_src_containers_Saas_FaqSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/containers/Saas/FaqSection */ "../../node_modules/common/src/containers/Saas/FaqSection/index.js");
/* harmony import */ var common_src_containers_Saas_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/containers/Saas/Footer */ "../../node_modules/common/src/containers/Saas/Footer/index.js");
/* harmony import */ var common_src_containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/containers/Saas/PricingSection */ "../../node_modules/common/src/containers/Saas/PricingSection/index.js");
/* harmony import */ var common_src_containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/containers/Saas/TimelineSection */ "../../node_modules/common/src/containers/Saas/TimelineSection/index.js");
/* harmony import */ var common_src_containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/containers/Saas/TestimonialSection */ "../../node_modules/common/src/containers/Saas/TestimonialSection/index.js");
/* harmony import */ var common_src_containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/containers/Saas/PartnerSection */ "../../node_modules/common/src/containers/Saas/PartnerSection/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_containers_Portfolio_Process2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! common/src/containers/Portfolio/Process2 */ "../../node_modules/common/src/containers/Portfolio/Process2/index.js");
/* harmony import */ var common_src_containers_Portfolio_Skill2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! common/src/containers/Portfolio/Skill2 */ "../../node_modules/common/src/containers/Portfolio/Skill2/index.js");
/* harmony import */ var common_src_containers_Portfolio_Clients2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! common/src/containers/Portfolio/Clients2 */ "../../node_modules/common/src/containers/Portfolio/Clients2/index.js");
/* harmony import */ var common_src_containers_Agency_TeamSection__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! common/src/containers/Agency/TeamSection */ "../../node_modules/common/src/containers/Agency/TeamSection/index.js");
/* harmony import */ var common_src_containers_Agency_VideoSection__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! common/src/containers/Agency/VideoSection */ "../../node_modules/common/src/containers/Agency/VideoSection/index.js");
/* harmony import */ var common_src_containers_Agency_NewsletterSection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! common/src/containers/Agency/NewsletterSection */ "../../node_modules/common/src/containers/Agency/NewsletterSection/index.js");
/* harmony import */ var common_src_containers_Agency_BlogSection__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! common/src/containers/Agency/BlogSection */ "../../node_modules/common/src/containers/Agency/BlogSection/index.js");
var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/packages/landing/pages/index.js";














 //import TrialSection from 'common/src/containers/Saas/TrialSection';












/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_saas__WEBPACK_IMPORTED_MODULE_4__["saasTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Token Prop | Property Tokenization & Investment Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_18__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_FeatureSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Process2__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Skill2__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_VideoSection__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_BlogSection__WEBPACK_IMPORTED_MODULE_25__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_TeamSection__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_FaqSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Clients2__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_NewsletterSection__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.00bd73ab5075f219eb34.hot-update.js.map