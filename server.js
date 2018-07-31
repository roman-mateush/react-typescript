module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./src/client/core/constants.tsx ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION = {
    CHECKBOX: {
        ADD: 'ac@checkbox.add',
        DELETE: 'ac@checkbox.delete',
    },
};


/***/ }),
/* 6 */
/*!*************************************************!*\
  !*** ./src/client/modules/checkbox/actions.tsx ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ 4);
var constants_1 = __webpack_require__(/*! ../../core/constants */ 5);
exports.addCheckbox = redux_actions_1.createAction(constants_1.ACTION.CHECKBOX.ADD);


/***/ }),
/* 7 */
/*!*******************************************************!*\
  !*** ./src/client/layouts/default/DefaultLayout.scss ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"layout": "_2ZyRsXsw469dQ_sjFiPesJ"
};

/***/ }),
/* 8 */
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"name":"react-typescript","version":"1.5.1","license":"MIT","description":"React & typescript boilerplate","repository":"https://github.com/nfq-eta/react-typescript","homepage":"https://github.com/nfq-eta/react-typescript","main":"src/client/index.tsx","scripts":{"cm":"git-cz","predev":"tcm -p src/client/**/*.{css,scss}","prebuild":"tcm -p src/client/**/*.{css,scss} && rimraf ./dist ./coverage","cleanup":"yarn prebuild","build:server":"cross-env NODE_ENV=production webpack --env=server --display-error-details","build":"cross-env NODE_ENV=production webpack -p --env=prod --display-error-details && yarn build:server","prebuild:start":"yarn build","postbuild":"yarn build-storybook","build:start":"serve -s -o -C -n dist","lint":"tslint -c ./tslint.json -p ./tsconfig.json -t stylish","lint:css":"stylelint './src/client/**/*.{css,scss}'","test":"jest --watch --no-cache","test:ci":"jest --env=jsdom --no-cache --maxWorkers=2","test:coverage":"cross-env NODE_ENV=test jest --env=jsdom --no-cache --coverage","prepush":"yarn test:ci --notify && yarn lint && yarn lint:css","dev":"cross-env NODE_ENV=development webpack-dev-server --open --env=dev","start":"node ./dist/server.js","start:storybook":"start-storybook -p 6006 -c config/storybook","build-storybook":"build-storybook -c config/storybook -o ./dist/docs","version":"conventional-changelog -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md","precommit":"lint-staged"},"devDependencies":{"@storybook/addon-actions":"3.2.17","@storybook/addon-info":"3.2.17","@storybook/addon-knobs":"3.2.17","@storybook/addon-links":"3.2.17","@storybook/addon-options":"3.2.17","@storybook/react":"3.2.17","@types/compression":"0.0.35","@types/enzyme":"3.1.5","@types/enzyme-to-json":"1.5.0","@types/express":"4.11.0","@types/extract-text-webpack-plugin":"3.0.0","@types/get-port":"^3.2.0","@types/history":"4.6.2","@types/html-webpack-plugin":"2.30.1","@types/jest":"21.1.8","@types/node":"8.0.57","@types/optimize-css-assets-webpack-plugin":"1.3.1","@types/package-json":"4.0.1","@types/react":"16.0.25","@types/react-dom":"16.0.3","@types/react-hot-loader":"3.0.5","@types/react-redux":"5.0.13","@types/react-router-dom":"4.2.3","@types/react-router-redux":"5.0.10","@types/react-test-renderer":"16.0.0","@types/redux-actions":"2.2.3","@types/redux-logger":"3.0.5","@types/redux-mock-store":"0.0.12","@types/storybook__addon-actions":"3.0.1","@types/storybook__addon-info":"3.2.1","@types/storybook__addon-knobs":"3.2.1","@types/storybook__addon-options":"3.2.0","@types/storybook__react":"3.0.5","@types/uniqid":"4.1.2","@types/webpack":"3.8.1","@types/webpack-dotenv-plugin":"2.0.0","@types/webpack-env":"1.13.3","@types/webpack-merge":"4.1.1","babel-core":"6.26.0","babel-loader":"7.1.2","babel-polyfill":"6.26.0","babel-preset-es2015":"6.24.1","babel-preset-react":"6.24.1","babel-preset-stage-0":"6.24.1","babel-runtime":"6.26.0","color-convert":"1.9.1","commitizen":"2.9.6","compression":"1.7.1","conventional-changelog-cli":"1.3.5","cross-env":"5.1.1","css-hot-loader":"1.3.4","css-loader":"0.28.7","cz-conventional-changelog":"2.1.0","enzyme":"3.2.0","enzyme-adapter-react-16":"1.1.0","enzyme-to-json":"3.2.2","express":"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"1.1.5","get-port":"3.2.0","history":"4.7.2","html-webpack-plugin":"2.30.1","http-status-enum":"1.0.2","husky":"0.14.3","identity-obj-proxy":"3.0.0","jest":"22.3.0","json-d-ts":"1.0.1","lint-staged":"6.1.1","mkdirp":"0.5.1","node-sass":"4.7.2","optimize-css-assets-webpack-plugin":"3.2.0","prettier":"1.10.2","raf":"3.4.0","react-docgen-typescript-webpack-plugin":"1.1.0","react-hot-loader":"3.1.3","react-router-dom":"4.2.2","react-router-redux":"4.0.8","react-test-renderer":"16.1.1","redux-actions":"2.2.1","redux-devtools-extension":"2.13.2","redux-logger":"3.0.6","redux-mock-store":"1.3.0","redux-observable":"0.17.0","resolve-url-loader":"2.2.1","rimraf":"2.6.2","sass-loader":"6.0.6","serve":"6.5.2","source-map-loader":"0.2.3","style-loader":"0.19.0","stylelint":"9.0.0","stylelint-config-css-modules":"1.2.0","stylelint-config-sass-guidelines":"4.1.0","stylelint-order":"0.8.1","stylelint-scss":"2.3.0","ts-jest":"22.0.4","ts-loader":"3.5.0","ts-node":"4.1.0","tslib":"1.9.0","tslint":"5.9.1","tslint-config-airbnb":"5.8.0","tslint-plugin-prettier":"1.3.0","tslint-react":"3.5.1","tsutils":"2.21.1","typed-css-modules":"0.3.1","typescript":"2.8.1","typescript-babel-jest":"1.0.5","typings-for-css-modules-loader":"1.7.0","uniqid":"4.1.1","url-loader":"0.6.2","webpack":"3.10.0","webpack-dashboard":"0.4.0","webpack-dev-middleware":"1.12.2","webpack-dev-server":"2.9.7","webpack-dotenv-plugin":"2.0.2","webpack-hot-middleware":"2.21.0","webpack-merge":"4.1.1"},"dependencies":{"react":"^16.1.1","react-dom":"^16.1.1","react-redux":"5.0.6","react-router4-with-layouts":"1.2.6","redux":"3.7.2"},"lint-staged":{"src/**/*.{js,jsx,ts,tsx,json,css,scss}":["prettier --write","git add"]},"jest":{"globals":{"ts-jest":{"skipBabel":true}},"setupFiles":["<rootDir>/config/jest/bootstrap.js"],"snapshotSerializers":["enzyme-to-json/serializer"],"transform":{"^.+\\.tsx?$":"<rootDir>/node_modules/ts-jest/preprocessor.js"},"testRegex":"^.+\\.test\\.tsx?$","collectCoverageFrom":["src/**/*.tsx","!src/client/index.tsx","!<rootDir>/node_modules/","!src/**/*.story.tsx"],"moduleFileExtensions":["js","jsx","json","ts","tsx"],"moduleNameMapper":{"^.+\\.s?css$":"identity-obj-proxy"},"mapCoverage":true,"coverageDirectory":"./coverage/"},"stylelint":{"extends":["stylelint-config-sass-guidelines","stylelint-config-css-modules"],"rules":{"indentation":4,"number-leading-zero":null,"selector-class-pattern":"^[a-z][a-zA-Z0-9]+$","order/properties-alphabetical-order":null,"max-nesting-depth":[3],"selector-max-compound-selectors":4}},"config":{"commitizen":{"path":"node_modules/cz-conventional-changelog"}},"engines":{"node":">= 8.9","yarn":">= 1.3.2"}}

/***/ }),
/* 9 */
/*!************************************!*\
  !*** multi ./src/server/index.tsx ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/index.tsx */10);


/***/ }),
/* 10 */
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var path = __webpack_require__(/*! path */ 11);
var fs = __webpack_require__(/*! fs */ 12);
var express = __webpack_require__(/*! express */ 13);
var React = __webpack_require__(/*! react */ 0);
var react_redux_1 = __webpack_require__(/*! react-redux */ 3);
var server_1 = __webpack_require__(/*! react-dom/server */ 14);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var getPort = __webpack_require__(/*! get-port */ 24);
var compression = __webpack_require__(/*! compression */ 25);
var store_1 = __webpack_require__(/*! ../client/core/store */ 26);
var routes_1 = __webpack_require__(/*! ../client/core/routes */ 32);
var initialState_1 = __webpack_require__(/*! ../client/core/initialState */ 52);
var normalizePort = function (val) {
    return typeof val === 'string' ? parseInt(val, 10) : val;
};
var readCss = function (file) {
    var abs = path.resolve(file);
    return fs.readFileSync(abs, 'utf8');
};
var styles = readCss('dist/css/app.css');
var name = __webpack_require__(/*! ../../package.json */ 8).name;
var description = __webpack_require__(/*! ../../package.json */ 8).description;
var renderHtml = function (html, preLoadedState) {
    return "\n    <!doctype html>\n    <html lang=\"en-us\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n            <title>" + name + "</title>\n            <meta name=\"Description\" content=\"" + description + "\">\n            <style>\n                " + styles + "\n            </style>\n        </head>\n        <body>\n            <div id=\"app\">" + html + "</div>\n            <script>\n                window.__PRELOADED_STATE__ = " + JSON.stringify(preLoadedState).replace(/</g, '\\u003c') + "\n            </script>\n            <script src=\"/js/vendors.js\" async></script>\n            <script src=\"/js/app.js\" async></script>\n        </body>\n    </html>\n    ";
};
var port = normalizePort("80" || 8080);
var app = express();
app.use(compression());
app.use('/js', express.static(path.join('dist', 'js'), { redirect: false }));
app.use('/css', express.static(path.join('dist', 'css'), { redirect: false }));
app.use(function (req, res) {
    var store = store_1.configureStore(initialState_1.initialState);
    var context = {};
    var html = server_1.renderToString(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.StaticRouter, { basename:  true ? "react-typescript" : undefined, location: req.url, context: context },
            React.createElement(routes_1.CoreRoutes, null))));
    if (context.url) {
        res.redirect(301, context.url);
    }
    else {
        res.send(renderHtml(html, store.getState()));
    }
});
getPort({ port: port }).then(function (rPort) {
    app.listen(rPort, function () { return console.log("App is listening on http://localhost:" + rPort); });
});


/***/ }),
/* 11 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 13 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/*!******************************************!*\
  !*** ./node_modules/react-dom/server.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./server.node */ 15);


/***/ }),
/* 15 */
/*!***********************************************!*\
  !*** ./node_modules/react-dom/server.node.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.node.production.min.js */ 16);
} else {
  module.exports = require('./cjs/react-dom-server.node.development.js');
}


/***/ }),
/* 16 */
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.node.production.min.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(/*! object-assign */ 17),r=__webpack_require__(/*! react */ 0),aa=__webpack_require__(/*! fbjs/lib/emptyFunction */ 18),t=__webpack_require__(/*! fbjs/lib/emptyObject */ 19),ba=__webpack_require__(/*! fbjs/lib/hyphenateStyleName */ 20),ca=__webpack_require__(/*! fbjs/lib/memoizeStringOnly */ 22),da=__webpack_require__(/*! stream */ 23);
function w(a){for(var b=arguments.length-1,g="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)g+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var x={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0};function z(a,b){return(a&b)===b}
var B={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=B,g=a.Properties||{},c=a.DOMAttributeNamespaces||{},h=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in g){C.hasOwnProperty(f)?w("48",f):void 0;var e=f.toLowerCase(),d=g[f];e={attributeName:e,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:z(d,b.MUST_USE_PROPERTY),
hasBooleanValue:z(d,b.HAS_BOOLEAN_VALUE),hasNumericValue:z(d,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:z(d,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:z(d,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:z(d,b.HAS_STRING_BOOLEAN_VALUE)};1>=e.hasBooleanValue+e.hasNumericValue+e.hasOverloadedBooleanValue?void 0:w("50",f);h.hasOwnProperty(f)&&(e.attributeName=h[f]);c.hasOwnProperty(f)&&(e.attributeNamespace=c[f]);a.hasOwnProperty(f)&&(e.mutationMethod=a[f]);C[f]=e}}},C={};
function ea(a,b){if(x.hasOwnProperty(a)||2<a.length&&("o"===a[0]||"O"===a[0])&&("n"===a[1]||"N"===a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return D(a);case "undefined":case "number":case "string":case "object":return!0;default:return!1}}function E(a){return C.hasOwnProperty(a)?C[a]:null}
function D(a){if(x.hasOwnProperty(a))return!0;var b=E(a);if(b)return b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue;a=a.toLowerCase().slice(0,5);return"data-"===a||"aria-"===a}
var F=B,G=F.MUST_USE_PROPERTY,H=F.HAS_BOOLEAN_VALUE,I=F.HAS_NUMERIC_VALUE,J=F.HAS_POSITIVE_NUMERIC_VALUE,K=F.HAS_OVERLOADED_BOOLEAN_VALUE,L=F.HAS_STRING_BOOLEAN_VALUE,fa={Properties:{allowFullScreen:H,async:H,autoFocus:H,autoPlay:H,capture:K,checked:G|H,cols:J,contentEditable:L,controls:H,"default":H,defer:H,disabled:H,download:K,draggable:L,formNoValidate:H,hidden:H,loop:H,multiple:G|H,muted:G|H,noValidate:H,open:H,playsInline:H,readOnly:H,required:H,reversed:H,rows:J,rowSpan:I,scoped:H,seamless:H,
selected:G|H,size:J,start:I,span:J,spellCheck:L,style:0,tabIndex:0,itemScope:H,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:L},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&a.setAttribute("value",""+
b)}}},M=F.HAS_STRING_BOOLEAN_VALUE,N={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},O={Properties:{autoReverse:M,externalResourcesRequired:M,preserveAlpha:M},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:N.xlink,xlinkArcrole:N.xlink,xlinkHref:N.xlink,xlinkRole:N.xlink,xlinkShow:N.xlink,xlinkTitle:N.xlink,xlinkType:N.xlink,xmlBase:N.xml,xmlLang:N.xml,
xmlSpace:N.xml}},ha=/[\-\:]([a-z])/g;function ia(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(ha,
ia);O.Properties[b]=0;O.DOMAttributeNames[b]=a});F.injectDOMPropertyConfig(fa);F.injectDOMPropertyConfig(O);var P="function"===typeof Symbol&&Symbol["for"]?Symbol["for"]("react.fragment"):60107,ja=/["'&<>]/;
function Q(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ja.exec(a);if(b){var g="",c,h=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="\x26quot;";break;case 38:b="\x26amp;";break;case 39:b="\x26#x27;";break;case 60:b="\x26lt;";break;case 62:b="\x26gt;";break;default:continue}h!==c&&(g+=a.substring(h,c));h=c+1;g+=b}a=h!==c?g+a.substring(h,c):g}return a}
var ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},S={};function la(a){if(S.hasOwnProperty(a))return!0;if(R.hasOwnProperty(a))return!1;if(ka.test(a))return S[a]=!0;R[a]=!0;return!1}
function ma(a,b){var g=E(a);if(g){if(null==b||g.hasBooleanValue&&!b||g.hasNumericValue&&isNaN(b)||g.hasPositiveNumericValue&&1>b||g.hasOverloadedBooleanValue&&!1===b)return"";var c=g.attributeName;if(g.hasBooleanValue||g.hasOverloadedBooleanValue&&!0===b)return c+'\x3d""';if("boolean"!==typeof b||D(a))return c+"\x3d"+('"'+Q(b)+'"')}else if(ea(a,b))return null==b?"":a+"\x3d"+('"'+Q(b)+'"');return null}var T={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function U(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var V={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},na=k({menuitem:!0},V),W={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,
fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oa=["Webkit","ms","Moz","O"];Object.keys(W).forEach(function(a){oa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);W[b]=W[a]})});var X=r.Children.toArray,pa=aa.thatReturns(""),qa={listing:!0,pre:!0,textarea:!0};
function ra(a){return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}var sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ta={},ua=ca(function(a){return ba(a)});function va(a){var b="";r.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function wa(a,b){if(a=a.contextTypes){var g={},c;for(c in a)g[c]=b[c];b=g}else b=t;return b}var xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};
function ya(a,b){void 0===a&&w("152",ra(b)||"Component")}
function za(a,b){for(;r.isValidElement(a);){var g=a,c=g.type;if("function"!==typeof c)break;a=wa(c,b);var h=[],f=!1,e={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===h)return null},enqueueReplaceState:function(a,b){f=!0;h=[b]},enqueueSetState:function(a,b){if(null===h)return null;h.push(b)}};if(c.prototype&&c.prototype.isReactComponent)var d=new c(g.props,a,e);else if(d=c(g.props,a,e),null==d||null==d.render){a=d;ya(a,c);continue}d.props=g.props;d.context=a;d.updater=e;e=d.state;
void 0===e&&(d.state=e=null);if(d.componentWillMount)if(d.componentWillMount(),h.length){e=h;var n=f;h=null;f=!1;if(n&&1===e.length)d.state=e[0];else{var p=n?e[0]:d.state,l=!0;for(n=n?1:0;n<e.length;n++){var m=e[n];if(m="function"===typeof m?m.call(d,p,g.props,a):m)l?(l=!1,p=k({},p,m)):k(p,m)}d.state=p}}else h=null;a=d.render();ya(a,c);if("function"===typeof d.getChildContext&&(g=c.childContextTypes,"object"===typeof g)){var A=d.getChildContext();for(var y in A)y in g?void 0:w("108",ra(c)||"Unknown",
y)}A&&(b=k({},b,A))}return{child:a,context:b}}
var Y=function(){function a(b,g){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");r.isValidElement(b)?b.type!==P?b=[b]:(b=b.props.children,b=r.isValidElement(b)?[b]:X(b)):b=X(b);this.stack=[{domNamespace:T.html,children:b,childIndex:0,context:t,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=g}a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=
!0;break}var c=this.stack[this.stack.length-1];if(c.childIndex>=c.children.length){var h=c.footer;b+=h;""!==h&&(this.previousWasTextNode=!1);this.stack.pop();"select"===c.tag&&(this.currentSelectValue=null)}else h=c.children[c.childIndex++],b+=this.render(h,c.context,c.domNamespace)}return b};a.prototype.render=function(a,g,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return Q(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+Q(c);this.previousWasTextNode=
!0;return Q(c)}g=za(a,g);a=g.child;g=g.context;if(null===a||!1===a)return"";if(r.isValidElement(a))return a.type===P?(a=X(a.props.children),this.stack.push({domNamespace:c,children:a,childIndex:0,context:g,footer:""}),""):this.renderDOM(a,g,c);a=X(a);this.stack.push({domNamespace:c,children:a,childIndex:0,context:g,footer:""});return""};a.prototype.renderDOM=function(a,g,c){var b=a.type.toLowerCase();c===T.html&&U(b);ta.hasOwnProperty(b)||(sa.test(b)?void 0:w("65",b),ta[b]=!0);var f=a.props;if("input"===
b)f=k({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===b){var e=f.value;if(null==e){e=f.defaultValue;var d=f.children;null!=d&&(null!=e?w("92"):void 0,Array.isArray(d)&&(1>=d.length?void 0:w("93"),d=d[0]),e=""+d);null==e&&(e="")}f=k({},f,{value:void 0,children:""+e})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=k({},f,{value:void 0});
else if("option"===b){d=this.currentSelectValue;var n=va(f.children);if(null!=d){var p=null!=f.value?f.value+"":n;e=!1;if(Array.isArray(d))for(var l=0;l<d.length;l++){if(""+d[l]===p){e=!0;break}}else e=""+d===p;f=k({selected:void 0,children:void 0},f,{selected:e,children:n})}}if(e=f)na[b]&&(null!=e.children||null!=e.dangerouslySetInnerHTML?w("137",b,pa()):void 0),null!=e.dangerouslySetInnerHTML&&(null!=e.children?w("60"):void 0,"object"===typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML?
void 0:w("61")),null!=e.style&&"object"!==typeof e.style?w("62",pa()):void 0;e=f;d=this.makeStaticMarkup;n=1===this.stack.length;p="\x3c"+a.type;for(q in e)if(e.hasOwnProperty(q)){var m=e[q];if(null!=m){if("style"===q){l=void 0;var A="",y="";for(l in m)if(m.hasOwnProperty(l)){var u=0===l.indexOf("--"),v=m[l];null!=v&&(A+=y+ua(l)+":",y=l,u=null==v||"boolean"===typeof v||""===v?"":u||"number"!==typeof v||0===v||W.hasOwnProperty(y)&&W[y]?(""+v).trim():v+"px",A+=u,y=";")}m=A||null}l=null;b:if(u=b,v=e,
-1===u.indexOf("-"))u="string"===typeof v.is;else switch(u){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":u=!1;break b;default:u=!0}u?xa.hasOwnProperty(q)||(l=q,l=la(l)&&null!=m?l+"\x3d"+('"'+Q(m)+'"'):""):l=ma(q,m);l&&(p+=" "+l)}}d||n&&(p+=' data-reactroot\x3d""');var q=p;e="";V.hasOwnProperty(b)?q+="/\x3e":(q+="\x3e",e="\x3c/"+a.type+"\x3e");a:{d=f.dangerouslySetInnerHTML;if(null!=
d){if(null!=d.__html){d=d.__html;break a}}else if(d=f.children,"string"===typeof d||"number"===typeof d){d=Q(d);break a}d=null}null!=d?(f=[],qa[b]&&"\n"===d.charAt(0)&&(q+="\n"),q+=d):f=X(f.children);a=a.type;c=null==c||"http://www.w3.org/1999/xhtml"===c?U(a):"http://www.w3.org/2000/svg"===c&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":c;this.stack.push({domNamespace:c,tag:b,children:f,childIndex:0,context:g,footer:e});this.previousWasTextNode=!1;return q};return a}();
function Aa(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
var Ba=function(a){function b(g,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var h=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");h=!h||"object"!==typeof h&&"function"!==typeof h?this:h;h.partialRenderer=new Y(g,c);return h}Aa(b,a);b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.emit("error",c)}};return b}(da.Readable),Ca={renderToString:function(a){return(new Y(a,
!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new Y(a,!0)).read(Infinity)},renderToNodeStream:function(a){return new Ba(a,!1)},renderToStaticNodeStream:function(a){return new Ba(a,!0)},version:"16.2.0"},Da=Object.freeze({default:Ca}),Z=Da&&Ca||Da;module.exports=Z["default"]?Z["default"]:Z;


/***/ }),
/* 17 */
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 18 */
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 19 */
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 20 */
/*!*****************************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenateStyleName.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(/*! ./hyphenate */ 21);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 21 */
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/hyphenate.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 22 */
/*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/memoizeStringOnly.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 23 */
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 24 */
/*!***************************!*\
  !*** external "get-port" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("get-port");

/***/ }),
/* 25 */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 26 */
/*!***********************************!*\
  !*** ./src/client/core/store.tsx ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ 2);
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ 27);
var middleware_1 = __webpack_require__(/*! ./middleware */ 28);
var reducers_1 = __webpack_require__(/*! ./reducers */ 30);
function configureStore(initialState) {
    var middleware = redux_1.applyMiddleware(middleware_1.reduxLogger);
    if (false) {
        middleware = redux_devtools_extension_1.composeWithDevTools(middleware);
    }
    var store = redux_1.createStore(reducers_1.default, initialState, middleware);
    if (false) {
        module.hot.accept('./reducers', function () {
            var nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
exports.configureStore = configureStore;


/***/ }),
/* 27 */
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 28 */
/*!**********************************************!*\
  !*** ./src/client/core/middleware/index.tsx ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_logger_1 = __webpack_require__(/*! redux-logger */ 29);
exports.reduxLogger = redux_logger_1.default;


/***/ }),
/* 29 */
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 30 */
/*!**************************************!*\
  !*** ./src/client/core/reducers.tsx ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ 2);
var reducers_1 = __webpack_require__(/*! ../modules/checkbox/reducers */ 31);
var rootReducer = redux_1.combineReducers({
    checkBoxItems: reducers_1.default,
});
exports.default = rootReducer;


/***/ }),
/* 31 */
/*!**************************************************!*\
  !*** ./src/client/modules/checkbox/reducers.tsx ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(/*! redux-actions */ 4);
var constants_1 = __webpack_require__(/*! ../../core/constants */ 5);
var initialState = [];
exports.default = redux_actions_1.handleActions((_a = {},
    _a[constants_1.ACTION.CHECKBOX.ADD] = function (state, action) {
        return state.concat([action.payload]);
    },
    _a), initialState);
var _a;


/***/ }),
/* 32 */
/*!************************************!*\
  !*** ./src/client/core/routes.tsx ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var react_router4_with_layouts_1 = __webpack_require__(/*! react-router4-with-layouts */ 33);
var HomePage_1 = __webpack_require__(/*! ../pages/home/HomePage */ 34);
var DemoPage_1 = __webpack_require__(/*! ../pages/demo/DemoPage */ 36);
var LoginPage_1 = __webpack_require__(/*! ../pages/login/LoginPage */ 42);
var DefaultLayout_1 = __webpack_require__(/*! ../layouts/default/DefaultLayout */ 44);
var EmptyLayout_1 = __webpack_require__(/*! ../layouts/empty/EmptyLayout */ 51);
exports.CoreRoutes = function () { return (React.createElement(react_router_dom_1.Switch, null,
    React.createElement(react_router4_with_layouts_1.Route, { path: "/", component: HomePage_1.HomePage, exact: true, layout: DefaultLayout_1.DefaultLayout }),
    React.createElement(react_router4_with_layouts_1.Route, { path: "/demo", component: DemoPage_1.DemoPage, layout: DefaultLayout_1.DefaultLayout }),
    React.createElement(react_router4_with_layouts_1.Route, { path: "/login", component: LoginPage_1.LoginPage, layout: EmptyLayout_1.EmptyLayout }))); };


/***/ }),
/* 33 */
/*!*********************************************!*\
  !*** external "react-router4-with-layouts" ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router4-with-layouts");

/***/ }),
/* 34 */
/*!********************************************!*\
  !*** ./src/client/pages/home/HomePage.tsx ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./HomePage.scss */ 35);
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(props) {
        return _super.call(this, props) || this;
    }
    HomePage.prototype.render = function () {
        return React.createElement("main", { className: styles.page }, "Component name: HomePage");
    };
    return HomePage;
}(React.Component));
exports.HomePage = HomePage;


/***/ }),
/* 35 */
/*!*********************************************!*\
  !*** ./src/client/pages/home/HomePage.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"page": "_R1BtWtfK3h4Fw3uoOQ3R"
};

/***/ }),
/* 36 */
/*!********************************************!*\
  !*** ./src/client/pages/demo/DemoPage.tsx ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./DemoPage.scss */ 37);
var AppContainer_1 = __webpack_require__(/*! ../../containers/AppContainer */ 38);
var actions_1 = __webpack_require__(/*! ../../modules/checkbox/actions */ 6);
var DemoPage = (function (_super) {
    __extends(DemoPage, _super);
    function DemoPage(props) {
        return _super.call(this, props) || this;
    }
    DemoPage.prototype.render = function () {
        return (React.createElement("main", { className: styles.page },
            "Component name: DemoPage",
            React.createElement(AppContainer_1.default, { addAction: actions_1.addCheckbox, items: [] })));
    };
    return DemoPage;
}(React.Component));
exports.DemoPage = DemoPage;


/***/ }),
/* 37 */
/*!*********************************************!*\
  !*** ./src/client/pages/demo/DemoPage.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"page": "_2I9bBt-llMFhV6VebXZacP"
};

/***/ }),
/* 38 */
/*!************************************************!*\
  !*** ./src/client/containers/AppContainer.tsx ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var redux_1 = __webpack_require__(/*! redux */ 2);
var react_redux_1 = __webpack_require__(/*! react-redux */ 3);
var uniqId = __webpack_require__(/*! uniqid */ 39);
var CheckBoxComponent_1 = __webpack_require__(/*! ../components/checkbox/CheckBoxComponent */ 40);
var actions_1 = __webpack_require__(/*! ../modules/checkbox/actions */ 6);
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedItems = new Map();
        _this.handleClick = function (item, checked) {
            if (checked) {
                _this.selectedItems.set(item.id, item);
            }
            else {
                _this.selectedItems.delete(item.id);
            }
        };
        _this.handleAdd = function () {
            _this.props.addAction({
                id: uniqId(),
                label: 'Demo',
                value: 'demo',
            });
        };
        _this.handleDelete = function () {
        };
        _this.state = { items: [] };
        return _this;
    }
    App.prototype.isSelected = function (item) {
        return this.selectedItems.has(item.id);
    };
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.handleAdd }, "Add more"),
            this.props.items.map(function (item) { return (React.createElement("div", { key: item.id },
                React.createElement(CheckBoxComponent_1.CheckBox, { item: item, handleClick: _this.handleClick }),
                React.createElement("button", { onClick: _this.handleDelete.bind(_this, item) }, "Delete"))); })));
    };
    App.defaultProps = {
        items: [
            {
                id: 'string',
                label: 'Demo',
                value: 'demo',
            },
        ],
        addAction: actions_1.addCheckbox,
    };
    return App;
}(React.Component));
exports.AppDisconnected = App;
function mapStateToProps(state) {
    return {
        items: state.checkBoxItems,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        addAction: redux_1.bindActionCreators(actions_1.addCheckbox, dispatch),
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);


/***/ }),
/* 39 */
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 40 */
/*!**************************************************************!*\
  !*** ./src/client/components/checkbox/CheckBoxComponent.tsx ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./CheckBoxComponent.css */ 41);
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            var checked = e.target.checked;
            _this.setState({ checked: checked });
            _this.props.handleClick(_this.props.item, checked);
        };
        _this.state = {
            checked: !!props.checked,
        };
        return _this;
    }
    CheckBox.prototype.componentWillMount = function () {
        this.setState({
            checked: !!this.props.checked,
        });
    };
    CheckBox.prototype.render = function () {
        var _a = this.props.item, value = _a.value, label = _a.label;
        return (React.createElement("label", { className: this.state.checked ? styles.checkBox : styles.checkBoxSelected },
            React.createElement("input", { type: "checkbox", onChange: this.handleClick, value: value, defaultChecked: this.props.checked }),
            label));
    };
    CheckBox.defaultProps = {
        checked: false,
    };
    return CheckBox;
}(React.Component));
exports.CheckBox = CheckBox;


/***/ }),
/* 41 */
/*!**************************************************************!*\
  !*** ./src/client/components/checkbox/CheckBoxComponent.css ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"checkBox": "usymS7Nkqf0uESbRnxkRH",
	"checkBoxSelected": "_1Mip5yUCg3Quf9cLcNEICl usymS7Nkqf0uESbRnxkRH"
};

/***/ }),
/* 42 */
/*!**********************************************!*\
  !*** ./src/client/pages/login/LoginPage.tsx ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./LoginPage.scss */ 43);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(props) {
        return _super.call(this, props) || this;
    }
    LoginPage.prototype.render = function () {
        return (React.createElement("main", { className: styles.page },
            "Component name: LoginPage",
            React.createElement("hr", null),
            React.createElement(react_router_dom_1.NavLink, { to: '/' }, "back to home")));
    };
    return LoginPage;
}(React.Component));
exports.LoginPage = LoginPage;


/***/ }),
/* 43 */
/*!***********************************************!*\
  !*** ./src/client/pages/login/LoginPage.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"page": "_62GT1Dg690LkfTBcH7dGy"
};

/***/ }),
/* 44 */
/*!******************************************************!*\
  !*** ./src/client/layouts/default/DefaultLayout.tsx ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var HeaderComponent_1 = __webpack_require__(/*! ../../components/header/HeaderComponent */ 45);
var FooterComponent_1 = __webpack_require__(/*! ../../components/footer/FooterComponent */ 49);
var styles = __webpack_require__(/*! ./DefaultLayout.scss */ 7);
var DefaultLayout = (function (_super) {
    __extends(DefaultLayout, _super);
    function DefaultLayout(props) {
        return _super.call(this, props) || this;
    }
    DefaultLayout.prototype.render = function () {
        return (React.createElement("div", { className: styles.layout },
            "Component name: DefaultLayout",
            React.createElement(HeaderComponent_1.HeaderComponent, { key: 'header' }),
            this.props.children,
            React.createElement(FooterComponent_1.FooterComponent, { key: 'footer' })));
    };
    return DefaultLayout;
}(React.Component));
exports.DefaultLayout = DefaultLayout;


/***/ }),
/* 45 */
/*!**********************************************************!*\
  !*** ./src/client/components/header/HeaderComponent.tsx ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./HeaderComponent.scss */ 46);
var NavigationComponent_1 = __webpack_require__(/*! ../navigation/NavigationComponent */ 47);
var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(props) {
        return _super.call(this, props) || this;
    }
    HeaderComponent.prototype.render = function () {
        return (React.createElement("div", { className: styles.header },
            "Component name: HeaderComponent",
            React.createElement(NavigationComponent_1.NavigationComponent, null)));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;


/***/ }),
/* 46 */
/*!***********************************************************!*\
  !*** ./src/client/components/header/HeaderComponent.scss ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"header": "RnmmjinHL6WsHJBl8rtyb"
};

/***/ }),
/* 47 */
/*!******************************************************************!*\
  !*** ./src/client/components/navigation/NavigationComponent.tsx ***!
  \******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ 1);
var styles = __webpack_require__(/*! ./NavigationComponent.scss */ 48);
var NavigationComponent = (function (_super) {
    __extends(NavigationComponent, _super);
    function NavigationComponent(props) {
        return _super.call(this, props) || this;
    }
    NavigationComponent.prototype.render = function () {
        return (React.createElement("nav", { className: styles.navigation },
            React.createElement("div", null, "Component name: NavigationComponent"),
            React.createElement(react_router_dom_1.NavLink, { to: '/', exact: true }, "Home"),
            React.createElement(react_router_dom_1.NavLink, { to: '/demo' }, "Demo"),
            React.createElement(react_router_dom_1.NavLink, { to: '/login', style: { float: 'right' } }, "Login")));
    };
    return NavigationComponent;
}(React.Component));
exports.NavigationComponent = NavigationComponent;


/***/ }),
/* 48 */
/*!*******************************************************************!*\
  !*** ./src/client/components/navigation/NavigationComponent.scss ***!
  \*******************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"navigation": "_1eBufkGeiUVOsc791udF6P"
};

/***/ }),
/* 49 */
/*!**********************************************************!*\
  !*** ./src/client/components/footer/FooterComponent.tsx ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ./FooterComponent.scss */ 50);
var FooterComponent = (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent(props) {
        return _super.call(this, props) || this;
    }
    FooterComponent.prototype.render = function () {
        return React.createElement("footer", { className: styles.footer }, "Component name: FooterComponent");
    };
    return FooterComponent;
}(React.Component));
exports.FooterComponent = FooterComponent;


/***/ }),
/* 50 */
/*!***********************************************************!*\
  !*** ./src/client/components/footer/FooterComponent.scss ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"footer": "_1CAv33Pc8SJnfGn1m27kEc"
};

/***/ }),
/* 51 */
/*!**************************************************!*\
  !*** ./src/client/layouts/empty/EmptyLayout.tsx ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var styles = __webpack_require__(/*! ../default/DefaultLayout.scss */ 7);
var EmptyLayout = (function (_super) {
    __extends(EmptyLayout, _super);
    function EmptyLayout(props) {
        return _super.call(this, props) || this;
    }
    EmptyLayout.prototype.render = function () {
        return (React.createElement("div", { className: styles.layout },
            "Component name: EmptyLayout",
            this.props.children));
    };
    return EmptyLayout;
}(React.Component));
exports.EmptyLayout = EmptyLayout;


/***/ }),
/* 52 */
/*!******************************************!*\
  !*** ./src/client/core/initialState.tsx ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = {
    checkBoxItems: [{ id: '1', label: '1', value: '1' }, { id: '2', label: '2', value: '2' }],
};


/***/ })
/******/ ]);