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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CarParts.ts":
/*!*************************!*\
  !*** ./src/CarParts.ts ***!
  \*************************/
/*! exports provided: RollsRoyseEngine, RollsRoyseWheels, RollsRoyseCarBody, ZaporozhetsEngine, ZaporozhetsWheels, ZaporozhetsCarBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollsRoyseEngine", function() { return RollsRoyseEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollsRoyseWheels", function() { return RollsRoyseWheels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollsRoyseCarBody", function() { return RollsRoyseCarBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZaporozhetsEngine", function() { return ZaporozhetsEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZaporozhetsWheels", function() { return ZaporozhetsWheels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZaporozhetsCarBody", function() { return ZaporozhetsCarBody; });
var RollsRoyseEngine = /** @class */ (function () {
    function RollsRoyseEngine() {
    }
    RollsRoyseEngine.prototype.engine = function () {
        return "Nice engine";
    };
    return RollsRoyseEngine;
}());

var RollsRoyseWheels = /** @class */ (function () {
    function RollsRoyseWheels() {
    }
    RollsRoyseWheels.prototype.wheels = function () {
        return "Exellent wheels";
    };
    return RollsRoyseWheels;
}());

var RollsRoyseCarBody = /** @class */ (function () {
    function RollsRoyseCarBody() {
    }
    RollsRoyseCarBody.prototype.body = function () {
        return "Perfect body";
    };
    return RollsRoyseCarBody;
}());

var ZaporozhetsEngine = /** @class */ (function () {
    function ZaporozhetsEngine() {
    }
    ZaporozhetsEngine.prototype.engine = function () {
        return "Powerful engine";
    };
    return ZaporozhetsEngine;
}());

var ZaporozhetsWheels = /** @class */ (function () {
    function ZaporozhetsWheels() {
    }
    ZaporozhetsWheels.prototype.wheels = function () {
        return "Reliable wheels";
    };
    return ZaporozhetsWheels;
}());

var ZaporozhetsCarBody = /** @class */ (function () {
    function ZaporozhetsCarBody() {
    }
    ZaporozhetsCarBody.prototype.body = function () {
        return "Strong body";
    };
    return ZaporozhetsCarBody;
}());



/***/ }),

/***/ "./src/RollsRoyce.ts":
/*!***************************!*\
  !*** ./src/RollsRoyce.ts ***!
  \***************************/
/*! exports provided: RollsRoyse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollsRoyse", function() { return RollsRoyse; });
/* harmony import */ var _CarParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarParts */ "./src/CarParts.ts");

var RollsRoyse = /** @class */ (function () {
    function RollsRoyse() {
    }
    RollsRoyse.prototype.createEngine = function () {
        return new _CarParts__WEBPACK_IMPORTED_MODULE_0__["RollsRoyseEngine"]();
    };
    RollsRoyse.prototype.createWheels = function () {
        return new _CarParts__WEBPACK_IMPORTED_MODULE_0__["RollsRoyseWheels"]();
    };
    RollsRoyse.prototype.createBody = function () {
        return new _CarParts__WEBPACK_IMPORTED_MODULE_0__["RollsRoyseCarBody"]();
    };
    RollsRoyse.prototype.info = function () {
        return this.createEngine().engine() + ", " + this.createWheels().wheels() + ", " + this.createBody().body() + ". Legendary car, Rolls Royce.";
    };
    return RollsRoyse;
}());



/***/ }),

/***/ "./src/Zaporozhets.ts":
/*!****************************!*\
  !*** ./src/Zaporozhets.ts ***!
  \****************************/
/*! exports provided: Zaporozhets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zaporozhets", function() { return Zaporozhets; });
/* harmony import */ var _CarParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarParts */ "./src/CarParts.ts");

var Zaporozhets = /** @class */ (function () {
    function Zaporozhets() {
    }
    Zaporozhets.prototype.createEngine = function () {
        return new _CarParts__WEBPACK_IMPORTED_MODULE_0__["ZaporozhetsEngine"]();
    };
    Zaporozhets.prototype.createWheels = function () {
        return new _CarParts__WEBPACK_IMPORTED_MODULE_0__["ZaporozhetsWheels"]();
    };
    Zaporozhets.prototype.createBody = function () {
        return new _CarParts__WEBPACK_IMPORTED_MODULE_0__["ZaporozhetsCarBody"]();
    };
    Zaporozhets.prototype.info = function () {
        return this.createEngine().engine() + ", " + this.createWheels().wheels() + ", " + this.createBody().body() + ". Car of all times, Zaporozhets.";
    };
    return Zaporozhets;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RollsRoyce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RollsRoyce */ "./src/RollsRoyce.ts");
/* harmony import */ var _Zaporozhets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Zaporozhets */ "./src/Zaporozhets.ts");


var myRollsRoyce = new _RollsRoyce__WEBPACK_IMPORTED_MODULE_0__["RollsRoyse"]();
var myZaporozhets = new _Zaporozhets__WEBPACK_IMPORTED_MODULE_1__["Zaporozhets"]();
console.log(myRollsRoyce.info());
console.log(myZaporozhets.info());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhclBhcnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Sb2xsc1JveWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9aYXBvcm96aGV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0lBQUE7SUFJQSxDQUFDO0lBSFUsaUNBQU0sR0FBYjtRQUNJLE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUM7O0FBQ0Q7SUFBQTtJQUlBLENBQUM7SUFIVSxpQ0FBTSxHQUFiO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDOztBQUNEO0lBQUE7SUFJQSxDQUFDO0lBSFUsZ0NBQUksR0FBWDtRQUNJLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIVSxrQ0FBTSxHQUFiO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDOztBQUNEO0lBQUE7SUFJQSxDQUFDO0lBSFUsa0NBQU0sR0FBYjtRQUNJLE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQzs7QUFDRDtJQUFBO0lBSUEsQ0FBQztJQUhVLGlDQUFJLEdBQVg7UUFDSSxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUFBO0FBQUE7QUFBNEM7QUFFNUM7SUFBQTtJQWNBLENBQUM7SUFiVSxpQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSwwREFBOEIsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDTSxpQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSwwREFBOEIsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDTSwrQkFBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSwyREFBK0IsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFTSx5QkFBSSxHQUFYO1FBQ0ksT0FBVSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUssSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFLLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsa0NBQStCO0lBQ3ZJLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQTtBQUE0QztBQUU1QztJQUFBO0lBY0EsQ0FBQztJQWJVLGtDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLDJEQUErQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNNLGtDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLDJEQUErQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNNLGdDQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLDREQUFnQyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVNLDBCQUFJLEdBQVg7UUFDSSxPQUFVLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBSyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUssSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxxQ0FBa0M7SUFDMUksQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFBO0FBQXdDO0FBQ0U7QUFHMUMsSUFBTSxZQUFZLEdBQWlDLElBQUksc0RBQVUsRUFBRSxDQUFDO0FBQ3BFLElBQU0sYUFBYSxHQUFnQyxJQUFJLHdEQUFXLEVBQUUsQ0FBQztBQUVyRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgKiBhcyBQYXJ0cyBmcm9tIFwiLi9DYXJQYXJ0c0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb2xsc1JveXNlRW5naW5lIGltcGxlbWVudHMgUGFydHMuRW5naW5lSW50ZXJmYWNlIHtcclxuICAgIHB1YmxpYyBlbmdpbmUoKTogc3RyaW5nIHsgXHJcbiAgICAgICAgcmV0dXJuIFwiTmljZSBlbmdpbmVcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUm9sbHNSb3lzZVdoZWVscyBpbXBsZW1lbnRzIFBhcnRzLldoZWVsc0ludGVyZmFjZSB7XHJcbiAgICBwdWJsaWMgd2hlZWxzKCk6IHN0cmluZyB7IFxyXG4gICAgICAgIHJldHVybiBcIkV4ZWxsZW50IHdoZWVsc1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSb2xsc1JveXNlQ2FyQm9keSBpbXBsZW1lbnRzIFBhcnRzLkNhckJvZHlJbnRlcmZhY2Uge1xyXG4gICAgcHVibGljIGJvZHkoKTogc3RyaW5nIHsgXHJcbiAgICAgICAgcmV0dXJuIFwiUGVyZmVjdCBib2R5XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBaYXBvcm96aGV0c0VuZ2luZSBpbXBsZW1lbnRzIFBhcnRzLkVuZ2luZUludGVyZmFjZSB7XHJcbiAgICBwdWJsaWMgZW5naW5lKCk6IHN0cmluZyB7IFxyXG4gICAgICAgIHJldHVybiBcIlBvd2VyZnVsIGVuZ2luZVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBaYXBvcm96aGV0c1doZWVscyBpbXBsZW1lbnRzIFBhcnRzLldoZWVsc0ludGVyZmFjZSB7XHJcbiAgICBwdWJsaWMgd2hlZWxzKCk6IHN0cmluZyB7IFxyXG4gICAgICAgIHJldHVybiBcIlJlbGlhYmxlIHdoZWVsc1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBaYXBvcm96aGV0c0NhckJvZHkgaW1wbGVtZW50cyBQYXJ0cy5DYXJCb2R5SW50ZXJmYWNlIHtcclxuICAgIHB1YmxpYyBib2R5KCk6IHN0cmluZyB7IFxyXG4gICAgICAgIHJldHVybiBcIlN0cm9uZyBib2R5XCI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0Q2FyRmFjdG9yeUludGVyZmFjZX0gZnJvbSBcIi4vQWJzdHJhY3RDYXJGYWN0b3J5SW50ZXJmYWNlXCI7XHJcbmltcG9ydCAqIGFzIFBhcnRzSW50ZXJmYWNlIGZyb20gXCIuL0NhclBhcnRzSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgKiBhcyBDb25jcmV0ZVBhcnRzIGZyb20gXCIuL0NhclBhcnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9sbHNSb3lzZSBpbXBsZW1lbnRzIEFic3RyYWN0Q2FyRmFjdG9yeUludGVyZmFjZXtcclxuICAgIHB1YmxpYyBjcmVhdGVFbmdpbmUoKTogUGFydHNJbnRlcmZhY2UuRW5naW5lSW50ZXJmYWNle1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29uY3JldGVQYXJ0cy5Sb2xsc1JveXNlRW5naW5lKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY3JlYXRlV2hlZWxzKCk6IFBhcnRzSW50ZXJmYWNlLldoZWVsc0ludGVyZmFjZXtcclxuICAgICAgICByZXR1cm4gbmV3IENvbmNyZXRlUGFydHMuUm9sbHNSb3lzZVdoZWVscygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNyZWF0ZUJvZHkoKTogUGFydHNJbnRlcmZhY2UuQ2FyQm9keUludGVyZmFjZXtcclxuICAgICAgICByZXR1cm4gbmV3IENvbmNyZXRlUGFydHMuUm9sbHNSb3lzZUNhckJvZHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNyZWF0ZUVuZ2luZSgpLmVuZ2luZSgpfSwgJHt0aGlzLmNyZWF0ZVdoZWVscygpLndoZWVscygpfSwgJHt0aGlzLmNyZWF0ZUJvZHkoKS5ib2R5KCl9LiBMZWdlbmRhcnkgY2FyLCBSb2xscyBSb3ljZS5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0Q2FyRmFjdG9yeUludGVyZmFjZX0gZnJvbSBcIi4vQWJzdHJhY3RDYXJGYWN0b3J5SW50ZXJmYWNlXCI7XHJcbmltcG9ydCAqIGFzIFBhcnRzSW50ZXJmYWNlIGZyb20gXCIuL0NhclBhcnRzSW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgKiBhcyBDb25jcmV0ZVBhcnRzIGZyb20gXCIuL0NhclBhcnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgWmFwb3JvemhldHMgaW1wbGVtZW50cyBBYnN0cmFjdENhckZhY3RvcnlJbnRlcmZhY2V7XHJcbiAgICBwdWJsaWMgY3JlYXRlRW5naW5lKCk6IFBhcnRzSW50ZXJmYWNlLkVuZ2luZUludGVyZmFjZXtcclxuICAgICAgICByZXR1cm4gbmV3IENvbmNyZXRlUGFydHMuWmFwb3JvemhldHNFbmdpbmUoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjcmVhdGVXaGVlbHMoKTogUGFydHNJbnRlcmZhY2UuV2hlZWxzSW50ZXJmYWNle1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29uY3JldGVQYXJ0cy5aYXBvcm96aGV0c1doZWVscygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNyZWF0ZUJvZHkoKTogUGFydHNJbnRlcmZhY2UuQ2FyQm9keUludGVyZmFjZXtcclxuICAgICAgICByZXR1cm4gbmV3IENvbmNyZXRlUGFydHMuWmFwb3JvemhldHNDYXJCb2R5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jcmVhdGVFbmdpbmUoKS5lbmdpbmUoKX0sICR7dGhpcy5jcmVhdGVXaGVlbHMoKS53aGVlbHMoKX0sICR7dGhpcy5jcmVhdGVCb2R5KCkuYm9keSgpfS4gQ2FyIG9mIGFsbCB0aW1lcywgWmFwb3JvemhldHMuYFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtBYnN0cmFjdENhckZhY3RvcnlJbnRlcmZhY2V9IGZyb20gXCIuL0Fic3RyYWN0Q2FyRmFjdG9yeUludGVyZmFjZVwiO1xyXG5pbXBvcnQge1JvbGxzUm95c2V9IGZyb20gXCIuL1JvbGxzUm95Y2VcIjtcclxuaW1wb3J0IHtaYXBvcm96aGV0c30gZnJvbSBcIi4vWmFwb3JvemhldHNcIjtcclxuXHJcblxyXG5jb25zdCBteVJvbGxzUm95Y2U6ICBBYnN0cmFjdENhckZhY3RvcnlJbnRlcmZhY2UgPSBuZXcgUm9sbHNSb3lzZSgpO1xyXG5jb25zdCBteVphcG9yb3poZXRzOiBBYnN0cmFjdENhckZhY3RvcnlJbnRlcmZhY2UgPSBuZXcgWmFwb3JvemhldHMoKTtcclxuXHJcbmNvbnNvbGUubG9nKG15Um9sbHNSb3ljZS5pbmZvKCkpO1xyXG5jb25zb2xlLmxvZyhteVphcG9yb3poZXRzLmluZm8oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==