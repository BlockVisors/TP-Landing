webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/containers/Saas/Navbar/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/Navbar/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var _components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _data_Ride__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Ride */ "../../node_modules/common/src/data/Ride/index.js");
/* harmony import */ var _components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var _assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/image/saas/TokenProp_Logo.png */ "../../node_modules/common/src/assets/image/saas/TokenProp_Logo.png");
/* harmony import */ var _assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/Navbar/index.js";












 //import LogoImage from '../../../assets/image/saas/logo.png';

var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle,
      row = _ref.row,
      menuWrapper = _ref.menuWrapper;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_9__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "#",
    logoSrc: _assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    title: "Agency",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "main_menu",
    menuItems: _data_Saas__WEBPACK_IMPORTED_MODULE_10__["MENU_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "main_menu menuRight",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_11__["MENU_RIGHT_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      barColor: "#eb4d4b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "mobile_menu",
    menuItems: _data_Saas__WEBPACK_IMPORTED_MODULE_10__["MENU_ITEMS"],
    drawerClose: true,
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "main_menu menuRight",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_11__["MENU_RIGHT_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  menuWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: ['space-between', 'space-between', 'space-between', 'flex-start'],
    width: '100%'
  },
  logoStyle: {
    maxWidth: '130px',
    mr: [0, 0, 0, '166px']
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: "".concat(1)
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.730be85c94bfcd4801e6.hot-update.js.map