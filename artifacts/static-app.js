(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addl10n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return l10n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toLangCode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var l10nMap = {};
var addl10n = function addl10n(mappings) {
  l10nMap = _objectSpread({}, l10nMap, {}, mappings);
};
var l10n = function l10n(lang) {
  return function (key) {
    return l10nMap[key][lang];
  };
};
var toLangCode = function toLangCode(lang) {
  if (lang === "en") {
    return "en-US";
  } else if (lang === "zht") {
    return "zh-TW";
  } else if (lang === "zhs") {
    return "zh-CN";
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(37);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(39);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(40);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(16);

var _helpers = __webpack_require__(41);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(7);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/app.css
var app = __webpack_require__(17);

// EXTERNAL MODULE: external "bootstrap/dist/css/bootstrap.min.css"
var bootstrap_min_css_ = __webpack_require__(29);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(6);

// CONCATENATED MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/common/footer.jsx

var footer_Footer = function Footer(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("section", {
    className: "whiteback"
  }, external_react_default.a.createElement("div", {
    "class": "container"
  }, external_react_default.a.createElement("div", {
    "class": "row"
  }, external_react_default.a.createElement("div", {
    "class": "col-lg",
    id: "contact"
  }, external_react_default.a.createElement("p", {
    "class": "text-muted"
  }, "\xA9 2019- Gephyra O\xDC"), external_react_default.a.createElement("p", null, "Sakala 7-2, Tallinn", external_react_default.a.createElement("br", null), "Estonia 10141"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "mailto:contact@geph.io"
  }, "contact@geph.io"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("a", {
    href: "https://t.me/joinchat/Pc6C1hMBREf-8_TZM5z6_g",
    target: "_blank",
    rel: "noopener"
  }, "Telegram")))))), external_react_default.a.createElement("div", {
    className: "statcounter"
  }, external_react_default.a.createElement("img", {
    className: "statcounter",
    src: "https://c.statcounter.com/12155608/0/044606fb/1/"
  })));
};
// EXTERNAL MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/common/l10n.js
var l10n = __webpack_require__(4);

// CONCATENATED MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/common/header.jsx



Object(l10n["a" /* addl10n */])({
  geph: {
    en: "Geph",
    zht: "迷霧通",
    zhs: "迷雾通"
  },
  help: {
    en: "Help",
    zht: "幫助",
    zhs: "帮助"
  },
  policies: {
    en: "Policies",
    zht: "條款",
    zhs: "条款"
  },
  contact: {
    en: "Contact",
    zht: "聯繫",
    zhs: "联系"
  },
  mirror: {
    zht: "免翻牆鏡像",
    zhs: "免翻墙镜像"
  }
});
var header_Header = function Header(props) {
  var localize = Object(l10n["b" /* l10n */])(props.lang);
  return external_react_default.a.createElement("section", {
    className: "nav-header"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md"
  }, external_react_default.a.createElement("div", {
    className: "nav-brandwrap"
  }, external_react_default.a.createElement("img", {
    src: __webpack_require__(57),
    alt: "Geph logo"
  }), external_react_default.a.createElement("span", {
    className: "nav-brand"
  }, external_react_default.a.createElement("b", null, localize("geph"))))), external_react_default.a.createElement("div", {
    className: "col-md nav-linkwrap"
  }, external_react_default.a.createElement("div", {
    className: "nav-link"
  }, external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener",
    href: props.lang === "en" ? "https://github.com/geph-official/geph2/wiki/Policies-and-terms" : "https://github.com/geph-official/geph2/wiki/%E6%9C%8D%E5%8B%99%E6%A2%9D%E6%AC%BE%EF%BC%88%E5%8F%83%E8%80%83%E7%BF%BB%E8%AD%AF%EF%BC%89",
    style: {
      color: "#19448e"
    }
  }, localize("policies"))), external_react_default.a.createElement("div", {
    className: "nav-link"
  }, external_react_default.a.createElement("a", {
    href: "#contact",
    style: {
      color: "#19448e"
    }
  }, localize("contact"))), props.lang !== "en" && external_react_default.a.createElement("div", {
    className: "nav-link"
  }, external_react_default.a.createElement("a", {
    href: "https://is.gd/getmiwutong",
    style: {
      color: "#19448e"
    },
    target: "_blank",
    rel: "noopener"
  }, localize("mirror"))), external_react_default.a.createElement("div", {
    className: "nav-link"
  }, external_react_default.a.createElement(router_["Link"], {
    to: "/en/",
    style: {
      fontWeight: props.lang === "en" ? 600 : 400
    }
  }, "en"), "/", external_react_default.a.createElement(router_["Link"], {
    to: "/zhs/",
    style: {
      fontWeight: props.lang === "zhs" ? 600 : 400
    }
  }, "\u7B80"), "/", external_react_default.a.createElement(router_["Link"], {
    to: "/zht/",
    style: {
      fontWeight: props.lang === "zht" ? 600 : 400
    }
  }, "\u7E41"))))));
};
// CONCATENATED MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/Main.l10n.jsx


var mizaruURL = "https://github.com/geph-official/geph2/wiki/Mizaru";
var slaURL = "https://github.com/geph-official/geph2/wiki/Service-SLA-(%E5%B0%81%E4%B8%80%E5%A4%A9%E8%B3%A0%E4%B8%80%E5%A4%A9%E6%94%BF%E7%AD%96)";
var policyEnURL = "https://github.com/geph-official/geph2/wiki/Policies-and-terms";
var policyZhURL = "https://github.com/geph-official/geph2/wiki/%E6%9C%8D%E5%8B%99%E6%A2%9D%E6%AC%BE%EF%BC%88%E5%8F%83%E8%80%83%E7%BF%BB%E8%AD%AF%EF%BC%89";
var githubURL = "https://github.com/geph-official/";
Object(l10n["a" /* addl10n */])({
  "blast-through-censorship": {
    en: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", null, "Blast"), " ", external_react_default.a.createElement("span", {
      className: "shade"
    }, "through censorship!")),
    zht: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", null, "\u885D\u7834"), "\u7DB2\u7D61\u5C01\u9396"),
    zhs: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", null, "\u51B2\u7834"), "\u7F51\u7EDC\u5C01\u9501")
  },
  "geph-connects": {
    en: external_react_default.a.createElement(external_react_default.a.Fragment, null, "Geph connects you with the censorship-free Internet, ", external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "even when nothing else works.")),
    zht: "其它軟件都失靈時，用迷霧通連接自由的網絡！",
    zhs: "其它软件都失灵时，用迷雾通连接自由的网络！"
  },
  "download-now": {
    en: "Download now",
    zht: "現在下載",
    zhs: "现在下载"
  },
  "other-platforms": {
    en: "Other platforms",
    zht: "其他平台",
    zhs: "其他平台"
  },
  "hero-text": {
    en: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", {
      className: "center"
    }, "Far surpassing VPNs"), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, "Most VPNs and anti-censorship tools only rely on keeping a low profile to avoid blocking. Even worse, you never know which providers you can trust."), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, external_react_default.a.createElement("b", null, "Geph is different."), " We built Geph from the ground up with cutting-edge technology designed to break through powerful government censorship like that in China and Iran. Telling all your friends about us won't make Geph any easier to block. For paid accounts, a day that Geph doesn't work is ", external_react_default.a.createElement("a", {
      href: slaURL
    }, "a day's money back"), "."), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, "We take your privacy extremely seriously. We", " ", external_react_default.a.createElement("a", {
      href: policyEnURL
    }, "won't"), " and ", external_react_default.a.createElement("a", {
      href: mizaruURL
    }, "can't"), " spy on you. Take a look at our code yourself \u2014 our entire software stack is ", external_react_default.a.createElement("a", {
      href: githubURL
    }, "open source"), ".")),
    zht: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", {
      className: "center"
    }, "\u5B8C\u52DDVPN"), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, "\u5927\u591A\u6578VPN\u548C\u7FFB\u7246\u5DE5\u5177\u514D\u88AB\u5C01\u6BBA\u53EA\u9760\u4FDD\u6301\u4F4E\u8ABF\u3002 \u66F4\u7CDF\u7CD5\u7684\u662F\uFF0C\u8AB0\u4E5F\u4E0D\u77E5\u9053\u54EA\u4E9B\u63D0\u4F9B\u5546\u503C\u5F97\u4FE1\u4EFB\u3002"), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, external_react_default.a.createElement("b", null, "\u8FF7\u9727\u901A\u8207\u773E\u4E0D\u540C\u3002"), "\u6211\u5011\u8A2D\u8A08\u8FF7\u9727\u901A\u91DD\u5C0D\u7A81\u7834\u4E2D\u570B\u3001\u4F0A\u6717\u7B49\u5730\u7684\u570B\u5BB6\u7D1A\u7DB2\u7D61\u5C01\u9396\u3002\u8FF7\u9727\u901A\u7FFB\u7246\u9760\u6280\u8853\uFF0C\u4E0D\u9760\u8EB2\u85CF\uFF01\u6211\u5011\u4E5F\u63D0\u4F9B\u696D\u754C\u552F\u4E00\u7684", external_react_default.a.createElement("a", {
      href: slaURL
    }, "\u5C01\u5E7E\u5929\u8CE0\u5E7E\u5929"), "\u653F\u7B56\u3002"), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, "\u6211\u5011\u6975\u5176\u91CD\u8996\u60A8\u7684\u96B1\u79C1\u3002\u6211\u5011", external_react_default.a.createElement("a", {
      href: policyZhURL
    }, "\u4E0D\u6703"), "\uFF0C\u4E26\u4E14", external_react_default.a.createElement("a", {
      href: mizaruURL
    }, "\u6839\u672C\u4E0D\u80FD"), "\u76E3\u8996\u60A8\u7684\u700F\u89BD\u8A18\u9304\u3002\u8FF7\u9727\u901A\u7684\u4EE3\u78BC\u66F4\u662F\u5168\u90E8", external_react_default.a.createElement("a", {
      href: githubURL
    }, "\u958B\u6E90"), "\u7684\u3002")),
    zhs: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", {
      className: "center"
    }, "\u5B8C\u80DCVPN"), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, "\u5927\u591A\u6570VPN\u548C\u7FFB\u5899\u5DE5\u5177\u514D\u88AB\u5C01\u6740\u53EA\u9760\u4FDD\u6301\u4F4E\u8C03\u3002 \u66F4\u7CDF\u7CD5\u7684\u662F\uFF0C\u8C01\u4E5F\u4E0D\u77E5\u9053\u54EA\u4E9B\u63D0\u4F9B\u5546\u503C\u5F97\u4FE1\u4EFB\u3002"), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, external_react_default.a.createElement("b", null, "\u8FF7\u96FE\u901A\u4E0E\u4F17\u4E0D\u540C\u3002 "), "\u6211\u4EEC\u8BBE\u8BA1\u8FF7\u96FE\u901A\u9488\u5BF9\u7A81\u7834\u4E2D\u56FD\u3001\u4F0A\u6717\u7B49\u5730\u7684\u56FD\u5BB6\u7EA7\u7F51\u7EDC\u5C01\u9501\u3002\u8FF7\u96FE\u901A\u7FFB\u5899\u9760\u6280\u672F\uFF0C\u4E0D\u9760\u8EB2\u85CF\uFF01\u6211\u4EEC\u4E5F\u63D0\u4F9B\u4E1A\u754C\u552F\u4E00\u7684", external_react_default.a.createElement("a", {
      href: "#"
    }, "\u5C01\u51E0\u5929\u8D54\u51E0\u5929"), "\u653F\u7B56\u3002"), external_react_default.a.createElement("p", {
      className: "hero-text"
    }, "\u6211\u4EEC\u6781\u5176\u91CD\u89C6\u60A8\u7684\u9690\u79C1\u3002\u6211\u4EEC", external_react_default.a.createElement("a", {
      href: policyZhURL
    }, "\u4E0D\u4F1A"), "\uFF0C\u5E76\u4E14", external_react_default.a.createElement("a", {
      href: mizaruURL
    }, "\u6839\u672C\u4E0D\u80FD"), "\u76D1\u89C6\u60A8\u7684\u6D4F\u89C8\u8BB0\u5F55\u3002\u8FF7\u96FE\u901A\u7684\u4EE3\u7801\u66F4\u662F\u5168\u90E8", external_react_default.a.createElement("a", {
      href: githubURL
    }, "\u5F00\u6E90"), "\u7684\u3002"))
  },
  "robust-privacy": {
    en: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "Robust privacy"), external_react_default.a.createElement("p", null, "We are based in Estonia, an EU jurisdiction with strong privacy laws. We ", external_react_default.a.createElement("a", {
      href: policyEnURL
    }, "never log your browsing activity"), " when using Geph, and we \xA0", external_react_default.a.createElement("a", {
      href: policyEnURL
    }, "never voluntarily share"), " any user information to third parties."), external_react_default.a.createElement("p", null, "Better yet, we can't sell you out even if we're hacked or coerced. We invented ", external_react_default.a.createElement("a", {
      href: mizaruURL
    }, "Mizaru"), ", a revolutionary zero-knowledge authentication scheme that prevents our servers from associating users with browsing activity."), external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "No other VPN or proxy provider comes close to Geph's level of privacy."))),
    zht: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "\u9AD8\u5EA6\u79C1\u5BC6"), external_react_default.a.createElement("p", null, "\u8FF7\u9727\u901A\u516C\u53F8\u8A3B\u518A\u5728\u611B\u6C99\u5C3C\u4E9E\uFF0C\u53D7\u6B50\u76DF\u56B4\u683C\u7684\u96B1\u79C1\u6CD5\u4FDD\u8B77\u3002\u6211\u5011", external_react_default.a.createElement("a", {
      href: policyZhURL
    }, "\u5F9E\u4E0D\u6703\u8A18\u9304\u60A8\u7684\u700F\u89BD\u4FE1\u606F"), "\uFF0C\u4E5F\u7D55\u4E0D\u6703\u5411\u7B2C\u4E09\u65B9\u4E3B\u52D5\u4EA4\u51FA\u4EFB\u4F55\u7528\u6236\u8CC7\u6599\u3002"), external_react_default.a.createElement("p", null, "\u66F4\u91CD\u8981\u7684\u662F\uFF0C\u6211\u5011\u5373\u4F7F\u88AB\u9ED1\u5BA2\u5165\u4FB5\u6216\u53D7\u5916\u529B\u8105\u8FEB\uFF0C\u4E5F\u7121\u6CD5\u51FA\u8CE3\u6211\u5011\u7684\u7528\u6236\u3002\u6211\u5011\u4F7F\u7528\u5148\u9032\u7684\u5BC6\u78BC\u5B78\u7B97\u6CD5\u958B\u767C\u4E86", external_react_default.a.createElement("a", {
      href: mizaruURL
    }, "Mizaru"), "\u7528\u6236\u8A8D\u8B49\u5354\u8B70\u3002\u9019\u7368\u7279\u7684\u6280\u8853\u4FDD\u8B49\u7528\u6236\u548C\u700F\u89BD\u8A18\u9304\u4E4B\u9593\u6C92\u6709\u4EFB\u4F55\u806F\u7E6B\u3002"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "\u5E02\u5834\u4E0A\u6C92\u6709\u4EFB\u4F55\u5176\u4ED6\u7FFB\u7246\u8EDF\u4EF6\u63D0\u4F9B\u8FF7\u9727\u901A\u7D66\u60A8\u7684\u79C1\u5BC6\u6027\u3002"))),
    zhs: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "\u9AD8\u5EA6\u79C1\u5BC6"), external_react_default.a.createElement("p", null, "\u8FF7\u96FE\u901A\u516C\u53F8\u6CE8\u518C\u5728\u7231\u6C99\u5C3C\u4E9A\uFF0C\u53D7\u6B27\u76DF\u4E25\u683C\u7684\u9690\u79C1\u6CD5\u4FDD\u62A4\u3002\u6211\u4EEC", external_react_default.a.createElement("a", {
      href: policyZhURL
    }, "\u4ECE\u4E0D\u4F1A\u8BB0\u5F55\u60A8\u7684\u6D4F\u89C8\u4FE1\u606F"), "\uFF0C\u4E5F\u7EDD\u4E0D\u4F1A\u5411\u7B2C\u4E09\u65B9\u4E3B\u52A8\u4EA4\u51FA\u4EFB\u4F55\u7528\u6237\u8D44\u6599\u3002"), external_react_default.a.createElement("p", null, "\u66F4\u91CD\u8981\u7684\u662F\uFF0C\u6211\u4EEC\u5373\u4F7F\u88AB\u9ED1\u5BA2\u5165\u4FB5\u6216\u53D7\u5916\u529B\u80C1\u8FEB\uFF0C\u4E5F\u65E0\u6CD5\u51FA\u5356\u6211\u4EEC\u7684\u7528\u6237\u3002\u6211\u4EEC\u4F7F\u7528\u5148\u8FDB\u7684\u5BC6\u7801\u5B66\u7B97\u6CD5\u5F00\u53D1\u4E86", external_react_default.a.createElement("a", {
      href: mizaruURL
    }, "Mizaru"), "\u7528\u6237\u8BA4\u8BC1\u534F\u8BAE\u3002\u8FD9\u72EC\u7279\u7684\u6280\u672F\u4FDD\u8BC1\u7528\u6237\u548C\u6D4F\u89C8\u8BB0\u5F55\u4E4B\u95F4\u6CA1\u6709\u4EFB\u4F55\u8054\u7CFB\u3002"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "\u5E02\u573A\u4E0A\u6CA1\u6709\u4EFB\u4F55\u5176\u4ED6\u7FFB\u5899\u8F6F\u4EF6\u63D0\u4F9B\u8FF7\u96FE\u901A\u7ED9\u60A8\u7684\u79C1\u5BC6\u6027\u3002 ")))
  },
  "resilient-anti-censorship": {
    en: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "Resilient anti-censorship"), external_react_default.a.createElement("p", null, "Geph is designed for more than existing firewalls. We use state-of-the-art circumvention tech to make blocking Geph incredibly difficult, for both current and future censors."), external_react_default.a.createElement("p", null, "Geph is the only circumvention service with", " ", external_react_default.a.createElement("b", {
      className: "text-primary"
    }, external_react_default.a.createElement("a", {
      href: slaURL
    }, "SLA-guaranteed reliability for all paid accounts")), ". We get you across the harshest national firewalls at the highest speeds, or we'll give your money back.")),
    zht: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "\u96E3\u4EE5\u5C01\u9396"), external_react_default.a.createElement("p", null, "\u8FF7\u9727\u901A\u4E0D\u50C5\u50C5\u91DD\u5C0D\u5DF2\u6709\u7684\u5C01\u9396\u6280\u8853\u3002\u6211\u5011\u4F7F\u7528\u6700\u524D\u6CBF\u7684\u53CD\u5C01\u9396\u6280\u8853\uFF0C\u4E0D\u7BA1\u662F\u73FE\u5728\u9084\u662F\u672A\u4F86\u7684\u5C01\u9396\u7CFB\u7D71\u90FD\u96E3\u4EE5\u5C4F\u853D\u8FF7\u9727\u901A\u3002"), external_react_default.a.createElement("p", null, "\u8FF7\u9727\u901A\u66F4\u662F\u76EE\u524D\u5E02\u9762\u4E0A\u552F\u4E00\u70BA", external_react_default.a.createElement("b", {
      className: "text-primary"
    }, external_react_default.a.createElement("a", {
      href: slaURL
    }, "\u4E00\u5207\u4ED8\u8CBB\u7528\u6236\u63D0\u4F9B\u670D\u52D9\u4FDD\u8B49")), "\u7684\u7FFB\u7246\u8EDF\u4EF6\u3002\u8FF7\u9727\u901A\u88AB\u5C01\u6BBA\u5E7E\u5929\uFF0C\u6211\u5011\u5C31\u8CE0\u6B3E\u5E7E\u5929\uFF01")),
    zhs: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "\u96BE\u4EE5\u5C01\u9501"), external_react_default.a.createElement("p", null, "\u8FF7\u96FE\u901A\u4E0D\u4EC5\u4EC5\u9488\u5BF9\u5DF2\u6709\u7684\u5C01\u9501\u6280\u672F\u3002\u6211\u4EEC\u4F7F\u7528\u6700\u524D\u6CBF\u7684\u53CD\u5C01\u9501\u6280\u672F\uFF0C\u4E0D\u7BA1\u662F\u73B0\u5728\u8FD8\u662F\u672A\u6765\u7684\u5C01\u9501\u7CFB\u7EDF\u90FD\u96BE\u4EE5\u5C4F\u853D\u8FF7\u96FE\u901A\u3002"), external_react_default.a.createElement("p", null, "\u8FF7\u96FE\u901A\u66F4\u662F\u76EE\u524D\u5E02\u9762\u4E0A\u552F\u4E00\u4E3A", external_react_default.a.createElement("b", {
      className: "text-primary"
    }, external_react_default.a.createElement("a", {
      href: slaURL
    }, "\u4E00\u5207\u4ED8\u8D39\u7528\u6237\u63D0\u4F9B\u670D\u52A1\u4FDD\u8BC1")), "\u7684\u7FFB\u5899\u8F6F\u4EF6\u3002\u8FF7\u96FE\u901A\u88AB\u5C01\u6740\u51E0\u5929\uFF0C\u6211\u4EEC\u5C31\u8D54\u6B3E\u51E0\u5929\uFF01"))
  },
  "easy-to-afford": {
    en: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "Easy to afford and use"), external_react_default.a.createElement("p", null, "We believe that Internet freedom and privacy is a basic right. So we offer ", external_react_default.a.createElement("b", null, "entirely free basic browsing"), " at moderate speeds. Unlimited Plus accounts provide greatly enhanced speeds at a flat price of", external_react_default.a.createElement("b", null, " \u20AC5/month"), "."), external_react_default.a.createElement("p", null, "Whether you use Windows, Mac, Linux, or Android, no complicated setup is involved. A censorship-free Internet is just one click away.")),
    zht: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "\u5BE6\u60E0\u3001\u7C21\u55AE"), external_react_default.a.createElement("p", null, "\u6211\u5011\u8996\u7DB2\u7D61\u81EA\u7531\u548C\u96B1\u79C1\u70BA\u57FA\u672C\u6B0A\u5229\u3002\u6240\u4EE5\u6211\u5011\u63D0\u4F9B", external_react_default.a.createElement("b", null, "\u5B8C\u5168\u514D\u8CBB"), "\u7684\u4E2D\u901F\u700F\u89BD\uFF0C\u5920\u700F\u89BD\u65B0\u805E\u3001\u67E5\u90F5\u4EF6\u3001\u770B\u6A19\u6E05\u8996\u983B\u7B49\u3002\u8D85\u5FEB\u901F\u5EA6\u7684\u4ED8\u8CBBPlus\u8CEC\u865F\u50C5\u9700", external_react_default.a.createElement("b", null, "\u20AC5/\u6708"), "\u3002"), external_react_default.a.createElement("p", null, "\u4E0D\u7BA1\u60A8\u7528Windows\u3001Mac\u3001Linux\u3001\u9084\u662FAndroid\uFF0C\u5B89\u88DD\u4F7F\u7528\u8FF7\u9727\u901A\u4E26\u4E0D\u7E41\u7463\u3002\u4E00\u9375\u5C31\u53EF\u9023\u63A5\u81EA\u7531\u7684\u4E92\u806F\u7DB2\u3002")),
    zhs: external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h5", {
      className: "center mb-3"
    }, "\u5B9E\u60E0\u3001\u7B80\u5355"), external_react_default.a.createElement("p", null, "\u6211\u4EEC\u89C6\u7F51\u7EDC\u81EA\u7531\u548C\u9690\u79C1\u4E3A\u57FA\u672C\u6743\u5229\u3002\u6240\u4EE5\u6211\u4EEC\u63D0\u4F9B", external_react_default.a.createElement("b", null, "\u5B8C\u5168\u514D\u8D39"), "\u7684\u4E2D\u901F\u6D4F\u89C8\uFF0C\u591F\u6D4F\u89C8\u65B0\u95FB\u3001\u67E5\u90AE\u4EF6\u3001\u770B\u6807\u6E05\u89C6\u9891\u7B49\u3002\u8D85\u5FEB\u901F\u5EA6\u7684\u4ED8\u8D39Plus\u8D26\u53F7\u4EC5\u9700", external_react_default.a.createElement("b", null, "\u20AC5/\u6708"), "\u3002"), external_react_default.a.createElement("p", null, "\u4E0D\u7BA1\u60A8\u7528Windows\u3001Mac\u3001Linux\u3001\u8FD8\u662FAndroid\uFF0C\u5B89\u88C5\u4F7F\u7528\u8FF7\u96FE\u901A\u5E76\u4E0D\u7E41\u7410\u3002\u4E00\u952E\u5C31\u53EF\u8FDE\u63A5\u81EA\u7531\u7684\u4E92\u8054\u7F51\u3002"))
  },
  "download-links": {
    en: "Download links",
    zht: "下載鏈接",
    zhs: "下载链接"
  },
  geph: {
    en: "Geph",
    zhs: "迷雾通",
    zht: "迷霧通"
  }
});
// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(10);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(12);

// EXTERNAL MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/logo.png
var logo = __webpack_require__(58);

// CONCATENATED MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/Main.jsx













var lin64tar = function lin64tar(version) {
  return "https://dl.geph.io/desktop-builds/geph-linux64-" + version + ".tar.bz2";
};

var lin32tar = function lin32tar(version) {
  return "https://dl.geph.io/desktop-builds/geph-linux32-" + version + ".tar.bz2";
};

var win32exe = function win32exe(version) {
  return "https://dl.geph.io/desktop-builds/geph-windows-" + version + "-setup.exe";
};

var mac64dmg = function mac64dmg(version) {
  return "https://dl.geph.io/desktop-builds/geph-macos-" + version + ".dmg";
};

var androidapk = function androidapk(version) {
  return "https://dl.geph.io/android-builds/geph-android-" + version + ".apk";
};

var WINVER = "3.2.4";
var MACVER = "3.2.4";
var LINVER = "3.2.4";
var ANDVER = "3.2.4";

var defaultDownload = function defaultDownload() {
  try {
    var platform = window.navigator.userAgent;

    if (/Android/.test(platform)) {
      return ["Android APK", androidapk, ANDVER];
    } else if (/Linux/.test(platform)) {
      return ["Linux amd64 (.tar.bz2)", lin64tar, LINVER];
    } else if (/Mac/.test(platform)) {
      return ["macOS 10.10+ (dmg)", mac64dmg, MACVER];
    } else {
      return ["Windows 7+ (installer)", win32exe, WINVER];
    }
  } catch (e) {
    return ["Windows 7+ (installer)", win32exe, WINVER];
  }
};

/* harmony default export */ var Main = __webpack_exports__["a"] = (function (props) {
  var localize = Object(l10n["b" /* l10n */])(props.lang);

  var _defaultDownload = defaultDownload(),
      _defaultDownload2 = slicedToArray_default()(_defaultDownload, 3),
      downDesc = _defaultDownload2[0],
      downLinkGen = _defaultDownload2[1],
      downVer = _defaultDownload2[2];

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_helmet_["Helmet"], {
    htmlAttributes: {
      lang: Object(l10n["c" /* toLangCode */])(props.lang)
    }
  }, external_react_default.a.createElement("meta", {
    charset: "UTF-8"
  }), external_react_default.a.createElement("title", null, localize("geph")), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), external_react_default.a.createElement("meta", {
    "http-equiv": "x-ua-compatible",
    content: "ie=edge"
  }), external_react_default.a.createElement("link", {
    rel: "alternate",
    hreflang: "en",
    href: "https://geph.io/en/"
  }), external_react_default.a.createElement("link", {
    rel: "alternate",
    hreflang: "zh-TW",
    href: "https://geph.io/zht/"
  }), external_react_default.a.createElement("link", {
    rel: "alternate",
    hreflang: "zh-CN",
    href: "https://geph.io/zhs/"
  }), external_react_default.a.createElement("link", {
    rel: "alternate",
    hreflang: "zh",
    href: "https://geph.io/zht/"
  }), external_react_default.a.createElement("meta", {
    name: "description",
    content: localize("hero-text")
  })), external_react_default.a.createElement(header_Header, {
    lang: props.lang
  }), external_react_default.a.createElement("section", {
    className: "hero"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md hero-left"
  }, external_react_default.a.createElement("h1", null, localize("blast-through-censorship")), external_react_default.a.createElement("p", {
    className: "hero-text"
  }, localize("geph-connects")), external_react_default.a.createElement("a", {
    href: downLinkGen(downVer),
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-lg"
  }, localize("download-now")), external_react_default.a.createElement("br", null), external_react_default.a.createElement("small", null, downDesc + " v" + downVer, "\u2002\xB7\u2002", external_react_default.a.createElement("a", {
    href: "#download-links"
  }, localize("other-platforms")))), external_react_default.a.createElement("div", {
    className: "col-md"
  }, external_react_default.a.createElement("img", {
    src: __webpack_require__(59),
    className: "hero-img",
    alt: "Screenshot"
  }))))), external_react_default.a.createElement("section", {
    className: "darkback"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md"
  }), external_react_default.a.createElement("div", {
    className: "col-md-8"
  }, localize("hero-text")), external_react_default.a.createElement("div", {
    className: "col-md"
  })))), external_react_default.a.createElement("section", {
    className: "whiteback"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md"
  }, localize("robust-privacy")), external_react_default.a.createElement("div", {
    className: "col-md"
  }, localize("resilient-anti-censorship")), external_react_default.a.createElement("div", {
    className: "col-md"
  }, localize("easy-to-afford"))))), external_react_default.a.createElement("section", {
    className: "lightback",
    id: "download-links"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row mb-3"
  }, external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("h2", null, localize("download-links")))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md card text-center"
  }, external_react_default.a.createElement("div", {
    "class": "card-body"
  }, external_react_default.a.createElement("img", {
    alt: "Windows",
    src: __webpack_require__(60),
    className: "oslogo"
  }), external_react_default.a.createElement("p", {
    "class": "card-text"
  }, external_react_default.a.createElement("a", {
    href: win32exe(WINVER)
  }, external_react_default.a.createElement("b", null, "Windows 7+"), " (installer)")))), external_react_default.a.createElement("div", {
    className: "col-md card text-center"
  }, external_react_default.a.createElement("div", {
    "class": "card-body"
  }, external_react_default.a.createElement("img", {
    alt: "Mac",
    src: __webpack_require__(61),
    className: "oslogo"
  }), external_react_default.a.createElement("p", {
    "class": "card-text"
  }, external_react_default.a.createElement("a", {
    href: mac64dmg(MACVER)
  }, external_react_default.a.createElement("b", null, "macOS 10.10+"), " (dmg)")))), external_react_default.a.createElement("div", {
    className: "col-md card text-center"
  }, external_react_default.a.createElement("div", {
    "class": "card-body"
  }, external_react_default.a.createElement("img", {
    alt: "Linux",
    src: __webpack_require__(62),
    className: "oslogo"
  }), external_react_default.a.createElement("p", {
    "class": "card-text"
  }, external_react_default.a.createElement("a", {
    href: lin64tar(LINVER)
  }, external_react_default.a.createElement("b", null, "Linux amd64"), " (.tar.bz2)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("a", {
    href: lin32tar(LINVER)
  }, external_react_default.a.createElement("b", null, "Linux i386"), " (.tar.bz2)"), " ", external_react_default.a.createElement("br", null)))), external_react_default.a.createElement("div", {
    className: "col-md card text-center"
  }, external_react_default.a.createElement("div", {
    "class": "card-body"
  }, external_react_default.a.createElement("img", {
    alt: "Android",
    src: __webpack_require__(63),
    className: "oslogo"
  }), external_react_default.a.createElement("p", {
    "class": "card-text"
  }, external_react_default.a.createElement("a", {
    href: androidapk(ANDVER)
  }, external_react_default.a.createElement("b", null, "Android 5.0+"), " (APK)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("a", {
    href: "https://play.google.com/store/apps/details?id=io.geph.android"
  }, external_react_default.a.createElement("b", null, "Android 5.0+"), " (Google Play)"))))))), external_react_default.a.createElement(footer_Footer, null));
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(16);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(38)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);

 //


 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(react_static__WEBPACK_IMPORTED_MODULE_1__["addPrefetchExcludes"])(["dynamic"]);

function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Root"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Loading...")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Router"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    path: "*"
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(9);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// Imports
var urlEscape = __webpack_require__(50);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(51));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(52));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(53));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(54));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(55));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(56));

// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box !important;\n  color: #000b00 !important;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: cover;\n}\n\n* {\n  font-family: \"LFR\", sans-serif;\n}\n\n:lang(zh-CN) {\n  font-family: \"LFR\", \"Noto Sans CJK SC\", \"Microsoft YaHei\", sans-serif;\n}\n\n:lang(zh-TW) {\n  font-family: \"LFR\", \"Noto Sans CJK TC\", \"Microsoft JhengHei\", sans-serif;\n}\n\nsection {\n  width: 100%;\n  max-width: 100%;\n  padding-top: 40px !important;\n  padding-bottom: 40px !important;\n  box-sizing: border-box !important;\n}\n\n.darken {\n  background-color: #ccc;\n}\n\n.darkback {\n  background-color: #000b00;\n  color: white;\n}\n\n.shade {\n  opacity: 0.6;\n}\n\n.lightback {\n  background-color: #f7f9fc;\n}\n\n.whiteback {\n  background-color: white;\n}\n\n.color-primary {\n  color: #007bbb;\n}\n\n.big-button {\n  font-size: 130%;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  text-transform: none !important;\n  box-sizing: content-box !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.right {\n  text-align: right;\n}\n\na {\n  font-weight: 500;\n}\n\n.cardbrand {\n  height: 24px;\n  padding-right: 10px;\n}\n\n/* NAV */\n\n.nav-header {\n  padding-top: 20px;\n}\n\n.nav-brandwrap {\n  display: flex;\n  align-items: center;\n}\n\n.nav-linkwrap {\n  justify-content: right;\n  align-items: center;\n  display: flex;\n}\n\n.nav-link {\n  font-weight: 500;\n  padding-left: 10px;\n  padding-right: 16px;\n}\n\n.nav-header img {\n  height: 64px;\n  vertical-align: middle;\n  margin-right: 16px;\n}\n\n.nav-brand {\n  font-size: 42px;\n}\n\n/* HERO */\n\n.hero .row {\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n\n@media (min-width: 768px) {\n  .hero-left {\n    text-align: right;\n  }\n}\n\n.hero-left > h2 {\n  font-weight: 500;\n}\n\n.hero-text {\n  font-size: 105%;\n  padding-top: 8px;\n}\n\n.hero-text > a {\n  font-weight: 500;\n  color: #a0d8ef;\n}\n\n@media (min-width: 768px) {\n  .hero-text {\n    font-size: 120%;\n  }\n}\n\n.hero-img {\n  height: 500px;\n  box-shadow: 0px 0px 30px #ccc;\n  margin-top: 40px;\n}\n\n/* others */\n\n.oslogo {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n/* fonts */\n\n@font-face {\n  font-family: \"LFR\";\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"LFR\";\n  src: url(" + ___CSS_LOADER_URL___2___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: \"LFR\";\n  src: url(" + ___CSS_LOADER_URL___3___ + ") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"LFR\";\n  src: url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"LFR\";\n  src: url(" + ___CSS_LOADER_URL___5___ + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: italic;\n}\n", ""]);



/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "/home/miyuruasuka/Geph2/next.geph.io",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);














Object(_home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 26, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/components/Default404';
var t_1 = _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/miyuruasuka/Geph2/next.geph.io/src/lel.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/miyuruasuka/Geph2/next.geph.io/src/lel.jsx */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/miyuruasuka/Geph2/next.geph.io/src/lel.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "home/miyuruasuka/Geph2/next.geph.io/src/lel.jsx";
  }
}), universalOptions);
t_1.template = '/home/miyuruasuka/Geph2/next.geph.io/src/lel.jsx';
var t_2 = _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/miyuruasuka/Geph2/next.geph.io/src/Main.en.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/miyuruasuka/Geph2/next.geph.io/src/Main.en.jsx */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/miyuruasuka/Geph2/next.geph.io/src/Main.en.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "home/miyuruasuka/Geph2/next.geph.io/src/Main.en.jsx";
  }
}), universalOptions);
t_2.template = '/home/miyuruasuka/Geph2/next.geph.io/src/Main.en.jsx';
var t_3 = _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/miyuruasuka/Geph2/next.geph.io/src/Main.zht.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/miyuruasuka/Geph2/next.geph.io/src/Main.zht.jsx */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/miyuruasuka/Geph2/next.geph.io/src/Main.zht.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "home/miyuruasuka/Geph2/next.geph.io/src/Main.zht.jsx";
  }
}), universalOptions);
t_3.template = '/home/miyuruasuka/Geph2/next.geph.io/src/Main.zht.jsx';
var t_4 = _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/miyuruasuka/Geph2/next.geph.io/src/Main.zhs.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/miyuruasuka/Geph2/next.geph.io/src/Main.zhs.jsx */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/miyuruasuka/Geph2/next.geph.io/src/Main.zhs.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "home/miyuruasuka/Geph2/next.geph.io/src/Main.zhs.jsx";
  }
}), universalOptions);
t_4.template = '/home/miyuruasuka/Geph2/next.geph.io/src/Main.zhs.jsx';
var t_5 = _home_miyuruasuka_Geph2_next_geph_io_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.jsx */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.jsx";
  }
}), universalOptions);
t_5.template = '/home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.jsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/components/Default404': t_0,
  '/home/miyuruasuka/Geph2/next.geph.io/src/lel.jsx': t_1,
  '/home/miyuruasuka/Geph2/next.geph.io/src/Main.en.jsx': t_2,
  '/home/miyuruasuka/Geph2/next.geph.io/src/Main.zht.jsx': t_3,
  '/home/miyuruasuka/Geph2/next.geph.io/src/Main.zhs.jsx': t_4,
  '/home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.jsx': t_5
}); // Not Found Template

var notFoundTemplate = "/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "404");
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    lang: "en"
  });
});

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    lang: "zht"
  });
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    lang: "zhs"
  });
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(11);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(7);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/app.css
var app = __webpack_require__(17);

// EXTERNAL MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.css
var PlanPicker = __webpack_require__(64);

// EXTERNAL MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/common/l10n.js
var l10n = __webpack_require__(4);

// CONCATENATED MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.l10n.jsx


Object(l10n["a" /* addl10n */])({
  "account-overview": {
    en: "Account overview",
    zht: "用戶信息",
    zhs: "用户信息"
  },
  username: {
    en: "Username",
    zht: "用戶名",
    zhs: "用户名"
  },
  subscription: {
    en: "Subscription",
    zht: "用戶等級",
    zhs: "用户等级"
  },
  expires: {
    en: "Expiry date",
    zht: "截止日期",
    zhs: "截止日期"
  },
  free: {
    en: "Free",
    zht: "免費",
    zhs: "免费"
  },
  "extend-blurb": {
    en: "You may purchase or extend a Plus account below:",
    zhs: "可在下方购买/续订Plus",
    zht: "可在下方購買/續訂Plus"
  },
  "subscription-blurb": {
    en: function en(onClick) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, "Your subscription automatically renews when it expires.", " ", external_react_default.a.createElement("button", {
        onClick: onClick,
        className: "btn btn-secondary btn-sm"
      }, "Cancel"));
    },
    zht: function zht(onClick) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, "\u5C07\u5728\u904E\u671F\u6642\u81EA\u52D5\u7E8C\u8A02\u8FF7\u9727\u901APlus\u3002", " ", external_react_default.a.createElement("button", {
        onClick: onClick,
        className: "btn btn-secondary btn-sm"
      }, "\u53D6\u6D88"));
    },
    zhs: function zhs(onClick) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, "\u5C06\u5728\u8FC7\u671F\u65F6\u81EA\u52A8\u7EED\u8BA2\u8FF7\u96FE\u901APlus\u3002", " ", external_react_default.a.createElement("button", {
        onClick: onClick,
        className: "btn btn-secondary btn-sm"
      }, "\u53D6\u6D88"));
    }
  },
  "flat-rate-blurb": {
    en: external_react_default.a.createElement(external_react_default.a.Fragment, null, "We offer a flat rate of", " ", external_react_default.a.createElement("b", null, "\u20AC5/month regardless of subscription length"), ". ", external_react_default.a.createElement("br", null), "Please choose the length most convenient for you."),
    zht: external_react_default.a.createElement(external_react_default.a.Fragment, null, "\u7121\u8AD6\u8A02\u95B1\u6642\u9593\u9577\u77ED\uFF0C", external_react_default.a.createElement("b", null, "\u6BCF\u6708\u7684\u8CBB\u7387\u56FA\u5B9A\u70BA\u20AC5\u3002"), external_react_default.a.createElement("br", null), "\u8ACB\u9078\u64C7\u5C0D\u60A8\u6700\u65B9\u4FBF\u7684\u6642\u9577\u3002"),
    zhs: external_react_default.a.createElement(external_react_default.a.Fragment, null, "\u65E0\u8BBA\u8BA2\u9605\u65F6\u95F4\u957F\u77ED\uFF0C", external_react_default.a.createElement("b", null, "\u6BCF\u6708\u7684\u8D39\u7387\u56FA\u5B9A\u4E3A\u20AC5\u3002 "), external_react_default.a.createElement("br", null), "\u8BF7\u9009\u62E9\u5BF9\u60A8\u6700\u65B9\u4FBF\u7684\u65F6\u957F\u3002")
  },
  days: {
    en: "days",
    zht: "天",
    zhs: "天"
  },
  fee: {
    en: "fee",
    zht: "手續費",
    zhs: "手续费"
  },
  step1: {
    en: "Step 1",
    zht: "第一步",
    zhs: "第一步"
  },
  step2: {
    en: "Step 2",
    zht: "第二步",
    zhs: "第二步"
  },
  "choose-a-plan-length": {
    en: "Choose a plan length",
    zht: "選擇時長",
    zhs: "选择时长"
  },
  month: {
    en: "month",
    zht: "個月",
    zhs: "个月"
  },
  months: {
    en: "months",
    zht: "個月",
    zhs: "个月"
  },
  "pay-for-plan": {
    en: "Pay for plan",
    zht: "付款",
    zhs: "付款"
  },
  "credit-debit": {
    en: "Credit/debit cards",
    zht: "國際信用卡/借記卡",
    zhs: "国际信用卡/借记卡"
  },
  alipay: {
    en: "Alipay",
    zht: "支付寶",
    zhs: "支付宝"
  },
  "for-X-months": {
    en: function en(x) {
      return "for " + x + " months";
    },
    zht: function zht(x) {
      return "（" + x + "個月）";
    },
    zhs: function zhs(x) {
      return "（" + x + "个月）";
    }
  },
  "discount-code": {
    en: "Discount code",
    zht: "優惠碼",
    zhs: "优惠码"
  },
  "check-out": {
    en: "Pay now",
    zht: "支付",
    zhs: "支付"
  },
  "automatically-renew": {
    en: "Automatically renew subscription",
    zht: "自動續訂",
    zhs: "自动续订"
  },
  "automatically-renew-blurb": {
    en: function en(euroCents, months) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, "You'll be charged\xA0", external_react_default.a.createElement("b", null, "\u20AC", (euroCents / 100).toFixed(2), " every ", months * 30, " days"), " ", "until you cancel");
    },
    zht: function zht(euroCents, months) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", null, "\u6BCF", months * 30, "\u5929\u81EA\u52D5\u6263\u8CBB\u20AC", (euroCents / 100).toFixed(2)), "\uFF0C\u76F4\u5230\u60A8\u53D6\u6D88");
    },
    zhs: function zhs(euroCents, months) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("b", null, "\u6BCF", months * 30, "\u5929\u81EA\u52A8\u6263\u8D39\u20AC", (euroCents / 100).toFixed(2)), "\uFF0C\u76F4\u5230\u60A8\u53D6\u6D88");
    }
  },
  "no-renew-blurb": {
    en: function en(months) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, "Your subscription will ", external_react_default.a.createElement("b", null, "expire in ", months * 30, " days"), " unless manually renewed");
    },
    zht: function zht(months) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, "\u82E5\u4E0D\u624B\u52D5\u7E8C\u8CBB\uFF0C\u5C07\u65BC", external_react_default.a.createElement("b", null, months * 30, "\u5929"), "\u5F8C\u81EA\u52D5\u53D6\u6D88");
    },
    zhs: function zhs(months) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, "\u82E5\u4E0D\u624B\u52A8\u7EED\u8D39\uFF0C\u5C06\u4E8E", external_react_default.a.createElement("b", null, months * 30, "\u5929"), "\u540E\u81EA\u52A8\u53D6\u6D88");
    }
  }
});
// EXTERNAL MODULE: external "bootstrap/dist/css/bootstrap.min.css"
var bootstrap_min_css_ = __webpack_require__(29);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(19);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(12);

// CONCATENATED MODULE: /home/miyuruasuka/Geph2/next.geph.io/src/billing/PlanPicker.jsx











var STRIPEKEY = "pk_live_Wk781YzANKGuLBl2NzFkRu5n00YdYjObFY";

var toCNY = function toCNY(eur) {
  return 7.8 * eur;
};

var toUSD = function toUSD(eur) {
  return 1.1 * eur;
};

var PlanPicker_Selector = function Selector(props) {
  return external_react_default.a.createElement("div", {
    className: "card",
    onClick: props.onClick
  }, external_react_default.a.createElement("div", {
    className: "card-body",
    style: {
      display: "flex",
      alignItems: "center",
      borderStyle: props.selected ? "solid" : "none",
      borderColor: "#007bff",
      borderWidth: "2px"
    }
  }, external_react_default.a.createElement("ion-icon", {
    name: props.selected ? "radio-button-on" : "radio-button-off",
    size: "large",
    style: {
      verticalAlign: "middle",
      marginRight: "12px"
    }
  }), external_react_default.a.createElement("b", null, props.description), external_react_default.a.createElement("span", {
    className: "text-muted",
    style: {
      marginLeft: "auto"
    }
  }, external_react_default.a.createElement("b", null, "\u20AC", 5 * props.months), " / ", 30 * props.months, " ", props.localize("days"), " ", external_react_default.a.createElement("br", null), external_react_default.a.createElement("small", null))));
};

var toQueryString = function toQueryString(params) {
  var esc = encodeURIComponent;
  return Object.keys(params).map(function (k) {
    return esc(k) + "=" + esc(params[k]);
  }).join("&");
};

var PlanPicker_getUserInfo = function getUserInfo(uname, pwd) {
  var response;
  return regenerator_default.a.async(function getUserInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regenerator_default.a.awrap(external_axios_default.a.get("/billing/userinfo?" + toQueryString({
            username: uname,
            password: pwd
          })));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var PlanPicker_cancelStripe = function cancelStripe(uname, pwd) {
  var response;
  return regenerator_default.a.async(function cancelStripe$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regenerator_default.a.awrap(external_axios_default.a.get("/billing/stripe-cancel?" + toQueryString({
            username: uname,
            password: pwd
          })));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getStripeID = function getStripeID(months, autoRenew) {
  if (months === 1) {
    return autoRenew ? "plan_GIE5voityP0f9u" : "sku_GIE7Nx2J7ZhXI8";
  } else if (months === 3) {
    return autoRenew ? "plan_GIE5eNXYZsLlMX" : "sku_GIE8CZ6qSEzd0t";
  } else {
    return autoRenew ? "plan_GIE5JhURW2fFND" : "sku_GIE8iScbw4grMT";
  }
};

var PlanPicker_Payer = function Payer(props) {
  var _useState = Object(external_react_["useState"])("card"),
      _useState2 = slicedToArray_default()(_useState, 2),
      payMethod = _useState2[0],
      setPayMethod = _useState2[1];

  var euroCents = 500 * props.months * (payMethod === "alipay" ? 1.05 : 1);
  var months = props.months;
  var renewable = !(props.userInfo && props.userInfo.expires) && payMethod !== "alipay";

  var _useState3 = Object(external_react_["useState"])(renewable),
      _useState4 = slicedToArray_default()(_useState3, 2),
      autoRenew = _useState4[0],
      setAutoRenew = _useState4[1];

  var stripeCheckout = function stripeCheckout() {
    var _ref2;

    var stripe, _ref, error;

    return regenerator_default.a.async(function stripeCheckout$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            stripe = window.Stripe(STRIPEKEY);
            _context3.next = 3;
            return regenerator_default.a.awrap(stripe.redirectToCheckout({
              items: [(_ref2 = {}, defineProperty_default()(_ref2, autoRenew ? "plan" : "sku", getStripeID(months, autoRenew)), defineProperty_default()(_ref2, "quantity", 1), _ref2)],
              successUrl: window.location.href,
              cancelUrl: window.location.href,
              customerEmail: props.userInfo.username + "@receipts.geph.io"
            }));

          case 3:
            _ref = _context3.sent;
            error = _ref.error;

            if (error) {
              alert(error);
            }

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  var checkout = function checkout() {
    return regenerator_default.a.async(function checkout$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(payMethod === "card")) {
              _context4.next = 5;
              break;
            }

            _context4.next = 3;
            return regenerator_default.a.awrap(stripeCheckout());

          case 3:
            _context4.next = 6;
            break;

          case 5:
            window.location.href = "/billing/alipay?" + toQueryString({
              username: props.userInfo.username,
              password: props.userInfo.password,
              months: months
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    });
  };

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_helmet_["Helmet"], null, external_react_default.a.createElement("script", {
    src: "https://js.stripe.com/v3/"
  })), external_react_default.a.createElement("nav", {
    className: "nav nav-tabs"
  }, external_react_default.a.createElement("a", {
    className: payMethod === "card" ? "nav-link active" : "nav-link",
    onClick: function onClick(_) {
      return setPayMethod("card");
    }
  }, external_react_default.a.createElement("img", {
    src: __webpack_require__(65),
    className: "cardbrand"
  }), external_react_default.a.createElement("img", {
    src: __webpack_require__(66),
    className: "cardbrand"
  }), props.localize("credit-debit")), external_react_default.a.createElement("a", {
    className: payMethod === "alipay" ? "nav-link active" : "nav-link",
    onClick: function onClick(_) {
      setPayMethod("alipay");
      setAutoRenew(false);
    }
  }, external_react_default.a.createElement("img", {
    src: __webpack_require__(67),
    className: "cardbrand"
  }), props.localize("alipay"), "\xA0", external_react_default.a.createElement("span", {
    className: "badge badge-warning"
  }, "5% ", props.localize("fee")))), external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-body"
  }, external_react_default.a.createElement("span", {
    style: {
      fontSize: "150%"
    }
  }, external_react_default.a.createElement("b", {
    className: "text-success"
  }, "\u20AC", (euroCents / 100).toFixed(2)), "\xA0", external_react_default.a.createElement("span", {
    className: "text-muted"
  }, props.localize("for-X-months")(months))), external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
    className: "text-muted"
  }, "\u2248 ", external_react_default.a.createElement("b", null, "$", (toUSD(euroCents) / 100).toFixed(1), " "), "USD\xA0\xA0\xB7\xA0\xA0\u2248", " ", external_react_default.a.createElement("b", null, "\xA5", (toCNY(euroCents) / 100).toFixed(0)), " RMB"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("div", {
    className: "input-group input-group-sm"
  }, external_react_default.a.createElement("div", {
    className: "input-group-prepend"
  }, external_react_default.a.createElement("span", {
    className: "input-group-text"
  }, props.localize("discount-code"))), external_react_default.a.createElement("input", {
    type: "text",
    maxlength: "10",
    style: {
      width: "128px",
      fontFamily: "monospace",
      fontSize: "80%"
    },
    disabled: true
  })), external_react_default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary mb-3 mt-2",
    onClick: function onClick(_) {
      return checkout();
    }
  }, props.localize("check-out")), external_react_default.a.createElement("div", {
    className: "form-check",
    style: {
      visibility: renewable ? "visible" : "hidden"
    }
  }, external_react_default.a.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    id: "inputAutoRenew",
    checked: autoRenew,
    disabled: !renewable,
    onClick: function onClick(_) {
      return setAutoRenew(!autoRenew);
    }
  }), external_react_default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "inputAutoRenew"
  }, "\xA0", props.localize("automatically-renew"))), external_react_default.a.createElement("small", null, autoRenew ? props.localize("automatically-renew-blurb")(euroCents, months) : props.localize("no-renew-blurb")(months)))));
};

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

var PlanPicker_Planner = function Planner(props) {
  var _useState5 = Object(external_react_["useState"])(1),
      _useState6 = slicedToArray_default()(_useState5, 2),
      months = _useState6[0],
      setMonths = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = slicedToArray_default()(_useState7, 2),
      userInfo = _useState8[0],
      setUserInfo = _useState8[1];

  var getLang = function getLang() {
    try {
      if (navigator.language === "zh-CN") {
        return "zhs";
      }

      if (/zh/.test(navigator.language)) {
        return "zht";
      }

      return "en";
    } catch (e) {
      return "en";
    }
  };

  var localize = Object(l10n["b" /* l10n */])(getLang());

  try {
    var toGo = function toGo() {
      var info;
      return regenerator_default.a.async(function toGo$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return regenerator_default.a.awrap(PlanPicker_getUserInfo(sessionStorage.getItem("username"), sessionStorage.getItem("password")));

            case 3:
              info = _context5.sent;
              console.log("INFO");
              console.log(info);
              info.password = sessionStorage.getItem("password");
              setUserInfo(info);
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 10]]);
    };

    if (!userInfo) {
      toGo();
    }
  } catch (e) {}

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_helmet_["Helmet"], null, external_react_default.a.createElement("meta", {
    charset: "UTF-8"
  })), external_react_default.a.createElement("section", {
    className: "whiteback"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-2"
  }), external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("h3", null, localize("account-overview"))), external_react_default.a.createElement("div", {
    className: "col-md-2"
  })), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-2"
  }), external_react_default.a.createElement("div", {
    className: "col-md"
  }, external_react_default.a.createElement("b", null, localize("username")), " ", external_react_default.a.createElement("br", null), userInfo && userInfo.username), external_react_default.a.createElement("div", {
    className: "col-md"
  }, external_react_default.a.createElement("b", null, localize("subscription")), " ", external_react_default.a.createElement("br", null), userInfo && (userInfo.type === "free" ? localize("free") : "Plus")), userInfo && userInfo.expires && external_react_default.a.createElement("div", {
    className: "col-md"
  }, external_react_default.a.createElement("b", null, localize("expires")), " ", external_react_default.a.createElement("br", null), new Date(userInfo.expires * 1000).toISOString().substring(0, 10)), external_react_default.a.createElement("div", {
    className: "col-md-2"
  })), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-2"
  }), external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("p", null, userInfo && (userInfo.subscription ? localize("subscription-blurb")(function _callee(_) {
    return regenerator_default.a.async(function _callee$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regenerator_default.a.awrap(PlanPicker_cancelStripe(userInfo.username, userInfo.password));

          case 2:
            window.location.reload();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    });
  }) : localize("extend-blurb")))), external_react_default.a.createElement("div", {
    className: "col-md-2"
  })))), userInfo && !userInfo.subscription && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("section", {
    className: "lightback"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-2"
  }), external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("h3", null, external_react_default.a.createElement("span", {
    className: "badge badge-secondary"
  }, localize("step1")), " ", "\xA0", localize("choose-a-plan-length")), external_react_default.a.createElement("p", {
    className: "hero-text"
  }, localize("flat-rate-blurb")), external_react_default.a.createElement(PlanPicker_Selector, {
    localize: localize,
    selected: months === 1,
    description: "1 " + localize("month"),
    months: 1,
    onClick: function onClick(_) {
      return setMonths(1);
    }
  }), external_react_default.a.createElement(PlanPicker_Selector, {
    localize: localize,
    selected: months === 3,
    description: "3 " + localize("months"),
    months: 3,
    onClick: function onClick(_) {
      return setMonths(3);
    }
  }), external_react_default.a.createElement(PlanPicker_Selector, {
    localize: localize,
    selected: months === 12,
    description: "12 " + localize("months"),
    months: 12,
    onClick: function onClick(_) {
      return setMonths(12);
    }
  })), external_react_default.a.createElement("div", {
    className: "col-md-2"
  })))), external_react_default.a.createElement("section", {
    className: "lightback"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-2"
  }), external_react_default.a.createElement("div", {
    className: "col"
  }, external_react_default.a.createElement("h3", null, external_react_default.a.createElement("span", {
    className: "badge badge-secondary"
  }, localize("step2")), " ", "\xA0 ", localize("pay-for-plan")), external_react_default.a.createElement(PlanPicker_Payer, {
    userInfo: userInfo,
    localize: localize,
    months: months
  })), external_react_default.a.createElement("div", {
    className: "col-md-2"
  }))))));
};

/* harmony default export */ var billing_PlanPicker = __webpack_exports__["default"] = (PlanPicker_Planner);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(36);
module.exports = __webpack_require__(42);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(20)["default"];

var _require = __webpack_require__(21),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/home/miyuruasuka/Geph2/next.geph.io/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(20)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(21),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(22),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/home/miyuruasuka/Geph2/next.geph.io/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(22),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(16);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 9,
	"./": 9,
	"./index": 9,
	"./index.js": 9
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(43);

var _interopRequireDefault = __webpack_require__(44);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(45));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(46));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(47);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(48)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("/home/miyuruasuka/Geph2/next.geph.io/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== "undefined") {
  var target = document.getElementById("root");
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept("./App", function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo-bg.02b32555.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LibreFranklin-Regular.817fb321.ttf";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LibreFranklin-RegularItalic.1b746baa.ttf";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LibreFranklin-Medium.c1ed12e2.ttf";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LibreFranklin-Bold.4fe3bce8.ttf";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/LibreFranklin-BoldItalic.3453f7c2.ttf";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo-naked.4655e64a.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.80dd36d9.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/screenshot-en.82651771.png";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIGJ5IE1hcnN1cGlsYW1pIC0tPgo8c3ZnCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iNzY2IgogICBoZWlnaHQ9Ijc2OCIKICAgdmlld0JveD0iLTIuNjE5NzcwMDQgLTIuNjE5NzcwMDQgOTIuNTY1MjA4MDggOTIuODM0MTY3MDgiCiAgIGlkPSJzdmc4Mzc1Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzODM3NyIgLz4KICA8cGF0aAogICAgIGQ9Ik0gMCwxMi40MDE4MyAzNS42ODczNyw3LjU0MTYgMzUuNzAyOTcsNDEuOTY0MzUgMC4wMzMyMSw0Mi4xNjc0OCB6IG0gMzUuNjcwMzcsMzMuNTI5MDYgMC4wMjc3LDM0LjQ1MzMyIC0zNS42Njk4OSwtNC45MDQxIC0wLjAwMiwtMjkuNzc5NzIgeiBNIDM5Ljk5NjQ0LDYuOTA1OTUgODcuMzE0NjIsMCBsIDAsNDEuNTI3IC00Ny4zMTgxOCwwLjM3NTY1IHogTSA4Ny4zMjU2Nyw0Ni4yNTQ3MSA4Ny4zMTQ1Nyw4Ny41OTQ2MyAzOS45OTY0LDgwLjkxNjI1IDM5LjkzMDEsNDYuMTc3NjcgeiIKICAgICBpZD0icGF0aDEzIiAvPgo8L3N2Zz4KPCEtLSB2ZXJzaW9uOiAyMDExMDMxMSwgb3JpZ2luYWwgc2l6ZTogODcuMzI1NjY4IDg3LjU5NDYyNywgYm9yZGVyOiAzJSAtLT4K"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjEwMDAiCiAgIHZpZXdCb3g9IjAgMCAxMDAwIDExODcuMTk4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGhlaWdodD0iMTE4Ny4xOTgiCiAgIGlkPSJzdmcyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iQXBwbGVfMTk5OC5zdmciPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTEwIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzOCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzNjYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzA1IgogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjE3Njc3NjciCiAgICAgaW5rc2NhcGU6Y3g9Ii0xMDY2LjUwNDUiCiAgICAgaW5rc2NhcGU6Y3k9Ijk2NC45NDY2OSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz4KICA8cGF0aAogICAgIGQ9Im0gOTc5LjA0MTg0LDkyNS4xODc4NSBjIC0xNy45NTM5Nyw0MS40NzczNyAtMzkuMjA1NjMsNzkuNjU3MDUgLTYzLjgyODI0LDExNC43NTg5NSAtMzMuNTYyOTgsNDcuODUyOCAtNjEuMDQzNTYsODAuOTc2MSAtODIuMjIxOTQsOTkuMzY5OCAtMzIuODMwMTMsMzAuMTkyIC02OC4wMDUyOSw0NS42NTQ0IC0xMDUuNjcyMDMsNDYuNTMzOCAtMjcuMDQwODksMCAtNTkuNjUxMiwtNy42OTQ2IC05Ny42MTEwNSwtMjMuMzAzNSAtMzguMDg0NDIsLTE1LjUzNTggLTczLjA4MzcxLC0yMy4yMzAzIC0xMDUuMDg1NzgsLTIzLjIzMDMgLTMzLjU2Mjk2LDAgLTY5LjU1ODg4LDcuNjk0NSAtMTA4LjA2MTAxLDIzLjIzMDMgLTM4LjU2MDgsMTUuNjA4OSAtNjkuNjI0ODQsMjMuNzQzMiAtOTMuMzc1NDEsMjQuNTQ5MyAtMzYuMTIwNDksMS41Mzg5IC03Mi4xMjM3LC0xNC4zNjMyIC0xMDguMDYxMDEsLTQ3Ljc3OTYgLTIyLjkzNzExLC0yMC4wMDU5IC01MS42MjY4NCwtNTQuMzAxNyAtODUuOTk1OTIsLTEwMi44ODc0IEMgOTIuMjU0MTc2LDk4NC41NDU5MiA2MS45Mzc1ODgsOTI0LjM4MTc1IDM4LjE4NzAyOCw4NTUuNzkwMiAxMi43NTA5OTUsNzgxLjcwMjUyIDAsNzA5Ljk1OTg2IDAsNjQwLjUwMzYxIDAsNTYwLjk0MTgxIDE3LjE5MTg1OSw0OTIuMzIwOTQgNTEuNjI2ODY5LDQzNC44MTY4OCA3OC42ODk3NTQsMzg4LjYyNzUzIDExNC42OTI5OSwzNTIuMTkxOTIgMTU5Ljc1MzgxLDMyNS40NDQxMyBjIDQ1LjA2MDg2LC0yNi43NDc3NSA5My43NDkxNCwtNDAuMzc4MTIgMTQ2LjE4MjEyLC00MS4yNTAxOSAyOC42ODk3MSwwIDY2LjMxMjUsOC44NzQ0IDExMy4wNjYxMywyNi4zMTU0MiA0Ni42MjE3NCwxNy40OTk2NCA3Ni41NTcyNywyNi4zNzQwNCA4OS42ODE5OCwyNi4zNzQwNCA5LjgxMjQsMCA0My4wNjc1OCwtMTAuMzc2NjkgOTkuNDQzMSwtMzEuMDY0MDUgNTMuMzEyMzcsLTE5LjE4NTEyIDk4LjMwNzI0LC0yNy4xMjg4NyAxMzUuMTY3ODcsLTIzLjk5OTc1IDk5Ljg4MjgsOC4wNjA5OCAxNzQuOTIzMTMsNDcuNDM1MTggMjI0LjgyNzg5LDExOC4zNzE3NCAtODkuMzMwMjMsNTQuMTI1NzggLTEzMy41MTkwMywxMjkuOTM1NTYgLTEzMi42Mzk2NiwyMjcuMTg3NTMgMC44MDYxLDc1Ljc1MTE1IDI4LjI4NjY4LDEzOC43ODc5NSA4Mi4yOTUyLDE4OC44MzkzIDI0LjQ3NjAzLDIzLjIzMDIyIDUxLjgxMDA4LDQxLjE4NDIxIDgyLjIyMTg2LDUzLjkzNTIyIC02LjU5NTI1LDE5LjEyNjQ4IC0xMy41NTcsMzcuNDQ2ODggLTIwLjk1ODQ2LDU1LjAzNDQ2IHogTSA3NDkuOTYzNjYsMjMuNzUxMjM3IGMgMCw1OS4zNzM0MyAtMjEuNjkxMzgsMTE0LjgxMDIzMyAtNjQuOTI3NDgsMTY2LjEyMTk2MyAtNTIuMTc2NTIsNjAuOTk5NjEgLTExNS4yODY1OCw5Ni4yNDgwMyAtMTgzLjcyNDI2LDkwLjY4NTk3IC0wLjg3MjA0LC03LjEyMjk4IC0xLjM3NzY5LC0xNC42MTk2NyAtMS4zNzc2OSwtMjIuNDk3NDMgMCwtNTYuOTk4NDMgMjQuODEzMTUsLTExNy45OTgwMSA2OC44NzczOCwtMTY3Ljg3MzQ1MyAyMS45OTkwOSwtMjUuMjUyODEgNDkuOTc4LC00Ni4yNTAxOCA4My45MDczOCwtNjMuMDAwMTggQyA2ODYuNTc1MDcsMTAuNjg4MDI3IDcxOC41OTkxMywxLjU2MzEyNzQgNzQ4LjcxNzgzLDUuMjczNDM3NmUtNCA3NDkuNTk3MjcsNy45Mzc4Mjc0IDc0OS45NjM2NiwxNS44NzU2MjcgNzQ5Ljk2MzY2LDIzLjc1MDQ2NyBaIgogICAgIGlkPSJwYXRoNCIKICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgo8L3N2Zz4K"

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tux.16e23531.svg";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHZpZXdCb3g9Ii0xNDcgLTcwIDI5NCAzNDUiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzI3IgogICBzb2RpcG9kaTpkb2NuYW1lPSJhbmRyb2lkLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICh1bmtub3duKSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMzMiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMSIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTg5IgogICAgIGlkPSJuYW1lZHZpZXcyOSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMS4zNjgxMTU5IgogICAgIGlua3NjYXBlOmN4PSItMTE3LjA3MzIyIgogICAgIGlua3NjYXBlOmN5PSIyMTcuNjQ4NzIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyNyIgLz4KICA8ZwogICAgIGZpbGw9IiNhNGM2MzkiCiAgICAgaWQ9ImcxNyIKICAgICBzdHlsZT0iZmlsbDojMDQwNDA0O2ZpbGwtb3BhY2l0eToxIj4KICAgIDx1c2UKICAgICAgIHN0cm9rZS13aWR0aD0iMTQuNCIKICAgICAgIHhsaW5rOmhyZWY9IiNiIgogICAgICAgc3Ryb2tlPSIjRkZGIgogICAgICAgaWQ9InVzZTIiCiAgICAgICBzdHlsZT0iZmlsbDojMDQwNDA0O2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHVzZQogICAgICAgeGxpbms6aHJlZj0iI2EiCiAgICAgICB0cmFuc2Zvcm09InNjYWxlKC0xLDEpIgogICAgICAgaWQ9InVzZTQiCiAgICAgICBzdHlsZT0iZmlsbDojMDQwNDA0O2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPGcKICAgICAgIGlkPSJhIgogICAgICAgc3Ryb2tlPSIjRkZGIgogICAgICAgc3Ryb2tlLXdpZHRoPSI3LjIiCiAgICAgICBzdHlsZT0iZmlsbDojMDQwNDA0O2ZpbGwtb3BhY2l0eToxIj4KICAgICAgPHJlY3QKICAgICAgICAgcng9IjYuNSIKICAgICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMjkpIgogICAgICAgICBoZWlnaHQ9Ijg2IgogICAgICAgICB3aWR0aD0iMTMiCiAgICAgICAgIHk9Ii04NiIKICAgICAgICAgeD0iMTQiCiAgICAgICAgIGlkPSJyZWN0NiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzA0MDQwNDtmaWxsLW9wYWNpdHk6MSIgLz4KICAgICAgPHJlY3QKICAgICAgICAgaWQ9ImMiCiAgICAgICAgIHJ4PSIyNCIKICAgICAgICAgaGVpZ2h0PSIxMzMiCiAgICAgICAgIHdpZHRoPSI0OCIKICAgICAgICAgeT0iNDEiCiAgICAgICAgIHg9Ii0xNDMiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwNDA0MDQ7ZmlsbC1vcGFjaXR5OjEiIC8+CiAgICAgIDx1c2UKICAgICAgICAgeT0iOTciCiAgICAgICAgIHg9Ijg1IgogICAgICAgICB4bGluazpocmVmPSIjYyIKICAgICAgICAgaWQ9InVzZTkiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwNDA0MDQ7ZmlsbC1vcGFjaXR5OjEiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgaWQ9ImIiCiAgICAgICBzdHlsZT0iZmlsbDojMDQwNDA0O2ZpbGwtb3BhY2l0eToxIj4KICAgICAgPGVsbGlwc2UKICAgICAgICAgY3k9IjQxIgogICAgICAgICByeD0iOTEiCiAgICAgICAgIHJ5PSI4NCIKICAgICAgICAgaWQ9ImVsbGlwc2UxMiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzA0MDQwNDtmaWxsLW9wYWNpdHk6MSIgLz4KICAgICAgPHJlY3QKICAgICAgICAgcng9IjIyIgogICAgICAgICBoZWlnaHQ9IjE4MiIKICAgICAgICAgd2lkdGg9IjE4MiIKICAgICAgICAgeT0iMjAiCiAgICAgICAgIHg9Ii05MSIKICAgICAgICAgaWQ9InJlY3QxNCIKICAgICAgICAgc3R5bGU9ImZpbGw6IzA0MDQwNDtmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDwvZz4KICA8L2c+CiAgPGcKICAgICBzdHJva2U9IiNGRkYiCiAgICAgc3Ryb2tlLXdpZHRoPSI3LjIiCiAgICAgZmlsbD0iI0ZGRiIKICAgICBpZD0iZzI1Ij4KICAgIDxwYXRoCiAgICAgICBkPSJtLTk1IDQ0LjVoMTkwIgogICAgICAgaWQ9InBhdGgxOSIgLz4KICAgIDxjaXJjbGUKICAgICAgIGN4PSItNDIiCiAgICAgICByPSI0IgogICAgICAgaWQ9ImNpcmNsZTIxIiAvPgogICAgPGNpcmNsZQogICAgICAgY3g9IjQyIgogICAgICAgcj0iNCIKICAgICAgIGlkPSJjaXJjbGUyMyIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// Module
exports.push([module.i, "h3 {\n  padding-bottom: 20px;\n}\n", ""]);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/visa.e0ebaf2c.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaGVpZ2h0PSI0MDUuNjMyMjYiCiAgIHdpZHRoPSI2NTAiCiAgIHZpZXdCb3g9IjAgMCA2NDkuOTk5OTggNDA1LjYzMjI2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4OTUiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTg5OSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+QXNzZXQgMTwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4NzkiPgogICAgPHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTg3NyI+LmF7b3BhY2l0eTowO30uYntmaWxsOiNmZmY7fS5je2ZpbGw6I2ZmNWYwMDt9LmR7ZmlsbDojZWIwMDFiO30uZXtmaWxsOiNmNzllMWI7fTwvc3R5bGU+CiAgPC9kZWZzPgogIDx0aXRsZQogICAgIGlkPSJ0aXRsZTg4MSI+QXNzZXQgMTwvdGl0bGU+CiAgPHJlY3QKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7ZmlsbDojZmY1ZjAwO3N0cm9rZS13aWR0aDo1LjQ5MzgxMTYxIgogICAgIGNsYXNzPSJjIgogICAgIHg9IjIyOS44MzI2MyIKICAgICB5PSI0Ny4yOTc3MzciCiAgICAgd2lkdGg9IjE5MC40MTU1MSIKICAgICBoZWlnaHQ9IjMxMS4wMDQ3IgogICAgIGlkPSJyZWN0ODg3IiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ViMDAxYjtzdHJva2Utd2lkdGg6NS40OTM4MTE2MSIKICAgICBjbGFzcz0iZCIKICAgICBkPSJtIDI0OS40NDU1NCwyMDIuODI3NTYgYSAxOTcuNDQ3NTksMTk3LjQ0NzU5IDAgMCAxIDc1LjUzOTkxLC0xNTUuNDc0ODY3IDE5Ny43NzcyMiwxOTcuNzc3MjIgMCAxIDAgMCwzMTEuMDA0Njc3IDE5Ny40NDc1OSwxOTcuNDQ3NTkgMCAwIDEgLTc1LjUzOTkxLC0xNTUuNTI5ODEgeiIKICAgICBpZD0icGF0aDg4OSIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiNmNzllMWI7c3Ryb2tlLXdpZHRoOjUuNDkzODExNjEiCiAgICAgY2xhc3M9ImUiCiAgICAgZD0ibSA2MjYuMTAxMywzMjUuMzk0NSB2IC02LjM3MjgyIGggMi43NDY5IHYgLTEuMzE4NTIgaCAtNi41Mzc2NCB2IDEuMzE4NTIgaCAyLjU4MjEgdiA2LjM3MjgyIHogbSAxMi42OTA3LDAgdiAtNy42OTEzNCBoIC0xLjk3Nzc4IGwgLTIuMzA3NCw1LjQ5MzgxIC0yLjMwNzQsLTUuNDkzODEgaCAtMS45Nzc3NyB2IDcuNjkxMzQgaCAxLjQyODM5IHYgLTUuODIzNDQgbCAyLjE0MjU5LDQuOTk5MzcgaCAxLjQ4MzMzIGwgMi4xNDI1OCwtNC45OTkzNyB2IDUuODIzNDQgeiIKICAgICBpZD0icGF0aDg5MSIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiNmNzllMWI7c3Ryb2tlLXdpZHRoOjUuNDkzODExNjEiCiAgICAgY2xhc3M9ImUiCiAgICAgZD0ibSA2NDUsMjAyLjgyNzU2IGEgMTk3Ljc3NzIyLDE5Ny43NzcyMiAwIDAgMSAtMzIwLjAxNDU1LDE1NS40NzQ4NyAxOTcuNzc3MjIsMTk3Ljc3NzIyIDAgMCAwIDAsLTMxMS4wMDQ2NzUgQSAxOTcuNzc3MjIsMTk3Ljc3NzIyIDAgMCAxIDY0NSwyMDIuNzcyNjIgWiIKICAgICBpZD0icGF0aDg5MyIgLz4KPC9zdmc+Cg=="

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAzNiAzNiIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iQWxpcGF5LnN2ZyIKICAgd2lkdGg9IjM2IgogICBoZWlnaHQ9IjM2IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKHVua25vd24pIj48ZGVmcwogICAgIGlkPSJkZWZzMTEiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk4OSIKICAgICBpZD0ibmFtZWR2aWV3OSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6em9vbT0iNC45MTY2NjY3IgogICAgIGlua3NjYXBlOmN4PSIxOCIKICAgICBpbmtzY2FwZTpjeT0iMTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPjxwYXRoCiAgICAgZD0ibSAzNiw1IHYgMjcgYSA0LDQgMCAwIDEgLTQsNCBIIDUgQSA1LDUgMCAwIDEgMCwzMSBWIDUgQSA1LDUgMCAwIDEgNSwwIGggMjYgYSA1LDUgMCAwIDEgNSw1IHoiCiAgICAgaWQ9InBhdGgyIgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgc3R5bGU9ImZpbGw6IzViOWVkZCIgLz48cGF0aAogICAgIGQ9Ik0gMjMuOTEsMjEuMTcgQyAyNiwxNy42NDEgMjcsMTMgMjcsMTMgaCAtNyB2IC0yIGggOSBWIDkgSCAyMCBWIDUuMDIgTCAxNiw1IFYgOSBIIDcgdiAyIGggOSB2IDIgSCA4IHYgMiBjIDAsMCAxMy4xMjUsMCAxNC41LC0wLjAxIC0wLjI4MSwwLjc5MyAtMC45OSwzLjE4OSAtMi4wMTUsNS4wNTUgQyAxNi42MDIsMTguODQgMTMuMDE5LDE4IDEwLjE0MywxOCBjIC02Ljg5OCwwIC04LjQyOCwzLjQ4MSAtOC4xMDIsNi42NjQgMC4yNjMsMi41NCAyLjE0NSw2LjI0OCA3Ljg5Myw2LjI0OCA1LjI1MSwwIDkuNDksLTMuMDIzIDEyLjA5OSwtNi42MjIgQyAyNy4wMDgsMjYuNTkxIDMyLjI2MywyOC45MDkgMzYsMzEgViAyNC45NjIgQyAzMi4wNDksMjMuNjAxIDI3Ljg5LDIyLjUzMSAyMy45MSwyMS4xNyBaIE0gOS4wOTgsMjguNzYyIGMgLTQuODU4LDAgLTUuNjEsLTIuNzUgLTUuNjk0LC00LjM5MiAtMC4wNzksLTEuNDM2IDAuODg2LC00LjEzMiA2LjM3MSwtNC4xMzIgMi4wNCwwIDUuMjc2LDEuMDQ2IDguOTA5LDIuNTcgLTIuMDUzLDIuNzA4IC01LjM0Myw1Ljk1NCAtOS41ODYsNS45NTQgeiIKICAgICBpZD0icGF0aDQiCiAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIiAvPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTYiPjxyZGY6UkRGPjxyZGY6RGVzY3JpcHRpb24KICAgICAgICAgYWJvdXQ9Imh0dHBzOi8vaWNvbnNjb3V0LmNvbS9sZWdhbCNsaWNlbnNlcyIKICAgICAgICAgZGM6dGl0bGU9ImFsaXBheSIKICAgICAgICAgZGM6ZGVzY3JpcHRpb249ImFsaXBheSIKICAgICAgICAgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiCiAgICAgICAgIGRjOmRhdGU9IjIwMTctMTItMTUiCiAgICAgICAgIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIKICAgICAgICAgZGM6bGFuZ3VhZ2U9ImVuIj48ZGM6Y3JlYXRvcj48cmRmOkJhZz48cmRmOmxpPkljb25zODwvcmRmOmxpPjwvcmRmOkJhZz48L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PC9zdmc+"

/***/ })
/******/ ]);
});