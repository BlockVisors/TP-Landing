module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/flaticon.css":
/*!**********************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/css/flaticon.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/style.js":
/*!******************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/css/style.js ***!
  \******************************************************************************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  // modal default style\n  .reuseModalOverlay {\n    z-index: 99999 !important;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }   \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/blog/blog-img1.png":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/blog/blog-img1.png ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAH0CAMAAACZ5d3HAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACEFBMVEW8vLw3NzcAAAAmJiY7OzsREREfHx+7u7uKiopTU1MpKSkSEhIFBQUGBgYuLi5aWlqXl5dxcXENDQ0ODg6EhIQdHR2YmJiioqIICAinp6e6urpLS0sCAgJmZmYqKiq5ubk8PDxZWVlhYWFWVlYDAwM4ODhvb2+FhYV9fX0eHh52dnYEBAQ/Pz+Li4sBAQEgICCbm5sJCQmoqKi2trYcHByqqqoiIiKwsLCWlpZFRUW1tbV8fHyhoaGBgYGkpKSTk5M1NTUvLy86OjqxsbEVFRUbGxuAgIClpaWNjY0TExNERESSkpKHh4dOTk5+fn4kJCQQEBCUlJQrKytXV1dAQEC4uLgKCgoYGBhpaWkWFhaysrI5OTl3d3c2NjaZmZmjo6O0tLSgoKCGhoZNTU1ubm5jY2NSUlJkZGQ0NDQXFxcHBwcaGhpfX1+tra2dnZ2zs7NeXl6RkZGDg4MUFBSfn5+3t7cjIyNPT09ycnKPj49sbGxgYGBiYmIxMTGCgoKIiIgyMjJJSUlVVVVKSkqvr68LCwuQkJCrq6tBQUF0dHRbW1tRUVFtbW1QUFBwcHAtLS2cnJxCQkJISEhGRkYlJSUwMDAPDw+srKxzc3NDQ0MhISF4eHipqalUVFRra2uJiYkoKCh6enonJyd/f38zMzOamppqampMTEyOjo4ZGRl7e3uMjIwMDAx1dXVlZWX+/v4HhebjAAAAAWJLR0SvzmyjMQAACDdJREFUeNrt22mbFNUVAOC2XEYHBUGjYcTIJgOiQ1wQJLig4Ja4OxA1IokxjihijLtGEhWMRgOiwbglmpjE/Tdm7qleqpexC6o/5Ol+30+3zq06Z7puV/WtZWo1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoIfjsiw7viN2wondTmpfZezkU8bnnXravPkLTj/KggNIfuzFh9HCrMcQLsq6ndG2xpk/aPXMP+uoKlZPXqH4EDr7hz2GcHHWZy9PnNPWteTco6hYOXmV4kNo4kdZjyE8s89ePm9pZ+ey8iWrJq9UfAgtz3oN4fI+e3lFBFaev2py9fI1ee8FR1vymJNXKj58zlrbcwgvTLHJObe6aCr1r/txvnRBnIovvqRszYrJqxUfOpeelPUcwstSbP1cW41dnrrXbGgsb4zdeEXZotWSVyw+dE7Jeg7hpvRFP3HOrX6Stjh1cytwZcwqripXs2LyasWHTpyT1nUP4dUpdM2cm21J3acUI9emyIpyRSsmr1Z82Fy3dfazb7u+ewgXfu8074Y4bs8uhm5MkZvGSlWtlrxi8WFzczoD/fRn3UN4SwrdOtdmMQa3tYXGbk+xO0pVrZa8YvEhc2t+OPQYwju7vulFMaO8qz12d4otL1W2WvKKxYfL+jNmP/jl0z2GcGz7bGT7nGemHWmD69tjP0+x81MrDpPsnnuLvfdF7BfVk/fvHyn3z37utTtrPYbwgRSZP9d2u+K67JftwV/F71E0Y3aRPVjo/HVWmPdXS96vf6SsSp/7oVqvIYwJzm9qtc0Pzzyy++JH5z92erH39Lg3cl57ts0xSptSc8+JqTl1Y7Pv8d0pcNneQSTv1z9KNqf9Oj5R6zWET8Rpb+M1U83bX3f+ttX7ZAr8riPd3ljtqWhPRvvRxi59+pm4kts5kOR9i4+OifHZD707LpC7h/CEFJlp7ePk2eY3/7nu6c+sONKez9sPZsVrt/z2wQuDSd6/+Mh4sbVbu4dwR9bDTGOC8lJa+n1nwnkp+nLe3hRP86aujoV9MVrXDih5/+KjYmO6u/2HfFrYNYT3Ng6RqfE/vvLq/dvrS/fVZ5EL0sLSzozbWnPO2V+suHm+5unZ5p7YvVtfG1DyEsVHw6b0jGb/4nyhawgP5Ht17bLXY3H61voj8ify7ldS+0+dKeM23RuNpYdigzdr9fnpkgODSl6m+Ej4c/Fb2zWEb8U+3baxGZi+It/t+a3kt1P75s6UMWf5S2Np7GBscCif92YvDix5meKj4OR0MjuhsdQ1hPFaw9a2p0HvxG4+HO2YrLzbmfO9FF3VXLwhzpDzN8eToL+ODSx5qeLDb0O6u33k/cZi1xBOXHXR3xbsbNtkV0xCVsakIw7hDzqTfthxLvsoxiV+CI98PLjk5YoPvfjWt+5R9bhH2i0/IcakL36O7u5cIZ4df1QI3N2YbU5N1gaXvGTxIbc6fd7CU+5SQ7h3ZVrr7dSMa/P7Old4JEVXFwJxrCef9P2LjiJ5yeLD7eNF6cdoQytQaghr6VZAdlxq/T21tnT2p6zZRcVI/o5Ldvx0/7+pfPKyxYfZ2Ew6t/2jECk3hDFv/DS1PkutDzu6J2K8DrXF/pl1HO8DSF66+BB7Pn3ai2cKjk+R7dHcN/d2cZtsWzPD7R3d62O49hRDb9RPpP/q/0eVT162+DA7Ofsez8293Sep/73UuiTmKB3PBeKFmP3FyAONGy9nrK/1Uz55yeJD7ViH8N3U/3lqxTPb7N/t3XENcWchUH9LPJnp+1pL+eTlig+3/kN41eQbD7/yZud28eLY4Vaz445kHEfnFAKPxeFyV6T9TytcOXmp4sOt/xDG/c1TO+aR0/E8J796Xpaa/23vjznlZ63lO+rXCXF1eNrjzXjl5GWKj5zOGWn+XysdU/T8MW7+Au4Xqbm17ey4J80Jp5o3fGq74tnBl7tqe46kxjPTA0teovjo6RzC95ekQMe1QJy/xvP2eTEsxeuS2rkpcrC1/GqcRr+YbX0Vw7NiYMlLFB89XdeF6coxW9v2HkNcjmVf1ZfiGmC8cCRcF29ytu5wvRyrPxvteErfepOmcvK+xUdQ1xDG+6XZeGHmvjPmgesar0dsjh+61sucE8fF2e3SxvLrcaTs2BUL6xelhXs2DCp5v/5R1H13Jh72ZZ83n7Tvi528pPWML86T2fL6oXBp/sSvNU2MnTr1dX0pf2bxzqCS9+0fQd1DeCie8mU3vZX289iBC/Pp6mOtFV6bl49D+rGbuPLyfKF5bstfG72luXb+IvBng0nev38E9bhHuq/+j6NTaw4+s6h+wXG4uMIX9RWOfHrb/ry1tTkjfCouEXbsba788Tcp8M3iQSQv0z96et3mnmzs26YV7d/zJ3e3d+9o/n/fdNxznSpeN3wbq2wZq568XP/I6fmkYvFM2076suux7c51xf6lrcMgrr3b3sfP3/3Psu+qJy/ZP2rmeNi08YMj9V205OC3PZ75TXw7Xn+fcOX5hcu0AxF8ZG/buovjhLd2Z9XkpfvJjR1aveqlhxd+fd1cK+yZfGH5d8/deEz/zFA5eZXiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+3/gcS0Jtcey2U1gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMS0xNlQwMDo0Njo1NC0wNjowMCWdqoMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDEtMTZUMDA6NDY6NTQtMDY6MDBUwBI/AAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/blog/blog-img2.png":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/blog/blog-img2.png ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/blog/blog-img3.png":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/blog/blog-img3.png ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/client/denny.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/client/denny.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/client/menny.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/client/menny.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/preview-image.jpg":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/preview-image.jpg ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/preview-image-3cc48e2472787156a0488dbd7b0b0a9b.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/team/member-1.jpg":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/team/member-1.jpg ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/team/member-2.jpg":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/team/member-2.jpg ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/team/member-3.jpg":
/*!************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/agency/team/member-3.jpg ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAH0AVkBAREA/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAD8QAQACAQMEAQIDBAcECwEAAAABAgMEBQYHCBESIRMxCRVBFCJRYRYjMkJigZEXUnFyGCQzOHN0gqGis7TB/9oACAEBAAA/ALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp13K9x3VXeOruj7Zu3SceDkOb1pue6+KzbDe2P6k46WtE1x1pi/fvk8TaPPivia/OB37t773unmyZ+c8a7k9x5Juu34p1WbaMur1GamWKx5tXFTP748k/fxW1K+f0+fEJr7Qe4+/cTwDVa3edHg0nJNgzU0u648ETGLLF6zOLPSJmZrF4reJr5nxalv08J4VE78e57W9M9jp0r6ebrm0/Ld4w/X1us0eSa5tr0X381tX5plv4nxMfNaRa3xM0lIPY7yTkXLe3Hj++cq3/ct53LNqtfXJrNw1WTUZ7xXU5IrFsl5m0+IiIjzPxEO13o893Tp3268m3rYN21W2btqLaXQ6HVaXPbDmx5MmekWml6zFq2jHGSYmJ8/CrvTnt470upPBtl55t3czu+h0m+6SmtwYNXyndYzVx2/s+3rEx8x4n4mfiYSn0i7Z+7Lh3UnYeTc67iNTvuw7fqZy67brci3LPGpx+lo9fp5a+lvmYnxb4+FvwVY/EO6m8j6d9IdnwcP5JuWybtvG+Y8Uanb9Xk02eNPjxZL5Ii+OYtEe30omPPzEot2ntR73902vR7n/ANKHcdN+2afHn+jl5Vu3vj96xb1t4rMeY8+J8T94Sv279v8A3L9N+oleSdVOueo5XscaLPgnb775uGrictvX0v8ATzxFPjxPz948/Deu6zuF03bx04/P9LpsOs5BuuWdFs+ly+fpzl9fN8uSI8TNKR4mYj7zatfMefMV8410J74uqXHsHUTfu4nceMbjueKNZo9orrNRp6VpaPNIy49P648XmJj92KXmIn5jz5iNw7Wu47qXPUvcu23uGpWOXbdF/wAv19q1rfVelfecV/XxW8zi/rKZIiPasT58z4mZ767dX9m6GdM916hbvh/abaStcOi0kW9Z1Wqv8Y8Xn9I8+ZtPz4rW0+J8eFSOB8C70+5nZI6qbl1z1fBds3ObZdp0OhzZ9LXJi8z62jFgmvjH8eK2va17RHmfMTEzsHRjr31q6OdbNL259y+4U3Wu72pj2XfbW9rWvkmYwz9XxE5cWS0TTzePet58TPiJiLrgAAAAAADVNB0p6cbXzXUdRts4Ztek5Nq6ZKZ9zw4Ipmyxfx7zaY+LTPrHmZ+f5oM6z9/XR3p5pt72Liur1nIuV7fl1GgrpMWjy4sGDV47WpP1cuStYtSt4n5x+/t4+PifLG/h7dDuS9LeA7zzHl2KNLr+aX0ubBo/eLWxaTDXJOO1/HxFrzmvPr94iK+fEzMRNHcB1s2DoL031/N949M+r8fs+16GbeLazV2ifTH/ABiseJtaf0rWf18RNPf9iu/7f2u9UO4fqz76rnnO9vpqqTqK+L6HR5NRitWsV/uWvEVn1/u0rSkeP3oT9+H7/wB13jf/AJvcf/15Eafiico/Y+nfDuH1yeLbrvGbcLVifvXTYfT5/l51Mf6MVsvez1A23iW07X0a7bORb3xPj234Nux7tn0+otXLjwY64/bxhxWpj+K/re38/CZe2/vP4N1+19uKaras3GeV0x2yV23UZ4y49VWsebzgy+K+1qxHmaWrFojzMe0RaY/HebvHcBwjhGPqR0S5nl0Om2Ws/nm2xtuk1Ptp5n41NJy4r2j0+14ifHrPt4j1tM7N0L7keJdVOin+1PeNw0u132XT3ryOlreK6LPip7ZLePv6Wj9+n3+LevzaJhDfb31q6/dy/WneOT7JyLLx3pNseq8fsUbbpL31XiP6vT/Wvitf3vH9Zkmtv3InxWY9qy0P8STlm0X6q9NOJb9bLbatrwW3XcaYaxa84M+opS3iszETb001/ETMff8Am2bd+/3q5OC3KeO9r++W4jSPqV3HV11XrkxR/fnLTD9Knx/O0R/GU79ufdPwHuL27UU2TDm2jf8Ab6Rk12z6q8WyUpMxH1cV48Rlx+ZiPbxExPjzWPNfNbO+DxzTuy6QdM9b/W7dk/L/AKmO3zX/AK3uM48vx/OmCnlfpQbvKtPCO8bpLz7bv6nNqPy+NRNfj6kYtbat/P8AzYskUn+UMj+KTvmqpsPT3ieC8zi3DXa7XXpE/E3w0w48c/6ajJ/7rrcb2PScZ47tXG9BStNLtOiwaHDWseIjHixxSsR/lWFJ/wAT7b7bfi6b842606fcNBrNZp656fFonxhy458/4bUtMf8ANK7mw7nG9bHt28RWKxr9Jh1MRH2j3pFv/wCu8AAAAAAA+e9Pf6ftHtMefXz8+P4or5d2s9AOabbrtv3bpbsOLLuFsmTLr9HpKafWxlvMzOSM9Ii829p8/vTMTP3iY+FWeyzkHKekXcfy/tl3Hec247Fgvrf2OuSZ8Ys+C0WrlpH2p9TFMzasf3vX+HzoHUDuE4B1N7pbch63TuVOC8E1ObTbPsum00aj9pzYsnr7Zq+0V8XvX3v9/NaUx/MeZSf3Ed8nQ/qd0W5VwPjP9IPzPeNJTDpv2jb4x4/aMtLfvW958fFZ/Rzdi3c30z2LgfEehOu/Nv6T6vcNVix+mkidP7Zc+TJTzk9v92Y8/C03U7oN0n6y6jbtX1J4lj3nNtPtGjtfVZ8X0otMTaPGO9YtEzWvmLRPnw3nR6PSbdpMOg2/S4dNptNjriw4cNIpjx0rHita1j4iIiPERDzw759h0PSTuQ4F1W4VgpoNz3XJTX6qmnj1jLqtPnp5yTEfrkpetbf73rMz5mZ8+iOo0+DV4Mml1WHHmw5qTjyY8lYtW9ZjxNZifiYmPiYeO/X/AG7Yel3V/m3SzpxzbVU4ZuOv09dz0+n9r48NqW9509o8/wBb9C9rRHz948TPmJl6qdE+HcE4L0u49sHTbLi1GwV0WPPptZjmJnW/UiLTqLTH3teZ9p/h58RERERHT5l299HOoPNNB1C5lwjTbrv22/SjT6nPnzTSK47TalbYov8ATvWJmZ8WrMfPykPxER6xEePHjw87OX7FoeiX4inGacEwV0Gi5HrNFkzaPTx64qV1vtgz0isfEVm3tkiPtEzHjxEQzfdnX8p77+j286j93TZp2OJvP2ia7plrb/SLVn/NflQbv1rO79ynR/jum/e1OWdLEVj7/wBdr4pX/WaS/f4o+ny4NT0w3qKTbFhybpjv/K3nS2rH+cRb/RfPDmxajDj1GG8Xx5axelo+01mPMSpD+KVrMVOG8D2+bR9TNueszVj9ZrTFSJ/+yq5PDdDl2viGx7bqKzXLpNt02C8T94tXFWsx/rDMAAAAAAAPPTqTl5T2c93mr6z6vadduXB+aZc/7Rmwx7T9PUWjJnwRM/u1yY81YyUpMxFq1iImP3vWeOTfiC9t2zcZyb1snJ9Xvu4Tim2DatPt2oxZr5PHxW98tK0pHn7z7T8eZiLfZGHYx005vzLqVyfup6g7ffQxyCdT+VYr0mn17ajJF8makT8/SpWIx0n7W9p/3fM2o1PQbobrdTl1ms6McFz5897ZcuXLx3R2vkvafM2tM4/MzMzMzMof7sujHR7jnbtzbe+PdJ+G7XuOk0OO+n1ei2LS4M+K318ceaXpSLVnxMx8T+rF9g3Tnp7regnF+a6zgnHc/IsWt11se75drwW1tLV1OStZjPNfeJiI8R8/EfDWPxA+CdRNr3jinX/gOXXZsXFvpU3HBhte1NNOHPObBqbY4n5r7WtW9v0iKefj7SBxH8QTt03ziuHeuRcm1HH90jDE6ras+g1GbJTL4+a4746WpkrM+fE+Ynx48xX7IE2i2/8Afb3P7XzfSbDq9B044TfDH1dTTx9THiyTljHbx5icua/jzWsz644jzMzHm1h+9DuRx9C+AflHHdXX+mXJMd8G2VrPm2kxfbJqpj/D58U8/e8+fmK2honQDsm2H/YDvO19UdDb+lXP9NXUarUZa+2o2qI/f09azPzGStvGTJHx7Wn0t5ivzqvZp1a5F0X6ibn2k9X8v7Pk0+tvj2HPktPpTPafb6NbT98eaJjJjn4/etMfe8RHF3e7b1D6FdxXHu5zYMGu3Pjdsun/AG3DXLf6ODNXH9DLhtHzGOMuH+zfx495t+vjzM9PxAO2W3Go3+3MNdXU/S952mdrz/tkX8f9n/Z+l5/n9T1/xIR7ceN8v7nu5nW90nKNky7ZxfZ8s/lGLL81y5MeP6WDFSf7/wBOPOS94+PqeIj7zESH+IR0d5JzDiOxdVOD6XNn3ng2fJmz49PX2yzpLTW85axHzacV8dbeI/u2vP6Mp09/EK6D77wnT7vznfs3Ht/w4I/bttnQ583vmiPmcN8dLVtW0/bzMTHn97x90SdGse+93vdtPX3U7HqdDwnhk46bdOor82vhi06bF5j4nJ9S9s94r5iv9nz81mZ973eiu69Z+i+fTcZ0dtVv/HtVXdtBgpHm+pitbVy4a/xm1LTaI+82pWP1R3289+HSnF0423jHWDe9RxzknHdLTb9RbPos+amsjDWKRkrOKlpreYrHtW0RPt58eY+0Z77vuq78+5rjmk4ts+sp074RauTVavU4prGTD9SL5bWj7UtnnHTHSnzb1r7TEeLRX0RAAAAAAAHS3jZdm5DtufZ9/wBp0e56DU19c2l1mCubDlj+FqXiazH/ABhoG2ds/b9s+5V3bb+j3Fceqpb3pa23Y71pb9JrW0TWsx+niPhJda1pWK1rEViPEREfEQ+ulvOybNyPa9RsnIdo0W6bdq6xTUaTW6emfBlr5ifF6Xia2jzET8x+ji4/xvjvEtrxbHxXYNt2bbcM2tj0e36XHp8FJtMzaa46RFY8zMzPiPmZZG1a3rNL1i1bR4mJjzEwjTcu2bt93bcrbtr+jvFb6q9ve9q7djpW9p+82rWIrMz+szHy3/Ztk2bju24dn4/tGi2zQaePXDpdHgphw44/hWlIisf5Qw+9dMum/Jd7w8l5F0+41uu76f6cYdw1u04M+px+k+aeuW9JtHrPzHififs2VrW+9Mem3KN5xci5N0941u+66eKVxa/XbTp9RqMcUnzSK5L0m0eszMx4n4mfhn9Zo9HuGly6HcNLh1Omz0nHlw5qRemSs/etqz8TE/wlG0dsHbxG4/mkdGeJfX9vfx+WY/pef/D8en/xSTpNHpNv0uLQ6DS4dNpsFIx4sOGkUpjpEeIrWsfEREfpDmRvvfbf0F5Fut983npHxfUa7Lf6mXN+X46zlv8AebXisRF5n9ZtE+W+bPs2z8e23Bs2wbVo9t0Glr6YNLpMFcOHFX+FaViIrH/CHcaDy7oF0W53udt65d0w47uW4ZJ85NXl0NIzZZ/x3rEWv/6pltHGOJcW4VtVNj4hx3bdl2/HM2rptBpaYMftP3t60iImZ8fM/eWWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/hosting/footer-bg.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/hosting/footer-bg.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-61e61976e8a4ea1e4ff698142517ef3a.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-1.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/award-1.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAMAAADx2D+RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABMlBMVEW8vLy7u7tubm4fHx8EBAQQEBBLS0utra2cnJwAAABWVlY/Pz+GhoZ+fn4lJSUaGhqwsLCurq5paWlQUFA8PDysrKwCAgI9PT2ysrIODg5bW1u1tbUgICAeHh60tLSPj495eXkzMzMiIiJUVFSWlpaIiIgBAQFCQkK6urouLi4MDAykpKSenp5fX18ZGRkICAgDAwNPT09TU1OCgoJeXl6AgIAqKioHBwdxcXGqqqqhoaFHR0e3t7cjIyMSEhKFhYUxMTFJSUlRUVGdnZ0mJia4uLiSkpJAQEBiYmIyMjJcXFyBgYGYmJgTExM2NjYkJCR2dnZ7e3uvr6+ioqIKCgo5OTkbGxsdHR1tbW1YWFiOjo6MjIy5ubkpKSmrq6uQkJBKSkpra2sYGBgVFRV9fX3+/v4PzJOxAAAAAWJLR0Rltd2InwAAASlJREFUaN7t0kdXwkAQB/BBUBjsIFGIXQxglGCNWLBhxYJdsZfv/xnMJjl4SN7b9eDp/zvszsz/ZQ/zQgQAAAAAAAAA8FukLRpr74gTJdgnG8pKcmdXd09vH/WnhDQPyIaSMtqgcw5lc16rD4+MSoayxnhcXBOTXjul5YmmjQJRsTRjBoXKZnlO7LtseV1lXlwLvEhLvBwcKluxV6tr6zZHRFOw4uLa2KxtaemQUFl1m9nY2dVEbbrPOvZso74fFqozDzJ0WBPVESf82TGfhIeKGqdi1Wfnor6I+sMm12P5sFBVWXx+yU3nvDL8PVzf3Op393pwqOyBH1spq1R0yif3KaLnl+wrvRnvgeEffHxWvpK6t5uWO8nxN4lfthEUAgAAAAAAAAD8rx+eDC1DgJGvUQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMi0wMlQwMToxNTo0Mi0wNjowMD3QUI4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDItMDJUMDE6MTU6NDItMDY6MDBMjegyAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-2.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/award-2.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABOCAMAAADhC0M2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABWVBMVEW8vLy7u7s0NDRsbGy2trZLS0sKCgoMDAxQUFC4uLiBgYEAAABpaWmsrKw8PDwICAgJCQk/Pz+tra25ublKSkpOTk4dHR2Tk5ORkZEZGRlWVlaHh4dFRUUNDQ2kpKQ1NTUmJiaWlpaXl5clJSUyMjKfn58oKCgWFhaysrIFBQWCgoIHBwe1tbV5eXl3d3d6enoBAQFxcXFMTEyvr68aGhqOjo6xsbGNjY0bGxtHR0c+Pj4tLS0zMzM3Nze0tLQ6OjoqKio5OTkjIyO6urpRUVEYGBicnJyMjIwCAgKqqqp0dHRCQkIDAwMwMDArKyuUlJQsLCwvLy97e3tPT09tbW2JiYmnp6erq6uEhISQkJAiIiKIiIhzc3NqamqFhYWDg4Ozs7MSEhJcXFxYWFggICCLi4uwsLAEBAQcHBx8fHyZmZk2NjZGRkYeHh63t7cLCwtTU1OoqKj+/v4icI7rAAAAAWJLR0RyNg4NWAAAAWtJREFUWMPt0ts3AlEUBvA9aMwYNeVSwhSFpqY00iRyLVKJ3O+iJJcI//+LcyZTXjWv+/dwvr1We61vnTMBIIQQQgghhBD6xfT0krPPwvZzfCdbBgTdIFhtot0x1HXH8IhAS0adrjH3eCdbrBPEpOQB79S0zz/TbcfsXEAiJXIwBBBSwkb+2fCIEQBxHiCqMl2WLMQW46REExIACWHJyIjqgnBymW6spMixuiavb2ya+Ci0JKrQSYkYCVvpzPaOTOassEvfzanm3HmTJQWJTlLBSMhLe0WNzhY/OZj9g1Lp8ChjruRY1G8QNZLUCid05NlTcp6p5wAXxUtzJVcCeRpZ0IwE4HLX9J98o9JHutUvGLgzV7KulAHugw9GgpYrV6rkx8caXXmiN6k/h8yVAPdSciW5dobjMXgtvgE03ukKk075so0P3mRJM/bJWprt/KrUAbxpHmpVfSfvYO227+47EEIIIYQQQgj93w8CtTVOHd5tkgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMi0wMlQwMToxNTo0Mi0wNjowMD3QUI4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDItMDJUMDE6MTU6NDItMDY6MDBMjegyAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-3.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/award-3.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABUCAMAAAD0+5rsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEW8vLyBgYEAAABpaWmrq6s9PT0HBwcPDw9XV1e5ubmsrKw8PDwICAgJCQk/Pz+tra1wcHACAgKHh4dFRUUNDQ2kpKS7u7smJiYiIiKSkpKWlpZLS0s1NTWXl5clJSUyMjKjo6N5eXmPj4+dnZ2cnJwBAQGmpqZ3d3d6enouLi4xMTE+Pj4tLS12dnYKCgp9fX2Tk5O1tbUbGxtHR0czMzM3NzeysrK0tLQ6OjoqKipoaGgrKyuCgoKMjIyEhISvr6+np6dsbGw5OTkjIyO6urpRUVEYGBgdHR0ZGRmqqqqfn5+hoaEQEBAEBARCQkIDAwOOjo4wMDCUlJQsLCwvLy8oKChqamq4uLhtbW2RkZEVFRVkZGRycnJ0dHRPT0+JiYlhYWGIiIizs7OKiopQUFBzc3MWFhZYWFggICCFhYUSEhJcXFyLi4uwsLA2NjZGRkYUFBRfX18aGhpMTEx8fHyZmZkeHh6enp5TU1OoqKj+/v6R1zhHAAAAAWJLR0R6ONWFagAAAW1JREFUWMPt0tdTwkAQBvCPgIVuFILGihAromLBgoCCYkQEayzYG4LY639vDkfeT2d82t/D7s7ezDeZ3AGEEEIIIYSQPzEIFUaYamrr6s3VvcVqszuclbFB5MizNOqaXG7J09wie1qr+zaP3N7RyaYuO08e47Z50S34AL/S87Oz9QJ9igRI/QO8eYMBYCjIJnHYq4xgNDSG8YnJ8NS0vpqZjXDm+YU5ICrGgLgwj4VEcnFpEpaUIi6rwIorHeXMa+3QS3jVEYtNZYxQXWvZHKT12Y2Nza1kcnsHnHlacJe1vX2h9iCUBw6FI+BYiQOmbPRkUzNHRLPEkXeqqJWeTJ9pmXPgQmzWcOliq6udxPdzynPkXRdYVdf1qzXYwsiJN8USbtn3lTMRnyzLRlF2cuTd3bMqpazp44dHjD494yX7KiUC7f67N40dcf6/QqnS3gOZ4omEj2JZf8wJTXUE7dZP/CKPEEIIIYQQ8g++AL6GM2ZKColIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTAyVDAxOjE1OjQyLTA2OjAwPdBQjgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0wMlQwMToxNTo0Mi0wNjowMEyN6DIAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-4.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/award-4.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABHVBMVEW8vLysrKw8PDwICAgJCQk/Pz+tra22trZLS0sKCgoMDAxQUFC4uLg1NTUmJiaWlpaXl5clJSUyMjJOTk4dHR2Tk5ORkZEZGRlWVlZ3d3d6enoBAQG7u7uysrIFBQWCgoIHBwe1tbUzMzM3Nze0tLQ6OjoqKiqOjo4AAACxsbGNjY15eXkbGxtHR0cCAgKqqqo5OTkjIyO6urpRUVEYGBgwMDArKyuUlJQsLCwvLy90dHQNDQ1CQkIDAwOJiYmnp6erq6uEhIR7e3tPT09zc3MWFhZqamqQkJAiIiKLi4uwsLAEBASFhYWDg4Ozs7MSEhJcXFwtLS2cnJw2NjYeHh4cHBwaGhpMTEx8fHyZmZmoqKi3t7cLCwtTU1P+/v6gLResAAAAAWJLR0ReBNZhuwAAAQxJREFUWMPt0ltTgmAQh/F/oiVBZSVZIAJlgWkQdqAgstJOZtnZyvr+X6PwEpzh9bKZ/d3tc7WzswAhhBBCCCH/31SGy+amgZk8PyuIaZnB3PxCYXEJWC5KK6XVtMyAWwNkpaxWNEDTjZTMYH1DrW5uwbRqQM3arisSjMZOPE9yw6JilxzIejTodey6zb19NZGZlQ8OPe/ouOkH0RT4cIKT0ExmZqdKCzgLzy+40Soy4FvtcZlVZ7TC5dW1pQKqZQKCfSOOyaxuo1W6d1pV7wH3lQeYdq//mMzsN3SfCs8vryKEN09qCDDeB/gIP+N5Ak6Oz2a+gOHgm88P8dPv/n21K8YyIYQQQgghJOkXoewuMdcg81gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDItMDJUMDE6MTU6NDMtMDY6MDCbp1s6AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAyLTAyVDAxOjE1OjQzLTA2OjAw6vrjhgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-1.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/awardee-1.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAATCAYAAAAAn1R6AAADFElEQVRIibWWS0hVURSGv5tHe2gpPSYdizYETSoNIhoE2SwaBEJQOTKMKKIoomkviCZB5aAHYk0MalQkhVBB4KBBEUYISnV3D88lMqzutYy0x+Dsretsz+MS9MPh7LXXv/b67937rLVz+fzQAaCddOwC6oBzGTwLDVwCzgPjZu5PCr9DKX/PtEV08ARYmxBz0gPuAu8zxDwDKoE3GTwXS4HXZtycwiu5E1oHFcDplJgBD/CBpgwRBWB2GTwXTcAAcDkrVuvgu1L+YzG1HViXEvLDAxYBjRkieoCaMnhxWAFcKSO2AEjxmwl3Lgl9uXx+yBozgHnC+YuY7TSYC1QIu2T4ADmg1uEXgd9mXAXMSVi3pJT/S+sgk2MFWywFPounNyEY45PcVcJX6/g+Oz+mJcZvnxbDaU/hTObyxKIfgE3CHk0Rv5vwGFm8cuLkOhMmqUWP45comHcncCOBM5lLiq8BWoX9DniasMBWouexNYEHcMqxl6fxtQ5ukV6Z8pg/Vor3gGXCnkhZYLHDTcJ9k0yixokdAeYLezfhN2XxDagWdpUdyA/WA+oF6SdT2+hisVwkBcMmuUQNsFDYRbPWrJj4EjDTyVVQyv9pBVvUE3ZGi+ckl7d7QEOWcqAf2AB8EXPbgGvCvkC4y0di4vcC+5xca4A+iIovGIfFWIqo7YRN619wx8ljd6crhjsIPHJyDdqBFF8HnBC2Bg4nCNgLKGEfZmrXqoHrwjcO7GCqDzQCB4W/Wym/U+tgJ2FDs3iolN+ndZCYS9b5/4VKpjetOPRn2NOQy+eHFgBLMniBeftliIjDc2Al0a5sMayUHwBoHTQQdugxpfxBM7eC+CP60SOsqR0Zye3xKfdKLPGWsDT2Er8DF4BDYrwRuAq0mbmbxBeHs55xPsgQMGLet8uWPAXbqVcTf0yLYtxM+ANHxNwW4svyVw9YD+zPENBp3m2prChGgePAJ2OfIdpsLLrF+kXgmFK+LBRHiX6wFrc84AXZx8HeJ4qprBC/ga/AS6Ll9iLR6mYx2SXNjfKM4+8ieo+yeP8XlRzQzR0V/r0AAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-2.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/awardee-2.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAU0lEQVRYhWOcPHGpLwP54BiUtiLXACYKLKcKGHXAqANGHTDqgFEHjDpgwB3AwoCoUskBn6A02WYMihAguzHBMNogGXXAqANGHTDqgFEHjDqACgAAmfsHErcMwooAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-3.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/awardee-3.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAYAAAD5VeO1AAADg0lEQVRIiZWW63IMURDHf3sTm9hNEESkKJUi7h+IW7mUKl88wzzD1LyLMa9g3oIvKEIQFFISFBLJbghCLjY3H7p752TsJnTV1jmnu89/z/mfvkzmxvWbrCNbgb1AJ9CquhowDYwBk37grTbbnG2iLwD9wEUFb3Vsm4AutV+Owrj0P+CbgUvAbl3PA2+Bp8ATYBj4rrYycCkK4+3/Ap4DzgFtwCrwErgFvEJoGAdGgDvAQ4SiHHA6CuO2jcD7gJICPwLe6byRVIC7wCJC44n1wFuA/Tof1c2uXyfQDRQd/SzwTOedURhvawberetlhGOTEnAFOA+cAq4CB8zoB94E8EOXe5qB26NMIVc1+xnkDWp60gxwCIkYk4kUxl/gW3T86eh2IGE4B9zW3ye17XX8ZnTc3Aw8r2PN0bXoOO3cxt7C5X5Jx1wzcNvs/vtc6gY5YJ/qfjl+lmSLjq5+WnMuIylv8hX4prqrwIoeaBUJUxPjf8bRrTl5VcdtSISgIIPAF8d/QXXfAKIwbnfA3fBdc/IJ4AhSO44CAwq+ANxH6MojEWOJVQBO6nyR5LH/Al8C3gDHEI6PAy8coAXWSgEJU4uy137gLeltutPgAO8VeBfycFuQgjWf8isqcFnX437gfVDgEpJsDaviYySRQJLiSMpeQqqmAVeAIce+ySaNwJcRvoeB30jEmBSAsyTx/wkY9ANvpQFOnZYsEmYmq0hpHUn5HyRJnlGE50a4ddALwDWS8FvP11K+CrzewJ8sEtc5oCNly6XW7SQ3fWPKKIwL64GbuE7tyG36G/jWSNpcL3AtCuO+Bn5LeSTMikhZNSmq024kKmaQhx0gSaIcSXMpO3sNZz5LUuh3OA5TJElzmoSyqoLb14E9rpuZO3X8ngcmkdrQpoYqEo5DSKK0InH9Ban1BSTJjMaPfuBNAkRhXHTAK1mkplgNP0zC2RTSpM3WqTT0KLCF63Pn1MeQTjUPVPJITRlBilUZqSnWdKtI9+lR8KL6TysVsxbnURj3klTHYT/wVjL6OZdBGrD1wDE90TIbSwZJroO6nvADbxCHAqvb1j97kI6/h+affBkkCC46wNNIoQPWVsUacA+paNbWTiI0TCGdqobw3ao+Lc7+z8CQH3j126ZL7iLwACm3fbo5T/Ld2EjmEI7H04Y0uMkH5MG69Nehp80gFM4ibW4SqDT7jP4DOFTpNzMkc7IAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-4.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/awardee-4.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACfUlEQVRIibXXS4iPURjH8Y9pUozLjFuxQCYlyT1KKfcUZTVYuZSkXBY2SE3Khg0LRMktJSIrG7dSo1yiZudWVoMZmlxy1xiL83/zn7/zXv6Y3+at8zzv8z3ve855nuf0aWvrUFCDsByLMRVj0ICv6MRT3MUV3EF3VrA+BcDD0Iz1GFBwko+xD2fxM+ZQkzUpbMFzbK0CChNwWvjy8dWA++ICDmFgFcBKzcJDLKw01Eac++Eylv4DsFyf8aoI+FhB6Bu0l2KMFSZcqXYswKNKQ+Wv3oA1GbB27EIjRmAyJgrLMRfn/d5MLzEvBqXnrh6KJ6VnTCewHR8yJqYEO4DVwhGLqvxX78iANmNvDjDRLUzPc0q+uA5tqI/4XMJKOQmhWiVrvCQF+h6b/ze0HLwsxX4Sr/83lN9rPDXFfjHn/Uk4+Bfc1gQ8LmL8gQc5Aeqx6C/AE2qEnNwQMXaW4L2hhqwi0ZvqXyPs2LcR4zChWPSGPiRr/BwzKoy1QnW5nRHgo1B90lSLKZHx1wm4NQImJI4scCtmZthn4V5k/GmyxldSXlyL4RmB89SUMn4vAV/Hu4jDIBwRdn61GoONKbarCfgTjqc4NSleIBLV4Zww8Uo9w/3y47RfOLsx7cYpDC4AHYWbmJNiP0jPRqATOzMCrhO6x53+zHQ1QlOwX6jps1NiPBbqerS9PSO7C0n0Bh3CWR8pvynswny0EO+5NgltTV7fNVzxHd8ttMgtyUAsZX7BCvmVqai6sA1HywfTcvV3rBJmmddjZemF8OcOVxqyikR36YVGobH/WAWwA3uEG8WNmEORu1Oi5NK2CNMwGkOES9tbId8/LIGu4VtWsF9BdIT6YjeVUgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-1.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-1.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAYklEQVRIiWP8GCj9n4E8ENhfzcvAwMCwnhzNTGRaSjEYtXjU4lGLRy0etXjwW8zCwMAQSKbek1CaLP0s/DFXyLSXgeH3Bymy9bIwkFmfMiB8Olofj1o8avGoxaMWj1pMXQAAb1ALE5zpqXkAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-10.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-10.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-2.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-2.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAADV0lEQVRIia3XW4iVVRQH8N85TqVlYqXdHLsShNVLUBg9GJU+1DR2tYuQTnmgh+hiZWOFGlYqQRH20uXBLKSmTErJ0qzMKXsJKghFiqYoo4vQxS4T2vSw9tf55sx35pxTs+Cw97f2Xuu/19prr7VOqW/WbC3QdCzA2SjhQzyEzc0qKLcAtgSbcCHG4VCcl3gLRhqwE4vRj1swHodgDn7Bclw0UoAHYWWaV9L8Z/yO1bgira3EgSMBWMFx2I5nC9bfxFqchK7/Czga3Wm+cJh9i7Af92pgZSPACibhHWwdZt8OvIDJuPG/AuatW9zgYLAUf+Mece8tA1ZwLN7Cu00A7sTzaMe8VgHHaM26jB4QVi4UHmoaMLNuM3pbANyBHnHvlWYBx+DuNF9Ss9aBV/F1+q3H5TV7Miu7FVhZBNglrNuE9xOvJB72elyCsSLTdIg3+GTaA5/ipaRjyLusBWzDXWn+YI4/DzfjG5FLD8PhOB99wn035PYvw0DS1TYc4LU4Ae8ZHJnz03gltiRlA3gb16W1W3P7P8JGnIir6wGWVO9uWY4/Dqcm6z4wlLbjO5yBg3P8TEe3qrsHAc7EafgErxUc6rcCsIz+KtDXi204Xdz7kA1Zrlwu3JXRT9gj3DO2AGy8CJAfsLdmLW/lIMALRBX/DC8WKN2CA/InzdFlGKU4G70u7vMcEWD/AmaR+TD2FQj2pPHOGn4Jt6f56gK5AeExUldQxhTMwLeK6x28gl04E7Ny/LkiWHZiQx3ZtfgqYUwp4/p00qfwRx2hfbgjzR/DBByNFYk3X2SXerKPJ4y5ZdEIUXx3edqAdQloFZ7BRFEHNzaQXZfGaW04Jn3saiBEZJSzcHH67sNNTch9mcaJZdX3NaEJwT3C9Rk9LZ5NI5qUxt1l1QTd2YRgp+hb+kUPs8jgIKpHl6axtyyqwH5RitrrCGTh/7IIgpm4Jq2tESFfr7aegvvwJ54o42M8iqNEOupUzfCjRHXYikdE09uBN0QJukr0pytEwp8hEgTR18wWCeEI3I8vSum/RSmBZhn/V3yPI0VLT/SfXaLw5ulkPIep6bsfu0UwjhaPf6nUqmRuGMBtmCbCfC+OF0GyRkTl9AIw+BznisrfIypHO35MuqbK9UX/AICMuF0dXQYoAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-3.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-3.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAACkUlEQVRYhd3Y24uNURgG8N+MCTOOUSJS45RCJMXk0NzIldxQkiSJyKH4B/wBrp1zQ264oEm54AKFEjmETLhACjmVFDN8LtY3Zu9tz95r7Zlpx1Or3fet9T7vs9b61vu+aw8xuDiALrwaZD+DgqXoxnOMqrOWZDThIbK8HayvnHTs1is+ww/MrquiBDTjjeIJZDhXT1Ep2O5v8Rl+Yk4ddUXjrvITyHCojrqiMEff4jN8xvCBdNiEE3iPTtzA037wra7SPwYr0dEPH7OwRAgKk+CO4lV6iyNoR0Mi+RWVdyDDsUTOBqzI7UqDw304WcHZI2wWdqoaGvElYgKPIoU3YSPuVeA6DVsina6q4rA1gqcnGlXLzO14EMG1A6ZFOs5wCqMrOI3lmd8HRzMOJ/D8CcsPE4w6lc+q6xM41pSxb61Bh8bc+GwfK1IOM4VotaTkfUsCx4iS54U559wEjqLMPlUoe2NnnwkHdnEBx7YE2x0FdvOE/JDi+ydm0BtdXgoV46KEFYC92IpveIbLkXbP8t8W7MPtRL/3Czj+bZQmqjYhaaTiNS4KhVwMjgtheWoNvm7gel+dE/BR2vfY800ux/eIsV1CAOiuwc9nTC4UXK5UWIejcYtRhDsYggVVxj3GJ+HKmYo98uz736BSsTZdiM/0bl+90ClEyiQ045L073Sg2zVpSbIIw3CmjuI7/J21ixBT7zdgbNR0Bx5f8KvSgNQLSwsmRoz7iHEl7z5gfITtO3xN1BWNRmwQDlWlrV+LJwXPncJ1s5LNG+wUd3nqN5qEkvi88KdVqZj9QrL6nre2XFy5BHgVm4TzVpOQWtCNC3kbj2VCCTIfUzASt7ALQ3Ez73+JF0Ixdk0oCd7XqAH8BkV8lnJm4Q2BAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-4.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-4.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAeCAYAAACG0fjXAAAC9klEQVRoge2azWsTQRiHn4Ro63c8CH6U5CL4BwhSoeLNS0EPYj2IB1EPPRkQxIsKXgS9i7QVRKgHL6KIouIhmOpBvXgTT36AHqSm1trGpo2H2dV1+85kZjYNG8wDA9nd92Mymfnx7kwyxVK5CmzAnVvAEWAQuO/hH9IAvgDPgRHgsWAzDFx1iDkGnGxisxr4DKy3jDkF5LMOnVguMsAW4CDwCLgLbEoYcwjobWKzH/vB+kOmWCrnUZ125RcwA6wA1nr4m5gF5iLXPagZ4cJ3YMHwfBXNBzVKA6jmgKpjR+LMA98SxmhGLWitZDZoTmRRA9bwaONBjEFPf5t2Osgx7OE7B+Q13/uMR7xqOGBp5nAC3x7ggObZkG/QtGpYSPjL+mgYqFkmLbuNvn35XzXMu7/SknyGvIYvWcYsaPwbwIDGZ9zgI83eAYN9vJ2K+GWAd5Z+b6SOpl3D3gI/EsY4GvncD2xPEixTLJXj99YBOcFWpwdxsujfHKaBunB/DbBSuD+PPGA5VD9tCZegixYuoGq5JYnjTDt0RGIRd42YCZotdY8c0AItbLeGubQLhhwuGtYAPgG7Nc8WNfc7SsOuAxc9fV8L97YB1zT2Ey7BpSW5xyWAwAf86joXKm3IIZLWGZZa0qphY5hnkEnDCsAVyzx7gbOaZx2lYceBcwn8b1rYfERNDiekOqyLAUn0O71wnUKVCs02BcI6rhe1mRhHLFylJfkAmBTaeUPyKH0a/0nUq4nEiMb+lca+35CjL7DZCnzV2DyNxCppbCpS4rRqWMgO/LeO3qPXKBuNE+lqmCM5lN74zLQ6SpPasYHokiPUsJD496sBPyPXOg2TqOZQ9UbB0iFKBfVWsI9k55ImXgK7HHMUUW8bIaPAocj1MeBG5LqEfY2ZinNJE7dbECOqVzXgTpJgXQ1zJK0aFj/ITaJh8HfjUDrc7XgNuwec4N8BS6JhADuBh8BmlhbfThomVfTtpoH6M8oEqoB9sgw5XgCX8TjpjvMby1B2cTwaZ5MAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-5.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-5.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAACcklEQVRYhcXXS4iNYRgH8N8MMjQxlEsNMiR3ilHuYsTCRi7Z2EtWFjZYSTYWCuOSEDuSbChZTWhKbjW5bUzuUi4zwsJwLN7vcOac95hvzjnDv55O3/M+533+7/c9t5fSMAcHcA+fkUEHHuAE5pe4b2oMx4XEcU9yGoP6gkQdnqQkkZUzfUHkUBFnj9CKb0XWJ1eSxEB/YiErn7Asx6YBbyJEtqVxUJ2SyDTU5un2oCXnuR3nI/+tT+Ogf0oi9zADEzAeo3AyYvcqohtaSSKE1HxQZG04RmNkZK2q0kRyN27EeizALCGjykJviTTiGOaW67gcIqtxCTV5+g7cEOJjsu6ZVHGMwAeFqblX92zaGrE5ksZB2jeyBcPydBexu8T9CpC2jjRFdFciukl9TSSWlh15z/2wNmLX0CtGPeC2wm9/PM9me8Qmg+9CIawIzkQc/MRBbBAC8kcRIhncrBSRpr84yZUuPIvo72BApcg090DiKzZhCjpz9JcVNsyyUCXUifY8Al9wDlNzbJcKY0KzEMSpNi8FY4RG14mXwieJ7Z0pcf//h1LfSDkYK3TtemG8vIW7cBgr/gGBGuEG8BwPk9+MkPaDCQPNTVzDyj4mk5/C+4Vsq6rGW+GN3MdVtAlVMlbWy0E1FuKoMGTXJdIiEtSLEiLZ4nQdO7FE4RySBvXYKAxT2Qm/FTOFTv0am4kHa79kcQem5+i78BSP8QLvhGDLNr/a5ITjhC48SZhjsmjDPqHmZLAGu5JD/vjbaaqwCmcTZ7254WXlPU5heeTQ64TbwG9naVCDeViM2ZiYnLwGQ/AxkXfCpH9H6Nh3ezptFr8AyETYvMw1CkYAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-6.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-6.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAADZklEQVRIibWXb2gTZxzHP3fm2sak1YIXtBOZK4IiwtSL/16oJMUpMuh2KFE32AvpRBB9IaL2hb6pf/CF+mJ/2UA2BsdYRMEOhF5YfVPlgiCivtB2m1trbcS2aWpi0yS+SKLxvLukIX5f5X7f3/N8niP33H0fgQoUC/qbgM+BzYAfWAg0FexR4CHQB/wJ6LJuZJzmE8rAWoCTwBeAu5IFAv8B54DvZN2YrhgaC/oF4CBwagYws+4Be2TduFMWGgv6ZwMa8GmVsFKlCuDLpUWXBVAH1tUACDAFDJqLLtP1pQqBk8AToB5oAWZZ9MSBLbJu3DIbYvFHLOjfD+xwAI0BZ4AVQKOsG0tk3VgEeIGtQLep1xIIhf80FvT7yD/2TVZNwFWgQ9aNEYdFEQv6twPnAVXWjbt2fSKAp/2fE4g5u+3zI/BZOSCArBvdwFInIICQ7pG8wFB2vM6T+HXJcHZCainxe4Ct5Tb7TCUC24BGcc6U2LjvQYvUGn9c8F4CX9caWIR+UrwQXFk8OwcWuQNDw4J7+oqsGwO1BkJ+y6wyF+vXjsyvV2K/cM1+YKAr8TFwoQrmfRfwkaU1K9dXZvBcYFMV0OUiMMfCSElt6dEqJqxE88TyPbWXCIxb1BvSPVLze2JmXMAAsNLsvMi5NkH6isPgFPCvg+8CPrCoP3UBt83Q/umm/kPxdbuh2xYa6fTeBD608wNdiY1Ar4X1SASulxRyf6QW9385trn1WbahXdHUVvsbKatdNvW+N69BBI7HlWTv1AJfSUME2BINhWf0Vgp0JRYD94EGC7tNlNrSiWh63s87RwP1JiBAAPhW0dSKn/JAV6KYPKyAQ8BfIsCB8Q2nBzOepM08HcBlRVPNC3pHay8dWZYTJ28Aa2xaLkY6vZnXnzNFU/cD3zjMOQZ8D/wG3IuGwrnCOAlYDewB9gpZz4Rn8HizOLXQnEoeA8sind4Xb31DFU39Hef0UNQkMEw+rviAurdtIeke6UhJExuKez0HbIt0eq9DSVwp6CvyobmcPEAr+dBd966dcyd9PzQnfT/9j5ABOFYEgkUEVTS1lhEUKbH+bN/ew0dLa5YRRdHUWoTt50BHNBQOmw3HY4WiqdUcK+Lkc9XpaCj83KrBEVoCdzpAxYG/gSj5THUtGgonnOZ7BaWQB/oO0JdpAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-7.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-7.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAACGCAMAAAARpzrEAAAArlBMVEX///+CFDd8ACh+AC19ACx4ABx6ACOACzN/ADB5ACB7ACZ9ACp5AB96ACKBDjSZTl1vAACQQFV3ABnr3t7LrrXVvsP8+frl1NWla3m6kZudXGyZVGXSt7t2ABTGpKq+lp20h5Hz7e7hztPZxcqzg4yNNEprAACGIT3o29yrdYCjZXHEn6iPOU6LLkby6ey8k5pdAACseoV2AA2KHkKPMU2VR1ySP1GML0SaT2SlaHg5QQlIAAAP0klEQVR4nO1d6ZqiuhYNIINMKlNEBiHoAcXhWF16qt7/xW4SBkFty+rhs6tv1o8qRdRkZWftnWQnAsDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA8Cvh7QqIUaTes0vy/4I0m09PgigODYyhKJqTVYwY+78XKNmKkqbIXAeyoBniZg+fXba/FvAwGA5M7ibkgS4vimeX8G+Es9WF25zXMAVx4zy7lH8ZvLmkfsfSe1avCuWzi/o3Iea1j0mvjJ4XmM3/IqBcfZB1yrz0H3OxvwDe1HpAYXpqYx2eXeivDygMPsc6gZaz0ObnsB8LSj9cfwhmFD+75F8azvRwWE2PpiGpmvIpudFXzy7714WXLDD2sZNBmMXTXOKVx4nnj88u/ldFmvMCgcarkpTPygyGa4l/WHSEJZu1+RGkXM+65YGqjmLozvRHHa2yZcT/AOYjTdL61i1rw41jlyb/mNQry2fX4QtitAghjEf6hbAoJpwWIcc/RLwwenYtvhzWvMBL0joswsDoTkLq2UgTZ4UjP6Q2PItqPoe5UVk3PzyGRcy1k2JK4OJXFHFt78VHPKzI4vjPAEYtczJvrKC7kSrmh7ZMHyji3p48Mm0T2c+uyxeCJ/Qcp6IfUbYlLKvxotEXLYel+LF/lfNnV+YLwQ6MPqOyMUGhIMgTKLbXTMsvzI8HUtri2bX5Msgi15UvFpdkfWYvXmyz2x78xA4+DmwiNkf2IHLZCOyVfsGfos+9ldFvDA0uDO4DyJtn1+eLIFYJyaGrXgQsPI7oD/3WMC23FLkPYITPrtGXgFet6Rlre9Jb3RMCGFmOq/eV33Lij4g3uWdX6UtgXks2HpkuOtYtb22Vtkbe96Vi/CHxEltyfQCtpzQtJ7TaJ7KdE90RtvaoP1S1nPIDjWcG/wCczmhIX6B6vGRK9qSyc1koZv3sAss9fJBuYLjPrtWfj1U3gORntkys3OTtoLluRnDVjx6tIrgfx8tsfuwjFNDqMiaciLzIqh10xMXK+sSb2s68P3IVd8+u15+OQ3no2a6ytPMBd6HpIlz3niuT4r5v1ebPrtefDizk/RBdyYuRvbkYvVqwryz8vrw7cDW3z67XH45C1y4MnhNX4L/LjFRTq6Kb801wc3da2GJCcxdzjdP6Bi/OUW5rl/It5zaNe0y5yq4xc/tCacgr53fxbB7+Lo4yp5WrcRTV1isMXf9FGJ2d7SCKKMHCLBM5QeSC2UmUFKLgSUfyFcnKg1nwnzWsV2iV9bNr9meD8DtM8YMJ5WtI1ukCZTB1a2se7AHwhuSRFCcvi0o9skAlKyKtGCniOqtTCWB5Eqls6U+r0ldAQSilwQfhXTEcF2Jah5xUzqvhlIjbpKxGSVaG2vftB5wydWrXagQ9Md+tCPEskrwHSh0d5UxkU5/Zq4joQ25yYrYWGrngKtmuphltO6XvM1WhXqWKmq0HXm3zLl2pYkPWO6AaXfFu5JmrCZyVkm0HREYw+zhswTRWszEySY5xdFGPThlwXpYuSmiribQ5dsk2sixxNLcBCNVaoBi+h5nS8L6J4YgQPEiw4Upk9QIPjSjXI7lVeiCQx3K0dlw00iMbv1uiI6RFNKB3yZp1ylzSHArL6LiDrdnwbk/rPA0JPyGL2doiViVsy7Z1jgzDTCdrrxs3OxoyJyz2A5lmo546gyi5mlmTT7+8sCi7vub+mkVF92rLSvxp/2R/YrmHmq9OeN82UaHqYNUg0YyIRip+4VCHLRrmvXBmgrHJ0HFI20grDJHUO7iR03QxYk3PaQbePapSXF3nO13FT8jf6tVF7VTeL6f6d1gn/Zub3cLJ9i2lr19jejXc4HotEQbbzd0RCZwA9/GEaM8wB8NRRohopyVlQhjRH1MoEnxLM6iiwhGjPMsmRh3s8+GIrKWGlyuzFELvm9LxuQ6zOyVa4drB7xiO75O/O/pJ4zpNZ3rJ+wZ3iuxGxwAhZ6fY12/Rjdfo1/ax7fIeHFFq393FlZbADe7d0IM3zucw3BBJ2LXDTx2XDBEqBRLMxK2ESNRS4NZoJwjkkUNEf3tzxkDtJQcT3uM0TDIAZ5sEVyH28R9n56DC3fmk1sj3bWyTs8QjeuLF+FZgO6lf4s+Bvl80vINvhNlvoJj7iPKOQtIRsVb4fgrifJpQ1UhL8jLKCr+mtDLpOF/5YFcmuAWKcEc/HDgJOsTtRXsOvNLfbSD5VzVSOalrkfkxfsOchB64rHaWUAsJk9KznU/xjrKVxitEZ5xGTziF2CMJZpQ6pqwxoIrtJdF5OkeHbrfFetCveJ9t/HicpUmAUsA5iMvA9O29yLYzzDbWsywcp7vZAgF/gT17iSYrUHBBGOAutcjcl6Lh3Z9ieSmB72YSIryXuCO6b8A7oFIExaakF+3IybgShK/v4WZK3xaKhMTiFb8eO2gbA/RtFr69YWOeoQXvNBcnWE/MBM2GEJcxq3retzomnr4hX/LAENvAJAPJ68IhTi+fZiXIJp/iPVKV2q9uz/Mt0a5ahRKrMVRt21iPQkrlLmiuYc3HVzLpJu/Da94xb+U7CN/xvwQb8Qas8MNMI/2O3oxNEhsemCdgQZKfxrsiov/Ia4nf8G7ji2Pa9+IpoTg+gKbOrxk4ZrQTvDlUkVyuESZ8zzcypphUJpxtADLoF0PixI5UrtArQLgkMW4MIEFv3LiCceWRCouU0QcCfoq/JiGF34L5O/2846d4tyq5wA+X80Vj8ANcaY+vgsg6TQ/7XuQudbMSznZhWyFf5d7m/Ya942q7MxDibvS+eXs7RlSdM1LLfzzslo7YQGveJ+SLjllBvLFkA/R2zJOGdyBDXEtQBMdtj3dnclTchnc6H6ruXNJ3/2kKAV8ysMG8794nE8w78U3j1CHdAet7ii8uAcKVJmUg+u6M3yvmjaqtHMIw9k6CXfGOI+iCo7X6NO9iy/tEt1szxn0Jj6hUEkRCvrJ16G5xfGiKa1qSZvaGM8B37f1a32dhxTsu/nvVgSnvR8o74jyQlNTBYd4DYn8KrHjf2di1xGfefX/lgBT3Sved8r6ivDtH2rI17wqipPZ5JxER4X2IgL1teA/fqoJgcu2c8r5I8JWcuFG/WqBfVUrlEpnHqqbUOlPx/l7+AO/SmXd+njQGT1QrtUhAsljFmqwHFevUwi3qnpq5SB0X4XJCuMZ1PNPw/oqLiVkGXpf3EjOE9fWwoLy7Aw84Cqh5DzFDkzPvxVLxAMKfP6P2numed5yBQwJS0QVvMWWRuMLkWMVOFe/IA6npEkVJ8YVk2fDujRFWEMcjF7eUd4iVzR1jvwrsSqLSKPGAtwO4u6QRBMECy1HLO3qx8Z2f4x0IZ97lQUugSaobkFZXxcIKYNiwThDZ3jm65Ild5rfWWi/j938BeMO8h0fgveI6OQr3LQQzTJJL5Oxfz5sMAkydPXwBPhaOWJFxsA2HgIaMgXpMpiBpMl5VwuZUn/hH+gmr8auzAbtvyjuO5rOxQi8mgvLuAWrM/9I3JWIk4OvZ+Bvwo9dSAhmp5b8pbkF+ijkkF3WAiIU7luIHaIddXx10plMrMkpgv8rExe7MlwXusAdsBlDEd2uq4mVLHIs9zvuyHa9OZK1sQ5ohCdWId9WjJA3z3tEcvEMaZF0FNQrpgfEtofkN49W/CEE7PzORObU1eKXOwzAD6MBhHZ7L1X85KLFf8Wt/S3NQl/2FQnqfwOZn7oDGMA3vg3NIY9Hh4A6FuTiNq+l3YV7nGEhkXLOvBV4jcUOadyYKcOhDiGcZBffQnX/HIYjdJOAJ9IQNh+xzGhYV75jIkU4YNUgYX+sMZyDiZ721Vc3FywPrlAHSbdj8+z3AYZf3s8ErZCCTvhAuhaSKc4gBh1tLt7akLzSSLsExnbcoFmYkitZxX9TRKVtvugury3uj8Io+hbDVcL6gwYtG49TUpny2u56kQhAby27OlqS8G8+ozdcB0eIz79TgFWtVOAoOj+vNZnwY0JTJzgxd2Q6xVPc/U1z1h0ik07B8gvuYDwjvXupV+QS6bekrOxZ4zsjCOlHYXGZV6owYVFkDCJ7Ta/jwZHKCuGryCQonEIks8SwF/i4g0RBZFOvFJiNxYCxQR3o+2s2AdSRJsmSOm+FLPJPPvNPoRZAsYXPcmJZeH53C8sU+QDexVxAPMB1eJT4KfhtfciaO4pXDvn1e805jGfmcLyaz/MgPcKZUGC7s2NonN07rhL0RqTwJ27bhw+OtVQ8WvX+EJqFaEBf2HGuLdGOaS0L953nW7hHhsV+9wTuLIj8EzesVDMy6RILDwQ2DF5JF7xp/tn8J3qKd7ff4GI6KFSapWccwiqtpLrNj4BXZHd5v5cGz/U0PQBcTe6+2MyyD/eLK4A3Y28GnZm2sI8Ebh3Sw/XyPICv2vSPEePsqL0Nzgq73VLNzHAlvTAKrLHh/BEZ/V2RnWrKBso67LXPm3dxk1/bOzP0xxBfUdVZaW4NHXbOWYNsg0/I6V4ydT/AgLhbqboQ0ffd5tnctXl/tZGXncTwKZPWZU+1L0ebDav6G7GISBlGmDgSFrD+p6HpxlZ0/8zBWfbG4NngcwWvkvD1hGawX/t6ez/3V7JhLL8XVUQXsvKXH4cl9q5Xsfg9Q1I1zSkIIkRvOk2Rqzw7JPnazAoaXbpWdL/YZdM7Towaf+OceIEjC2oGeszhJkqRqA0EQoagIwkBVo/30Ut7ZeXqfwryvF3qj8IpkJgjGswi9dI6Fb4JHA14ezMHOj/wk1v2zlhKSMGBq6grBJDc0WUJnxTdPbsW7maMLB8zOS/00Tj3FkGxJNrZOUeYGXe7rzjsqq3mlQoP5qi8z7Hzgz8PrnWclJMkEoVn7e2VaZ41pUNZBu170J8XYedg/gu7572TPU7g0zhdwINk+UbNtlSwThD3e2fnvP4a0tXh1g8L5oqv4yvS8ttfMTkrZpht+st87+FF4J0q1MAjhUtJ7g1Zl7bTNYKIqv2CLukEQz7T9x7E2OFM82Gvd5Aa+3xm0yqNWU5RDlRwpuaPO5LDIIpmfwfyFg/GQ6k3vICbz1PKuZjR7G5v7edqS/X7TzwLCpdq40v150GrmbsO7QQ/x4IbZpDV39ntlP4+0/X0+savwLe84iiFKr8zC5lU5Yr/P9yvQ/B5l1+DP9q5W6ZKiXVu7aSzZ71H+IsQ8Xyl8O9t41neVTv2qcbUph/3+6q9Fyaty1+DbeEZZkaVW5YhIepOsCsyf/mI4S1EQ25VWZV1vt9EhWWGSbNM0B+KJraT+BsCFtdo3h5SvqvGqPCHbhK1sZugD9nvyvw0o3Q4NTcGSs69O9zSykyBY8/12z5zp74WH4tVRG8dHazgcWks3OpLN/M8u1f8NPLvAsBnhDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMfz/+B+xhSsQoaVc2AAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-8.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-8.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-9.png":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-9.png ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-avatar-1.jpg":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-avatar-1.jpg ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCACAAIABAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwgC/8QAJxAAAQQCAwACAQQDAAAAAAAAAAECAwQFBgcREhMhFAgVIjEyM1H/2gAIAQEAAD8A6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABifHHJHKuxc4Z3Vt5wNfX8XHq9TMY3CtmjsWIvktTRe7EzE6+V3xL2xjnManlO1d6Ur+47Fz3xzquN5I2nfaT81fzdOk3R4MdWfTnbYtNjSpXsNb+Q6ZsTlf8ntW9sd2zyeeW+WNgwXI2y6/mOYafGOMwuFrX8CtjH1p/3+Z7ZFmX1Ya72kb2sj+GHzIvrvv7QveC5qfjdd45n5R167gMlvFSJkthYmso0sgsKSfjTOe/3E+Tp3hrmr9orVcjk+5LFcsTbjoF3eeOdJy2calt9TEwTyQ025VrZUj/ACopHvXzWVfTke5EcrWKqMXtvqu8L7zyltnGO25fPxYvJ7hic7nMZVqQqkNNZq0r44oGv6R3xemo327+at+1+yFs5vmHjbauOam0clQ7Te3TJpjsnr37VWgbWYsD5JrNR8LUl+OBWtR3yukRzXJ9tVUI5eWNgscr5fB7LzDT02zjNto4fE6fJj6zpMxj5ZIGtn9yNWeRZkkkRHQua2Lz/LvpTo4AAAGZxarstT9Qeb5Abh3TYabSaWLglZPEjprkVy1K6FGq5HIviRi+nIjf5f39L1lWmR86SbovJPKX6eM7m9kbLLFi2x7FiP2/A1Hr14qxLY7WRzOvkmcnt3+KeW/S2XK6Zumqcmb5sicP1ORqG6tquqTuvU4pKUcddsTqU7bSp1B6ar0WP3/sd21VIa5wVyDnOHdH/Tjn2xvwLolm2vORTxyfjQxTLNDQqNkVZFd6WONJVZ02OL/rkams8LVN7w2kQanyBiYK97XHriq12s6JIMpTiRGwWmRxuVYVcxGo6NyN6c13SeVQrvHOA5A460DfpodS/Pz1raNhzOGxv5kDUusntPkrdye/EaPRWqvpUVqd9oi/RTuGqHLOH2iPZ+SODs/e23OqytltmtZ3FPgx9ZXdrBVgjsOdFWYv34YiveqenenddSejaZumgbLm8JleH6m1QZzbpM4za23qaeIJbLZGPsMmVJ/lrN6RiRtci/Gzyrf7TfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-avatar-2.jpg":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-avatar-2.jpg ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCACAAIABAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAUGBwgC/8QAJxAAAQQCAwACAQQDAAAAAAAAAAECAwQFBgcREhMhFAgVIjEyM1H/2gAIAQEAAD8A6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABifHHJHKuxc4Z3Vt5wNfX8XHq9TMY3CtmjsWIvktTRe7EzE6+V3xL2xjnManlO1d6Ur+47Fz3xzquN5I2nfaT81fzdOk3R4MdWfTnbYtNjSpXsNb+Q6ZsTlf8ntW9sd2zyeeW+WNgwXI2y6/mOYafGOMwuFrX8CtjH1p/3+Z7ZFmX1Ya72kb2sj+GHzIvrvv7QveC5qfjdd45n5R167gMlvFSJkthYmso0sgsKSfjTOe/3E+Tp3hrmr9orVcjk+5LFcsTbjoF3eeOdJy2calt9TEwTyQ025VrZUj/ACopHvXzWVfTke5EcrWKqMXtvqu8L7zyltnGO25fPxYvJ7hic7nMZVqQqkNNZq0r44oGv6R3xemo327+at+1+yFs5vmHjbauOam0clQ7Te3TJpjsnr37VWgbWYsD5JrNR8LUl+OBWtR3yukRzXJ9tVUI5eWNgscr5fB7LzDT02zjNto4fE6fJj6zpMxj5ZIGtn9yNWeRZkkkRHQua2Lz/LvpTo4AAAGZxarstT9Qeb5Abh3TYabSaWLglZPEjprkVy1K6FGq5HIviRi+nIjf5f39L1lWmR86SbovJPKX6eM7m9kbLLFi2x7FiP2/A1Hr14qxLY7WRzOvkmcnt3+KeW/S2XK6Zumqcmb5sicP1ORqG6tquqTuvU4pKUcddsTqU7bSp1B6ar0WP3/sd21VIa5wVyDnOHdH/Tjn2xvwLolm2vORTxyfjQxTLNDQqNkVZFd6WONJVZ02OL/rkams8LVN7w2kQanyBiYK97XHriq12s6JIMpTiRGwWmRxuVYVcxGo6NyN6c13SeVQrvHOA5A460DfpodS/Pz1raNhzOGxv5kDUusntPkrdye/EaPRWqvpUVqd9oi/RTuGqHLOH2iPZ+SODs/e23OqytltmtZ3FPgx9ZXdrBVgjsOdFWYv34YiveqenenddSejaZumgbLm8JleH6m1QZzbpM4za23qaeIJbLZGPsMmVJ/lrN6RiRtci/Gzyrf7TfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-avatar-3.jpg":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/client-avatar-3.jpg ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/dotted-line.png":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/dotted-line.png ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAgCAYAAAB6vRjLAAADqUlEQVR4nO3cX4hVVRTH8c9Ml7IxiiwTnOyPjpWpZC8TFYFQFEXUQxZBERH07yGjoJcoiiAqLKggqCdfeigoSESCxAgioazUtBKTmSnCpD+j2Z/b6ND0sM7F6U7dO/fPnDMzd39hc87cc/c5i7N/s/Zea+99u7bvGjODuRHn41TMy0rl/E08V6PuAnyJ0zCCv7JjGUewHs/UeX43/m7e/MSqFZSKNuI/OB59OIDhGt9bindqXD+ktgi7swInZGU8V6otwrPwhXiHQxjAYFYG8AEO16ifyChahL24DMuxMjv24TjswbIadQfxvPB8B4Vgh8edb6vz7B+EN5yLE4UI52SlhL116le84NzM7uVV19/Gmjr3SChehLuEiKo5iE116o7ikRaff1R4zENN1B3CGcIjnltVFqlv/ym4D/vwkfD8HclUibAkPMsfdb63CWfjq6zszo4zpUFGRdc70ETd2/DsuL8HsVUI8kPxLjqCrjYGJstwVVZWi7HdSvGfnpjI6XgcV+Aix8anFdaILn1W047AZCkeE8JbWHXte/zZ4v1nMz/jwez8JFwixseX4xx8V4xZ+dOqCO/BHdl5WXQjm7EFO6X0xWT5XbyzLQ3UuVaIdQP2T4FNudFqd9wrxjbbxHhmpB1GJSbFj5iPMXyMt0T3PVSgTQ2zasX/i/A83CIGx7VycYniuBlrRffdNe7zz/EkNhZgU8NUi3A+bsXt6M8++1a4/MT0ZSFuEKJcLQKc90WyfdpTCUz68QSudmyMOIr3sK4g2xKTZz9ezco80Y6fFmpRg5TwtIhu4RO8jjfwU1FGJZpmWLRdPXpwsmmSjy3hUeH1Nqg/VZWYHWzGpWKy4BXR/oVlMrpFZLtOEmAn8ZkIZq7Hu6LtHxbdee5UZ+kTncFakQF5UcybL8ELYoLhrryNSSLsXL7BQyLXezd2iNVE/bUqTQXtnDtOzHz6xHThkbweOF0XtSaKo5DFJqk7TjRCD17GvWKVVFtIIkw0wsV4QCTG94kFLC33pkmEiUbYivtFknsRXhPbMO7UghiTCBONMCa84GIRWR8Q6Z312G7iZrFJkUSYaIayyDEuFvt8fsGZmhwnJhEmWqEsdjz2ig1fvzVzk5SiSbSDES0saE6eMJEXc8R+8gkkESbyYIEIYvaKRRP/IokwkQdl/CoCmY1iCdmSysUkwkQeHMaF4reBjuI68WNUT+3YrSctYEjkzQV4SWxDgK+TJ0zkzR5cg5vE9tSxfwDlcb7++Ri+EgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/portfolio-1.jpg":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/portfolio-1.jpg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/portfolio-1-f349f1647f4e16c7c3b604975fdf8618.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/portfolio-2.jpg":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/portfolio-2.jpg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/portfolio-2-f349f1647f4e16c7c3b604975fdf8618.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-1.svg":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/skill-1.svg ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzUiIGhlaWdodD0iNzMiIHZpZXdCb3g9IjAgMCA3NSA3MyI+DQogIDxpbWFnZSBpZD0ibm9kZXMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFc0FBQUJKQ0FZQUFBQjFodHZoQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQ2k1SlJFRlVlSnpsbkgyd0ZsVVp3SC92dlpmbFF4UlRCbkozU0IyVE1zaEo0VzBGek1rVmFiSVpwVUFZTkpqeUE2YVoxTEFaSjdVUkd0UnNkQlMxS1FvclIrSXJRSkdrR1EwMktralhSWnBobUlvcHhENTJBeXRBMFVzdWNOLysySE5oNzdQdng3NjdaN2sxL2Y2NTk1eno3SE9lOTNuUDJYM09jODYrRlFBemNDdkFGNEZiZ0E4QmJ3TXZBUStFbHZNWC9rOHdBL2NEd0wzQUZPQU1ZRGZ3RlBDajBISnFGZVdvWmNDTmRhNC9BRXdPTGVlM3A4SllvK3BOQXNZQkhVQVA0RWUrL2ZLcDZOc00zRXVBVGNCWmRacVhBN083Z0p1cDd5aUFzMnJkbFo4T25PVGRYb3ZvS2NuT1hzWUJYNWVWUnRWYkFPd3NzK09LUVVldHUvdUp5cEJhUFVkQjdKOHRYY1JUcjdHaUlUV3JhL1R4ZFVkM2RXbzNNaVBmS0x1RHJ0SEhxUXlwdFJLN3BRTzRzSlZVcDlsUzBmODBHVC9maFIzQXdWWlN0WGNMMi9OZlRjYlBkN0FMZUFHNG82R2lpRnEwcy9Nd2tIVjREUVg2YmM0bU9BWmtja08wczdOU2l6aTlZbEJwSXZaQ3hRemNFY0IyWUZRRG9mbWg1U3h1MWFGUjlZWURpNEJiYWUyc3Q0RGZBTnVJSDg5N2dDN2dhZUFqQ2JudHhDSE5JT0NEd0VYQVJHQUNjRnFMUG80RDN3RVdScjU5b0pYOVp1QitCWGlzUWZOZmdmRVZKWGdlOEVQZ3lvVEFRZUR1MEhLKzE2b2pvK3JOQVI0SHptd2k5anF3QmxnTDdJaDhPL2ZUMWFoNlhVQVZ1QUdZQnB6VFJQd0FjSHZrMjh0YjZUVURkeDd3VGVCOWllcGZBRGVGbHZOR1JRaGZ3TW1nMUE4dDU3MFdScDhOL0FDNHJvRklEZGdBUEJyNTlxOWFHWnNIbytwMUFKOEM3Z1FtTnhGZEM4eU5mTHZwUGRvTTNJSEVYOFFad083UWN2YjB0aldibzYyTUhBZXNBODV0SUxJU1dCRDU5aC96OXBIRHBvdUJCNEhQTkJEWkEweU5mSHRYSHYyNW5HVlV2ZW5FVWYrZ09zMnZFZzk3TDQ5dUhSaFY3eXJpMjhLWU9zM3ZBak1pMy81WnUzbzdjaGd5RjFoTjJsRVJjRGN3c1Q4ZEJSRDU5bWJpRmNHM0lMWHlPQTFZYjFTOUdlM3FiV3RrR1ZYdk51Q0pPazE3aVlkM3FjdVNQQmhWNzNMaSs5VkkwZFFEek1seTQrOGxzN09NcW5jVDhjMWNzZ1dZSHZuMnY3THFPdFVZVlc4VThEeHdpV2pxQWE2TmZIdGpGajJabkdWVXZTbkFSdUpZS01sSzRBdVJiMGRaOVBRblJ0VWJRaHlBWHltYWpnQlhSTDY5dlpXT2xzNHlxdDRGeE1HaGpLRldFQS9qNDluTTdYK2FPT3h2d1BqSXQvYzN1NzZwczR5cU54QjRCZmlZYU5vSVhLZmJVV2JnZHI3N1kyTmx6NzdLeE01emFxOE11VEdhR1ZxTzFqNlV3ellEbDRtbVRjQ1V5TGNiTHV0YVBRMFhrWGJVVG1CV0dTT3FlN214NGNqYUFkZS90N1hMNmw0ellGcjNjbU9EN2o0aTMrNG1EcUwvTEpvbUEvT2JYZHZRV1ViVkd3OThWVlFmSXI0aEhzNWhaMVBNd0ozU2M3QnlUYkt1NTJEbEdqTndwK2p1Sy9MdE40RnJBYmxDdVYvZGR1cFMxMWxxQ2JHa1R2dVhJdCtXMzBoaHpNQjlQN0NzSmlJaVZWNm0ycldpd3B5dmllckJ3Sk9Ocm1rMHNqNVBITlFsV1JYNTlxcjg1dFhIRE53TzRCbGdSQU9SRWNBelNrNDNqd091cVB1MGV2cW5TQmxnVkwwQndIMmkraDFhek9jQzNBVmMzVUxtYWlXbkZYVXovekp4T2lmSkEwYlZTejM4Nm4xYk53QnkzajRZK2ZZK1BTYWV4QXpjQ2NRUGtTd3NVdkphaVh6Nzk4QzNSZlY0NGt4R0grbzU2MDVSM2crMFRQNjFpeG00WnhMSGFqTFFiVVFYc0VKZHA1djdnVzVSSi8zUTExa3E3WEt4a0hreTh1MGplbTBEWUNsd1hyS2lkcWp5UnJPeWtsK3EyNURJdC85Sm5QeE1NbGt0azA0Z1I5WnNVZTRHdnF2WnR0Nk01SFJSL2ZyUlhaMTlObFJWK1hVaE4xMWRyNXRINlp1aHFCQS82RTV3d2xsRzFlc0VaZ2tGNjdQa3I5dkJETnl4cEtmMU1XQldMYUxQR2xPVlo2bjJKSXVWSG0xRXZyMlhPQ21RcE0vZ1NZNnNqNU4rZksvUWFaQVp1SU9CVmFSellmZUVsdk5xdld0VS9UMmllaEN3U3VuVGlmeThGeVdEMUtTenJoS0NoNGdQaCtoa01lbnM1WXZBSXkydWUwVEpKUm1EL2dmUE90Smh4SWxGZDlKWm54UkNXeVBmUHFyTENqTndyd2ZtaXVwOXdKelFjcHJ1U2FyMk9Vbyt5VnlsVnd1UmJ4OENkb2pxRTM3cEFGQUJtSXhoZnFuTENETnd6eWY5RktzQnMwUExlVE9MRGlVM20vUm03MUtsWHhkeUYycFM3eis5STJzVU1FUUliZFBSc3htNEE0anZCY05FMDBPaDVXeHFSNWVTZjBoVUR5T092d2JrdDdJUDhuT2ZhMVM5UVhEU1dmVU9oL3hCVStlTFNPZU9YaWE5cE1yS2ZlcjZKSmVSZlNYUWl0MmlYRUg1cDlkWm80WEFnVmFia1ZsUTZSVzVwanNFekFvdFI0WURtVkRYelZKNmt0eWxLWjN6SjlJN1FuMmNKWGMrOWhidDBRemNrY1RaQkxrZ3ZTVzBuRUpwSG5XOVBGZFdJYzVPeU0vU0Ztby80ZStpZWppY2ROWlEwZmhPa1E0VFJ5K2w0VXRDeTFsWFJIY3ZTczhTVVQyU09QK1ZlNmRkOFpZb0Q0WEd6cEpEdkYzcXBWMTJvVC9OTTEvcFRhSWpuU09QS3AwQmpaTi91ZTlYWnVEYXhLdjRKTjNBek5CeS9wMVhiejJVdnBta013YjNLenZ5OGc5UnJzQkpaejFIMy9obGJaNGV6TUFkUnJ5WEtOTXVkNFNXODdzOE9sdWg5TXJEZUYzQVNtVlBIdFlrL2o5S2ZCSW9kbGJrMnk4Q052R3ducEIxaDdZTzN3ZGtnTGc2dEp5bmN1ckxoTksvV2xTZnIreHBtOGkzbnlaZTVzd0h4a1crL1Jva1JrRGsyejdnNTdJV01BUDNWa0FldHRnTGxKRk9xY2M4NG1SQThzdWFZUWJ1cHRCeTJzNkJSYjY5QlpHRjBMSUpZQWJ1R09Ma2Y1Smp4UEdVZkxLVWd1cW5YanJuY1dWZllRbzdLNUYya2VtU2UwUExPYVZIajFSLzk0cnF3V2hLNStnWVdZOEJNaEgzRXZDd0J0MTVlSmgwYW1rc2pRL1hacWFRczh6QW5VNzZuclNmT0p2UUwyOGFxSDVuS3p1U3pGUDI1cWJveUpMZlZsdHBsN0pva3M0cGxDd3M2cXpob3J3NnRKeWZGOVNwQldXSDNFRS91NGpPb3M2UytTaXRtd2dhK0tnb3Q1VS9reFIxMWs5RWVhd1p1Qjh1cUZNTHlnNzU1VWw3MjZLb3N6WUE4b2lrdHB4NFFhUWRFV3Jaa3BkQ3psS0I0R1pSM2ZhUjZaS1FkbXd1R2lEcmlMTmtmcXJmcDZKNnJVWk93Y0o1TkIzT2VvNzBFbU5xVGwxR2kzSlc1QlE4Um14bklRbzdLN1NjQTZTbll0djNMZlV5K1V4UlBWUFZ0NHZzZjdPeXN4QzZUdFBKSVg2cG1ncnRjRnNkZXpwVWZXWlV2NWVLYWkycGJGM09lcDcwamtpN282dlpNY2wyK0t3bzl4RGJWeGd0emxMTEMza0NwZDExV0tOTjNYWTNlMlcvVzNRdHYzUWVhbDBqeXVQVUwzQms1V0hpTnptU2JLZU43SVhxVCtiZXBWMjUwZW1zWjBrdlhETlB4Y2kzM3laKy8za21zRUQ5bmFqcXN5TDdxeW03dEZCMGY2MFBadUQrR3JnOFVlV0ZsaU8zN2t2REROeHR4QTd2Wld0b09aL1FwVi8zMlhLNTlyTGJuSXE1TVFQWEpIMFNxTkJhVUtMYldldElUOFZwbXZ0b3hEVDZ6cFFhbWtLR1hyUTZLN1Nja1BUVDYzTTYrMmlDWEF0dVUvWm9vNHhYUE5hTDhpUTFSVXBEdmRzakkzMXBSMkhLY0paOFZGY29meXBPSmYydzBoWXk5S0xkV2VxWDNPUVdXTmxwR3hreWVHWDhvbHdaSXd2UzMrcWtNbDZEQTFDL3BTTVBEMnNmVlpEOXZabDJlWmEreDdVcnhDZnp5dmlKbFN0SWYrbmFBdEVrV29QU0pHYmd2a1o2OVg4cTJCRmFqbnhYVWd0bFRVTW9hU3IwWjc5bE9tczE2YmNWeXVZNDZhTkgyaWh0R2dLWWdYc3pzQkE0dmN4K0ZJZUJoYUhsMVB0VkV5MzhCK2hySHV5anBLNllBQUFBQUVsRlRrU3VRbUNDIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-2.svg":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/skill-2.svg ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OSIgaGVpZ2h0PSI2OCIgdmlld0JveD0iMCAwIDc5IDY4Ij4NCiAgPGcgaWQ9IlZlY3Rvcl9TbWFydF9PYmplY3QiIGRhdGEtbmFtZT0iVmVjdG9yIFNtYXJ0IE9iamVjdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNS44NjIpIj4NCiAgICA8cGF0aCBpZD0iUGF0aF8xIiBkYXRhLW5hbWU9IlBhdGggMSIgZD0iTTI5LjEwOSw2Ni40NDZWMjIuMjM3TDIzLjYyLDE2LjU1NVY3MS45ODlINzcuMTcxbC01LjM1NS01LjU0M1oiIGZpbGw9IiNkNGUxZjQiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF8yIiBkYXRhLW5hbWU9IlBhdGggMiIgZD0iTTcuMzY5LDY2LjQ0NlY3LjczNkgxLjg3OVY3MS45ODlIMTYuNDFWNjYuNDQ2WiIgZmlsbD0iI2Q0ZTFmNCIvPg0KICAgIDxnIGlkPSJHcm91cF8xIiBkYXRhLW5hbWU9Ikdyb3VwIDEiPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMyIgZGF0YS1uYW1lPSJQYXRoIDMiIGQ9Ik01MS41MDYsNjMuNkgzNS4yNDNhMS44MzksMS44MzksMCwwLDEtMS44My0xLjg0OFY0My45MjJBMS44NDYsMS44NDYsMCwwLDEsMzQuNTc4LDQyLjJhMS44MTUsMS44MTUsMCwwLDEsMi4wMTEuNDY5TDUyLjg1Myw2MC41YTEuODYxLDEuODYxLDAsMCwxLC4zMywxLjk5NEExLjgyOSwxLjgyOSwwLDAsMSw1MS41MDcsNjMuNlpNMzcuMDczLDU5LjloMTAuMjZMMzcuMDczLDQ4LjY1NVoiIGZpbGw9IiMxYWU1YmUiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjcuNDEyLDQ1LjI1NkgyMy42MmExLjg0OCwxLjg0OCwwLDAsMSwwLTMuN2gzLjc5MmExLjg0OCwxLjg0OCwwLDAsMSwwLDMuN1oiIGZpbGw9IiMxYWU1YmUiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzUiIGRhdGEtbmFtZT0iUGF0aCA1IiBkPSJNMjcuNDEyLDYzLjQxOUgyMy42MmExLjg0OCwxLjg0OCwwLDAsMSwwLTMuN2gzLjc5MmExLjg0OCwxLjg0OCwwLDAsMSwwLDMuN1oiIGZpbGw9IiMxYWU1YmUiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzYiIGRhdGEtbmFtZT0iUGF0aCA2IiBkPSJNNy4wODEsMzYuNzc3aC01LjJhMS44NDgsMS44NDgsMCwwLDEsMC0zLjdoNS4yYTEuODQ4LDEuODQ4LDAsMCwxLDAsMy43WiIgZmlsbD0iIzFhZTViZSIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfNyIgZGF0YS1uYW1lPSJQYXRoIDciIGQ9Ik03Ljk1MSw2Ni4wMjFINC4xMTZhMS44NDgsMS44NDgsMCwwLDEsMC0zLjdINy45NTFhMS44NDgsMS44NDgsMCwwLDEsMCwzLjdaIiBmaWxsPSIjMWFlNWJlIi8+DQogICAgPC9nPg0KICAgIDxwYXRoIGlkPSJQYXRoXzgiIGRhdGEtbmFtZT0iUGF0aCA4IiBkPSJNMTguMTE2LDcuNzFhMS44MzksMS44MzksMCwwLDAtMS44My0xLjg0OEgxLjgzQTEuODM5LDEuODM5LDAsMCwwLDAsNy43MXY2NC4zYTEuODM5LDEuODM5LDAsMCwwLDEuODMsMS44NDhIMTYuMjg2YTEuODM5LDEuODM5LDAsMCwwLDEuODMtMS44NDhaTTE0LjYzOSw3MC4xNjdIMy42NlY1Mi42MTJIOS45MTNhMS44NDgsMS44NDgsMCwwLDAsMC0zLjdIMy42NlYyMC44M0g5LjkxM2ExLjg0OCwxLjg0OCwwLDAsMCwwLTMuN0gzLjY2VjkuNTU4SDE0LjYzOVoiIGZpbGw9IiMwNjM1YzkiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF85IiBkYXRhLW5hbWU9IlBhdGggOSIgZD0iTTI0LjkyOSwxNS4yNjVhMS44MjcsMS44MjcsMCwwLDAtMi4wMDUtLjQyMiwxLjg1NywxLjg1NywwLDAsMC0xLjE0OSwxLjcxMlY3MS45ODlhMS44NzIsMS44NzIsMCwwLDAsMS44NDQsMS44NzNINzcuMTcxYTEuODQ0LDEuODQ0LDAsMCwwLDEuNjg2LTEuMTQyLDEuODc1LDEuODc1LDAsMCwwLS4zNzYtMi4wMTVabS41MDYsNTQuOVY1NC4yNzZoMy45NDJhMS44NDgsMS44NDgsMCwwLDAsMC0zLjdIMjUuNDM1VjM2LjE2N2gzLjk0MmExLjg0OCwxLjg0OCwwLDAsMCwwLTMuN0gyNS40MzVWMjEuMUw3Mi44MjksNzAuMTY3WiIgZmlsbD0iIzA2MzVjOSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-3.svg":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/skill-3.svg ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzAiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA3MCA2NiI+DQogIDxpbWFnZSBpZD0ibW9uaXRvciIgd2lkdGg9IjcwIiBoZWlnaHQ9IjY2IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkNDQVlBQUFEcXY2Q1NBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBN3BKUkVGVWVKenRtMDFvMUdnWWdKL010RmwvcG1qVldyV3lQVmgwV1FZcGFnZ2V4TDBJUWhVRmhVVkZYQlgwSkN2THJnb2V2UWdLNmxWUXZJbC9zT0JCVWF1Q2lvU2c2T0tDUDIyUlZiSEZGblduV3BzNk14NG13U1RPaDVsTzgwUG5lMDU1MzN6dmw3ZFBKa25ieWFmZ1F0VU1CVmdFL0FRMFVSdThBUjREOXkxVEx6cEp4ZGxRTldNbGNCUllFSDF2aWVBSnNOc3k5Y3RnaTFFMVl6dHdIRWpGMkZnU0tBQTdMRk0vb2FpYThUUHdBS2lQdWFta01BSzAxd0g3Y0VsWnRyaUIzOWJPb0hsNmJYanFHeGpoMU4vOTNMcVhjMUwxd0Q1RjFZeGVvQm1nN2NjZk9IMW9IdW0wSXBwblhKTFBGOW53VnpkZC93MDdxYjRVdGhTQXBlMlptcE1Da0U0ckxNbE9kcWVhUFRmYlNSTnE5OTZiVXJ3ZmlObzE4UjNxS2h4L0VlZ0Uzb2ZRUzZ6ODJ6VzBFVmpoeEVIRmZBVFdaRnN6MTBMcEtnR29tdEdPUzB6UVMrbVA4U3lsSEVIRWZBQk9oZDFJMGdnaTVubTJOVFA4L1dIaml5QmlQb2ZlUlFLUmoyc0JVb3dBS1VhQUZDTkFpaEVneFFpUVlnUklNUUtrR0FGU2pBQXBSb0FVSTBDS0VTREZDSkJpQkVneEFxUVlBVktNQUNsR2dCUWpRSW9SSU1VSWtHSUVlTDY3dnFMMDh5dzk0Qmt3VEdIZW5GZlhiMGJhVlF6a2puMXVHNzd4VllkSFRKOWlrVk1zZjAwR1dCNSthL0dTeWhTOWNVeDlKQjdQSjZheFdFOUwwZnRtaUVWaDZLWHk2V21rWGNWQWNVaHBBV1k0c2NmQ3FtSVRPL016L1RWUHM2Mlo5Z2g2aXhWVk00NEN2enV4dkpRRVNERUNwQmdCS1NEdkJQMXZhL0pWR0llSnJ1MThDdWgyb210My82ZHZZQ1Q2bG1KRzFZeTV3SHBYcXJzT09BZnNCM2cvbUdmVG5oNVcvektWcHNiU0ErdkRwMEtUcWhtN0krODJPdVlBVzRCcHJ0eFpSZFdNcWNBam9DV1d0cExIS3lDYnNrejlIZEFCdkk2NW9TVHdHdWl3VFAxZENzQXk5WWZBUXVBSTBCdG5aekhSUytsblgyaTdvT3hTRTFVenBnQ05ZM3p3ZjRBR2Uvc0M4R2ZBdXNQQU9uczdSK2tFamlWdkxWUC9aZ2xBMlZmbTdZRmp1bDVBMVl5Q0t4eTBUUDE1d0xwQlYxZ0lXbGN0OGhjOEFWS01nQ2pGak1XeEl1czNrZ09wbWpHWnJ6ZGVnQUhSMkRLNHh6YlljNFZPVkdlZ3d4ZjNWRkRySCt1Zkt4UkNGMk0vK2cvNDBsY3JtTUkvOW9BOVo2aUVLa2JWak5tVWxnck9kNlV2V2FZZStGK2w5dGhMcnRSOG9OT2VPelNxWGt1c2FzWXNZRmFaWGJPQms3NTlCZUJYb0t2Q3c3UUJaL0NleUY1Z0crWC9sQ2tDUFphcDU4cnNDMFJWWWxUTjJBc2NyR2FPRUJrQ1ZsdW0zam1hNG1vdnBWMVYxb2ZKUkdEcmFJdXJGWE83eXZxd3VUUGF3a3JYWGZ2WkRKeW45RzFsMG5neDJzc0k0QXM5WWRUSExYQnFMUUFBQUFCSlJVNUVya0pnZ2c9PSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-4.svg":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/skill-4.svg ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjkiIGhlaWdodD0iNjkiIHZpZXdCb3g9IjAgMCA2OSA2OSI+DQogIDxpbWFnZSBpZD0idmVjdG9yIiB3aWR0aD0iNjkiIGhlaWdodD0iNjkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVVBQUFCRkNBWUFBQUFjalNzcEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUI0bEpSRUZVZUp6dG5HOXMzT1FkeHovMjNUa2hUWnFGQmlnTlRUcitOWXgwS2htdUt6RlJFcGlvVm5WL1hpQTZpVEk2clJQYlVMZXhqcW04Z2IyWm1MUk5RNFVLQm9QQ3RBbXRRNVNOVFRDdEtkdGd4YldhVGV1Vi9wRzY1SlkxTGJTRUpQVWxPVi9PM292ejNmbDh2cHp2enRkT3lCL3BYankvUFA3NTUyOGVQMzc4UE0vUEFqYVNySXJBbDRHdFFEL1FSSFdjQS80RVBHWm95dUVxajYwSlNWWmp3UDFrWTc0QmlGYnBJZ01jQlo0RG5qQTBKUTBnMk01YmdKZUI5UUhFbWdidU56VGx1UUI4bGNXTytZL0F1b0Jjdmcyc056UkZGMjNEa3dRakNFQU1lRWFTMWFDQ0xjZmpCQ2NJd0MzQUV3Q0NKS3VyZ0g4NS94cUxDblIyWkZ2aWUrZlNZNmFGV2NGaEU3RFVaVk1OVFZrYlRMekZTTExhQll4aHQzU0FsbWFSOXJZSUFKUFRtYk96S1hQR2g2c2xRS3VqYkFGWFI0RXZPbXV0N20zaDhSM2R0QzJLNUV5ZjdPdHBuZlFSNkFEd09pRFpKa1dTMVdXR3BvejdDSzVhMXVFUVpOWDFsL0QwSXl0b2JzbzFmTDdXMTlPNnQ1SVQreFo4QS9pMGJSS0FBUkhvY1ZhODkvT2RUa0Y4WTJqS2Z2c0VUbFpVN2NnZmx6c0xnOHBpcHlDK01UUmxCbkNMMXk0Q1JRcTB0bFR2M01HRXF5eDUxZ3FZV0VTb1hLazhHYmVoTGdVK3FvU2llQkNLNGtHMUk4QUZFU1JpbGxFb3R6ODY5MUpzOWRCY2tPY0FtSDNaV0p6OFphRzdzZ0wyNzBjVTM2MHBlazNteHZSUlI3OGQ1WW9hWXFxTXEvc2VFV1lEZGUvbmdydDhlNHRjbUtlTkcwTW9HVnZXZFFmNEVlVkxmcDNOajRoSDZvaWxacTQxVzl5bWdYcjgrUkZsZXp5aGIvRGp6RW9LU1dkWmYwcmFDSFFFL1p2NVRleGg1M21pbEl4VHRzWVQraDErWXZiQ1R6T0xBYS9GRS9ydmdQMUEyU0gvcHUwbnJ6MHhXdWhYTS84VjlmR3V3WXF2Q05VaXlXcWxUaVFHdkI1UDZIdUF2d0ZsMzRPKzkrT3hOZnZlbVM2eVZYUHZmYzcrbFdYbGltYWNvbHhrSXNBbSsxZVdtM3BiY0l0U2N2dk16OWYrZ0RQU0pjY0cvYlM4SUlqQUIwN0Qvb1BuYTNJMG5jeWd4Wk51ODVuYXdxcUk3aXdjcjZOMW5oeEx1VTJwS0xBUGVEQm4yZlBHQktPblVselgwMXhVTTRQRnFEQkxHcE9QV3kwME9SclpuR0h5OTMvb1RFek5Pdzg1RFp5b09kcUZHWFlXZnYvbUpOUEpERjJYbDQ0STNpZkZXU0hOVWt0aWlXdkVjUHFzNGRVSWhnVjdidllRc0RyWXVObG1hTXJPZ0gwQ0lNbXFBQndBbElCZER3TTNpNGFtbUdRN28vY0RkTDRIZTJxdkVSaWFZZ0gzVVRwVlVROVR3TDJHcGxpaWZaTGpnQXk4UW4yZDR3VHdFTERKRHJ4aEdKcHlERmdML0RrQWQwT0FZbWpLRWFCMDFDUEo2bVhBVFVEUk1MRnRlK3JuUXN5NkxGZlduMjI2eHp4Yk5GZzdBeHpLTFJOY1NDUlo3UUZ1eFBWV3RPZ2VZMU5rdVhsM3JweCtON0p6OXRYWWtLT0tBUncxTkdYRWVaenZLYXRscDRaR0taNjY3R2pFd0N4SWxwMGFlaFI0eEdIYU10NDF1THZTY2VGOGlnZWhLQjZFb25nUWl1SkJLSW9Ib1NnZWhLSjRFSXJpUVNpS0I2RW9Ib1NpZUJDSzRrRW9pZ2VoS0I2RW9uZ1FpdUpCS0lvSG9TZ2VoS0o0RUlyaVFja0NlN25aL05SYnFSWWhWbGkxMEo5dDJpREo2di8xYlA3c2I0M2V5UExDaHA3MHU1RitTVmFkayswTHorWkxzdG9OL0F6NEFsWE04cnVZQUI0RGZtSXZzalVVU1ZhdkEzWUJOZTlGc1JrQ3ZtR3ZmK1d6T0ZZQ2Y4VzFrN2tPOWdCM04zSkJUSkxWWHJLWkY1Y0c1SElLdU1YUWxDT2l2WmI4RXNFSkFuQVg4RUNBL29xdzE1SjNFNXdnQU8zQWk1S3NDb0lrcTU4Ri91RDhxOXkzS0wvcllPKytENSthbVROVFJJakVic2lzSW9vMGYwSThiTTBVYlVtOGhHeHFUTGZEZGhyb2FrUnJrV1Mxbit5bWdEenI1TGI4cm9QaG84blhqdjE3N2lSQXBOdnNqblJhVjJYT0NDT1pjZkcweTFVUDJlN0N5ZG9vY0x2VGN0ZWRsN0pqNjVYNTh2WXRTM2Zrc2ppTWR4WU10QU00UnFIRlhRbGNEeHl2ZkpsVjArOHNiTHp0WS96Z2dhSk5uTC9JWjNGb0N6dVNaUFVaNEt0TzN5TFpuSmM4QTJ2YWFvclMwSlFQeVhaWVR0dzVRRUhoek5GaDVZcm1jdlg4NE43Uldab1BFbzNXbFJIaDNoWlVsN09MUlRoNDh5QVV4WU5RRkE4Q3plSndzMml6c2I1ejcxRGdLWFBuZnpTL0puV2djYUg3OGV3N2FUdXl6THdxTTE1b2ZOR1Y1dmRyQ2FvUzBVK1lwQTRVeWxQQ2ZQbktOZURuOXVuMTdhelRXbDVITERVekpwVHNvMTFjano4L29uelhyek56VW1qVVp1SUZXV3FWTk9iTjlmanpjL3RzakNmMFhjQkRmVDJ0K2tJVk0vOFJSNEJiOCtWeDRZVllINlAxQkZqbVBHdUJPM1BsVGl2bXJuSkhQS0gvRk5qUjE5TmFzcVc2RW41N3E2OERtK01KL1NCUWRwLzZ0aDhtK3Q4YUx1aW03MnJhUGJIbDFqZXJEYW9Ta3F4K0c0Y29aZmdPMlpnUEFXWDNxZS84MVh2WFBQL0t1U0piTlYxNEt6QzRVSVdPeFExOW1OVkNKeFhFVzlKZUdyT0lLMWxabjZsOWJtaEtMOGw3TnJ6cUJVMDZVL3VMZU1iamNrVWc0VFM4K09vNXppZExMcTRpV2p6SmdYK1dkRG1COXljMlJWdm1oOVJwNWxMVi96UG5VaWI3RDA2N3pWTVZ2NHJoQnlOdDhjRmt5Vmpob24wVnd5OVQ1elBNekJXSmFRRlg1NllqbnllYkFCQVVKakJvYU1wZkF2UlpoTWM4U0JDOFlHaktmYmx4eWpmSmZ1WWpDTkxBMWtZS1l2TXRJTWh6dkkwOWhackw0cGdCTmdCZkladEhVL1d6bmV3M21YNE5mS3JSbng2Q2ZNeWZBYllCaDRGYXh2b1pJRTQyQ1d6QTBCUWQ0SCtEY0Vva3RTQU9od0FBQUFCSlJVNUVya0pnZ2c9PSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/step-1.png":
/*!********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/step-1.png ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/step-2.png":
/*!********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/step-2.png ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/step-3.png":
/*!********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/portfolio/step-3.png ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/blog-1.svg":
/*!***************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/blog-1.svg ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1NjUnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjYmRiZGJkJy8+PHRleHQgeD0nMjgyLjUnIHk9JzIwNScgZm9udC1zaXplPScyMCcgZm9udD0nVmVyZGFuYSwgc2Fucy1zZXJpZicgZmlsbD0nd2hpdGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnPjU2NSB4IDQwMDwvdGV4dD48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/blog-2.svg":
/*!***************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/blog-2.svg ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1NjUnIGhlaWdodD0nNDAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjYmRiZGJkJy8+PHRleHQgeD0nMjgyLjUnIHk9JzIwNScgZm9udC1zaXplPScyMCcgZm9udD0nVmVyZGFuYSwgc2Fucy1zZXJpZicgZmlsbD0nd2hpdGUnIHRleHQtYW5jaG9yPSdtaWRkbGUnPjU2NSB4IDQwMDwvdGV4dD48L3N2Zz4="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/feature-1.svg":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/feature-1.svg ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-1-2bc1a03b778a8a87ecb49f67de2f1638.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/feature-2.svg":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/feature-2.svg ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-2-20109a9c06ed43232881a846cc5a0694.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/feature-3.svg":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/feature-3.svg ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/feature-3-8ade03ae2dddec9a70b81eac83153261.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/footer.svg":
/*!***************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/footer.svg ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTU0LjY2NCIgaGVpZ2h0PSI2MTkiIHZpZXdCb3g9IjAgMCA1NTQuNjY0IDYxOSI+DQogIDxkZWZzPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4Mj0iMSIgeTI9IjEiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4NCiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIxMjE0MSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjE4NCIgc3RvcC1jb2xvcj0iIzIxMjE0MSIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjQ5MSIgc3RvcC1jb2xvcj0iIzg2NzNkNiIvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KICA8ZyBpZD0ibG9nb18iIGRhdGEtbmFtZT0ibG9nbyAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIiBvcGFjaXR5PSIwLjA0Ij4NCiAgICA8ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4NCiAgICAgIDxwYXRoIGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNNTU0LjY2NCwyNzYuODIxVjYxOUgyMzIuNEEzMTQuNTgzLDMxNC41ODMsMCwwLDAsNDk3LjEsNDc0LjY5NWMuMjYxLS40LjUyMi0uNzU1Ljc1NS0xLjEzOWEzMDAuNjU5LDMwMC42NTksMCwwLDAsNTAtMTY2LjA3M2MwLTguNzQzLS4zNTctMTcuMzktMS4xMzktMjUuOTR2LS4xcS0uMTUxLTIuMzA2LS40LTQuNjEyYy0uMzI5LTMuMjgtLjcxNC02LjU4OC0xLjIwOC05LjgyNy0uMTY1LTEuMjc2LS4zMjktMi41MjUtLjUyMi0zLjc2MUgyOTAuOTc1VjM1NC41SDQzNS4wOWEyMTkuMTQ5LDIxOS4xNDksMCwwLDEtMjAuMyw0NS43NzMsMTkxLjg3OCwxOTEuODc4LDAsMCwxLTMwLjQ4NCw0MC45MjhxLTUuNjU1LDUuODQ3LTExLjc5LDExLjEzMWwtLjI2MS4xOTJhMjIyLjg4NiwyMjIuODg2LDAsMCwxLTY2LjExNCw0MS43MjQsMjE4LjEyMiwyMTguMTIyLDAsMCwxLTQwLjQwNywxMi4wNzgsMjIzLjM3NywyMjMuMzc3LDAsMCwxLTQzLjEzOCw0LjI0MWMtMy4wMDYsMC02LS4xLTguOTc2LS4yMzNDOTQuMjYxLDUwNS41MjItLjAxNiw0MDcuMzUxLDAsMjg3LjlhMjI4LjgxNiwyMjguODE2LDAsMCwxLDEuMzczLTI0LjI2NkEyNzYuOTYxLDI3Ni45NjEsMCwwLDEsMzMyLjI2MSw1LjM2NmgwQzQ1OS4xMjMsMzAuNjQ4LDU1NC42NjQsMTQyLjU3Niw1NTQuNjY0LDI3Ni44MjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/footerapp.svg":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/footerapp.svg ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footerapp-805654b920e9ede177245be555dfc96c.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/footerplay.svg":
/*!*******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/footerplay.svg ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footerplay-a948ad06e12e88f30d127f4075299c10.svg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/ride/logo.svg":
/*!*************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/ride/logo.svg ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nb18iIGRhdGEtbmFtZT0ibG9nbyAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNi44ODIiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAyNi44ODIgMzAiPg0KICA8ZGVmcz4NCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDI9IjEiIHkyPSIxIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+DQogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3NzYzY2QiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMC4xODQiIHN0b3AtY29sb3I9IiM3YjY4ZDAiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMC40OTEiIHN0b3AtY29sb3I9IiM4NjczZDYiLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2I5YWZlNyIvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogIDwvZGVmcz4NCiAgPGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+DQogICAgPHBhdGggaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik0yNi44ODIsMTMuNDE2VjMwSDExLjI2M2ExNS4yNDYsMTUuMjQ2LDAsMCwwLDEyLjgyOS02Ljk5NGMuMDEzLS4wMTkuMDI1LS4wMzcuMDM3LS4wNTVBMTQuNTcyLDE0LjU3MiwwLDAsMCwyNi41NTIsMTQuOWMwLS40MjQtLjAxNy0uODQzLS4wNTUtMS4yNTd2MHEtLjAwNy0uMTEyLS4wMTktLjIyNGMtLjAxNi0uMTU5LS4wMzUtLjMxOS0uMDU5LS40NzYtLjAwOC0uMDYyLS4wMTYtLjEyMi0uMDI1LS4xODJIMTQuMXY0LjQyM2g2Ljk4NEExMC42MjEsMTAuNjIxLDAsMCwxLDIwLjEsMTkuNGE5LjMsOS4zLDAsMCwxLTEuNDc3LDEuOTg0cS0uMjc0LjI4My0uNTcxLjUzOWwtLjAxMy4wMDlhMTAuOCwxMC44LDAsMCwxLTMuMiwyLjAyMiwxMC41NzEsMTAuNTcxLDAsMCwxLTEuOTU4LjU4NSwxMC44MjYsMTAuODI2LDAsMCwxLTIuMDkxLjIwNmMtLjE0NiwwLS4yOTEsMC0uNDM1LS4wMTFBMTAuNzg4LDEwLjc4OCwwLDAsMSwwLDEzLjk1M2ExMS4wOSwxMS4wOSwwLDAsMSwuMDY3LTEuMTc2QTEzLjQyMywxMy40MjMsMCwwLDEsMTYuMS4yNmgwQTEzLjQxOCwxMy40MTgsMCwwLDEsMjYuODgyLDEzLjQxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/TokenProp_Logo.png":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/TokenProp_Logo.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/TokenProp_Logo-8a55a3c4c7410f4fb041b743abe53f10.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/banner/admin-new.png":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/banner/admin-new.png ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/admin-new-1c33d625fa7ad48dead4c1d3fe3fdbd0.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/banner/bannerObject1.png":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/banner/bannerObject1.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bannerObject1-7b4f73bff849e81f64abc3ef3ece17b7.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/illustration.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/illustration.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/map.png":
/*!************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/map.png ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/map-40ffdb360205f038eec59b94bd1010ed.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-1.png":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/particles/particle-1.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDA6MDcrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDA6MDcrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAwOjA3KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVmNmNkZTQyLTlmY2EtNGZhMC04ZGUxLWEyMTg1NGQ3NDcyYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRhNzE2MzE3LTNhNjItZjM0Yi05OGJkLTkwOGRlZDcwNjI0MyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZhNTM4NGRiLTU2NmEtNDc0Zi05NzI1LTg5NjEyNjYzMzY5OSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmE1Mzg0ZGItNTY2YS00NzRmLTk3MjUtODk2MTI2NjMzNjk5IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjA3KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWY2Y2RlNDItOWZjYS00ZmEwLThkZTEtYTIxODU0ZDc0NzJiIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjA3KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Rn/yhAAACM0lEQVRIiZ3Vu2tUQRQG8F8uV4sIPmIhBgTRgBo1UfG9orZi658g2Fhc/xIXa21sFTuxjeJbfFwIi4oGq0QLI4KmSJbVYua6s5vdmM0HA3PPzPnOOXPnfDO0NHFdH+zEOezAAj7gGebTTXlZ9POX97GP4xKy+L0Rx3AUDTzBbF/WFcjX4WJCnGII++OYiUE+D0J+CBvi/CduYitqGIsBYBd2NSfrX/EYjbwsWh2ZdJ15hqsYid8P8CJZ3xaDHOhR2Q88xbu8LJb02DCeEC/gTdf6N9zDjRh0MVnbIhxn0Zys7++V+RVsj/OpOFbCMI7HMZzYW7idZr47IV7Ey/8Qw0JeFlO4Lhzhz2jPcDYlryXzt8KxrAp5WSzlZfECtxLzaEU+Kvx9QklPV0vchZFkvliRp1lPa5c3KFKe91mMNh4Nf4TGGBjNyfo2oQ8qnucZTmk3xifhuq0FtYSnkZfFfIY9yYa1Zr1JaKwOngzrE2OH4g2A09oNOZOXxWxFnqrbZZzoCrgimpP1YRxOTP+qz/BIuH4Eab2AAud1dl0/HE+SmcvL4p9KZviCu/iVOAxH8msx2OY+xOsi+bKsaUtuAx+F8k4LIlQ5nxAeimmhub4m/ke0q5uPPMvIoYlXeC3c+5q21mSYwEHhcXiC7zGRCs+69bzXY9GKWU4LknBGWxqGhEYZ6/L5jXfdRP3e0AozcYzGSvZZ/ga0cL96IAYhrzCLO4JUnMRe4YbM4WFeFl96Of0FkzOGScuEADsAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-2.png":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/particles/particle-2.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDA6NTYrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDA6NTYrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAwOjU2KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4YTA5YTUyLTY3ZDEtNGNlZC1hMWMxLWNjMzcxMjhlYTE5OSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjkwYjk2NDM0LTk4ZjgtZjE0Mi04YjdiLWZiYzI5OGM3YWU4NyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmVkM2RlMjc2LWU0NTEtNDhhMy1iZGI1LTNjY2EzMTI5MThiMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWQzZGUyNzYtZTQ1MS00OGEzLWJkYjUtM2NjYTMxMjkxOGIxIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjU2KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjhhMDlhNTItNjdkMS00Y2VkLWExYzEtY2MzNzEyOGVhMTk5IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAwOjU2KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SIEDCAAACI0lEQVRIia3WTUtVURQG4MdzFbqYRVkYlGVNoshw0CSMwAJHBRX0EwoqamiNmlbTiIL6ETVoEGIfRB/TMFGaaGFBQRpxCwU/arD38Wzl6i29LxxYZ5113nfvtTZr7Yau63+sgEbsRRf2oBVlTGECo3iHD5hdiaQaMnTjJDZW+V7GjvgcRQVP8KKaWDWRNpyPBP+KFpzFYTzA15VEOnAFzYlvAm8wEu1fWI+t6MQhIY3iwq7iNsZygoakJttwTUgFzOARnmNuhV2U0INTaIq+KdzMd5QlgecSgQpuYaCGgPh9IMZXoq8spLyUihxX1GAWdzFeg3wpxuN/eeG3R16ZsMXeJPihcDRXg9H4f45eNGVC8Vqic1KowVrwLPKIvAdzkRyv1a5BLcxHnhwHMuxKHCNrFMgxnNgdGTYnju91EvmW2JsyxbGF33USSXnKGaYTR7P6IOWZzhQnAbbUSaQtsX9k+Jg49tVJZH9ij2UYShzdii6wWuRjIsdQhkFFz9mMY2sU6VGc2AoGM6Hb9idBp4UpuBrsxpnkvR8zeWqe4nO0G3ER7f8p0I5Lihn1JfIu5H9OmGhT8b0FfUIXLdUgL8W4PkUPnML9yLtoaBFazOUkmGIyDgtDaBobVJ+MhDrckZzapSKEol3Azho7qIZx3IsLW0C1i8QkbuAITqh+W1mKn3iMV0IXXoTlrkTzeIm3Qko6hVS2Yp2Qsgl8wvv4zCy3gr/TBXWxkywiXgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-3.png":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/particles/particle-3.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDE6NDIrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDE6NDIrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAxOjQyKzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwYThhZjdiLWUxOGYtNDRmOS1hNzg0LWFkMzk5OTMwZWVjOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmIyODhmNDdjLTAzZmEtNTY0Ni05NGNkLTMwYTQyYzU1NTk3ZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjgwNmZlYzM0LWQ2ZTEtNDcyNi05MjJkLWVkOWE1YzEzZjBiNyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODA2ZmVjMzQtZDZlMS00NzI2LTkyMmQtZWQ5YTVjMTNmMGI3IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAxOjQyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTBhOGFmN2ItZTE4Zi00NGY5LWE3ODQtYWQzOTk5MzBlZWM4IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAxOjQyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ljSKRAAABS0lEQVQ4ja3Tv0pcURDH8U+uq5ZiuIWxSSEYIVWqLTaglSjiC9jl5XyAy8UUa9YHCCYs2sRGERExneAiFrsWO4vHy/5xYae5v5n5zZfDmXM//N/fO8C62cW/DCszBMKnDK0ZQ1s1tPENn6N4gcMpIOn1XaOdoYef6EZj3fvv+Evi7eIoL8peFoU7nCbmHdQmAGvhG8RpXpR3kCXFE3RCf0RjArSB5dCdmFeFdnCc5N+xNAK4FP1B/MqLcnCgN1D4i9vQ89geAd2NvvD/SZtVaA9H8YWvWKt41rCR+vOi7KWGKhRu9J9Zeqq50HORD6KdF+VNFTAMCk08hc5RD12PXPSbw4ZHQR8l28QmVrGV1E7C924o/MZ96EX8wELk99EfGuOgXW+XNp/00j9wKihc4bxSO8PluKFJUPrLeA79bMRypoU+eH0NzcjHxgsLtUxOm5qSqgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-4.png":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/particles/particle-4.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDI6MjQrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDI6MjQrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAyOjI0KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJiODg1MTE5LTUxNGItNGQ0YS04M2Q4LTNkNWMwMzE4MGFhYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjA4ZWQyYjJmLTZlZjktYzg0Yi04NDJlLTJmMzRlNWZlYzY3MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY3MGFiOTU2LTI1ODktNDNiZi1iMDI5LWUxZjdjZjAzMDRlZCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjcwYWI5NTYtMjU4OS00M2JmLWIwMjktZTFmN2NmMDMwNGVkIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAyOjI0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YmI4ODUxMTktNTE0Yi00ZDRhLTgzZDgtM2Q1YzAzMTgwYWFjIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAyOjI0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7iscQUAAAC10lEQVRYhb3XW4jUdRQH8M9uq4Y3DImQ9UFIuqBdMCSFHqQiehAEyQdpC0IkrVRCRbogUT74kFoaTUX4oAWB5IMGPXSBgrDAxMva2hIRUoj2kC5rgrnawznLTNvOzv8/jnNg+H/nzPmf8/2f/+9cpqOnd8AoMg67MRHPYFSjVkhXHf396El8Bi/cKAKddfTH0J94Fea3m8BlPJf4JryX17YRgK/wceJ5eL7dBGA9zid+A90tijseCzC+EYGzeCnxVOxoQfBHcAKHUGlEAD7AD4mX4fEmA9+GvfgSd6RuahECV0UlXMnv7+DmEoE78SxOqZb2EHZiRRECcBS7Et+OVwvedx++E1U0LXWH8SDWYaAoAdiM3xNvwF1j2E7G9gy2IHUXsDaD/zhsWIbAoGANE1BBxyh2S9GHF1U77Se4W2Txaq1xGQKwH58lXqT6TmEWDuJTzEzdL3gMy0VL/5+UJQBr8HfibeJ0b8JJLE79ZbyOe/HFWM7qDaOx5Ld0vhW3iqecXPP716KN/1zEWTMZgD24mHg4+Dk8jUeLBm+GQAdWiE42qUZ/EfeIRnOtjMMyBObiW3yI6akbzOsksbiUliIEJor3fQQP1QTeiNn4M3WbRSW0lMBicbo3iTUNDmAO3hTDamMN0V0jHTRLoBv7RF3PSt1pLMnP6RrbPfimhvDS6yHQJbpdH55I3RXxtHPE04+Ua1gtah/e9t+yLExgvhi7b2FK6g7hAZHmQfWlL0kSXfC1MgSmiBH7vVi9iC1olTh0xwv62oJfE68Tk7AQgYrY94az8ZGYdO8bMTgayCXV9b0r/Tassk7VjtYvuthT4nQ3I5+LwwsLsbLRDR09vQPjRLqOqx6k65Fu/CR2yL9ENs/VM+7EP2JxaEVw+AOvJL5FTMy60uwwaiQV1a3nSTzcbgJDYhEdEgPsXfFfoG0EiAxUEt+pTlk2s5CUkZcxQzSxo6MZ/Av4qY3UFBHrKQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-5.png":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/particles/particle-5.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDMrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDMrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAzKzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0N2I3NmExLWZkZTgtNDI3MC04ODRhLTFhMmYxOTZiYmZhNiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmYxMjU1NGU4LTE4YjEtZGQ0Ni1hNThjLWUzYjk0NmEwMTU1YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcwYjk5MjM2LTQyNmEtNDk5ZC1iMTYyLTlmYjQxNDJjOWE0YiIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzBiOTkyMzYtNDI2YS00OTlkLWIxNjItOWZiNDE0MmM5YTRiIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDQ3Yjc2YTEtZmRlOC00MjcwLTg4NGEtMWEyZjE5NmJiZmE2IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6djlKbAAABaElEQVQ4jZ3UT0tWQRTH8c8d2gjGQy/gEQIJX4K4KfyzbBe6Eqqdyyjc2DIXgeHS5SNom2gj7VKjiODBVyBtggq38mAgtuhpMefq5XoFr7/NzDlzznfm3jNnimF/ToOmsRDjWPh+4hPeYb+eUNRAE9jAgyZ6RZ+xhMPScauyeB8fcDvsP9jDj7DvYhajsdEBHuJLFTSBnYD8wxusYlA7SQcreB6xO5jEYUKBXgQN8RjLDRDhW46YYeT0UCTMBBXWsdUAqGsLazGfxEzCfDhO8eoakFKrkQPzSS4xuaTHLUADF9dgOqEbxvcWkFJlTjfh7AaAS0o4ivm9G+SPx/g7yReLXL07LSAdlG3xLeFtGCN42QK0EjmwnfAR/XA8w+I1IIt4EfM+dpN8Q5/I5Sywiddx9Lo6sbYZsQM8xbDa/W2aFk5UmrbpGem5aJmr1I+vaHxGxMKUXI1HciW7+Itf+Ir32JV/ybn+A++eUzAelEAkAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/particles/particle-6.png":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/particles/particle-6.png ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDEtMTBUMTM6MDM6NDQrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDEtMTBUMTM6MDM6NDQrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEwVDEzOjAzOjQ0KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1Mjk3Y2IxLTk2MGEtNDEzNC1iMzNkLTRlYjgwZWJjNjAzNiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdiYjMzYWRkLTY4N2EtNmM0YS04ZmFmLTRlYzhiMThmMzY3NCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZlYzUwNGZmLTUzMGQtNDMwMi05ZjJkLTYyMDk3NTQ3OGRkZSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmVjNTA0ZmYtNTMwZC00MzAyLTlmMmQtNjIwOTc1NDc4ZGRlIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzOjQ0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDUyOTdjYjEtOTYwYS00MTM0LWIzM2QtNGViODBlYmM2MDM2IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEwVDEzOjAzOjQ0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IbxF+AAACV0lEQVRIibWWPWgUQRTHf6tnIgaJnhEdsQinkLOJ8btx7cTCQuwEbcRO0mihoIagGLCxEgSxsbCxEcHWytEuGsTicgG/lQXRwfMIISB3FjPLvWz2dm7vkgcLb/8z83579+bNm2D7y99k2AAw7vwHwJ/khCgsZq1fZgXP+EngqPN3AteAei5CwtZ4xg8IfxiYBDasFnAjUE5oI8B1oH81gGNivA40nT8KXMWfjtxA+Xc+Ax6J90PAZc/6XMAgAXwDPAWeCC0ExpU2wUoAS8Am5xvgo/MfA8/FvOPAhZUAHhT+DK38ATwEXoj3U0qbs70C9wt/OjHWBO4Br4R2RmlzulugLIcG8C5lTgO4m/iY80qbE90A9wp9lvYnyz/gDvDevQfARaXNsbxAmb+3WYuBRWAKqIp4l5Q2RzoFBmTnb5lFYXEeuAV8dlIBuKK0Ge0EWAI2O79Gqxx80L/YczZyUh8wobQZ8QFlsU+ztBx8UAPcAH45aT1wU2kz3CnQl7806E8HrTlpALittNmRBkyWw0xeoIP+ACaAeScNAlNKm61JoCyHKj002igsfsLmdNFJQw46KFtMnnJINaXNNmzPLAN7WNrCFHAuFgJgnxj0lgOwDtittImDl2nt8HZWj4ElIL4N1YAPKZO3iMBlYBf+JtwAvgEV7In0Ol6Q7H1rXcCyeIY8wcFulFnxVKOwuCAnpAHHsI22zxO8CXx3gSvAHPA1CouZtVvA1oq8LLW7aC5gd++c+AX1bu6l/dhNk7RIBK4AX7A56ckK2CvEfeCwCxpDahnrurb/7GOVLT6LtEwAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/partner.png":
/*!****************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/partner.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/saas-banner.jpg":
/*!********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/saas-banner.jpg ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/saas-banner-86cc97d93fd238ea62407d1a850a7467.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/saasvisitor1.png":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/saasvisitor1.png ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/testimonial/client-1.jpg ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/saas/visitor_bg.png":
/*!*******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/assets/image/saas/visitor_bg.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/visitor_bg-9288fa7e875e8850b7e0b31eb3a6ffc3.png";

/***/ }),

/***/ "../../node_modules/common/src/components/Accordion/accordion.style.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/Accordion/accordion.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: AccordionWrapper, AccordionItemWrapper, OpenIcon, CloseIcon, AccordionTitleWrapper, AccordionBodyWrapper, IconWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionWrapper", function() { return AccordionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemWrapper", function() { return AccordionItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenIcon", function() { return OpenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTitleWrapper", function() { return AccordionTitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionBodyWrapper", function() { return AccordionBodyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion */ "react-accessible-accordion");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: 30px;\n  width: 40px;\n  position: relative;\n\n  ", ",\n  ", " {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    transition: 0.25s ease-in-out;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: 0.35s ", " ease-in;\n  &.accordion__body--hidden {\n    animation: 0.35s ", " ease-in;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n\n  &[aria-selected='false'] {\n    ", " {\n      opacity: 0;\n    }\n    ", " {\n      opacity: 1;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  * {\n    flex-grow: 1;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  opacity: 0;\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var AccordionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["Accordion"])(_templateObject2());
var AccordionItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"])(_templateObject3());
var OpenIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var AccordionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemTitle"])(_templateObject6(), OpenIcon, CloseIcon);
var AccordionBodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionItemBody"])(_templateObject7(), fadeIn, fadeIn);
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject8(), OpenIcon, CloseIcon);

/***/ }),

/***/ "../../node_modules/common/src/components/Accordion/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/Accordion/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionTitle, AccordionBody, IconWrapper, OpenIcon, CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTitle", function() { return AccordionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionBody", function() { return AccordionBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "../../node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _accordion_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.style */ "../../node_modules/common/src/components/Accordion/accordion.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["IconWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenIcon", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["OpenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"]; });

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/Accordion/index.js";





var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      children = _ref.children;
  // Add all classs to an array
  var addAllClasses = ['reusecore__accordion']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children);
};

var AccordionItem = function AccordionItem(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      expanded = _ref2.expanded;
  // Add all classs to an array
  var addAllClasses = ['accordion__item']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemWrapper"], {
    className: addAllClasses.join(' '),
    expanded: expanded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, children);
};

var AccordionTitle = function AccordionTitle(_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  // Add all classs to an array
  var addAllClasses = ['accordion__header']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionTitleWrapper"], {
    className: addAllClasses.join(' '),
    hideBodyClassName: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, children);
};

var AccordionBody = function AccordionBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children;
  // Add all classs to an array
  var addAllClasses = ['accordion__body']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionBodyWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, children);
};

Accordion.propTypes = {
  /** ClassName of the Accordion. Default class is reusecore__accordion*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionItem.propTypes = {
  /** ClassName of the AccordionItem. Default class is accordion__item */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionTitle.propTypes = {
  /** ClassName of the AccordionTitle. Default class is accordion__header */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionBody.propTypes = {
  /** ClassName of the AccordionBody. Default class is accordion__body */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};


/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/FeatureBlock/featureBlock.style.js ***!
  \********************************************************************************************************************************/
/*! exports provided: IconWrapper, ContentWrapper, ButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  &.icon_left {\n    display: flex;\n    .icon__wrapper{\n      flex-shrink: 0;\n    }\n  }\n  &.icon_right {\n    display: flex;\n    flex-direction: row-reverse;\n    .content__wrapper {\n      text-align: right;\n    }\n    .icon__wrapper{\n      flex-shrink: 0;\n    }\n  }\n\n  /* styled system prop support */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // FeatureBlock wrapper style

var FeatureBlockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["overflow"]); // Icon wrapper style

var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["overflow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"]); // Content wrapper style

var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"]);

/* harmony default export */ __webpack_exports__["default"] = (FeatureBlockWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/FeatureBlock/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _featureBlock_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featureBlock.style */ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/FeatureBlock/index.js";




var FeatureBlock = function FeatureBlock(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      button = _ref.button,
      description = _ref.description,
      iconPosition = _ref.iconPosition,
      additionalContent = _ref.additionalContent,
      wrapperStyle = _ref.wrapperStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "icon", "title", "button", "description", "iconPosition", "additionalContent", "wrapperStyle", "iconStyle", "contentStyle", "btnWrapperStyle"]);

  // Add all classs to an array
  var addAllClasses = ['feature__block']; // Add icon position class

  if (iconPosition) {
    addAllClasses.push("icon_".concat(iconPosition));
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // check icon value and add


  var Icon = icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "icon__wrapper"
  }, iconStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), icon);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), Icon, title || description || button ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ContentWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "content__wrapper"
  }, contentStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), title, description, button && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "button__wrapper"
  }, btnWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), button)), additionalContent) : '');
};

FeatureBlock.propTypes = {
  /** ClassName of the FeatureBlock */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
FeatureBlock.defaultProps = {
  iconPosition: 'top'
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureBlock);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glide.style.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/glide.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  margin: 10px 3px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #D6D6D6;\n\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // Glide wrapper style

var GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]); // Glide slide wrapper style

var GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject2(), styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"]); // ButtonControlWrapper style

var ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"]); // BulletControlWrapper style

var BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"]); // BulletButton style

var BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject6(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"]); // default button style

var DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject7());

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/glideSlide.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");
var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/glideSlide.js";


 // Glide Slide wrapper component

var GlideSlide = function GlideSlide(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_2__["GlideSlideWrapper"], {
    className: "glide__slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GlideSlide);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/GlideCarousel/index.js";






var GlideCarousel = function GlideCarousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      options = _ref.options,
      controls = _ref.controls,
      prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevWrapper = _ref.prevWrapper,
      nextWrapper = _ref.nextWrapper,
      bullets = _ref.bullets,
      numberOfBullets = _ref.numberOfBullets,
      buttonWrapperStyle = _ref.buttonWrapperStyle,
      bulletWrapperStyle = _ref.bulletWrapperStyle,
      bulletButtonStyle = _ref.bulletButtonStyle,
      carouselSelector = _ref.carouselSelector;
  // Add all classs to an array
  var addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  var totalBullets = [];

  for (var i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default.a(carouselSelector ? "#".concat(carouselSelector) : '#glide', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options));
    glide.mount();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, children)), controls && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), prevButton ? prevButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Prev")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), nextButton ? nextButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Next"))), bullets && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, totalBullets.map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index,
      className: "glide__bullet",
      "data-glide-dir": "=".concat(index)
    }, bulletButtonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  }))));
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** bulletWrapperStyle is a bullet control wrapper style object prop.
   * It's contain display, space, alignItems,
   * justifyContent and flexWrap style-system prop.
   */
  bulletWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** buttonWrapperStyle is a button control wrapper style object prop.
   * It's contain same as buttonWrapperStyle style-system prop and
   * position, left, right, top and bottom.
   */
  buttonWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** prevWrapper is a previous button wrapper style object prop.
   * It's contain display, space, bg, borders, boxShadow, borderRadius,
   * position, top, left, right and bottom style-system prop.
   */
  prevWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** nextWrapper is a next button wrapper style object prop.
   * It's contain same as prevWrapper style-system prop.
   */
  nextWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** bulletButtonStyle is a bullet button style object prop.
   * It's contain  display, width, height, space,
   * bg, borders, boxShadow and borderRadius style-system prop.
   */
  bulletButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
}; // GlideCarousel default props

GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 0;\n  background: transparent;\n  width: 44px;\n  height: 30px;\n  cursor: pointer;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  > span {\n    display: block;\n    width: 100%;\n    height: 2px;\n    margin: 4px 0;\n    float: right;\n    background-color: ", ";\n    transition: all 0.3s ease;\n    &:first-child {\n      margin-top: 0;\n    }\n    &:last-child {\n      width: calc(100% - 10px);\n      margin-bottom: 0;\n    }\n  }\n  &:focus,\n  &:hover {\n    outline: none;\n    > span {\n      &:last-child {\n        width: 100%;\n      }\n    }\n  }\n\n  &:focus {\n    > span {\n      &:first-child {\n        transform: rotate(45deg);\n        transform-origin: 8px 50%;\n      }\n      &:nth-child(2) {\n        display: none;\n      }\n      &:last-child {\n        width: 100%;\n        transform: rotate(-45deg);\n        transform-origin: 9px 50%;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HamburgMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenuWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/HamburgMenu/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburgMenu.style */ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/HamburgMenu/index.js";




var HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

HamburgMenu.propTypes = {
  /** ClassName of the Hamburg menu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** barColor allow to change hambrug menu's bar color. */
  barColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** wrapperStyle prop allow to change Hamburg menu bg color, width, height, space, boxShadow, border and borderRadius.*/
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/ScrollSpyMenu/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/ScrollSpyMenu/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/ScrollSpyMenu/index.js";






var ScrollSpyMenu = function ScrollSpyMenu(_ref) {
  var className = _ref.className,
      menuItems = _ref.menuItems,
      drawerClose = _ref.drawerClose,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "menuItems", "drawerClose"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__["DrawerContext"]),
      dispatch = _useContext.dispatch; // empty array for scrollspy items


  var scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(function (item) {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  var addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  var toggleDrawer = function toggleDrawer() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), menuItems.map(function (menu, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "menu-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, drawerClose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      onClick: toggleDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, menu.label));
  }));
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/UI/Container/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "../../node_modules/common/src/components/UI/Container/style.js");
var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/UI/Container/index.js";



var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      noGutter = _ref.noGutter,
      mobileGutter = _ref.mobileGutter,
      width = _ref.width;
  // Add all classs to an array
  var addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/style.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/components/UI/Container/style.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        padding-left: 30px;\n        padding-right: 30px;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      padding-left: 30px;\n      padding-right: 30px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        padding-left: 0;\n        padding-right: 0;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: 100%;\n      max-width: none !important;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: auto;\n  margin-right: auto;\n  ", ";\n  ", ";\n  @media (min-width: 768px) {\n    max-width: 750px;\n    width: 100%;\n  }\n  @media (min-width: 992px) {\n    max-width: 970px;\n    width: 100%;\n  }\n  @media (min-width: 1220px) {\n    max-width: ", ";\n    width: 100%;\n  }\n  @media (max-width: 768px) {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
}, function (props) {
  return props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3()) || Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4());
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5());
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/BlogSection2/blogSection.style.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/BlogSection2/blogSection.style.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    padding: 60px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 40px 0;\n  }\n\n  .feature__block {\n    &.blog__post {\n      border-radius: 5px;\n      overflow: hidden;\n      position: relative;\n      width: calc(100% / 3 - 24px);\n      height: 450px;\n      margin: 0 12px 20px 12px;\n      transition: all 0.3s ease;\n      @media only screen and (max-width: 1200px) {\n        height: 400px;\n      }\n      @media only screen and (max-width: 991px) {\n        width: calc(100% / 2 - 24px);\n        margin-bottom: 24px;\n        &:first-child {\n          width: 100%;\n        }\n      }\n      @media only screen and (max-width: 767px) {\n        width: calc(100% - 24px);\n      }\n      .icon__wrapper {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n      .content__wrapper {\n        opacity: 0;\n        visibility: hidden;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        padding: 25px;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        background-color: rgba(0, 0, 0, 0.9);\n        background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n        transition: all 0.3s ease;\n        a {\n          transform: translateY(50px);\n          transition: all 0.3s ease;\n        }\n        p {\n          transform: translateY(50px);\n          transition: all 0.35s ease;\n        }\n      }\n\n      &:hover {\n        .content__wrapper {\n          opacity: 1;\n          visibility: visible;\n          a {\n            transform: translateY(0);\n          }\n          p {\n            transform: translateY(0);\n          }\n        }\n      }\n      &:first-child {\n        .content__wrapper {\n          @media (max-width: 990px) {\n            opacity: 1;\n            visibility: visible;\n            a {\n              transform: translateY(0);\n            }\n            p {\n              transform: translateY(0);\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BlogSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (BlogSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/BlogSection2/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/BlogSection2/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
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

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/NewsletterSection/index.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/NewsletterSection/index.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _newsletterSection_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newsletterSection.style */ "../../node_modules/common/src/containers/Agency/NewsletterSection/newsletterSection.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/NewsletterSection/index.js";









var NewsletterSection = function NewsletterSection(_ref) {
  var sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      btnStyle = _ref.btnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_newsletterSection_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "newsletterSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Subscribe Newsletter"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_newsletterSection_style__WEBPACK_IMPORTED_MODULE_8__["NewsletterForm"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inputType: "email",
    isMaterial: false,
    placeholder: "Email Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "button",
    title: "SEND MESSAGE"
  }, btnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))))));
}; // NewsletterSection style props


NewsletterSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // NewsletterSection default style

NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px'
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
  // button default style
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (NewsletterSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/NewsletterSection/newsletterSection.style.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/NewsletterSection/newsletterSection.style.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: NewsletterForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterForm", function() { return NewsletterForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 488px;\n  margin: 0 auto;\n  @media (max-width: 575px) {\n    flex-direction: column;\n    max-width: 100%;\n  }\n\n  .reusecore__input {\n    flex: 1;\n    margin-right: 20px;\n    @media (max-width: 575px) {\n      margin: 0 0 20px 0;\n      width: 100%;\n    }\n    .field-wrapper {\n      input {\n        min-height: 45px;\n      }\n    }\n    &.is-material {\n      label {\n        font-size: 14px;\n        top: 14px;\n        font-weight: 500;\n        color: rgba(51, 61, 72, 0.4);\n      }\n      &.is-focus {\n        label {\n          top: -12px;\n        }\n      }\n    }\n  }\n\n  .reusecore__button {\n    flex-shrink: 0;\n    transition: all 0.3s ease;\n    @media (max-width: 575px) {\n      width: 100%;\n    }\n    &:hover {\n      box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    padding: 40px 0 60px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var NewsletterSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
var NewsletterForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());

/* harmony default export */ __webpack_exports__["default"] = (NewsletterSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/TeamSection/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/TeamSection/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _teamSection_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teamSection.style */ "../../node_modules/common/src/containers/Agency/TeamSection/teamSection.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/TeamSection/index.js";











var TeamSection = function TeamSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      memberName = _ref.memberName,
      designation = _ref.designation,
      contentStyle = _ref.contentStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_teamSection_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "teamSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "TEAM MEMBERS"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Meet with team member"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), _data_Agency__WEBPACK_IMPORTED_MODULE_8__["default"].teamMember.map(function (member, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: "team_key-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "member-".concat(member.id),
      className: "team__member",
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        src: member.thumbnail_url,
        alt: "Team member photo ".concat(member.id),
        className: "member__photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }),
      contentStyle: contentStyle,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: member.name
      }, memberName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: member.designation
      }, designation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_teamSection_style__WEBPACK_IMPORTED_MODULE_10__["SocialLinks"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, member.social_links.map(function (social, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          key: "profile_id-".concat(index),
          className: social,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }))));
}; // TeamSection style props


TeamSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  memberName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // TeamSection default style

TeamSection.defaultProps = {
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
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // Team member content default style
  contentStyle: {
    textAlign: 'center',
    mt: '25px'
  },
  // Team member memberName default style
  memberName: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em'
  },
  // Team member description default style
  designation: {
    fontSize: ['15px', '16px', '14px', '17px'],
    lineHeight: '1',
    color: 'rgba(15, 33, 55, 0.6)',
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TeamSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/TeamSection/teamSection.style.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/TeamSection/teamSection.style.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: SocialLinks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return SocialLinks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 12px;\n  > button {\n    margin: 3px;\n    cursor: pointer;\n    width: 30px;\n    height: 24px;\n    line-height: 20px;\n    background-color: transparent;\n    border-radius: 3px;\n    border: 1px solid rgba(15, 33, 55, 0.26);\n    color: #0f2137;\n    transition: all 0.2s ease;\n    &:hover,\n    &:focus {\n      outline: none;\n      &.flaticon-facebook-logo {\n        color: #ffffff;\n        border-color: #3c5a99;\n        background-color: #3c5a99;\n      }\n      &.flaticon-twitter-logo-silhouette {\n        color: #ffffff;\n        border-color: #1da1f2;\n        background-color: #1da1f2;\n      }\n      &.flaticon-instagram {\n        color: #ffffff;\n        border-color: #fb3958;\n        background-color: #fb3958;\n      }\n      &.flaticon-dribble-logo {\n        color: #ffffff;\n        border-color: #ea4c89;\n        background-color: #ea4c89;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    padding: 60px 0;\n  }\n\n  .team__member {\n    .icon__wrapper {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TeamSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
var SocialLinks = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());

/* harmony default export */ __webpack_exports__["default"] = (TeamSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/VideoSection/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/VideoSection/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _videoSection_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videoSection.style */ "../../node_modules/common/src/containers/Agency/VideoSection/videoSection.style.js");
/* harmony import */ var _assets_image_agency_preview_image_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/image/agency/preview-image.jpg */ "../../node_modules/common/src/assets/image/agency/preview-image.jpg");
/* harmony import */ var _assets_image_agency_preview_image_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_preview_image_jpg__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/VideoSection/index.js";












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
    content: "PROPX Exchange"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "A Dedicated Exchange Platform for Property Tokens"
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

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/VideoSection/videoSection.style.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/VideoSection/videoSection.style.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0;\n  overflow: hidden;\n\n  @media (max-width: 990px) {\n    padding: 60px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 30px 0 60px 0;\n  }\n\n  .figure {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n\n    img {\n      border-radius: 4px;\n    }\n\n    .fig__caption {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 2;\n\n      .reusecore__button {\n        .btn-icon {\n          background-color: ", ";\n          line-height: 0.4;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var VideoSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ __webpack_exports__["default"] = (VideoSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/VideoSection2/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/VideoSection2/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
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
    content: "Token Prop Overview"
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

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/VideoSection2/videoSection.style.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Agency/VideoSection2/videoSection.style.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0;\n  overflow: hidden;\n\n  @media (max-width: 990px) {\n    padding: 60px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 30px 0 60px 0;\n  }\n\n  .figure {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n\n    img {\n      border-radius: 4px;\n    }\n\n    .fig__caption {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 2;\n\n      .reusecore__button {\n        .btn-icon {\n          background-color: ", ";\n          line-height: 0.4;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var VideoSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ __webpack_exports__["default"] = (VideoSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Clients2/clients.style.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Clients2/clients.style.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: ClientsImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsImage", function() { return ClientsImage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  padding: 20px 28px;\n  flex-shrink: 0;\n  &:hover {\n    img {\n      filter: grayscale(0);\n      opacity: 1;\n    }\n  }\n\n  img {\n    filter: grayscale(1);\n    opacity: 0.5;\n    transition: 0.3s ease-in-out;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ClientsImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Clients2/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Clients2/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
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

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Process2/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Process2/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/feather/plus */ "react-icons-kit/feather/plus");
/* harmony import */ var react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var _process_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process.style */ "../../node_modules/common/src/containers/Portfolio/Process2/process.style.js");
/* harmony import */ var _data_Portfolio_data2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/Portfolio/data2 */ "../../node_modules/common/src/data/Portfolio/data2.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Process2/index.js";














var ProcessSection = function ProcessSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      processRow = _ref.processRow,
      processCol = _ref.processCol,
      processImageStyle = _ref.processImageStyle,
      processTitleStyle = _ref.processTitleStyle,
      processDescriptionStyle = _ref.processDescriptionStyle,
      learningRow = _ref.learningRow,
      learningContentArea = _ref.learningContentArea,
      learningListArea = _ref.learningListArea,
      learningTitle = _ref.learningTitle,
      learningSubTitle = _ref.learningSubTitle,
      learningDescription = _ref.learningDescription,
      buttonWrapper = _ref.buttonWrapper,
      buttonLabelStyle = _ref.buttonLabelStyle,
      buttonStyle = _ref.buttonStyle,
      learningList = _ref.learningList,
      listItem = _ref.listItem,
      listText = _ref.listText,
      listTitle = _ref.listTitle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    id: "process_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "How Token Prop Works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "TokenProp enables Developers to raise equity Capital from Investors worldwide who seek stable Real estate returns.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), "\xA0\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "The Platform tokenizes the portion of equity in the Property available for sale in the form of security tokens, the tokens are purchased by prospective investors, who now hold limited partnership in the Property. These Tokens can be stored in the user\u2019s wallet to receive dividends from the Property income in fiat or they can be traded with other Property Tokens on our P2P exchange called PropX.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, processRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), _data_Portfolio_data2__WEBPACK_IMPORTED_MODULE_13__["PROCESS_STEPS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, processCol, {
      key: "process-item-".concat(index),
      className: "process_item_col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_process_style__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "process_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      src: item.image,
      alt: "process-image-".concat(index + 1)
    }, processImageStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.title
    }, processTitleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.description
    }, processDescriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningContentArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "What is TPROP Token?"
  }, learningTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "With TPROP, you can participate in the various Property Token listings available for Investment globally. On the platform, the token can be used for"
  }, learningSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningDescription, {
    content: "TokenProp is a Blockchain based Real estate Investment Platform which offers exceptional investment options and one of its kind trading experience with properties all over the world. TPROP is the Platform\u2019s native ERC20 utility Token for use in the TokenProp ecosystem.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningDescription, {
    content: "While at Neverbland over the last few years, I've worked on web and product solutions for a range of startups, in a variety of industries.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Tokenize Your Project ?"
  }, buttonLabelStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_11__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "Buy TPROP",
    className: "portfolio_button"
  }, buttonStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningListArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), _data_Portfolio_data2__WEBPACK_IMPORTED_MODULE_13__["SERVICE_LIST"].map(function (serviceList, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningList, {
      key: "serviceList-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: serviceList.title
    }, listTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })), serviceList.listItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, listItem, {
        key: "list-item-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        icon: item.icon || react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10__["plus"],
        size: item.iconSize || 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        as: "span",
        content: item.content
      }, listText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })));
    }));
  })))));
};

ProcessSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processCol: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processImageStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processTitleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processDescriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningContentArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningListArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonLabelStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  listItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  listText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  listTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '140px'],
    pb: ['10px', '40px', '30px', '50px', '50px']
  },
  secTitleWrapper: {
    mb: ['60px', '105px']
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
    textAlign: 'center'
  },
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-30px', '-70px', '-70px'],
    mr: ['0', '-15px', '-30px', '-70px', '-70px']
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '30px', '70px', '70px'],
    pr: ['0', '15px', '30px', '70px', '70px'],
    mb: '40px'
  },
  processImageStyle: {
    ml: 'auto',
    mr: 'auto',
    mb: '35px'
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    textAlign: 'center',
    mb: ['20px', '20px', '27px', '27px', '27px']
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    textAlign: 'center',
    lineHeight: '1.5'
  },
  learningRow: {
    flexBox: true,
    flexWrap: 'wrap',
    mt: ['20px', '30px', '70px', '80px', '110px']
  },
  learningContentArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
    pr: ['0px', '0px', '60px', '80px', '160px'],
    mb: ['70px', '70px', '0', '0', '0']
  },
  learningTitle: {
    fontSize: ['22px', '22px', '24px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['20px', '20px', '15px', '20px', '20px'],
    pr: ['0', '0', '0', '65px', '65px']
  },
  learningSubTitle: {
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '20px',
    pr: ['0', '0', '0', '65px', '65px']
  },
  learningDescription: {
    fontSize: '16px',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '25px'
  },
  buttonWrapper: {
    flexBox: true,
    alignItems: 'center',
    mt: ['30px', '40px', '40px', '80px', '80px'],
    flexWrap: ['wrap']
  },
  buttonLabelStyle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#3444f1',
    mb: ['20px', '20px', '20px', '0', '0'],
    mr: '30px',
    width: ['100%', '100%', '100%', 'auto', 'auto']
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px'
  },
  learningListArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  learningList: {
    width: ['100%', '33.3333333%', '50%', '50%', '50%'],
    pl: ['0', '0', '35px', '35px', '35x'],
    pr: ['0', '30px', '0', '0', '0'],
    mb: ['40px', '40px', '60px', '80px', '90px']
  },
  listTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#302b4e',
    mb: '25px'
  },
  listItem: {
    flexBox: true,
    alignItems: 'center',
    color: '#43414e',
    mb: '16px'
  },
  listText: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    mb: '0',
    ml: '5px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProcessSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Process2/process.style.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Process2/process.style.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ProcessItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ProcessItem);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Skill2/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Skill2/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-progress */ "rc-progress");
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_progress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _skill_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skill.style */ "../../node_modules/common/src/containers/Portfolio/Skill2/skill.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/md/ic_thumb_up */ "react-icons-kit/md/ic_thumb_up");
/* harmony import */ var react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Skill2/index.js";













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
    content: "For Property Developers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "TokenProp facilitates Developers and Property Owners to raise the Capital they need quickly and more efficiently",
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

/***/ "../../node_modules/common/src/containers/Portfolio/Skill2/skill.style.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/Skill2/skill.style.js ***!
  \*****************************************************************************************************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


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


var SkillItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var SkillDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var SkillIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var SkillAbout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var SkillProgress = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var SuccessRate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Portfolio/portfolio.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper, PrevButton, NextButton, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevButton", function() { return PrevButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextButton", function() { return NextButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/portfolio/dotted-line.png */ "../../node_modules/common/src/assets/image/portfolio/dotted-line.png");
/* harmony import */ var _assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  padding: 18px 10px;\n  cursor: pointer;\n  &:hover {\n    span {\n      background: #3444f1;\n      @media (min-width: 991px) {\n        width: 100px;\n      }\n    }\n  }\n  span {\n    width: 18px;\n    height: 2px;\n    background: #d1d3de;\n    display: block;\n    position: relative;\n    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      height: 2px;\n      border-radius: 2px;\n      background: inherit;\n      position: absolute;\n    }\n    &:before {\n      transform: rotate(45deg);\n      top: -4px;\n      right: 0;\n      width: 10px;\n    }\n    &:after {\n      transform: rotate(-45deg);\n      width: 8px;\n      bottom: -6px;\n      right: 1px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  padding: 18px 10px;\n  cursor: pointer;\n  &:hover {\n    span {\n      background: #3444f1;\n      @media (min-width: 991px) {\n        width: 100px;\n      }\n    }\n  }\n  span {\n    width: 18px;\n    height: 2px;\n    background: #d1d3de;\n    display: block;\n    position: relative;\n    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      height: 2px;\n      border-radius: 2px;\n      background: inherit;\n      position: absolute;\n    }\n    &:before {\n      transform: rotate(-45deg);\n      top: -4px;\n      left: 0;\n      width: 10px;\n    }\n    &:after {\n      transform: rotate(45deg);\n      width: 8px;\n      bottom: -6px;\n      left: 1px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow: hidden;\n  .sticky-nav-active {\n    .portfolio_navbar {\n      background: #fff;\n      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);\n      padding: 15px 0;\n\n      .main-logo {\n        display: none;\n      }\n      .logo-alt {\n        display: block;\n      }\n    }\n  }\n\n  .portfolio_button {\n    border-radius: 0;\n    border: 2px solid ", ";\n    background-color: transparent;\n    position: relative;\n    min-height: 50px;\n    text-transform: initial;\n    transition: 0.2s ease-in-out;\n    &:before {\n      content: '';\n      background-color: ", ";\n      position: absolute;\n      width: calc(100% + 4px);\n      height: calc(100% + 4px);\n      display: block;\n      z-index: -1;\n      top: 8px;\n      left: 8px;\n      transition: inherit;\n    }\n    &:hover {\n      border-color: transparent;\n      &:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  .portfolio_navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    transition: 0.35s ease-in-out;\n    padding: 50px 0 30px 0;\n    @media (max-width: 990px) {\n      padding: 30px 0;\n    }\n    .logo-alt {\n      display: none;\n    }\n    .main_menu {\n      margin-right: 40px;\n      li {\n        display: inline-block;\n        padding-left: 13px;\n        padding-right: 20px;\n        &:first-child {\n          padding-left: 0;\n        }\n        &:last-child {\n          padding-right: 0;\n        }\n        &.is-current {\n          a {\n            color: #fff;\n            &:after {\n              transform: scaleX(1);\n              transform-origin: left center 0;\n              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n            }\n          }\n        }\n        a {\n          padding: 5px;\n          font-size: 16px;\n          font-weight: 700;\n          color: #fff;\n          position: relative;\n          font-family: 'Raleway', sans-serif;\n          transition: 0.15s ease-in-out;\n          &:hover {\n            color: #fff;\n            &:after {\n              transform: scaleX(1);\n              transform-origin: left center 0;\n              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n            }\n          }\n          &:after {\n            content: '';\n            position: absolute;\n            width: calc(100% - 8px);\n            height: 11px;\n            background: #3444f1;\n            bottom: 6px;\n            left: 0;\n            z-index: -1;\n            transform: scaleX(0);\n            transform-origin: right center 0;\n            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n          }\n        }\n      }\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .navbar_button {\n      button {\n        font-family: 'Raleway', sans-serif;\n        font-weight: 700;\n      }\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .reusecore-drawer__handler {\n      @media (min-width: 991px) {\n        display: none !important;\n      }\n      .hamburgMenu__bar {\n        > span {\n        }\n      }\n    }\n  }\n\n  .sticky-nav-active {\n    .portfolio_navbar {\n      .main_menu {\n        li {\n          a {\n            color: #302b4e;\n            &:after {\n              background: #c2c7fb;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .process_item_col {\n    &:nth-child(2),\n    &:nth-child(3) {\n      .process_item {\n        &:before {\n          content: '';\n          background-image: url(", ");\n          width: 165px;\n          height: 35px;\n          display: block;\n          background-repeat: no-repeat;\n          background-position: center;\n          position: absolute;\n          left: -165px;\n          top: 20px;\n          @media (max-width: 990px) {\n            width: 100px;\n            left: -80px;\n          }\n          @media (max-width: 767px) {\n            display: none;\n          }\n        }\n      }\n    }\n    &:nth-child(3) {\n      .process_item {\n        &:before {\n          transform: rotate(180deg);\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Raleway', sans-serif;\n    margin-top: 0;\n  }\n\n  section {\n    position: relative;\n  }\n\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 500;\n            color: #343d48;\n            position: relative;\n            font-family: 'Raleway', sans-serif;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n            &:before{\n              content: '';\n              position: absolute;\n              width: calc(100% - 8px);\n              height: 11px;\n              background: #c2c7fb;\n              bottom: 2px;\n              left: -4px;\n              z-index: -1;\n              transform: scaleX(0);\n              transform-origin: right center 0;\n              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n            }\n          }\n          &.is-current {\n            a {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n        font-family: 'Raleway', sans-serif;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #3444f1;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n"], ["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Raleway', sans-serif;\n    margin-top: 0;\n  }\n\n  section {\n    position: relative;\n  }\n\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 500;\n            color: #343d48;\n            position: relative;\n            font-family: 'Raleway', sans-serif;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n            &:before{\n              content: '';\n              position: absolute;\n              width: calc(100% - 8px);\n              height: 11px;\n              background: #c2c7fb;\n              bottom: 2px;\n              left: -4px;\n              z-index: -1;\n              transform: scaleX(0);\n              transform-origin: right center 0;\n              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n            }\n          }\n          &.is-current {\n            a {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n        font-family: 'Raleway', sans-serif;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #3444f1;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.borderColor', '#1b1e25'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#3444f1'), _assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3___default.a);
var PrevButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var NextButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/Footer/footer.style.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/Footer/footer.style.js ***!
  \*************************************************************************************************************************/
/*! exports provided: List, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_ride_footer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/ride/footer.svg */ "../../node_modules/common/src/assets/image/ride/footer.svg");
/* harmony import */ var _assets_image_ride_footer_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_footer_svg__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  a {\n    color: #fff;\n    font-size: 14px;\n    line-height: 36px;\n    transition: all 0.2s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      opacity: 0.85;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tpadding: 120px 0;\n\tbackground-image: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-position: 100% center;\n\tborder-top: 1px solid #707070;\n\toverflow: hidden;\n\tbackground-color: #212141;\n\tz-index: 1;\n  @media(max-width: 1440px){\n    padding: 80px 0 60px;\n  }\n\t@media (max-width: 990px) {\n\n\t}\n\t@media (max-width: 767px) {\n\n\t}\n\n\t.Language_search_select {\n\t\tmax-width: 135px;\n\t\t@media (max-width: 575px) {\n\t\t\theight: 52px;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n    @media(max-width: 480px){\n      height: 20px;\n\t\t\tmargin-bottom: 0px;\n    }\n\t\t.select__control,\n\t\t.select-field__wrapper {\n\t\t\theight: 100%;\n\t\t}\n\t\t.select__control {\n\t\t\tpadding: 0 15px 0 0px;\n\t\t\tbox-shadow: none;\n\t\t\tposition: relative;\n\t\t\tborder-color: transparent;\n      background: transparent;\n\t\t\t@media (min-width: 576px) {\n\t\t\t\tborder-color: transparent;\n\t\t\t\tborder-left: 0;\n\t\t\t\tborder-right: 0;\n\t\t\t\tborder-radius: 0;\n\t\t\t\t&:before {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 1px;\n\t\t\t\t\theight: 55%;\n\t\t\t\t\tbackground: transparent;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttop: 50%;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\ttransform: translateY(-50%);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.select__placeholder {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcolor: #fff;\n        font-family: 'Avenir',\n        font-weight: 400;\n\t\t\t}\n\t\t\t.select__indicator {\n\t\t\t\tcolor: #fff;\n\t\t\t}\n      .select__value-container{\n        padding: 0;\n        .select__single-value{\n          font-size: 16px;\n  \t\t\t\tcolor: #fff;\n          font-family: 'Avenir',\n          font-weight: 400;\n        }\n      }\n\t\t}\n\t\t.select__indicator-separator {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n  .appDownload{\n    margin-top: 60px;\n    margin-bottom: 30px;\n  }\n  .imageWrapper{\n    display: flex;\n    @media(max-width: 1200px){\n      flex-direction: column;\n    }\n    img{\n      margin-right: 15px;\n      @media(max-width: 1200px){\n        margin-bottom: 15px;\n        margin-right: 0;\n        width: 150px;\n      }\n    }\n  }\n  .copyRight{\n    margin-top: 120px;\n    margin-left: 0;\n    margin-right: 0;\n    width: calc(100% - 80px);\n    @media(max-width: 1440px){\n      margin-top: 80px;\n    }\n    @media(max-width: 768px){\n      width: calc(100% - 20px);\n      margin-top: 60px;\n    }\n    @media(max-width: 600px){\n      margin-top: 20px;\n    }\n    .copyRightText{\n      font-size: 16px;\n      font-family: 'Avenir';\n      font-weight: 400;\n      color: #fff;\n      @media(max-width: 480px){\n        font-size: 14px;\n        margin-bottom: 10px;\n      }\n    }\n    .footer_social{\n      margin-left: auto;\n      margin-top: -15px;\n      @media(max-width: 600px){\n        margin-left: 0;\n        margin-top: 15px;\n      }\n      a{\n        &:hover{\n          color: #fff;\n          opacity: 0.85;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), _assets_image_ride_footer_svg__WEBPACK_IMPORTED_MODULE_2___default.a);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject2());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject3());

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/Footer/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/Footer/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Select */ "../../node_modules/reusecore/src/elements/Select/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _SocialProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SocialProfile */ "../../node_modules/common/src/containers/Ride/SocialProfile/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer.style */ "../../node_modules/common/src/containers/Ride/Footer/footer.style.js");
/* harmony import */ var _data_Ride__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/Ride */ "../../node_modules/common/src/data/Ride/index.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var _assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/ride/footerapp.svg */ "../../node_modules/common/src/assets/image/ride/footerapp.svg");
/* harmony import */ var _assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/ride/footerplay.svg */ "../../node_modules/common/src/assets/image/ride/footerplay.svg");
/* harmony import */ var _assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/Footer/index.js";
















var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo,
      titleStyle = _ref.titleStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "footerSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Language"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    options: _data_Ride__WEBPACK_IMPORTED_MODULE_12__["Language_NAMES"],
    placeholder: "English",
    className: "Language_search_select",
    "aria-label": "Language_search_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Download The Wallet"
  }, titleStyle, {
    className: "appDownload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "imageWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _assets_image_ride_footerapp_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "App Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _assets_image_ride_footerplay_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "PlaystoreImage Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), _data_Ride__WEBPACK_IMPORTED_MODULE_12__["menuWidget"].map(function (widget) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: widget.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: widget.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_11__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, widget.menuItems.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_11__["ListItem"], {
        key: "list__item-".concat(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "ListItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, item.text)));
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row copyRight"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: "Copyright 2019 @Token Prop Limited.",
    className: "copyRightText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialProfile__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "footer_social",
    items: _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__["SOCIAL_PROFILES"],
    iconSize: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))));
}; // Footer style props


Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Footer default style

Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px'
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '33%', '33%'],
    mb: ['30px', 0],
    pl: ['0px', 0],
    pr: ['0px', '0px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '67%', '67%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', 1 / 3, 1 / 3, 1 / 3],
    pl: [0, '15px'],
    pr: [0, '15px'],
    mb: ['30px', '30px']
  },
  // widget title default style
  titleStyle: {
    color: '#FFFFFF',
    fontSize: ['15px', '16px', '16px', '18px', '18px'],
    fontWeight: '600',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    fontFamily: 'Avenir'
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#FFFFFF',
    fontSize: '16px',
    mb: '12px',
    fontWeight: '600',
    fontFamily: 'Avenir'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/Navbar/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/Navbar/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var _components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _data_Ride__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/Ride */ "../../node_modules/common/src/data/Ride/index.js");
/* harmony import */ var _components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var _assets_image_ride_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/image/ride/logo.svg */ "../../node_modules/common/src/assets/image/ride/logo.svg");
/* harmony import */ var _assets_image_ride_logo_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_logo_svg__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/Navbar/index.js";















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
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "#",
    logoSrc: _assets_image_ride_logo_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "main-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "#",
    logoSrc: _assets_image_ride_logo_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "logo-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "main_menu menuLeft",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_10__["MENU_LEFT_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "main_menu menuRight",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_10__["MENU_RIGHT_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      barColor: "#3444f1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "mobile_menu",
    menuItems: _data_Ride__WEBPACK_IMPORTED_MODULE_10__["MENU_ITEMS"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  logoStyle: {
    maxWidth: ['120px', '130px']
  },
  button: {
    type: 'button',
    fontSize: '16px',
    pl: '0',
    pr: '0',
    colors: 'primary',
    minHeight: 'auto'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/SocialProfile/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/SocialProfile/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbbleOutline */ "react-icons-kit/ionicons/socialDribbbleOutline");
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _socialProfile_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socialProfile.style */ "../../node_modules/common/src/containers/Ride/SocialProfile/socialProfile.style.js");
var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/SocialProfile/index.js";






var SocialProfile = function SocialProfile(_ref) {
  var items = _ref.items,
      className = _ref.className,
      iconSize = _ref.iconSize;
  var addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_socialProfile_style__WEBPACK_IMPORTED_MODULE_4__["SocialProfileWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_socialProfile_style__WEBPACK_IMPORTED_MODULE_4__["SocialProfileItem"], {
      key: "social-item-".concat(index),
      className: "social_profile_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.url || '#',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default.a, {
      icon: item.icon || react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__["socialDribbbleOutline"],
      size: iconSize || 22,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialProfile);

/***/ }),

/***/ "../../node_modules/common/src/containers/Ride/SocialProfile/socialProfile.style.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Ride/SocialProfile/socialProfile.style.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: SocialProfileWrapper, SocialProfileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialProfileWrapper", function() { return SocialProfileWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialProfileItem", function() { return SocialProfileItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-right: 18px;\n  a {\n    color: #fff;\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: #3444f1;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SocialProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var SocialProfileItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/BannerSection/bannerSection.style.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/BannerSection/bannerSection.style.js ***!
  \***************************************************************************************************************************************/
/*! exports provided: DiscountLabel, BannerObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountLabel", function() { return DiscountLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerObject", function() { return BannerObject; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/image/saas/saas-banner.jpg */ "../../node_modules/common/src/assets/image/saas/saas-banner.jpg");
/* harmony import */ var _assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  border-radius: 4em;\n  border: 1px solid ", ";\n  padding: 7px 25px;\n  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);\n  margin-bottom: 30px;\n  background-color: ", ";\n  @media (max-width: 767px) {\n    padding: 7px 15px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  @media (max-width: 767px) {\n    display: none;\n  }\n  .objectWrapper {\n    margin-left: auto;\n    position: relative;\n    .dashboardWrapper {\n      position: absolute;\n      top: 0;\n      right: 0;\n      .chatObject {\n        position: absolute;\n        top: 20px;\n        left: 120px;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding-top: 210px;\n  padding-bottom: 160px;\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    padding-top: 180px;\n    padding-bottom: 60px;\n    min-height: auto;\n  }\n  @media (max-width: 767px) {\n    padding-top: 130px;\n    padding-bottom: 20px;\n    min-height: auto;\n  }\n\n  @media only screen and (max-width: 480px) {\n    background: none;\n  }\n\n  .particle {\n    position: absolute;\n    width: 50%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    @media (max-width: 767px) {\n      display: none;\n    }\n    @media only screen and (max-width: 480px) {\n      width: 100%;\n    }\n  }\n\n  .row {\n    position: relative;\n    z-index: 1;\n  }\n\n  .button__wrapper {\n    margin-top: 40px;\n    @media (max-width: 767px) {\n      margin-bottom: 30px;\n    }\n    .reusecore__button {\n      &.outlined {\n        border-color: rgba(82, 104, 219, 0.2);\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), _assets_image_saas_saas_banner_jpg__WEBPACK_IMPORTED_MODULE_3___default.a);
var BannerObject = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var DiscountLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.lightBorder', '#f1f4f6'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));

/* harmony default export */ __webpack_exports__["default"] = (BannerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/BannerSection/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/BannerSection/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Particle */ "../../node_modules/common/src/containers/Saas/Particle/index.js");
/* harmony import */ var _bannerSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bannerSection.style */ "../../node_modules/common/src/containers/Saas/BannerSection/bannerSection.style.js");
/* harmony import */ var _assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/image/saas/banner/bannerObject1.png */ "../../node_modules/common/src/assets/image/saas/banner/bannerObject1.png");
/* harmony import */ var _assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_saas_banner_admin_new_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/saas/banner/admin-new.png */ "../../node_modules/common/src/assets/image/saas/banner/admin-new.png");
/* harmony import */ var _assets_image_saas_banner_admin_new_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_banner_admin_new_png__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/BannerSection/index.js";














var BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      btnStyle = _ref.btnStyle,
      description = _ref.description,
      discountText = _ref.discountText,
      discountAmount = _ref.discountAmount,
      outlineBtnStyle = _ref.outlineBtnStyle;

  var ButtonGroup = function ButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "SIGN UP"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), "\xA0\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "WHITEPAPER"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), "\xA0\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "outlined",
      title: "EXPLORE MORE",
      variant: "outlined"
    }, outlineBtnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), "\xA0\xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "outlined",
      title: "ONE-PAGER",
      variant: "outlined"
    }, outlineBtnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), "\xA0\xA0\xA0");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bannerSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "banner_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Particle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bannerSection_style__WEBPACK_IMPORTED_MODULE_11__["DiscountLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "25% Discount"
  }, discountAmount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "on every first project "
  }, discountText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Real Estate..... Liquified."
    }, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Scale up easily. Go global. Take a look into the future of advertising ."
    }, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })),
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bannerSection_style__WEBPACK_IMPORTED_MODULE_11__["BannerObject"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "objectWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: _assets_image_saas_banner_bannerObject1_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "BannerObject1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dashboardWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: _assets_image_saas_banner_admin_new_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "BannerObject2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })))));
};

BannerSection.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  outlineBtnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%']
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
    mb: '20px' //ml: '20px'

  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db' //ml: '18px',

  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BannerSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/FaqSection/faqSection.style.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/FaqSection/faqSection.style.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0;\n  background: #fafbff;\n\n  .reusecore__accordion {\n    max-width: 820px;\n    margin: 0 auto;\n    border-bottom: 1px solid #ebebeb;\n\n    .accordion__item {\n      border-top: 0;\n      border-bottom: 1px solid #ebebeb;\n      &:last-child {\n        border-bottom: 0;\n      }\n\n      .accordion__header {\n        padding: 20px 30px;\n      }\n\n      .accordion__body {\n        padding: 5px 30px 20px;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FaqSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (FaqSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/FaqSection/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/FaqSection/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Accordion */ "../../node_modules/common/src/components/Accordion/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/entypo/plus */ "react-icons-kit/entypo/plus");
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/entypo/minus */ "react-icons-kit/entypo/minus");
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _faqSection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faqSection.style */ "../../node_modules/common/src/containers/Saas/FaqSection/faqSection.style.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/FaqSection/index.js";















var FaqSection = function FaqSection(_ref) {
  var sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      titleStyle = _ref.titleStyle,
      descriptionStyle = _ref.descriptionStyle,
      buttonWrapper = _ref.buttonWrapper,
      button = _ref.button;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_faqSection_style__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "faq_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["Accordion"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _data_Saas__WEBPACK_IMPORTED_MODULE_14__["Faq"].map(function (faqItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionItem"], {
      key: index,
      expanded: faqItem.expend,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: faqItem.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["IconWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["OpenIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
      icon: react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_12__["minus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["CloseIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
      icon: react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_11__["plus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: faqItem.description
    }, descriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })))));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))))))));
}; // FaqSection style props


FaqSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // FaqSection default style

FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // sub section default style
  sectionSubTitle: {
    content: 'FREQUENTLY ASKED QUESTIONS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '5px'
  },
  // section title default style
  sectionTitle: {
    content: 'You Got Questions ? We Have Answers!',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#5d646d',
    lineHeight: '1.75',
    mb: '0',
    fontWeight: '400'
  },
  buttonWrapper: {
    mt: "".concat(11),
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    title: 'CONTACT US',
    type: 'button',
    fontSize: "".concat(2),
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: "".concat(4)
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FaqSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/FeatureSection/featureSection.style.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/FeatureSection/featureSection.style.js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0 180px 0;\n  @media (max-width: 990px) {\n    padding: 60px 0 60px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 60px 0 30px 0;\n  }\n\n  .feature__block {\n    position: relative;\n    height: 100%;\n    transition: box-shadow 0.3s ease;\n    @media (max-width: 500px) {\n      padding: 30px 0;\n    }\n    .icon__wrapper {\n      position: relative;\n      border-bottom-left-radius: 6px;\n      overflow: hidden;\n      background: linear-gradient(\n        -60deg,\n        rgba(241, 39, 17, 0.7),\n        rgba(245, 175, 25, 0.7)\n      );\n      .flaticon-flask {\n        &:before {\n          margin-left: 8px;\n        }\n      }\n      &:before,\n      &:after {\n        content: '';\n        width: 28px;\n        height: calc(100% + 30px);\n        position: absolute;\n      }\n      &:before {\n        transform: rotate(45deg);\n        background-color: rgba(255, 255, 255, 0.15);\n      }\n      &:after {\n        transform: rotate(-45deg);\n        background-color: rgba(0, 0, 0, 0.05);\n      }\n    }\n    &:hover {\n      ", "\n    }\n  }\n\n  .row {\n    > .col {\n      &:nth-child(-n + 3) {\n      }\n\n      &:nth-child(3n + 3),\n      &:last-child {\n      }\n      &:nth-child(1) {\n        .feature__block {\n          .icon__wrapper {\n            background: linear-gradient(\n              -60deg,\n              rgba(236, 0, 140, 0.75),\n              rgba(255, 103, 103, 0.75)\n            );\n          }\n        }\n      }\n\n      &:nth-child(2) {\n        .feature__block {\n          .icon__wrapper {\n            background: linear-gradient(\n              -60deg,\n              rgba(110, 72, 170, 0.75),\n              rgba(192, 91, 210, 0.75)\n            );\n          }\n        }\n      }\n      &:nth-child(3) {\n        .feature__block {\n          .icon__wrapper {\n            background: linear-gradient(\n              -60deg,\n              rgba(241, 39, 17, 0.7),\n              rgba(245, 175, 25, 0.7)\n            );\n          }\n        }\n      }\n      &:nth-child(4) {\n        .feature__block {\n          .icon__wrapper {\n            background: linear-gradient(\n              -60deg,\n              rgba(47, 128, 237, 0.75),\n              rgba(86, 204, 242, 0.75)\n            );\n          }\n        }\n      }\n      &:nth-child(5) {\n        .feature__block {\n          .icon__wrapper {\n            background: linear-gradient(\n              -60deg,\n              rgba(50, 207, 167, 0.75),\n              rgba(150, 201, 61, 0.75)\n            );\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FeatureSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), ''
/* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
);
/* harmony default export */ __webpack_exports__["default"] = (FeatureSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/FeatureSection/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/FeatureSection/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _featureSection_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featureSection.style */ "../../node_modules/common/src/containers/Saas/FeatureSection/featureSection.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/FeatureSection/index.js";










var FeatureSection = function FeatureSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      blockWrapperStyle = _ref.blockWrapperStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_featureSection_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "service_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "OUR SERVICES"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Featured Service that We Provide"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), _data_Saas__WEBPACK_IMPORTED_MODULE_7__["Features"].map(function (feature, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: feature.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }),
      wrapperStyle: blockWrapperStyle,
      iconStyle: iconStyle,
      contentStyle: contentStyle,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.description
      }, featureDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })),
      className: "saasFeature",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  }))));
}; // FeatureSection style props


FeatureSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // FeatureSection default style

FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '75px', '75px', '84px'],
    height: ['70px', '75px', '75px', '84px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    borderBottomLeftRadius: '50%'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/Footer/footer.style.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/Footer/footer.style.js ***!
  \*************************************************************************************************************************/
/*! exports provided: List, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/hosting/footer-bg.png */ "../../node_modules/common/src/assets/image/hosting/footer-bg.png");
/* harmony import */ var _assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  a {\n    color: rgba(52, 61, 72, 0.8);\n    font-size: 14px;\n    line-height: 36px;\n    transition: all 0.2s ease;\n    &:hover,\n    &:focus {\n      outline: 0;\n      text-decoration: none;\n      color: #343d48;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-color: #f9fbfd;\n  overflow: hidden;\n  background: linear-gradient(to bottom, #f7f8fd 0%, #fafbff 100%);\n  @media (min-width: 576px) {\n    padding-top: 130px;\n    &:before {\n      content: '';\n      position: absolute;\n      width: 104%;\n      padding-bottom: 104%;\n      border-top-right-radius: 11%;\n      top: 14%;\n      left: 0;\n      pointer-events: none;\n      background-color: #fff;\n      transform: rotate(-6deg);\n      @media (max-width: 767px) {\n        padding-bottom: 150%;\n      }\n    }\n  }\n\n  .footer_container {\n    background-repeat: no-repeat;\n    background-position: center 50px;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    position: relative;\n    @media (min-width: 576px) {\n      background-image: url(", ");\n    }\n    @media (max-width: 990px) {\n      padding-bottom: 20px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer(_templateObject(), _assets_image_hosting_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject2());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject3());

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/Footer/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/Footer/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.style */ "../../node_modules/common/src/containers/Saas/Footer/footer.style.js");
/* harmony import */ var _assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/image/saas/TokenProp_Logo.png */ "../../node_modules/common/src/assets/image/saas/TokenProp_Logo.png");
/* harmony import */ var _assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/Footer/index.js";












var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo,
      titleStyle = _ref.titleStyle,
      logoStyle = _ref.logoStyle,
      textStyle = _ref.textStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "footer_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_saas_TokenProp_Logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    title: "Hosting",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Token Prop Limited"
  }, textStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "+1 212 256 1485"
  }, textStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), _data_Saas__WEBPACK_IMPORTED_MODULE_11__["Footer_Data"].map(function (widget, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: "footer-widget-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: widget.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, widget.menuItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
        key: "footer-list-item-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "ListItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, item.text)));
    })));
  })))));
}; // Footer style props


Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Footer default style

Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0]
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px'
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px'
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px'
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/Particle/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/Particle/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/saas/particles/particle-1.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-1.png");
/* harmony import */ var _assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/image/saas/particles/particle-2.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-2.png");
/* harmony import */ var _assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/image/saas/particles/particle-3.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-3.png");
/* harmony import */ var _assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/image/saas/particles/particle-4.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-4.png");
/* harmony import */ var _assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/image/saas/particles/particle-5.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-5.png");
/* harmony import */ var _assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/image/saas/particles/particle-6.png */ "../../node_modules/common/src/assets/image/saas/particles/particle-6.png");
/* harmony import */ var _assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/Particle/index.js";









var ParticlesComponent = function ParticlesComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "particle",
    params: {
      particles: {
        number: {
          value: 6,
          density: {
            enable: true,
            value_area: 800
          }
        },
        shape: {
          type: ['images'],
          images: [{
            src: "".concat(_assets_image_saas_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default.a),
            width: 25,
            height: 25
          }, {
            src: "".concat(_assets_image_saas_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default.a),
            width: 18,
            height: 18
          }, {
            src: "".concat(_assets_image_saas_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default.a),
            width: 32,
            height: 32
          }, {
            src: "".concat(_assets_image_saas_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default.a),
            width: 41,
            height: 41
          }, {
            src: "".concat(_assets_image_saas_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default.a),
            width: 22,
            height: 22
          }, {
            src: "".concat(_assets_image_saas_particles_particle_6_png__WEBPACK_IMPORTED_MODULE_7___default.a),
            width: 22,
            height: 22
          }]
        },
        opacity: {
          value: 0.17626369048095938,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: false
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          bounce: true,
          attract: {
            enable: true,
            rotateX: 100,
            rotateY: 400
          }
        }
      },
      retina_detect: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesComponent);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/PartnerSection/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/PartnerSection/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _partner_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partner.style */ "../../node_modules/common/src/containers/Saas/PartnerSection/partner.style.js");
/* harmony import */ var _assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/image/saas/partner.png */ "../../node_modules/common/src/assets/image/saas/partner.png");
/* harmony import */ var _assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/PartnerSection/index.js";












var PartnerSection = function PartnerSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_partner_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Domain Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
    content: "What Is Token Prop?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, description, {
    content: "TokenProp is a Blockchain based Real estate Investment Platform which offers exceptional investment options and one of its kind trading experience with properties all over the world. We offer a platform to tokenize properties. Each offering is known as a token proposition. Hence the name Token Prop. We offer a utility token called TPROP, which allows it's holders to purchase equity in various properties around the world. In addtion, each property has it's individual Property Token which represents rights to interest in the property. These are traded on the PropX exchange that we provide. ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "LEARN MORE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })))))))));
};

PartnerSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  imageAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PartnerSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/PartnerSection/partner.style.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/PartnerSection/partner.style.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/saas/map.png */ "../../node_modules/common/src/assets/image/saas/map.png");
/* harmony import */ var _assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 120px 0;\n  background-color: #fafbff;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: 25% center;\n\n  @media (max-width: 990px) {\n    padding: 100px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 80px 0;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PartnerSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), _assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (PartnerSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/PricingSection/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/PricingSection/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _pricing_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pricing.style */ "../../node_modules/common/src/containers/Saas/PricingSection/pricing.style.js");
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/icomoon/checkmark */ "react-icons-kit/icomoon/checkmark");
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/PricingSection/index.js";















var PricingSection = function PricingSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      row = _ref.row,
      col = _ref.col,
      secTitleWrapper = _ref.secTitleWrapper,
      secHeading = _ref.secHeading,
      secText = _ref.secText,
      nameStyle = _ref.nameStyle,
      descriptionStyle = _ref.descriptionStyle,
      priceStyle = _ref.priceStyle,
      priceLabelStyle = _ref.priceLabelStyle,
      buttonStyle = _ref.buttonStyle,
      buttonFillStyle = _ref.buttonFillStyle,
      listContentStyle = _ref.listContentStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    data: _data_Saas__WEBPACK_IMPORTED_MODULE_13__["MONTHLY_PRICING_TABLE"],
    active: true
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setLoading(true);
    }, 500);
  });
  var data = state.data;
  var activeStatus = state.active;
  var pricingCarouselOptions = {
    type: 'slider',
    perView: 3,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        type: 'carousel',
        peek: {
          before: 100,
          after: 100
        }
      },
      990: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 160,
          after: 160
        }
      },
      767: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 80,
          after: 80
        }
      },
      575: {
        type: 'carousel',
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20
        }
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    id: "pricing_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Monthly Plan",
    className: activeStatus ? 'active-item' : '',
    onClick: function onClick() {
      return setState({
        data: _data_Saas__WEBPACK_IMPORTED_MODULE_13__["MONTHLY_PRICING_TABLE"],
        active: true
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Annual Plan",
    className: activeStatus === false ? 'active-item' : '',
    onClick: function onClick() {
      return setState({
        data: _data_Saas__WEBPACK_IMPORTED_MODULE_13__["YEARLY_PRICING_TABLE"],
        active: false
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    carouselSelector: "pricing-carousel",
    options: pricingCarouselOptions,
    controls: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, data.map(function (pricingTable, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: "pricing-table-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
      freePlan: pricingTable.freePlan,
      className: "pricing_table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.description
    }, descriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingPrice"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.price
    }, priceStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: pricingTable.priceLabel
    }, priceLabelStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: pricingTable.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, pricingTable.freePlan ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: pricingTable.buttonLabel
    }, buttonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: pricingTable.buttonLabel
    }, buttonFillStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["PricingList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, pricingTable.listItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pricing_style__WEBPACK_IMPORTED_MODULE_14__["ListItem"], {
        key: "pricing-table-list-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_5___default.a, {
        icon: react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_15__["checkmark"],
        className: "price_list_icon",
        size: 13,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: item.content
      }, listContentStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })));
    }))));
  }))))));
};

PricingSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secHeading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  descriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  priceStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  priceLabelStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  listContentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '120px'],
    pb: ['20px', '20px', '20px', '80px']
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  secTitleWrapper: {
    mb: ['50px', '75px']
  },
  secText: {
    content: 'PRICING PLAN',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  secHeading: {
    content: 'What’s our monthly pricing subscription',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px'
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px'
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: 'headingColor',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em'
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0'
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primary',
    width: '222px',
    maxWidth: '100%'
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%'
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PricingSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/PricingSection/pricing.style.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/PricingSection/pricing.style.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: PricingHead, PricingPrice, PricingButton, PricingList, ListItem, SwitchWrapper, PricingButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingHead", function() { return PricingHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPrice", function() { return PricingPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingButton", function() { return PricingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingList", function() { return PricingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchWrapper", function() { return SwitchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingButtonWrapper", function() { return PricingButtonWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  margin-top: 30px;\n  .reusecore__button {\n    font-size: 16px;\n    font-weight: 400;\n    color: #6f7a87;\n    background: #fff;\n    height: 50px;\n    width: 165px;\n    border: 1px solid #e4e9ee;\n    &:nth-child(1) {\n      border-top-left-radius: 5px;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 5px;\n      border-right-color: transparent;\n    }\n    &:nth-child(2) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px;\n      border-bottom-left-radius: 0;\n      border-left-color: transparent;\n    }\n    &.active-item {\n      color: #5167db;\n      border-color: #5167db;\n    }\n    @media (max-width: 575px) {\n      font-size: 14px;\n      height: 44px;\n      width: 120px;\n      padding: 0 5px;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  margin-top: 20px;\n  .reusecore__switch {\n    .reusecore__field-label {\n      font-size: 16px;\n      font-weight: 400;\n      color: #5c636c;\n      cursor: pointer;\n    }\n    input[type='checkbox'] {\n      &:checked {\n        + div {\n          width: 40px !important;\n          background-color: ", ";\n          > div {\n            left: 17px !important;\n          }\n        }\n      }\n      + div {\n        background-color: #f0f0f0;\n        background-color: #f0f0f0;\n        border: 0;\n        width: 40px;\n        height: 25px;\n        > div {\n          background-color: #fff;\n          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);\n          width: 21px;\n          height: 21px;\n          top: 2px;\n          left: 2px;\n        }\n      }\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin-bottom: 19px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  .price_list_icon {\n    color: #18d379;\n    margin-right: 10px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  margin-bottom: 55px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 1px solid #f2f4f7;\n  border-radius: 5px;\n  padding: 60px 45px;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  @media (max-width: 767px) {\n    padding: 45px 35px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PricingTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var PricingHead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var PricingPrice = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var PricingButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var PricingList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var SwitchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary'));
var PricingButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject8());

/* harmony default export */ __webpack_exports__["default"] = (PricingTable);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/ServiceSection/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/ServiceSection/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _service_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service.style */ "../../node_modules/common/src/containers/Saas/ServiceSection/service.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/ServiceSection/index.js";










var ServiceSection = function ServiceSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      featureTitle = _ref.featureTitle,
      featureDescription = _ref.featureDescription,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      blockWrapperStyle = _ref.blockWrapperStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_service_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "feature_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "TOKEN INVESTMENT PLATFORM (TIP) FEATURES"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Why you should choose our Platform"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), _data_Saas__WEBPACK_IMPORTED_MODULE_7__["Service"].map(function (feature, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: feature.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }),
      wrapperStyle: blockWrapperStyle,
      iconStyle: iconStyle,
      contentStyle: contentStyle,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.description
      }, featureDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })),
      className: "saasService",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  }))));
}; // ServiceSection style props


ServiceSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  featureDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // ServiceSection default style

ServiceSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['50px', '50px', '50px', '80px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px']
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '80px'],
    height: ['70px', '80px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
    borderBottomLeftRadius: '50%'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: '-5px'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    letterSpacing: '-0.020em',
    mb: '10px'
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/ServiceSection/service.style.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/ServiceSection/service.style.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0 40px;\n  @media (max-width: 990px) {\n    padding: 60px 0 0 0;\n  }\n\n  .feature__block {\n    position: relative;\n    height: 100%;\n    transition: box-shadow 0.3s ease;\n    display: flex;\n    @media (max-width: 500px) {\n      padding: 30px 0;\n    }\n    .icon__wrapper {\n      position: relative;\n      border-bottom-right-radius: 6px;\n      flex-shrink: 0;\n      margin-right: 22px;\n      background: #fff5f6;\n      .flaticon-flask {\n        &:before {\n          margin-left: 8px;\n        }\n      }\n    }\n    &:hover {\n      ", "\n    }\n  }\n\n  .row {\n    > .col {\n      &:nth-child(-n + 3) {\n      }\n\n      &:nth-child(3n + 3),\n      &:last-child {\n      }\n      &:nth-child(1) {\n        .feature__block {\n          .icon__wrapper {\n            background: #fff5f6;\n            color: #f55767;\n          }\n        }\n      }\n\n      &:nth-child(2) {\n        .feature__block {\n          .icon__wrapper {\n            background: #ebfff2;\n            color: #29c05e;\n          }\n        }\n      }\n      &:nth-child(3) {\n        .feature__block {\n          .icon__wrapper {\n            background: #f1faff;\n            color: #2595d4;\n          }\n        }\n      }\n      &:nth-child(4) {\n        .feature__block {\n          .icon__wrapper {\n            background: #fffae8;\n            color: #e9b600;\n          }\n        }\n      }\n      &:nth-child(5) {\n        .feature__block {\n          .icon__wrapper {\n            background: #f5eeff;\n            color: #a55cef;\n          }\n        }\n      }\n      &:nth-child(6) {\n        .feature__block {\n          .icon__wrapper {\n            background: #ffecfa;\n            color: #e764a5;\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ServiceSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), ''
/* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
);
/* harmony default export */ __webpack_exports__["default"] = (ServiceSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/TestimonialSection/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/TestimonialSection/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testimonialSection.style */ "../../node_modules/common/src/containers/Saas/TestimonialSection/testimonialSection.style.js");

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/TestimonialSection/index.js";












var TestimonialSection = function TestimonialSection(_ref) {
  var sectionSubTitle = _ref.sectionSubTitle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      commentStyle = _ref.commentStyle,
      nameStyle = _ref.nameStyle,
      btnStyle = _ref.btnStyle,
      designationStyle = _ref.designationStyle;
  // Glide js options
  var glideOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 1
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "testimonial_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "CLIENT COMMENTS"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    options: glideOptions,
    buttonWrapperStyle: btnWrapperStyle,
    nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "flaticon-next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }),
      variant: "textButton"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })),
    prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "flaticon-left-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }),
      variant: "textButton"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, _data_Saas__WEBPACK_IMPORTED_MODULE_7__["Testimonial"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["TextWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-quotes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.comment
    }, commentStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["ClientName"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.designation
    }, designationStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["ImageWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_11__["RoundWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: item.avatar_url,
      alt: "Client Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "fab",
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: item.social_icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }))));
  })))));
}; // TestimonialSection style props


TestimonialSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  commentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designationStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // TestimonialSection default style

TestimonialSection.defaultProps = {
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '20px',
    ml: 'auto',
    mr: 'auto',
    pl: '12px',
    maxWidth: '954px'
  },
  // client comment style
  commentStyle: {
    color: '#0f2137',
    fontWeight: '400',
    fontSize: ['22px', '22px', '22px', '30px'],
    lineHeight: '1.72',
    mb: '47px'
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0
  },
  // client designation style
  designationStyle: {
    as: 'h5',
    color: 'rgba(52, 61, 72, 0.8)',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
    ml: ['0', '10px']
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: 'absolute',
    bottom: '62px',
    left: '12px'
  },
  // next / prev btn style
  btnStyle: {
    minWidth: 'auto',
    minHeight: 'auto',
    mr: '13px',
    fontSize: '16px',
    color: '#343d484d'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TestimonialSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/TestimonialSection/testimonialSection.style.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/TestimonialSection/testimonialSection.style.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: TextWrapper, ImageWrapper, ClientName, RoundWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientName", function() { return ClientName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundWrapper", function() { return RoundWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  @media (max-width: 575px) {\n    flex-direction: column;\n    align-items: inherit;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 256px;\n  height: 256px;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border-bottom-right-radius: 10px;\n  background: rgb(232, 230, 192);\n  background: radial-gradient(\n    circle,\n    rgba(232, 230, 192, 1) 0%,\n    rgba(199, 195, 134, 1) 100%\n  );\n  overflow: hidden;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 256px;\n  height: 256px;\n  position: relative;\n  @media only screen and (max-width: 680px) {\n    margin-bottom: 40px;\n  }\n  .reusecore__button {\n    position: absolute;\n    z-index: 2;\n    bottom: 0;\n    left: 20px;\n    width: 65px;\n    height: 65px;\n    font-size: 26px;\n    background-color: rgb(220, 57, 95);\n    box-shadow: 0px 10px 28.2px 1.8px rgba(23, 65, 104, 0.2);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 540px;\n  margin-right: auto;\n  position: relative;\n  padding-left: 12px;\n  margin-right: 30px;\n\n  p {\n    text-indent: 27px;\n    margin-bottom: 25px;\n  }\n\n  i {\n    color: rgba(52, 61, 72, 0.2);\n    font-size: 20px;\n    position: absolute;\n    top: 0;\n    left: 12px;\n    z-index: -1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 80px 0 120px;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    padding-bottom: 80px;\n  }\n  @media (max-width: 767px) {\n    padding-top: 40px;\n  }\n\n  .glide {\n    max-width: 954px;\n    margin: 0 auto;\n    .glide__slide {\n      display: flex;\n      margin-bottom: 40px;\n      @media only screen and (max-width: 991px) {\n        padding-top: 30px;\n      }\n      @media only screen and (max-width: 680px) {\n        flex-direction: column-reverse;\n      }\n    }\n    .glide__controls {\n      position: relative;\n      bottom: 0;\n      .reusecore__button {\n        &:hover {\n          color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var TestimonialSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.quoteText', '#343d48'));
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var RoundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var ClientName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());

/* harmony default export */ __webpack_exports__["default"] = (TestimonialSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/TimelineSection/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/TimelineSection/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Slide */ "react-reveal/Slide");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _timeline_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timeline.style */ "../../node_modules/common/src/containers/Saas/TimelineSection/timeline.style.js");
/* harmony import */ var _data_Saas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/Saas */ "../../node_modules/common/src/data/Saas/index.js");
/* harmony import */ var _assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/saas/illustration.png */ "../../node_modules/common/src/assets/image/saas/illustration.png");
/* harmony import */ var _assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/TimelineSection/index.js";















var TimelineSection = function TimelineSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      row = _ref.row,
      col = _ref.col,
      button = _ref.button,
      textArea = _ref.textArea,
      imageArea = _ref.imageArea,
      imageTwo = _ref.imageTwo,
      buttonWrapper = _ref.buttonWrapper,
      indexStyle = _ref.indexStyle,
      timelineTitle = _ref.timelineTitle,
      timelineDescription = _ref.timelineDescription;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionSubTitle, {
    content: "PROJECT TIMELINE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionTitle, {
    content: "How Token Prop brings it all together!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, imageArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageTwo, {
    src: _assets_image_saas_illustration_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Illustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, _data_Saas__WEBPACK_IMPORTED_MODULE_13__["Timeline"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineItem"], {
      key: "timeline-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineIndex"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "span",
      content: item.index || "0".concat(index + 1)
    }, indexStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      delay: 100,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h2",
      content: item.title
    }, timelineTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["Hidden"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      delay: 200,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.description
    }, timelineDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_timeline_style__WEBPACK_IMPORTED_MODULE_12__["TimelineDot"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "JOIN US",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })))))));
};

TimelineSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  indexStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  timelineTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  timelineDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
TimelineSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px']
  },
  // section header default style
  sectionHeader: {
    mb: '56px'
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  imageAreaRow: {
    flexDirection: 'row-reverse'
  },
  col: {
    pr: '15px',
    pl: '15px'
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '55%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '45%'],
    mb: ['30px', '40px', '40px', '0', '0']
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '15px'
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px'
  },
  buttonWrapper: {
    mt: ['25px', '50px'],
    flexBox: true,
    justifyContent: 'center'
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: '46px'
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto'
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto'
  },
  indexStyle: {
    fontSize: ['36px', '42px', '52px', '56px', '72px'],
    fontWeight: '300',
    color: '#eaebec',
    display: 'block',
    lineHeight: '1',
    mb: '0'
  },
  timelineTitle: {
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '13px'
  },
  timelineDescription: {
    fontSize: ['14px', '15px', '15px', '15px', '16px'],
    lineHeight: '2',
    color: '#5d646d',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TimelineSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/TimelineSection/timeline.style.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/TimelineSection/timeline.style.js ***!
  \************************************************************************************************************************************/
/*! exports provided: TimelineWrapper, TimelineDot, TimelineItem, TimelineIndex, TimelineContent, Hidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineWrapper", function() { return TimelineWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineDot", function() { return TimelineDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineItem", function() { return TimelineItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineIndex", function() { return TimelineIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineContent", function() { return TimelineContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return Hidden; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow: hidden;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: 30px;\n  @media (max-width: 480px) {\n    margin-left: 20px;\n  }\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 90px;\n  padding-left: 50px;\n  &:first-child {\n    &:before {\n      display: none;\n    }\n  }\n  &:last-child {\n    margin-bottom: 0;\n    &:after {\n      display: none;\n    }\n  }\n\n  &:hover {\n    ", " {\n      &:after {\n        background: #5268db;\n      }\n    }\n  }\n\n  &:after,\n  &:before {\n    content: '';\n    position: absolute;\n    height: calc(50% + 45px);\n    width: 2px;\n    background: #f0f0f1;\n    left: 9px;\n    @media (max-width: 480px) {\n      left: 7px;\n    }\n  }\n\n  &:before {\n    bottom: 50%;\n  }\n\n  &:after {\n    top: 50%;\n  }\n\n  @media (max-width: 990px) {\n    margin-bottom: 60px;\n  }\n  @media (max-width: 480px) {\n    padding-left: 30px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  box-shadow: 0px 3px 8.46px 0.54px rgba(23, 65, 104, 0.2);\n  z-index: 1;\n  background: #fff;\n  transform: translateY(-50%);\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #ebedf5;\n    transition: 0.25s ease-in-out;\n  }\n  @media (max-width: 480px) {\n    width: 16px;\n    height: 16px;\n    &:after {\n      width: 10px;\n      height: 10px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TimelineWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var TimelineDot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var TimelineItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), TimelineDot);
var TimelineIndex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var TimelineContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var Hidden = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/VisitorSection/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/VisitorSection/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Zoom */ "react-reveal/Zoom");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _visitor_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./visitor.style */ "../../node_modules/common/src/containers/Saas/VisitorSection/visitor.style.js");
/* harmony import */ var _assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/saas/saasvisitor1.png */ "../../node_modules/common/src/assets/image/saas/saasvisitor1.png");
/* harmony import */ var _assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/image/saas/visitor_bg.png */ "../../node_modules/common/src/assets/image/saas/visitor_bg.png");
/* harmony import */ var _assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/VisitorSection/index.js";

















var VisitorSection = function VisitorSection(_ref) {
  var title = _ref.title,
      description = _ref.description,
      textArea = _ref.textArea,
      imageWrapper = _ref.imageWrapper,
      btnStyle = _ref.btnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visitor_style__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "visitorSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visitor_style__WEBPACK_IMPORTED_MODULE_14__["SectionObject"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "objectWrapper"
  }, imageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
    src: _assets_image_saas_visitor_bg_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "BgImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "dashboardWrapper"
  }, imageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    left: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_11__["default"], {
    src: _assets_image_saas_saasvisitor1_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "VisitorDashboard1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Token Investment Platform (TIP) - Browse property investment opportunities worldwide"
    }, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "See information on properties and well as detailed a full investment profile. Each property listing is a different investment with it's own characteristics. Convert Fiat or crytocurrencies to TPROP in order to invest. Hold on board or invest immediately, the choice is yours."
    }, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })) //
    // description={
    //  <Text
    //     content="Convert Fiat or crytocurrencies to TPROP in order to invest. Hold on board or invest immediately, the choice is yours."
    //     {...description}
    //   />
    // }
    ,
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "HOW IT WORKS"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))));
};

VisitorSection.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%']
  },
  imageWrapper: {
    boxShadow: 'none'
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px']
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VisitorSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/VisitorSection/visitor.style.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/VisitorSection/visitor.style.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: SectionObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionObject", function() { return SectionObject; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  width: 55%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  @media (max-width: 767px) {\n    width: 100%;\n    position: relative;\n    height: auto;\n    top: auto;\n    left: auto;\n  }\n  img {\n    max-width: 93%;\n    height: auto;\n  }\n  .objectWrapper {\n    margin-right: auto;\n    position: relative;\n    .dashboardWrapper {\n      position: absolute;\n      top: 4vw;\n      left: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 630px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  position: relative;\n  @media only screen and (max-width: 1200px) {\n    min-height: 500px;\n    margin-bottom: 45px;\n  }\n  @media only screen and (max-width: 991px) {\n    min-height: 370px;\n    margin-bottom: 40px;\n  }\n  @media (max-width: 767px) {\n    min-height: auto;\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var VisitorSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
var SectionObject = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());

/* harmony default export */ __webpack_exports__["default"] = (VisitorSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Saas/saas.style.js":
/*!****************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/containers/Saas/saas.style.js ***!
  \****************************************************************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  overflow: hidden;\n  a:-webkit-any-link {\n    text-decoration: none;\n  }\n  .menuRight {\n    margin-left: auto;\n  }\n  .sticky-nav-active {\n    .hosting_navbar {\n      background: #fff;\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n      padding: 15px 0;\n    }\n  }\n\n  .hosting_navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    transition: 0.35s ease-in-out;\n    padding: 30px 0;\n    .main_menu {\n      margin-right: 40px;\n      li {\n        display: inline-block;\n        padding-left: 13px;\n        padding-right: 13px;\n        &:first-child {\n          padding-left: 0;\n        }\n        &:last-child {\n          padding-right: 0;\n        }\n        &.is-current {\n          a {\n            color: #eb4d4b;\n          }\n        }\n        a {\n          padding: 5px;\n          font-size: 16px;\n          font-weight: 400;\n          color: #343d48;\n          transition: 0.15s ease-in-out;\n          &:hover {\n            color: #eb4d4b;\n          }\n        }\n      }\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .navbar_button {\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .reusecore-drawer__handler {\n      @media (min-width: 991px) {\n        display: none !important;\n      }\n      .hamburgMenu__bar {\n        > span {\n        }\n      }\n    }\n  }\n\n  .trial-section {\n    background: linear-gradient(to bottom, #fafbff 0%, #f7f8fd 100%);\n\n    .button_group {\n      text-align: center;\n    }\n  }\n\n  @media (max-width: 990px) {\n    .glide__slide--active .pricing_table {\n      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);\n      border: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Avenir', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Avenir', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ", " !important;\n\n    &.alt {\n      background-color: ", " !important;\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;\n    }   \n  }\n"], ["\n  body{\n    font-family: 'Avenir', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Avenir', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ", " !important;\n\n    &.alt {\n      background-color: ", " !important;\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;\n    }   \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#5268db'));
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());

/***/ }),

/***/ "../../node_modules/common/src/contexts/DrawerContext.js":
/*!************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/contexts/DrawerContext.js ***!
  \************************************************************************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/contexts/DrawerContext.js";

var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "../../node_modules/common/src/data/Agency/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/data/Agency/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/agency/blog/blog-img1.png */ "../../node_modules/common/src/assets/image/agency/blog/blog-img1.png");
/* harmony import */ var _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/agency/blog/blog-img2.png */ "../../node_modules/common/src/assets/image/agency/blog/blog-img2.png");
/* harmony import */ var _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/agency/blog/blog-img3.png */ "../../node_modules/common/src/assets/image/agency/blog/blog-img3.png");
/* harmony import */ var _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/agency/team/member-1.jpg */ "../../node_modules/common/src/assets/image/agency/team/member-1.jpg");
/* harmony import */ var _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/agency/team/member-2.jpg */ "../../node_modules/common/src/assets/image/agency/team/member-2.jpg");
/* harmony import */ var _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/agency/team/member-3.jpg */ "../../node_modules/common/src/assets/image/agency/team/member-3.jpg");
/* harmony import */ var _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/agency/client/denny.png */ "../../node_modules/common/src/assets/image/agency/client/denny.png");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/agency/client/menny.png */ "../../node_modules/common/src/assets/image/agency/client/menny.png");
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__);








var data = {
  menuItems: [{
    label: 'Feature',
    path: '#featureSection',
    offset: '80'
  }, {
    label: 'Work History',
    path: '#workHistorySection',
    offset: '100'
  }, {
    label: 'Portfolio',
    path: '#blogSection',
    offset: '100'
  }, {
    label: 'Quality feature',
    path: '#qualitySection',
    offset: '100'
  }, {
    label: 'Testimonial',
    path: '#testimonialSection',
    offset: '100'
  }, {
    label: 'Team Member',
    path: '#teamSection',
    offset: '67'
  }, {
    label: 'FAQ',
    path: '#faqSection',
    offset: '100'
  }],
  aboutus: [{
    id: 1,
    title: 'Amazing communication experience.',
    icon: 'flaticon-next'
  }, {
    id: 2,
    title: 'Best designing experience with trending tools and sizes.',
    icon: 'flaticon-next'
  }, {
    id: 3,
    title: 'Training and communication method remotely.',
    icon: 'flaticon-next'
  }, {
    id: 4,
    title: '24/7 Hour onine supports.',
    icon: 'flaticon-next'
  }],
  features: [{
    id: 1,
    icon: 'flaticon-flask',
    title: 'Search Optimization',
    description: 'By using Search Engine Optimization, You will get more Clients'
  }, {
    id: 2,
    icon: 'flaticon-pencil-case',
    title: 'Ui/UX Design',
    description: 'We provide the best UI/UX Design by following the latest trends of the market .'
  }, {
    id: 3,
    icon: 'flaticon-ruler',
    title: 'Wireframing Task',
    description: 'We respect our customer opinions and deals with them with perfect wireframing '
  }, {
    id: 4,
    icon: 'flaticon-startup',
    title: 'Business Solutions',
    description: 'We are commited to provide proper business solutions with reasonable pricing'
  }, {
    id: 5,
    icon: 'flaticon-briefing',
    title: 'Business Analysis',
    description: 'A day to day report about your ongoing business for proper understanding'
  }, {
    id: 6,
    icon: 'flaticon-creative',
    title: 'Content Management',
    description: 'Proper Content Management is important to find out the real clients for your agencies'
  }],
  qualityFeature: [{
    id: 1,
    icon: 'flaticon-flask',
    title: 'Search Optimization',
    description: 'By using Search Engine Optimization, You will get more Clients.'
  }, {
    id: 2,
    icon: 'flaticon-pencil-case',
    title: 'Wireframing Task',
    description: 'We respect our customer opinions and deals with them with perfect wireframing.'
  }, {
    id: 3,
    icon: 'flaticon-ruler',
    title: 'Ui/Ux Design',
    description: 'We provide the best UI/UX Design by following the latest trends of the market .'
  }, {
    id: 4,
    icon: 'flaticon-briefing',
    title: 'Content Writting',
    description: 'Proper Content Management is important to find out the real clients for your agencies .'
  }],
  blog: [{
    id: 1,
    title: 'Real home corporation',
    thumbnail_url: _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    date: 'November 02, 2018',
    postLink: '#1'
  }, {
    id: 2,
    title: 'Sheltech developer ltd.',
    thumbnail_url: _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    date: 'November 12, 2018',
    postLink: '#2'
  }, {
    id: 3,
    title: 'Alt architecture co.',
    thumbnail_url: _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    date: 'December 09, 2018',
    postLink: '#3'
  }],
  teamMember: [{
    id: 1,
    name: 'Syed Asif Parveez',
    thumbnail_url: _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    designation: 'Co-Founder - Chief Executive Officer',
    social_links: ['flaticon-facebook-logo', 'flaticon-twitter-logo-silhouette', 'flaticon-instagram', 'flaticon-dribble-logo']
  }, {
    id: 2,
    name: 'Dameon Green',
    thumbnail_url: _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    designation: 'Co-Founder - Chief Operating Officer',
    social_links: ['flaticon-twitter-logo-silhouette', 'flaticon-instagram', 'flaticon-facebook-logo', 'flaticon-dribble-logo']
  }, {
    id: 3,
    name: 'CFO Dude',
    thumbnail_url: _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    designation: 'Article Writter',
    social_links: ['flaticon-dribble-logo', 'flaticon-twitter-logo-silhouette', 'flaticon-instagram', 'flaticon-facebook-logo']
  }],
  testimonial: [{
    id: 1,
    name: 'Denny Albuz',
    designation: 'CEO of Denish Co.',
    comment: 'Best working experience  with this amazing team & in future, we want to work together',
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 2,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment: 'Impressed with master class support of the team and really look forward for the future.',
    avatar_url: _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }, {
    id: 3,
    name: 'Caroleane Mina',
    designation: 'Director of Beauty-queen',
    comment: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 4,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment: 'Impressed with master class support of the team and really look forward for the future.',
    avatar_url: _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }],
  faq: [{
    id: 1,
    expend: true,
    title: 'How to contact with Customer Service?',
    description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
  }, {
    id: 2,
    title: 'App installation failed, how to update system information?',
    description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
  }, {
    id: 3,
    title: 'Website reponse taking time, how to improve?',
    description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
  }, {
    id: 4,
    title: 'New update fixed all bug and issues?',
    description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
  }],
  menuWidget: [{
    id: 1,
    title: 'About Us',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Support Center'
    }, {
      id: 2,
      url: '#2',
      text: 'Customer Support'
    }, {
      id: 3,
      url: '#3',
      text: 'About Us'
    }, {
      id: 4,
      url: '#4',
      text: 'Copyright'
    }, {
      id: 5,
      url: '#5',
      text: 'Popular Campaign'
    }]
  }, {
    id: 2,
    title: 'Our Information',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Return Policy'
    }, {
      id: 2,
      url: '#2',
      text: 'Privacy Policy'
    }, {
      id: 3,
      url: '#2',
      text: 'Terms & Conditions'
    }, {
      id: 4,
      url: '#4',
      text: 'Site Map'
    }, {
      id: 5,
      url: '#5',
      text: 'Store Hours'
    }]
  }, {
    id: 3,
    title: 'My Account',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Press inquiries'
    }, {
      id: 2,
      url: '#2',
      text: 'Social media directories'
    }, {
      id: 3,
      url: '#3',
      text: 'Images & B-roll'
    }, {
      id: 4,
      url: '#4',
      text: 'Permissions'
    }, {
      id: 5,
      url: '#5',
      text: 'Speaker requests'
    }]
  }, {
    id: 4,
    title: 'Policy',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Application security'
    }, {
      id: 2,
      url: '#2',
      text: 'Software principles'
    }, {
      id: 3,
      url: '#3',
      text: 'Unwanted software policy'
    }, {
      id: 4,
      url: '#4',
      text: 'Responsible supply chain'
    }]
  }],
  social_profile: [{
    id: 1,
    icon: 'flaticon-facebook-logo',
    link: '#1'
  }, {
    id: 2,
    icon: 'flaticon-twitter-logo-silhouette',
    link: '#2'
  }, {
    id: 3,
    icon: 'flaticon-instagram',
    link: '#3'
  }, {
    id: 4,
    icon: 'flaticon-tumblr-logo',
    link: '#4'
  }, {
    id: 5,
    icon: 'flaticon-dribble-logo',
    link: '#5'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "../../node_modules/common/src/data/Agency2/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/data/Agency2/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/agency/blog/blog-img1.png */ "../../node_modules/common/src/assets/image/agency/blog/blog-img1.png");
/* harmony import */ var _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/agency/blog/blog-img2.png */ "../../node_modules/common/src/assets/image/agency/blog/blog-img2.png");
/* harmony import */ var _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/agency/blog/blog-img3.png */ "../../node_modules/common/src/assets/image/agency/blog/blog-img3.png");
/* harmony import */ var _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/agency/team/member-1.jpg */ "../../node_modules/common/src/assets/image/agency/team/member-1.jpg");
/* harmony import */ var _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/agency/team/member-2.jpg */ "../../node_modules/common/src/assets/image/agency/team/member-2.jpg");
/* harmony import */ var _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/agency/team/member-3.jpg */ "../../node_modules/common/src/assets/image/agency/team/member-3.jpg");
/* harmony import */ var _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/agency/client/denny.png */ "../../node_modules/common/src/assets/image/agency/client/denny.png");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/agency/client/menny.png */ "../../node_modules/common/src/assets/image/agency/client/menny.png");
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__);














var data = {
  menuItems: [{
    label: 'Feature',
    path: '#featureSection',
    offset: '80'
  }, {
    label: 'Work History',
    path: '#workHistorySection',
    offset: '100'
  }, {
    label: 'Portfolio',
    path: '#blogSection',
    offset: '100'
  }, {
    label: 'Quality feature',
    path: '#qualitySection',
    offset: '100'
  }, {
    label: 'Testimonial',
    path: '#testimonialSection',
    offset: '100'
  }, {
    label: 'Team Member',
    path: '#teamSection',
    offset: '67'
  }, {
    label: 'FAQ',
    path: '#faqSection',
    offset: '100'
  }],
  aboutus: [{
    id: 1,
    title: 'Amazing communication experience.',
    icon: 'flaticon-next'
  }, {
    id: 2,
    title: 'Best designing experience with trending tools and sizes.',
    icon: 'flaticon-next'
  }, {
    id: 3,
    title: 'Training and communication method remotely.',
    icon: 'flaticon-next'
  }, {
    id: 4,
    title: '24/7 Hour onine supports.',
    icon: 'flaticon-next'
  }],
  features: [{
    id: 1,
    icon: 'flaticon-flask',
    title: 'Search Optimization',
    description: 'By using Search Engine Optimization, You will get more Clients'
  }, {
    id: 2,
    icon: 'flaticon-pencil-case',
    title: 'Ui/UX Design',
    description: 'We provide the best UI/UX Design by following the latest trends of the market .'
  }, {
    id: 3,
    icon: 'flaticon-ruler',
    title: 'Wireframing Task',
    description: 'We respect our customer opinions and deals with them with perfect wireframing '
  }, {
    id: 4,
    icon: 'flaticon-startup',
    title: 'Business Solutions',
    description: 'We are commited to provide proper business solutions with reasonable pricing'
  }, {
    id: 5,
    icon: 'flaticon-briefing',
    title: 'Business Analysis',
    description: 'A day to day report about your ongoing business for proper understanding'
  }, {
    id: 6,
    icon: 'flaticon-creative',
    title: 'Content Management',
    description: 'Proper Content Management is important to find out the real clients for your agencies'
  }],
  qualityFeature: [{
    id: 1,
    icon: 'flaticon-flask',
    title: 'Search Optimization',
    description: 'By using Search Engine Optimization, You will get more Clients.'
  }, {
    id: 2,
    icon: 'flaticon-pencil-case',
    title: 'Wireframing Task',
    description: 'We respect our customer opinions and deals with them with perfect wireframing.'
  }, {
    id: 3,
    icon: 'flaticon-ruler',
    title: 'Ui/Ux Design',
    description: 'We provide the best UI/UX Design by following the latest trends of the market .'
  }, {
    id: 4,
    icon: 'flaticon-briefing',
    title: 'Content Writting',
    description: 'Proper Content Management is important to find out the real clients for your agencies .'
  }],
  blog: [{
    id: 1,
    title: 'Real home corporation',
    thumbnail_url: _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    date: 'November 02, 2018',
    postLink: '#1'
  }, {
    id: 2,
    title: 'Sheltech developer ltd.',
    thumbnail_url: _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    date: 'November 12, 2018',
    postLink: '#2'
  }, {
    id: 3,
    title: 'Alt architecture co.',
    thumbnail_url: _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    date: 'December 09, 2018',
    postLink: '#3'
  }, {
    id: 4,
    title: 'Real home corporation',
    thumbnail_url: _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    date: 'November 02, 2018',
    postLink: '#1'
  }, {
    id: 5,
    title: 'Sheltech developer ltd.',
    thumbnail_url: _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    date: 'November 12, 2018',
    postLink: '#2'
  }, {
    id: 6,
    title: 'Alt architecture co.',
    thumbnail_url: _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    date: 'December 09, 2018',
    postLink: '#3'
  }, {
    id: 7,
    title: 'Real home corporation',
    thumbnail_url: _assets_image_agency_blog_blog_img1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    date: 'November 02, 2018',
    postLink: '#1'
  }, {
    id: 8,
    title: 'Sheltech developer ltd.',
    thumbnail_url: _assets_image_agency_blog_blog_img2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    date: 'November 12, 2018',
    postLink: '#2'
  }, {
    id: 9,
    title: 'Alt architecture co.',
    thumbnail_url: _assets_image_agency_blog_blog_img3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    date: 'December 09, 2018',
    postLink: '#3'
  }],
  teamMember: [{
    id: 1,
    name: 'Syed Asif Parveez',
    thumbnail_url: _assets_image_agency_team_member_1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    designation: 'Co-Founder - Chief Executive Officer',
    social_links: ['flaticon-facebook-logo', 'flaticon-twitter-logo-silhouette', 'flaticon-instagram', 'flaticon-dribble-logo']
  }, {
    id: 2,
    name: 'Dameon Green',
    thumbnail_url: _assets_image_agency_team_member_2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    designation: 'Co-Founder - Chief Operating Officer',
    social_links: ['flaticon-twitter-logo-silhouette', 'flaticon-instagram', 'flaticon-facebook-logo', 'flaticon-dribble-logo']
  }, {
    id: 3,
    name: 'CFO Dude',
    thumbnail_url: _assets_image_agency_team_member_3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    designation: 'Article Writter',
    social_links: ['flaticon-dribble-logo', 'flaticon-twitter-logo-silhouette', 'flaticon-instagram', 'flaticon-facebook-logo']
  }],
  testimonial: [{
    id: 1,
    name: 'Denny Albuz',
    designation: 'CEO of Denish Co.',
    comment: 'Best working experience  with this amazing team & in future, we want to work together',
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 2,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment: 'Impressed with master class support of the team and really look forward for the future.',
    avatar_url: _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }, {
    id: 3,
    name: 'Caroleane Mina',
    designation: 'Director of Beauty-queen',
    comment: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme',
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 4,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment: 'Impressed with master class support of the team and really look forward for the future.',
    avatar_url: _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }],
  faq: [{
    id: 1,
    expend: true,
    title: 'How to contact with Customer Service?',
    description: 'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. '
  }, {
    id: 2,
    title: 'App installation failed, how to update system information?',
    description: 'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . '
  }, {
    id: 3,
    title: 'Website reponse taking time, how to improve?',
    description: 'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .'
  }, {
    id: 4,
    title: 'New update fixed all bug and issues?',
    description: 'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .'
  }],
  menuWidget: [{
    id: 1,
    title: 'About Us',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Support Center'
    }, {
      id: 2,
      url: '#2',
      text: 'Customer Support'
    }, {
      id: 3,
      url: '#3',
      text: 'About Us'
    }, {
      id: 4,
      url: '#4',
      text: 'Copyright'
    }, {
      id: 5,
      url: '#5',
      text: 'Popular Campaign'
    }]
  }, {
    id: 2,
    title: 'Our Information',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Return Policy'
    }, {
      id: 2,
      url: '#2',
      text: 'Privacy Policy'
    }, {
      id: 3,
      url: '#2',
      text: 'Terms & Conditions'
    }, {
      id: 4,
      url: '#4',
      text: 'Site Map'
    }, {
      id: 5,
      url: '#5',
      text: 'Store Hours'
    }]
  }, {
    id: 3,
    title: 'My Account',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Press inquiries'
    }, {
      id: 2,
      url: '#2',
      text: 'Social media directories'
    }, {
      id: 3,
      url: '#3',
      text: 'Images & B-roll'
    }, {
      id: 4,
      url: '#4',
      text: 'Permissions'
    }, {
      id: 5,
      url: '#5',
      text: 'Speaker requests'
    }]
  }, {
    id: 4,
    title: 'Policy',
    menuItems: [{
      id: 1,
      url: '#1',
      text: 'Application security'
    }, {
      id: 2,
      url: '#2',
      text: 'Software principles'
    }, {
      id: 3,
      url: '#3',
      text: 'Unwanted software policy'
    }, {
      id: 4,
      url: '#4',
      text: 'Responsible supply chain'
    }]
  }],
  social_profile: [{
    id: 1,
    icon: 'flaticon-facebook-logo',
    link: '#1'
  }, {
    id: 2,
    icon: 'flaticon-twitter-logo-silhouette',
    link: '#2'
  }, {
    id: 3,
    icon: 'flaticon-instagram',
    link: '#3'
  }, {
    id: 4,
    icon: 'flaticon-tumblr-logo',
    link: '#4'
  }, {
    id: 5,
    icon: 'flaticon-dribble-logo',
    link: '#5'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "../../node_modules/common/src/data/Portfolio/data.js":
/*!*********************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/data/Portfolio/data.js ***!
  \*********************************************************************************************************/
/*! exports provided: SOCIAL_PROFILES, MENU_ITEMS, AWARDS, PORTFOLIO_SHOWCASE, PROCESS_STEPS, SERVICE_LIST, SKILLS, CLIENTS, TESTIMONIAL, FOOTER_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_PROFILES", function() { return SOCIAL_PROFILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARDS", function() { return AWARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIO_SHOWCASE", function() { return PORTFOLIO_SHOWCASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_STEPS", function() { return PROCESS_STEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_LIST", function() { return SERVICE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENTS", function() { return CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIAL", function() { return TESTIMONIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_MENU", function() { return FOOTER_MENU; });
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons-kit/ionicons/socialTwitter */ "react-icons-kit/ionicons/socialTwitter");
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit/ionicons/socialFacebook */ "react-icons-kit/ionicons/socialFacebook");
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbbleOutline */ "react-icons-kit/ionicons/socialDribbbleOutline");
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGithub */ "react-icons-kit/ionicons/socialGithub");
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGoogleplusOutline */ "react-icons-kit/ionicons/socialGoogleplusOutline");
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons-kit/ionicons/socialInstagram */ "react-icons-kit/ionicons/socialInstagram");
/* harmony import */ var react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit_ionicons_socialReddit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit/ionicons/socialReddit */ "react-icons-kit/ionicons/socialReddit");
/* harmony import */ var react_icons_kit_ionicons_socialReddit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialReddit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-1.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-1.png");
/* harmony import */ var _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-2.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-2.png");
/* harmony import */ var _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-3.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-3.png");
/* harmony import */ var _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-4.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-4.png");
/* harmony import */ var _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/image/portfolio/award-1.png */ "../../node_modules/common/src/assets/image/portfolio/award-1.png");
/* harmony import */ var _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/portfolio/award-2.png */ "../../node_modules/common/src/assets/image/portfolio/award-2.png");
/* harmony import */ var _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/portfolio/award-3.png */ "../../node_modules/common/src/assets/image/portfolio/award-3.png");
/* harmony import */ var _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/image/portfolio/award-4.png */ "../../node_modules/common/src/assets/image/portfolio/award-4.png");
/* harmony import */ var _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/image/portfolio/portfolio-1.jpg */ "../../node_modules/common/src/assets/image/portfolio/portfolio-1.jpg");
/* harmony import */ var _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/image/portfolio/portfolio-2.jpg */ "../../node_modules/common/src/assets/image/portfolio/portfolio-2.jpg");
/* harmony import */ var _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/image/portfolio/step-1.png */ "../../node_modules/common/src/assets/image/portfolio/step-1.png");
/* harmony import */ var _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/image/portfolio/step-2.png */ "../../node_modules/common/src/assets/image/portfolio/step-2.png");
/* harmony import */ var _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/image/portfolio/step-3.png */ "../../node_modules/common/src/assets/image/portfolio/step-3.png");
/* harmony import */ var _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-1.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-1.svg");
/* harmony import */ var _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-2.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-2.svg");
/* harmony import */ var _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-3.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-3.svg");
/* harmony import */ var _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-4.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-4.svg");
/* harmony import */ var _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/image/portfolio/client-1.png */ "../../node_modules/common/src/assets/image/portfolio/client-1.png");
/* harmony import */ var _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/image/portfolio/client-2.png */ "../../node_modules/common/src/assets/image/portfolio/client-2.png");
/* harmony import */ var _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/image/portfolio/client-3.png */ "../../node_modules/common/src/assets/image/portfolio/client-3.png");
/* harmony import */ var _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/image/portfolio/client-4.png */ "../../node_modules/common/src/assets/image/portfolio/client-4.png");
/* harmony import */ var _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/image/portfolio/client-5.png */ "../../node_modules/common/src/assets/image/portfolio/client-5.png");
/* harmony import */ var _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assets/image/portfolio/client-6.png */ "../../node_modules/common/src/assets/image/portfolio/client-6.png");
/* harmony import */ var _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _assets_image_portfolio_client_7_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/image/portfolio/client-7.png */ "../../node_modules/common/src/assets/image/portfolio/client-7.png");
/* harmony import */ var _assets_image_portfolio_client_7_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_7_png__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _assets_image_portfolio_client_8_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../assets/image/portfolio/client-8.png */ "../../node_modules/common/src/assets/image/portfolio/client-8.png");
/* harmony import */ var _assets_image_portfolio_client_8_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_8_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _assets_image_portfolio_client_9_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../assets/image/portfolio/client-9.png */ "../../node_modules/common/src/assets/image/portfolio/client-9.png");
/* harmony import */ var _assets_image_portfolio_client_9_png__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_9_png__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _assets_image_portfolio_client_10_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../assets/image/portfolio/client-10.png */ "../../node_modules/common/src/assets/image/portfolio/client-10.png");
/* harmony import */ var _assets_image_portfolio_client_10_png__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_10_png__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-1.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-1.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-2.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-2.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-3.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-3.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_36__);





































var SOCIAL_PROFILES = [{
  icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__["socialTwitter"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__["socialFacebook"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__["socialDribbbleOutline"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__["socialGithub"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__["socialGoogleplusOutline"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialInstagram__WEBPACK_IMPORTED_MODULE_5__["socialInstagram"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialReddit__WEBPACK_IMPORTED_MODULE_6__["socialReddit"],
  url: '#'
}];
var MENU_ITEMS = [{
  label: 'ME',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'PROJECT',
  path: '#portfolio_section',
  offset: '0'
}, {
  label: 'AWARDS',
  path: '#awards_section',
  offset: '0'
}, {
  label: 'WHY ME?',
  path: '#process_section',
  offset: '0'
}];
var AWARDS = [{
  awardLogo: _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_12___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_13___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_14___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}];
var PORTFOLIO_SHOWCASE = [{
  title: 'DESIGN',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'DEVELOPMENT',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'ANIMATION',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'TV ADVERTISEMENT',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'MARKETING',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}];
var PROCESS_STEPS = [{
  image: _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_17___default.a,
  title: '1. Research',
  description: 'We work with you to understand user’s stories and validate your idea with real users using lean design sprints.'
}, {
  image: _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_18___default.a,
  title: '2. Design',
  description: 'Expanding on the insights gained, you’ll work closely with our design team to create an elegant design'
}, {
  image: _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_19___default.a,
  title: '3. Build',
  description: 'With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you '
}];
var SERVICE_LIST = [{
  title: 'UI/UX Design',
  listItems: [{
    content: 'Design Sprints'
  }, {
    content: 'User Research'
  }, {
    content: 'Visual Design'
  }, {
    content: 'Mobile App Design'
  }, {
    content: 'Tracking & Learning'
  }, {
    content: 'Building Traction'
  }]
}, {
  title: 'Web Development',
  listItems: [{
    content: 'ReactJS'
  }, {
    content: 'AngularJS'
  }, {
    content: 'ASP.NET MVC'
  }, {
    content: 'WordPress'
  }, {
    content: 'NodeJS'
  }, {
    content: 'GO'
  }]
}, {
  title: 'Mobile App Development',
  listItems: [{
    content: 'iOS'
  }, {
    content: 'Android'
  }, {
    content: 'React Native'
  }, {
    content: 'Ionic & Apache Cordova'
  }, {
    content: 'NodeJS'
  }, {
    content: '3D & VR'
  }]
}];
var SKILLS = [{
  title: 'Graphic Design',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
  successRate: '90'
}, {
  title: 'UI/UX Design',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
  successRate: '85'
}, {
  title: 'Web Application',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_22___default.a,
  successRate: '80'
}, {
  title: 'Mobile Application',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_23___default.a,
  successRate: '70'
}];
var CLIENTS = [{
  image: _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_24___default.a,
  title: 'Microsoft'
}, {
  image: _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  title: 'Airbnb'
}, {
  image: _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_26___default.a,
  title: 'Adidas'
}, {
  image: _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_27___default.a,
  title: 'IBM'
}, {
  image: _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_28___default.a,
  title: 'Amazon'
}, {
  image: _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_29___default.a,
  title: 'Google'
}, {
  image: _assets_image_portfolio_client_7_png__WEBPACK_IMPORTED_MODULE_30___default.a,
  title: 'IVSC'
}, {
  image: _assets_image_portfolio_client_8_png__WEBPACK_IMPORTED_MODULE_31___default.a,
  title: 'IPMS'
}, {
  image: _assets_image_portfolio_client_9_png__WEBPACK_IMPORTED_MODULE_32___default.a,
  title: 'Docusign'
}, {
  image: _assets_image_portfolio_client_10_png__WEBPACK_IMPORTED_MODULE_33___default.a,
  title: 'Polymath'
}];
var TESTIMONIAL = [{
  image: _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_34___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Thomas Cruz',
  designation: 'Founder & CEO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_35___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Marhta Robson',
  designation: 'Co-Founder & CTO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_36___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Dexter Patterson',
  designation: 'Co-Founder & COO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}];
var FOOTER_MENU = [{
  label: 'Contact',
  path: '#'
}, {
  label: 'Privacy',
  path: '#'
}, {
  label: 'Cookie Policy',
  path: '#'
}];

/***/ }),

/***/ "../../node_modules/common/src/data/Portfolio/data2.js":
/*!**********************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/data/Portfolio/data2.js ***!
  \**********************************************************************************************************/
/*! exports provided: SOCIAL_PROFILES, MENU_ITEMS, AWARDS, PORTFOLIO_SHOWCASE, PROCESS_STEPS, SERVICE_LIST, SKILLS, CLIENTS, TESTIMONIAL, FOOTER_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_PROFILES", function() { return SOCIAL_PROFILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARDS", function() { return AWARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIO_SHOWCASE", function() { return PORTFOLIO_SHOWCASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_STEPS", function() { return PROCESS_STEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_LIST", function() { return SERVICE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENTS", function() { return CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIAL", function() { return TESTIMONIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_MENU", function() { return FOOTER_MENU; });
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons-kit/ionicons/socialTwitter */ "react-icons-kit/ionicons/socialTwitter");
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit/ionicons/socialFacebook */ "react-icons-kit/ionicons/socialFacebook");
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbbleOutline */ "react-icons-kit/ionicons/socialDribbbleOutline");
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGithub */ "react-icons-kit/ionicons/socialGithub");
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGoogleplusOutline */ "react-icons-kit/ionicons/socialGoogleplusOutline");
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-1.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-1.png");
/* harmony import */ var _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-2.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-2.png");
/* harmony import */ var _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-3.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-3.png");
/* harmony import */ var _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-4.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-4.png");
/* harmony import */ var _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/portfolio/award-1.png */ "../../node_modules/common/src/assets/image/portfolio/award-1.png");
/* harmony import */ var _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/portfolio/award-2.png */ "../../node_modules/common/src/assets/image/portfolio/award-2.png");
/* harmony import */ var _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/image/portfolio/award-3.png */ "../../node_modules/common/src/assets/image/portfolio/award-3.png");
/* harmony import */ var _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/portfolio/award-4.png */ "../../node_modules/common/src/assets/image/portfolio/award-4.png");
/* harmony import */ var _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/portfolio/portfolio-1.jpg */ "../../node_modules/common/src/assets/image/portfolio/portfolio-1.jpg");
/* harmony import */ var _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/image/portfolio/portfolio-2.jpg */ "../../node_modules/common/src/assets/image/portfolio/portfolio-2.jpg");
/* harmony import */ var _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/image/portfolio/step-1.png */ "../../node_modules/common/src/assets/image/portfolio/step-1.png");
/* harmony import */ var _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/image/portfolio/step-2.png */ "../../node_modules/common/src/assets/image/portfolio/step-2.png");
/* harmony import */ var _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/image/portfolio/step-3.png */ "../../node_modules/common/src/assets/image/portfolio/step-3.png");
/* harmony import */ var _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-1.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-1.svg");
/* harmony import */ var _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-2.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-2.svg");
/* harmony import */ var _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-3.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-3.svg");
/* harmony import */ var _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-4.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-4.svg");
/* harmony import */ var _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/image/portfolio/client-1.png */ "../../node_modules/common/src/assets/image/portfolio/client-1.png");
/* harmony import */ var _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/image/portfolio/client-2.png */ "../../node_modules/common/src/assets/image/portfolio/client-2.png");
/* harmony import */ var _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/image/portfolio/client-3.png */ "../../node_modules/common/src/assets/image/portfolio/client-3.png");
/* harmony import */ var _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/image/portfolio/client-4.png */ "../../node_modules/common/src/assets/image/portfolio/client-4.png");
/* harmony import */ var _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/image/portfolio/client-5.png */ "../../node_modules/common/src/assets/image/portfolio/client-5.png");
/* harmony import */ var _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/image/portfolio/client-6.png */ "../../node_modules/common/src/assets/image/portfolio/client-6.png");
/* harmony import */ var _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-1.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-1.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-2.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-2.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-3.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-3.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30__);


































var SOCIAL_PROFILES = [{
  icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__["socialTwitter"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__["socialFacebook"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__["socialDribbbleOutline"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__["socialGithub"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__["socialGoogleplusOutline"],
  url: '#'
}];
var MENU_ITEMS = [{
  label: 'ME',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'PROJECT',
  path: '#portfolio_section',
  offset: '0'
}, {
  label: 'AWARDS',
  path: '#awards_section',
  offset: '0'
}, {
  label: 'WHY ME?',
  path: '#process_section',
  offset: '0'
}];
var AWARDS = [{
  awardLogo: _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}];
var PORTFOLIO_SHOWCASE = [{
  title: 'DESIGN',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'DEVELOPMENT',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'ANIMATION',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'TV ADVERTISEMENT',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'MARKETING',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}];
var PROCESS_STEPS = [{
  image: _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  title: '1. Signup',
  description: 'Sign up for Token Prop and get a wallet and account'
}, {
  image: _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  title: '2. Get TProp',
  description: 'Participate in Token sales or buy from exchanges. You may buy from other token holders as well. '
}, {
  image: _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17___default.a,
  title: '3. Browse properties on Token Investment Portal -TIP',
  description: 'Research individual investment offering and decide if any of the token offering are right for you. Analyze minimum investment, returns and condtions '
}, {
  image: _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  title: '4. Buy Property Tokens',
  description: 'Use your TProp Tokens in your wallet to participate in an offering for property investment'
}, {
  image: _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  title: '5. Exchange',
  description: 'Use your TProp tokens to exchange for other properties that are listed by market makers  '
}, {
  image: _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17___default.a,
  title: '6. Get Liquid',
  description: 'Cash out to Fiat or other common Crytos like ETH, Bitcoin, or XRP'
}];
var SERVICE_LIST = [{
  title: 'Benefits',
  listItems: [{
    content: 'Access to Investor and Trading Portal and to the Investment Property documentation. '
  }, {
    content: 'To avail a 20% discount on all Property Tokens for the first year of commencement. '
  }, {
    content: 'To access various Real Estate Investments training courses led by Industry professionals. '
  }, {
    content: 'To trade with other Cryptocurrencies on the public exchanges we get listed on. '
  }, {
    content: 'To pay the Platform fee, Trading and Transaction fee on PropX'
  }, {
    content: 'To get a 40% discount on listing fee (if you are a Developer looking for Capital from TokenProp)'
  }]
}, {
  title: 'Specs and Characteristics',
  listItems: [{
    content: 'ERC-20'
  }, {
    content: 'Utility'
  }, {
    content: 'Store of Non-Fiat Value'
  }, {
    content: 'WordPress'
  }, {
    content: 'NodeJS'
  }, {
    content: 'GO'
  }]
}];
var SKILLS = [{
  title: 'Graphic Design',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
  successRate: '90'
}, {
  title: 'UI/UX Design',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
  successRate: '85'
}, {
  title: 'Web Application',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
  successRate: '80'
}, {
  title: 'Mobile Application',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
  successRate: '70'
}];
var CLIENTS = [{
  image: _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22___default.a,
  title: 'Microsoft'
}, {
  image: _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  title: 'Airbnb'
}, {
  image: _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24___default.a,
  title: 'Adidas'
}, {
  image: _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  title: 'IBM'
}, {
  image: _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26___default.a,
  title: 'Amazon'
}, {
  image: _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27___default.a,
  title: 'Google'
}];
var TESTIMONIAL = [{
  image: _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Thomas Cruz',
  designation: 'Founder & CEO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Marhta Robson',
  designation: 'Co-Founder & CTO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Dexter Patterson',
  designation: 'Co-Founder & COO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}];
var FOOTER_MENU = [{
  label: 'Contact',
  path: '#'
}, {
  label: 'Privacy',
  path: '#'
}, {
  label: 'Cookie Policy',
  path: '#'
}];

/***/ }),

/***/ "../../node_modules/common/src/data/Ride/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/data/Ride/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: MENU_ITEMS, MENU_LEFT_ITEMS, MENU_RIGHT_ITEMS, Features, LatestNews, Testimonial, menuWidget, Language_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_LEFT_ITEMS", function() { return MENU_LEFT_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_RIGHT_ITEMS", function() { return MENU_RIGHT_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNews", function() { return LatestNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonial", function() { return Testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuWidget", function() { return menuWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language_NAMES", function() { return Language_NAMES; });
/* harmony import */ var _assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/ride/feature-2.svg */ "../../node_modules/common/src/assets/image/ride/feature-2.svg");
/* harmony import */ var _assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/ride/feature-1.svg */ "../../node_modules/common/src/assets/image/ride/feature-1.svg");
/* harmony import */ var _assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/ride/feature-3.svg */ "../../node_modules/common/src/assets/image/ride/feature-3.svg");
/* harmony import */ var _assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/ride/blog-1.svg */ "../../node_modules/common/src/assets/image/ride/blog-1.svg");
/* harmony import */ var _assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/ride/blog-2.svg */ "../../node_modules/common/src/assets/image/ride/blog-2.svg");
/* harmony import */ var _assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/saas/testimonial/client-1.jpg */ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg");
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/agency/client/denny.png */ "../../node_modules/common/src/assets/image/agency/client/denny.png");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__);







var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Ride',
  path: '#ride_section',
  offset: '70'
}, {
  label: 'Fare Estimate',
  path: '#fare_section',
  offset: '70'
}, {
  label: 'Features',
  path: '#feature_section',
  offset: '70'
}, {
  label: 'News',
  path: '#news_section',
  offset: '70'
}];
var MENU_LEFT_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'Ride',
  path: '#ride_section',
  offset: '70'
}, {
  label: 'Fare Estimate',
  path: '#fare_section',
  offset: '70'
}, {
  label: 'Features',
  path: '#feature_section',
  offset: '70'
}, {
  label: 'News',
  path: '#news_section',
  offset: '70'
}];
var MENU_RIGHT_ITEMS = [{
  label: 'Login',
  path: '#',
  offset: '70'
}, {
  label: 'Sign Up',
  path: '#',
  offset: '70'
}];
var Features = [{
  id: 1,
  img: "".concat(_assets_image_ride_feature_2_svg__WEBPACK_IMPORTED_MODULE_0___default.a),
  title: 'Delivery',
  description: 'Documents, accessories, packages and even gifts! Deliver them all within your city, in a jiffy!'
}, {
  id: 2,
  img: "".concat(_assets_image_ride_feature_1_svg__WEBPACK_IMPORTED_MODULE_1___default.a),
  title: 'Bike Share',
  description: 'All the Riders have been verified by us. Not random people with bikes that we don’t know.'
}, {
  id: 3,
  img: "".concat(_assets_image_ride_feature_3_svg__WEBPACK_IMPORTED_MODULE_2___default.a),
  title: 'Food',
  description: 'Order food from your favorite Place near you with the convenience of Godrive.'
}];
var LatestNews = [{
  id: 1,
  img: "".concat(_assets_image_ride_blog_1_svg__WEBPACK_IMPORTED_MODULE_3___default.a),
  title: 'Built for drivers, with drivers',
  description: 'The new Driver app helps you earn smarter and supports you–like a partner–at every turn.',
  buttonText: 'Learn More'
}, {
  id: 2,
  img: "".concat(_assets_image_ride_blog_2_svg__WEBPACK_IMPORTED_MODULE_4___default.a),
  title: 'Bike Share',
  description: 'All the Riders have been verified by us. Not random people with bikes that we don’t know.',
  buttonText: 'Learn More'
}];
var Testimonial = [{
  id: 1,
  name: 'Michal Corleone Jr.',
  designation: 'CEO of Invission Co.',
  comment: 'Love to work with this designer in every our future project to ensure we are going to build best prototyping features. Impressed with master class support of the team and really look forward for the future. A true passionate team.',
  avatar_url: _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  social_icon: 'flaticon-instagram'
}, {
  id: 2,
  name: 'Roman Ul Oman',
  designation: 'Co-founder of QatarDiaries',
  comment: 'Impressed with master class support of the team and really look forward for the future. A true passionate team. Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
  avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  social_icon: 'flaticon-twitter'
}];
var menuWidget = [{
  id: 1,
  title: 'About Us',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Support Center'
  }, {
    id: 2,
    url: '#',
    text: 'Customer Support'
  }, {
    id: 3,
    url: '#',
    text: 'About Us'
  }, {
    id: 4,
    url: '#',
    text: 'Copyright'
  }, {
    id: 5,
    url: '#',
    text: 'Popular Campaign'
  }]
}, {
  id: 2,
  title: 'Our Information',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Return Policy'
  }, {
    id: 2,
    url: '#',
    text: 'Privacy Policy'
  }, {
    id: 3,
    url: '#',
    text: 'Terms & Conditions'
  }, {
    id: 4,
    url: '#',
    text: 'Site Map'
  }, {
    id: 5,
    url: '#',
    text: 'Store Hours'
  }]
}, {
  id: 3,
  title: 'My Account',
  menuItems: [{
    id: 1,
    url: '#',
    text: 'Press inquiries'
  }, {
    id: 2,
    url: '#',
    text: 'Social media directories'
  }, {
    id: 3,
    url: '#',
    text: 'Images & B-roll'
  }, {
    id: 4,
    url: '#',
    text: 'Permissions'
  }, {
    id: 5,
    url: '#',
    text: 'Speaker requests'
  }]
}];
var Language_NAMES = [{
  label: 'English',
  value: 'eng'
}, {
  label: 'Chinese',
  value: 'chinese'
}, {
  label: 'Indian',
  value: 'indian'
}];

/***/ }),

/***/ "../../node_modules/common/src/data/Saas/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/data/Saas/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: Faq, Features, Footer_Data, Service, Timeline, Testimonial, MENU_ITEMS, MONTHLY_PRICING_TABLE, YEARLY_PRICING_TABLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return Faq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer_Data", function() { return Footer_Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonial", function() { return Testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHLY_PRICING_TABLE", function() { return MONTHLY_PRICING_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARLY_PRICING_TABLE", function() { return YEARLY_PRICING_TABLE; });
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/saas/testimonial/client-1.jpg */ "../../node_modules/common/src/assets/image/saas/testimonial/client-1.jpg");
/* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/agency/client/denny.png */ "../../node_modules/common/src/assets/image/agency/client/denny.png");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1__);


var Faq = [{
  id: 1,
  expend: true,
  title: 'What is Tokenprop?',
  description: 'Tokenprop is a Real Estate investment and Trading Company based in UAE. The Company provides specialized Blockchain based Real estate investment products. '
}, {
  id: 2,
  title: 'What is Tokenprop Investment Platform (TIP)?',
  description: 'TIP is one of the products by Tokenprop. Tokenprop connects issuers (Sponsors, Developers, Property owners etc.,) with investors and fulfils the needs of both parties by providing the needed capital to issuers and by offering good investment opportunities to Investors, this process is facilitated by Tokenprop investment Platform. Instead of share certificates, Investors receive security tokens from the property called ‘Property Tokens’ which are tradable and offers multiple benefits'
}, {
  id: 3,
  title: 'What is PropX?',
  description: 'PropX is yet another product of Tokenprop, it is a securities Token exchange for trading of property tokens. This is an alternate of TIP for issuers (Sponsors, Developers, Property owners etc.,) to raise Capital and for investors to invest in properties. The only difference being that on TIP investors invest via Tokenprop while on PropX they invest directly. '
}, {
  id: 4,
  title: 'What is TPROP and where should I purchase it?',
  description: ' TPROP is a native utility token for Tokenprop. It allows for accessing different services of the platform. For example: 1.	Investors and Issuers will use TPROP to pay the yearly registration fee to access the Investor Portal and Issuer’s Portal respectively.  2.	To access detailed Investment prospectus for any listed Property after onboarding. 3.	To pay the platform fee in order to be able to invest in a specific Property. 4.	To exchange with utility ‘Timeshare’ Tokens of invested properties, where applicable. 5.	To pay the fees on PropX (eg., registration fee, transaction fees, listing fee, report/data fees etc.,) 6.	To access various Real Estate Investments training courses led by Industry professionals.  7.	Issuers (sponsors, property Owners or developers), can avail a 40% discount on listing fee if paid using TPROP.    8.	To trade it like any other token on public exchanges that we get listed on.  TPROP is for sale during the ICO at a discounted price, while after the ICO, it can be purchased on the Cryptocurrency exchanges we get listed on at a higher price. '
}, {
  id: 5,
  title: 'What are Property Tokens and how do I purchase them? ',
  description: "Property Tokens are security tokens of different Properties Investment offerings available on the platform. They are specific to each property and offer different types of returns and benefits. Investors can choose to pick the properties that best suit their interest. Property Tokens can be purchased by participating in the token sale of Properties on the dates listed similar to participating in an ICO. They can also be purchased on PropX when they are made available for sale"
}, {
  id: 6,
  expend: true,
  title: '	What are the benefits of purchasing Property Tokens? ',
  description: 'Property Tokens are equivalent of equity rights in the property. They provide the investor with many great benefits. Fractional ownership in the Property.	 Rights to Transfer Ownership.  An Entitlement to Dividends.  Opportunity to Inspect Property records. The right to Sue for wrongful acts. These Tokens can be used for: Earning dividends from the Property’s transaction (resale or rent, depending upon Property type).  Trading with other Property Tokens on PropX or other third party Security Token exchanges.These tokens can be sold on the market anytime to redeem BTC/ETHER/USDT or fiat back to your wallet offering massive liquidiy. Some properties offer additional type of tokens free of cost with the purchase of the Property tokens, they are called ‘Utility Timeshare tokens’. They can be used to redeem different services depending upon the Property type invested, for example, accommodations at Hotels/Resorts, free or discounted merchandise at malls, access to co-working spaces, medical facilities, Self-storage etc., '
}, {
  id: 7,
  title: 'How can non-accredited Investors benefit from the platform? ',
  description: 'TPROP tokens are utility tokens which can be purchased by anyone. These can be held or traded on any Cryptocurrency exchanges that we get listed on.  Also, Tokenprop will also offer investments under REG S and A+ where appropriate where non-accredited investors can participate too. This is applicable for TIP and PropX. '
}, {
  id: 8,
  title: 'What information is available on individual Property Token?',
  description: 'Each of the Property Token is linked to different sets of information.  1.	Dividend information like Dividend amount, Date of Dividend declaration, date of last cum-dividend, Ex-date, record date and Date of dividend payment. Holders of Property Tokens receive periodic performance reports, Dividend Share report, Fact Sheet, Historic Performance, Quarterly updates, Prospectus, latest announcements etc., In addition, it also contains the below. -----Example below: <> IRR: low 20’s  <>  Equity multiple: 1.5x  <> Hold period: 2-5 years. <>  The deal is underwritten for a 5 year hold but most of their past deals are sold after 1-3 years. <> Cap rate: 3.5 <>  Preferred Return: 8% <> Cash on Cash: 0% during the first year of repositioning and rehab. 6-7% after the first year.  <>  Waterfall:  After preferred return to investors pari parsu and after return of capital, 60/40 in favor of the LP investor to 30% IRR hurdle, then 50/50 split.  <> GP equity: 10%  <> Debt:  Senior debt with interest only payment for the first two years, then principal plus interest starting in year three. 70% LTV  <>  Sponsor’s equity (skin in the game): At least 10%.    2.	The property information includes, property photos, documentation, website, description, total size, tokenized equity etc.,   '
}, {
  id: 9,
  title: '	What information is shared to investors for their investments?    ',
  description: "The below information is shared every quarter: One Page Property Summary - each quarter's activities, Rental income, Operating expenses, Operating Cash flow, Occupancy Rate, Average rent/unit, Property Photos. "
}, {
  id: 10,
  title: ' Why am I paying TPROPs in order to be able to invest in a Property?  ',
  description: "This is a fee for Tokenprop, this enables us to operate, study the market thoroughly and find you the best deals.  "
}, {
  id: 11,
  title: 'Are there Tax benefits for such Investments? ',
  description: " There are certain tax advantages to investing in commercial real estate.  Investors can participate in the depreciation of an asset.  In many cases, the depreciation can be accelerated by an accounting technique called cost segregation.  This technique can increase immediate cash-flow and is an example of the general principle of 'a dollar today is worth more than a dollar tomorrow'.  This depreciation can be used to 'shield' cash flow from rental income.  The depreciation is of course recaptured when the property is sold, but it is taxed at the Section 1250 gain rate of 25%.  In addition, when the property is sold and there is a true capital gain, the gains are taxed at the long term capital gain rate which is usually lower than the ordinary income rate.  The pass-through nature of the sponsor’s company (usually an LLC or a limited partnership) together with that of the Tokenprop LLC allows investors to enjoy the tax benefits of direct real estate ownership; this is a significant difference between our “direct participation” structures and REITs, for example, which don’t feature all the benefits of a direct pass-through.\u2028These tax benefits can include depreciation, mortgage interest, and other deductions that often offset (sometimes entirely) the actual distributable cash — so that investors may receive distributions throughout the year and yet may have little or no taxable income. Much or all of this tax advantage is subject to “recapture” at a later date, however, at the time that the property is sold; nevertheless, the tax deferral benefit of real estate equity investments can be a significant one. "
}, {
  id: 12,
  title: ' Do we pay taxes for the Capital gains we make in the Investment?  ',
  description: "Yes, this depends upon the Tax payer’s jurisdiction.  "
}, {
  id: 13,
  title: 'How do you vet the Investment options offered on TIP?',
  description: 'We have several methods to analyze the viability of a potential project, the most common being the weighted average cost of capital (WACC) as a discount rate, which is the average cost the company pays for capital from borrowing or selling equity. In either case, the net present value of all cash flows should be positive to proceed with the investment or the project.  '
}, {
  id: 14,
  title: 'What happens if someone loses his/her private key for wallets?  ',
  description: "Since these are security tokens, the investor simply needs to send a notarized sworn affidavit of the loss to us. We will cancel the hacked or lost tokens and issue new tokens. The investor and their investment are now whole again. This is critical because properly issues securities cannot be lost or inaccessible. These are real assets with owners.    "
}, {
  id: 15,
  title: 'What happens to my Wallet and my investments in case of my death, can I nominate someone else? ',
  description: "Yes, the portal allows for addition of nominees. In case of unforeseen circumstances including death, the nominee must register the death certificate and raise a request to Tokenprop. A new Wallet will be provided to the nominee and the Tokens will be restored.   "
}, {
  id: 16,
  title: 'When will Property Tokens start to payout dividends?',
  description: 'The dividends will be paid at different times for different Property Tokens, there is different maturity period for different Tokens. If the investor chooses to retain the Tokens inside the wallet, then the dividends get paid directly to the Investor’s Bank account. The earliest a payout can be received is at the end of third month of investment. Daily traders on PropX are more likely to be interested in the value of the Token which is determined by Supply and Demand, instead of the inherent dividend a particular Property Token offers. There will also be Tokens that are paying out dividends already, for such tokens it is important to know the below dates, which are all also embedded on the Tokens: 1) Date of Dividend declaration, this is the date when the Property LLC declares the date of Dividend distribution.   2) Date of Last Cum-dividend, the date up-to which the tokens can be bought on PropX and be eligible to receive dividend is called the Last cum-dividend date.   3) Ex-date, The ex-date usually precedes the record date by about two. On or after this date, the Property Tokens will trade without its dividend. the buyer of the Tokens on or after the ex-date will not be eligible for the dividends. However, if you sell tokens on the ex-date, you will still be eligible for dividends.  4) Record date - The record date is the day on which the company looks at its records to see who its Token holders are (Wallets).  5) Date of Dividend payment.   '
}, {
  id: 17,
  title: 'Why is the initial Lockup period of three months necessary? ',
  description: "This lockup period is necessary for us to settle transaction, manage agreements with issuers and handle currency conversions and money transfers.   "
}, {
  id: 18,
  title: 'Where will I hold my Tokens for trading on PropX?  ',
  description: "On PropX Wallet or on the PropX exchange, the choice is with the trader.  "
}, {
  id: 19,
  title: '	What if there are no takers for my Property Token on the exchange? ',
  description: "We on-board specialist market makers and liquidity tools to ensure there is always sufficient liquidity on PropX.   "
}, {
  id: 20,
  title: 'Do the tokens for non-income generating properties (Ground-Up New developments) also pay dividends?  ',
  description: ' No, all such Property Tokens are traded Ex-Dividend (traded without dividends dates) although may they have tentative Payout dates.  '
}, {
  id: 21,
  title: 'How exactly will the value of Property Token be determined?  ',
  description: " The Token will show the Property Type (Land/Hotel/Hospital/Residential/Commercial Apartment), it will show where it is located, when will be the first payout, how much will be the dividend, and if the property offers any timeshare benefits. These factors if appealing to any Investor should alleviate the demand for the tokens  "
}];
var Features = [{
  id: 1,
  icon: 'flaticon-creative',
  title: 'Property Tokenization',
  description: 'Automatically create liquidity buy converting property equity into tokens, allowing for a larger range of investors to purchase interest in property '
}, {
  id: 2,
  icon: 'flaticon-briefing',
  title: 'Micro-Equity Investment',
  description: 'Our platform allows an investor to invest as litte as 100 USD in a real estate project? No need to an accredited investor .'
}, {
  id: 3,
  icon: 'flaticon-flask',
  title: 'Dedicated Property Token Exchange',
  description: 'PropX will function as a dedicated exchange for our property tokens created in TIP platform. This will allow investors and property owners to get instant liquidity.'
}, {
  id: 4,
  icon: 'flaticon-creative',
  title: 'Low Capital Investment',
  description: 'Invest as little as 100USD to acquire part of a property or development'
}, {
  id: 5,
  icon: 'flaticon-briefing',
  title: 'Global Real Estate Investment',
  description: 'Use our TIP -(Token Investment Platform) to access properties around the globe.'
}, {
  id: 6,
  icon: 'flaticon-flask',
  title: 'Fixed Yields',
  description: 'Know what return you will recieve on your investment. We provide the information you need to make decisions.'
}];
var Footer_Data = [{
  title: 'About Us',
  menuItems: [{
    url: '#faq',
    text: 'FAQs'
  }, {
    url: '#',
    text: 'Customer Support'
  }, {
    url: '#',
    text: 'About Us'
  }, {
    url: '#',
    text: 'Careers'
  }, {
    url: '#',
    text: 'Copyright'
  }, {
    url: '#',
    text: 'Popular Properties'
  }]
}, {
  title: 'Our Information',
  menuItems: [{
    url: '#',
    text: 'Privacy Policy'
  }, {
    url: '#',
    text: 'Terms & Conditions'
  }, {
    url: '#',
    text: 'Site Map'
  }]
}, {
  title: 'My Account',
  menuItems: [{
    url: '#',
    text: 'Press inquiries'
  }, {
    url: '#',
    text: 'Social media directories'
  }, {
    url: '#',
    text: 'Images & B-roll'
  }, {
    url: '#',
    text: 'Permissions'
  }, {
    url: '#',
    text: 'Speaker requests'
  }]
}, {
  title: 'Policy',
  menuItems: [{
    url: '#',
    text: 'Application security'
  }, {
    url: '#',
    text: 'Software principles'
  }, {
    url: '#',
    text: 'Unwanted software policy'
  }, {
    url: '#',
    text: 'Responsible supply chain'
  }]
}];
var Service = [{
  id: 1,
  icon: 'flaticon-briefing',
  title: 'App Development',
  description: 'We are specialized at custom Saas Application Development and special features .'
}, {
  id: 2,
  icon: 'flaticon-trophy',
  title: 'Dedicated Wallet',
  description: 'Dedicated wallet that connects to both platforms (TIP + PropX). Use our mobile app for IOS and Android anywhere your go. Hold TProp tokens as well as your property tokens.'
}, {
  id: 3,
  icon: 'flaticon-atom',
  title: 'Cloud Stroage',
  description: 'LiteSpeed Web Server known for its high performance and low resource consumption.'
}, {
  id: 4,
  icon: 'flaticon-ruler',
  title: 'Dedicated Market-Makers',
  description: 'Brokers acting as market-makers for exchange on PropX. '
}, {
  id: 5,
  icon: 'flaticon-creative',
  title: 'UX Planning',
  description: 'We provide the best UI/UX Design by following the latest trends of the market  .'
}, {
  id: 6,
  icon: 'flaticon-conversation',
  title: 'Customer Support',
  description: 'A Dedicated support team is always ready to provide best support to our customers.'
}];
var Timeline = [{
  title: 'July 2018 - Concept phase for project & Beginning Research',
  description: 'Discussion and description of market need for Token Prop and property liquidity in markets'
}, {
  title: 'Aug 2018 - Project Services Design',
  description: 'We decided to work from the ground up to figure out what the market neets. Investors need options and developers need liquidity .'
}, {
  title: 'Sept 2018 - Beginning Local Development',
  description: 'Beginning development and acquisition strategy for UAE.'
}, {
  title: 'Oct 2018 - Team Member Acquisition',
  description: 'Assembly of Founders, Co-Founders and initial partners.'
}, {
  title: 'Nov 2018 - Whitepaper and Business documentation for Token Prop',
  description: 'Began describing the inner workings of the platform and Branding materials.'
}, //addd on here
{
  title: 'Jan 2019 - Developed Operating Structure',
  description: 'Development of a partnership model for TPROP ecosystem. Development of legal agreements and operating structure. Start of the platform development.'
}, {
  title: 'Feb 2019 - Preparation for Token Sale',
  description: 'Development of a smart contract for TRPOP token release. PreICO conducting. Continue the development of the platform. Ecosystem formation and launch strategy.'
}, {
  title: 'May 2019 - ICO conducting - Token Sale Beginning',
  description: 'TPROP platform development. Start of the marketing campaign to attract end-users. Final design and concept of PropX exchange .'
}, {
  title: 'June 2019 - Technological Integration',
  description: 'The platform integration with Ethereum blockchain. Integration with partner applications. Release of platform’s beta version. Start of Token Prop wallet development..'
}, {
  title: 'July 2019 - Wallet and Exchange Release',
  description: 'PropX exchange is live. Continuation of an active marketing campaign to attract end-users. Post -sale relocation.'
}, {
  title: 'Aug 2019 - Market Expansion',
  description: 'Further development of the ecosystem and expansion of target markets. Includes USA and UK.'
}, {
  title: 'Jan 2020 - Launch of TProp Fund',
  description: 'Fund created to invest in and tokenize properties in-house'
}];
var Testimonial = [{
  id: 1,
  name: 'Michal Andry',
  designation: 'Ceo of Invission Co.',
  comment: 'Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
  avatar_url: _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  social_icon: 'flaticon-instagram'
}, {
  id: 2,
  name: 'Roman Ul Oman',
  designation: 'Co-founder of QatarDiaries',
  comment: 'Impressed with master class support of the team and really look forward for the future. A true passionate team.',
  avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  social_icon: 'flaticon-twitter-logo-silhouette'
}];
var MENU_ITEMS = [{
  label: 'Home',
  path: '#banner_section',
  offset: '70'
}, {
  label: 'About TProp',
  path: '#about_tprop',
  offset: '70'
}, {
  label: 'How It Works',
  path: '#service_section',
  offset: '70'
}, {
  label: 'TIP Platform',
  path: '#visitorSection',
  offset: '70'
}, // {
//   label: 'Developers',
//   path: '#pricing_section',
//   offset: '70',
// },
{
  label: 'Whitepaper',
  path: '#pricing_section',
  offset: '70'
}, // {
//   label: 'Packages',
//   path: '#pricing_section',
//   offset: '70',
// },
{
  label: 'PropX',
  path: '/ride',
  offset: '70'
}, {
  label: 'Medium',
  path: 'http://www.medium.com',
  offset: '70'
}];
var MONTHLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For Small teams or group who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Mediums teams or group who need to build website ',
  price: '$9.87',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$12.98',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}];
var YEARLY_PRICING_TABLE = [{
  freePlan: true,
  name: 'Basic Account',
  description: 'For a single client or team who need to build website ',
  price: '$0',
  priceLabel: 'Only for first month',
  buttonLabel: 'CREATE FREE ACCOUNT',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '1,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: 'eCommerce Store '
  }, {
    content: '30+ Webmaster Tools'
  }]
}, {
  name: 'Business Account',
  description: 'For Small teams or group who need to build website ',
  price: '$6.00',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Unlimited secure storage'
  }, {
    content: '2,000s of Templates Ready'
  }, {
    content: 'Blog Tools'
  }, {
    content: '24/7 phone support'
  }, {
    content: '50+ Webmaster Tools'
  }]
}, {
  name: 'Premium Account',
  description: 'For Large teams or group who need to build website ',
  price: '$9.99',
  priceLabel: 'Per month & subscription yearly',
  buttonLabel: 'START FREE TRIAL',
  url: '#',
  listItems: [{
    content: 'Drag & Drop Builder'
  }, {
    content: '3,000s of Templates Ready'
  }, {
    content: 'Advanced branding'
  }, {
    content: 'Knowledge base support'
  }, {
    content: '80+ Webmaster Tools'
  }]
}];

/***/ }),

/***/ "../../node_modules/common/src/theme/saas/colors.js":
/*!*******************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/theme/saas/colors.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#0f2137',
  textColor: '#5d646d',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#5268db',
  // 8
  primaryHover: '#5268db',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  primaryBoxShadow: ' 0px 9px 19.74px 1.26px rgba(82, 104, 219, 0.57) '
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/saas/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/common/src/theme/saas/index.js ***!
  \******************************************************************************************************/
/*! exports provided: saasTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saasTheme", function() { return saasTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/saas/colors.js");

var saasTheme = {
  breakpoints: [575, 768, 990, 1440],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      border: '1px solid',
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
        backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)'
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)',
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)'
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    transparentBg: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      padding: 0,
      height: 'auto',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/next/dist/client/link.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "../../node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!**************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/next/dist/client/router.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!*******************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/next/dist/client/with-router.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/next/link.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/next/router.js":
/*!**************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/next/router.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!**************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/rc-drawer/assets/index.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!*************************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Animation/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!***********************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Box/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Box/index.js";





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div')(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  /* button default style */\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  background-color: ", ";\n  min-height: ", "px;\n  min-width: ", "px;\n  border-radius: ", "px;\n  font-family: inherit;\n  font-size: ", "px;\n  font-weight: ", ";\n  text-decoration: none;\n  text-transform: capitalize;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  border: 0;\n  transition: all 0.3s ease;\n  span.btn-text {\n    padding-left: ", "px;\n    padding-right: ", "px;\n  }\n  span.btn-icon {\n    display: flex;\n    > div {\n      display: flex !important;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* Material style goes here */\n  &.is-material {\n    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  }\n\n  /* When button on loading stage */\n  &.is-loading {\n    .btn-text {\n      padding-left: ", "px;\n      padding-right: ", "px;\n    }\n  }\n\n  /* Style system support */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Button/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Button/index.js";





var Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loader ? loader : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })) : icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), position === 'left' && buttonIcon, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Card/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Card/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Card/index.js";






var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('div')(_base__WEBPACK_IMPORTED_MODULE_8__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"], Object(_base__WEBPACK_IMPORTED_MODULE_8__["themed"])('Card'));

var Card = function Card(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), children);
};

Card.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
}, styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"].propTypes, _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"].propTypes);
Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Drawer/index.js";





var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, closeButton), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, drawerHandler));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Heading/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Heading/index.js";





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Image/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Image/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Image/index.js";




var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('img')({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src,
    alt: alt
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Input/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.style */ "../../node_modules/reusecore/src/elements/Input/input.style.js");




var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Input/index.js";




var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      inputType = _ref.inputType,
      isMaterial = _ref.isMaterial,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      passwordShowHide = _ref.passwordShowHide,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // toggle function


  var handleToggle = function handleToggle() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  var handleOnFocus = function handleOnFocus(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  var handleOnBlur = function handleOnBlur(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  var handleOnChange = function handleOnChange(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  var getInputFocusClass = function getInputFocusClass() {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  var inputElement, htmlFor; // Add all classs to an array

  var addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  var LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  var LabelField = label && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, label); // Input type check

  switch (inputType) {
    case 'textarea':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
      break;

    case 'password':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), passwordShowHide && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["EyeButton"], {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })));
      break;

    default:
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), icon && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "input-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, icon));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(addAllClasses.join(' '), " ").concat(getInputFocusClass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


Input.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['string', 'number']),

  /** Make default input into material style input. */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['text', 'email', 'password', 'number', 'textarea']),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['left', 'right']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/input.style.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Input/input.style.js ***!
  \*******************************************************************************************************************/
/*! exports provided: EyeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeButton", function() { return EyeButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 43px;\n  height: 40px;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  right: 0;\n  position: absolute;\n  outline: none;\n  cursor: pointer;\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n\n  > span {\n    width: 12px;\n    height: 12px;\n    display: block;\n    border: solid 1px ", ";\n    border-radius: 75% 15%;\n    transform: rotate(45deg);\n    position: relative;\n\n    &:before {\n      content: '';\n      display: block;\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      left: 3px;\n      top: 3px;\n      position: absolute;\n      border: solid 1px ", ";\n    }\n  }\n\n  &.eye-closed {\n    > span {\n      &:after {\n        content: '';\n        display: block;\n        width: 1px;\n        height: 20px;\n        left: calc(50% - 1px / 2);\n        top: -4px;\n        position: absolute;\n        background-color: ", ";\n        transform: rotate(-12deg);\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n\n  /* Input field wrapper */\n  .field-wrapper {\n    position: relative;\n  }\n\n  /* If input has icon then these styel */\n  &.icon-left,\n  &.icon-right {\n    .field-wrapper {\n      display: flex;\n      align-items: center;\n      > .input-icon {\n        position: absolute;\n        top: 0;\n        bottom: auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 34px;\n        height: 40px;\n      }\n    }\n  }\n\n  /* When icon position in left */\n  &.icon-left {\n    .field-wrapper {\n      > .input-icon {\n        left: 0;\n        right: auto;\n      }\n      > input {\n        padding-left: 34px;\n      }\n    }\n  }\n\n  /* When icon position in right */\n  &.icon-right {\n    .field-wrapper {\n      > .input-icon {\n        left: auto;\n        right: 0;\n      }\n      > input {\n        padding-right: 34px;\n      }\n    }\n  }\n\n  /* Label default style */\n  label {\n    display: block;\n    color: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    margin-bottom: ", "px;\n    transition: 0.2s ease all;\n  }\n\n  /* Input and textarea default style */\n  textarea,\n  input {\n    font-size: 16px;\n    padding: 11px;\n    display: block;\n    width: 100%;\n    color: ", ";\n    box-shadow: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n    border: 1px solid ", ";\n    transition: border-color 0.2s ease;\n    &:focus {\n      outline: none;\n      border-color: ", ";\n    }\n  }\n\n  textarea {\n    min-height: 150px;\n  }\n\n  /* Input material style */\n  &.is-material {\n    label {\n      position: absolute;\n      left: 0;\n      top: 10px;\n    }\n\n    input,\n    textarea {\n      border-radius: 0;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      padding-left: 0;\n      padding-right: 0;\n    }\n\n    textarea {\n      min-height: 40px;\n      padding-bottom: 0;\n    }\n\n    .highlight {\n      position: absolute;\n      height: 1px;\n      top: auto;\n      left: 50%;\n      bottom: 0;\n      width: 0;\n      pointer-events: none;\n      transition: all 0.2s ease;\n    }\n\n    /* If input has icon then these styel */\n    &.icon-left,\n    &.icon-right {\n      .field-wrapper {\n        flex-direction: row-reverse;\n        > .input-icon {\n          width: auto;\n        }\n        > input {\n          flex: 1;\n        }\n      }\n    }\n\n    /* When icon position in left */\n    &.icon-left {\n      .field-wrapper {\n        > input {\n          padding-left: 20px;\n        }\n      }\n      label {\n        top: -15px;\n        font-size: 12px;\n      }\n    }\n\n    /* When icon position in right */\n    &.icon-right {\n      .field-wrapper {\n        > input {\n          padding-right: 20px;\n        }\n      }\n    }\n\n    /* Material input focus style */\n    &.is-focus {\n      input {\n        border-color: ", ";\n      }\n\n      label {\n        top: -16px;\n        font-size: 12px;\n        color: ", ";\n      }\n\n      .highlight {\n        width: 100%;\n        height: 2px;\n        background-color: ", ";\n        left: 0;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var InputField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.labelColor', '#767676'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'));
var EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject2(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Link/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Link/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Link/index.js";




var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('a')({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Link'));

var Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Loader/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Loader/index.js";




var Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  /* loader default style */\n  display: inline-flex;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  overflow: hidden;\n  border-width: 2px;\n  border-style: solid;\n  border-color: ", ";\n  border-top-color: transparent !important;\n\n  /* animation goes here */\n  ", "\n  /* Style system custome color variant */\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject(), function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, _Animation__WEBPACK_IMPORTED_MODULE_5__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_6__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Navbar/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Navbar/index.js";




var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/** Navbar default proptype */

Navbar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Navbar/navbar.style.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* Navbar default style goes here */\n  display: flex;\n  align-items: center;\n  min-height: 56px;\n  padding: 10px 16px;\n  \n  /* Style system supported prop */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var NavbarStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Select/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Select/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _select_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select.style */ "../../node_modules/reusecore/src/elements/Select/select.style.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Select/index.js";





var Select = function Select(_ref) {
  var className = _ref.className,
      labelText = _ref.labelText,
      labelPosition = _ref.labelPosition,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "labelText", "labelPosition"]);

  // Add all classes to an array
  var addAllClasses = ['reusecore__select']; // Add label position class

  if (labelPosition) {
    addAllClasses.push("label_".concat(labelPosition));
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  }

  var LabelField = labelText && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "reusecore__field-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, labelText);
  var position = labelPosition || 'top';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_select_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, position === 'left' || position === 'right' || position === 'top' ? LabelField : '', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "select-field__wrapper",
    classNamePrefix: "select"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), position === 'bottom' && LabelField);
};

Select.propTypes = {
  /** You can add your custom class for select wrapper component.
   * note: We manualy add react-select className and classNamePrefix props value */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** labelText of the select field */
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** Set label position of the select field. By default it's top */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['top', 'bottom', 'left', 'right'])
};
Select.defaultProps = {
  as: 'div',
  labelPosition: 'top'
};
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Select/select.style.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Select/select.style.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* Select label default style */\n  .reusecore__field-label {\n    color: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n  }\n\n  /* Select label style when labelPosition on left */\n  &.label_left {\n    display: flex;\n    align-items: center;\n    .reusecore__field-label {\n      margin-right: ", "px;\n    }\n  }\n\n  /* Select label style when labelPosition on right */\n  &.label_right {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n\n    .reusecore__field-label {\n      margin-left: ", "px;\n    }\n  }\n\n  /* Switch label style when labelPosition on top || bottom */\n  &.label_top {\n    .reusecore__field-label {\n      display: flex;\n      margin-bottom: ", "px;\n    }\n  }\n  &.label_bottom {\n    .reusecore__field-label {\n      display: flex;\n      margin-top: ", "px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SelectStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.labelColor', '#767676'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'));
SelectStyle.displayName = 'SelectStyle';
SelectStyle.defaultProps = {
  as: 'div'
};
/* harmony default export */ __webpack_exports__["default"] = (SelectStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Text/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/Text/index.js";





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js");


var _jsxFileName = "/Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/UI/Logo/index.js";






var Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, logoWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), withAchor ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anchorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!******************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/elements/base.js ***!
  \******************************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!************************************************************************************************************!*\
  !*** /Users/dameongreen/Downloads/SuperProps/SuperProps/node_modules/reusecore/src/theme/customVariant.js ***!
  \************************************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./pages/TIP.js":
/*!**********************!*\
  !*** ./pages/TIP.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
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

/***/ }),

/***/ 5:
/*!****************************!*\
  !*** multi ./pages/TIP.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dameongreen/Downloads/SuperProps/SuperProps/packages/landing/pages/TIP.js */"./pages/TIP.js");


/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "rc-progress":
/*!******************************!*\
  !*** external "rc-progress" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-progress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/entypo/minus":
/*!***********************************************!*\
  !*** external "react-icons-kit/entypo/minus" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/minus");

/***/ }),

/***/ "react-icons-kit/entypo/plus":
/*!**********************************************!*\
  !*** external "react-icons-kit/entypo/plus" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/plus");

/***/ }),

/***/ "react-icons-kit/feather/plus":
/*!***********************************************!*\
  !*** external "react-icons-kit/feather/plus" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/plus");

/***/ }),

/***/ "react-icons-kit/icomoon/checkmark":
/*!****************************************************!*\
  !*** external "react-icons-kit/icomoon/checkmark" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/checkmark");

/***/ }),

/***/ "react-icons-kit/ionicons/socialDribbbleOutline":
/*!*****************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialDribbbleOutline" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialDribbbleOutline");

/***/ }),

/***/ "react-icons-kit/ionicons/socialFacebook":
/*!**********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialFacebook" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialFacebook");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGithub":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGithub" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGithub");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGoogleplusOutline":
/*!*******************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGoogleplusOutline" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGoogleplusOutline");

/***/ }),

/***/ "react-icons-kit/ionicons/socialInstagram":
/*!***********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialInstagram" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialInstagram");

/***/ }),

/***/ "react-icons-kit/ionicons/socialReddit":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialReddit" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialReddit");

/***/ }),

/***/ "react-icons-kit/ionicons/socialTwitter":
/*!*********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialTwitter" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialTwitter");

/***/ }),

/***/ "react-icons-kit/md/ic_thumb_up":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_thumb_up" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_thumb_up");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/Slide":
/*!*************************************!*\
  !*** external "react-reveal/Slide" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

/***/ }),

/***/ "react-reveal/Zoom":
/*!************************************!*\
  !*** external "react-reveal/Zoom" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Zoom");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=TIP.js.map