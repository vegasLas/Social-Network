(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/common/Formcontrols/FormControl.module.css":
/*!********************************************************!*\
  !*** ./src/common/Formcontrols/FormControl.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"formControl":"_2nOIdKIx50DHeoKg-Iu4Kv","error":"zkkYBI-jxT4jScAS_ui0s","formSummaryError":"_18Ph-vU8WjXrx_aqlTlcjW"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/common/Formcontrols/FormControl.tsx":
/*!*************************************************!*\
  !*** ./src/common/Formcontrols/FormControl.tsx ***!
  \*************************************************/
/*! exports provided: TextArea, input, createField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createField", function() { return createField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControl_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControl.module.css */ "./src/common/Formcontrols/FormControl.module.css");
/* harmony import */ var _FormControl_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormControl_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var FormControl = function (_a) {
    var _b = _a.meta, touched = _b.touched, error = _b.error, children = _a.children;
    var hasError = touched && error;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _FormControl_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formControl + " " + (hasError ? _FormControl_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error : "") },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children),
        hasError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, error)));
};
var TextArea = function (props) {
    //const { input, meta, child, ...restProps } = props;
    var input = props.input, meta = props.meta, restProps = __rest(props, ["input", "meta"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormControl, __assign({}, props),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", __assign({}, input, restProps)));
};
var input = function (props) {
    //const { input, meta, child, ...restProps } = props;
    var input = props.input, meta = props.meta, restProps = __rest(props, ["input", "meta"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormControl, __assign({}, props),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", __assign({}, input, restProps)));
};
function createField(placeHolder, name, validators, component, props, text) {
    if (props === void 0) { props = {}; }
    if (text === void 0) { text = ""; }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], __assign({ placeholder: placeHolder, name: name, validate: validators, component: component }, props)),
        " ",
        text);
}


/***/ }),

/***/ "./src/components/Login/Login.tsx":
/*!****************************************!*\
  !*** ./src/components/Login/Login.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Formcontrols/FormControl */ "./src/common/Formcontrols/FormControl.tsx");
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validators */ "./src/utils/validators.ts");
/* harmony import */ var _common_Formcontrols_FormControl_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Formcontrols/FormControl.module.css */ "./src/common/Formcontrols/FormControl.module.css");
/* harmony import */ var _common_Formcontrols_FormControl_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_Formcontrols_FormControl_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/auth-reducer */ "./src/redux/auth-reducer.ts");








var LoginForm = function (_a) {
    var handleSubmit = _a.handleSubmit, captchaUrl = _a.captchaUrl, error = _a.error;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: handleSubmit },
        Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])('Email', 'email', [_utils_validators__WEBPACK_IMPORTED_MODULE_2__["required"]], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["input"]),
        Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])('Password', 'password', [_utils_validators__WEBPACK_IMPORTED_MODULE_2__["required"]], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["input"], { type: 'password' }),
        Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])(undefined, 'rememberMe', [], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["input"], { type: 'checkbox' }),
        captchaUrl && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: captchaUrl }),
        captchaUrl && Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])('enter symbols', 'captcha', [_utils_validators__WEBPACK_IMPORTED_MODULE_2__["required"]], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["input"]),
        error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _common_Formcontrols_FormControl_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formSummaryError }, error),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            "   ",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Login"),
            " ")));
};
var LoginReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({ form: 'login' })(LoginForm);
var Login = function (_a) {
    var captchaUrl = _a.captchaUrl, isAuth = _a.isAuth, login = _a.login;
    var onSubmit = function (formData) {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (isAuth) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], { to: './profile' });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Login"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginReduxForm, { captchaUrl: captchaUrl, onSubmit: onSubmit })));
};
var mapStateToProps = function (state) { return ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
}); };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, { login: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_7__["login"], captchaDisplayed: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_7__["captchaDisplayed"] })(Login));


/***/ }),

/***/ "./src/utils/validators.ts":
/*!*********************************!*\
  !*** ./src/utils/validators.ts ***!
  \*********************************/
/*! exports provided: required, maxLengthCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthCreator", function() { return maxLengthCreator; });
var required = function (value) {
  if (value) return undefined;
  return 'Field is required';
};
var maxLengthCreator = function (maxLength) {
  return function (value) {
    if (value.length > maxLength) return "Max length is " + maxLength + " symbols";
    return undefined;
  };
};

/***/ })

}]);
//# sourceMappingURL=4.js.map