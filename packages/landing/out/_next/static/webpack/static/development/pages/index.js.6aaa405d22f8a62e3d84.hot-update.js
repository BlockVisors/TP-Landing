webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Skill/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Skill/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-progress */ "../../node_modules/rc-progress/es/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "../../node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _skill_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skill.style */ "../../node_modules/common/src/containers/Portfolio/Skill/skill.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/md/ic_thumb_up */ "../../node_modules/react-icons-kit/md/ic_thumb_up.js");
/* harmony import */ var react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Skill/index.js";













var SkillSection = function SkillSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      row = _ref.row,
      col = _ref.col,
      skillTitle = _ref.skillTitle,
      skillDescription = _ref.skillDescription,
      skillSuccessRate = _ref.skillSuccessRate,
      successRateText = _ref.successRateText;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "Ways I can help you",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Have a look, some could be interesting to help you achieve your business goals or start that project you always wanted to do... Yes, that one!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_11__["SKILLS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
      key: "skill-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillDetails"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
      src: item.icon,
      alt: "skill-icon-".concat(index + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillAbout"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.title
    }, skillTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.description
    }, skillDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SuccessRate"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__["ic_thumb_up"],
      size: 12,
      className: "skill_success_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "span",
      content: "".concat(item.successRate, "% ")
    }, skillSuccessRate, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "span",
      content: "Success Rate"
    }, skillSuccessRate, successRateText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["ProgressBar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_3__["Line"], {
      percent: item.successRate,
      strokeWidth: "1.8",
      trailWidth: "1.8",
      strokeColor: "#3444f1",
      trailColor: "#e3e7f2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })))));
  }))));
};

SkillSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  skillTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  skillDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  skillSuccessRate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  successRateText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
SkillSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '140px'],
    pb: ['150px', '160px', '160px', '180px', '210px'],
    bg: '#f9f9f9'
  },
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '105px']
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
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-15px', '-15px', '-15px', '-25px', '-25px'],
    mr: ['-15px', '-15px', '-15px', '-25px', '-25px']
  },
  col: {
    width: [1, 1, 1 / 2],
    pl: ['15px', '15px', '15px', '25px', '25px'],
    pr: ['15px', '15px', '15px', '25px', '25px'],
    mb: ['30px', '30px', '30px', '50px', '50px']
  },
  skillTitle: {
    fontSize: ['16px', '18px', '18px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '12px'
  },
  skillDescription: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0'
  },
  skillSuccessRate: {
    fontSize: ['15px', '15px', '14px', '15px', '16px'],
    fontWeight: '400',
    color: '#302b4e',
    lineHeight: '1.5',
    mb: '0'
  },
  successRateText: {
    ml: '.3em',
    display: ['none', 'none', 'none', 'none', 'inline-block']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SkillSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Skill/skill.style.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Skill/skill.style.js ***!
  \****************************************************************************************************************************/
/*! exports provided: SkillItem, SkillDetails, SkillIcon, SkillAbout, SkillProgress, SuccessRate, ProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillItem", function() { return SkillItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillDetails", function() { return SkillDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillIcon", function() { return SkillIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillAbout", function() { return SkillAbout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillProgress", function() { return SkillProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessRate", function() { return SuccessRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 0 58%;\n  max-width: 58%;\n  @media (max-width: 1199px) {\n    flex: 0 0 70%;\n    max-width: 70%;\n  }\n\n  > svg {\n    vertical-align: middle;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  .skill_success_icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #407fff;\n    overflow: hidden;\n    line-height: 18px;\n    text-align: center;\n    color: #fff;\n    margin-right: 10px;\n    flex-shrink: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 20px 50px 28px 50px;\n  border-top: 1px solid #f7f7f7;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 1199px) {\n    padding: 20px 30px 28px 30px;\n  }\n  @media (max-width: 575px) {\n    padding: 15px 20px 18px 20px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 0 130px;\n  max-width: 130px;\n  @media (max-width: 990px) {\n    flex: 0 0 55px;\n    max-width: 55px;\n    margin-right: 30px;\n  }\n  @media (max-width: 575px) {\n    flex: 0 0 45px;\n    max-width: 45px;\n    margin-right: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 85px 60px 55px 60px;\n  display: flex;\n  align-items: center;\n  @media (max-width: 1199px) {\n    padding: 70px 45px 40px 45px;\n  }\n  @media (max-width: 990px) {\n    padding: 60px 35px 30px 35px;\n  }\n  @media (max-width: 575px) {\n    padding: 35px 25px 20px 25px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0.521px 2.954px 50px 0px rgba(101, 106, 160, 0.1);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SkillItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var SkillDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var SkillIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var SkillAbout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var SkillProgress = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var SuccessRate = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject7());

/***/ }),

/***/ "../../node_modules/rc-progress/es/Circle.js":
/*!************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/rc-progress/es/Circle.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enhancer */ "../../node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "../../node_modules/rc-progress/es/types.js");





/* eslint react/prop-types: 0 */





var Circle = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Circle, _Component);

  function Circle() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Circle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.paths = {}, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  Circle.prototype.getPathStyles = function getPathStyles(offset, percent, strokeColor, strokeWidth) {
    var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var gapPosition = arguments[5];

    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;
    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;
      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;
      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;
      default:
    }
    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;

    var pathStyle = {
      stroke: strokeColor,
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + (gapDegree / 2 + offset / 100 * (len - gapDegree)) + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
    };

    return {
      pathString: pathString,
      pathStyle: pathStyle
    };
  };

  Circle.prototype.getStokeList = function getStokeList() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        percent = _props.percent,
        strokeColor = _props.strokeColor,
        strokeWidth = _props.strokeWidth,
        strokeLinecap = _props.strokeLinecap,
        gapDegree = _props.gapDegree,
        gapPosition = _props.gapPosition;

    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];

      var _getPathStyles = _this2.getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition),
          pathString = _getPathStyles.pathString,
          pathStyle = _getPathStyles.pathStyle;

      stackPtg += ptg;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
        key: index,
        className: prefixCls + '-circle-path',
        d: pathString,
        strokeLinecap: strokeLinecap,
        strokeWidth: ptg === 0 ? 0 : strokeWidth,
        fillOpacity: '0',
        style: pathStyle,
        ref: function ref(path) {
          _this2.paths[index] = path;
        }
      });
    });
  };

  Circle.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        gapDegree = _props2.gapDegree,
        gapPosition = _props2.gapPosition,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'gapDegree', 'gapPosition', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles2 = this.getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
        pathString = _getPathStyles2.pathString,
        pathStyle = _getPathStyles2.pathStyle;

    delete restProps.percent;
    delete restProps.strokeColor;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'svg',
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: prefixCls + '-circle ' + className,
        viewBox: '0 0 100 100',
        style: style
      }, restProps),
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
        className: prefixCls + '-circle-trail',
        d: pathString,
        stroke: trailColor,
        strokeLinecap: strokeLinecap,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0',
        style: pathStyle
      }),
      this.getStokeList()
    );
  };

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Circle.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["propTypes"], {
  gapPosition: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['top', 'bottom', 'left', 'right'])
});

Circle.defaultProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["defaultProps"], {
  gapPosition: 'top'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_7__["default"])(Circle));

/***/ }),

/***/ "../../node_modules/rc-progress/es/Line.js":
/*!**********************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/rc-progress/es/Line.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enhancer */ "../../node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "../../node_modules/rc-progress/es/types.js");









var Line = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Line, _Component);

  function Line() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Line);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.paths = {}, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  Line.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        percent = _props.percent,
        prefixCls = _props.prefixCls,
        strokeColor = _props.strokeColor,
        strokeLinecap = _props.strokeLinecap,
        strokeWidth = _props.strokeWidth,
        style = _props.style,
        trailColor = _props.trailColor,
        trailWidth = _props.trailWidth,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);

    delete restProps.gapPosition;

    var percentList = Array.isArray(percent) ? percent : [percent];
    var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;

    var stackPtg = 0;

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'svg',
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: prefixCls + '-line ' + className,
        viewBox: viewBoxString,
        preserveAspectRatio: 'none',
        style: style
      }, restProps),
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
        className: prefixCls + '-line-trail',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0'
      }),
      percentList.map(function (ptg, index) {
        var pathStyle = {
          strokeDasharray: ptg + 'px, 100px',
          strokeDashoffset: '-' + stackPtg + 'px',
          transition: 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
        };
        var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];

        stackPtg += ptg;

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
          key: index,
          className: prefixCls + '-line-path',
          d: pathString,
          strokeLinecap: strokeLinecap,
          stroke: color,
          strokeWidth: strokeWidth,
          fillOpacity: '0',
          ref: function ref(path) {
            _this2.paths[index] = path;
          },
          style: pathStyle
        });
      })
    );
  };

  return Line;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Line.propTypes = _types__WEBPACK_IMPORTED_MODULE_7__["propTypes"];

Line.defaultProps = _types__WEBPACK_IMPORTED_MODULE_7__["defaultProps"];

/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_6__["default"])(Line));

/***/ }),

/***/ "../../node_modules/rc-progress/es/enhancer.js":
/*!**************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/rc-progress/es/enhancer.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);



var enhancer = function enhancer(WrappedComponent) {
  return function (_WrappedComponent) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Progress, _WrappedComponent);

    function Progress() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Progress);

      return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _WrappedComponent.apply(this, arguments));
    }

    Progress.prototype.componentDidUpdate = function componentDidUpdate() {
      var _this2 = this;

      var now = Date.now();
      var updated = false;

      Object.keys(this.paths).forEach(function (key) {
        var path = _this2.paths[key];

        if (!path) {
          return;
        }

        updated = true;
        var pathStyle = path.style;
        pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

        if (_this2.prevTimeStamp && now - _this2.prevTimeStamp < 100) {
          pathStyle.transitionDuration = '0s, 0s';
        }
      });

      if (updated) {
        this.prevTimeStamp = Date.now();
      }
    };

    Progress.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Progress;
  }(WrappedComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (enhancer);

/***/ }),

/***/ "../../node_modules/rc-progress/es/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/rc-progress/es/index.js ***!
  \***********************************************************************************************/
/*! exports provided: Line, Circle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "../../node_modules/rc-progress/es/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "../../node_modules/rc-progress/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = ({
  Line: _Line__WEBPACK_IMPORTED_MODULE_0__["default"],
  Circle: _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../../node_modules/rc-progress/es/types.js":
/*!***********************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/rc-progress/es/types.js ***!
  \***********************************************************************************************/
/*! exports provided: defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};

var mixedType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]);

var propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([mixedType, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(mixedType)]),
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)]),
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['butt', 'round', 'square']),
  strokeWidth: mixedType,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  trailColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  trailWidth: mixedType
};

/***/ }),

/***/ "../../node_modules/react-icons-kit/md/ic_thumb_up.js":
/*!*********************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/react-icons-kit/md/ic_thumb_up.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ic_thumb_up = exports.ic_thumb_up = { "viewBox": "0 0 24 24", "children": [{ "name": "path", "attribs": { "d": "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" } }] };

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
/* harmony import */ var common_src_containers_Saas_TrialSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/containers/Saas/TrialSection */ "../../node_modules/common/src/containers/Saas/TrialSection/index.js");
/* harmony import */ var common_src_containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/containers/Saas/TimelineSection */ "../../node_modules/common/src/containers/Saas/TimelineSection/index.js");
/* harmony import */ var common_src_containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/containers/Saas/TestimonialSection */ "../../node_modules/common/src/containers/Saas/TestimonialSection/index.js");
/* harmony import */ var common_src_containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! common/src/containers/Saas/PartnerSection */ "../../node_modules/common/src/containers/Saas/PartnerSection/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_containers_Portfolio_Process__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! common/src/containers/Portfolio/Process */ "../../node_modules/common/src/containers/Portfolio/Process/index.js");
/* harmony import */ var common_src_containers_Portfolio_Skill__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! common/src/containers/Portfolio/Skill */ "../../node_modules/common/src/containers/Portfolio/Skill/index.js");
var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/packages/landing/pages/index.js";






















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_saas__WEBPACK_IMPORTED_MODULE_4__["saasTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Token Prop | Property Tokenization & Investment Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_19__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Process__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Skill__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_FeatureSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_FaqSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_TrialSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Saas_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.6aaa405d22f8a62e3d84.hot-update.js.map