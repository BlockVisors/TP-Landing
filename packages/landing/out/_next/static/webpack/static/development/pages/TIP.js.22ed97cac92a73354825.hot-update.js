webpackHotUpdate("static/development/pages/TIP.js",{

/***/ "./pages/TIP.js":
/*!**********************!*\
  !*** ./pages/TIP.js ***!
  \**********************/
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
/* harmony import */ var common_src_containers_Ride_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/containers/Ride/Navbar */ "../../node_modules/common/src/containers/Ride/Navbar/index.js");
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
/* harmony import */ var common_src_containers_Agency_BlogSection2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! common/src/containers/Agency/BlogSection2 */ "../../node_modules/common/src/containers/Agency/BlogSection2/index.js");
/* harmony import */ var common_src_containers_Ride_Footer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! common/src/containers/Ride/Footer */ "../../node_modules/common/src/containers/Ride/Footer/index.js");
/* harmony import */ var common_src_containers_Agency_VideoSection2__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! common/src/containers/Agency/VideoSection2 */ "../../node_modules/common/src/containers/Agency/VideoSection2/index.js");
var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/packages/landing/pages/TIP.js";














 //import TrialSection from 'common/src/containers/Saas/TrialSection';














/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_saas__WEBPACK_IMPORTED_MODULE_4__["saasTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Token Prop | Property Tokenization & Investment Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_18__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Ride_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Process2__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Skill2__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_VideoSection__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_BlogSection2__WEBPACK_IMPORTED_MODULE_25__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Ride_Footer__WEBPACK_IMPORTED_MODULE_26__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=TIP.js.22ed97cac92a73354825.hot-update.js.map