(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/store/feature-product-detail/src/index.ts":
/*!****************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/feature-product-detail/src/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: StoreFeatureProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_store_feature_product_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store-feature-product-detail */ "../../../libs/store/feature-product-detail/src/lib/store-feature-product-detail.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreFeatureProductDetail", function() { return _lib_store_feature_product_detail__WEBPACK_IMPORTED_MODULE_0__["StoreFeatureProductDetail"]; });



/***/ }),

/***/ "../../../libs/store/feature-product-detail/src/lib/store-feature-product-detail.module.scss":
/*!****************************************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/feature-product-detail/src/lib/store-feature-product-detail.module.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../../node_modules/sass-loader/dist/cjs.js!./store-feature-product-detail.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/store/feature-product-detail/src/lib/store-feature-product-detail.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/store/feature-product-detail/src/lib/store-feature-product-detail.tsx":
/*!********************************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/feature-product-detail/src/lib/store-feature-product-detail.tsx ***!
  \********************************************************************************************************************************/
/*! exports provided: StoreFeatureProductDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFeatureProductDetail", function() { return StoreFeatureProductDetail; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_feature_product_detail_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-feature-product-detail.module.scss */ "../../../libs/store/feature-product-detail/src/lib/store-feature-product-detail.module.scss");
/* harmony import */ var _store_feature_product_detail_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_store_feature_product_detail_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nxegghead_store_util_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nxegghead/store/util-formatters */ "../../../libs/store/util-formatters/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const StoreFeatureProductDetail = props => {
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    data: null,
    loadingState: 'success'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      loadingState: 'loading'
    }));
    const productId = props.match.params.id;
    fetch(`/api/products/${productId}`).then(x => x.json()).then(res => {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        data: res,
        loadingState: 'success'
      }));
    }).catch(err => {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        loadingState: 'error'
      }));
    });
  }, [props.match.params.id]);
  const myStyle = {
    height: '140px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, state.loadingState === 'loading' ? 'Loading…' : state.loadingState === 'error' ? '<div>Error retrieving data</div>' : state.data == null ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: state.data.image,
    alt: state.data.name,
    style: myStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardActionArea"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, state.data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: "product-ranking"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Rating:"), " ", Object(_nxegghead_store_util_formatters__WEBPACK_IMPORTED_MODULE_3__["formatRating"])(state.data.rating))))));
};
/* harmony default export */ __webpack_exports__["default"] = (StoreFeatureProductDetail);

/***/ }),

/***/ "../../../libs/store/ui-shared/src/index.ts":
/*!***************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/ui-shared/src/index.ts ***!
  \***************************************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/header/header */ "../../../libs/store/ui-shared/src/lib/header/header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _lib_header_header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });



/***/ }),

/***/ "../../../libs/store/ui-shared/src/lib/header/header.module.scss":
/*!************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/ui-shared/src/lib/header/header.module.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../../../node_modules/sass-loader/dist/cjs.js!./header.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/store/ui-shared/src/lib/header/header.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/store/ui-shared/src/lib/header/header.tsx":
/*!****************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/ui-shared/src/lib/header/header.tsx ***!
  \****************************************************************************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../../../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.module.scss */ "../../../libs/store/ui-shared/src/lib/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_2__);


 // const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

function Header(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["AppBar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Toolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h6",
    className: "title"
  }, props.title)));
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "../../../libs/store/util-formatters/src/index.ts":
/*!*********************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/util-formatters/src/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: formatRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_store_util_formatters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store-util-formatters */ "../../../libs/store/util-formatters/src/lib/store-util-formatters.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRating", function() { return _lib_store_util_formatters__WEBPACK_IMPORTED_MODULE_0__["formatRating"]; });



/***/ }),

/***/ "../../../libs/store/util-formatters/src/lib/store-util-formatters.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/libs/store/util-formatters/src/lib/store-util-formatters.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: formatRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRating", function() { return formatRating; });
// export function storeUtilFormatters(): string {
//   return 'store-util-formatters';
// }
function formatRating(rating) {
  return `${Math.round(rating * 100) / 10} / 10`;
}

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/store/feature-product-detail/src/lib/store-feature-product-detail.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!/Users/saraonval/Documents/Projects/nxegghead/node_modules/sass-loader/dist/cjs.js!/Users/saraonval/Documents/Projects/nxegghead/libs/store/feature-product-detail/src/lib/store-feature-product-detail.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!../../../libs/store/ui-shared/src/lib/header/header.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!/Users/saraonval/Documents/Projects/nxegghead/node_modules/sass-loader/dist/cjs.js!/Users/saraonval/Documents/Projects/nxegghead/libs/store/ui-shared/src/lib/header/header.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/app.module.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!/Users/saraonval/Documents/Projects/nxegghead/node_modules/sass-loader/dist/cjs.js!./app/app.module.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._3I0A6XY9yNmqIVQ6PXoIuQ {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.OftlSCd0sGbD0d8m5Y8mg {\n  max-width: 800px;\n  margin: 50px auto;\n}\n\n.JoOroOdKPPeM_q5AIOjS5 {\n  max-width: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.JoOroOdKPPeM_q5AIOjS5 ._2WrqsSupjVxSxGadrI8Ltn {\n  padding-top: 10px;\n}\n\n._27uJbTK-Re_aoUeXq8wfiI {\n  display: flex;\n  justify-content: center;\n}\n\n._2QGhqwDKF5yPYNEYWjI3S4 {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.ksbEWwUBLRjkcAJnap0pA {\n  height: 100px;\n}", ""]);
// Exports
exports.locals = {
	"products-layout": "_3I0A6XY9yNmqIVQ6PXoIuQ",
	"container": "OftlSCd0sGbD0d8m5Y8mg",
	"product-card": "JoOroOdKPPeM_q5AIOjS5",
	"product-rating": "_2WrqsSupjVxSxGadrI8Ltn",
	"center-content": "_27uJbTK-Re_aoUeXq8wfiI",
	"product-details": "_2QGhqwDKF5yPYNEYWjI3S4",
	"product-image": "ksbEWwUBLRjkcAJnap0pA"
};
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************************!*\
  !*** /Users/saraonval/Documents/Projects/nxegghead/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.module.scss":
/*!*****************************!*\
  !*** ./app/app.module.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../node_modules/sass-loader/dist/cjs.js!./app.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js!./app/app.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module.scss */ "./app/app.module.scss");
/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nxegghead_store_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nxegghead/store/ui-shared */ "../../../libs/store/ui-shared/src/index.ts");
/* harmony import */ var _nxegghead_store_util_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nxegghead/store/util-formatters */ "../../../libs/store/util-formatters/src/index.ts");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "../../../node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "../../../node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../../../node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "../../../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _nxegghead_store_feature_product_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nxegghead/store/feature-product-detail */ "../../../libs/store/feature-product-detail/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function App() {
  const myStyle = {
    height: '140px'
  };
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    data: [],
    loadingState: 'success'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setState(s => _objectSpread(_objectSpread({}, s), {}, {
      loadingState: 'loading'
    }));
    fetch('api/products').then(x => x.json()).then(res => {
      setState(s => _objectSpread(_objectSpread({}, s), {}, {
        data: res,
        loadingState: 'success'
      }));
    }).catch(err => {
      setState(s => _objectSpread(_objectSpread({}, s), {}, {
        loadingState: 'error'
      }));
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nxegghead_store_ui_shared__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    title: "Products"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    "data-testid": "app-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "products-layout"
  }, state.loadingState === 'loading' ? 'Loading…' : state.loadingState === 'error' ? '<div>Error retrieving data</div>' : state.data.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: x.id,
    className: "product-card",
    onClick: () => history.push(`/product/${x.id}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: x.image,
    alt: x.name,
    style: myStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, x.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: "product-details"
  }, x.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    className: "product-ranking"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Rating:"), " ", Object(_nxegghead_store_util_formatters__WEBPACK_IMPORTED_MODULE_3__["formatRating"])(x.rating)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: "/product/:id",
    component: _nxegghead_store_feature_product_detail__WEBPACK_IMPORTED_MODULE_9__["StoreFeatureProductDetail"]
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saraonval/Documents/Projects/nxegghead/apps/store/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map