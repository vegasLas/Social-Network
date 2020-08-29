(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./src/components/Dialogs/AddMessageForm/AddMessageForm.tsx":
/*!******************************************************************!*\
  !*** ./src/components/Dialogs/AddMessageForm/AddMessageForm.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/Formcontrols/FormControl */ "./src/common/Formcontrols/FormControl.tsx");
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/validators */ "./src/utils/validators.ts");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");




var maxLength50 = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_2__["maxLengthCreator"])(50);
var AddMessageForm = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: props.handleSubmit },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])('Enter your message', 'newMessageBody', [_utils_validators__WEBPACK_IMPORTED_MODULE_2__["required"], maxLength50], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["TextArea"])),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Send message")));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({ form: 'dialog-add-message-form' })(AddMessageForm));


/***/ }),

/***/ "./src/components/Dialogs/Dialogs.module.css":
/*!***************************************************!*\
  !*** ./src/components/Dialogs/Dialogs.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dialogs":"FLZR5XDHsgBzWRWql8jmD","dialogsItems":"_1bpWUAea69ADkg6PcRZYne","active":"_3354n9z0zMrIZzp5JHzH0G","messages":"_3ntcvRUiDP1cgY9XPxynZ7","message":"j77t8frOY3zeWKfCVf9KQ"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Dialogs/Dialogs.tsx":
/*!********************************************!*\
  !*** ./src/components/Dialogs/Dialogs.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddMessageForm_AddMessageForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddMessageForm/AddMessageForm */ "./src/components/Dialogs/AddMessageForm/AddMessageForm.tsx");
/* harmony import */ var _Items_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Items/Messages */ "./src/components/Dialogs/Items/Messages.tsx");
/* harmony import */ var _Items_DialogItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Items/DialogItem */ "./src/components/Dialogs/Items/DialogItem.tsx");
/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dialogs.module.css */ "./src/components/Dialogs/Dialogs.module.css");
/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Dialogs_module_css__WEBPACK_IMPORTED_MODULE_4__);





var Dialogs = function (props) {
    var state = props.dialogsPage;
    var dialogsElement = state.dialogs.map(function (d) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Items_DialogItem__WEBPACK_IMPORTED_MODULE_3__["default"], { name: d.name, key: d.id, id: d.id }); });
    var messagesElement = state.messages.map(function (m) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Items_Messages__WEBPACK_IMPORTED_MODULE_2__["default"], { message: m.message, key: m.id }); });
    var addNewMessage = function (values) {
        props.sendMessageCreator(values.newMessageBody);
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.dialogsItems }, dialogsElement),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.messages },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, messagesElement)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddMessageForm_AddMessageForm__WEBPACK_IMPORTED_MODULE_1__["default"], { onSubmit: addNewMessage }));
};
/* harmony default export */ __webpack_exports__["default"] = (Dialogs);


/***/ }),

/***/ "./src/components/Dialogs/DialogsContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Dialogs/DialogsContainer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/dialogs-reducer */ "./src/redux/dialogs-reducer.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialogs */ "./src/components/Dialogs/Dialogs.tsx");



var mapStateToProps = function (state) {
    return {
        dialogsPage: state.dialogsPage
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, { sendMessageCreator: _redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_0__["sendMessageCreator"] })(_Dialogs__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/components/Dialogs/Items/DialogItem.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Dialogs/Items/DialogItem.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dialogs.module.css */ "./src/components/Dialogs/Dialogs.module.css");
/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var DialogItem = function (props) {
    var path = '/dialogs/' + props.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dialog + ' ' + _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], { to: path }, props.name));
};
/* harmony default export */ __webpack_exports__["default"] = (DialogItem);


/***/ }),

/***/ "./src/components/Dialogs/Items/Messages.tsx":
/*!***************************************************!*\
  !*** ./src/components/Dialogs/Items/Messages.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dialogs.module.css */ "./src/components/Dialogs/Dialogs.module.css");
/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__);


var Message = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dialog }, props.message);
};
/* harmony default export */ __webpack_exports__["default"] = (Message);


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
//# sourceMappingURL=2.js.map