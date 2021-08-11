(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/products.repository.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/products.repository.ts ***!
  \*************************************************/
/*! exports provided: getAllProducts, getProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
const products = [
    {
        id: 'mac-fix-plus',
        name: 'Mac Prep + Prime Fix +',
        image: 'https://cdn.kicks.se/globalassets/integrationimages/773602345830.jpg',
        price: 210,
        rating: Math.random(),
        description: 'Prep + Prime Fix+ är en fuktgivande ansiktsspray och primer, som friskar upp huden och fixerar din makeup. Den har länge varit en favorit bland professionella makeupartister och sprayen är idag en av våra bästsäljare som har vunnit mängder av utmärkelser. Fix+ ansiktsspray och primer från MAC Cosmetics är fullspäckat med vitaminer och mineraler. Den innehåller dessutom gurka, grönt te och kamomill som håller huden fräsch hela dagen - plus att den har mängder av olika användningsområden. Du kan använda den till att återfukta huden innan du lägger makeup på morgonen, spraya lite under dagen ovanpå din makeup för att återfukta huden och fräscha upp makeupen för ett fint resultat. Dessutom kan Fix+ ansiktsspray och primer användas till förbättra din makeup genom att få rouge, foundation och puder att blanda sig bättre. Fix+ ansiktsspray och primer från MAC Cosmetics är dermatologiskt och oftalmologiskt testad och passar därför till olika hudtyperukt och en fräsch makeup med fin lyster.',
    },
    {
        id: 'mac-studio-fix-foundation',
        name: 'Mac Studio Fix Fluid Foundation',
        image: 'https://cdn.kicks.se/globalassets/integrationimages/773602103485.jpg',
        price: 325,
        rating: Math.random(),
        description: 'Studio Fix Fluid från MAC Cosmetics är en medeltäckande till heltäckande, flytande foundation som ger en matt look och täcker orenheter, pigmentfläckar, porer och röda prickar. Studio Fix foundation är mjuk och lätt att applicera men håller ändå väldigt länge. Studio Fix Fluid håller din hud och makeup fräsch, även om du är på språng hela dagen. Studio Fix Fluid är oljefri och den kan därför användas på fet hud eftersom den kontrollerar olja och glansighet. Pump ingår ej, köps separat. Studio Fix Fluid från MAC Cosmetics skyddar mot UV-A och UV-B, och innehåller SPF 15. Den finns i över 60 olika färger så det finns garanterat en för varje hudfärg och underton.',
    },
    {
        id: 'mac-mineralize-skinfinish',
        name: 'MAC Mineralize Skinfinish Natural',
        image: 'https://cdn.kicks.se/globalassets/integrationimages/773602111558-1.jpg',
        price: 325,
        rating: Math.random(),
        description: 'Mineralize Skinfinish Soft & Gentle är en highlighter med en lätt metallicskimrande färg som ger huden en fin och naturlig lyster. Soft & Gentle highlighter/mineralpuder är utvecklat för att ljusa upp områden i ansiktet och ge huden en mjuk, skimrande lyster. Soft & Gentle highlighter/mineralpuder från MAC Cosmetics innehåller E-vitamin och är lätt att applicera. Soft & Gentle kan användas av de flesta hudfärger, undertoner och inte minst på olika ställen på kroppen. Mineralize Skinfinish Soft & Gentle från MAC Cosmetics är både dermatologiskt och oftalmologiskt testad.',
    },
    {
        id: 'paco-rabanne-pure-xs',
        name: 'Paco Rabanne Pure XS For Her EdP 30 ml',
        image: 'https://cdn.kicks.se/globalassets/integrationimages/13349668545664-flaska.jpg',
        price: 570,
        rating: Math.random(),
        description: 'En djup, blommig och orientalisk doft med en hint av popcorn, svart vanilj samt ylang ylang. En frigjord och fängslande doft som dröjer sig kvar på huden.',
    },
    {
        id: 'paco-rabanne-lady-million',
        name: 'Paco Rabanne Lady Million EdP 30 ml',
        image: 'https://cdn.kicks.se/globalassets/integrationimages/3349668508488.jpg',
        price: 570,
        rating: Math.random(),
        description: 'Lady Milllion är frisk, blommig och träig, likt nektar av yppiga blommor, efterföljande försiktigt men fortfarande mycket närvarande. Den är kraftfullt förförisk med noter av neroli och hallon.',
    },
    {
        id: 'versace-crystal-noir',
        name: 'Versace Crystal Noir EdT 50 ml',
        image: 'https://cdn.kicks.se/globalassets/integrationimages/8018365071162.jpg',
        price: 760,
        rating: Math.random(),
        description: 'Crystal Noir en magisk och dyrbar doft med förtrollande, sensuella och feminina noter för den självsäkra, förförande Versacekvinnan som alltid bär huvudet högt. En parfym som inte går någon obemärkt förbi. Doften öppnar upp med spännande noter av peppar och ingefära tätt följt av mild gardenia. En svag förnimmelse av frisk apelsinblomma efterföljs av mjuk pion. Den varma basen är en magisk kombination av amber, mysk och sandelträ. En delikat och ultrafeminin doft.',
    },
];
const getAllProducts = () => products;
const getProduct = (id) => products.find((product) => product.id === id);


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_products_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/products.repository */ "./apps/api/src/app/products.repository.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */


const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.get('/api/products', (req, res) => {
    res.send(Object(_app_products_repository__WEBPACK_IMPORTED_MODULE_1__["getAllProducts"])());
});
app.get('/api/products/:id', (req, res) => {
    res.send(Object(_app_products_repository__WEBPACK_IMPORTED_MODULE_1__["getProduct"])(req.params.id));
});
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saraonval/Documents/Projects/nxegghead/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map