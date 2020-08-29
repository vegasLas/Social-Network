(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./src/components/Profile/MyPosts/MyPostContainer.tsx":
/*!************************************************************!*\
  !*** ./src/components/Profile/MyPosts/MyPostContainer.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../redux/profile-reducer */ "./src/redux/profile-reducer.ts");
/* harmony import */ var _MyPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyPosts */ "./src/components/Profile/MyPosts/MyPosts.tsx");



var mapStateToProps = function (state) {
    return {
        posts: state.profilePage.posts,
    };
};
var MyPostsContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, { addPost: _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_1__["actions"].addPostActionCreator })(_MyPosts__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (MyPostsContainer);


/***/ }),

/***/ "./src/components/Profile/MyPosts/MyPosts.module.css":
/*!***********************************************************!*\
  !*** ./src/components/Profile/MyPosts/MyPosts.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"postsBlock":"_3pUFiQO1PidQrILd_ruo2l","posts":"_2qIdeI83pgEwkdYAY-1tHx"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Profile/MyPosts/MyPosts.tsx":
/*!****************************************************!*\
  !*** ./src/components/Profile/MyPosts/MyPosts.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyPosts_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyPosts.module.css */ "./src/components/Profile/MyPosts/MyPosts.module.css");
/* harmony import */ var _MyPosts_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MyPosts_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/validators */ "./src/utils/validators.ts");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/Formcontrols/FormControl */ "./src/common/Formcontrols/FormControl.tsx");
/* harmony import */ var _Post_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post/Post */ "./src/components/Profile/MyPosts/Post/Post.tsx");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var maxLength = Object(_utils_validators__WEBPACK_IMPORTED_MODULE_2__["maxLengthCreator"])(30);
var AddNewPostForm = function (_a) {
    var handleSubmit = _a.handleSubmit;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: handleSubmit },
        Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_4__["createField"])('Post message', 'newPostText', [_utils_validators__WEBPACK_IMPORTED_MODULE_2__["required"], maxLength], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_4__["TextArea"]),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Add post"));
};
var AddNewPostFormRedux = Object(redux_form__WEBPACK_IMPORTED_MODULE_3__["reduxForm"])({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
var MyPosts = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
    var postElements = __spreadArrays(props.posts).reverse()
        .map(function (p) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post_Post__WEBPACK_IMPORTED_MODULE_5__["default"], { message: p.message, likesCount: p.likesCount }); });
    var onAddPost = function (value) {
        props.addPost(value.newPostText);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _MyPosts_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.postsBlock },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "My posts"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddNewPostFormRedux, { onSubmit: onAddPost }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _MyPosts_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.posts }, postElements)));
});
/* harmony default export */ __webpack_exports__["default"] = (MyPosts);


/***/ }),

/***/ "./src/components/Profile/MyPosts/Post/Post.module.css":
/*!*************************************************************!*\
  !*** ./src/components/Profile/MyPosts/Post/Post.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"item":"IC435q_XwfFczJqCqLl3Q"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Profile/MyPosts/Post/Post.tsx":
/*!******************************************************!*\
  !*** ./src/components/Profile/MyPosts/Post/Post.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pictures_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../pictures/avatar.png */ "./src/pictures/avatar.png");
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.module.css */ "./src/components/Profile/MyPosts/Post/Post.module.css");
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post_module_css__WEBPACK_IMPORTED_MODULE_2__);



var Post = function (_a) {
    var message = _a.message, likesCount = _a.likesCount;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Post_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.item },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: _pictures_avatar_png__WEBPACK_IMPORTED_MODULE_1__["default"] }),
        message,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "likes "),
            likesCount)));
};
/* harmony default export */ __webpack_exports__["default"] = (Post);


/***/ }),

/***/ "./src/components/Profile/Profile.module.css":
/*!***************************************************!*\
  !*** ./src/components/Profile/Profile.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Profile/ProfileContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Profile/ProfileContainer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileType */ "./src/components/Profile/ProfileType.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/profile-reducer */ "./src/redux/profile-reducer.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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





//@ts-ignore

var ProfileContainer = /** @class */ (function (_super) {
    __extends(ProfileContainer, _super);
    function ProfileContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileContainer.prototype.refreshProfile = function () {
        var userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        }
        else {
            this.props.getStatus(userId);
            this.props.getUserProfile(userId);
        }
    };
    ProfileContainer.prototype.componentDidMount = function () {
        this.refreshProfile();
    };
    ProfileContainer.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    };
    ProfileContainer.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileType__WEBPACK_IMPORTED_MODULE_1__["default"], __assign({}, this.props, { isOwner: !this.props.match.params.userId, setPhoto: this.props.setPhoto, profile: this.props.profile, status: this.props.status, updateStatus: this.props.updateStatus, saveProfile: this.props.saveProfile })));
    };
    return ProfileContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var mapStateToProps = function (state) {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userid,
        isAuth: state.auth.isAuth
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, { setPhoto: _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["setPhoto"], updateStatus: _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["updateStatus"], getStatus: _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["getStatus"], getUserProfile: _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["getUserProfile"], saveProfile: _redux_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["saveProfile"] }), react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ProfileContainer));


/***/ }),

/***/ "./src/components/Profile/ProfileInfo/ProfileDataReduxForm.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Profile/ProfileInfo/ProfileDataReduxForm.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/Formcontrols/FormControl */ "./src/common/Formcontrols/FormControl.tsx");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileInfo.module.css */ "./src/components/Profile/ProfileInfo/ProfileInfo.module.css");
/* harmony import */ var _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_3__);




var ProfileData = function (_a) {
    var handleSubmit = _a.handleSubmit, profile = _a.profile, error = _a.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: handleSubmit },
        error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formSummaryError }, error),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Save"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Full Name"),
                ":",
                Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])("Full Name", "fullName", [], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["input"])),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "My proffesional skills"),
                ":",
                Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])("My professional skills", "lookingForAJobDescription", [], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["TextArea"])),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "About Me"),
                ":",
                Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])("AboutMe", "aboutMe", [], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["TextArea"])),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Looking for a job"),
                ":",
                Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])("", "lookingForAJob", [], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["input"], { type: "checkbox" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Contacts"),
                Object.keys(profile.contacts).map(function (key) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: key, className: _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contact },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null,
                            key,
                            ": ",
                            Object(_common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["createField"])(key, "contacts." + key, [], _common_Formcontrols_FormControl__WEBPACK_IMPORTED_MODULE_1__["input"])));
                }))));
};
var ProfileDataReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({ form: "ProfileData" })(ProfileData);
/* harmony default export */ __webpack_exports__["default"] = (ProfileDataReduxForm);


/***/ }),

/***/ "./src/components/Profile/ProfileInfo/ProfileInfo.module.css":
/*!*******************************************************************!*\
  !*** ./src/components/Profile/ProfileInfo/ProfileInfo.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"descriptionBlock":"_3cahvUrleR7o6R1UX6ObPG","avatar":"_3jI1EdfJPnxbmPb3Jc1owV","contact":"_1eodGCdXydtebRsr18rlTk","formSummaryError":"_2SMUgLwa1p9RP09nZUhZJZ"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/components/Profile/ProfileInfo/ProfileInfo.tsx":
/*!************************************************************!*\
  !*** ./src/components/Profile/ProfileInfo/ProfileInfo.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileStatusWithHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileStatusWithHooks */ "./src/components/Profile/ProfileInfo/ProfileStatusWithHooks.tsx");
/* harmony import */ var _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileInfo.module.css */ "./src/components/Profile/ProfileInfo/ProfileInfo.module.css");
/* harmony import */ var _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/Preloader */ "./src/common/Preloader.tsx");
/* harmony import */ var _pictures_user_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pictures/user.png */ "./src/pictures/user.png");
/* harmony import */ var _ProfileDataReduxForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileDataReduxForm */ "./src/components/Profile/ProfileInfo/ProfileDataReduxForm.tsx");






var ProfileInfo = function (_a) {
    var profile = _a.profile, status = _a.status, updateStatus = _a.updateStatus, setPhoto = _a.setPhoto, isOwner = _a.isOwner, saveProfile = _a.saveProfile;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), editMode = _b[0], setEditMode = _b[1];
    if (!profile) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Preloader__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
    var onMainChangePhoto = function (e) {
        if (e.target.files.length) {
            setPhoto(e.target.files[0]);
        }
    };
    var onSubmit = function (formData) {
        // tydo: remove .then
        saveProfile(formData).then(function () {
            setEditMode(false);
        });
    };
    var goToEditMode = function () { setEditMode(true); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.descriptionBlock },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: profile.photos.large || _pictures_user_png__WEBPACK_IMPORTED_MODULE_4__["default"], className: _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.avatar }),
            isOwner && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "file", onChange: onMainChangePhoto }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileStatusWithHooks__WEBPACK_IMPORTED_MODULE_1__["default"], { status: status, updateStatus: updateStatus }),
            editMode
                ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileDataReduxForm__WEBPACK_IMPORTED_MODULE_5__["default"], { initialValues: profile, onSubmit: onSubmit, profile: profile })
                : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfileInf, { goToEditMode: goToEditMode, isOwner: isOwner, profile: profile }))));
};
var ProfileInf = function (_a) {
    var isOwner = _a.isOwner, goToEditMode = _a.goToEditMode, profile = _a.profile;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        isOwner && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: goToEditMode }, "edit")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Full name:"),
            " ",
            profile.fullName),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Looking for a job:"),
            " ",
            profile.lookingForAJob ? "Yes" : "No"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "About me:"),
            " ",
            profile.lookingForAJobDescription),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Contacts"),
            ": ",
            Object.keys(profile.contacts).map(function (key) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contact, { key: key, contactTitle: key, contactValue: profile.contacts[key] });
            })));
};
var Contact = function (_a) {
    var contactTitle = _a.contactTitle, contactValue = _a.contactValue;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _ProfileInfo_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, contactTitle),
        ": ",
        contactValue);
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileInfo);


/***/ }),

/***/ "./src/components/Profile/ProfileInfo/ProfileStatusWithHooks.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/Profile/ProfileInfo/ProfileStatusWithHooks.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ProfileStatusWithHooks = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), editMode = _a[0], setEditMode = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.status), status = _b[0], setStatus = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setStatus(status);
    }, [props.status]);
    var activatedEditMode = function () {
        setEditMode(true);
    };
    var deActivatedEditMode = function () {
        setEditMode(false);
        props.updateStatus(status);
    };
    var onStatusChange = function (e) {
        setStatus(e.currentTarget.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        !editMode &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { onDoubleClick: activatedEditMode }, status || '-----')),
        editMode &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { onChange: onStatusChange, autoFocus: true, onBlur: deActivatedEditMode, value: status }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileStatusWithHooks);


/***/ }),

/***/ "./src/components/Profile/ProfileType.tsx":
/*!************************************************!*\
  !*** ./src/components/Profile/ProfileType.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.module.css */ "./src/components/Profile/Profile.module.css");
/* harmony import */ var _Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Profile_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProfileInfo_ProfileInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileInfo/ProfileInfo */ "./src/components/Profile/ProfileInfo/ProfileInfo.tsx");
/* harmony import */ var _MyPosts_MyPostContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyPosts/MyPostContainer */ "./src/components/Profile/MyPosts/MyPostContainer.tsx");




var Profile = function (_a) {
    var isOwner = _a.isOwner, status = _a.status, profile = _a.profile, setPhoto = _a.setPhoto, updateStatus = _a.updateStatus, saveProfile = _a.saveProfile;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Profile_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profieBox },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileInfo_ProfileInfo__WEBPACK_IMPORTED_MODULE_2__["default"], { isOwner: isOwner, setPhoto: setPhoto, profile: profile, status: status, updateStatus: updateStatus, saveProfile: saveProfile }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyPosts_MyPostContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (Profile);


/***/ }),

/***/ "./src/pictures/avatar.png":
/*!*********************************!*\
  !*** ./src/pictures/avatar.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "133ff82fc310c680d1b5f714e812276d.png");

/***/ }),

/***/ "./src/pictures/user.png":
/*!*******************************!*\
  !*** ./src/pictures/user.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "96e310a6add3a711174de9e30a44575a.png");

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
//# sourceMappingURL=1.js.map