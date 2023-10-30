/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/backend.js":
/*!**********************************!*\
  !*** ./assets/src/js/backend.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postcss_backend_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../postcss/backend.pcss */ "./assets/src/postcss/backend.pcss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _backend_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend/App */ "./assets/src/js/backend/App.jsx");
/* harmony import */ var _backend_AnwsersMetaBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backend/AnwsersMetaBox */ "./assets/src/js/backend/AnwsersMetaBox.jsx");
/* harmony import */ var _backend_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend/store */ "./assets/src/js/backend/store.js");
/**
 * SASS
 */

/**
 * JavaScript
 */









/**
 * Add here your JavasScript code
 */

var SysError = function SysError(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("pre", null, error.message));
};

SysError.propTypes = {
  error: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),
  resetErrorBoundary: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any)
};
var container = document.getElementById('rhema-app');

if (!!container && container instanceof HTMLElement) {
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _backend_store__WEBPACK_IMPORTED_MODULE_6__.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__.ErrorBoundary, {
    FallbackComponent: SysError
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_backend_App__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
}

var bibleQuestionAnwserMetaBoxContainer = document.getElementById('bible-question-anwser-meta-box');

if (!!bibleQuestionAnwserMetaBoxContainer && bibleQuestionAnwserMetaBoxContainer instanceof HTMLElement) {
  var _root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(bibleQuestionAnwserMetaBoxContainer);

  _root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_backend_AnwsersMetaBox__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

/***/ }),

/***/ "./assets/src/js/backend/AnwsersMetaBox.jsx":
/*!**************************************************!*\
  !*** ./assets/src/js/backend/AnwsersMetaBox.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab */ "./assets/src/js/backend/tab/index.jsx");
/* harmony import */ var _form_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-table */ "./assets/src/js/backend/form-table/index.jsx");






var AnwsersMetaBox = function AnwsersMetaBox() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "group flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    class: "dashicons dashicons-saved"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    class: "dashicons dashicons-sticky"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-b pb-3 group-last:border-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u529B\u7684\u958B\u9EBB\u7169\u8A87\u5F35\uFF0C\u9053\u70BA\u4EC0\uFF0C\u5DF1\u7684\u6709\u4E00\u500B\u81EA\u5BB6\u662F\u958B\u6211\u5C31\u662F\u6709\uFF0C\u90FD\u4E8B\u52D9\u6240\u6642\u8D85\u559C\u9084\u5F88\uFF0C\u8981\u662F\u53EF\u611B\u5594\u559C\u6B61\u6211\uFF0C\u597D\u518D\u9EBB\u7169\u6B61\u9019\u500B\u4E0D\u4E00\u6A23\u6211\u4E4B\u524D\u3002\u77E5\u4E00\u6A23\u53EF\u662F\u4ED6\uFF0C\u80FD\u600E\u9EBC\u9019\uFF0C\u50CF\u662F\u53EF\u4EE5\u4E00\u6A23\u9EBC\u770B\u4E86\u662F\u9019\u6A23\u5217\uFF0C\u5F88\u591A\u4F3C\u7684\u4E00\u4E0B\u3002 \u5F97\u5F88\u90FD\u662F\u7684\u4E0D\u662F\u61C9\u8A72\u540D\u5B57\u500B\u5929\u771F\u7684\uFF0C\u91D1\u984D\u600E\u9EBC\u884C\u52D5\uFF0C\u770B\u8D77\u662F\u6211\u525B\u525B\u9EBC\u610F\u7684\u4E00\u500B\uFF0C\u4E3B\u4E0D\u7D50\u5C40\u80A9\u8180\u5C31\u4F86\u4E86\u89BA\u77E5\u3002\u6BD4\u8F03\u6709\u56E0\u65B9\u7562\u7ADF\u662F\u73FE\u5728\u6709\uFF0C\u5E7E\u4E4E\u662F\u907A\u5931\u7269\uFF0C\u5728\u610F\u7684\u90E8\u4E0A\u662F\u53EA\u662F\u771F\u5230\u662F\u6C92\uFF0C\u4E86\u55CE\u80FD\u5920\u5EC1\u6240\uFF0C\u6700\u5F8C\u9084\u8EAB\u771F\u8056\u51FA\u4F86\u66F8\u662F\u4EC0\u8D85\u597D\uFF0C\u4E0D\u89BA\u5F97\u3002\u679C\u4E0D\u6211\u5011\u4E0A\u5C31\u662F\u56E0\uFF0C\u4E00\u81C9\u958B\u59CB\u4E00\u767E\u90A3\u6A23\u6211\u53EF\u4EE5\u6EAB\u67D4\u7684\u22EF\u7684\u670B\u53CB\u4F86\u662F\uFF0C\u597D\u50CF\u89BA\u5F97\u597D\u4E5F\u89BA\u81F3\u5C11\u5019\u90FD\uFF0C\u539F\u6211\u5011\u6709\u592A\u6A5F\u8ECA\u5011\u5169\u524D\u5E7E\u5929\uFF0C\u55DA\u55DA\u55DA\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap justify-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block"
  }, "answered Apr 30, 2009 at 7:22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    src: "https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=64&d=mm&r=g",
    className: "float-left w-11"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block font-medium whitespace-nowrap"
  }, "A WordPress Commenter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block whitespace-nowrap"
  }, "https://wordpress.org/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block whitespace-nowrap"
  }, "wapuu@wordpress.example"))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnwsersMetaBox);

/***/ }),

/***/ "./assets/src/js/backend/App.jsx":
/*!***************************************!*\
  !*** ./assets/src/js/backend/App.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/js/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab */ "./assets/src/js/backend/tab/index.jsx");
/* harmony import */ var _tab_contents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab/contents */ "./assets/src/js/backend/tab/contents.jsx");
/* harmony import */ var _form_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-table */ "./assets/src/js/backend/form-table/index.jsx");
/* harmony import */ var _components_backend_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/backend/components */ "./assets/src/js/backend/components/index.jsx");
/* harmony import */ var _components_backend_activates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/backend/activates */ "./assets/src/js/backend/activates/index.jsx");
/* harmony import */ var _components_backend_feature_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/backend/feature-cards */ "./assets/src/js/backend/feature-cards/index.jsx");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null)
  })));
};

var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: ""
  }, "Rhema"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tab__WEBPACK_IMPORTED_MODULE_3__.TabWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
    className: function className(_ref) {
      var isActive = _ref.isActive;
      return isActive ? ['nav-tab', 'nav-tab-active'].join(' ') : 'nav-tab';
    },
    to: "/settings"
  }, "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
    className: function className(_ref2) {
      var isActive = _ref2.isActive;
      return isActive ? ['nav-tab', 'nav-tab-active'].join(' ') : 'nav-tab';
    },
    to: "/features"
  }, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
    className: function className(_ref3) {
      var isActive = _ref3.isActive;
      return isActive ? ['nav-tab', 'nav-tab-active'].join(' ') : 'nav-tab';
    },
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
    className: function className(_ref4) {
      var isActive = _ref4.isActive;
      return isActive ? ['nav-tab', 'nav-tab-active'].join(' ') : 'nav-tab';
    },
    to: "/account"
  }, "My Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tab__WEBPACK_IMPORTED_MODULE_3__.ContentsWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tab__WEBPACK_IMPORTED_MODULE_3__.ContentWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/settings",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Settings, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/features",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Features, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tab_contents__WEBPACK_IMPORTED_MODULE_4__.About, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/account",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tab_contents__WEBPACK_IMPORTED_MODULE_4__.Account, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Settings, null)
  })))));
};

var Settings = function Settings() {
  var _updateOptionsRespons, _updateOptionsError$d, _updateOptionsRespons2, _updateOptionsError$d2, _updateOptionsError$d3, _updateOptionsRespons3;

  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
    defaultValues: _objectSpread({
      bible_entry: 'bible'
    }, JSON.parse((RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_BACKEND.OPTIONS)).general)
  });
  var register = formMethods.register,
      handleSubmit = formMethods.handleSubmit,
      formState = formMethods.formState;
  var isSubmitting = formState.isSubmitting;

  var _useUpdateOptionsMuta = (0,_components_services__WEBPACK_IMPORTED_MODULE_9__.useUpdateOptionsMutation)(),
      _useUpdateOptionsMuta2 = _slicedToArray(_useUpdateOptionsMuta, 2),
      updateOptions = _useUpdateOptionsMuta2[0],
      _useUpdateOptionsMuta3 = _useUpdateOptionsMuta2[1],
      updateOptionsResponse = _useUpdateOptionsMuta3.data,
      updateOptionsError = _useUpdateOptionsMuta3.error,
      isRTKMutation = _useUpdateOptionsMuta3.isLoading;

  var isUpdating = isRTKMutation || isSubmitting;
  var showExceptionMessage = !!updateOptionsResponse && !/2[0-9][0-9]/.test(updateOptionsResponse === null || updateOptionsResponse === void 0 ? void 0 : (_updateOptionsRespons = updateOptionsResponse.response) === null || _updateOptionsRespons === void 0 ? void 0 : _updateOptionsRespons.code) || !!updateOptionsError;
  var showOptionsSaved = (updateOptionsResponse === null || updateOptionsResponse === void 0 ? void 0 : updateOptionsResponse.success) === true ? true : false;
  var exceptionMessage = {
    code: updateOptionsError === null || updateOptionsError === void 0 ? void 0 : updateOptionsError.status,
    label: '',
    message: (updateOptionsError === null || updateOptionsError === void 0 ? void 0 : (_updateOptionsError$d = updateOptionsError.data) === null || _updateOptionsError$d === void 0 ? void 0 : _updateOptionsError$d.message) || 'There has been a critical error.'
  };
  var successMessage = {
    code: (updateOptionsResponse === null || updateOptionsResponse === void 0 ? void 0 : (_updateOptionsRespons2 = updateOptionsResponse.response) === null || _updateOptionsRespons2 === void 0 ? void 0 : _updateOptionsRespons2.code) || 200,
    label: 'Success',
    message: (updateOptionsError === null || updateOptionsError === void 0 ? void 0 : (_updateOptionsError$d2 = updateOptionsError.data) === null || _updateOptionsError$d2 === void 0 ? void 0 : (_updateOptionsError$d3 = _updateOptionsError$d2.data) === null || _updateOptionsError$d3 === void 0 ? void 0 : _updateOptionsError$d3.message) || (updateOptionsResponse === null || updateOptionsResponse === void 0 ? void 0 : (_updateOptionsRespons3 = updateOptionsResponse.data) === null || _updateOptionsRespons3 === void 0 ? void 0 : _updateOptionsRespons3.message) || 'Rhema options saved.'
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var payload;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return updateOptions(data);

            case 2:
              payload = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.Label, {
    htmlFor: "bible_entry"
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["bible-entry-path"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.FieldWrap, null, (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_SITE_ROOT) + '/', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "text",
    id: "bible_entry",
    className: "ml-2px"
  }, register('bible_entry'), {
    title: "Route Namespace",
    placeholder: "Setup your bible reader route namespace"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.Label, {
    htmlFor: "bible_default_translation"
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["default-translation"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.FieldWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
    id: "bible_default_translation"
  }, register('bible_default_translation')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: ""
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_2__.UI_MESSAGE_MAPPING["default-translation/default"]), RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_BACKEND.DATA.AVAILABLE_TRANSLATIONS.map(function (translation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: translation.abbr.toLowerCase(),
      key: translation.id
    }, translation.name);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "submit",
    className: "button button-primary m-0 flex items-center"
  }, isUpdating && {
    disabled: true
  }), isUpdating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_6__.ButtonSpinner, null) : 'Save Settings'), showOptionsSaved ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.ResponseSuccessMsg, {
    label: successMessage.label
  }, successMessage.message) : null, showExceptionMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_table__WEBPACK_IMPORTED_MODULE_5__.ResponseErrorMsg, {
    code: exceptionMessage.code,
    label: exceptionMessage.label
  }, exceptionMessage.message || 'There has been a critical error.')));
};

var Features = function Features() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayActiveCoreModal = _useState2[0],
      setDisplayActiveCoreModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([false, '']),
      _useState4 = _slicedToArray(_useState3, 2),
      displayLicensModal = _useState4[0],
      setDisplayLicenseModal = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Features", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap -mx-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_feature_cards__WEBPACK_IMPORTED_MODULE_8__.Core, {
    onClickActive: function onClickActive(e) {
      e.preventDefault();
      setDisplayActiveCoreModal(true);
    },
    onClickLicense: function onClickLicense(e) {
      e.preventDefault();
      setDisplayLicenseModal([true, 'core']);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_feature_cards__WEBPACK_IMPORTED_MODULE_8__.Relation, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_feature_cards__WEBPACK_IMPORTED_MODULE_8__.OfflineReading, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_activates__WEBPACK_IMPORTED_MODULE_7__.Core, {
    show: displayActiveCoreModal,
    onClickClose: function onClickClose() {
      setDisplayActiveCoreModal(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_activates__WEBPACK_IMPORTED_MODULE_7__.License, {
    show: displayLicensModal,
    onClickClose: function onClickClose() {
      setDisplayLicenseModal(false);
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/src/js/backend/activates/index.jsx":
/*!***************************************************!*\
  !*** ./assets/src/js/backend/activates/index.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Core": () => (/* binding */ Core),
/* harmony export */   "License": () => (/* binding */ License)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/joi */ "./node_modules/@hookform/resolvers/joi/dist/joi.mjs");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/common */ "./assets/src/js/common/index.js");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/backend/form-table */ "./assets/src/js/backend/form-table/index.jsx");
/* harmony import */ var _components_backend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/backend/components */ "./assets/src/js/backend/components/index.jsx");
/* harmony import */ var _components_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/schema */ "./assets/src/js/schema/index.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _components_backend_states_generalSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/backend/states/generalSlice */ "./assets/src/js/backend/states/generalSlice.js");
var _excluded = ["confirm_password"];

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var Core = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function Core(_ref) {
  var _errors$email, _errors$username, _errors$password, _errors$confirm_passw, _errors$identity_type, _errors$product_slug;

  var show = _ref.show,
      onClickClose = _ref.onClickClose;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var coreActiveFormMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({
    defaultValues: {
      email: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6___default().WP_OPTIONS.ADMIN_EMAIL),
      identity_type: _components_constants__WEBPACK_IMPORTED_MODULE_7__.IDENTITY_TYPE,
      product_slug: 'wp-rhema-core-feature',
      username: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6___default().WP_OPTIONS.HOST_DOMAIN),
      password: '',
      confirm_password: ''
    },
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_4__.joiResolver)(_components_schema__WEBPACK_IMPORTED_MODULE_10__.activateRhemeaFields)
  });
  var register = coreActiveFormMethods.register,
      formState = coreActiveFormMethods.formState,
      handleSubmit = coreActiveFormMethods.handleSubmit;
  var isSubmitting = formState.isSubmitting,
      errors = formState.errors;

  var _useActivateCoreMutat = (0,_components_services__WEBPACK_IMPORTED_MODULE_11__.useActivateCoreMutation)(),
      _useActivateCoreMutat2 = _slicedToArray(_useActivateCoreMutat, 2),
      activateCore = _useActivateCoreMutat2[0],
      _useActivateCoreMutat3 = _useActivateCoreMutat2[1],
      activateCoreResponse = _useActivateCoreMutat3.data,
      activateCoreError = _useActivateCoreMutat3.error,
      isActivatingCore = _useActivateCoreMutat3.isLoading;

  var showExceptionMessage = !!activateCoreError;
  var showActivatingFeaturePrepare = (activateCoreResponse === null || activateCoreResponse === void 0 ? void 0 : activateCoreResponse.success) || false;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(showActivatingFeaturePrepare),
      _useState2 = _slicedToArray(_useState, 2),
      showActivatingFeature = _useState2[0],
      setShowActivatingFeature = _useState2[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var confirm_password, sendOutFields, payload;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              confirm_password = data.confirm_password, sendOutFields = _objectWithoutProperties(data, _excluded);
              _context.next = 3;
              return activateCore(sendOutFields);

            case 3:
              payload = _context.sent;

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

  var triggerClose = function triggerClose() {
    onClickClose();
    setShowActivatingFeature(false);
  };

  var onActivatingCompleted = function onActivatingCompleted(response) {
    triggerClose();
    var key = response.license_key,
        renew_date = response.renew_date,
        data = response.license_data;
    dispatch((0,_components_backend_states_generalSlice__WEBPACK_IMPORTED_MODULE_12__.addLicense)({
      bible: {
        key: key,
        renew_date: renew_date,
        data: data
      }
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (showActivatingFeaturePrepare) {
      setShowActivatingFeature(true);
    }
  }, [showActivatingFeaturePrepare]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_9__.ScreenOverlay, {
    show: show,
    className: {
      root: 'z-10',
      modal: 'max-w-sm'
    },
    title: "Apply to activate Rhema",
    onClickClose: triggerClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full p-2 border-t border-b border-l-0 border-r-0 border-[#c3c4c7] border-solid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block bg-gray-300 p-4px mr-1 rounded font-medium"
  }, "Product"), "Rhema Core"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block bg-gray-300 p-4px mr-1 rounded font-medium"
  }, "Price"), "Free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block bg-gray-300 p-4px mr-1 rounded font-medium"
  }, "Subscription period"), "Unlimited"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, {
    label: "Email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, register('email', {
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "m-0 mb-2 max-w-200px text-xs"
  }, "License key will be sent to this email, please confirm that you can receive."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, {
    label: "Domain"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "text",
    className: "w-full"
  }, register('username', {
    required: true
  }), {
    readOnly: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "m-0 mb-2 max-w-200px text-xs"
  }, "In the future, if you lose the License key, please use this field value as the username to log in to \"logos.api\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$username = errors.username) === null || _errors$username === void 0 ? void 0 : _errors$username.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, {
    label: "Password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "password",
    className: "w-full min-w-200px"
  }, register('password', {
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, {
    label: "Confirm Password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "password",
    className: "w-full min-w-200px"
  }, register('confirm_password', {
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$confirm_passw = errors.confirm_password) === null || _errors$confirm_passw === void 0 ? void 0 : _errors$confirm_passw.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "hidden"
  }, register('identity_type'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$identity_type = errors.identity_type) === null || _errors$identity_type === void 0 ? void 0 : _errors$identity_type.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "hidden"
  }, register('product_slug'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$product_slug = errors.product_slug) === null || _errors$product_slug === void 0 ? void 0 : _errors$product_slug.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "submit",
    className: "button button-primary flex items-center"
  }, (isSubmitting || isActivatingCore || showActivatingFeature) && {
    disabled: 'disabled'
  }), isSubmitting || isActivatingCore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_9__.ButtonSpinner, {
    className: "mr-1"
  }), "Applying...") : showActivatingFeature ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_9__.ButtonSpinner, {
    className: "mr-1"
  }), "Activating...", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + _components_constants__WEBPACK_IMPORTED_MODULE_7__.ACTIVATING_COUNT_DOWN_TIME,
    renderer: function renderer(_ref3) {
      var seconds = _ref3.seconds,
          completed = _ref3.completed;

      if (completed) {
        return null;
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(", seconds, ")");
      }
    },
    onComplete: function onComplete() {
      onActivatingCompleted(activateCoreResponse.data);
    }
  })) : 'Confirm'), showActivatingFeature && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ResponseSuccessMsg, {
    label: "Success"
  }, "Your application has been approved, activating the feature"), showExceptionMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ResponseErrorMsg, {
    code: (activateCoreResponse === null || activateCoreResponse === void 0 ? void 0 : activateCoreResponse.response.code) || activateCoreError.status,
    label: (activateCoreResponse === null || activateCoreResponse === void 0 ? void 0 : activateCoreResponse.response.message) || activateCoreError.data.code
  }, (activateCoreError === null || activateCoreError === void 0 ? void 0 : activateCoreError.data.message) || 'There has been a critical error.'))));
});
var License = function License(_ref4) {
  var _errors$license, _errors$email2, _errors$username2, _errors$identity_type2, _errors$product_slug2;

  var show = _ref4.show,
      onClickClose = _ref4.onClickClose;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var licenseData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    var timeZone = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6___default().WP_OPTIONS.TIME_ZONE) || '0';
    var license = state.general.licenses.bible;
    var licenseData = (0,_components_common__WEBPACK_IMPORTED_MODULE_5__.isJsonStr)(license.data) ? JSON.parse(license.data) : license.data;
    var renewDate = moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(license.renew_date).utcOffset(timeZone);
    var nowDate = moment_moment__WEBPACK_IMPORTED_MODULE_3___default()();

    if (typeof license.key !== 'string' || license.key.length <= 0) {
      return null;
    }

    if (nowDate.isAfter(renewDate)) {
      return null;
    }

    if (typeof licenseData.email !== 'string' || licenseData.email.length <= 0) {
      return null;
    }

    if (typeof licenseData.username !== 'string' || licenseData.username.length <= 0) {
      return null;
    }

    return _objectSpread({
      key: license.key,
      renew_date: license.renew_date
    }, licenseData);
  });
  var activeFormMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({
    defaultValues: {
      email: (licenseData === null || licenseData === void 0 ? void 0 : licenseData.email) || (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6___default().WP_OPTIONS.ADMIN_EMAIL),
      identity_type: (licenseData === null || licenseData === void 0 ? void 0 : licenseData.identity_type) || _components_constants__WEBPACK_IMPORTED_MODULE_7__.IDENTITY_TYPE,
      product_slug: (licenseData === null || licenseData === void 0 ? void 0 : licenseData.product_slug) || 'wp-rhema-core-feature',
      username: (licenseData === null || licenseData === void 0 ? void 0 : licenseData.username) || (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6___default().WP_OPTIONS.HOST_DOMAIN),
      license: (licenseData === null || licenseData === void 0 ? void 0 : licenseData.key) || ''
    },
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_4__.joiResolver)(_components_schema__WEBPACK_IMPORTED_MODULE_10__.activateRhemeaByLicense)
  });
  var register = activeFormMethods.register,
      formState = activeFormMethods.formState,
      handleSubmit = activeFormMethods.handleSubmit;
  var isSubmitting = formState.isSubmitting,
      errors = formState.errors;

  var _useActivateByLicense = (0,_components_services__WEBPACK_IMPORTED_MODULE_11__.useActivateByLicenseMutation)(),
      _useActivateByLicense2 = _slicedToArray(_useActivateByLicense, 2),
      activate = _useActivateByLicense2[0],
      _useActivateByLicense3 = _useActivateByLicense2[1],
      activateResponse = _useActivateByLicense3.data,
      activateError = _useActivateByLicense3.error,
      isActivating = _useActivateByLicense3.isLoading;

  var _useDeactivateMutatio = (0,_components_services__WEBPACK_IMPORTED_MODULE_11__.useDeactivateMutation)(),
      _useDeactivateMutatio2 = _slicedToArray(_useDeactivateMutatio, 2),
      deactivate = _useDeactivateMutatio2[0],
      _useDeactivateMutatio3 = _useDeactivateMutatio2[1],
      deactivateResponse = _useDeactivateMutatio3.data,
      deactivateError = _useDeactivateMutatio3.error,
      isDeactivating = _useDeactivateMutatio3.isLoading;

  var isActived = _typeof(licenseData) === 'object' && licenseData !== null && licenseData.hasOwnProperty('key') && typeof (licenseData === null || licenseData === void 0 ? void 0 : licenseData.key) === 'string' && licenseData.key.length > 0;
  var isDeactivated = deactivateResponse === null || deactivateResponse === void 0 ? void 0 : deactivateResponse.success;
  var showExceptionMessage = !!activateError || !!deactivateError;

  var responseMessage = function (activateResponse, deactivateResponse, activateError, deactivateError) {
    var _deactivateError$data, _deactivateError$data2, _activateError$data, _deactivateError$data3;

    var code = activateResponse !== null && activateResponse !== void 0 && activateResponse.success ? 200 :  false || activateError !== null && activateError !== void 0 && activateError.status || deactivateResponse !== null && deactivateResponse !== void 0 && deactivateResponse.success ? 200 :  false || (deactivateError === null || deactivateError === void 0 ? void 0 : deactivateError.status);
    var label = activateResponse !== null && activateResponse !== void 0 && activateResponse.success ? 'seccess' :  false || activateError !== null && activateError !== void 0 && activateError.data.code || deactivateResponse !== null && deactivateResponse !== void 0 && deactivateResponse.success ? 200 :  false || (deactivateError === null || deactivateError === void 0 ? void 0 : (_deactivateError$data = deactivateError.data) === null || _deactivateError$data === void 0 ? void 0 : _deactivateError$data.code) || (deactivateError === null || deactivateError === void 0 ? void 0 : (_deactivateError$data2 = deactivateError.data[0]) === null || _deactivateError$data2 === void 0 ? void 0 : _deactivateError$data2.code) || '';
    var message = /5[0-9][0-9]/.test(code) ? 'There has been a critical error.' : (activateResponse === null || activateResponse === void 0 ? void 0 : activateResponse.body) || (activateError === null || activateError === void 0 ? void 0 : (_activateError$data = activateError.data) === null || _activateError$data === void 0 ? void 0 : _activateError$data.message) || (deactivateError === null || deactivateError === void 0 ? void 0 : (_deactivateError$data3 = deactivateError.data) === null || _deactivateError$data3 === void 0 ? void 0 : _deactivateError$data3.message);
    return {
      code: code,
      label: label,
      message: message
    };
  }(activateResponse, deactivateResponse, activateError, deactivateError);

  var showActivatingPrepare = activateResponse === null || activateResponse === void 0 ? void 0 : activateResponse.success;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isDeactivated),
      _useState4 = _slicedToArray(_useState3, 2),
      showDeactivated = _useState4[0],
      setShowDeactivated = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(showActivatingPrepare),
      _useState6 = _slicedToArray(_useState5, 2),
      showActivating = _useState6[0],
      setShowActivating = _useState6[1];

  var onSubmit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      var payload, _payload;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (isActived) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return activate(data);

            case 3:
              payload = _context2.sent;
              _context2.next = 10;
              break;

            case 6:
              _context2.next = 8;
              return deactivate(data);

            case 8:
              _payload = _context2.sent;
              dispatch((0,_components_backend_states_generalSlice__WEBPACK_IMPORTED_MODULE_12__.deleteLicense)({
                bible: {
                  key: _payload.data.body,
                  renew_date: null,
                  data: null
                }
              }));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var triggerClose = function triggerClose() {
    onClickClose();
    setShowActivating(false);
  };

  var onActivatingCompleted = function onActivatingCompleted(response) {
    triggerClose();
    var key = response.license_key,
        renew_date = response.renew_date,
        data = response.license_data;
    dispatch((0,_components_backend_states_generalSlice__WEBPACK_IMPORTED_MODULE_12__.addLicense)({
      bible: {
        key: key,
        renew_date: renew_date,
        data: data
      }
    }));
  };

  var onDeactivated = function onDeactivated(response) {
    var key = response.license_key;
    dispatch((0,_components_backend_states_generalSlice__WEBPACK_IMPORTED_MODULE_12__.deleteLicense)({
      bible: {
        key: key
      }
    }));
    setShowDeactivated(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (showActivatingPrepare) {
      setShowActivating(true);
    }
  }, [showActivatingPrepare]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isDeactivated && !showDeactivated) {
      setShowDeactivated(true);
    }
  }, [isDeactivated]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (showDeactivated) {
      onDeactivated(deactivateResponse.data);
    }
  }, [showDeactivated]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!show) {
      setShowDeactivated(false);
    }
  }, [show]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_9__.ScreenOverlay, {
    show: show[0],
    className: {
      root: 'z-10',
      modal: 'max-w-xs'
    },
    title: "Enter license to active",
    onClickClose: onClickClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full p-2 border-t border-b border-l-0 border-r-0 border-[#c3c4c7] border-solid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-1"
  }, "If you already have a license key, you can fill in the following fields, and your information will be verified after sending it out. If it is correct, it will be activated."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block bg-gray-300 p-4px mr-1 rounded font-medium"
  }, "Status"), isActived ? 'Activated' : 'Not Activated'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block bg-gray-300 p-4px mr-1 rounded font-medium"
  }, "Renew Date"), isActived ? moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(licenseData.renew_date).utcOffset((RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_6___default().WP_OPTIONS.TIME_ZONE) || 0).format('YYYY/MM/DD hh:mm:ss') : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, {
    label: "License"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, register('license', {
    required: true
  }), isActived && {
    readOnly: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$license = errors.license) === null || _errors$license === void 0 ? void 0 : _errors$license.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, {
    label: "Email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, register('email', {
    required: true
  }), isActived && {
    readOnly: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$email2 = errors.email) === null || _errors$email2 === void 0 ? void 0 : _errors$email2.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, {
    label: "Domain"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "text",
    className: "w-full"
  }, register('username', {
    required: true
  }), {
    readOnly: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$username2 = errors.username) === null || _errors$username2 === void 0 ? void 0 : _errors$username2.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "hidden"
  }, register('identity_type'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$identity_type2 = errors.identity_type) === null || _errors$identity_type2 === void 0 ? void 0 : _errors$identity_type2.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ModalForm.FieldRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "hidden"
  }, register('product_slug'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.FieldErrorMsg, {
    message: (_errors$product_slug2 = errors.product_slug) === null || _errors$product_slug2 === void 0 ? void 0 : _errors$product_slug2.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex"
  }, !isActived ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    type: "submit",
    className: "button button-primary flex items-center"
  }, (isSubmitting || isActivating || showActivating) && {
    disabled: 'disabled'
  }), isSubmitting || isActivating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_9__.ButtonSpinner, {
    className: "mr-1"
  }), "Verifying...") : showActivating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_9__.ButtonSpinner, {
    className: "mr-1"
  }), "Activating...", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + _components_constants__WEBPACK_IMPORTED_MODULE_7__.ACTIVATING_COUNT_DOWN_TIME,
    renderer: function renderer(_ref6) {
      var seconds = _ref6.seconds,
          completed = _ref6.completed;

      if (completed) {
        return null;
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "(", seconds, ")");
      }
    },
    onComplete: function onComplete() {
      onActivatingCompleted(activateResponse.data);
    }
  })) : 'Confirm') : null, isActived ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "button flex items-center"
  }, isDeactivating ? 'Deactivating...' : 'Deactivate') : null, showDeactivated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ResponseSuccessMsg, {
    label: "Success"
  }, "You have deactivated the feature of Core") : null, showActivating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ResponseSuccessMsg, {
    label: "Success"
  }, "Your application has been approved, activating the feature") : null, showExceptionMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_8__.ResponseErrorMsg, {
    code: responseMessage.code,
    label: responseMessage.label
  }, (responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message) || 'There has been a critical error.') : null)));
};
License.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool), prop_types__WEBPACK_IMPORTED_MODULE_14___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_14___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_14___default().string)]))]),
  onClickClose: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func)
};

/***/ }),

/***/ "./assets/src/js/backend/components/index.jsx":
/*!****************************************************!*\
  !*** ./assets/src/js/backend/components/index.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonSpinner": () => (/* binding */ ButtonSpinner),
/* harmony export */   "FeatureCard": () => (/* binding */ FeatureCard),
/* harmony export */   "ScreenOverlay": () => (/* binding */ ScreenOverlay),
/* harmony export */   "SwitchToggle": () => (/* binding */ SwitchToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/js/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _components_backend_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/backend/components */ "./assets/src/js/backend/components/index.jsx");
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





var ButtonSpinner = function ButtonSpinner(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "spinner is-active m-0 float-none inline-block ".concat(className)
  });
};
ButtonSpinner.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
var SwitchToggle = function SwitchToggle(_ref2) {
  var isActive = _ref2.isActive,
      onSwitchOn = _ref2.onSwitchOn,
      onSwitchOff = _ref2.onSwitchOff;
  var classNames = {
    input: ['peer', 'absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'm-0', 'p-0', 'border-none', 'z-10', 'opacity-0', 'checked:before:bg-none', 'focus:border-sky-600', 'focus:outline-2', 'focus:outline', 'focus:outline-transparent', 'disabled:opacity-70'],
    border: ['box-border', 'content-none', 'inline-block', 'align-top', 'border', 'border-solid', 'w-9', 'h-18px', 'rounded-xl', 'transition-colors', 'peer-focus:outline-2', 'peer-focus:outline-offset-2', 'peer-checked:peer-focus:shadow-[0_0_0_2px_#fff,0_0_0_4px_#0284c7]', 'peer-checked:bg-sky-600', 'peer-checked:border-sky-600'],
    rounded: ['box-border', 'translate-x-0', 'block', 'absolute', 'top-3px', 'left-3px', 'w-3', 'h-3', 'rounded-full', 'transition-left', 'border-4', 'border-solid', 'peer-checked:border-white', 'peer-checked:bg-white', 'peer-checked:left-20px']
  };
  var deactiveClassNames = {
    input: [],
    border: ['border-zinc-700'],
    rounded: ['bg-zinc-700', 'border-zinc-700']
  };
  var activedClassNames = {
    input: [],
    border: ['bg-sky-600', 'border-sky-600'],
    rounded: ['border-white', 'bg-white', 'left-20px']
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-block relative group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: [].concat(_toConsumableArray(classNames.input), _toConsumableArray(isActive ? activedClassNames.input : deactiveClassNames.input)).join(' '),
    type: "checkbox",
    disabled: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: [].concat(_toConsumableArray(classNames.border), _toConsumableArray(isActive ? activedClassNames.border : deactiveClassNames.border)).join(' ')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: [].concat(_toConsumableArray(classNames.rounded), _toConsumableArray(isActive ? activedClassNames.rounded : deactiveClassNames.rounded)).join(' ')
  }));
};
SwitchToggle.propTypes = {
  isActive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
var ScreenOverlay = function ScreenOverlay(_ref3) {
  var show = _ref3.show,
      title = _ref3.title,
      className = _ref3.className,
      onClickClose = _ref3.onClickClose,
      ref = _ref3.ref,
      children = _ref3.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      disabledCloseEvent = _useState2[0],
      setDisabledCloseEvent = _useState2[1];

  var classNames = {
    root: [].concat(_toConsumableArray(show ? ['fixed'] : ['hidden']), ['top-0', 'right-0', 'bottom-0', 'left-0', 'bg-black/[.35]', className !== null && className !== void 0 && className.root ? className.root : '']),
    modal: ['absolute', 'top-1/2', 'left-1/2', 'bg-white', 'shadow-xl', 'rounded-sm', '-translate-x-1/2', '-translate-y-1/2', 'rotate-0', 'skew-x-0', 'skew-y-0', 'scale-100', className !== null && className !== void 0 && className.modal ? className.modal : '']
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames.root.join(' '),
    onMouseDownCapture: function onMouseDownCapture(e) {
      setDisabledCloseEvent(false);
    },
    onClick: !disabledCloseEvent ? onClickClose : function () {},
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames.modal.join(' '),
    onMouseDownCapture: function onMouseDownCapture(e) {
      setDisabledCloseEvent(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-grow px-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "my-0"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "border-0 bg-transparent m-0 p-1",
    onClick: function onClick(e) {
      e.stopPropagation();
      onClickClose(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, children)));
};
ScreenOverlay.propTypes = {
  show: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    root: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    modal: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  ref: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element), prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().element))])
};
var FeatureCard = function FeatureCard(_ref4) {
  var title = _ref4.title,
      isActive = _ref4.isActive,
      _ref4$version = _ref4.version,
      version = _ref4$version === void 0 ? '0.0.0' : _ref4$version,
      commingSoon = _ref4.commingSoon,
      _ref4$onClickActive = _ref4.onClickActive,
      onClickActive = _ref4$onClickActive === void 0 ? function () {
    return false;
  } : _ref4$onClickActive,
      _ref4$onClickLicense = _ref4.onClickLicense,
      onClickLicense = _ref4$onClickLicense === void 0 ? function () {
    return false;
  } : _ref4$onClickLicense,
      children = _ref4.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-2 py-2 w-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "postbox mb-0 min-w-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "postbox-header px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-14px py-3 m-0"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center hide-if-no-js"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-400 mr-1"
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_1__.UI_MESSAGE_MAPPING["features/status"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_2__.SwitchToggle, {
    isActive: isActive
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inside"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]"
  }, commingSoon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button",
    disabled: true
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_1__.UI_MESSAGE_MAPPING["features/comming-soon"]) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    className: "button mr-2",
    onClick: onClickActive
  }, isActive && {
    disabled: true
  }), _assets_js_constants__WEBPACK_IMPORTED_MODULE_1__.UI_MESSAGE_MAPPING["features/active"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button",
    onClick: onClickLicense
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_1__.UI_MESSAGE_MAPPING["features/license"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-500"
  }, version))));
};
FeatureCard.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  isActive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  version: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  commingSoon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onClickActive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onClickLicense: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element), prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().element))])
};

/***/ }),

/***/ "./assets/src/js/backend/feature-cards/index.jsx":
/*!*******************************************************!*\
  !*** ./assets/src/js/backend/feature-cards/index.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Core": () => (/* binding */ Core),
/* harmony export */   "OfflineReading": () => (/* binding */ OfflineReading),
/* harmony export */   "QandA": () => (/* binding */ QandA),
/* harmony export */   "Relation": () => (/* binding */ Relation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/js/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _components_backend_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/backend/components */ "./assets/src/js/backend/components/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







var Core = function Core(_ref) {
  var onClickActive = _ref.onClickActive,
      onClickLicense = _ref.onClickLicense;
  react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector;
  var isActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    var timeZone = (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_2___default().WP_OPTIONS.TIME_ZONE) || '0';
    var key = state.general.licenses.bible.key;
    var renewDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()(state.general.licenses.bible.renew_date).utcOffset(timeZone);
    var nowDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()();

    if (typeof key !== 'string' || key.length <= 0) {
      return false;
    }

    if (nowDate.isAfter(renewDate)) {
      return false;
    }

    return true;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_4__.FeatureCard, {
    title: "Core",
    isActive: isActive,
    onClickActive: onClickActive,
    onClickLicense: onClickLicense,
    version: "1.0.0"
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_3__.UI_MESSAGE_MAPPING["features/description/core"]);
};
var Relation = function Relation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_4__.FeatureCard, {
    title: "Relation",
    commingSoon: true
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_3__.UI_MESSAGE_MAPPING["features/description/relation"]);
};
var QandA = function QandA() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_4__.FeatureCard, {
    title: "Q&A",
    commingSoon: true
  }, "\u8056\u7D93\u7D93\u6587\u554F\u8207\u7B54\u529F\u80FD");
};
var OfflineReading = function OfflineReading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_components__WEBPACK_IMPORTED_MODULE_4__.FeatureCard, {
    title: "Offline Reading",
    commingSoon: true
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_3__.UI_MESSAGE_MAPPING["features/description/offline"]);
};

/***/ }),

/***/ "./assets/src/js/backend/form-table/index.jsx":
/*!****************************************************!*\
  !*** ./assets/src/js/backend/form-table/index.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldErrorMsg": () => (/* binding */ FieldErrorMsg),
/* harmony export */   "FieldWrap": () => (/* binding */ FieldWrap),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "ModalForm": () => (/* binding */ ModalForm),
/* harmony export */   "ResponseErrorMsg": () => (/* binding */ ResponseErrorMsg),
/* harmony export */   "ResponseSuccessMsg": () => (/* binding */ ResponseSuccessMsg),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Table = function Table(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "form-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, children));
};

var Row = function Row(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, children);
};

var Label = function Label(_ref3) {
  var htmlFor = _ref3.htmlFor,
      children = _ref3.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    scope: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", !!htmlFor && {
    htmlFor: htmlFor
  }, children));
};

var FieldWrap = function FieldWrap(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, children);
};

var ModalForm = function ModalForm(_ref5) {
  var id = _ref5.id,
      className = _ref5.className,
      onSubmit = _ref5.onSubmit,
      children = _ref5.children;

  var formProps = _objectSpread({
    onSubmit: onSubmit
  }, (id === null || id === void 0 ? void 0 : id.length) && {
    id: id
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", _extends({
    className: className
  }, formProps), children);
};

ModalForm.FieldRow = function (_ref6) {
  var className = _ref6.className,
      label = _ref6.label,
      children = _ref6.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ['flex items-center mb-2 empty:hidden', className].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-grow self-start mr-2 mt-1 min-w-100px empty:hidden"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-grow empty:hidden w-full"
  }, children));
};

var ResponseSuccessMsg = function ResponseSuccessMsg(_ref7) {
  var label = _ref7.label,
      children = _ref7.children;
  var shouldMount = typeof label === 'string' && label.length > 0 && !!children;
  return shouldMount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center relative ml-2 grow rounded border border-dashed border-green-600 text-green-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -top-px -left-px origin-left scale-75 rotate-0 skew-x-0 skew-y-0 translate-x-0 -translate-y-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-white m-1"
  }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block px-2 py-1 text-xs"
  }, children)) : null;
};

var ResponseErrorMsg = function ResponseErrorMsg(_ref8) {
  var label = _ref8.label,
      code = _ref8.code,
      _ref8$children = _ref8.children,
      children = _ref8$children === void 0 ? 'There has been a critical error.' : _ref8$children;
  var shouldMount = !!code && !!children;
  return shouldMount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center relative ml-2 grow rounded border border-dashed border-rose-400 text-rose-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -top-px -left-px origin-left scale-75 rotate-0 skew-x-0 skew-y-0 translate-x-0 -translate-y-1/2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-1 text-white rounded bg-rose-500"
  }, code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-white m-1"
  }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block px-2 py-1 text-xs"
  }, children)) : null;
};

var FieldErrorMsg = function FieldErrorMsg(_ref9) {
  var message = _ref9.message;
  return !!message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    role: "alert",
    className: "m-0 mb-2 max-w-200px text-xs text-red-500"
  }, message) : null;
};

FieldErrorMsg.propTypes = {
  message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ "./assets/src/js/backend/my-account/index.jsx":
/*!****************************************************!*\
  !*** ./assets/src/js/backend/my-account/index.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordCard": () => (/* binding */ ForgotPasswordCard),
/* harmony export */   "LoginCard": () => (/* binding */ LoginCard),
/* harmony export */   "OrdersListing": () => (/* binding */ OrdersListing),
/* harmony export */   "VerifyEmailCard": () => (/* binding */ VerifyEmailCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/joi */ "./node_modules/@hookform/resolvers/joi/dist/joi.mjs");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tanstack/react-table */ "./node_modules/@tanstack/table-core/build/lib/index.mjs");
/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tanstack/react-table */ "./node_modules/@tanstack/react-table/build/lib/index.mjs");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/common */ "./assets/src/js/common/index.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/backend/form-table */ "./assets/src/js/backend/form-table/index.jsx");
/* harmony import */ var _components_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/schema */ "./assets/src/js/schema/index.js");
/* harmony import */ var _components_backend_states_accountSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/backend/states/accountSlice */ "./assets/src/js/backend/states/accountSlice.js");
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















var LoginCard = function LoginCard(_ref) {
  var _loginErrors$username, _loginErrors$password;

  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      onSubmitSigin = _ref.onSubmitSigin,
      onClickForgotPw = _ref.onClickForgotPw,
      onClickVerifyEmail = _ref.onClickVerifyEmail,
      signinData = _ref.signinData;
  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
    defaultValues: {
      username: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5___default().WP_OPTIONS.HOST_DOMAIN),
      identity_type: _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.IDENTITY_TYPE
    },
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_2__.joiResolver)(_components_schema__WEBPACK_IMPORTED_MODULE_10__.signinLogosFields)
  });
  var _formMethods$formStat = formMethods.formState,
      isLogging = _formMethods$formStat.isSubmitting,
      loginErrors = _formMethods$formStat.errors;
  var signinResponse = signinData.signinResponse,
      signinError = signinData.signinError,
      isSigning = signinData.isSigning;
  var showExceptionMessage = !!signinResponse && !(signinResponse !== null && signinResponse !== void 0 && signinResponse.success) || !!signinError;

  var responseMessage = function (signinResponse, signinError) {
    var _signinResponse$data, _signinError$data, _signinError$data2, _signinError$data2$da;

    var code = (signinResponse === null || signinResponse === void 0 ? void 0 : signinResponse.success) === true ? 200 :  false || (signinError === null || signinError === void 0 ? void 0 : signinError.status);
    var label = (signinResponse === null || signinResponse === void 0 ? void 0 : signinResponse.success) === true ? 'Success' :  false || (signinError === null || signinError === void 0 ? void 0 : signinError.data.code) || '';
    var message = /2[0-9][0-9]/.test(code) ? (signinResponse === null || signinResponse === void 0 ? void 0 : (_signinResponse$data = signinResponse.data) === null || _signinResponse$data === void 0 ? void 0 : _signinResponse$data.message) || 'Signin success!' : (signinError === null || signinError === void 0 ? void 0 : (_signinError$data = signinError.data) === null || _signinError$data === void 0 ? void 0 : _signinError$data.message) || (signinError === null || signinError === void 0 ? void 0 : (_signinError$data2 = signinError.data) === null || _signinError$data2 === void 0 ? void 0 : (_signinError$data2$da = _signinError$data2.data) === null || _signinError$data2$da === void 0 ? void 0 : _signinError$data2$da.message) || 'There has been a critical error.';
    return {
      code: code,
      label: label,
      message: message
    };
  }(signinResponse, signinError);

  var showSuccess = /2[0-9][0-9]/.test(responseMessage.code);
  var classNames = ['postbox mb-0 min-w-0', className];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "postbox-header px-2 justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-14px py-3 m-0"
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/signin-logos"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inside pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/description"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm, {
    id: "login-card",
    onSubmit: formMethods.handleSubmit(onSubmitSigin)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    label: "Username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, formMethods.register('username', {
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_loginErrors$username = loginErrors.username) === null || _loginErrors$username === void 0 ? void 0 : _loginErrors$username.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    label: "Password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "password",
    className: "w-full min-w-200px"
  }, formMethods.register('password', {
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_loginErrors$password = loginErrors.password) === null || _loginErrors$password === void 0 ? void 0 : _loginErrors$password.message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "m-0 mb-2 text-xs space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "button button-link hover:bg-transparent",
    onClick: onClickForgotPw
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/forgot-password"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "button button-link hover:bg-transparent",
    onClick: function onClick(e) {
      e.preventDefault();
      onClickVerifyEmail();
    }
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/verify-email"]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "hidden"
  }, formMethods.register('identity_type'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    form: "login-card",
    className: ['button', 'button-primary'].join(' '),
    onClick: function onClick(e) {
      formMethods.handleSubmit(onSubmitSigin)(e);
    }
  }, (isLogging || isSigning) && {
    disabled: 'disabled'
  }), !isLogging && !isSigning ? _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/signin"] : _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/signing"]), showSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ResponseSuccessMsg, {
    label: "Success"
  }, "Signin suceesfully."), showExceptionMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ResponseErrorMsg, {
    code: responseMessage.code,
    label: responseMessage.label
  }, (responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message) || 'There has been a critical error.') : null)));
};
var VerifyEmailCard = function VerifyEmailCard(_ref2) {
  var _sendingVerifyEmailEr, _sendingVerifyEmailEr2;

  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      onSubmitVerifyEmail = _ref2.onSubmitVerifyEmail,
      onClickBackToSignin = _ref2.onClickBackToSignin,
      sendVerifyData = _ref2.sendVerifyData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showActiveCodeInput = _useState2[0],
      toggleActiveCodeInput = _useState2[1];

  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
    defaultValues: {
      email: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5___default().WP_OPTIONS.ADMIN_EMAIL),
      activation_key: ''
    },
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_2__.joiResolver)(_components_schema__WEBPACK_IMPORTED_MODULE_10__.verifyEmailLogosFields)
  });
  var _formMethods$formStat2 = formMethods.formState,
      isSendingVerifyEmail = _formMethods$formStat2.isSubmitting,
      sendingVerifyEmailErrors = _formMethods$formStat2.errors;
  var response = sendVerifyData.sendVerifyResponse,
      error = sendVerifyData.sendVerifyError,
      verifying = sendVerifyData.isSendingVerify;
  var showExceptionMessage = !!response && !(response !== null && response !== void 0 && response.success) || !!error;

  var responseMessage = function (response, error) {
    var _response$data, _error$data, _error$data2, _error$data2$data;

    var code = (response === null || response === void 0 ? void 0 : response.success) === true ? 200 :  false || (error === null || error === void 0 ? void 0 : error.status);
    var label = (response === null || response === void 0 ? void 0 : response.success) === true ? 'Success' :  false || (error === null || error === void 0 ? void 0 : error.data.code) || '';
    var message = /2[0-9][0-9]/.test(code) ? (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'Signin success!' : (error === null || error === void 0 ? void 0 : (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.message) || (error === null || error === void 0 ? void 0 : (_error$data2 = error.data) === null || _error$data2 === void 0 ? void 0 : (_error$data2$data = _error$data2.data) === null || _error$data2$data === void 0 ? void 0 : _error$data2$data.message) || 'There has been a critical error.';
    return {
      code: code,
      label: label,
      message: message
    };
  }(response, error);

  var showSuccess = /2[0-9][0-9]/.test(responseMessage.code);
  var classNames = ['postbox mb-0 min-w-0', className];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "postbox-header px-2 justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-14px py-3 m-0"
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/verify-email"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inside pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/verify-email-description"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm, {
    id: "verify-email-card",
    onSubmit: formMethods.handleSubmit(onSubmitVerifyEmail)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    label: "Email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, formMethods.register('email', {
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_sendingVerifyEmailEr = sendingVerifyEmailErrors.email) === null || _sendingVerifyEmailEr === void 0 ? void 0 : _sendingVerifyEmailEr.message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "m-0 mb-2 text-xs space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "button button-link hover:bg-transparent",
    onClick: function onClick(e) {
      e.preventDefault();
      console.log('back-to-signin');
      onClickBackToSignin();
    }
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/back-to-signin"]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    className: _toConsumableArray(showActiveCodeInput ? [] : ['hidden']).join(' '),
    label: "Activation Key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, formMethods.register('activation_key', {
    required: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_sendingVerifyEmailEr2 = sendingVerifyEmailErrors.activation_key) === null || _sendingVerifyEmailEr2 === void 0 ? void 0 : _sendingVerifyEmailEr2.message
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex grow space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    form: "verify-email-card",
    className: ['button', 'button-primary'].join(' '),
    onClick: function onClick(e) {
      formMethods.handleSubmit(onSubmitVerifyEmail)(e);
    }
  }, (isSendingVerifyEmail || verifying) && {
    disabled: 'disabled'
  }), isSendingVerifyEmail ? _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/sending-verify-email"] : _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/send-verify-email"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    className: ['button', 'button-secondnary'].join(' '),
    onClick: function onClick(e) {
      if (!showActiveCodeInput) {
        toggleActiveCodeInput(true);
        return;
      }

      formMethods.handleSubmit(onSubmitVerifyEmail)(e);
    }
  }, (isSendingVerifyEmail || verifying) && {
    disabled: 'disabled'
  }), !isSendingVerifyEmail || formMethods.getValues('activation_key').length === 0 ? _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/submit-verify-email"] : _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/submitting-verify-email"]), showSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ResponseSuccessMsg, {
    label: "Success"
  }, responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message), showExceptionMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ResponseErrorMsg, {
    code: responseMessage.code,
    label: responseMessage.label
  }, (responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message) || 'There has been a critical error.') : null)));
};
var ForgotPasswordCard = function ForgotPasswordCard(_ref3) {
  var _formError$email, _formError$auth_code, _formError$password, _formError$confirm_pa;

  var _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className,
      onSubmitForgotPw = _ref3.onSubmitForgotPw,
      onClickBackToSignin = _ref3.onClickBackToSignin,
      sendForgotPasswordData = _ref3.sendForgotPasswordData;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showAuthCodeInput = _useState4[0],
      toggleAuthCodeInput = _useState4[1];

  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)({
    defaultValues: {
      email: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5___default().WP_OPTIONS.ADMIN_EMAIL),
      auth_code: '',
      password: '',
      confirm_password: ''
    },
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_2__.joiResolver)(_components_schema__WEBPACK_IMPORTED_MODULE_10__.forgotPasswordLogosFields)
  });
  var _formMethods$formStat3 = formMethods.formState,
      formSubmitting = _formMethods$formStat3.submitting,
      formError = _formMethods$formStat3.errors;
  var response = sendForgotPasswordData.sendForgotResponse,
      error = sendForgotPasswordData.sendForgotError,
      submitting = sendForgotPasswordData.isSendingForgot;
  var showExceptionMessage = !!response && !(response !== null && response !== void 0 && response.success) || !!error;

  var responseMessage = function (response, error) {
    var _response$data2, _error$data3, _error$data4, _error$data4$data;

    var code = (response === null || response === void 0 ? void 0 : response.success) === true ? 200 :  false || (error === null || error === void 0 ? void 0 : error.status);
    var label = (response === null || response === void 0 ? void 0 : response.success) === true ? 'Success' :  false || (error === null || error === void 0 ? void 0 : error.data.code) || '';
    var message = /2[0-9][0-9]/.test(code) ? (response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message) || 'Signin success!' : (error === null || error === void 0 ? void 0 : (_error$data3 = error.data) === null || _error$data3 === void 0 ? void 0 : _error$data3.message) || (error === null || error === void 0 ? void 0 : (_error$data4 = error.data) === null || _error$data4 === void 0 ? void 0 : (_error$data4$data = _error$data4.data) === null || _error$data4$data === void 0 ? void 0 : _error$data4$data.message) || 'There has been a critical error.';
    return {
      code: code,
      label: label,
      message: message
    };
  }(response, error);

  var showSuccess = /2[0-9][0-9]/.test(responseMessage.code);
  var classNames = ['postbox mb-0 min-w-0', className];

  var onClickResetPassword = function onClickResetPassword(e) {
    console.log('onClickResetPassword');

    if (!showAuthCodeInput) {
      toggleAuthCodeInput(true);
      return;
    }

    formMethods.handleSubmit(onSubmitForgotPw)(e);
  };

  var watchEmail = formMethods.watch('email');
  var watchAuthCode = formMethods.watch('auth_code');
  var watchPassword = formMethods.watch('password');
  var watchConfirmPassword = formMethods.watch('confirm_password');
  var ableToSubmitReset = showAuthCodeInput ? watchAuthCode.length > 0 && watchPassword.length > 0 && watchConfirmPassword.length > 0 : watchEmail.length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classNames.join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "postbox-header px-2 justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-14px py-3 m-0"
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/forgot-password"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inside pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/forgot-password-description"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm, {
    id: "forgot-password-card",
    onSubmit: formMethods.handleSubmit(onSubmitForgotPw)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    label: "Email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, formMethods.register('email', {
    required: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_formError$email = formError.email) === null || _formError$email === void 0 ? void 0 : _formError$email.message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "m-0 mb-2 text-xs space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "button button-link hover:bg-transparent",
    onClick: function onClick(e) {
      e.preventDefault();
      onClickBackToSignin();
      toggleAuthCodeInput(false);
    }
  }, _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/back-to-signin"]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    className: _toConsumableArray(showAuthCodeInput ? [] : ['hidden']).join(' '),
    label: "Authorization code"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "text"
  }, formMethods.register('auth_code', {
    required: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_formError$auth_code = formError.auth_code) === null || _formError$auth_code === void 0 ? void 0 : _formError$auth_code.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    className: _toConsumableArray(showAuthCodeInput ? [] : ['hidden']).join(' '),
    label: "New password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "password"
  }, formMethods.register('password', {
    required: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_formError$password = formError.password) === null || _formError$password === void 0 ? void 0 : _formError$password.message
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ModalForm.FieldRow, {
    className: _toConsumableArray(showAuthCodeInput ? [] : ['hidden']).join(' '),
    label: "Confirm password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    className: "w-full",
    type: "password"
  }, formMethods.register('confirm_password', {
    required: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.FieldErrorMsg, {
    message: (_formError$confirm_pa = formError.confirm_password) === null || _formError$confirm_pa === void 0 ? void 0 : _formError$confirm_pa.message
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-1 flex items-center justify-between border-0 border-t border-[#c3c4c7] border-solid bg-[#f6f7f7]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex grow space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, showAuthCodeInput ? {} : {
    form: 'forgot-password-card'
  }, {
    className: ['button', 'button-primary'].join(' '),
    onClick: function onClick(e) {
      formMethods.handleSubmit(onSubmitForgotPw)(e);
    }
  }, (formSubmitting || submitting) && {
    disabled: 'disabled'
  }), formSubmitting ? _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/sending-forgot-password"] : _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/send-forgot-password"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, showAuthCodeInput && {
    form: 'forgot-password-card'
  }, {
    className: ['button', 'button-secondnary'].join(' '),
    onClick: onClickResetPassword
  }, (formSubmitting || submitting || !ableToSubmitReset) && {
    disabled: 'disabled'
  }), !showAuthCodeInput ? _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/have-authorization-code"] : !formSubmitting || formMethods.getValues('auth_code').length === 0 ? _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/submit-forgot-password"] : _assets_js_constants__WEBPACK_IMPORTED_MODULE_6__.UI_MESSAGE_MAPPING["my-account/submitting-forgot-password"]), showSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ResponseSuccessMsg, {
    label: "Success"
  }, responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message), showExceptionMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_form_table__WEBPACK_IMPORTED_MODULE_9__.ResponseErrorMsg, {
    code: responseMessage.code,
    label: responseMessage.label
  }, (responseMessage === null || responseMessage === void 0 ? void 0 : responseMessage.message) || 'There has been a critical error.') : null)));
};
var OrdersListing = function OrdersListing() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var columnHelper = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_13__.createColumnHelper)();
  var columns = [columnHelper.accessor('id', {
    header: function header() {
      return 'ID';
    },
    cell: function cell(info) {
      return info.getValue();
    }
  }), columnHelper.accessor('status', {
    header: function header() {
      return 'Status';
    },
    cell: function cell(info) {
      return (0,_components_common__WEBPACK_IMPORTED_MODULE_7__.capitalizeFirstLetter)(info.getValue());
    }
  }), columnHelper.accessor('order_items', {
    header: function header() {
      return 'Products';
    },
    cell: function cell(orderItems) {
      return orderItems.getValue().map(function (orderItem) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: orderItem.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "block"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "select-none after:content-[':'] mr-1"
        }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, orderItem.product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-xs"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "select-none after:content-[':'] mr-1"
        }, "License Key"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "max-w-xs overflow-hidden text-ellipsis"
        }, orderItem.license_key.key)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "flex"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "select-none after:content-[':'] mr-1"
        }, "Renew Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "select-none"
        }, moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(orderItem.license_key.renew_date).utcOffset((RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5___default().WP_OPTIONS.TIME_ZONE) || 0).format('YYYY/MM/DD hh:mm:ss')))));
      });
    }
  }), columnHelper.accessor('total', {
    header: 'Total Amount'
  }), columnHelper.accessor('createdAt', {
    header: 'Order Date',
    cell: function cell(info) {
      return (0,_components_common__WEBPACK_IMPORTED_MODULE_7__.localDateTime)((moment_moment__WEBPACK_IMPORTED_MODULE_3___default()), info.getValue(), (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_5___default().WP_OPTIONS.TIME_ZONE));
    }
  })];

  var _useOrdersQuery = (0,_components_services__WEBPACK_IMPORTED_MODULE_8__.useOrdersQuery)(),
      data = _useOrdersQuery.data,
      error = _useOrdersQuery.error,
      isFetching = _useOrdersQuery.isFetching;

  var showExceptionMessage = !!error;
  var exceptionMessage = (error === null || error === void 0 ? void 0 : error.data.message) || 'Somthing wrong.';
  var table = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_14__.useReactTable)({
    data: data === null || data === void 0 ? void 0 : data.data,
    columns: columns,
    getCoreRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_13__.getCoreRowModel)(),
    getPaginationRowModel: (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_13__.getPaginationRowModel)()
  });

  if (!isFetching && !showExceptionMessage) {
    table.getRowModel();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "wp-list-table widefat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, table.getHeaderGroups().map(function (headerGroup) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: headerGroup.id
    }, headerGroup.headers.map(function (header) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        key: header.id
      }, header.isPlaceholder ? null : (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_14__.flexRender)(header.column.columnDef.header, header.getContext()));
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: columns.length
  }, "Loading...")) : showExceptionMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: columns.length
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, exceptionMessage, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button button-small ml-1",
    onClick: function onClick(e) {
      dispatch((0,_components_backend_states_accountSlice__WEBPACK_IMPORTED_MODULE_11__.deleteSigninToken)());
    }
  }, "Signin")))) : table.getRowModel().rows.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row.id
    }, row.getVisibleCells().map(function (cell) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        key: cell.id
      }, (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_14__.flexRender)(cell.column.columnDef.cell, cell.getContext()));
    }));
  }))), !isFetching && !showExceptionMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button",
    onClick: function onClick() {
      return table.previousPage();
    },
    disabled: !table.getCanPreviousPage()
  }, '<'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button",
    onClick: function onClick() {
      return table.nextPage();
    },
    disabled: !table.getCanNextPage()
  }, '>'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, table.getState().pagination.pageIndex + 1, " of", ' ', table.getPageCount())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "flex items-center gap-1"
  }, "| Go to page:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    defaultValue: table.getState().pagination.pageIndex + 1,
    onChange: function onChange(e) {
      var page = e.target.value ? Number(e.target.value) - 1 : 0;
      table.setPageIndex(page);
    },
    className: "border rounded w-16"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: table.getState().pagination.pageSize,
    onChange: function onChange(e) {
      table.setPageSize(Number(e.target.value));
    }
  }, [10, 20, 30, 40, 50].map(function (pageSize) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: pageSize,
      value: pageSize
    }, "Show ", pageSize);
  }))) : null);
};

/***/ }),

/***/ "./assets/src/js/backend/states/accountSlice.js":
/*!******************************************************!*\
  !*** ./assets/src/js/backend/states/accountSlice.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountSlice": () => (/* binding */ accountSlice),
/* harmony export */   "addSigninToken": () => (/* binding */ addSigninToken),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "deleteSigninToken": () => (/* binding */ deleteSigninToken)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/common */ "./assets/src/js/common/index.js");


var initialState = {
  token: (0,_components_common__WEBPACK_IMPORTED_MODULE_0__.retrieveLogosSignedToken)(sessionStorage)
};
var accountSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'account',
  initialState: initialState,
  reducers: {
    addSigninToken: function addSigninToken(state, action) {
      var token = action.payload.token;
      (0,_components_common__WEBPACK_IMPORTED_MODULE_0__.setLogosSignedToken)(sessionStorage, token);
      state.token = token;
    },
    deleteSigninToken: function deleteSigninToken(state) {
      (0,_components_common__WEBPACK_IMPORTED_MODULE_0__.removeLogosSignedToken)(sessionStorage);
      state.token = null;
    }
  }
});
var _accountSlice$actions = accountSlice.actions,
    addSigninToken = _accountSlice$actions.addSigninToken,
    deleteSigninToken = _accountSlice$actions.deleteSigninToken;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accountSlice.reducer);

/***/ }),

/***/ "./assets/src/js/backend/states/generalSlice.js":
/*!******************************************************!*\
  !*** ./assets/src/js/backend/states/generalSlice.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLicense": () => (/* binding */ addLicense),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "deleteLicense": () => (/* binding */ deleteLicense),
/* harmony export */   "generalSlice": () => (/* binding */ generalSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_0__);


var initialState = {
  licenses: (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_0___default().RHEMA_BACKEND.LICENSES)
};
var generalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'general',
  initialState: initialState,
  reducers: {
    addLicense: function addLicense(state, action) {
      var bible = action.payload.bible;
      state.licenses = {
        bible: bible
      };
    },
    deleteLicense: function deleteLicense(state, action) {
      var bible = action.payload.bible;

      if (bible.key !== state.licenses.bible.key) {
        return state;
      }

      state.licenses.bible = {
        key: false,
        renew_date: false,
        data: false
      };
    }
  }
}); // Action creators are generated for each case reducer function

var _generalSlice$actions = generalSlice.actions,
    addLicense = _generalSlice$actions.addLicense,
    deleteLicense = _generalSlice$actions.deleteLicense;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generalSlice.reducer);

/***/ }),

/***/ "./assets/src/js/backend/store.js":
/*!****************************************!*\
  !*** ./assets/src/js/backend/store.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit/query */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _states_generalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/generalSlice */ "./assets/src/js/backend/states/generalSlice.js");
/* harmony import */ var _states_accountSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/accountSlice */ "./assets/src/js/backend/states/accountSlice.js");
var _reducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
  reducer: (_reducer = {
    general: _states_generalSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    account: _states_accountSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, _defineProperty(_reducer, _components_services__WEBPACK_IMPORTED_MODULE_0__.optionsApi.reducerPath, _components_services__WEBPACK_IMPORTED_MODULE_0__.optionsApi.reducer), _defineProperty(_reducer, _components_services__WEBPACK_IMPORTED_MODULE_0__.activateApi.reducerPath, _components_services__WEBPACK_IMPORTED_MODULE_0__.activateApi.reducer), _defineProperty(_reducer, _components_services__WEBPACK_IMPORTED_MODULE_0__.deactivateApi.reducerPath, _components_services__WEBPACK_IMPORTED_MODULE_0__.deactivateApi.reducer), _defineProperty(_reducer, _components_services__WEBPACK_IMPORTED_MODULE_0__.signinApi.reducerPath, _components_services__WEBPACK_IMPORTED_MODULE_0__.signinApi.reducer), _defineProperty(_reducer, _components_services__WEBPACK_IMPORTED_MODULE_0__.sendVerifyApi.reducerPath, _components_services__WEBPACK_IMPORTED_MODULE_0__.sendVerifyApi.reducer), _defineProperty(_reducer, _components_services__WEBPACK_IMPORTED_MODULE_0__.sendForgotApi.reducerPath, _components_services__WEBPACK_IMPORTED_MODULE_0__.sendForgotApi.reducer), _defineProperty(_reducer, _components_services__WEBPACK_IMPORTED_MODULE_0__.ordersApi.reducerPath, _components_services__WEBPACK_IMPORTED_MODULE_0__.ordersApi.reducer), _reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([_components_services__WEBPACK_IMPORTED_MODULE_0__.optionsApi.middleware, _components_services__WEBPACK_IMPORTED_MODULE_0__.activateApi.middleware, _components_services__WEBPACK_IMPORTED_MODULE_0__.deactivateApi.middleware, _components_services__WEBPACK_IMPORTED_MODULE_0__.signinApi.middleware, _components_services__WEBPACK_IMPORTED_MODULE_0__.sendVerifyApi.middleware, _components_services__WEBPACK_IMPORTED_MODULE_0__.sendForgotApi.middleware, _components_services__WEBPACK_IMPORTED_MODULE_0__.ordersApi.middleware]);
  }
});
(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_4__.setupListeners)(store.dispatch);

/***/ }),

/***/ "./assets/src/js/backend/tab/contents.jsx":
/*!************************************************!*\
  !*** ./assets/src/js/backend/tab/contents.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About": () => (/* binding */ About),
/* harmony export */   "Account": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/services */ "./assets/src/js/services/index.js");
/* harmony import */ var _components_backend_my_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/backend/my-account */ "./assets/src/js/backend/my-account/index.jsx");
/* harmony import */ var _components_backend_states_accountSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/backend/states/accountSlice */ "./assets/src/js/backend/states/accountSlice.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["identity_type"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["about/paragraph-1"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["about/paragraph-2"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://p.ecpay.com.tw/BDA9F8A",
    target: "_blank",
    rel: "noreferrer"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["about/link/donation-1"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://paypal.me/eoncenter",
    target: "_blank",
    rel: "noreferrer"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["about/link/donation-2"]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, _components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["about/title/service-policy"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])((0,sprintf_js__WEBPACK_IMPORTED_MODULE_3__.sprintf)(_components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["about/service-policy/update-maintenance"], '<a href="https://github.com/muchshar-tech/rhema/issues" target="_blank" rel="noreferrer">https://github.com/muchshar-tech/rhema/issues</a>'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, _components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["about/service-policy/rights-reserved"])));
};
var Account = function Account() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showVerifyEmailForm = _useState2[0],
      toggleVerifyEmailForm = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showForgotPwForm = _useState4[0],
      toggleForgotPwForm = _useState4[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useSigninMutation = (0,_components_services__WEBPACK_IMPORTED_MODULE_6__.useSigninMutation)(),
      _useSigninMutation2 = _slicedToArray(_useSigninMutation, 2),
      signin = _useSigninMutation2[0],
      _useSigninMutation2$ = _useSigninMutation2[1],
      signinResponse = _useSigninMutation2$.data,
      signinError = _useSigninMutation2$.error,
      isSigning = _useSigninMutation2$.isLoading;

  var _useSendVerifyMutatio = (0,_components_services__WEBPACK_IMPORTED_MODULE_6__.useSendVerifyMutation)(),
      _useSendVerifyMutatio2 = _slicedToArray(_useSendVerifyMutatio, 2),
      sendVerify = _useSendVerifyMutatio2[0],
      _useSendVerifyMutatio3 = _useSendVerifyMutatio2[1],
      sendVerifyResponse = _useSendVerifyMutatio3.data,
      sendVerifyError = _useSendVerifyMutatio3.error,
      isSendingVerify = _useSendVerifyMutatio3.isLoading;

  var _useSendForgotMutatio = (0,_components_services__WEBPACK_IMPORTED_MODULE_6__.useSendForgotMutation)(),
      _useSendForgotMutatio2 = _slicedToArray(_useSendForgotMutatio, 2),
      sendForgot = _useSendForgotMutatio2[0],
      _useSendForgotMutatio3 = _useSendForgotMutatio2[1],
      sendForgotResponse = _useSendForgotMutatio3.data,
      sendForgotError = _useSendForgotMutatio3.error,
      isSendingForgot = _useSendForgotMutatio3.isLoading;

  var hasToken = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    var _state$account, _state$account2, _state$account3;

    if (!(state !== null && state !== void 0 && (_state$account = state.account) !== null && _state$account !== void 0 && _state$account.token) || typeof (state === null || state === void 0 ? void 0 : (_state$account2 = state.account) === null || _state$account2 === void 0 ? void 0 : _state$account2.token) !== 'string' || (state === null || state === void 0 ? void 0 : (_state$account3 = state.account) === null || _state$account3 === void 0 ? void 0 : _state$account3.token.length) <= 0) {
      return false;
    }

    return true;
  });

  var onSubmitSigin = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var identity_type, body, payload, response, token;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('onSubmitSigin');
              identity_type = data.identity_type, body = _objectWithoutProperties(data, _excluded);
              _context.next = 4;
              return signin(body);

            case 4:
              payload = _context.sent;
              response = payload.data.data;
              token = response.token;
              dispatch((0,_components_backend_states_accountSlice__WEBPACK_IMPORTED_MODULE_8__.addSigninToken)({
                token: token
              }));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmitSigin(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onSubmitVerifyEmail = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      var payload;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(data);
              _context2.next = 3;
              return sendVerify(data);

            case 3:
              payload = _context2.sent;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmitVerifyEmail(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onSubmitForgotPw = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
      var payload;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(data);
              _context3.next = 3;
              return sendForgot(data);

            case 3:
              payload = _context3.sent;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onSubmitForgotPw(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !hasToken ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_my_account__WEBPACK_IMPORTED_MODULE_7__.LoginCard, {
    className: ['max-w-sm'].concat(_toConsumableArray(showVerifyEmailForm || showForgotPwForm ? ['hidden'] : [])).join(' '),
    onSubmitSigin: onSubmitSigin,
    onClickForgotPw: function onClickForgotPw() {
      toggleForgotPwForm(true);
    },
    onClickVerifyEmail: function onClickVerifyEmail() {
      toggleVerifyEmailForm(true);
    },
    signinData: {
      signinResponse: signinResponse,
      signinError: signinError,
      isSigning: isSigning
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_my_account__WEBPACK_IMPORTED_MODULE_7__.VerifyEmailCard, {
    className: ['max-w-sm'].concat(_toConsumableArray(!showVerifyEmailForm ? ['hidden'] : [])).join(' '),
    onSubmitVerifyEmail: onSubmitVerifyEmail,
    onClickBackToSignin: function onClickBackToSignin() {
      toggleVerifyEmailForm(false);
    },
    sendVerifyData: {
      sendVerifyResponse: sendVerifyResponse,
      sendVerifyError: sendVerifyError,
      isSendingVerify: isSendingVerify
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_my_account__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordCard, {
    className: ['max-w-sm'].concat(_toConsumableArray(!showForgotPwForm ? ['hidden'] : [])).join(' '),
    onSubmitForgotPw: onSubmitForgotPw,
    onClickBackToSignin: function onClickBackToSignin() {
      toggleForgotPwForm(false);
    },
    sendForgotPasswordData: {
      sendForgotResponse: sendForgotResponse,
      sendForgotError: sendForgotError,
      isSendingForgot: isSendingForgot
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-4 w-full"
  }, _components_constants__WEBPACK_IMPORTED_MODULE_5__.UI_MESSAGE_MAPPING["my-account/welcome"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_backend_my_account__WEBPACK_IMPORTED_MODULE_7__.OrdersListing, null)));
};

/***/ }),

/***/ "./assets/src/js/backend/tab/index.jsx":
/*!*********************************************!*\
  !*** ./assets/src/js/backend/tab/index.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrap": () => (/* binding */ ContentWrap),
/* harmony export */   "ContentsWrap": () => (/* binding */ ContentsWrap),
/* harmony export */   "TabWrap": () => (/* binding */ TabWrap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TabWrap = function TabWrap(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "nav-tab-wrapper"
  }, children);
};

var ContentsWrap = function ContentsWrap(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-panel-list tailwind"
  }, children);
};

var ContentWrap = function ContentWrap(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3"
  }, children);
};



/***/ }),

/***/ "./assets/src/js/common/index.js":
/*!***************************************!*\
  !*** ./assets/src/js/common/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "converterFilter": () => (/* binding */ converterFilter),
/* harmony export */   "isJsonStr": () => (/* binding */ isJsonStr),
/* harmony export */   "localDateTime": () => (/* binding */ localDateTime),
/* harmony export */   "removeLogosSignedToken": () => (/* binding */ removeLogosSignedToken),
/* harmony export */   "retrieveFontSize": () => (/* binding */ retrieveFontSize),
/* harmony export */   "retrieveLogosSignedToken": () => (/* binding */ retrieveLogosSignedToken),
/* harmony export */   "retrieveResponseFromRTK": () => (/* binding */ retrieveResponseFromRTK),
/* harmony export */   "setLogosSignedToken": () => (/* binding */ setLogosSignedToken)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIVATING_COUNT_DOWN_TIME": () => (/* binding */ ACTIVATING_COUNT_DOWN_TIME),
/* harmony export */   "ERROR_MESSAGE_MAPPING": () => (/* binding */ ERROR_MESSAGE_MAPPING),
/* harmony export */   "IDENTITY_TYPE": () => (/* binding */ IDENTITY_TYPE),
/* harmony export */   "PRODUCT_SLUGS": () => (/* binding */ PRODUCT_SLUGS),
/* harmony export */   "PRODUCT_SLUG_REST_NAME_MAP": () => (/* binding */ PRODUCT_SLUG_REST_NAME_MAP),
/* harmony export */   "UI_MESSAGE_MAPPING": () => (/* binding */ UI_MESSAGE_MAPPING)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! RHEMA_LOCALIZE */ "RHEMA_LOCALIZE");
/* harmony import */ var RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1__);


var ACTIVATING_COUNT_DOWN_TIME = 4000;
var IDENTITY_TYPE = 'domain';
var PRODUCT_SLUG_REST_NAME_MAP = {
  'wp-rhema-core-feature': 'core'
};
var PRODUCT_SLUGS = ['donate-for-txipartners', 'wp-rhema-core-feature', 'wp-rehema-rlation-feature', 'wp-rehema-q-and-a-feature', 'wp-rehema-offline-reading'];
var ERROR_MESSAGE_MAPPING = {
  rest_cookie_invalid_nonce: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("error/page-is-expired", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT))
};
var UI_MESSAGE_MAPPING = {
  'bible-entry-path': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('bible-entry-path', (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'default-translation': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('default-translation', (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'default-translation/default': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('default-translation/default', (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
  'features/description/core': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rhema core function: read and query the whole Bible", (RHEMA_LOCALIZE__WEBPACK_IMPORTED_MODULE_1___default().RHEMA_DOMAIN_TEXT)),
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

/***/ "./assets/src/js/schema/index.js":
/*!***************************************!*\
  !*** ./assets/src/js/schema/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateRhemeaByLicense": () => (/* binding */ activateRhemeaByLicense),
/* harmony export */   "activateRhemeaFields": () => (/* binding */ activateRhemeaFields),
/* harmony export */   "forgotPasswordLogosFields": () => (/* binding */ forgotPasswordLogosFields),
/* harmony export */   "searchBibleRawsByKeyword": () => (/* binding */ searchBibleRawsByKeyword),
/* harmony export */   "signinLogosFields": () => (/* binding */ signinLogosFields),
/* harmony export */   "verifyEmailLogosFields": () => (/* binding */ verifyEmailLogosFields)
/* harmony export */ });
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ "./node_modules/joi/dist/joi-browser.min.js");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/constants */ "./assets/src/js/constants.js");


var fields = {
  email: joi__WEBPACK_IMPORTED_MODULE_0___default().string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'tw', 'org', 'io', 'app', 'test']
    }
  }),
  identity_type: joi__WEBPACK_IMPORTED_MODULE_0___default().string().valid(_components_constants__WEBPACK_IMPORTED_MODULE_1__.IDENTITY_TYPE),
  product_slug: joi__WEBPACK_IMPORTED_MODULE_0___default().string().valid('donate-for-txipartners', 'wp-rhema-core-feature', 'wp-rehema-rlation-feature', 'wp-rehema-q-and-a-feature', 'wp-rehema-offline-reading'),
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateApi": () => (/* binding */ activateApi),
/* harmony export */   "bibleApi": () => (/* binding */ bibleApi),
/* harmony export */   "deactivateApi": () => (/* binding */ deactivateApi),
/* harmony export */   "optionsApi": () => (/* binding */ optionsApi),
/* harmony export */   "ordersApi": () => (/* binding */ ordersApi),
/* harmony export */   "searchApi": () => (/* binding */ searchApi),
/* harmony export */   "sendForgotApi": () => (/* binding */ sendForgotApi),
/* harmony export */   "sendVerifyApi": () => (/* binding */ sendVerifyApi),
/* harmony export */   "signinApi": () => (/* binding */ signinApi),
/* harmony export */   "useActivateByLicenseMutation": () => (/* binding */ useActivateByLicenseMutation),
/* harmony export */   "useActivateCoreMutation": () => (/* binding */ useActivateCoreMutation),
/* harmony export */   "useDeactivateMutation": () => (/* binding */ useDeactivateMutation),
/* harmony export */   "useGetBibleRawQuery": () => (/* binding */ useGetBibleRawQuery),
/* harmony export */   "useOrdersQuery": () => (/* binding */ useOrdersQuery),
/* harmony export */   "usePrefetch": () => (/* binding */ usePrefetch),
/* harmony export */   "useSearchBibleRawsQuery": () => (/* binding */ useSearchBibleRawsQuery),
/* harmony export */   "useSendForgotMutation": () => (/* binding */ useSendForgotMutation),
/* harmony export */   "useSendVerifyMutation": () => (/* binding */ useSendVerifyMutation),
/* harmony export */   "useSigninMutation": () => (/* binding */ useSigninMutation),
/* harmony export */   "useUpdateOptionsMutation": () => (/* binding */ useUpdateOptionsMutation)
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
          var restName = _components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUG_REST_NAME_MAP[productSlug];

          if (typeof restName === 'undefined' || !restName) {
            throw new Error('Error in mutation.query');
          }

          return {
            url: _components_constants__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_SLUG_REST_NAME_MAP[productSlug],
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

/***/ "./assets/src/postcss/backend.pcss":
/*!*****************************************!*\
  !*** ./assets/src/postcss/backend.pcss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive \\b\\B":
/*!***********************************************!*\
  !*** ./node_modules/moment/locale/ sync \b\B ***!
  \***********************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/moment/locale sync recursive \\b\\B";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "RHEMA_LOCALIZE":
/*!********************************************!*\
  !*** external "LOCALIZE_SCRIPT_VARIABLES" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = LOCALIZE_SCRIPT_VARIABLES;

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"backend": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./assets/src/js/backend.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=backend.js.map