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

/***/ "./src/ClientCode.ts":
/*!***************************!*\
  !*** ./src/ClientCode.ts ***!
  \***************************/
/*! exports provided: clientCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientCode", function() { return clientCode; });
function clientCode(subject) {
    subject.walkStraightForward(23);
    subject.turnRight();
    subject.turnLeft();
    subject.defuseBomb();
}


/***/ }),

/***/ "./src/Robot.ts":
/*!**********************!*\
  !*** ./src/Robot.ts ***!
  \**********************/
/*! exports provided: Robot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Robot", function() { return Robot; });
class Robot {
    walkStraightForward(value) {
        console.log(`I walked ${value} steps`);
    }
    turnRight() {
        console.log('I turned right');
    }
    turnLeft() {
        console.log('I turned left');
    }
    defuseBomb() {
        console.log('The bomb is defused');
    }
}


/***/ }),

/***/ "./src/RobotProxy.ts":
/*!***************************!*\
  !*** ./src/RobotProxy.ts ***!
  \***************************/
/*! exports provided: RobotProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotProxy", function() { return RobotProxy; });
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");

class RobotProxy {
    constructor(_bombRobot = null) {
        this._bombRobot = _bombRobot;
    }
    walkStraightForward(value) {
        this._checkConnectionToRobot();
        this._bombRobot.walkStraightForward(value);
    }
    turnRight() {
        this._checkConnectionToRobot();
        this._bombRobot.turnRight();
    }
    turnLeft() {
        this._checkConnectionToRobot();
        this._bombRobot.turnLeft();
    }
    defuseBomb() {
        this._checkConnectionToRobot();
        this._bombRobot.defuseBomb();
    }
    _checkConnectionToRobot() {
        if (this._bombRobot === null) {
            this._bombRobot = new _Robot__WEBPACK_IMPORTED_MODULE_0__["Robot"]();
        }
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RobotProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RobotProxy */ "./src/RobotProxy.ts");
/* harmony import */ var _ClientCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientCode */ "./src/ClientCode.ts");
/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Robot */ "./src/Robot.ts");



let robot = new _Robot__WEBPACK_IMPORTED_MODULE_2__["Robot"]();
let myProxy = new _RobotProxy__WEBPACK_IMPORTED_MODULE_0__["RobotProxy"](robot);
Object(_ClientCode__WEBPACK_IMPORTED_MODULE_1__["clientCode"])(robot);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NsaWVudENvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JvYm90LnRzIiwid2VicGFjazovLy8uL3NyYy9Sb2JvdFByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBTyxTQUFTLFVBQVUsQ0FBQyxPQUF1QjtJQUNoRCxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdkIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBTyxNQUFNLEtBQUs7SUFDaEIsbUJBQW1CLENBQUMsS0FBYTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsU0FBUztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELFVBQVU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFBQTtBQUFBO0FBQWdDO0FBRXpCLE1BQU0sVUFBVTtJQUVyQixZQUFZLGFBQW9CLElBQUk7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUNELG1CQUFtQixDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ08sdUJBQXVCO1FBQzdCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDRDQUFLLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUVBO0FBQ1Y7QUFFaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSw0Q0FBSyxFQUFFLENBQUM7QUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxzREFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLDhEQUFVLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBSb2JvdEludGVyZmFjZSB9IGZyb20gJy4vUm9ib3RJbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsaWVudENvZGUoc3ViamVjdDogUm9ib3RJbnRlcmZhY2UpIHtcclxuICBzdWJqZWN0LndhbGtTdHJhaWdodEZvcndhcmQoMjMpO1xyXG4gIHN1YmplY3QudHVyblJpZ2h0KCk7XHJcbiAgc3ViamVjdC50dXJuTGVmdCgpO1xyXG4gIHN1YmplY3QuZGVmdXNlQm9tYigpO1xyXG59XHJcbiIsImltcG9ydCB7IFJvYm90SW50ZXJmYWNlIH0gZnJvbSAnLi9Sb2JvdEludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9ib3QgaW1wbGVtZW50cyBSb2JvdEludGVyZmFjZSB7XHJcbiAgd2Fsa1N0cmFpZ2h0Rm9yd2FyZCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgSSB3YWxrZWQgJHt2YWx1ZX0gc3RlcHNgKTtcclxuICB9XHJcbiAgdHVyblJpZ2h0KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ0kgdHVybmVkIHJpZ2h0Jyk7XHJcbiAgfVxyXG5cclxuICB0dXJuTGVmdCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdJIHR1cm5lZCBsZWZ0Jyk7XHJcbiAgfVxyXG4gIGRlZnVzZUJvbWIoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnVGhlIGJvbWIgaXMgZGVmdXNlZCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSb2JvdEludGVyZmFjZSB9IGZyb20gJy4vUm9ib3RJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBSb2JvdCB9IGZyb20gJy4vUm9ib3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvYm90UHJveHkgaW1wbGVtZW50cyBSb2JvdEludGVyZmFjZSB7XHJcbiAgcHJpdmF0ZSBfYm9tYlJvYm90OiBSb2JvdDtcclxuICBjb25zdHJ1Y3RvcihfYm9tYlJvYm90OiBSb2JvdCA9IG51bGwpIHtcclxuICAgIHRoaXMuX2JvbWJSb2JvdCA9IF9ib21iUm9ib3Q7XHJcbiAgfVxyXG4gIHdhbGtTdHJhaWdodEZvcndhcmQodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fY2hlY2tDb25uZWN0aW9uVG9Sb2JvdCgpO1xyXG4gICAgdGhpcy5fYm9tYlJvYm90LndhbGtTdHJhaWdodEZvcndhcmQodmFsdWUpO1xyXG4gIH1cclxuICB0dXJuUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jaGVja0Nvbm5lY3Rpb25Ub1JvYm90KCk7XHJcbiAgICB0aGlzLl9ib21iUm9ib3QudHVyblJpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICB0dXJuTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NoZWNrQ29ubmVjdGlvblRvUm9ib3QoKTtcclxuICAgIHRoaXMuX2JvbWJSb2JvdC50dXJuTGVmdCgpO1xyXG4gIH1cclxuICBkZWZ1c2VCb21iKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2hlY2tDb25uZWN0aW9uVG9Sb2JvdCgpO1xyXG4gICAgdGhpcy5fYm9tYlJvYm90LmRlZnVzZUJvbWIoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY2hlY2tDb25uZWN0aW9uVG9Sb2JvdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9ib21iUm9ib3QgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5fYm9tYlJvYm90ID0gbmV3IFJvYm90KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvYm90UHJveHkgfSBmcm9tICcuL1JvYm90UHJveHknO1xyXG5pbXBvcnQgeyBSb2JvdEludGVyZmFjZSB9IGZyb20gJy4vUm9ib3RJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBjbGllbnRDb2RlIH0gZnJvbSAnLi9DbGllbnRDb2RlJztcclxuaW1wb3J0IHsgUm9ib3QgfSBmcm9tICcuL1JvYm90JztcclxuXHJcbmxldCByb2JvdCA9IG5ldyBSb2JvdCgpO1xyXG5sZXQgbXlQcm94eSA9IG5ldyBSb2JvdFByb3h5KHJvYm90KTtcclxuY2xpZW50Q29kZShyb2JvdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=