/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/blockeditor.js":
/*!**************************************!*\
  !*** ./assets/src/js/blockeditor.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postcss_blockeditor_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../postcss/blockeditor.pcss */ "./assets/src/postcss/blockeditor.pcss");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blockeditor_PluginSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockeditor/PluginSidebar */ "./assets/src/js/blockeditor/PluginSidebar.jsx");
/**
 * SASS
 */

/**
 * JavaScript
 */





(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)((RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_3___default().RHEMA_DOMAIN_TEXT), {
  icon: 'book-alt',
  render: function render() {
    return /*#__PURE__*/React.createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
      name: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_3___default().RHEMA_DOMAIN_TEXT),
      title: "Bible Relations"
    }, /*#__PURE__*/React.createElement(_blockeditor_PluginSidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }
});

/***/ }),

/***/ "./assets/src/js/blockeditor/BibleSelector.jsx":
/*!*****************************************************!*\
  !*** ./assets/src/js/blockeditor/BibleSelector.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_frontend_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/frontend/pages */ "./assets/src/js/frontend/pages/index.jsx");





var style = ":host, :root {display:block;margin: 0; font-size: 16px;}";
var pluginFrontendCssUrl = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2___default().RHEMA_BLOCK_EDITOR_CSS_URL);

var BibleSelector = function BibleSelector() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.MemoryRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, "@import '", pluginFrontendCssUrl, "'; @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');", style), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/bible"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: ":books1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: ":verse1",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_pages__WEBPACK_IMPORTED_MODULE_3__.Verses, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: ":verse1/-/:books2/:verse2",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_pages__WEBPACK_IMPORTED_MODULE_3__.Verses, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_pages__WEBPACK_IMPORTED_MODULE_3__.Chapters, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "error",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_pages__WEBPACK_IMPORTED_MODULE_3__.Error, null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_pages__WEBPACK_IMPORTED_MODULE_3__.RandomlyChapter, null)
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BibleSelector);

/***/ }),

/***/ "./assets/src/js/blockeditor/PluginSidebar.jsx":
/*!*****************************************************!*\
  !*** ./assets/src/js/blockeditor/PluginSidebar.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_shadow_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-shadow-root */ "./node_modules/react-shadow-root/lib/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/panel/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/panel/body.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/panel/row.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/modal/index.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BibleSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BibleSelector */ "./assets/src/js/blockeditor/BibleSelector.jsx");
/* harmony import */ var _components_frontend_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/frontend/store */ "./assets/src/js/frontend/store.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useEntityProp = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', 'post', 'meta'),
      _useEntityProp2 = _slicedToArray(_useEntityProp, 2),
      meta = _useEntityProp2[0],
      setMeta = _useEntityProp2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var openModal = function openModal() {
    return setOpen(true);
  };

  var closeModal = function closeModal(e) {
    if (!!e && e.type !== 'click' && e.type !== 'keydown' && e.key !== 'Escape') {
      return false;
    }

    console.trace('close');
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "tailwind"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "123"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Selector",
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["default"], null, "My Panel Inputs and Labels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "secondary",
    onClick: openModal
  }, "Open Modal"))), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Bible verse selector",
    overlayClassName: "tailwind",
    className: "[&>div.components-modal\\_\\_content]:pt-0 [&>div.components-modal\\_\\_content]:px-0 [&>div.components-modal\\_\\_content]:pb-0",
    onRequestClose: closeModal,
    size: "large",
    __experimentalHideHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_shadow_root__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: new _components_frontend_store__WEBPACK_IMPORTED_MODULE_6__.Store({
      general: {
        routerMode: 'memory',
        layoutAllocationMode: 'split',
        footerSwitch: {
          main: {
            confirmSelection: true
          }
        }
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BibleSelector__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
});

/***/ }),

/***/ "./assets/src/js/common/index.js":
/*!***************************************!*\
  !*** ./assets/src/js/common/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": function() { return /* binding */ capitalizeFirstLetter; },
/* harmony export */   "converterFilter": function() { return /* binding */ converterFilter; },
/* harmony export */   "isJsonStr": function() { return /* binding */ isJsonStr; },
/* harmony export */   "localDateTime": function() { return /* binding */ localDateTime; },
/* harmony export */   "queryStringModifier": function() { return /* binding */ queryStringModifier; },
/* harmony export */   "removeLogosSignedToken": function() { return /* binding */ removeLogosSignedToken; },
/* harmony export */   "retrieveFontSize": function() { return /* binding */ retrieveFontSize; },
/* harmony export */   "retrieveLogosSignedToken": function() { return /* binding */ retrieveLogosSignedToken; },
/* harmony export */   "retrieveResponseFromRTK": function() { return /* binding */ retrieveResponseFromRTK; },
/* harmony export */   "setLogosSignedToken": function() { return /* binding */ setLogosSignedToken; }
/* harmony export */ });
/**
 * 將相同的書、章的字串縮短
 * @param array queryString
 * @returns string
 */
var queryStringModifier = function queryStringModifier() {
  var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!queryString || !Array.isArray(queryString) || queryString.length === 0) {
    return ['聖經目錄'];
  }

  if (queryString.length < 2) {
    return [''];
  }

  var rangeFrom = queryString[0];
  var rangeTo = queryString[1] ? queryString[1] : queryString[0];
  var isSameBook = rangeFrom.book.name === rangeTo.book.name;
  var isSameChapter = rangeFrom.chapter === rangeTo.chapter;
  var returnQueryString = ["".concat(rangeFrom.book.name, " ").concat(rangeFrom.chapter, ":").concat(rangeFrom.verse)];

  if (!!rangeTo && !!rangeTo.book && rangeTo.chapter && rangeTo.verse) {
    returnQueryString[0] += "-".concat(isSameBook ? '' : rangeTo.book.name + ' ').concat(isSameChapter ? '' : rangeTo.chapter + ':').concat(rangeTo.verse);
  }

  return returnQueryString;
};
var retrieveLogosSignedToken = function retrieveLogosSignedToken(sessionStorageApi) {
  try {
    return sessionStorageApi.getItem('logos.token');
  } catch (e) {
    return '';
  }
};
var setLogosSignedToken = function setLogosSignedToken(sessionStorageApi, token) {
  try {
    sessionStorageApi.setItem('logos.token', token);
  } catch (e) {
    return false;
  }

  return true;
};
var removeLogosSignedToken = function removeLogosSignedToken(sessionStorageApi) {
  try {
    sessionStorageApi.removeItem('logos.token');
  } catch (e) {
    return false;
  }

  return true;
};
var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var localDateTime = function localDateTime(moment, value) {
  var timeZone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!moment || typeof moment !== 'function' || Object.prototype.hasOwnProperty.call(moment, 'utcOffset') || Object.prototype.hasOwnProperty.call(moment, 'format')) {
    return value;
  }

  return moment(value).utcOffset(timeZone).format('YYYY/MM/DD hh:mm:ss');
};
var retrieveFontSize = function retrieveFontSize(size) {
  var sizeMap = {
    sm: 'text-14px',
    md: 'text-16px',
    lg: 'text-18px'
  };

  if (typeof sizeMap[size] === 'undefined') {
    return 'text-16px';
  }

  return sizeMap[size];
};
var retrieveResponseFromRTK = function retrieveResponseFromRTK(response) {
  var code = '';
  var label = '';
  var message = 'There has been a critical error.';

  if (response) {
    console.log('response');
  }

  return {
    code: code,
    label: label,
    message: message
  };
};
var isJsonStr = function isJsonStr(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};
var converterFilter = function converterFilter(raws, chapterNumber) {
  return raws.filter(function (raw) {
    return raw.chapter === chapterNumber;
  });
};

/***/ }),

/***/ "./assets/src/js/constants.js":
/*!************************************!*\
  !*** ./assets/src/js/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIVATING_COUNT_DOWN_TIME": function() { return /* binding */ ACTIVATING_COUNT_DOWN_TIME; },
/* harmony export */   "ERROR_MESSAGE_MAPPING": function() { return /* binding */ ERROR_MESSAGE_MAPPING; },
/* harmony export */   "IDENTITY_TYPE": function() { return /* binding */ IDENTITY_TYPE; },
/* harmony export */   "PRODUCT_SLUGS": function() { return /* binding */ PRODUCT_SLUGS; },
/* harmony export */   "PRODUCT_SLUG_2_REST_NAME_MAP": function() { return /* binding */ PRODUCT_SLUG_2_REST_NAME_MAP; },
/* harmony export */   "PRODUCT_SLUG_NAMES": function() { return /* binding */ PRODUCT_SLUG_NAMES; },
/* harmony export */   "RHEMA_CONSTANTS": function() { return /* binding */ RHEMA_CONSTANTS; },
/* harmony export */   "UI_MESSAGE_MAPPING": function() { return /* binding */ UI_MESSAGE_MAPPING; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ACTIVATING_COUNT_DOWN_TIME = 4000;
var IDENTITY_TYPE = 'domain';
var RHEMA_CONSTANTS = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_CONSTANTS);

var PRODUCT_SLUG_NAMES = _objectSpread({
  DONATE: 'donate-for-txipartners'
}, RHEMA_CONSTANTS.FEATURE_SLUG_NAMES);
var PRODUCT_SLUG_2_REST_NAME_MAP = Object.keys(RHEMA_CONSTANTS.FEATURE_SLUG_NAMES).reduce(function (obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj;
  }

  var slug = RHEMA_CONSTANTS.FEATURE_SLUG_NAMES[key];
  var restName = RHEMA_CONSTANTS.FEATURE_NAMES[key];
  obj[slug] = restName;
  return obj;
}, {});
var PRODUCT_SLUGS = Object.values(PRODUCT_SLUG_NAMES);
var ERROR_MESSAGE_MAPPING = {
  rest_cookie_invalid_nonce: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("error/page-is-expired", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT))
};
var UI_MESSAGE_MAPPING = {
  'bible-entry-path': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('bible-entry-path', (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'default-translation': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('default-translation', (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'default-translation/default': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('default-translation/default', (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/description/core': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rhema core function: read and query the whole Bible", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/description/download2host': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Download the bible to your own host, no need to obtain data from a third-party server to increase the speed of Bible query", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/description/relation': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Automatically correlate related posts with verses, bible verse insertion tool", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/description/offline': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Support PWA, so that the Bible of the website can be read offline on mobile phones", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/status': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("features/status", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/comming-soon': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("features/comming-soon", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/active': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("features/active", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/license': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("features/license", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/signin-logos': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/signin-logos", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/description': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("If you have lost your License Key, you can log in here to check all the License Keys you have obtained in the past.", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/forgot-password': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/forgot-password", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/forgot-password-description': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/forgot-password-description", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/verify-email': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/verify-email", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/verify-email-description': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Send the verification letter to your mailbox, copy the startup code and paste it to the field below", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/back-to-signin': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/back-to-signin", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/signin': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/signin", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/signing': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/signing", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/send-verify-email': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/send-verify-email", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/sending-verify-email': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/sending-verify-email", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/sent-verify-email': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/sent-verify-email", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/submit-verify-email': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/submit-verify-email", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/submitting-verify-email': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/submitting-verify-email", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/send-forgot-password': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/send-forgot-password", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/sending-forgot-password': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/sending-forgot-password", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/sent-forgot-password': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/sent-forgot-password", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/have-authorization-code': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/have-authorization-code", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/submit-forgot-password': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/submit-forgot-password", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/submitting-forgot-password': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("my-account/submitting-forgot-password", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'my-account/welcome': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Welcome to Logos. You can check your information related to Logos here after logging in.", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'about/paragraph-1': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rhema is a WordPress plugin developed and operated by Muchshar on behalf of EON Center. Its purpose is to provide digital Bible services to churches, increasing the exposure of church websites when searching for Bible-related content. It offers church members the ability to search for and access teachings and sermons related to specific Bible verses, serving as a tool for spreading the gospel and providing pastoral care.", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'about/paragraph-2': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("If you are willing to support our ministry, please consider making a donation to us.", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'about/title/service-policy': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Service Policy", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'about/service-policy/update-maintenance': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Updates and Maintenance: We will regularly update and maintain the plugin to ensure its compatibility with the latest version of WordPress and continue to improve and add new features. We strive to address known issues and vulnerabilities promptly by providing patches and fixes. If you encounter any problems or discover any vulnerabilities, please visit %s to report your issues.", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'about/service-policy/rights-reserved': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rights Reserved: Muchshar Ltd. reserves the right to determine whether you are allowed to use this plugin.", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'about/link/donation-1': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taiwan Donation Link", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'about/link/donation-2': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overseas Donation Link", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'bible-directory': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("bible-directory", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'bible-directory/old-testament': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("bible-directory/old-testament", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'bible-directory/new-testament': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("bible-directory/new-testament", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'bible-directory/book': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("bible-directory/book", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'bible-directory/chapter': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("bible-directory/chapter", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'bible-directory/verse': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("bible-directory/verse", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'selected-verses': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Selected Verses", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT))
};

/***/ }),

/***/ "./assets/src/js/frontend/books/index.jsx":
/*!************************************************!*\
  !*** ./assets/src/js/frontend/books/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "onClickVerse": function() { return /* reexport safe */ _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onClickVerse; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/frontend/components */ "./assets/src/js/frontend/components/index.jsx");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/js/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
var _this = undefined;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var Block = function Block(_ref) {
  var onClick = _ref.onClick,
      _ref$className = _ref.className,
      extraClassName = _ref$className === void 0 ? '' : _ref$className,
      title = _ref.title,
      desc = _ref.desc,
      selected = _ref.selected,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      children = _ref.children;
  var hasTitle = !!title && typeof title === 'string' && title.length > 0;
  var hasDesc = !!desc && typeof desc === 'string' && desc.length > 0;
  var sizeIsVaild = ['small', 'medium', 'large'].some(function (correctlySize) {
    return correctlySize === size;
  });

  if (!sizeIsVaild) {
    throw new Error('Component `Block` size of param are invaild.');
  }

  var Title = hasTitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block w-full px-3 font-medium text-gray-900 group-hover:text-rose-600 ".concat(selected ? 'text-rose-600' : '')
  }, title) : null;
  var Desc = hasDesc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
    className: "px-3 text-gray-600 group-hover:text-rose-600 group-selected:text-rose-600 ".concat(selected ? 'text-rose-600' : '')
  }, desc) : null;
  var classNames = ['border', 'bg-white', 'flex', 'flex-wrap', 'items-center'].concat(_toConsumableArray(size === 'small' ? ['w-1/6', 'xs:min-w-1/8', 'xs:w-1/8', 'md:min-w-1/12', 'md:w-1/12', 'lg:min-w-[40px]', 'lg:min-w-1/24', 'lg:w-1/24', 'every-6:border-r-0', 'xs:every-6:border-r', 'only-xs:every-8:border-r', 'only-md:every-12:border-r', 'only-lg:every-24:border-r'] : []), _toConsumableArray(size === 'medium' ? ['w-1/4', 'xs:min-w-1/6', 'xs:w-1/6', 'md:min-w-1/8', 'md:w-1/8', 'lg:min-w-1/12', 'lg:w-1/12', 'every-4:border-r-0', 'xs:every-4:border-r', 'only-xs:every-6:border-r', 'only-md:every-8:border-r', 'only-lg:every-12:border-r'] : []), ['border-t-0', 'border-l-0', 'aspect-square', 'content-center', 'group', 'hover:bg-gray-100', 'cursor-pointer', selected ? 'bg-gray-100' : ''], _toConsumableArray(extraClassName.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: classNames,
    onClick: onClick
  }, children ? children : Title, children ? null : Desc);
};

Block.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  desc: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().element))])
};

var BlockWrap = function BlockWrap(_ref2) {
  var _ref2$className = _ref2.className,
      extraClassname = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: ['flex flex-auto flex-wrap', extraClassname].join(' ')
  }, children);
};

BlockWrap.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().element))])
};

var Container = function Container(_ref3) {
  var _ref3$className = _ref3.className,
      extraClassname = _ref3$className === void 0 ? '' : _ref3$className,
      toggle = _ref3.toggle,
      children = _ref3.children;
  var classNames = [toggle ? 'flex' : 'hidden', 'flex-wrap'].concat(_toConsumableArray(extraClassname.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

Container.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().element))])
};

var List = function List() {
  var showBooksSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.headersSwitch.books;
  });
  var booksDataSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.books;
  });
  var classNames = [].concat(_toConsumableArray(showBooksSelector ? ['flex'] : ['hidden']), ['flex-auto', 'bg-white', 'overflow-y-auto']).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Books, {
    booksData: booksDataSelector
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Chapters, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Verses, null));
};

var Books = function Books(_ref4) {
  var booksData = _ref4.booksData;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var toggleBooks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.booksSelector.books;
  });
  var booksDataSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return [].concat(_toConsumableArray(state.data.books.old), _toConsumableArray(state.data.books.new));
  });
  var currentQueryString = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.readingQuerys;
  });
  var currentSelectionSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.currentSelection;
  });

  var onClickBlock = function onClickBlock(bookIndex) {
    console.log(bookIndex);
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_4__.clickBookSelector)({
      books: booksDataSelector.filter(function (book) {
        return book.index === bookIndex;
      })[0]
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
    toggle: toggleBooks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full text-sm p-3 bg-gray-200 text-gray-500"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["bible-directory/old-testament"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockWrap, {
    className: "bg-gray-200"
  }, booksData.old.map(function (_ref5, idx) {
    var abbr = _ref5.abbr,
        name = _ref5.name,
        index = _ref5.index;
    var isSomeInCurrentQuery = currentQueryString.filter(function (query) {
      return query.book.name === name;
    })[0] || false;
    var isCurrentSelection = currentSelectionSelector.books.index === index;
    var classNames = [isSomeInCurrentQuery ? 'bg-gray-100' : ''];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Block, {
      className: classNames.join(' '),
      onClick: onClickBlock.bind(_this, index),
      key: idx,
      title: abbr,
      desc: name,
      selected: isCurrentSelection
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full text-sm p-3 bg-gray-200 text-gray-500"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["bible-directory/new-testament"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockWrap, {
    className: "bg-gray-200"
  }, booksData.new.map(function (_ref6, idx) {
    var abbr = _ref6.abbr,
        name = _ref6.name,
        index = _ref6.index;
    var isSomeInCurrentQuery = currentQueryString.filter(function (query) {
      return query.book.name === name;
    })[0];
    var isCurrentSelection = currentSelectionSelector.books.index === index;
    var classNames = [isSomeInCurrentQuery ? 'bg-gray-100' : ''];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Block, {
      className: classNames.join(' '),
      onClick: onClickBlock.bind(_this, index),
      key: idx,
      title: abbr,
      desc: name,
      selected: isCurrentSelection
    });
  })));
};

Books.propTypes = {
  booksData: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};

var Chapters = function Chapters() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var toggleChapters = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.booksSelector.chapters;
  });
  var currentQueryString = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.readingQuerys;
  });
  var chapterVerseInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.translation.info.chapterVerseInfo;
  });
  var currentSelectionBookIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.currentSelection.books.index;
  });
  var currentSelectionChapter = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.currentSelection.chapters;
  });
  var currentQueryBookIndexs = Object.keys(chapterVerseInfo).filter(function (bookIndex) {
    return currentQueryString.some(function (query) {
      return query.book.index === Number(bookIndex);
    });
  });
  var currentQueryChapters = currentQueryBookIndexs.map(function (bookIndex) {
    return Object.keys(chapterVerseInfo[bookIndex]);
  });
  var currentSelectionChapters = currentSelectionBookIndex ? [Object.keys(chapterVerseInfo[currentSelectionBookIndex])] : null;
  var displayChapters = currentSelectionChapters ? currentSelectionChapters : currentQueryChapters;

  var onClickBlock = function onClickBlock(number) {
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_4__.clickBookSelector)({
      chapters: Number(number)
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
    className: "w-full",
    toggle: toggleChapters
  }, displayChapters.map(function (chapterNumber, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockWrap, {
      key: idx,
      className: "items-start content-start"
    }, chapterNumber.map(function (number, idx) {
      var isSomeInCurrentQuery = currentQueryString.filter(function (query) {
        return currentSelectionBookIndex ? Number(query.book.index) === Number(currentSelectionBookIndex) && Number(query.chapter) === Number(number) : Number(query.chapter) === Number(number);
      })[0] || false;
      var isCurrentSelection = currentSelectionChapter === Number(number);
      var classNames = ['text-center'];

      if (isSomeInCurrentQuery) {
        classNames.push('bg-gray-100');
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Block, {
        onClick: onClickBlock.bind(_this, number),
        className: classNames.join(' '),
        size: "small",
        key: idx,
        title: number.toString(),
        selected: isCurrentSelection
      });
    }));
  }));
};

var Verses = function Verses() {
  var _currentQueryString$, _currentQueryString$2, _currentQueryString$3;

  var toggleVerses = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.booksSelector.verses;
  });
  var currentQueryString = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.readingQuerys;
  });
  var chapterVerseInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.translation.info.chapterVerseInfo;
  });
  var currentSelectionBooks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.currentSelection.books;
  });
  var currentSelectionBookIndex = currentSelectionBooks.index;
  var currentSelectionChapter = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.currentSelection.chapters;
  });
  var isSameQueryBookChapter = currentQueryString.every(function (query, index, arr) {
    return arr.every(function (arrQuery) {
      return arrQuery.book.index === query.book.index && arrQuery.chapter === query.chapter;
    });
  });
  var currentQueryChapterVerseInfo = currentQueryString.length > 0 ? isSameQueryBookChapter ? _defineProperty({}, (_currentQueryString$ = currentQueryString[0]) === null || _currentQueryString$ === void 0 ? void 0 : _currentQueryString$.chapter, chapterVerseInfo[(_currentQueryString$2 = currentQueryString[0]) === null || _currentQueryString$2 === void 0 ? void 0 : _currentQueryString$2.book.index][(_currentQueryString$3 = currentQueryString[0]) === null || _currentQueryString$3 === void 0 ? void 0 : _currentQueryString$3.chapter]) : currentQueryString.reduce(function (accumulator, query, currentIndex, currentArray) {
    var currentQueryBook = currentArray[0].book;
    var currentQueryChapter = query.chapter;
    var chapterMaxVerse = chapterVerseInfo[currentQueryBook.index][query.chapter];
    accumulator[currentQueryChapter] = chapterMaxVerse;
    return accumulator;
  }, {}) : {};
  var displayBooksIndex = currentSelectionBookIndex ? currentSelectionBookIndex : currentQueryString.length > 0 ? currentQueryString[0].book.index : 0;
  var displayChapterVerseInfo = currentSelectionChapter ? _defineProperty({}, currentSelectionChapter, chapterVerseInfo[currentSelectionBookIndex ? currentSelectionBookIndex : currentQueryString[0].book.index][currentSelectionChapter]) : currentQueryChapterVerseInfo;
  var isQueryAndSelectionSame = currentQueryString.some(function (query) {
    return query.book.index === currentSelectionBookIndex && Number(query.chapter) === currentSelectionChapter;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {
    className: "w-full",
    toggle: toggleVerses
  }, Object.keys(displayChapterVerseInfo).map(function (chapter, index, arrData) {
    var maxVerse = chapterVerseInfo[displayBooksIndex][chapter];
    var verses = new Array(maxVerse).fill(0).map(function (ele, index) {
      return index + 1;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "w-full"
    }, arrData.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full text-sm p-3 bg-gray-200 text-gray-500"
    }, chapter) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockWrap, {
      className: "items-start content-start"
    }, verses.map(function (number, idx) {
      var isSomeInCurrentQuery = false;

      if (Array.isArray(currentQueryString) && currentQueryString.length > 0) {
        var literalIntegral = Number(chapter) * 100 + number;
        var fromIntegral = Number(currentQueryString[0].chapter) * 100 + Number(currentQueryString[0].verse);
        var toIntegral = Number(currentQueryString[1].chapter) * 100 + Number(currentQueryString[1].verse);
        isSomeInCurrentQuery = isQueryAndSelectionSame && literalIntegral >= fromIntegral && literalIntegral <= toIntegral;
      }

      var classNames = ['text-center'];

      if (isSomeInCurrentQuery) {
        classNames.push('bg-gray-100');
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Block, {
        className: classNames.join(' '),
        size: "small",
        key: idx,
        title: number.toString()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_3__.LinkVerse, {
        onClick: _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onClickVerse.bind(_this, {
          book: currentSelectionBookIndex,
          chapter: currentSelectionChapter,
          verse: number,
          maxVerseNumberOfChapter: maxVerse
        }),
        book: displayBooksIndex,
        chapter: Number(chapter),
        number: number
      }));
    })));
  }));
};



/***/ }),

/***/ "./assets/src/js/frontend/components/index.jsx":
/*!*****************************************************!*\
  !*** ./assets/src/js/frontend/components/index.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "DrawerTitle": function() { return /* binding */ DrawerTitle; },
/* harmony export */   "KeywordLabel": function() { return /* binding */ KeywordLabel; },
/* harmony export */   "Line": function() { return /* binding */ Line; },
/* harmony export */   "LinkVerse": function() { return /* binding */ LinkVerse; },
/* harmony export */   "StringLabel": function() { return /* binding */ StringLabel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_ripples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ripples */ "./node_modules/react-ripples/esm/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight-words */ "./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/js/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, onClick && {
    onClick: onClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex cursor-pointer items-center leading-18px text-base md:text-lg md:leading-22px justify-center overflow-hidden bg-white border border-gray-300 rounded-sm w-72px md:w-80px py-5px md:py-8px"
  }, children));
};
var KeywordLabel = function KeywordLabel(_ref2) {
  var className = _ref2.className,
      onClick = _ref2.onClick,
      children = _ref2.children;
  var classNames = ['p-2', 'bg-zinc-200', 'inline-block', 'text-sm', className].join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({
    className: classNames
  }, _objectSpread({}, onClick ? {
    onClick: onClick
  } : {})), children);
};
var StringLabel = function StringLabel(_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  var classNames = ['inline-block', 'text-sm', className].join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: classNames
  }, children);
};
var DrawerTitle = function DrawerTitle(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, children);
};
var LinkVerse = function LinkVerse(_ref5) {
  var book = _ref5.book,
      chapter = _ref5.chapter,
      number = _ref5.number,
      onClick = _ref5.onClick;
  var booksData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return [].concat(_toConsumableArray(state.data.books.old), _toConsumableArray(state.data.books.new));
  });
  var slug = booksData[book - 1].slug;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    onClick: onClick,
    className: "flex w-full h-full justify-center items-center px-3 font-medium text-gray-900 group-hover:text-rose-600",
    to: (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_4__.generateVerseUrl)(slug, chapter, number)
  }, number.toString());
};
LinkVerse.propTypes = {
  book: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  chapter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  number: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)
};
var Line = function Line(_ref6) {
  var bookAbbr = _ref6.bookAbbr,
      chapterNum = _ref6.chapterNum,
      verseNum = _ref6.verseNum,
      className = _ref6.className,
      onClick = _ref6.onClick,
      children = _ref6.children;
  var booksDataSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return [].concat(_toConsumableArray(state.data.books.old), _toConsumableArray(state.data.books.new));
  });
  var currentKeywords = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.search.keywords.current;
  });
  var classNames = ['flex', 'cursor-pointer', 'before:whitespace-nowrap', 'before:p-3px', 'before:mt-5px', 'before:content-[attr(data-book-abbr)_"_"attr(data-chapter-num)":"_attr(data-verse-num)]', 'before:text-12px', 'before:inline-flex', 'before:items-start', 'before:justify-center', 'before:text-center', 'before:align-text-top', 'before:text-gray-400', 'before:leading-none', 'before:decoration-sky-500', className].join(' ');
  var bookAbbrString = booksDataSelector[bookAbbr - 1].abbr;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({}, onClick ? {
    onClick: onClick
  } : {}, bookAbbr ? {
    'data-book-abbr': bookAbbrString
  } : {}, chapterNum ? {
    'data-chapter-num': chapterNum
  } : {}, verseNum ? {
    'data-verse-num': verseNum
  } : {}, {
    className: classNames
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_highlight_words__WEBPACK_IMPORTED_MODULE_3___default()), {
    highlightClassName: "text-rose-600",
    searchWords: currentKeywords.split(' '),
    autoEscape: true,
    textToHighlight: children
  }));
};

/***/ }),

/***/ "./assets/src/js/frontend/footers/index.jsx":
/*!**************************************************!*\
  !*** ./assets/src/js/frontend/footers/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
/* harmony import */ var _components_frontend_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/tools */ "./assets/src/js/frontend/tools/index.jsx");
/* harmony import */ var _components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
var _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Main = function Main(_ref) {
  var _stateData$translatio2, _readingQuerys$, _readingQuerys$$book;

  var className = _ref.className;
  var stateData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data;
  });
  var showConfirm = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.footerSwitch.main.confirmSelection;
  });

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.pageSwipper;
  }),
      pagePos = _useSelector.pagePos;

  var readingQuerys = stateData.readingQuerys;

  var _stateData$translatio = (_stateData$translatio2 = stateData.translation) === null || _stateData$translatio2 === void 0 ? void 0 : _stateData$translatio2.info,
      chapterVerseInfo = _stateData$translatio.chapterVerseInfo;

  var classNames = ['justify-between', className].join(' ');
  var currentBookIndex = (_readingQuerys$ = readingQuerys[0]) === null || _readingQuerys$ === void 0 ? void 0 : (_readingQuerys$$book = _readingQuerys$.book) === null || _readingQuerys$$book === void 0 ? void 0 : _readingQuerys$$book.index;
  var chapterPaged = parseInt(readingQuerys[0].chapter);
  var maxChapterNumberOfCurrentBook = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.max)(Object.keys(chapterVerseInfo[currentBookIndex]).map(function (num) {
    return Number(num);
  }));
  var onMoveFirstPage = _components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onSwipMoveChapterPage.bind(_this, chapterPaged, -1);
  var onMoveLastPage = _components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onSwipMoveChapterPage.bind(_this, chapterPaged, 1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Top.Row, {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Top.LeftSide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_4__.Borderless, {
    label: "Prev Chapter",
    disabled: chapterPaged <= 1,
    onClick: function onClick() {
      onMoveFirstPage();
      (0,_components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onCompletedSwipMoveChapter)({
        currentBookIndex: currentBookIndex,
        chapterPaged: chapterPaged,
        readingQuerys: readingQuerys
      }, -1, pagePos, true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiChevronLeft, _objectSpread({}, chapterPaged <= 1 ? {
    color: '#6b7280'
  } : {}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_4__.Borderless, {
    label: "Next Chapter",
    disabled: chapterPaged >= maxChapterNumberOfCurrentBook,
    onClick: function onClick() {
      onMoveLastPage();
      (0,_components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onCompletedSwipMoveChapter)({
        currentBookIndex: currentBookIndex,
        chapterPaged: chapterPaged,
        readingQuerys: readingQuerys
      }, 1, pagePos, true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiChevronRight, _objectSpread({}, chapterPaged >= maxChapterNumberOfCurrentBook ? {
    color: '#6b7280'
  } : {})))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Top.RightSide, null, showConfirm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "primary"
  }, "Confirm") : null));
};



/***/ }),

/***/ "./assets/src/js/frontend/forms/Form.jsx":
/*!***********************************************!*\
  !*** ./assets/src/js/frontend/forms/Form.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: onSubmit,
    className: "w-full flex flex-col"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./assets/src/js/frontend/forms/index.jsx":
/*!************************************************!*\
  !*** ./assets/src/js/frontend/forms/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": function() { return /* reexport safe */ _components_frontend_forms_Form__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Posts": function() { return /* binding */ Posts; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var react_ripples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ripples */ "./node_modules/react-ripples/esm/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _components_frontend_forms_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/forms/Form */ "./assets/src/js/frontend/forms/Form.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var FieldRow = function FieldRow(_ref) {
  var _ref$className = _ref.className,
      extraClassname = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;
  var classNames = ['w-full', 'border-b'].concat(_toConsumableArray(extraClassname.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

var CategorySelector = function CategorySelector(_ref2) {
  var options = _ref2.options;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      highlightedIndex = _useState4[0],
      setHighlightedIndex = _useState4[1];

  var _useMultipleSelection = (0,downshift__WEBPACK_IMPORTED_MODULE_5__.useMultipleSelection)({
    initialSelectedItems: [options[0], options[1]]
  }),
      getSelectedItemProps = _useMultipleSelection.getSelectedItemProps,
      getDropdownProps = _useMultipleSelection.getDropdownProps,
      addSelectedItem = _useMultipleSelection.addSelectedItem,
      removeSelectedItem = _useMultipleSelection.removeSelectedItem,
      selectedItems = _useMultipleSelection.selectedItems;

  var getFilteredItems = function getFilteredItems(items) {
    return items.filter(function (item) {
      return selectedItems.indexOf(item) < 0;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onBlur: function onBlur() {
      setIsOpen(false);
    },
    onClick: function onClick(e) {
      e.preventDefault();
      setIsOpen(!isOpen);
    },
    tabIndex: "-1",
    className: "flex flex-wrap items-center px-10px pb-3px"
  }, selectedItems.map(function (selectedItem, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({
      key: "selected-item-".concat(index),
      className: "py-7px px-5px mr-5px leading-20px mt-3px bg-gray-200 rounded-md overflow-hidden"
    }, getSelectedItemProps({
      selectedItem: selectedItem,
      index: index
    })), selectedItem, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      onClick: function onClick(e) {
        e.stopPropagation();
        removeSelectedItem(selectedItem);
      },
      className: "ml-3px"
    }, "\u2715"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
    className: "py-7px pt-10px leading-20px outline-1 outline-graborder-gray-400"
  }, getDropdownProps({
    preventKeyAction: isOpen
  })), "\u8ACB\u9078\u64C7\u6240\u5C6C\u7684\u5206\u985E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: [].concat(_toConsumableArray(isOpen ? ['block'] : ['hidden']), ['absolute left-0 right-0 bg-white shadow-md max-h-80 overflow-scroll w-inherit z-50']).join(' ')
  }, getFilteredItems(options).map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      style: highlightedIndex === index ? {
        backgroundColor: '#bde4ff'
      } : {},
      className: "p-10px leading-20px flex flex-col",
      key: "".concat(item).concat(index),
      onMouseDown: function onMouseDown() {
        addSelectedItem(getFilteredItems(options)[index]);
      }
    }, item);
  })));
};

var Footer = function Footer(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-row justify-between px-12px py-3px"
  }, children);
};

var Posts = function Posts() {
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_forms_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "bg-transparent w-full px-10px outline-0 leading-40px",
    placeholder: "\u8ACB\u8F38\u5165\u60A8\u7684\u6A19\u984C"
  }, register('title', {
    required: true
  }))), errors.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "This field is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategorySelector, {
    options: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FieldRow, {
    className: "flex-auto h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", _extends({
    className: "bg-transparent w-full h-full px-10px outline-0 leading-40px",
    placeholder: "\u8ACB\u8F38\u5165\u60A8\u7684\u5167\u5BB9"
  }, register('content', {
    required: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "p-12px",
    onClick: function onClick() {
      return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.toggleDrawer)({
        name: 'new-post'
      }));
    }
  }, "\u53D6\u6D88")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "p-12px"
  }, "\u78BA\u8A8D"))));
};



/***/ }),

/***/ "./assets/src/js/frontend/headers/index.jsx":
/*!**************************************************!*\
  !*** ./assets/src/js/frontend/headers/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Books": function() { return /* binding */ Books; },
/* harmony export */   "Main": function() { return /* binding */ Main; },
/* harmony export */   "Selection": function() { return /* binding */ Selection; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/joi */ "./node_modules/@hookform/resolvers/joi/dist/joi.mjs");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _components_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/schema */ "./assets/src/js/schema/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/js/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
/* harmony import */ var _components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
/* harmony import */ var _components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/frontend/tools */ "./assets/src/js/frontend/tools/index.jsx");
/* harmony import */ var _components_frontend_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/frontend/tabs */ "./assets/src/js/frontend/tabs/index.jsx");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }















var Main = function Main(_ref) {
  var _ref$hideReadingTool = _ref.hideReadingTool,
      hideReadingTool = _ref$hideReadingTool === void 0 ? false : _ref$hideReadingTool;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var showMainHeader = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.headersSwitch.main;
  });
  var showSearchHeader = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.headersSwitch.search;
  });
  var queryString = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.readingQuerys;
  });
  var classNames = [].concat(_toConsumableArray(showMainHeader || showSearchHeader ? ['flex'] : ['hidden']), ['ralative', 'py-11px', 'px-12px', 'md:py-10px', 'justify-between']).join(' ');
  var searchFormMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
    defaultValues: {
      words: ''
    },
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_2__.joiResolver)(_components_schema__WEBPACK_IMPORTED_MODULE_4__.searchBibleRawsByKeyword)
  });
  var register = searchFormMethods.register,
      formState = searchFormMethods.formState,
      handleSubmit = searchFormMethods.handleSubmit;
  var isSearching = formState.isSubmitting,
      errors = formState.errors;

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__.inputSearchKeywords)(data.words));
              dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__.changeSearchPaged)(1));
              dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__.switchHeadersSearch)());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onClickFontSize = function onClickFontSize() {
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__.changeFontSize)());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.Row, {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.LeftSide, null, showMainHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.BooksSelectorButton, {
    range: (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_6__.queryStringModifier)(queryString)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.Borderless, {
    onClick: function onClick() {
      return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__.switchHeadersMain)());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiChevronLeft, {
    className: "h-20px w-20px right-4px md:right-10px text-neutral-700"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.RightSide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.SearchBar, _extends({
    expand: showSearchHeader,
    onSubmit: handleSubmit(onSubmit)
  }, register('words', {
    required: true
  }))), hideReadingTool ? null : !showSearchHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.FullScreenToggle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.Borderless, {
    onClick: onClickFontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiFontSize, {
    className: "h-20px w-20px right-4px md:right-10px text-neutral-700"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.Borderless, {
    onClick: function onClick() {
      return dispatch(toggleDrawer({
        name: 'relative-posts'
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BsLayoutTextSidebarReverse, {
    className: "h-20px w-20px right-4px md:right-10px text-neutral-700"
  }))) : null));
};

var Books = function Books() {
  var showBooksHeader = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.headersSwitch.books;
  });
  var classNames = [].concat(_toConsumableArray(showBooksHeader ? ['flex'] : ['hidden']), ['w-full', 'items-center', 'flex-wrap']).join(' ');
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.Row, {
    className: "items-center w-full py-11px px-12px md:py-10px justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.LeftSide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.Borderless, {
    onClick: function onClick() {
      return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__.switchHeadersMain)());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiChevronLeft, {
    className: "h-20px w-20px right-4px md:right-10px text-neutral-700"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.MiddleSide, {
    className: "text-16px"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_3__.UI_MESSAGE_MAPPING["bible-directory"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.RightSide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.Bordered, null, "\u548C\u5408\u672C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tabs__WEBPACK_IMPORTED_MODULE_9__.BookTab, null));
};

var Selection = function Selection() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var showSelectionHeader = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.headersSwitch.selection;
  });
  var classNames = [].concat(_toConsumableArray(showSelectionHeader ? ['flex'] : ['hidden']), ['w-full', 'items-center', 'flex-wrap']).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.Row, {
    className: "items-center w-full py-11px px-12px md:py-10px justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.LeftSide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.Borderless, {
    onClick: function onClick() {
      return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_5__.switchHeadersMain)());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiChevronLeft, {
    className: "h-20px w-20px right-4px md:right-10px text-neutral-700"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.MiddleSide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools__WEBPACK_IMPORTED_MODULE_8__.CurrentRawsSelected, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_7__.Top.RightSide, null)));
};



/***/ }),

/***/ "./assets/src/js/frontend/layouts/BibleRaws.jsx":
/*!******************************************************!*\
  !*** ./assets/src/js/frontend/layouts/BibleRaws.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.mjs");
/* harmony import */ var _components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/frontend/paragraph */ "./assets/src/js/frontend/paragraph/index.jsx");
/* harmony import */ var _assets_js_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
/* harmony import */ var _assets_js_frontend_layouts_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/js/frontend/layouts/Content */ "./assets/src/js/frontend/layouts/Content.jsx");
/* harmony import */ var _components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
var _this = undefined;










var BibleRaws = function BibleRaws(_ref) {
  var _readingQuerys$, _readingQuerys$$book;

  var currentSelection = _ref.currentSelection,
      readingQuerys = _ref.readingQuerys,
      bookRaws = _ref.bookRaws,
      chapterVerseInfo = _ref.chapterVerseInfo,
      selectedRaws = _ref.selectedRaws;
  var chapterPaged = parseInt(readingQuerys[0].chapter);
  var currentBookIndex = (_readingQuerys$ = readingQuerys[0]) === null || _readingQuerys$ === void 0 ? void 0 : (_readingQuerys$$book = _readingQuerys$.book) === null || _readingQuerys$$book === void 0 ? void 0 : _readingQuerys$$book.index;

  if (!currentBookIndex) {
    var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
        bookSlugOfParam = _useParams.books1;

    currentBookIndex = (0,_components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.retrieveBookIndexBySlug)(bookSlugOfParam);
  }

  if (!chapterVerseInfo) {
    return null;
  }

  var maxChapterNumberOfCurrentBook = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.max)(Object.keys(chapterVerseInfo[currentBookIndex]).map(function (num) {
    return Number(num);
  }));
  var prepareChaptersSlot = new Array(maxChapterNumberOfCurrentBook).fill(null).map(function (item, slotIdx) {
    var slotChapterNumber = slotIdx + 1;
    var fetchedChapterRaws = bookRaws.filter(function (raw) {
      return raw.chapter === slotChapterNumber;
    });

    if (fetchedChapterRaws.length > 0) {
      return fetchedChapterRaws;
    }

    return {
      maxVerseNumber: chapterVerseInfo[currentBookIndex][slotChapterNumber],
      chapterNumber: slotChapterNumber
    };
  });
  var renderChapters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var returnChapters = (Array.isArray(prepareChaptersSlot) ? prepareChaptersSlot : [prepareChaptersSlot]).filter(function (chapter, idx) {
      var chapterPageNumber = idx + 1;
      var pagesCount = prepareChaptersSlot.length || 0;
      return chapterPageNumber === chapterPaged || chapterPageNumber === chapterPaged + (pagesCount > chapterPaged ? 1 : 0) || chapterPageNumber === chapterPaged - (chapterPaged > 1 ? 1 : 0);
    });
    var middleChapterIndex = returnChapters.findIndex(function (raws) {
      return Number(raws.chapter) === chapterPaged;
    });
    return returnChapters.sort(function (a) {
      var _a$;

      var chapterNumber = Array.isArray(a) ? (_a$ = a[0]) === null || _a$ === void 0 ? void 0 : _a$.chapter : a.chapterNumber;
      return chapterNumber >= middleChapterIndex ? 1 : -1;
    });
  }, [bookRaws, chapterPaged]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_layouts_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pagePosition: chapterPaged === 1 ? 'left' : chapterPaged > 1 && chapterPaged < maxChapterNumberOfCurrentBook ? 'middle' : 'right',
    currentBookMaxChapter: maxChapterNumberOfCurrentBook,
    currentChapter: chapterPaged,
    onMoveFirstPage: _components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onSwipMoveChapterPage.bind(_this, chapterPaged, -1),
    onMoveLastPage: _components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onSwipMoveChapterPage.bind(_this, chapterPaged, 1),
    onCompletedMove: _components_frontend_utilities__WEBPACK_IMPORTED_MODULE_5__.onCompletedSwipMoveChapter.bind(_this, {
      currentBookIndex: currentBookIndex,
      chapterPaged: chapterPaged,
      readingQuerys: readingQuerys
    })
  }, renderChapters.map(function (raws) {
    var pageIdx = (raws === null || raws === void 0 ? void 0 : raws.chapterNumber) || raws[0].chapter;
    var isWaitingLoading = raws.length === 0 || !Array.isArray || raws.maxVerseNumber;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Page, {
      key: pageIdx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_2__.Block, null, isWaitingLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      inline: true,
      count: raws.maxVerseNumber
    }) : raws.map(function (raw) {
      var shouldPicked = !!currentSelection && (currentSelection === null || currentSelection === void 0 ? void 0 : currentSelection.chapters) === raw.chapter && (currentSelection === null || currentSelection === void 0 ? void 0 : currentSelection.verses) === raw.verse;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_2__.Line, {
        picked: shouldPicked,
        active: selectedRaws.some(function (selectedRaw) {
          return selectedRaw.id === raw.id;
        }),
        id: raw.id,
        key: raw.id,
        verseNum: raw.verse
      }, raw.text);
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BibleRaws);

/***/ }),

/***/ "./assets/src/js/frontend/layouts/Body.jsx":
/*!*************************************************!*\
  !*** ./assets/src/js/frontend/layouts/Body.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Body = function Body(_ref) {
  var showScroll = _ref.showScroll,
      allocationMode = _ref.allocationMode,
      className = _ref.className,
      children = _ref.children;
  var classnames = ['relative', 'flex-auto', 'overflow-x-hidden', 'bg-white'].concat(_toConsumableArray(showScroll ? ['overflow-y-auto'] : ['overflow-y-hidden']), _toConsumableArray(allocationMode === 'split' ? ['flex [&>div]:flex-1'] : []), [className]).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classnames
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./assets/src/js/frontend/layouts/Bottom.jsx":
/*!***************************************************!*\
  !*** ./assets/src/js/frontend/layouts/Bottom.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Bottom = function Bottom(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classNames = ['flex sticky z-20 bottom-0 w-full py-11px px-12px md:py-10px text-12px md:text-14px bg-white border-t justify-end space-x-4 rounded-b', className].join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Bottom);

/***/ }),

/***/ "./assets/src/js/frontend/layouts/Content.jsx":
/*!****************************************************!*\
  !*** ./assets/src/js/frontend/layouts/Content.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_easy_swipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_hook_resize_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-hook/resize-observer */ "./node_modules/@react-hook/resize-observer/dist/module/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _components_frontend_layouts_PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/layouts/PageWrapper */ "./assets/src/js/frontend/layouts/PageWrapper.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Content = function Content(_ref) {
  var _ref$pagePosition = _ref.pagePosition,
      pagePosition = _ref$pagePosition === void 0 ? 'middle' : _ref$pagePosition,
      currentBookMaxChapter = _ref.currentBookMaxChapter,
      currentChapter = _ref.currentChapter,
      onMoveFirstPage = _ref.onMoveFirstPage,
      onMoveLastPage = _ref.onMoveLastPage,
      onCompletedMove = _ref.onCompletedMove,
      children = _ref.children;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var pageWrappersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  var changePageMovePercentageThreshold = 6;
  var maxChapterNumberOfCurrentBook = parseInt(currentBookMaxChapter) || 1;
  var currentChapterNumber = parseInt(currentChapter) || 1;
  var initialPos = pagePosition === 'middle' ? 1 : pagePosition === 'left' ? 0 : 1;
  var showMain = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.headersSwitch.main || state.general.headersSwitch.selection;
  });
  var fullscreen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.fullscreen;
  });

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.pageSwipper;
  }),
      pagePos = _useSelector.pagePos,
      onTransition = _useSelector.onTransition;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentContentMaxHeight = _useState2[0],
      setCurrentContentMaxHeight = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      movePercentage = _useState4[0],
      setMovePercentage = _useState4[1]; // const onSwipeStart = (event) => {}


  var onSwipeMove = function onSwipeMove(position, event) {
    var movePercentageX = Number((position.x / Number(screen.width) * 100).toFixed(1));

    if (movePercentageX > changePageMovePercentageThreshold && movePercentageX < -changePageMovePercentageThreshold) {
      event.preventDefault();
    } // console.log(`Moved ${movePercentageX}`)
    // const movePercentageY = Number(
    //     ((position.y / Number(screen.width)) * 100).toFixed(1)
    // )
    // console.log(`Moved ${position.y} pixels vertically`, event)
    // console.log(`Moved ${movePercentageY} percentage vertically`, event)


    setMovePercentage((0,lodash__WEBPACK_IMPORTED_MODULE_2__.clamp)(movePercentageX, pagePosition !== 'right' ? -99 : -changePageMovePercentageThreshold, pagePosition !== 'left' ? 99 : changePageMovePercentageThreshold));
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_4__.updatePageSwipper)({
      onTransition: true
    }));
  };

  var onSwipeEnd = function onSwipeEnd(event) {
    var moveAbsPercentage = Math.abs(movePercentage);

    if (moveAbsPercentage > changePageMovePercentageThreshold) {
      var nextPagePos = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.clamp)(movePercentage < 0 ? pagePos + 1 : pagePos - 1, 0, 2);

      if (nextPagePos === 0 || initialPos === 2 && nextPagePos === 1) {
        onMoveFirstPage();
      }

      if (nextPagePos === 2 || initialPos === 0 && nextPagePos === 1) {
        onMoveLastPage();
      }

      dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_4__.updatePageSwipper)({
        pagePos: nextPagePos
      }));
    }

    setMovePercentage(0);
  };

  var handlerOnTransitionEnd = function handlerOnTransitionEnd() {
    console.log('onTransitionEnd', pagePos, initialPos);

    if (pagePos === initialPos) {
      return;
    }

    var offsetNext = 0;
    var pagePosNext = pagePos;

    if (initialPos > pagePos && currentChapterNumber - 1 > 0) {
      offsetNext = -1;
    }

    if (initialPos < pagePos && currentChapterNumber + 1 <= maxChapterNumberOfCurrentBook) {
      offsetNext = 1;
    }

    onCompletedMove(offsetNext, initialPos === 0 ? 1 : initialPos === 2 ? 1 : initialPos, false);
  };

  var classNames = ['items-start', 'relative', 'flex', 'h-full', 'w-full'].join(' ');
  var pageClassNames = [].concat(_toConsumableArray(onTransition ? ['transition-transform', 'ease-out', 'duration-500'] : []), ['min-w-full'], _toConsumableArray(fullscreen ? ['h-full'] : []), ['overflow-y-auto', 'px-10', 'py-10']);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_4__.updatePageSwipper)({
      pagePos: initialPos
    }));
  }, [initialPos]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _pageWrappersRef$curr, _pageWrappersRef$curr2;

    var currentContentDom = pageWrappersRef === null || pageWrappersRef === void 0 ? void 0 : (_pageWrappersRef$curr = pageWrappersRef.current) === null || _pageWrappersRef$curr === void 0 ? void 0 : (_pageWrappersRef$curr2 = _pageWrappersRef$curr.children[0]) === null || _pageWrappersRef$curr2 === void 0 ? void 0 : _pageWrappersRef$curr2.children[pagePos];
    var currentContentMaxHeight = currentContentDom === null || currentContentDom === void 0 ? void 0 : currentContentDom.clientHeight;
    setCurrentContentMaxHeight(currentContentMaxHeight);
  }, [currentChapterNumber]);
  (0,_react_hook_resize_observer__WEBPACK_IMPORTED_MODULE_6__["default"])(pageWrappersRef, function (entry) {
    var _pageWrappersRef$curr3, _pageWrappersRef$curr4;

    var currentContentDom = pageWrappersRef === null || pageWrappersRef === void 0 ? void 0 : (_pageWrappersRef$curr3 = pageWrappersRef.current) === null || _pageWrappersRef$curr3 === void 0 ? void 0 : (_pageWrappersRef$curr4 = _pageWrappersRef$curr3.children[0]) === null || _pageWrappersRef$curr4 === void 0 ? void 0 : _pageWrappersRef$curr4.children[pagePos];
    var currentContentMaxHeight = currentContentDom === null || currentContentDom === void 0 ? void 0 : currentContentDom.clientHeight;
    setCurrentContentMaxHeight(currentContentMaxHeight);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: pageWrappersRef,
    className: ['flex min-w-320px flex-wrap overflow-hidden'].concat(_toConsumableArray(showMain ? ['flex'] : ['hidden'])).join(' '),
    style: _objectSpread({}, currentContentMaxHeight > 0 && !fullscreen ? {
      maxHeight: "".concat(currentContentMaxHeight, "px")
    } : {})
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_easy_swipe__WEBPACK_IMPORTED_MODULE_3___default()), {
    onSwipeMove: onSwipeMove,
    onSwipeEnd: onSwipeEnd,
    className: classNames
  }, Array.isArray(children) && children.length > 0 ? children.map(function (child, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
      key: child.key,
      className: pageClassNames.join(' '),
      movePercentage: movePercentage,
      pagePos: pagePos
    }, idx === initialPos && pagePos !== initialPos && {
      onTransitionEnd: handlerOnTransitionEnd
    }), child);
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6"
  }, children)));
};

Content.propTypes = {
  pagePosition: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  onMoveStartPage: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onMoveEndPage: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element), prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().element))])
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./assets/src/js/frontend/layouts/Drawer.jsx":
/*!***************************************************!*\
  !*** ./assets/src/js/frontend/layouts/Drawer.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/frontend/paragraph */ "./assets/src/js/frontend/paragraph/index.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var Drawer = function Drawer(_ref) {
  var name = _ref.name,
      _ref$className = _ref.className,
      extraClassName = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;
  var showDrawer = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.drawer[name];
  });
  var fullscreen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.fullscreen;
  });
  var allocationMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.layoutAllocationMode;
  });
  var classNames = ['z-10', 'hidden'].concat(_toConsumableArray(fullscreen || allocationMode === 'split' ? ['static'] : ['absolute']), _toConsumableArray(fullscreen ? [] : ['drop-shadow-lg border-l']), ['right-0', 'left-0', 'md:left-1/2', 'bottom-0', 'top-0', 'min-h-full', 'flex-auto', 'bg-white/[.9]', 'backdrop-blur-sm', 'overflow-y-auto', 'overflow-x-hidden'], _toConsumableArray(extraClassName.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    animate: {
      x: showDrawer ? '0%' : '100%',
      display: 'flex',
      transitionEnd: _objectSpread({}, !showDrawer ? {
        display: 'none'
      } : {})
    },
    transition: {
      ease: 'easeOut'
    },
    initial: false,
    className: classNames,
    onAnimationComplete: function onAnimationComplete() {}
  }, children);
};

Drawer.SelectedRaw = function SelectedRaw() {
  var selectedRaws = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.selected.raws;
  });
  var booksDataSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return [].concat(_toConsumableArray(state.data.books.old), _toConsumableArray(state.data.books.new));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full"
  }, selectedRaws.map(function (raw) {
    var bookData = booksDataSelector[raw.book + 1];
    var bookAbbr = bookData.abbr;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: raw.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiMinusSquare, {
      className: "text-neutral-600 h-15px w-15px inline-block"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_2__.Line, {
      id: raw.id,
      bookAbbr: bookAbbr,
      chapterNum: raw.chapter,
      verseNum: raw.verse
    }, raw.text));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./assets/src/js/frontend/layouts/PageWrapper.jsx":
/*!********************************************************!*\
  !*** ./assets/src/js/frontend/layouts/PageWrapper.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PageWrapper = function PageWrapper(_ref) {
  var className = _ref.className,
      movePercentage = _ref.movePercentage,
      pagePos = _ref.pagePos,
      onTransitionEnd = _ref.onTransitionEnd,
      children = _ref.children;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var handlerOnTransitionEnd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(onTransitionEnd, [pagePos]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var element = ref === null || ref === void 0 ? void 0 : ref.current;

    if (onTransitionEnd) {
      element === null || element === void 0 ? void 0 : element.addEventListener('transitionend', handlerOnTransitionEnd);
    }

    return function () {
      element === null || element === void 0 ? void 0 : element.removeEventListener('transitionend', handlerOnTransitionEnd);
    };
  }, [pagePos]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    style: {
      transform: "translateX(".concat(-(pagePos * 100) + movePercentage, "%")
    },
    className: className
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./assets/src/js/frontend/layouts/Top.jsx":
/*!************************************************!*\
  !*** ./assets/src/js/frontend/layouts/Top.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Top = function Top(_ref) {
  var children = _ref.children;

  var __wpAdminBar = document.getElementById('wpadminbar');

  var hasWpAdminBar = __wpAdminBar !== null;
  var isWpAdmin = document.body.classList.contains('wp-admin');
  var topBarHeight = hasWpAdminBar ? __wpAdminBar.clientHeight : 0;
  var classNames = ['flex flex-wrap sticky z-20 items-center text-gray-800 bg-white border-b text-12px md:text-14px drop-shadow-sm rounded-t'].concat(_toConsumableArray(!isWpAdmin && topBarHeight > 0 ? ['wp-sm:top-46px', 'md:top-32px'] : ['top-0'])).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

Top.LeftSide = function LeftSide(_ref2) {
  var _ref2$className = _ref2.className,
      extraClassName = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children;
  var classNames = ['flex', 'items-center', 'space-x-4'].concat(_toConsumableArray(extraClassName.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

Top.MiddleSide = function MiddleSide(_ref3) {
  var _ref3$className = _ref3.className,
      extraClassName = _ref3$className === void 0 ? '' : _ref3$className,
      children = _ref3.children;
  var classNames = ['flex', 'items-center', 'absolute', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2'].concat(_toConsumableArray(extraClassName.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

Top.RightSide = function RightSide(_ref4) {
  var _ref4$className = _ref4.className,
      extraClassName = _ref4$className === void 0 ? '' : _ref4$className,
      children = _ref4.children;
  var classNames = ['flex', 'items-center', 'space-x-4'].concat(_toConsumableArray(extraClassName.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

Top.Row = function Row(_ref5) {
  var _ref5$className = _ref5.className,
      extraClassName = _ref5$className === void 0 ? '' : _ref5$className,
      children = _ref5.children;
  var classNames = ['relative', 'flex', 'items-center', 'w-full'].concat(_toConsumableArray(extraClassName.split(' '))).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Top);

/***/ }),

/***/ "./assets/src/js/frontend/layouts/index.jsx":
/*!**************************************************!*\
  !*** ./assets/src/js/frontend/layouts/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainer": function() { return /* binding */ AppContainer; },
/* harmony export */   "Body": function() { return /* binding */ Body; },
/* harmony export */   "Bottom": function() { return /* reexport safe */ _components_frontend_layouts_Bottom__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "Content": function() { return /* reexport safe */ _components_frontend_layouts_Content__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "Drawer": function() { return /* reexport safe */ _components_frontend_layouts_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "Page": function() { return /* binding */ Page; },
/* harmony export */   "RawsContent": function() { return /* binding */ RawsContent; },
/* harmony export */   "Top": function() { return /* reexport safe */ _components_frontend_layouts_Top__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_frontend_layouts_BibleRaws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/frontend/layouts/BibleRaws */ "./assets/src/js/frontend/layouts/BibleRaws.jsx");
/* harmony import */ var _components_frontend_layouts_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/layouts/Content */ "./assets/src/js/frontend/layouts/Content.jsx");
/* harmony import */ var _components_frontend_layouts_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/layouts/Drawer */ "./assets/src/js/frontend/layouts/Drawer.jsx");
/* harmony import */ var _components_frontend_layouts_Top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/frontend/layouts/Top */ "./assets/src/js/frontend/layouts/Top.jsx");
/* harmony import */ var _components_frontend_layouts_Bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/frontend/layouts/Bottom */ "./assets/src/js/frontend/layouts/Bottom.jsx");
/* harmony import */ var _components_frontend_layouts_Body__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/frontend/layouts/Body */ "./assets/src/js/frontend/layouts/Body.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var AppContainer = function AppContainer(_ref) {
  var children = _ref.children;
  var fullscreen = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.general.fullscreen;
  });
  var fullscreenStyle = fullscreen ? ['fixed', 'top-0', 'right-0', 'bottom-0', 'left-0', 'z-99999', 'flex', 'flex-col'] : ['container'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ['mx-auto', 'font-bible', 'drop-shadow-md'].concat(fullscreenStyle).join(' ')
  }, children);
};

var Body = function Body(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children;
  var showScroll = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    var someDrawerOpend = Object.keys(state.general.drawer).some(function (key) {
      return state.general.drawer[key] === true;
    });
    return !someDrawerOpend;
  });
  var layoutAllocationMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.general.layoutAllocationMode;
  });
  var hasFooter = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return !!state.general.footerSwitch;
  });
  var classNames = [className].concat(_toConsumableArray(hasFooter ? ['pb-[31px]'] : [])).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts_Body__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classNames,
    showScroll: showScroll,
    allocationMode: layoutAllocationMode
  }, children);
};

var RawsContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(_components_frontend_layouts_BibleRaws__WEBPACK_IMPORTED_MODULE_3__["default"], function (prev, next) {
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prev.chapterVerseInfo, next.chapterVerseInfo)) {
    return false;
  }

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prev.readingQuerys, next.readingQuerys)) {
    return false;
  }

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prev.bookRaws, next.bookRaws)) {
    return false;
  }

  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prev.selectedRaws, next.selectedRaws)) {
    return false;
  }

  return true;
});

var Page = function Page(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children);
};



/***/ }),

/***/ "./assets/src/js/frontend/pages/chapters.jsx":
/*!***************************************************!*\
  !*** ./assets/src/js/frontend/pages/chapters.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chapters": function() { return /* binding */ Chapters; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
/* harmony import */ var _components_frontend_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/frontend/headers */ "./assets/src/js/frontend/headers/index.jsx");
/* harmony import */ var _components_frontend_books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/books */ "./assets/src/js/frontend/books/index.jsx");
/* harmony import */ var _components_frontend_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/search */ "./assets/src/js/frontend/search/index.jsx");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/js/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
/* harmony import */ var _assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/js/frontend/states/dataSlice */ "./assets/src/js/frontend/states/dataSlice.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var Chapters = function Chapters() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var stateData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data;
  });
  var booksDataSelector = [].concat(_toConsumableArray(stateData.books.old), _toConsumableArray(stateData.books.new));
  var isAfterReload = stateData.isAfterReload,
      readingQuerys = stateData.readingQuerys,
      translation = stateData.translation;

  var _translation$info = translation === null || translation === void 0 ? void 0 : translation.info,
      chapterVerseInfo = _translation$info.chapterVerseInfo;

  var bookRaws = stateData.raws.filter(function (raw) {
    return raw.book === Number(readingQuerys[0].book.index);
  });
  var selectedRaws = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.selected.raws;
  });
  var isQueryWholeChapter = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_8__.validIsQueryWholeChapter)(readingQuerys, chapterVerseInfo);
  var urlParams = isAfterReload ? (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_8__.generateRestRangeParam)(useParams()) : ["".concat(readingQuerys[0].book.slug).concat(readingQuerys[0].chapter, ":").concat(readingQuerys[0].verse)];
  var currentChapter = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_8__.retrieveChapterByParamString)(urlParams[0]);

  var _useGetBibleRawQuery = (0,_components_services__WEBPACK_IMPORTED_MODULE_6__.useGetBibleRawQuery)({
    ranges: urlParams,
    withPrevChapter: isQueryWholeChapter,
    withNextChapter: isQueryWholeChapter
  }),
      data = _useGetBibleRawQuery.data,
      error = _useGetBibleRawQuery.error,
      isFetching = _useGetBibleRawQuery.isFetching;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (data && Object.keys(data).length > 0) {
      dispatch((0,_assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_9__.loadRaws)(data.data));
    }
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (error && Object.keys(error).length > 0) {
      throw new Error(error.data.message);
    }
  }, [error]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_7__.currentSelection)({
      books: booksDataSelector.filter(function (book) {
        return book.index === readingQuerys[0].book.index;
      })[0]
    }));
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_7__.switchHeadersBooks)());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.Top, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_3__.Main, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_3__.Books, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_3__.Selection, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_books__WEBPACK_IMPORTED_MODULE_4__.List, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_search__WEBPACK_IMPORTED_MODULE_5__.Results, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.RawsContent, {
    readingQuerys: readingQuerys,
    bookRaws: bookRaws,
    chapterVerseInfo: chapterVerseInfo,
    currentChapter: currentChapter,
    selectedRaws: selectedRaws
  })));
};

/***/ }),

/***/ "./assets/src/js/frontend/pages/error.jsx":
/*!************************************************!*\
  !*** ./assets/src/js/frontend/pages/error.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": function() { return /* binding */ Error; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");




var Error = function Error(_ref) {
  var error = _ref.error,
      resetErrorBoundary = _ref.resetErrorBoundary;
  var style = ":host, :root {display:block;margin: 24px auto; font-size: 16px;}";
  var pluginFrontendCssUrl = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_FRONTEND_CSS_URL);
  var message = error.message;
  var displayMsg = _components_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE_MAPPING.hasOwnProperty(message) ? _components_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE_MAPPING[message] : message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", null, "@import '", pluginFrontendCssUrl, "'; @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');", style), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_2__.Page, null, displayMsg))));
};

/***/ }),

/***/ "./assets/src/js/frontend/pages/home.jsx":
/*!***********************************************!*\
  !*** ./assets/src/js/frontend/pages/home.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": function() { return /* binding */ Home; },
/* harmony export */   "RandomlyChapter": function() { return /* binding */ RandomlyChapter; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/js/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
/* harmony import */ var _components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
/* harmony import */ var _components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/headers */ "./assets/src/js/frontend/headers/index.jsx");
/* harmony import */ var _components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/paragraph */ "./assets/src/js/frontend/paragraph/index.jsx");
/* harmony import */ var _components_frontend_books__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/frontend/books */ "./assets/src/js/frontend/books/index.jsx");
/* harmony import */ var _components_frontend_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/frontend/search */ "./assets/src/js/frontend/search/index.jsx");
/* harmony import */ var _assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/js/frontend/states/dataSlice */ "./assets/src/js/frontend/states/dataSlice.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }












var Container = function Container(_ref) {
  _objectDestructuringEmpty(_ref);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Top, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__.Main, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__.Books, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__.Selection, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_books__WEBPACK_IMPORTED_MODULE_6__.List, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_search__WEBPACK_IMPORTED_MODULE_7__.Results, null), "HOME"));
};

var MemoContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Container, function (prev, next) {
  return true;
});
var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MemoContainer, null);
};
var RandomlyChapter = function RandomlyChapter() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var chapterVerseInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data.translation.info.chapterVerseInfo;
  });
  var randomlyChapter = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_2__.generateRandomlyChapter)();
  var currentBookIndex = randomlyChapter.book.index;
  var newReadingQuerys = [{
    book: _objectSpread({}, randomlyChapter.book),
    chapter: randomlyChapter.chapter,
    verse: 1
  }, {
    book: _objectSpread({}, randomlyChapter.book),
    chapter: randomlyChapter.chapter,
    verse: chapterVerseInfo[currentBookIndex][randomlyChapter.chapter]
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_8__.updateReadingQuerys)(newReadingQuerys));
    navigate((0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_2__.generateVerseUrl)(randomlyChapter.book.slug, randomlyChapter.chapter, 1));
  }, []);
  return null;
};

/***/ }),

/***/ "./assets/src/js/frontend/pages/index.jsx":
/*!************************************************!*\
  !*** ./assets/src/js/frontend/pages/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chapters": function() { return /* reexport safe */ _chapters__WEBPACK_IMPORTED_MODULE_1__.Chapters; },
/* harmony export */   "Error": function() { return /* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_3__.Error; },
/* harmony export */   "Home": function() { return /* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.Home; },
/* harmony export */   "RandomlyChapter": function() { return /* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.RandomlyChapter; },
/* harmony export */   "Verses": function() { return /* reexport safe */ _verses__WEBPACK_IMPORTED_MODULE_2__.Verses; }
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./assets/src/js/frontend/pages/home.jsx");
/* harmony import */ var _chapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chapters */ "./assets/src/js/frontend/pages/chapters.jsx");
/* harmony import */ var _verses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verses */ "./assets/src/js/frontend/pages/verses.jsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./assets/src/js/frontend/pages/error.jsx");





/***/ }),

/***/ "./assets/src/js/frontend/pages/verses.jsx":
/*!*************************************************!*\
  !*** ./assets/src/js/frontend/pages/verses.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Verses": function() { return /* binding */ Verses; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
/* harmony import */ var _components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/headers */ "./assets/src/js/frontend/headers/index.jsx");
/* harmony import */ var _components_frontend_footers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/footers */ "./assets/src/js/frontend/footers/index.jsx");
/* harmony import */ var _components_frontend_books__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/frontend/books */ "./assets/src/js/frontend/books/index.jsx");
/* harmony import */ var _components_frontend_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/frontend/search */ "./assets/src/js/frontend/search/index.jsx");
/* harmony import */ var _components_frontend_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/frontend/forms */ "./assets/src/js/frontend/forms/index.jsx");
/* harmony import */ var _components_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/frontend/components */ "./assets/src/js/frontend/components/index.jsx");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @assets/js/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
/* harmony import */ var _assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @assets/js/frontend/states/dataSlice */ "./assets/src/js/frontend/states/dataSlice.js");














var Verses = function Verses() {
  var _stateData$translatio2, _readingQuerys$, _readingQuerys$$book;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var stateData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.data;
  });
  var stateGeneral = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general;
  });
  var isAfterReload = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.isAfterReload;
  });
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)();
  var currentSelection = stateGeneral.currentSelection;
  var readingQuerys = stateData.readingQuerys;

  var _stateData$translatio = (_stateData$translatio2 = stateData.translation) === null || _stateData$translatio2 === void 0 ? void 0 : _stateData$translatio2.info,
      chapterVerseInfo = _stateData$translatio.chapterVerseInfo;

  var currentBookIndex = (_readingQuerys$ = readingQuerys[0]) === null || _readingQuerys$ === void 0 ? void 0 : (_readingQuerys$$book = _readingQuerys$.book) === null || _readingQuerys$$book === void 0 ? void 0 : _readingQuerys$$book.index;

  if (!currentBookIndex) {
    var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useParams)(),
        bookSlugOfParam = _useParams.books1;

    currentBookIndex = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_11__.retrieveBookIndexBySlug)(bookSlugOfParam);
  }

  var bookRaws = stateData.raws.filter(function (raw) {
    return raw.book === Number(currentBookIndex);
  });
  var selectedRaws = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.selected.raws;
  });
  var isQueryWholeChapter = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_11__.validIsQueryWholeChapter)(readingQuerys, chapterVerseInfo);
  var urlParams = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_11__.generateRestRangeParam)(params);

  if (isAfterReload && readingQuerys.length > 0) {
    urlParams = ["".concat(readingQuerys[0].book.slug).concat(readingQuerys[0].chapter, ":").concat(readingQuerys[0].verse)];
  }

  var currentChapter = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_11__.retrieveChapterByParamString)(urlParams[0]);

  var _useGetBibleRawQuery = (0,_components_services__WEBPACK_IMPORTED_MODULE_10__.useGetBibleRawQuery)({
    ranges: urlParams,
    withPrevChapter: isQueryWholeChapter,
    withNextChapter: isQueryWholeChapter
  }),
      data = _useGetBibleRawQuery.data,
      error = _useGetBibleRawQuery.error,
      isFetching = _useGetBibleRawQuery.isFetching;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (data && Object.keys(data).length > 0) {
      dispatch((0,_assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_12__.loadRaws)(data.data));
    }
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (error && Object.keys(error).length > 0) {
      throw new Error(error.data.message);
    }
  }, [error]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var bookSlugOfUrlParam = params.books1,
        chapterVerseOfUrlParam = params.verse1;
    var urlBookIndex = (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_11__.retrieveBookIndexBySlug)(bookSlugOfUrlParam);
    var urlChapter = chapterVerseOfUrlParam.match(/(\d{0,3}):?(\d{0,3})/i)[1];
    (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_11__.goToVerse)(urlBookIndex, urlChapter);
  }, [params]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.AppContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Top, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__.Main, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__.Books, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_headers__WEBPACK_IMPORTED_MODULE_4__.Selection, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Body, {
    className: "-mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_books__WEBPACK_IMPORTED_MODULE_6__.List, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_search__WEBPACK_IMPORTED_MODULE_7__.Results, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.RawsContent, {
    currentSelection: currentSelection,
    readingQuerys: readingQuerys,
    bookRaws: bookRaws,
    chapterVerseInfo: chapterVerseInfo,
    currentChapter: currentChapter,
    selectedRaws: selectedRaws
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
    name: "new-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_forms__WEBPACK_IMPORTED_MODULE_8__.Posts, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
    className: "p-2",
    name: "relative-posts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_components__WEBPACK_IMPORTED_MODULE_9__.DrawerTitle, null, "\u76F8\u95DC\u6587\u7AE0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
    className: "p-2 content-start flex-wrap",
    name: "selected-raws"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_components__WEBPACK_IMPORTED_MODULE_9__.DrawerTitle, null, _components_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["selected-verses"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Drawer.SelectedRaw, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_3__.Bottom, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_footers__WEBPACK_IMPORTED_MODULE_5__.Main, null)));
};

/***/ }),

/***/ "./assets/src/js/frontend/paragraph/index.jsx":
/*!****************************************************!*\
  !*** ./assets/src/js/frontend/paragraph/index.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": function() { return /* binding */ Block; },
/* harmony export */   "Line": function() { return /* binding */ Line; },
/* harmony export */   "RelateContent": function() { return /* binding */ RelateContent; },
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var use_long_press__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-long-press */ "./node_modules/use-long-press/dist/index.module.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _assets_js_frontend_states_selectedSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/js/frontend/states/selectedSlice */ "./assets/src/js/frontend/states/selectedSlice.js");
/* harmony import */ var _assets_js_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/js/common */ "./assets/src/js/common/index.js");
var _this = undefined;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }









var RelateContent = function RelateContent(_ref) {
  _objectDestructuringEmpty(_ref);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex relative justify-center my-10px overflow-hidden space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-11/12 max-w-360px max-h-180px aspect-video bg-sky-300 rounded-xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute w-11/12 max-w-360px max-h-180px aspect-video bg-sky-300 rounded-xl translate-x-full"
  }));
};

var Title = function Title(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "mb-10px text-sm font-bold"
  }, children);
};

Title.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element)
};

var Block = function Block(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "line-break-anywhere leading-12 mb-10px only:mb-0 last:mb-0"
  }, children);
};

Block.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().element))])
};

var Line = function Line(_ref4) {
  var _ref4$picked = _ref4.picked,
      picked = _ref4$picked === void 0 ? false : _ref4$picked,
      _ref4$active = _ref4.active,
      active = _ref4$active === void 0 ? false : _ref4$active,
      _ref4$block = _ref4.block,
      block = _ref4$block === void 0 ? false : _ref4$block,
      _ref4$id = _ref4.id,
      id = _ref4$id === void 0 ? '0000000' : _ref4$id,
      _ref4$bookAbbr = _ref4.bookAbbr,
      bookAbbr = _ref4$bookAbbr === void 0 ? '' : _ref4$bookAbbr,
      _ref4$chapterNum = _ref4.chapterNum,
      chapterNum = _ref4$chapterNum === void 0 ? '' : _ref4$chapterNum,
      _ref4$verseNum = _ref4.verseNum,
      verseNum = _ref4$verseNum === void 0 ? '' : _ref4$verseNum,
      children = _ref4.children;
  var isSelectionMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.general.headersSwitch.selection;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.data;
  }),
      raws = _useSelector.raws;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.general.displaySetting;
  }),
      fontSize = _useSelector2.fontSize;

  var selectedRaws = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.selected.raws;
  });
  var bind = (0,use_long_press__WEBPACK_IMPORTED_MODULE_1__.useLongPress)(!isSelectionMode ? function () {
    dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.switchHeadersSelection)());
  } : function () {
    if (active) {
      return;
    }

    var rawIndex = raws.findIndex(function (raw) {
      return raw.id === id;
    });
    dispatch((0,_assets_js_frontend_states_selectedSlice__WEBPACK_IMPORTED_MODULE_4__.putRaw)(raws[rawIndex]));
  }, {
    threshold: 500,
    cancelOnMovement: true,
    cancelOutsideElement: false
  });

  var onClickVerse = function onClickVerse(id, e) {
    e.preventDefault();

    if (!isSelectionMode) {
      return;
    }

    var rawIndex = raws.findIndex(function (raw) {
      return raw.id === id;
    });
    var selectedRawIndex = selectedRaws.findIndex(function (raw) {
      return raw.id === id;
    });
    var isSelectedRaw = selectedRawIndex !== -1;

    if (isSelectedRaw) {
      dispatch((0,_assets_js_frontend_states_selectedSlice__WEBPACK_IMPORTED_MODULE_4__.delRaw)(selectedRaws[selectedRawIndex]));
      return;
    }

    if (active) {
      dispatch((0,_assets_js_frontend_states_selectedSlice__WEBPACK_IMPORTED_MODULE_4__.delRaw)(raws[rawIndex]));
      return;
    }

    dispatch((0,_assets_js_frontend_states_selectedSlice__WEBPACK_IMPORTED_MODULE_4__.putRaw)(raws[rawIndex]));
  };

  var generateBeforeContentClassName = function generateBeforeContentClassName(bookAbbr, chapterNum) {
    if (bookAbbr && chapterNum) {
      return 'before:content-[attr(data-book-abbr)_"_"attr(data-chapter-num)":"_attr(data-verse-num)]';
    }

    return "before:content-[attr(data-verse-num)]";
  };

  var beforeIsWider = !!bookAbbr && !!chapterNum;
  var classNames = ['before:text-12px'].concat(_toConsumableArray(!beforeIsWider ? ['before:w-18px'] : ['before:px-3px']), ['before:inline-flex', 'before:items-center', 'before:justify-center', 'before:text-center', generateBeforeContentClassName(bookAbbr, chapterNum), 'before:align-text-top', 'before:mt-5px', 'before:text-gray-400'], _toConsumableArray(picked ? ['font-bold'] : []), _toConsumableArray(active ? ['underline', 'decoration-2', 'decoration-dotted', 'underline-offset-4'] : []), _toConsumableArray(block ? ['block'] : []), ['before:leading-none', 'before:decoration-sky-500', 'cursor-pointer', (0,_assets_js_common__WEBPACK_IMPORTED_MODULE_5__.retrieveFontSize)(fontSize)]).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({}, bookAbbr ? {
    'data-book-abbr': bookAbbr
  } : {}, chapterNum ? {
    'data-chapter-num': chapterNum
  } : {}, verseNum ? {
    'data-verse-num': verseNum
  } : {}, {
    className: classNames
  }, bind(), {
    onClick: onClickVerse.bind(_this, id)
  }), children);
};

Line.propTypes = {
  active: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  block: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  bookAbbr: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  chapterNum: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  verseNum: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().element))])
};


/***/ }),

/***/ "./assets/src/js/frontend/search/index.jsx":
/*!*************************************************!*\
  !*** ./assets/src/js/frontend/search/index.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Results": function() { return /* binding */ Results; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.mjs");
/* harmony import */ var _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/js/frontend/utilities */ "./assets/src/js/frontend/utilities.js");
/* harmony import */ var _components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/frontend/paragraph */ "./assets/src/js/frontend/paragraph/index.jsx");
/* harmony import */ var _assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/js/frontend/components */ "./assets/src/js/frontend/components/index.jsx");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
var _this = undefined;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var Results = function Results() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var paged = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.search.paged;
  });
  var history = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.search.keywords.history;
  });
  var booksData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return [].concat(_toConsumableArray(state.data.books.old), _toConsumableArray(state.data.books.new));
  });
  var showSearchResults = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.headersSwitch.search;
  });
  var currentKeywords = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.search.keywords.current;
  });

  var _useSearchBibleRawsQu = (0,_components_services__WEBPACK_IMPORTED_MODULE_5__.useSearchBibleRawsQuery)({
    words: currentKeywords,
    paged: paged
  }, {
    skip: (currentKeywords === null || currentKeywords === void 0 ? void 0 : currentKeywords.length) === 0
  }),
      data = _useSearchBibleRawsQu.data,
      currentData = _useSearchBibleRawsQu.currentData,
      error = _useSearchBibleRawsQu.error,
      isFetching = _useSearchBibleRawsQu.isFetching,
      isLoading = _useSearchBibleRawsQu.isLoading,
      isUninitialized = _useSearchBibleRawsQu.isUninitialized;

  var classNames = [].concat(_toConsumableArray(showSearchResults ? ['block'] : ['hidden']), ['bg-white', 'overflow-y-auto', 'p-10']).join(' ');

  var _ref = (data === null || data === void 0 ? void 0 : data.data) || {
    results: [],
    total: 0
  },
      hits = _ref.results,
      total = _ref.total;

  var loadingLine = (isLoading ? 20 : Number(total) - hits.length > 20 ? 20 : Number(total) - hits.length) || 0;
  var hasMore = total > hits.length;
  var hasError = error && Object.keys(error).length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames
  }, history.map(function (keyword, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_4__.KeywordLabel, {
      key: index,
      onClick: function onClick() {
        dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_6__.inputSearchKeywords)(keyword));
        dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_6__.changeSearchPaged)(1));
      },
      className: "text-zinc-400 mr-1 cursor-pointer"
    }, keyword);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_4__.KeywordLabel, {
    className: "text-rose-600"
  }, currentKeywords), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_4__.StringLabel, {
    className: "block w-full my-4"
  }, "\u5171 ", isLoading ? '?' : total, " \u7B46\u7D50\u679C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_paragraph__WEBPACK_IMPORTED_MODULE_3__.Block, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, hasError ? error.data.message : null, currentData ? hits.map(function (raw) {
    var slug = booksData[raw.book - 1].slug;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      key: raw.id,
      onClick: _assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_2__.onClickVerse.bind(_this, {
        book: raw.book,
        chapter: raw.chapter,
        verse: raw.verse
      }),
      to: (0,_assets_js_frontend_utilities__WEBPACK_IMPORTED_MODULE_2__.generateVerseUrl)(slug, raw.chapter, raw.verse)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_4__.Line, {
      className: "before:mt-15px",
      block: true,
      id: raw.id,
      bookAbbr: raw.book,
      chapterNum: raw.chapter,
      verseNum: raw.verse
    }, raw.text));
  }) : null, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    inline: false,
    count: loadingLine
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ['w-full'].concat(_toConsumableArray(!hasMore ? ['hidden'] : [])).join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_js_frontend_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: function onClick() {
      dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_6__.changeSearchPaged)(paged + 1));
    }
  }, "\u8B80\u53D6\u66F4\u591A")));
};

/***/ }),

/***/ "./assets/src/js/frontend/states/dataSlice.js":
/*!****************************************************!*\
  !*** ./assets/src/js/frontend/states/dataSlice.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataSlice": function() { return /* binding */ dataSlice; },
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "insertRaw": function() { return /* binding */ insertRaw; },
/* harmony export */   "loadRaws": function() { return /* binding */ loadRaws; },
/* harmony export */   "updateReadingQuerys": function() { return /* binding */ updateReadingQuerys; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__);
var _RHEMA_LOCALIZE$RHEMA, _RHEMA_LOCALIZE$RHEMA2, _RHEMA_LOCALIZE$RHEMA3, _RHEMA_LOCALIZE$RHEMA4, _RHEMA_LOCALIZE$RHEMA5, _RHEMA_LOCALIZE$RHEMA6, _RHEMA_LOCALIZE$RHEMA7;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var initialQuery = (_RHEMA_LOCALIZE$RHEMA = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_INITAIL_DATA)) === null || _RHEMA_LOCALIZE$RHEMA === void 0 ? void 0 : _RHEMA_LOCALIZE$RHEMA.QUERYS;
var defaultState = {
  raws: ((_RHEMA_LOCALIZE$RHEMA2 = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_INITAIL_DATA)) === null || _RHEMA_LOCALIZE$RHEMA2 === void 0 ? void 0 : _RHEMA_LOCALIZE$RHEMA2.RAW) || [],
  books: ((_RHEMA_LOCALIZE$RHEMA3 = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_INITAIL_DATA)) === null || _RHEMA_LOCALIZE$RHEMA3 === void 0 ? void 0 : _RHEMA_LOCALIZE$RHEMA3.BOOKS) || [],
  readingQuerys: initialQuery,
  translation: {
    abbr: (_RHEMA_LOCALIZE$RHEMA4 = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_INITAIL_DATA)) === null || _RHEMA_LOCALIZE$RHEMA4 === void 0 ? void 0 : (_RHEMA_LOCALIZE$RHEMA5 = _RHEMA_LOCALIZE$RHEMA4.TRANSLATION) === null || _RHEMA_LOCALIZE$RHEMA5 === void 0 ? void 0 : _RHEMA_LOCALIZE$RHEMA5.ABBR,
    info: (_RHEMA_LOCALIZE$RHEMA6 = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_INITAIL_DATA)) === null || _RHEMA_LOCALIZE$RHEMA6 === void 0 ? void 0 : (_RHEMA_LOCALIZE$RHEMA7 = _RHEMA_LOCALIZE$RHEMA6.TRANSLATION) === null || _RHEMA_LOCALIZE$RHEMA7 === void 0 ? void 0 : _RHEMA_LOCALIZE$RHEMA7.INFO
  }
};
var initialState = function initialState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(defaultState, state);
};
var dataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
  name: 'data',
  initialState: initialState(),
  reducers: {
    loadRaws: function loadRaws(state, action) {
      var payload = action.payload;

      var newDiffRaws = _toConsumableArray(payload).filter(function (newFetchedRaw) {
        return 0 > state.raws.findIndex(function (fetchedRaw) {
          return fetchedRaw.book === newFetchedRaw.book && fetchedRaw.chapter === newFetchedRaw.chapter && fetchedRaw.verse === newFetchedRaw.verse;
        });
      });

      var prepareRaws = [].concat(_toConsumableArray(state.raws), _toConsumableArray(newDiffRaws)).sort(function (a, b) {
        return a.id - b.id;
      });
      state.raws = prepareRaws;
    },
    insertRaw: function insertRaw(state, action) {
      var payload = action.payload;
      state.raws.push(payload);
    },
    updateReadingQuerys: function updateReadingQuerys(state, action) {
      var payload = action.payload;
      state.readingQuerys = payload;
    }
  }
}); // Action creators are generated for each case reducer function

var _dataSlice$actions = dataSlice.actions,
    loadRaws = _dataSlice$actions.loadRaws,
    insertRaw = _dataSlice$actions.insertRaw,
    updateReadingQuerys = _dataSlice$actions.updateReadingQuerys;

/* harmony default export */ __webpack_exports__["default"] = (dataSlice.reducer);

/***/ }),

/***/ "./assets/src/js/frontend/states/generalSlice.js":
/*!*******************************************************!*\
  !*** ./assets/src/js/frontend/states/generalSlice.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booksSelectorBooks": function() { return /* binding */ booksSelectorBooks; },
/* harmony export */   "booksSelectorChapters": function() { return /* binding */ booksSelectorChapters; },
/* harmony export */   "booksSelectorVerses": function() { return /* binding */ booksSelectorVerses; },
/* harmony export */   "changeFontSize": function() { return /* binding */ changeFontSize; },
/* harmony export */   "changeSearchPaged": function() { return /* binding */ changeSearchPaged; },
/* harmony export */   "clickBookSelector": function() { return /* binding */ clickBookSelector; },
/* harmony export */   "currentSelection": function() { return /* binding */ currentSelection; },
/* harmony export */   "generalSlice": function() { return /* binding */ generalSlice; },
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "inputSearchKeywords": function() { return /* binding */ inputSearchKeywords; },
/* harmony export */   "switchHeadersBooks": function() { return /* binding */ switchHeadersBooks; },
/* harmony export */   "switchHeadersMain": function() { return /* binding */ switchHeadersMain; },
/* harmony export */   "switchHeadersSearch": function() { return /* binding */ switchHeadersSearch; },
/* harmony export */   "switchHeadersSelection": function() { return /* binding */ switchHeadersSelection; },
/* harmony export */   "toggleDrawer": function() { return /* binding */ toggleDrawer; },
/* harmony export */   "toggleScreen": function() { return /* binding */ toggleScreen; },
/* harmony export */   "updatePageSwipper": function() { return /* binding */ updatePageSwipper; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultState = {
  fullscreen: false,
  isAfterReload: true,
  routerMode: 'history',
  layoutAllocationMode: 'float',
  // float, split
  pageSwipper: {
    pagePos: 1,
    onTransition: true
  },
  displaySetting: {
    fontSize: 'md'
  },
  selected: {},
  headersSwitch: {
    main: true,
    books: false,
    selection: false,
    search: false
  },
  footerSwitch: {
    main: {
      pagenation: true,
      confirmSelection: false
    }
  },
  booksSelector: {
    books: true,
    chapters: false,
    verses: false
  },
  currentSelection: {
    books: '',
    chapters: '',
    verses: ''
  },
  search: {
    keywords: {
      current: '',
      history: []
    },
    paged: 1
  },
  drawer: {}
};
var initialState = function initialState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(defaultState, state);
};

var disableAllHeader = function disableAllHeader(headersSwitch) {
  Object.keys(headersSwitch).forEach(function (key) {
    headersSwitch[key] = false;
  });
};

var generalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'general',
  initialState: initialState(),
  reducers: {
    toggleScreen: function toggleScreen(state) {
      var body = document.getElementsByTagName('body')[0];
      var newValue = !state.fullscreen;
      body.style.overflow = newValue ? 'hidden' : null;
      state.fullscreen = newValue;
    },
    toggleDrawer: function toggleDrawer(state, action) {
      var drawerName = action.payload.name;

      if (!drawerName) {
        return;
      }

      state.drawer = _objectSpread(_objectSpread({}, state.drawer), {}, _defineProperty({}, drawerName, !state.drawer[drawerName]));
    },
    switchHeadersMain: function switchHeadersMain(state) {
      disableAllHeader(state.headersSwitch);
      state.headersSwitch.main = true;
      state.booksSelector.chapters = false;
      state.booksSelector.verses = false;
      state.booksSelector.books = true;
      Object.keys(state.drawer).forEach(function (key) {
        state.drawer[key] = false;
      });
    },
    switchHeadersBooks: function switchHeadersBooks(state) {
      disableAllHeader(state.headersSwitch);
      state.headersSwitch.books = true;
    },
    switchHeadersSelection: function switchHeadersSelection(state) {
      disableAllHeader(state.headersSwitch);
      state.headersSwitch.selection = true;
    },
    switchHeadersSearch: function switchHeadersSearch(state) {
      disableAllHeader(state.headersSwitch);
      state.headersSwitch.search = true;
    },
    booksSelectorToggle: function booksSelectorToggle(state) {
      state.headersSwitch.books = !state.headersSwitch.books;
    },
    booksSelectorBooks: function booksSelectorBooks(state) {
      state.booksSelector = {
        chapters: false,
        verses: false,
        books: true
      };
    },
    booksSelectorChapters: function booksSelectorChapters(state) {
      state.booksSelector = {
        chapters: true,
        verses: false,
        books: false
      };
    },
    booksSelectorVerses: function booksSelectorVerses(state) {
      state.booksSelector = {
        chapters: false,
        verses: true,
        books: false
      };
    },
    currentSelection: function currentSelection(state, action) {
      var payload = action.payload;
      state.currentSelection = _objectSpread(_objectSpread({}, state.currentSelection), payload);
    },
    clickBookSelector: function clickBookSelector(state, action) {
      var payload = action.payload;
      var payloadKeys = Object.keys(payload);
      var currentClickBookChapterVerses = payloadKeys.indexOf('verses') !== -1 ? 'verses' : payloadKeys.indexOf('chapters') !== -1 ? 'chapters' : payloadKeys.indexOf('books') !== -1 ? 'books' : false;

      if (!currentClickBookChapterVerses) {
        return state;
      }

      switch (currentClickBookChapterVerses) {
        case 'books':
          state.booksSelector.chapters = !state.booksSelector.chapters;
          state.booksSelector.verses = false;
          state.booksSelector.books = false;
          state.currentSelection.chapters = '';
          break;

        case 'chapters':
          state.booksSelector.chapters = false;
          state.booksSelector.verses = !state.booksSelector.verses;
          state.booksSelector.books = false;
          break;

        case 'verses':
          state.headersSwitch.main = true;
          state.headersSwitch.books = false;
          state.booksSelector.chapters = false;
          state.booksSelector.verses = false;
          state.booksSelector.books = true;
          state.headersSwitch.search = false;
          break;
      }

      state.isAfterReload = false;
      state.currentSelection = _objectSpread(_objectSpread({}, state.currentSelection), payload);
    },
    inputSearchKeywords: function inputSearchKeywords(state, action) {
      var payload = action.payload;

      if (!!state.search.keywords.current && state.search.keywords.current.length > 0 && payload !== state.search.keywords.current) {
        state.search.keywords.history.push(state.search.keywords.current);
      }

      if (state.search.keywords.history.includes(payload)) {
        state.search.keywords.history = state.search.keywords.history.filter(function (item) {
          return item !== payload;
        });
      }

      state.search.keywords.current = payload;
    },
    changeSearchPaged: function changeSearchPaged(state, action) {
      var paged = action.payload;
      state.search.paged = paged;
    },
    changeFontSize: function changeFontSize(state) {
      var sizes = ['sm', 'md', 'lg'];
      var currentSizeIndex = sizes.indexOf(state.displaySetting.fontSize);
      var nextfontSize = currentSizeIndex + 1 > sizes.length - 1 ? sizes[0] : sizes[currentSizeIndex + 1];
      state.displaySetting.fontSize = nextfontSize;
    },
    updatePageSwipper: function updatePageSwipper(state, action) {
      var payload = action.payload;
      state.pageSwipper = _objectSpread(_objectSpread({}, state.pageSwipper), payload);
    }
  }
}); // Action creators are generated for each case reducer function

var _generalSlice$actions = generalSlice.actions,
    toggleScreen = _generalSlice$actions.toggleScreen,
    toggleDrawer = _generalSlice$actions.toggleDrawer,
    switchHeadersMain = _generalSlice$actions.switchHeadersMain,
    switchHeadersBooks = _generalSlice$actions.switchHeadersBooks,
    switchHeadersSelection = _generalSlice$actions.switchHeadersSelection,
    switchHeadersSearch = _generalSlice$actions.switchHeadersSearch,
    booksSelectorBooks = _generalSlice$actions.booksSelectorBooks,
    booksSelectorChapters = _generalSlice$actions.booksSelectorChapters,
    booksSelectorVerses = _generalSlice$actions.booksSelectorVerses,
    currentSelection = _generalSlice$actions.currentSelection,
    clickBookSelector = _generalSlice$actions.clickBookSelector,
    inputSearchKeywords = _generalSlice$actions.inputSearchKeywords,
    changeSearchPaged = _generalSlice$actions.changeSearchPaged,
    changeFontSize = _generalSlice$actions.changeFontSize,
    updatePageSwipper = _generalSlice$actions.updatePageSwipper;

/* harmony default export */ __webpack_exports__["default"] = (generalSlice.reducer);

/***/ }),

/***/ "./assets/src/js/frontend/states/selectedSlice.js":
/*!********************************************************!*\
  !*** ./assets/src/js/frontend/states/selectedSlice.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearRaw": function() { return /* binding */ clearRaw; },
/* harmony export */   "delRaw": function() { return /* binding */ delRaw; },
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "putRaw": function() { return /* binding */ putRaw; },
/* harmony export */   "selectedSlice": function() { return /* binding */ selectedSlice; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);


var defaultState = {
  raws: []
};
var initialState = function initialState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(defaultState, state);
};
var selectedSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'selected',
  initialState: initialState(),
  reducers: {
    putRaw: function putRaw(state, action) {
      var payload = action.payload;
      console.log(payload);
      state.raws.push(payload);
      state.raws.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }

        if (a.id > b.id) {
          return 1;
        }

        return 0;
      });
    },
    delRaw: function delRaw(state, action) {
      var payload = action.payload;
      var targetID = payload.id;
      var targetIndex = state.raws.findIndex(function (raw) {
        return raw.id === targetID;
      });
      state.raws.splice(targetIndex, 1);
    },
    clearRaw: function clearRaw(state) {
      state.raws = [];
    }
  }
}); // Action creators are generated for each case reducer function

var _selectedSlice$action = selectedSlice.actions,
    putRaw = _selectedSlice$action.putRaw,
    delRaw = _selectedSlice$action.delRaw,
    clearRaw = _selectedSlice$action.clearRaw;

/* harmony default export */ __webpack_exports__["default"] = (selectedSlice.reducer);

/***/ }),

/***/ "./assets/src/js/frontend/store.js":
/*!*****************************************!*\
  !*** ./assets/src/js/frontend/store.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": function() { return /* binding */ Store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit/query */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./assets/src/js/services/index.js");
/* harmony import */ var _states_generalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _states_dataSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/dataSlice */ "./assets/src/js/frontend/states/dataSlice.js");
/* harmony import */ var _states_selectedSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/selectedSlice */ "./assets/src/js/frontend/states/selectedSlice.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var initialStore = function initialStore() {
  var _reducer;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
    reducer: (_reducer = {
      general: _states_generalSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
      data: _states_dataSlice__WEBPACK_IMPORTED_MODULE_2__["default"],
      selected: _states_selectedSlice__WEBPACK_IMPORTED_MODULE_3__["default"]
    }, _defineProperty(_reducer, _services__WEBPACK_IMPORTED_MODULE_0__.bibleApi.reducerPath, _services__WEBPACK_IMPORTED_MODULE_0__.bibleApi.reducer), _defineProperty(_reducer, _services__WEBPACK_IMPORTED_MODULE_0__.searchApi.reducerPath, _services__WEBPACK_IMPORTED_MODULE_0__.searchApi.reducer), _reducer),
    middleware: function middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat([_services__WEBPACK_IMPORTED_MODULE_0__.bibleApi.middleware, _services__WEBPACK_IMPORTED_MODULE_0__.searchApi.middleware]);
    },
    preloadedState: {
      general: (0,_states_generalSlice__WEBPACK_IMPORTED_MODULE_1__.initialState)(state === null || state === void 0 ? void 0 : state.general),
      data: (0,_states_dataSlice__WEBPACK_IMPORTED_MODULE_2__.initialState)(state === null || state === void 0 ? void 0 : state.data),
      selected: (0,_states_selectedSlice__WEBPACK_IMPORTED_MODULE_3__.initialState)(state === null || state === void 0 ? void 0 : state.selected)
    }
  });
  (0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_5__.setupListeners)(store.dispatch);
  return store;
};

var Store = /*#__PURE__*/_createClass(function Store() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, Store);

  if (!Store.instance) {
    Store.instance = initialStore(state);
  }

  return Store.instance;
});

_defineProperty(Store, "instance", null);

/***/ }),

/***/ "./assets/src/js/frontend/tabs/index.jsx":
/*!***********************************************!*\
  !*** ./assets/src/js/frontend/tabs/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookTab": function() { return /* binding */ BookTab; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _components_frontend_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/layouts */ "./assets/src/js/frontend/layouts/index.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var Tab = function Tab(_ref) {
  var isActive = _ref.isActive,
      onClick = _ref.onClick,
      children = _ref.children;
  var underlineClassNames = ["after:content-['']", 'after:block', 'after:h-2px', 'after:w-full', 'after:absolute', 'after:-bottom-px', 'after:left-0', 'after:bg-red-600'];
  var classNames = ['relative', 'px-12px', 'py-8px'].concat(_toConsumableArray(isActive ? underlineClassNames : []), ['cursor-pointer']).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames,
    onClick: onClick
  }, children);
};

var BookTab = function BookTab(_ref2) {
  var _ref2$classname = _ref2.classname,
      extraClassName = _ref2$classname === void 0 ? '' : _ref2$classname;
  var triggerTabs = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.booksSelector;
  });
  var classNames = ['border-t', 'justify-around'].concat(_toConsumableArray(extraClassName.split(' '))).join(' ');
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var onClickTabBook = function onClickTabBook() {
    return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.booksSelectorBooks)());
  };

  var onClickTabChapter = function onClickTabChapter() {
    return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.booksSelectorChapters)());
  };

  var onClickTabVerse = function onClickTabVerse() {
    return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.booksSelectorVerses)());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_layouts__WEBPACK_IMPORTED_MODULE_4__.Top.Row, {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tab, {
    isActive: triggerTabs.books,
    onClick: onClickTabBook
  }, _components_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["bible-directory/book"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tab, {
    isActive: triggerTabs.chapters,
    onClick: onClickTabChapter
  }, _components_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["bible-directory/chapter"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tab, {
    isActive: triggerTabs.verses,
    onClick: onClickTabVerse
  }, _components_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["bible-directory/verse"]));
};



/***/ }),

/***/ "./assets/src/js/frontend/tools/BooksSelector.jsx":
/*!********************************************************!*\
  !*** ./assets/src/js/frontend/tools/BooksSelector.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var BooksSelector = function BooksSelector(_ref) {
  var _ref$range = _ref.range,
      range = _ref$range === void 0 ? [] : _ref$range,
      onClick = _ref.onClick;
  var toggleRange = Array.isArray(range) && range.length === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-px mx-1 bg-gray-400 w-8px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center leading-18px md:leading-22px w-96px md:w-144px py-5px md:py-8px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, range.pop()))) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center overflow-hidden bg-white border border-dashed border-gray-300 rounded-sm cursor-pointer",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center leading-18px md:leading-22px min-w-96px md:min-w-144px p-5px md:p-8px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, range.shift())), toggleRange);
};

/* harmony default export */ __webpack_exports__["default"] = (BooksSelector);

/***/ }),

/***/ "./assets/src/js/frontend/tools/Bordered.jsx":
/*!***************************************************!*\
  !*** ./assets/src/js/frontend/tools/Bordered.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Bordered = function Bordered(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center leading-18px md:leading-22px justify-center overflow-hidden bg-white border border-gray-300 rounded-sm w-72px md:w-80px py-5px md:py-8px"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Bordered);

/***/ }),

/***/ "./assets/src/js/frontend/tools/Borderless.jsx":
/*!*****************************************************!*\
  !*** ./assets/src/js/frontend/tools/Borderless.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Borderless = function Borderless(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex items-center justify-center overflow-hidden h-30px min-w-30px md:h-40px md:min-w-40px cursor-pointer",
    onClick: onClick
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Borderless);

/***/ }),

/***/ "./assets/src/js/frontend/tools/SearchBarInput.jsx":
/*!*********************************************************!*\
  !*** ./assets/src/js/frontend/tools/SearchBarInput.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _components_frontend_forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/frontend/forms/Form */ "./assets/src/js/frontend/forms/Form.jsx");
var _excluded = ["expand", "onSubmit", "forwardRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var SearchBarInput = function SearchBarInput(_ref) {
  var expand = _ref.expand,
      onSubmit = _ref.onSubmit,
      forwardRef = _ref.forwardRef,
      otherprops = _objectWithoutProperties(_ref, _excluded);

  var inputClassNames = ['w-0', 'h-24px', 'outline-0', '!p-0', 'line-height-24px', 'group-hover:w-auto'].concat(_toConsumableArray(expand ? ['w-auto'] : [])).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex items-center justify-center overflow-hidden bg-white border border-gray-300 rounded-sm py-2px pl-5px pr-23px md:pl-9px md:pr-29px md:py-7px group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    placeholder: "\u8F38\u5165\u95DC\u9375\u5B57\u9032\u884C\u641C\u5C0B",
    type: "text",
    autoComplete: "off",
    className: inputClassNames
  }, !!forwardRef ? {
    ref: forwardRef
  } : {}, !!otherprops ? otherprops : {})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiOutlineSearch, {
    className: "absolute h-20px w-20px right-4px md:right-10px text-neutral-600"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBarInput);

/***/ }),

/***/ "./assets/src/js/frontend/tools/index.jsx":
/*!************************************************!*\
  !*** ./assets/src/js/frontend/tools/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewPostButton": function() { return /* binding */ AddNewPostButton; },
/* harmony export */   "BooksSelectorButton": function() { return /* binding */ BooksSelectorButton; },
/* harmony export */   "Bordered": function() { return /* binding */ Bordered; },
/* harmony export */   "Borderless": function() { return /* binding */ Borderless; },
/* harmony export */   "CurrentRawsSelected": function() { return /* binding */ CurrentRawsSelected; },
/* harmony export */   "FullScreenToggle": function() { return /* binding */ FullScreenToggle; },
/* harmony export */   "SearchBar": function() { return /* binding */ SearchBar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_ripples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ripples */ "./node_modules/react-ripples/esm/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _components_frontend_tools_SearchBarInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/frontend/tools/SearchBarInput */ "./assets/src/js/frontend/tools/SearchBarInput.jsx");
/* harmony import */ var _components_frontend_tools_BooksSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/frontend/tools/BooksSelector */ "./assets/src/js/frontend/tools/BooksSelector.jsx");
/* harmony import */ var _components_frontend_tools_Borderless__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/frontend/tools/Borderless */ "./assets/src/js/frontend/tools/Borderless.jsx");
/* harmony import */ var _components_frontend_tools_Bordered__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/frontend/tools/Bordered */ "./assets/src/js/frontend/tools/Bordered.jsx");
var _excluded = ["expand", "onSubmit"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













var SearchBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var expand = _ref.expand,
      onSubmit = _ref.onSubmit,
      otherprops = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools_SearchBarInput__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    expand: expand,
    onSubmit: onSubmit,
    forwardRef: ref
  }, otherprops)));
});

var Borderless = function Borderless(_ref2) {
  var label = _ref2.label,
      className = _ref2.className,
      disabled = _ref2.disabled,
      _onClick = _ref2.onClick,
      children = _ref2.children;
  var classNames = [className].join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick(e) {
      if (disabled) return;

      _onClick(e);
    },
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools_Borderless__WEBPACK_IMPORTED_MODULE_6__["default"], null, children), typeof label === 'string' && label.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ['flex items-center md:leading-22px p-5px md:p-8px md:pl-0 cursor-pointer', disabled ? 'text-gray-400' : ''].join(' ')
  }, label) : null);
};

var Bordered = function Bordered(_ref3) {
  var onClick = _ref3.onClick,
      children = _ref3.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools_Bordered__WEBPACK_IMPORTED_MODULE_7__["default"], null, children));
};

var FullScreenToggle = function FullScreenToggle() {
  var fullscreen = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.general.fullscreen;
  });
  var Icon = fullscreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineCompress, {
    className: "h-20px w-20px right-4px md:right-10px text-neutral-700"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineExpand, {
    className: "h-20px w-20px right-4px md:right-10px text-neutral-700"
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Borderless, {
    onClick: function onClick() {
      return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.toggleScreen)());
    }
  }, Icon));
};

var BooksSelectorButton = function BooksSelectorButton(_ref4) {
  var _ref4$range = _ref4.range,
      range = _ref4$range === void 0 ? [] : _ref4$range;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_frontend_tools_BooksSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick() {
      return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.switchHeadersBooks)());
    },
    range: range
  });
};

var AddNewPostButton = function AddNewPostButton(_ref5) {
  var _ref5$showOn = _ref5.showOn,
      showOn = _ref5$showOn === void 0 ? false : _ref5$showOn,
      _ref5$className = _ref5.className,
      extraClassname = _ref5$className === void 0 ? '' : _ref5$className;
  var classNames = ['absolute', 'right-35px', 'bottom-35px', 'rounded-full', 'overflow-hidden', 'bg-gray-100', 'drop-shadow-md'].concat(_toConsumableArray(extraClassname.split(' '))).join(' ');
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
    animate: {
      y: showOn ? '0%' : '200%'
    },
    transition: {
      ease: 'easeOut'
    },
    initial: false,
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "w-full p-5px",
    onClick: function onClick() {
      dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.toggleDrawer)({
        name: 'new-post'
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsPlus, {
    className: "h-40px w-40px text-neutral-700"
  }))));
};

var CurrentRawsSelected = function CurrentRawsSelected() {
  var selectedRaws = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.selected.raws;
  });
  var booksDataSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return [].concat(_toConsumableArray(state.data.books.old), _toConsumableArray(state.data.books.new));
  });
  var displayCurrentSelected = selectedRaws.reduce(function (acc, raw, index, raws) {
    var bookIndex = raw.book;
    var bookFilterd = booksDataSelector.filter(function (book) {
      return book.index === bookIndex;
    });
    var abbrName = bookFilterd[0].abbr;

    if (index === 0) {
      acc.push("".concat(abbrName, " ").concat(raw.chapter, ":").concat(raw.verse));
      return acc;
    }

    if (Math.abs(raw.id - raws[index - 1].id) === 1) {
      acc[acc.length - 1] = acc[acc.length - 1].replace(/\-\d{0,3}/, '');
      acc[acc.length - 1] += "-".concat(raw.verse);
      return acc;
    }

    acc.push("".concat(raw.chapter, ":").concat(raw.verse));
    return acc;
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_ripples__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center overflow-hidden bg-white border border-dashed border-gray-300 rounded-sm cursor-pointer",
    onClick: function onClick() {
      return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_3__.toggleDrawer)({
        name: 'selected-raws'
      }));
    }
  }, displayCurrentSelected.length > 0 && !!displayCurrentSelected[0] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center leading-18px md:leading-22px p-5px md:p-8px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, displayCurrentSelected.join(', '))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-5px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_11__.MdHistoryToggleOff, {
    className: "h-20px w-20px text-neutral-700"
  }))));
};



/***/ }),

/***/ "./assets/src/js/frontend/utilities.js":
/*!*********************************************!*\
  !*** ./assets/src/js/frontend/utilities.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandomlyChapter": function() { return /* binding */ generateRandomlyChapter; },
/* harmony export */   "generateRestRangeParam": function() { return /* binding */ generateRestRangeParam; },
/* harmony export */   "generateVerseUrl": function() { return /* binding */ generateVerseUrl; },
/* harmony export */   "goToVerse": function() { return /* binding */ goToVerse; },
/* harmony export */   "onClickVerse": function() { return /* binding */ onClickVerse; },
/* harmony export */   "onCompletedSwipMoveChapter": function() { return /* binding */ onCompletedSwipMoveChapter; },
/* harmony export */   "onSwipMoveChapterPage": function() { return /* binding */ onSwipMoveChapterPage; },
/* harmony export */   "queryStringModifier": function() { return /* reexport safe */ _components_common__WEBPACK_IMPORTED_MODULE_4__.queryStringModifier; },
/* harmony export */   "retrieveBookIndexBySlug": function() { return /* binding */ retrieveBookIndexBySlug; },
/* harmony export */   "retrieveChapterByParamString": function() { return /* binding */ retrieveChapterByParamString; },
/* harmony export */   "validIsQueryWholeChapter": function() { return /* binding */ validIsQueryWholeChapter; }
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/@remix-run/router/dist/router.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var _assets_js_frontend_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/js/frontend/store */ "./assets/src/js/frontend/store.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/js/frontend/states/generalSlice */ "./assets/src/js/frontend/states/generalSlice.js");
/* harmony import */ var _assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/frontend/states/dataSlice */ "./assets/src/js/frontend/states/dataSlice.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/common */ "./assets/src/js/common/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var generateVerseUrl = function generateVerseUrl(bookAbbr, chapter, number) {
  return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.generatePath)('/bible/:books/:verse', {
    books: bookAbbr,
    verse: "".concat(chapter, ":").concat(number)
  });
};
var generateRestRangeParam = function generateRestRangeParam(_ref) {
  var books1 = _ref.books1,
      verse1 = _ref.verse1,
      books2 = _ref.books2,
      verse2 = _ref.verse2;
  var range = books2 && verse2 ? ["".concat(books1).concat(verse1), "".concat(books2).concat(verse2)] : ["".concat(books1).concat(verse1)];
  return range;
};
var retrieveChapterByParamString = function retrieveChapterByParamString(paramString) {
  var matched = paramString.match(/[0-9]?[a-z]+(\d{0,3}):?(\d{0,3})/i);
  return Number(matched[1]);
};
var retrieveBookIndexBySlug = function retrieveBookIndexBySlug(slug) {
  var _Store = new _assets_js_frontend_store__WEBPACK_IMPORTED_MODULE_0__.Store(),
      getState = _Store.getState;

  var _getState = getState(),
      data = _getState.data;

  var bookData = [].concat(_toConsumableArray(data.books.old), _toConsumableArray(data.books.new));
  var bookFiltered = bookData.filter(function (book) {
    return book.slug === slug;
  });

  if (bookFiltered.length === 0) {
    return new Error("Can not find book by slug: ".concat(slug));
  }

  var bookIndex = bookFiltered[0].index;
  return bookIndex;
};
var validIsQueryWholeChapter = function validIsQueryWholeChapter(querys, chapterVerseInfo) {
  if (!chapterVerseInfo) {
    return new Error("Parma chapterVerseInfo is must needed.");
  }

  if (!Array.isArray(querys) || querys.length === 0) {
    return new Error("Parma querys length equal 0.");
  }

  if (querys.length > 2) {
    return new Error("Parma querys length should be less then 2.");
  }

  if (querys.length === 1) {
    return true;
  }

  if (querys[0].book.index !== querys[1].book.index) {
    return false;
  }

  if (Number(querys[0].chapter) !== Number(querys[1].chapter)) {
    return false;
  }

  if (Number(querys[0].verse) !== 1) {
    return false;
  }

  var maxVerseNumber = chapterVerseInfo[querys[0].book.index][querys[0].chapter];

  if (Number(querys[1].verse) !== maxVerseNumber) {
    return false;
  }

  return true;
};
var generateRandomlyChapter = function generateRandomlyChapter(assignSchema) {
  var _Store2 = new _assets_js_frontend_store__WEBPACK_IMPORTED_MODULE_0__.Store(),
      getState = _Store2.getState;

  var _getState2 = getState(),
      data = _getState2.data;

  var schema = assignSchema;

  if (!Array.isArray(schema) || schema.length === 0) {
    schema = ['book', 'chapter', 'verse'];
  }

  var bookData = [].concat(_toConsumableArray(data.books.old), _toConsumableArray(data.books.new));
  var bookIndexRandomly = Math.round(Math.random() * bookData.length);
  var maxChapterNumberOfCurrentBook = bookData[bookIndexRandomly].chapters;
  var chapterIndexRandomly = Math.floor(Math.random() * maxChapterNumberOfCurrentBook) + 1;
  console.log(bookData, bookIndexRandomly, maxChapterNumberOfCurrentBook, chapterIndexRandomly);
  return {
    book: bookData[bookIndexRandomly],
    chapter: chapterIndexRandomly,
    verse: 1
  };
};
var goToVerse = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(bookIndex, chapter, maxVerseNumberOfChapter) {
    var _Store3, dispatch, getState, _getState3, data, maxVerseNumber, chapterVerseInfo, bookData, book, prepareQueryString;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _Store3 = new _assets_js_frontend_store__WEBPACK_IMPORTED_MODULE_0__.Store(), dispatch = _Store3.dispatch, getState = _Store3.getState;
            _getState3 = getState(), data = _getState3.data;
            maxVerseNumber = maxVerseNumberOfChapter;

            if (!maxVerseNumber) {
              chapterVerseInfo = data.translation.info.chapterVerseInfo;
              maxVerseNumber = chapterVerseInfo[bookIndex][chapter];
            }

            bookData = [].concat(_toConsumableArray(data.books.old), _toConsumableArray(data.books.new));
            book = bookData[bookIndex - 1];
            prepareQueryString = [{
              book: book,
              chapter: chapter,
              verse: 1
            }, {
              book: book,
              chapter: chapter,
              verse: maxVerseNumber
            }];
            _context.next = 9;
            return dispatch((0,_assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_3__.updateReadingQuerys)(prepareQueryString));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function goToVerse(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var onClickVerse = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref3) {
    var bookIndex, chapter, verse, maxVerseNumberOfChapter, _Store4, dispatch;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            bookIndex = _ref3.book, chapter = _ref3.chapter, verse = _ref3.verse, maxVerseNumberOfChapter = _ref3.maxVerseNumberOfChapter;
            _Store4 = new _assets_js_frontend_store__WEBPACK_IMPORTED_MODULE_0__.Store(), dispatch = _Store4.dispatch;
            goToVerse(bookIndex, chapter, maxVerseNumberOfChapter);
            _context2.next = 5;
            return dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_2__.clickBookSelector)({
              verses: Number(verse)
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function onClickVerse(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var onSwipMoveChapterPage = function onSwipMoveChapterPage(chapterPaged, offest) {
  var _Store5 = new _assets_js_frontend_store__WEBPACK_IMPORTED_MODULE_0__.Store(),
      dispatch = _Store5.dispatch,
      getState = _Store5.getState;

  var _getState4 = getState(),
      data = _getState4.data;

  var readingQuerys = data.readingQuerys;
  var newChapterPaged = chapterPaged + offest;
  dispatch(_components_services__WEBPACK_IMPORTED_MODULE_1__.bibleApi.util.prefetch('getBibleRaw', {
    ranges: ["".concat(readingQuerys[0].book.slug).concat(newChapterPaged, ":1")],
    withPrevChapter: true,
    withNextChapter: true
  }, {
    force: false,
    ifOlderThan: 10
  }));
};
var onCompletedSwipMoveChapter = function onCompletedSwipMoveChapter(_ref5, offest, pagePos, onTransition) {
  var currentBookIndex = _ref5.currentBookIndex,
      chapterPaged = _ref5.chapterPaged,
      readingQuerys = _ref5.readingQuerys;
  var history = (0,history__WEBPACK_IMPORTED_MODULE_6__.createBrowserHistory)();

  var _Store6 = new _assets_js_frontend_store__WEBPACK_IMPORTED_MODULE_0__.Store(),
      dispatch = _Store6.dispatch,
      getState = _Store6.getState;

  var _getState5 = getState(),
      data = _getState5.data,
      general = _getState5.general;

  var chapterVerseInfo = data.translation.info.chapterVerseInfo;
  var routerMode = general.routerMode;
  var newChapterPaged = chapterPaged + offest;
  var newReadingQuerys = [{
    book: _objectSpread({}, readingQuerys[0].book),
    chapter: newChapterPaged,
    verse: 1
  }, {
    book: _objectSpread({}, readingQuerys[1].book),
    chapter: newChapterPaged,
    verse: chapterVerseInfo[currentBookIndex][newChapterPaged]
  }]; // setChapterPaged(newChapterPaged)

  dispatch((0,_assets_js_frontend_states_dataSlice__WEBPACK_IMPORTED_MODULE_3__.updateReadingQuerys)(newReadingQuerys));
  dispatch((0,_assets_js_frontend_states_generalSlice__WEBPACK_IMPORTED_MODULE_2__.updatePageSwipper)({
    pagePos: pagePos,
    onTransition: onTransition
  }));

  if (routerMode === 'history') {
    history.push(generateVerseUrl(newReadingQuerys[0].book.slug, newChapterPaged, 1));
  }
};

/***/ }),

/***/ "./assets/src/js/schema/index.js":
/*!***************************************!*\
  !*** ./assets/src/js/schema/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateRhemeaByLicense": function() { return /* binding */ activateRhemeaByLicense; },
/* harmony export */   "activateRhemeaFields": function() { return /* binding */ activateRhemeaFields; },
/* harmony export */   "forgotPasswordLogosFields": function() { return /* binding */ forgotPasswordLogosFields; },
/* harmony export */   "searchBibleRawsByKeyword": function() { return /* binding */ searchBibleRawsByKeyword; },
/* harmony export */   "signinLogosFields": function() { return /* binding */ signinLogosFields; },
/* harmony export */   "verifyEmailLogosFields": function() { return /* binding */ verifyEmailLogosFields; }
/* harmony export */ });
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ "./node_modules/joi/dist/joi-browser.min.js");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
var _Joi$string;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var fields = {
  email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'tw', 'org', 'io', 'app', 'test']
    }
  }),
  identity_type: joi__WEBPACK_IMPORTED_MODULE_0___default().string().valid(_components_constants__WEBPACK_IMPORTED_MODULE_1__.IDENTITY_TYPE),
  product_slug: (_Joi$string = joi__WEBPACK_IMPORTED_MODULE_0___default().string()).valid.apply(_Joi$string, _toConsumableArray(_components_constants__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_SLUGS)),
  username: joi__WEBPACK_IMPORTED_MODULE_0___default().string().min(5).max(30),
  password: joi__WEBPACK_IMPORTED_MODULE_0___default().string().pattern(new RegExp('^[a-zA-Z0-9!@#$%]{3,30}$')),
  license: joi__WEBPACK_IMPORTED_MODULE_0___default().string(),
  searchKeyword: joi__WEBPACK_IMPORTED_MODULE_0___default().string()
};
var signinLogosFields = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
  identity_type: fields.identity_type.required(),
  username: fields.username.required(),
  password: fields.password.required()
});
var verifyEmailLogosFields = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
  email: fields.email.required(),
  activation_key: joi__WEBPACK_IMPORTED_MODULE_0___default().string().empty('')
});
var forgotPasswordLogosFields = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
  email: fields.email.required(),
  auth_code: joi__WEBPACK_IMPORTED_MODULE_0___default().string().empty(''),
  password: fields.password.empty(''),
  confirm_password: fields.password.empty('')
});
var activateRhemeaFields = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
  email: fields.email.required(),
  identity_type: fields.identity_type.required(),
  product_slug: fields.product_slug.required(),
  username: fields.username.required(),
  password: fields.password.required(),
  confirm_password: joi__WEBPACK_IMPORTED_MODULE_0___default().ref('password')
});
var activateRhemeaByLicense = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
  email: fields.email.required(),
  identity_type: fields.identity_type.required(),
  product_slug: fields.product_slug.required(),
  username: fields.username.required(),
  license: fields.license.required()
});
var searchBibleRawsByKeyword = joi__WEBPACK_IMPORTED_MODULE_0___default().object({
  words: fields.searchKeyword
});

/***/ }),

/***/ "./assets/src/js/services/index.js":
/*!*****************************************!*\
  !*** ./assets/src/js/services/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateApi": function() { return /* binding */ activateApi; },
/* harmony export */   "bibleApi": function() { return /* binding */ bibleApi; },
/* harmony export */   "deactivateApi": function() { return /* binding */ deactivateApi; },
/* harmony export */   "optionsApi": function() { return /* binding */ optionsApi; },
/* harmony export */   "ordersApi": function() { return /* binding */ ordersApi; },
/* harmony export */   "searchApi": function() { return /* binding */ searchApi; },
/* harmony export */   "sendForgotApi": function() { return /* binding */ sendForgotApi; },
/* harmony export */   "sendVerifyApi": function() { return /* binding */ sendVerifyApi; },
/* harmony export */   "signinApi": function() { return /* binding */ signinApi; },
/* harmony export */   "useActivateByLicenseMutation": function() { return /* binding */ useActivateByLicenseMutation; },
/* harmony export */   "useActivateCoreMutation": function() { return /* binding */ useActivateCoreMutation; },
/* harmony export */   "useActivateFeaturesMutation": function() { return /* binding */ useActivateFeaturesMutation; },
/* harmony export */   "useDeactivateMutation": function() { return /* binding */ useDeactivateMutation; },
/* harmony export */   "useGetBibleRawQuery": function() { return /* binding */ useGetBibleRawQuery; },
/* harmony export */   "useOrdersQuery": function() { return /* binding */ useOrdersQuery; },
/* harmony export */   "usePrefetch": function() { return /* binding */ usePrefetch; },
/* harmony export */   "useSearchBibleRawsQuery": function() { return /* binding */ useSearchBibleRawsQuery; },
/* harmony export */   "useSendForgotMutation": function() { return /* binding */ useSendForgotMutation; },
/* harmony export */   "useSendVerifyMutation": function() { return /* binding */ useSendVerifyMutation; },
/* harmony export */   "useSigninMutation": function() { return /* binding */ useSigninMutation; },
/* harmony export */   "useUpdateOptionsMutation": function() { return /* binding */ useUpdateOptionsMutation; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var shorthash2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shorthash2 */ "./node_modules/shorthash2/dist/index.js");
/* harmony import */ var shorthash2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shorthash2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common */ "./assets/src/js/common/index.js");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var prepareHeaders = function prepareHeaders(headers) {
  var _RHEMA_LOCALIZE$RHEMA, _RHEMA_LOCALIZE$RHEMA2;

  var nonce = ((RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default()) === null || (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default()) === void 0 ? void 0 : (_RHEMA_LOCALIZE$RHEMA = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_BACKEND)) === null || _RHEMA_LOCALIZE$RHEMA === void 0 ? void 0 : _RHEMA_LOCALIZE$RHEMA.NONCE) || ((RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default()) === null || (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default()) === void 0 ? void 0 : (_RHEMA_LOCALIZE$RHEMA2 = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_INITAIL_DATA)) === null || _RHEMA_LOCALIZE$RHEMA2 === void 0 ? void 0 : _RHEMA_LOCALIZE$RHEMA2.NONCE);

  if (nonce) {
    headers.set('X-WP-Nonce', nonce);
  }

  return headers;
};

var optionsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.options',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.options),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      updateOptions: builder.mutation({
        query: function query(body) {
          return {
            method: 'POST',
            body: body
          };
        },
        transformResponse: function transformResponse(response) {
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          return response;
        }
      })
    };
  }
});
var useUpdateOptionsMutation = optionsApi.useUpdateOptionsMutation;

var bibleApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.bible',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.bible),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      getBibleRaw: builder.query({
        query: function query(_ref) {
          var _ref$ranges = _ref.ranges,
              ranges = _ref$ranges === void 0 ? [] : _ref$ranges,
              withPrevChapter = _ref.withPrevChapter,
              withNextChapter = _ref.withNextChapter;

          if (typeof ranges === 'string') {
            ranges = [ranges];
          }

          var withPrevChapterQueryString = withPrevChapter ? '&with_prev_chapter=1' : '';
          var withNextChapterQueryString = withNextChapter ? '&with_next_chapter=1' : '';
          return "".concat(ranges.reduce(function (acc, range, index) {
            var joiner = index === 0 ? '?' : '&';
            return "".concat(acc).concat(joiner, "range[]=").concat(range);
          }, '')).concat(withPrevChapterQueryString).concat(withNextChapterQueryString);
        },
        transformErrorResponse: function transformErrorResponse(response) {
          console.log(response);
          return response;
        }
      })
    };
  }
});
var useGetBibleRawQuery = bibleApi.useGetBibleRawQuery,
    usePrefetch = bibleApi.usePrefetch;

var searchApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.search',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.bible),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      searchBibleRaws: builder.query({
        query: function query(_ref2) {
          var words = _ref2.words,
              _ref2$paged = _ref2.paged,
              paged = _ref2$paged === void 0 ? 1 : _ref2$paged,
              _ref2$size = _ref2.size,
              size = _ref2$size === void 0 ? 20 : _ref2$size;
          return "search?words=".concat(words, "&from=").concat((paged - 1) * size);
        },
        serializeQueryArgs: function serializeQueryArgs(_ref3) {
          var queryArgs = _ref3.queryArgs,
              endpointName = _ref3.endpointName;
          var words = queryArgs.words;

          if (typeof words === 'undefined') {
            return endpointName;
          }

          var shortHashString = shorthash2__WEBPACK_IMPORTED_MODULE_0___default()(words);
          return "".concat(endpointName, "_").concat(shortHashString);
        },
        merge: function merge(currentCache, newItems) {
          console.log('merge');
          var currentItems = currentCache.data.hits.hits;
          var currentIds = currentItems.map(function (item) {
            return item._id;
          });
          var newPushItems = newItems.data.hits.hits.filter(function (item) {
            return !currentIds.includes(item._id);
          });
          currentItems.push.apply(currentItems, _toConsumableArray(newPushItems));
        },
        transformResponse: function transformResponse(response) {
          // console.log(response)
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          // console.log(response)
          return response;
        },
        forceRefetch: function forceRefetch(_ref4) {
          var currentArg = _ref4.currentArg,
              previousArg = _ref4.previousArg;

          if (typeof previousArg === 'undefined') {
            return true;
          }

          if ((currentArg === null || currentArg === void 0 ? void 0 : currentArg.words) !== (previousArg === null || previousArg === void 0 ? void 0 : previousArg.words)) {
            console.log('forceRefetch', (currentArg === null || currentArg === void 0 ? void 0 : currentArg.words) !== (previousArg === null || previousArg === void 0 ? void 0 : previousArg.words));
            return true;
          }

          if ((currentArg === null || currentArg === void 0 ? void 0 : currentArg.paged) !== (previousArg === null || previousArg === void 0 ? void 0 : previousArg.paged)) {
            return true;
          }

          return false;
        }
      })
    };
  }
});
var useSearchBibleRawsQuery = searchApi.useSearchBibleRawsQuery;

var activateApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.activate',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.activate),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      activateCore: builder.mutation({
        query: function query(body) {
          var productSlug = body.product_slug;
          var restName = _components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUG_2_REST_NAME_MAP[productSlug];

          if (typeof restName === 'undefined' || !restName) {
            throw new Error('Error in mutation.query');
          }

          return {
            url: _components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUG_2_REST_NAME_MAP[productSlug],
            method: 'POST',
            body: body
          };
        },
        transformResponse: function transformResponse(response) {
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          return response;
        }
      }),
      activateFeatures: builder.mutation({
        query: function query(body) {
          var productSlug = body.product_slug;
          var restName = _components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUG_2_REST_NAME_MAP[productSlug];

          if (typeof restName === 'undefined' || !restName) {
            throw new Error('Error in mutation.query');
          }

          return {
            url: _components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUG_2_REST_NAME_MAP[productSlug],
            method: 'POST',
            body: body
          };
        },
        transformResponse: function transformResponse(response) {
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          return response;
        }
      }),
      activateByLicense: builder.mutation({
        query: function query(body) {
          var productSlug = body.product_slug;

          if (typeof productSlug === 'undefined' || !productSlug) {
            throw new Error('Error in mutation.query');
          }

          if (!_components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUGS.includes(productSlug)) {
            throw new Error('Error in mutation.query');
          }

          return {
            url: 'license',
            method: 'POST',
            body: body
          };
        }
      })
    };
  }
});
var useActivateCoreMutation = activateApi.useActivateCoreMutation,
    useActivateFeaturesMutation = activateApi.useActivateFeaturesMutation,
    useActivateByLicenseMutation = activateApi.useActivateByLicenseMutation;

var deactivateApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.deactivate',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.deactivate),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      deactivate: builder.mutation({
        query: function query(body) {
          var product_slug = body.product_slug,
              license = body.license;

          if (!_components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUGS.includes(product_slug)) {
            throw new Error('Error in mutation.query');
          }

          return {
            method: 'POST',
            body: {
              product_slug: product_slug,
              license: license
            }
          };
        },
        transformResponse: function transformResponse(response) {
          console.log(response);
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          console.log(response);
          return response;
        }
      })
    };
  }
});
var useDeactivateMutation = deactivateApi.useDeactivateMutation;

var signinApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.signin',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.account),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      signin: builder.mutation({
        query: function query(body) {
          return {
            url: 'signin',
            method: 'POST',
            body: body
          };
        },
        transformResponse: function transformResponse(response) {
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          return response;
        }
      })
    };
  }
});
var useSigninMutation = signinApi.useSigninMutation;

var sendVerifyApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.sendverify',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.account),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      sendVerify: builder.mutation({
        query: function query(body) {
          return {
            url: 'verify',
            method: 'POST',
            body: body
          };
        },
        transformResponse: function transformResponse(response) {
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          return response;
        }
      })
    };
  }
});
var useSendVerifyMutation = sendVerifyApi.useSendVerifyMutation;

var sendForgotApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.sendforgot',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.account),
    prepareHeaders: prepareHeaders
  }),
  endpoints: function endpoints(builder) {
    return {
      sendForgot: builder.mutation({
        query: function query(body) {
          return {
            url: 'forgot',
            method: 'POST',
            body: body
          };
        },
        transformResponse: function transformResponse(response) {
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          return response;
        }
      })
    };
  }
});
var useSendForgotMutation = sendForgotApi.useSendForgotMutation;

var ordersApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_4__.createApi)({
  reducerPath: 'api.orders',
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_5__.fetchBaseQuery)({
    baseUrl: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_REST_ENDPOINTS.account),
    prepareHeaders: function prepareHeaders(headers) {
      var nonce = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_BACKEND.NONCE);

      if (nonce) {
        headers.set('X-WP-Nonce', nonce);
      }

      var token = (0,_components_common__WEBPACK_IMPORTED_MODULE_2__.retrieveLogosSignedToken)(sessionStorage);

      if (token) {
        headers.set('Authorization', "Bearer ".concat(token));
      }

      return headers;
    }
  }),
  endpoints: function endpoints(builder) {
    return {
      orders: builder.query({
        query: function query() {
          return {
            url: 'orders'
          };
        },
        transformResponse: function transformResponse(response) {
          return response;
        },
        transformErrorResponse: function transformErrorResponse(response) {
          return response;
        }
      })
    };
  }
});
var useOrdersQuery = ordersApi.useOrdersQuery;


/***/ }),

/***/ "./assets/src/postcss/blockeditor.pcss":
/*!*********************************************!*\
  !*** ./assets/src/postcss/blockeditor.pcss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "RHEMA_LOCALIZE":
/*!********************************************!*\
  !*** external "LOCALIZE_SCRIPT_VARIABLES" ***!
  \********************************************/
/***/ (function(module) {

module.exports = LOCALIZE_SCRIPT_VARIABLES;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = React;

/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/***/ (function(module) {

module.exports = _;

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blockeditor": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrhema"] = self["webpackChunkrhema"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./assets/src/js/blockeditor.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=blockeditor.js.map