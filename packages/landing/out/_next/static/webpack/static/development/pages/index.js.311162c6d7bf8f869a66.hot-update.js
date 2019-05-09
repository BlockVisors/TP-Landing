webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/containers/Agency/VideoSection2/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/VideoSection2/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _videoSection_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videoSection.style */ "../../node_modules/common/src/containers/Agency/VideoSection2/videoSection.style.js");
/* harmony import */ var _assets_image_agency_preview_image_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/image/agency/preview-image.jpg */ "../../node_modules/common/src/assets/image/agency/preview-image.jpg");
/* harmony import */ var _assets_image_agency_preview_image_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_preview_image_jpg__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/VideoSection2/index.js";












var IntroVideo = function IntroVideo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    title: "ReactivePro",
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/9-8KYHo_wtc?controls=0&showinfo=0",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  });
};

var CloseModalButton = function CloseModalButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "modalCloseBtn",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  });
};

var VideoSection = function VideoSection(_ref) {
  var sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      buttonStyle = _ref.buttonStyle,
      sectionSubTitle = _ref.sectionSubTitle;

  // Video modal handler
  var handleVideoModal = function handleVideoModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0
        }
      },
      component: IntroVideo,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_videoSection_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "videoSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Token Prop Overiview"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "A Global Real Estate Liquidity Solution"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "figure",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_image_agency_preview_image_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Video Preview Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "fig__caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonStyle, {
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-youtube",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }),
    onClick: handleVideoModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))))));
}; // VideoSection style props


VideoSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  memberName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // VideoSection default style

VideoSection.defaultProps = {
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
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VideoSection);

/***/ })

})
//# sourceMappingURL=index.js.311162c6d7bf8f869a66.hot-update.js.map