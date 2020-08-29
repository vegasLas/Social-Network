(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/common/Paginator/Paginator.module.css":
/*!***************************************************!*\
  !*** ./src/common/Paginator/Paginator.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"paginator":"_3zRX20K2OlnvO7l7WFEC1l","pageNumber":"_2mKPDuCGW6f3UtaZrPLFIi","selectedPage":"E_AILaUZNDlULHUXaIFUC"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/common/Paginator/Paginator.tsx":
/*!********************************************!*\
  !*** ./src/common/Paginator/Paginator.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paginator_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginator.module.css */ "./src/common/Paginator/Paginator.module.css");
/* harmony import */ var _Paginator_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Paginator_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



var Paginator = function (_a) {
    var totalItemsCount = _a.totalItemsCount, pageSize = _a.pageSize, currentPage = _a.currentPage, onPageChanged = _a.onPageChanged, _b = _a.portionSize, portionSize = _b === void 0 ? 10 : _b;
    var pagesCount = Math.ceil(totalItemsCount / pageSize);
    var pages = [];
    for (var i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    var portionCount = Math.ceil(pagesCount / portionSize);
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1), portionNumber = _c[0], setPortionNumber = _c[1];
    var leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    var rightPortionPageNumber = portionNumber * portionSize;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Paginator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paginator },
        portionNumber > 1 &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: function () { setPortionNumber(portionNumber - 1); } }, "PREV"),
        pages
            .filter(function (p) { return p >= leftPortionPageNumber && p <= rightPortionPageNumber; })
            .map(function (p) {
            var _a;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_a = {},
                    _a[_Paginator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.selectedPage] = currentPage === p,
                    _a), _Paginator_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pageNumber), key: p, onClick: function (e) {
                    onPageChanged(p);
                } }, p);
        }),
        portionCount > portionNumber && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: function () { setPortionNumber(portionNumber + 1); } }, "NEXT"));
};
/* harmony default export */ __webpack_exports__["default"] = (Paginator);


/***/ }),

/***/ "./src/components/Users/User.tsx":
/*!***************************************!*\
  !*** ./src/components/Users/User.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _users_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.module.css */ "./src/components/Users/users.module.css");
/* harmony import */ var _users_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_users_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pictures_user_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pictures/user.png */ "./src/pictures/user.png");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var User = function (props) {
    var user = props.user, followingProgress = props.followingProgress, unfollow = props.unfollow, follow = props.follow;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], { to: '/profile/' + user.id },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: user.photos.small != null ? user.photos.small : _pictures_user_png__WEBPACK_IMPORTED_MODULE_2__["default"], className: _users_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userPhoto }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.followed
                ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { disabled: followingProgress
                        .some(function (id) { return id === user.id; }), onClick: function () { unfollow(user.id); } }, "Unfollow")
                : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { disabled: followingProgress
                        .some(function (id) { return id === user.id; }), onClick: function () { follow(user.id); } }, "Follow"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.name),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, user.status)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "user.location.country"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "user.location.city")))));
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/components/Users/UsersContainer.tsx":
/*!*************************************************!*\
  !*** ./src/components/Users/UsersContainer.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Preloader */ "./src/common/Preloader.tsx");
/* harmony import */ var _redux_users_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/users-selectors */ "./src/redux/users-selectors.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_usersReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/usersReducer */ "./src/redux/usersReducer.ts");
/* harmony import */ var _UsersType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UsersType */ "./src/components/Users/UsersType.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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







var UsersContainer = /** @class */ (function (_super) {
    __extends(UsersContainer, _super);
    function UsersContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPageChanged = function (pageNumber) {
            var _a = _this.props, pageSize = _a.pageSize, filter = _a.filter;
            _this.props.getUsers(pageNumber, pageSize, filter);
        };
        _this.onFilterChange = function (filter) {
            var pageSize = _this.props.pageSize;
            _this.props.getUsers(1, pageSize, filter);
        };
        return _this;
    }
    UsersContainer.prototype.componentDidMount = function () {
        var _a = this.props, currentPage = _a.currentPage, pageSize = _a.pageSize, filter = _a.filter;
        this.props.getUsers(currentPage, pageSize, filter);
    };
    UsersContainer.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            this.props.isFetching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Preloader__WEBPACK_IMPORTED_MODULE_1__["default"], null) : null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersType__WEBPACK_IMPORTED_MODULE_5__["default"], { totalUsersCount: this.props.totalUsersCount, pageSize: this.props.pageSize, currentPage: this.props.currentPage, onPageChanged: this.onPageChanged, onFilterChange: this.onFilterChange, users: this.props.users, follow: this.props.follow, unfollow: this.props.unfollow, followingProgress: this.props.followingProgress }));
    };
    return UsersContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
var mapStateToProps = function (state) {
    return {
        users: Object(_redux_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUsers"])(state),
        pageSize: Object(_redux_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getPageSize"])(state),
        totalUsersCount: Object(_redux_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getTotalUsersCount"])(state),
        currentPage: Object(_redux_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getCurrentPage"])(state),
        isFetching: Object(_redux_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsFetching"])(state),
        followingProgress: Object(_redux_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getFollowingInProgress"])(state),
        filter: state.usersPage.filter
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, { follow: _redux_usersReducer__WEBPACK_IMPORTED_MODULE_4__["follow"], unfollow: _redux_usersReducer__WEBPACK_IMPORTED_MODULE_4__["unfollow"], getUsers: _redux_usersReducer__WEBPACK_IMPORTED_MODULE_4__["requestUsers"] }))(UsersContainer));


/***/ }),

/***/ "./src/components/Users/UsersSearchForm.tsx":
/*!**************************************************!*\
  !*** ./src/components/Users/UsersSearchForm.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


var UsersSearchFormVAlidate = function (values) {
    var errors = {};
    return errors;
};
var UsersSearchForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
    var submit = function (values, _a) {
        var setSubmitting = _a.setSubmitting;
        var filter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        };
        props.onFilterChange(filter);
        setSubmitting(false);
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], { initialValues: { term: '', friend: 'null' }, validate: UsersSearchFormVAlidate, onSubmit: submit }, function (_a) {
            var isSubmitting = _a.isSubmitting;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { type: "text", name: "term" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], { name: "friend", as: "select", placeholder: "Favorite Color" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "null" }, "All"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "true" }, "Only followed"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "false" }, "Only unfollowed")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "submit", disabled: isSubmitting }, "find")));
        }));
});
/* harmony default export */ __webpack_exports__["default"] = (UsersSearchForm);


/***/ }),

/***/ "./src/components/Users/UsersType.tsx":
/*!********************************************!*\
  !*** ./src/components/Users/UsersType.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Paginator/Paginator */ "./src/common/Paginator/Paginator.tsx");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/components/Users/User.tsx");
/* harmony import */ var _UsersSearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersSearchForm */ "./src/components/Users/UsersSearchForm.tsx");
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




var Users = function (_a) {
    var currentPage = _a.currentPage, totalUsersCount = _a.totalUsersCount, pageSize = _a.pageSize, onFilterChange = _a.onFilterChange, onPageChanged = _a.onPageChanged, users = _a.users, props = __rest(_a, ["currentPage", "totalUsersCount", "pageSize", "onFilterChange", "onPageChanged", "users"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersSearchForm__WEBPACK_IMPORTED_MODULE_3__["default"], { onFilterChange: onFilterChange }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_1__["default"], { currentPage: currentPage, onPageChanged: onPageChanged, totalItemsCount: totalUsersCount, pageSize: pageSize }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, users.map(function (u) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_2__["default"], { user: u, followingProgress: props.followingProgress, key: u.id, unfollow: props.unfollow, follow: props.follow }); })));
};
/* harmony default export */ __webpack_exports__["default"] = (Users);


/***/ }),

/***/ "./src/components/Users/users.module.css":
/*!***********************************************!*\
  !*** ./src/components/Users/users.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"userPhoto":"_1aVisPPgmnOyWSqDRZSzj0","UsersMainBlock":"DprknDcfQa4f0kuhGhqG4"};
    if(false) { var cssReload; }
  

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

/***/ "./src/redux/users-selectors.tsx":
/*!***************************************!*\
  !*** ./src/redux/users-selectors.tsx ***!
  \***************************************/
/*! exports provided: getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, countSomethingDifficult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageSize", function() { return getPageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalUsersCount", function() { return getTotalUsersCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsFetching", function() { return getIsFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingInProgress", function() { return getFollowingInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countSomethingDifficult", function() { return countSomethingDifficult; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");

var getUsersSelector = function (state) {
    return state.usersPage.users;
};
var getUsers = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersSelector, function (users) {
    return users.filter(function (u) { return true; });
});
var getPageSize = function (state) {
    return state.usersPage.pageSize;
};
var getTotalUsersCount = function (state) {
    return state.usersPage.totalUsersCount;
};
var getCurrentPage = function (state) {
    return state.usersPage.currentPage;
};
var getIsFetching = function (state) {
    return state.usersPage.isFetching;
};
var getFollowingInProgress = function (state) {
    return state.usersPage.followingProgress;
};
var countSomethingDifficult = function (state) {
    debugger;
    //for... math... big arrays
    var count = 23;
    return count;
};


/***/ })

}]);
//# sourceMappingURL=3.js.map