/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"2":1,"3":1,"4":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/redux-store */ "./src/redux/redux-store.ts");
/* harmony import */ var _common_Preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/Preloader */ "./src/common/Preloader.tsx");
/* harmony import */ var _components_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NavBar/Navbar */ "./src/components/NavBar/Navbar.tsx");
/* harmony import */ var _components_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Header/HeaderContainer */ "./src/components/Header/HeaderContainer.tsx");
/* harmony import */ var _hoc_Suspense__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hoc/Suspense */ "./src/hoc/Suspense.tsx");
/* harmony import */ var _redux_app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redux/app-reducer */ "./src/redux/app-reducer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var Login = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () { return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./components/Login/Login */ "./src/components/Login/Login.tsx")); });
var ProfileContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () { return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./components/Profile/ProfileContainer */ "./src/components/Profile/ProfileContainer.tsx")); });
var UsersContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./components/Users/UsersContainer */ "./src/components/Users/UsersContainer.tsx")); });
var DialogsContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () { return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./components/Dialogs/DialogsContainer */ "./src/components/Dialogs/DialogsContainer.tsx")); });
var ProfileConteincerWithSuspens = Object(_hoc_Suspense__WEBPACK_IMPORTED_MODULE_9__["default"])(ProfileContainer);
var LoginWithSuspens = Object(_hoc_Suspense__WEBPACK_IMPORTED_MODULE_9__["default"])(Login);
var UsersContainerWithSuspens = Object(_hoc_Suspense__WEBPACK_IMPORTED_MODULE_9__["default"])(UsersContainer);
var DialogsContainerWithSuspens = Object(_hoc_Suspense__WEBPACK_IMPORTED_MODULE_9__["default"])(DialogsContainer);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        this.props.initializeApp();
    };
    App.prototype.render = function () {
        if (!this.props.initialized) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Preloader__WEBPACK_IMPORTED_MODULE_6__["default"], null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'app-wrapper' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_HeaderContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "app-wrapper-content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "main-screen" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/', exact: true },
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/profile" }),
                            " "),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/profile/:userId?', render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileConteincerWithSuspens, null); } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/login', render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginWithSuspens, null); } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/users', render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UsersContainerWithSuspens, null); } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: '/dialogs', render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogsContainerWithSuspens, null); } })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", { className: "footer" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium ea tempore debitis maiores fuga ipsam necessitatibus aliquid, repudiandae ab eum facere consequatur labore autem optio suscipit harum sunt. Id.")));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var mapStateToProps = function (state) { return ({
    initialized: state.app.initialized
}); };
var AppConteiner = Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, { initializeApp: _redux_app_reducer__WEBPACK_IMPORTED_MODULE_10__["initializeApp"] }))(App);
var MainApp = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], { store: _redux_redux_store__WEBPACK_IMPORTED_MODULE_5__["default"] },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppConteiner, null))));
};
/* harmony default export */ __webpack_exports__["default"] = (MainApp);


/***/ }),

/***/ "./src/api/AuthAPI.ts":
/*!****************************!*\
  !*** ./src/api/AuthAPI.ts ***!
  \****************************/
/*! exports provided: authAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authAPI", function() { return authAPI; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api/api.ts");

var authAPI = {
  me: function () {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].get("auth/me").then(function (res) {
      return res.data;
    });
  },
  login: function (email, password, rememberMe, captcha) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].post("auth/login", {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha
    }).then(function (res) {
      return res.data;
    });
  },
  logout: function () {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].delete("auth/login").then(function (res) {
      return res.data;
    });
  },
  getCaptcha: function () {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].get("security/get-captcha-url").then(function (res) {
      return res.data;
    });
  }
};

/***/ }),

/***/ "./src/api/ProfileAPI.ts":
/*!*******************************!*\
  !*** ./src/api/ProfileAPI.ts ***!
  \*******************************/
/*! exports provided: profileAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAPI", function() { return profileAPI; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api/api.ts");

var profileAPI = {
  getProfile: function (userId) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].get("profile/" + userId).then(function (res) {
      return res.data;
    });
  },
  saveProfile: function (profile) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].put("profile", profile).then(function (res) {
      return res.data;
    });
  },
  getStatus: function (userId) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].get("profile/status/" + userId).then(function (res) {
      return res.data;
    });
  },
  updateStatus: function (status) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].put("profile/status", {
      status: status
    }).then(function (res) {
      return res.data;
    });
  },
  setPhoto: function (photoFile) {
    var formData = new FormData();
    formData.append("image", photoFile);
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].put("profile/photo", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (res) {
      return res.data;
    });
  }
};

/***/ }),

/***/ "./src/api/UsersAPI.ts":
/*!*****************************!*\
  !*** ./src/api/UsersAPI.ts ***!
  \*****************************/
/*! exports provided: usersAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersAPI", function() { return usersAPI; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api/api.ts");

var usersAPI = {
  getUsers: function (currentPage, pageSize, term, followed) {
    if (currentPage === void 0) {
      currentPage = 1;
    }

    if (pageSize === void 0) {
      pageSize = 10;
    }

    if (term === void 0) {
      term = "";
    }

    if (followed === void 0) {
      followed = null;
    }

    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].get("users?page=" + currentPage + "&count=" + pageSize + "&term=" + term + (followed === null ? '' : "&friend=" + followed)).then(function (res) {
      return res.data;
    });
  },
  getFriendsOfAllUsers: function (friend) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].get("users?friend=" + friend).then(function (res) {
      return res.data;
    });
  },
  follow: function (userId) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].post("follow/" + userId).then(function (res) {
      return res.data;
    });
  },
  unfollow: function (userId) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["instance"].delete("follow/" + userId).then(function (res) {
      return res.data;
    });
  }
};

/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/*! exports provided: instance, ResultCodeEnum, LogResultCodeenum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultCodeEnum", function() { return ResultCodeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogResultCodeenum", function() { return LogResultCodeenum; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '19935fd5-6e17-47c2-8544-ba33f3051235'
  }
});
var ResultCodeEnum;

(function (ResultCodeEnum) {
  ResultCodeEnum[ResultCodeEnum["Success"] = 0] = "Success";
  ResultCodeEnum[ResultCodeEnum["Error"] = 1] = "Error";
})(ResultCodeEnum || (ResultCodeEnum = {}));

var LogResultCodeenum;

(function (LogResultCodeenum) {
  LogResultCodeenum[LogResultCodeenum["captcha"] = 10] = "captcha";
  LogResultCodeenum[LogResultCodeenum["Success"] = 0] = "Success";
  LogResultCodeenum[LogResultCodeenum["Error"] = 1] = "Error";
})(LogResultCodeenum || (LogResultCodeenum = {}));

/***/ }),

/***/ "./src/common/Preloader.module.css":
/*!*****************************************!*\
  !*** ./src/common/Preloader.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loader":"_1wUJ1isQHX31Aa44cZKH-k"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/common/Preloader.tsx":
/*!**********************************!*\
  !*** ./src/common/Preloader.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pictures_loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pictures/loader.gif */ "./src/pictures/loader.gif");
/* harmony import */ var _Preloader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Preloader.module.css */ "./src/common/Preloader.module.css");
/* harmony import */ var _Preloader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Preloader_module_css__WEBPACK_IMPORTED_MODULE_2__);



var Preloader = function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { backgroundColor: 'white' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: _Preloader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loader, src: _pictures_loader_gif__WEBPACK_IMPORTED_MODULE_1__["default"] }));
};
/* harmony default export */ __webpack_exports__["default"] = (Preloader);


/***/ }),

/***/ "./src/components/Header/Header.module.css":
/*!*************************************************!*\
  !*** ./src/components/Header/Header.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"AWpe5ZMBfFmCz_4FjEMqG","logo":"_2EZVSNevguvUjROEKmNSdK","loginBlock":"WS4YFLRgdmhYVgutSVeX-"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pictures_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pictures/logo.png */ "./src/pictures/logo.png");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var Header = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", { className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], { className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header__link, to: '/' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo, src: _pictures_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"] })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.loginBlock }, props.isAuth
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                props.login,
                " -",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: props.logout }, "Log out"))
            : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], { to: '/login' }, "Login")));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);


/***/ }),

/***/ "./src/components/Header/HeaderContainer.tsx":
/*!***************************************************!*\
  !*** ./src/components/Header/HeaderContainer.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/auth-reducer */ "./src/redux/auth-reducer.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var HeaderContainer = /** @class */ (function (_super) {
    __extends(HeaderContainer, _super);
    function HeaderContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderContainer.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], { isAuth: this.props.isAuth, login: this.props.login, logout: this.props.logout });
    };
    return HeaderContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var mapStateToProps = function (state) { return ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
}); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, { logout: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["logout"] })(HeaderContainer));


/***/ }),

/***/ "./src/components/NavBar/Navbar.module.css":
/*!*************************************************!*\
  !*** ./src/components/NavBar/Navbar.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"nav":"_3LZpYMH2_z-NvK1k06LuHF","item":"_3kJ9jCU9BvXfSiR17mwAtb"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/NavBar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/NavBar/Navbar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/NavBar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var Navbar = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nav },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/profile', activeClassName: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink }, "Profile")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/dialogs', activeClassName: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink }, "Dialogs")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/users', activeClassName: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink }, "Users")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/news', activeClassName: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink }, "News")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/music', activeClassName: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink }, "Music")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: '/setings', activeClassName: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.activeLink }, "Setings"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);


/***/ }),

/***/ "./src/hoc/Suspense.tsx":
/*!******************************!*\
  !*** ./src/hoc/Suspense.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function createSuspense(WrappedComponent) {
    return function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...") },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, props)));
    };
}
/* harmony default export */ __webpack_exports__["default"] = (createSuspense);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.tsx");





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();


/***/ }),

/***/ "./src/pictures/loader.gif":
/*!*********************************!*\
  !*** ./src/pictures/loader.gif ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7ac311d055c54393751d9cc5e3185f1c.gif");

/***/ }),

/***/ "./src/pictures/logo.png":
/*!*******************************!*\
  !*** ./src/pictures/logo.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5349c2327cb74af8fca47efeb6c7a9f6.png");

/***/ }),

/***/ "./src/redux/app-reducer.ts":
/*!**********************************!*\
  !*** ./src/redux/app-reducer.ts ***!
  \**********************************/
/*! exports provided: Actions, initializeApp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-reducer */ "./src/redux/auth-reducer.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};


var initialState = {
  initialized: false
};

var appReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case "INITIALIZED_SUCCESS":
      return __assign(__assign({}, state), {
        initialized: true
      });

    default:
      return state;
  }
};

var Actions = {
  initializedSuccess: function () {
    return {
      type: "INITIALIZED_SUCCESS"
    };
  }
};
var initializeApp = function () {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var promise;
      return __generator(this, function (_a) {
        promise = dispatch(Object(_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["getAuthUserData"])());
        Promise.all([promise]).then(function () {
          dispatch(Actions.initializedSuccess());
        });
        return [2
        /*return*/
        ];
      });
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = (appReducer);

/***/ }),

/***/ "./src/redux/auth-reducer.ts":
/*!***********************************!*\
  !*** ./src/redux/auth-reducer.ts ***!
  \***********************************/
/*! exports provided: getAuthUserData, login, logout, captchaDisplayed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUserData", function() { return getAuthUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaDisplayed", function() { return captchaDisplayed; });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../api/api */ "./src/api/api.ts");
/* harmony import */ var _api_AuthAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/AuthAPI */ "./src/api/AuthAPI.ts");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};




var initialState = {
  userid: 1,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

var authReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case "SET_USER_DATA":
    case "SET_CAPTCHA":
      return __assign(__assign({}, state), action.payload);

    default:
      return state;
  }
};

var actions = {
  setAuthUserData: function (userid, email, login, isAuth) {
    return {
      type: "SET_USER_DATA",
      payload: {
        userid: userid,
        email: email,
        login: login,
        isAuth: isAuth
      }
    };
  },
  setCaptcha: function (captchaUrl) {
    return {
      type: "SET_CAPTCHA",
      payload: {
        captchaUrl: captchaUrl
      }
    };
  }
};
var getAuthUserData = function () {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data, _a, id, login_1, email;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , _api_AuthAPI__WEBPACK_IMPORTED_MODULE_1__["authAPI"].me()];

          case 1:
            data = _b.sent();

            if (data.resultCode === 0) {
              _a = data.data, id = _a.id, login_1 = _a.login, email = _a.email;
              dispatch(actions.setAuthUserData(id, email, login_1, true));
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var login = function (email, password, rememberMe, captcha) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data, message;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _api_AuthAPI__WEBPACK_IMPORTED_MODULE_1__["authAPI"].login(email, password, rememberMe, captcha)];

          case 1:
            data = _a.sent();

            if (data.resultCode === _api_api__WEBPACK_IMPORTED_MODULE_0__["LogResultCodeenum"].Success) {
              dispatch(getAuthUserData());
            } else {
              message = data.messages.length > 0 ? data.messages[0] : 'Some error';
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["stopSubmit"])('login', {
                _error: message
              }));

              if (data.resultCode === _api_api__WEBPACK_IMPORTED_MODULE_0__["LogResultCodeenum"].captcha) {
                dispatch(captchaDisplayed());
              }
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var logout = function () {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _api_AuthAPI__WEBPACK_IMPORTED_MODULE_1__["authAPI"].logout()];

          case 1:
            data = _a.sent();

            if (data.resultCode === _api_api__WEBPACK_IMPORTED_MODULE_0__["ResultCodeEnum"].Success) {
              dispatch(actions.setAuthUserData(null, null, null, false));
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var captchaDisplayed = function () {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data, captcha;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _api_AuthAPI__WEBPACK_IMPORTED_MODULE_1__["authAPI"].getCaptcha()];

          case 1:
            data = _a.sent();
            captcha = data.url;
            dispatch(actions.setCaptcha(captcha));
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./src/redux/dialogs-reducer.ts":
/*!**************************************!*\
  !*** ./src/redux/dialogs-reducer.ts ***!
  \**************************************/
/*! exports provided: sendMessageCreator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageCreator", function() { return sendMessageCreator; });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

var SEND_MESSAGE = 'SEND_MESSAGE';
var initialState = {
  dialogs: [{
    id: 1,
    name: 'Pantiley'
  }, {
    id: 2,
    name: 'Skrepka'
  }, {
    id: 3,
    name: 'Felix'
  }, {
    id: 4,
    name: 'Toro'
  }, {
    id: 5,
    name: 'Viking'
  }, {
    id: 6,
    name: 'Axiles'
  }],
  messages: [{
    id: 1,
    message: 'Hi',
    isSituation: true
  }, {
    id: 2,
    message: 'How is your nothing?0',
    isSituation: false
  }, {
    id: 3,
    message: 'AWESOME',
    isSituation: true
  }, {
    id: 4,
    message: 'WO WO',
    isSituation: false
  }, {
    id: 5,
    message: 'What did you think?',
    isSituation: true
  }]
};

var dialogsReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case SEND_MESSAGE:
      var body = action.newMessageBody;
      return __assign(__assign({}, state), {
        messages: __spreadArrays(state.messages, [{
          id: 6,
          message: body,
          isSituation: false
        }])
      });

    default:
      return state;
  }
};

var sendMessageCreator = function (newMessageBody) {
  return {
    type: SEND_MESSAGE,
    newMessageBody: newMessageBody
  };
};
/* harmony default export */ __webpack_exports__["default"] = (dialogsReducer);

/***/ }),

/***/ "./src/redux/profile-reducer.ts":
/*!**************************************!*\
  !*** ./src/redux/profile-reducer.ts ***!
  \**************************************/
/*! exports provided: actions, getInformationProfile, getUserProfile, getStatus, updateStatus, setPhoto, saveProfile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInformationProfile", function() { return getInformationProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatus", function() { return updateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPhoto", function() { return setPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfile", function() { return saveProfile; });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _api_ProfileAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/ProfileAPI */ "./src/api/ProfileAPI.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};




var initialState = {
  posts: [{
    id: 1,
    message: 'first',
    likesCount: 12
  }, {
    id: 2,
    message: 'TRATATTA',
    likesCount: 11
  }, {
    id: 3,
    message: 'Pleti your live',
    likesCount: 11
  }, {
    id: 4,
    message: 'ccC',
    likesCount: 11
  }],
  profile: null,
  status: ''
};

var profileReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case "ADD_POST":
      {
        var newPost = {
          id: 5,
          message: action.newPostText,
          likesCount: 1
        };
        return __assign(__assign({}, state), {
          posts: __spreadArrays(state.posts, [newPost])
        });
      }

    case "SET_STATUS":
      {
        return __assign(__assign({}, state), {
          status: action.status
        });
      }

    case "SET_USER_PROFILE":
      {
        return __assign(__assign({}, state), {
          profile: action.profile
        });
      }

    case "DELETE_POST":
      {
        return __assign(__assign({}, state), {
          posts: state.posts.filter(function (post) {
            return post.id != action.postId;
          })
        });
      }

    case "SET_PHOTO":
      {
        return __assign(__assign({}, state), {
          profile: __assign(__assign({}, state.profile), {
            photos: action.photos
          })
        });
      }

    default:
      return state;
  }
};

var actions = {
  addPostActionCreator: function (newPostText) {
    return {
      type: "ADD_POST",
      newPostText: newPostText
    };
  },
  setUserProfile: function (profile) {
    return {
      type: "SET_USER_PROFILE",
      profile: profile
    };
  },
  setStatus: function (status) {
    return {
      type: "SET_STATUS",
      status: status
    };
  },
  deletePost: function (postId) {
    return {
      type: "DELETE_POST",
      postId: postId
    };
  },
  setPhotoSuccess: function (photos) {
    return {
      type: "SET_PHOTO",
      photos: photos
    };
  }
};
var getInformationProfile = function (userID, authorizedUserId, history) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var userId;
      return __generator(this, function (_a) {
        userId = userID;

        if (!userId) {
          userId = authorizedUserId;

          if (!userID) {
            history.push("/login");
          }
        }

        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId));
        return [2
        /*return*/
        ];
      });
    });
  };
};
var getUserProfile = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _api_ProfileAPI__WEBPACK_IMPORTED_MODULE_2__["profileAPI"].getProfile(userId)];

          case 1:
            data = _a.sent();
            dispatch(actions.setUserProfile(data));
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var getStatus = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _api_ProfileAPI__WEBPACK_IMPORTED_MODULE_2__["profileAPI"].getStatus(userId)];

          case 1:
            data = _a.sent();
            dispatch(actions.setStatus(data));
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var updateStatus = function (status) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _api_ProfileAPI__WEBPACK_IMPORTED_MODULE_2__["profileAPI"].updateStatus(status)];

          case 1:
            data = _a.sent();

            if (data.resultCode === _api_api__WEBPACK_IMPORTED_MODULE_0__["ResultCodeEnum"].Success) {
              dispatch(actions.setStatus(status));
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var setPhoto = function (photo) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _api_ProfileAPI__WEBPACK_IMPORTED_MODULE_2__["profileAPI"].setPhoto(photo)];

          case 1:
            data = _a.sent();

            if (data.resultCode === _api_api__WEBPACK_IMPORTED_MODULE_0__["ResultCodeEnum"].Success) {
              dispatch(actions.setPhotoSuccess(data.data.photos));
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var saveProfile = function (profile) {
  return function (dispatch, getState) {
    return __awaiter(void 0, void 0, void 0, function () {
      var userId, data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            userId = getState().auth.userid;
            return [4
            /*yield*/
            , _api_ProfileAPI__WEBPACK_IMPORTED_MODULE_2__["profileAPI"].saveProfile(profile)];

          case 1:
            data = _a.sent();

            if (data.resultCode === _api_api__WEBPACK_IMPORTED_MODULE_0__["ResultCodeEnum"].Success) {
              dispatch(getUserProfile(userId));
            } else {
              dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["stopSubmit"])('ProfileData', {
                _error: data.messages[0]
              }));
              return [2
              /*return*/
              , Promise.reject(data.messages[0])];
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = (profileReducer);

/***/ }),

/***/ "./src/redux/redux-store.ts":
/*!**********************************!*\
  !*** ./src/redux/redux-store.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-reducer */ "./src/redux/auth-reducer.ts");
/* harmony import */ var _dialogs_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs-reducer */ "./src/redux/dialogs-reducer.ts");
/* harmony import */ var _profile_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-reducer */ "./src/redux/profile-reducer.ts");
/* harmony import */ var _sidebar_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-reducer */ "./src/redux/sidebar-reducer.ts");
/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usersReducer */ "./src/redux/usersReducer.ts");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-reducer */ "./src/redux/app-reducer.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");









var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_7__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  dialogsPage: _dialogs_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  profilePage: _profile_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  sidebarPage: _sidebar_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  usersPage: _usersReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_5__["reducer"],
  app: _app_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
}); //@ts-ignore

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_7__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(reducers, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"]))); //@ts-ignore

window.__store__ = store;
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/redux/sidebar-reducer.ts":
/*!**************************************!*\
  !*** ./src/redux/sidebar-reducer.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initialState = {};

var sidebarReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (sidebarReducer);

/***/ }),

/***/ "./src/redux/usersReducer.ts":
/*!***********************************!*\
  !*** ./src/redux/usersReducer.ts ***!
  \***********************************/
/*! exports provided: actions, requestUsers, follow, unfollow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestUsers", function() { return requestUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "follow", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfollow", function() { return unfollow; });
/* harmony import */ var _api_UsersAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/UsersAPI */ "./src/api/UsersAPI.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};




var updateObjectInArray = __webpack_require__(/*! ../utils/object-helers */ "./src/utils/object-helers.ts").updateObjectInArray;

var initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
  filter: {
    friend: null,
    term: ''
  }
};

var usersReducer = function (state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case "FOLLOW":
      return __assign(__assign({}, state), {
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      });

    case "UNFOLLOW":
      return __assign(__assign({}, state), {
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
        })
      });

    case "SET_USERS":
      return __assign(__assign({}, state), {
        users: action.users
      });

    case "SET_CURRENT_PAGE":
      return __assign(__assign({}, state), {
        currentPage: action.currentPage
      });

    case "SET_FILTER":
      return __assign(__assign({}, state), {
        filter: action.payload
      });

    case "SET_TOTAL_USERS_COUNT":
      return __assign(__assign({}, state), {
        totalUsersCount: action.totalUsersCount
      });

    case "TOGGLE_IS_FETCHING":
      return __assign(__assign({}, state), {
        isFetching: action.isFetching
      });

    case "TOGGLE_IS_FOLLO0WING_PROGRESS":
      return __assign(__assign({}, state), {
        followingProgress: action.isFetching ? __spreadArrays(state.followingProgress, [action.userId]) : state.followingProgress.filter(function (id) {
          return id != action.userId;
        })
      });

    default:
      return state;
  }
};

var actions = {
  followSuccess: function (userId) {
    return {
      type: 'FOLLOW',
      userId: userId
    };
  },
  unfollowSuccess: function (userId) {
    return {
      type: 'UNFOLLOW',
      userId: userId
    };
  },
  setUsers: function (users) {
    return {
      type: 'SET_USERS',
      users: users
    };
  },
  setFilter: function (filter) {
    return {
      type: 'SET_FILTER',
      payload: filter
    };
  },
  setCurrentPage: function (currentPage) {
    return {
      type: 'SET_CURRENT_PAGE',
      currentPage: currentPage
    };
  },
  setTotalUsersCount: function (totalUsersCount) {
    return {
      type: 'SET_TOTAL_USERS_COUNT',
      totalUsersCount: totalUsersCount
    };
  },
  toggleIsFetching: function (isFetching) {
    return {
      type: 'TOGGLE_IS_FETCHING',
      isFetching: isFetching
    };
  },
  toggleIsFillowingProgress: function (isFetching, userId) {
    return {
      type: 'TOGGLE_IS_FOLLO0WING_PROGRESS',
      isFetching: isFetching,
      userId: userId
    };
  }
};
var requestUsers = function (page, pageSize, filter) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      var UsersData;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            dispatch(actions.toggleIsFetching(true));
            dispatch(actions.setCurrentPage(page));
            dispatch(actions.setFilter(filter));
            return [4
            /*yield*/
            , _api_UsersAPI__WEBPACK_IMPORTED_MODULE_0__["usersAPI"].getUsers(page, pageSize, filter.term, filter.friend)];

          case 1:
            UsersData = _a.sent();
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setUsers(UsersData.items));
            dispatch(actions.setTotalUsersCount(UsersData.totalCount));
            return [2
            /*return*/
            ];
        }
      });
    });
  };
};

var _followUngollowFlow = function (dispatch, userId, apiMethod, actionCreator) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          dispatch(actions.toggleIsFillowingProgress(true, userId));
          return [4
          /*yield*/
          , apiMethod(userId)];

        case 1:
          data = _a.sent();

          if (data.resultCode === _api_api__WEBPACK_IMPORTED_MODULE_1__["ResultCodeEnum"].Success) {
            dispatch(actionCreator(userId));
          }

          dispatch(actions.toggleIsFillowingProgress(false, userId));
          return [2
          /*return*/
          ];
      }
    });
  });
};

var follow = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _followUngollowFlow(dispatch, userId, _api_UsersAPI__WEBPACK_IMPORTED_MODULE_0__["usersAPI"].follow.bind(_api_UsersAPI__WEBPACK_IMPORTED_MODULE_0__["usersAPI"]), actions.followSuccess)];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
var unfollow = function (userId) {
  return function (dispatch) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , _followUngollowFlow(dispatch, userId, _api_UsersAPI__WEBPACK_IMPORTED_MODULE_0__["usersAPI"].unfollow.bind(_api_UsersAPI__WEBPACK_IMPORTED_MODULE_0__["usersAPI"]), actions.unfollowSuccess)];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };
};
/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/utils/object-helers.ts":
/*!************************************!*\
  !*** ./src/utils/object-helers.ts ***!
  \************************************/
/*! exports provided: updateObjectInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObjectInArray", function() { return updateObjectInArray; });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var updateObjectInArray = function (items, itemId, objPropName, newObjProps) {
  return items.map(function (u) {
    if (u[objPropName] === itemId) {
      return __assign(__assign({}, u), newObjProps);
    }

    return u;
  });
};

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi @babel/polyfill ./src/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.tsx */"./src/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map