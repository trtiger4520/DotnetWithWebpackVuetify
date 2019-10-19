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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Components/Maps.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--0-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Maps.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _Components_Maps_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Maps.vue */ "./src/Components/Maps.vue");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 1;
        return _this;
    }
    App.prototype.add = function () {
        this.count++;
    };
    App = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            components: {
                'google-map': _Components_Maps_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
            }
        })
    ], App);
    return App;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/Components/Maps.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Maps.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
/* harmony import */ var _store_gmap_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/gmap.store */ "./src/store/gmap.store.ts");
/* harmony import */ var _data_defaultMapList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/defaultMapList */ "./src/data/defaultMapList.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var store = Object(vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__["getModule"])(_store_gmap_store__WEBPACK_IMPORTED_MODULE_2__["default"]);
var Maps = /** @class */ (function (_super) {
    __extends(Maps, _super);
    function Maps() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.googleMapLink = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxhRPC8zLimKVRXM0wIgrVtZKXXAyGH_Q';
        _this_1.map = null;
        _this_1.states = [];
        _this_1.centerLocation = { lat: 25.0347707, lng: 121.3520598 };
        _this_1.zoom = 10;
        _this_1.driverDataList = [];
        return _this_1;
    }
    Maps.prototype.created = function () {
    };
    Maps.prototype.mounted = function () {
        var _this = this;
        _this.GetMapScript();
    };
    Object.defineProperty(Maps.prototype, "GoogleMapInitOption", {
        get: function () {
            var _a = this, zoom = _a.zoom, center = _a.centerLocation;
            return {
                zoom: zoom, center: center,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
        },
        enumerable: true,
        configurable: true
    });
    /** 在body底部新增scripts並設定完成後啟動地圖功能 */
    Maps.prototype.GetMapScript = function () {
        var _this = this;
        var _doc = document || window.document || globalThis.document;
        var scriptTag = _doc.createElement('script');
        scriptTag.src = _this.googleMapLink;
        scriptTag.addEventListener('load', _this.GoogleMapScriptOnLoad.bind(_this));
        _doc.body.appendChild(scriptTag);
    };
    /** 設定取得初始化資料ajax地區 */
    Maps.prototype.GetMapInitDataAjax = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ajaxResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, JSON.parse(JSON.stringify(_data_defaultMapList__WEBPACK_IMPORTED_MODULE_3__["default"]))];
                    case 1:
                        ajaxResponse = _a.sent();
                        return [2 /*return*/, ajaxResponse];
                }
            });
        });
    };
    Maps.prototype.GoogleMapScriptOnLoad = function () {
        var el = this.$el.querySelector('#Map');
        if (!el) {
            return;
        }
        var _a = this, zoom = _a.zoom, center = _a.centerLocation;
        this.map = new google.maps.Map(el, this.GoogleMapInitOption);
        this.GetMapInitData();
        this.markerCluster = new MarkerClusterer(this.map, this.states.reduce(function (markers, state) {
            if (state.Marker)
                markers.push(state.Marker);
            return markers;
        }, []), { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    };
    Maps.prototype.GetMapInitData = function () {
        var _this = this;
        var data = this.GetMapInitDataAjax();
        data.then(function (res) {
            if (!res.Success) {
                console.error('取得車輛資訊失敗');
            }
            if (!res.Data) {
                return;
            }
            _this.states = _this.ConvertCarGroupsToCarState(res.Data.CarGroups);
        });
    };
    Maps.prototype.ConvertCarGroupsToCarState = function (groups) {
        var MarkIndex = 0;
        return groups.reduce(function (states, group, index) {
            var carStates = group.Cars.map(function (car) {
                var state = __assign(__assign({}, car), { MarkerId: '#Marker' + MarkIndex.toString(), GroupId: group.GroupId, Marker: new google.maps.Marker({
                        position: new google.maps.LatLng(car.LastCoordinate.Latitude, car.LastCoordinate.Longitude)
                    }) });
                MarkIndex++;
                return state;
            });
            return states;
        }, []);
    };
    Object.defineProperty(Maps.prototype, "Count", {
        // CreateMarkerByLastLocation() {
        //     const { map, states } = this;
        //     if (!map) { return; }
        //     states.forEach(state => {
        //         const { Latitude, Longitude } = state.LastCoordinate;
        //         state.Marker = new google.maps.Marker({
        //             position: new google.maps.LatLng(Latitude, Longitude),
        //             map
        //         });
        //     })
        // }
        get: function () { return store.count; },
        enumerable: true,
        configurable: true
    });
    Maps.prototype.Add = function () { store.Add(); };
    Maps = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]
    ], Maps);
    return Maps;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (Maps);


/***/ }),

/***/ "./node_modules/vue-class-component/dist/vue-class-component.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-class-component/dist/vue-class-component.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, createDecorator, mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecorator", function() { return createDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */


// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (true) {
        if (!(Component.prototype instanceof vue__WEBPACK_IMPORTED_MODULE_0__["default"]) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0__["default"]
        ? superProto.constructor
        : vue__WEBPACK_IMPORTED_MODULE_0__["default"];
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if ( true &&
            reservedPropertyNames.indexOf(key) >= 0) {
            warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                'conflicts with reserved property name of Vue internal. ' +
                'It may cause unexpected behavior of the component. Consider renaming the property.');
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ __webpack_exports__["default"] = (Component);



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h1", [_vm._v("Index")]),
    _vm._v(" "),
    _c("button", { staticClass: "btn btn-primary", on: { click: _vm.add } }, [
      _vm._v("count " + _vm._s(_vm.count))
    ]),
    _vm._v(" "),
    _c("div", [_c("google-map")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Components/Maps.vue?vue&type=template&id=2c825727&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Maps.vue?vue&type=template&id=2c825727& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "map", attrs: { id: "Map" } }),
    _vm._v(" "),
    _c("button", { staticClass: "btn btn-danger", on: { click: _vm.Add } }, [
      _vm._v("\n        " + _vm._s(_vm.Count) + "\n    ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/vue-property-decorator.js ***!
  \***************************************************************************/
/*! exports provided: Component, Vue, Mixins, Inject, InjectReactive, Provide, ProvideReactive, Model, Prop, PropSync, Watch, Emit, Ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inject", function() { return Inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectReactive", function() { return InjectReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provide", function() { return Provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideReactive", function() { return ProvideReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropSync", function() { return PropSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watch", function() { return Watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emit", function() { return Emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ref", function() { return Ref; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mixins", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__["mixins"]; });

/** vue-property-decorator verson 8.2.2 MIT LICENSE copyright 2019 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) ||
                    null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_2 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var _this = this;
                var rv = Object.create((typeof original_2 === 'function' ? original_2.call(this) : original_2) ||
                    null);
                rv[reactiveInjectKey] = {};
                var _loop_1 = function (i) {
                    rv[provide.managed[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
                    Object.defineProperty(rv[reactiveInjectKey], provide.managed[i], {
                        enumerable: true,
                        get: function () { return _this[i]; },
                    });
                };
                var this_1 = this;
                for (var i in provide.managed) {
                    _loop_1(i);
                }
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_1__["createDecorator"])(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuex-module-decorators/dist/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuex-module-decorators/dist/esm/index.js ***!
  \***************************************************************/
/*! exports provided: Action, Module, Mutation, MutationAction, VuexModule, getModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationAction", function() { return MutationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VuexModule", function() { return VuexModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModule", function() { return getModule; });
var VuexModule = /** @class */ (function () {
    function VuexModule(module) {
        this.actions = module.actions;
        this.mutations = module.mutations;
        this.state = module.state;
        this.getters = module.getters;
        this.namespaced = module.namespaced;
        this.modules = module.modules;
    }
    return VuexModule;
}());
function getModule(moduleClass, store) {
    if (moduleClass._statics) {
        return moduleClass._statics;
    }
    var genStatic = moduleClass._genStatic;
    if (!genStatic) {
        throw new Error("ERR_GET_MODULE_NO_STATICS : Could not get module accessor.\n      Make sure your module has name, we can't make accessors for unnamed modules\n      i.e. @Module({ name: 'something' })");
    }
    return (moduleClass._statics = genStatic(store));
}

var reservedKeys = ['actions', 'getters', 'mutations', 'modules', 'state', 'namespaced', 'commit'];
function stateFactory(module) {
    var state = new module.prototype.constructor({});
    var s = {};
    Object.keys(state).forEach(function (key) {
        if (reservedKeys.indexOf(key) !== -1) {
            if (typeof state[key] !== 'undefined') {
                throw new Error("ERR_RESERVED_STATE_KEY_USED: You cannot use the following\n        ['actions', 'getters', 'mutations', 'modules', 'state', 'namespaced', 'commit']\n        as fields in your module. These are reserved as they have special purpose in Vuex");
            }
            return;
        }
        if (state.hasOwnProperty(key)) {
            if (typeof state[key] !== 'function') {
                s[key] = state[key];
            }
        }
    });
    return s;
}

/**
 * Takes the properties on object from parameter source and adds them to the object
 * parameter target
 * @param {object} target  Object to have properties copied onto from y
 * @param {object} source  Object with properties to be copied to x
 */
function addPropertiesToObject(target, source) {
    var _loop_1 = function (k) {
        Object.defineProperty(target, k, {
            get: function () { return source[k]; }
        });
    };
    for (var _i = 0, _a = Object.keys(source || {}); _i < _a.length; _i++) {
        var k = _a[_i];
        _loop_1(k);
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function staticStateGenerator(module, modOpt, statics) {
    var state = modOpt.stateFactory ? module.state() : module.state;
    Object.keys(state).forEach(function (key) {
        if (state.hasOwnProperty(key)) {
            // If not undefined or function means it is a state value
            if (['undefined', 'function'].indexOf(typeof state[key]) === -1) {
                Object.defineProperty(statics, key, {
                    get: function () {
                        return modOpt.store.state[modOpt.name][key];
                    }
                });
            }
        }
    });
}
function staticGetterGenerator(module, modOpt, statics) {
    Object.keys(module.getters).forEach(function (key) {
        if (module.namespaced) {
            Object.defineProperty(statics, key, {
                get: function () {
                    return modOpt.store.getters[modOpt.name + "/" + key];
                }
            });
        }
        else {
            Object.defineProperty(statics, key, {
                get: function () {
                    return modOpt.store.getters[key];
                }
            });
        }
    });
}
function staticMutationGenerator(module, modOpt, statics) {
    Object.keys(module.mutations).forEach(function (key) {
        if (module.namespaced) {
            statics[key] = function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = modOpt.store).commit.apply(_a, [modOpt.name + "/" + key].concat(args));
            };
        }
        else {
            statics[key] = function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = modOpt.store).commit.apply(_a, [key].concat(args));
            };
        }
    });
}
function staticActionGenerators(module, modOpt, statics) {
    Object.keys(module.actions).forEach(function (key) {
        if (module.namespaced) {
            statics[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        return [2 /*return*/, (_a = modOpt.store).dispatch.apply(_a, [modOpt.name + "/" + key].concat(args))];
                    });
                });
            };
        }
        else {
            statics[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        return [2 /*return*/, (_a = modOpt.store).dispatch.apply(_a, [key].concat(args))];
                    });
                });
            };
        }
    });
}

function moduleDecoratorFactory(moduleOptions) {
    return function (constructor) {
        var module = constructor;
        var stateFactory$1 = function () { return stateFactory(module); };
        if (!module.state) {
            module.state = moduleOptions && moduleOptions.stateFactory ? stateFactory$1 : stateFactory$1();
        }
        if (!module.getters) {
            module.getters = {};
        }
        if (!module.namespaced) {
            module.namespaced = moduleOptions && moduleOptions.namespaced;
        }
        Object.getOwnPropertyNames(module.prototype).forEach(function (funcName) {
            var descriptor = Object.getOwnPropertyDescriptor(module.prototype, funcName);
            if (descriptor.get && module.getters) {
                module.getters[funcName] = function (state, getters, rootState, rootGetters) {
                    var thisObj = { context: { state: state, getters: getters, rootState: rootState, rootGetters: rootGetters } };
                    addPropertiesToObject(thisObj, state);
                    addPropertiesToObject(thisObj, getters);
                    var got = descriptor.get.call(thisObj);
                    return got;
                };
            }
        });
        var modOpt = moduleOptions;
        if (modOpt.name) {
            Object.defineProperty(constructor, '_genStatic', {
                value: function (store) {
                    var statics = {};
                    modOpt.store = modOpt.store || store;
                    if (!modOpt.store) {
                        throw new Error("ERR_STORE_NOT_PROVIDED: To use getModule(), either the module\n            should be decorated with store in decorator, i.e. @Module({store: store}) or\n            store should be passed when calling getModule(), i.e. getModule(MyModule, this.$store)");
                    }
                    // ===========  For statics ==============
                    // ------ state -------
                    staticStateGenerator(module, modOpt, statics);
                    // ------- getters -------
                    if (module.getters) {
                        staticGetterGenerator(module, modOpt, statics);
                    }
                    // -------- mutations --------
                    if (module.mutations) {
                        staticMutationGenerator(module, modOpt, statics);
                    }
                    // -------- actions ---------
                    if (module.actions) {
                        staticActionGenerators(module, modOpt, statics);
                    }
                    return statics;
                }
            });
        }
        if (modOpt.dynamic) {
            if (!modOpt.name) {
                throw new Error('Name of module not provided in decorator options');
            }
            modOpt.store.registerModule(modOpt.name, // TODO: Handle nested modules too in future
            module);
        }
        return constructor;
    };
}
function Module(modOrOpt) {
    if (typeof modOrOpt === 'function') {
        /*
         * @Module decorator called without options (directly on the class definition)
         */
        moduleDecoratorFactory({})(modOrOpt);
    }
    else {
        /*
         * @Module({...}) decorator called with options
         */
        return moduleDecoratorFactory(modOrOpt);
    }
}

function actionDecoratorFactory(params) {
    var _a = params || {}, _b = _a.commit, commit = _b === void 0 ? undefined : _b, _c = _a.rawError, rawError = _c === void 0 ? false : _c, _d = _a.root, root = _d === void 0 ? false : _d;
    return function (target, key, descriptor) {
        var module = target.constructor;
        if (!module.actions) {
            module.actions = {};
        }
        var actionFunction = descriptor.value;
        var action = function (context, payload) {
            return __awaiter(this, void 0, void 0, function () {
                var actionPayload, moduleAccessor, thisObj, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            actionPayload = null;
                            if (!module._genStatic) return [3 /*break*/, 2];
                            moduleAccessor = getModule(module);
                            moduleAccessor.context = context;
                            return [4 /*yield*/, actionFunction.call(moduleAccessor, payload)];
                        case 1:
                            actionPayload = _a.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            thisObj = { context: context };
                            addPropertiesToObject(thisObj, context.state);
                            addPropertiesToObject(thisObj, context.getters);
                            return [4 /*yield*/, actionFunction.call(thisObj, payload)];
                        case 3:
                            actionPayload = _a.sent();
                            _a.label = 4;
                        case 4:
                            if (commit) {
                                context.commit(commit, actionPayload);
                            }
                            return [2 /*return*/, actionPayload];
                        case 5:
                            e_1 = _a.sent();
                            throw rawError
                                ? e_1
                                : new Error('ERR_ACTION_ACCESS_UNDEFINED: Are you trying to access ' +
                                    'this.someMutation() or this.someGetter inside an @Action? \n' +
                                    'That works only in dynamic modules. \n' +
                                    'If not dynamic use this.context.commit("mutationName", payload) ' +
                                    'and this.context.getters["getterName"]' +
                                    '\n' +
                                    new Error("Could not perform action " + key.toString()).stack +
                                    '\n' +
                                    e_1.stack);
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        module.actions[key] = root ? { root: root, handler: action } : action;
    };
}
/**
 * The @Action decorator turns an async function into an Vuex action
 *
 * @param targetOrParams the module class
 * @param key name of the action
 * @param descriptor the action function descriptor
 * @constructor
 */
function Action(targetOrParams, key, descriptor) {
    if (!key && !descriptor) {
        /*
         * This is the case when `targetOrParams` is params.
         * i.e. when used as -
         * <pre>
            @Action({commit: 'incrCount'})
            async getCountDelta() {
              return 5
            }
         * </pre>
         */
        return actionDecoratorFactory(targetOrParams);
    }
    else {
        /*
         * This is the case when @Action is called on action function
         * without any params
         * <pre>
         *   @Action
         *   async doSomething() {
         *    ...
         *   }
         * </pre>
         */
        actionDecoratorFactory()(targetOrParams, key, descriptor);
    }
}

function Mutation(target, key, descriptor) {
    var module = target.constructor;
    if (!module.mutations) {
        module.mutations = {};
    }
    var mutationFunction = descriptor.value ? descriptor.value : function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return ({});
    };
    var mutation = function (state, payload) {
        mutationFunction.call(state, payload);
    };
    module.mutations[key] = mutation;
}

function mutationActionDecoratorFactory(params) {
    return function (target, key, descriptor) {
        var module = target.constructor;
        if (!module.mutations) {
            module.mutations = {};
        }
        if (!module.actions) {
            module.actions = {};
        }
        var mutactFunction = descriptor.value;
        var action = function (context, payload) {
            return __awaiter(this, void 0, void 0, function () {
                var actionPayload, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, mutactFunction.call(context, payload)];
                        case 1:
                            actionPayload = _a.sent();
                            context.commit(key, actionPayload);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            if (params.rawError) {
                                throw e_1;
                            }
                            else {
                                console.error('Could not perform action ' + key.toString());
                                console.error(e_1);
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        var mutation = function (state, payload) {
            if (!params.mutate) {
                params.mutate = Object.keys(payload);
            }
            for (var _i = 0, _a = params.mutate; _i < _a.length; _i++) {
                var stateItem = _a[_i];
                if (state.hasOwnProperty(stateItem) && payload.hasOwnProperty(stateItem)) {
                    state[stateItem] = payload[stateItem];
                }
                else {
                    throw new Error("ERR_MUTATE_PARAMS_NOT_IN_PAYLOAD\n          In @MutationAction, mutate: ['a', 'b', ...] array keys must\n          match with return type = {a: {}, b: {}, ...} and must\n          also be in state.");
                }
            }
        };
        module.actions[key] = params.root ? { root: true, handler: action } : action;
        module.mutations[key] = mutation;
    };
}
/**
 * The @MutationAction decorator turns this into an action that further calls a mutation
 * Both the action and the mutation are generated for you
 *
 * @param paramsOrTarget the params or the target class
 * @param key the name of the function
 * @param descriptor the function body
 * @constructor
 */
function MutationAction(paramsOrTarget, key, descriptor) {
    if (!key && !descriptor) {
        /*
         * This is the case when `paramsOrTarget` is params.
         * i.e. when used as -
         * <pre>
            @MutationAction({mutate: ['incrCount']})
            async getCountDelta() {
              return {incrCount: 5}
            }
         * </pre>
         */
        return mutationActionDecoratorFactory(paramsOrTarget);
    }
    else {
        /*
         * This is the case when `paramsOrTarget` is target.
         * i.e. when used as -
         * <pre>
            @MutationAction
            async getCountDelta() {
              return {incrCount: 5}
            }
         * </pre>
         */
        mutationActionDecoratorFactory({})(paramsOrTarget, key, descriptor);
    }
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return result.then(function (res) {
    try {
      this$1._actionSubscribers
        .filter(function (sub) { return sub.after; })
        .forEach(function (sub) { return sub.after(action, this$1.state); });
    } catch (e) {
      if (true) {
        console.warn("[vuex] error in after action subscribers: ");
        console.error(e);
      }
    }
    return res
  })
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure enviroment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.1.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ "./src/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=ts&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=ts& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader??ref--1!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/Components/Maps.vue":
/*!*********************************!*\
  !*** ./src/Components/Maps.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maps_vue_vue_type_template_id_2c825727___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maps.vue?vue&type=template&id=2c825727& */ "./src/Components/Maps.vue?vue&type=template&id=2c825727&");
/* harmony import */ var _Maps_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maps.vue?vue&type=script&lang=ts& */ "./src/Components/Maps.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _Maps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Maps.vue?vue&type=style&index=0&lang=scss& */ "./src/Components/Maps.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Maps_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maps_vue_vue_type_template_id_2c825727___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Maps_vue_vue_type_template_id_2c825727___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Components/Maps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/Components/Maps.vue?vue&type=script&lang=ts&":
/*!**********************************************************!*\
  !*** ./src/Components/Maps.vue?vue&type=script&lang=ts& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/Components/Maps.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/Components/Maps.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************!*\
  !*** ./src/Components/Maps.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--0-0!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Components/Maps.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_0_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/Components/Maps.vue?vue&type=template&id=2c825727&":
/*!****************************************************************!*\
  !*** ./src/Components/Maps.vue?vue&type=template&id=2c825727& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_2c825727___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=template&id=2c825727& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Components/Maps.vue?vue&type=template&id=2c825727&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_2c825727___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_2c825727___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/data/defaultMapList.ts":
/*!************************************!*\
  !*** ./src/data/defaultMapList.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "HttpStatusCode": 200,
    "ResponseTime": "2019-10-12 16:39:33",
    "Exception": null,
    "Success": true,
    "Message": "地圖監控群組車輛",
    "Data": {
        "GroupOperation": [{
                "StatusCode": 1,
                "StatusText": "未營運",
                "BelongCStatusName": ["登出"],
                "BelongCStatus": [8]
            }, {
                "StatusCode": 2,
                "StatusText": "營運中",
                "BelongCStatusName": ["派車中", "前往", "到達", "拖到"],
                "BelongCStatus": [0, 1, 3, 5]
            }, {
                "StatusCode": 3,
                "StatusText": "警示",
                "BelongCStatusName": ["遲到"],
                "BelongCStatus": []
            }, {
                "StatusCode": 4,
                "StatusText": "空車",
                "BelongCStatusName": ["拒絕", "空車", "排班"],
                "BelongCStatus": [2, 7, 9]
            }],
        "CarGroups": [{
                "CompanyId": 48,
                "CompanyName": "土牛-南",
                "GroupId": 47,
                "GroupName": "土牛-南",
                "Cars": [{
                        "VehicleId": 1240,
                        "VehicleNo": "366-T8",
                        "DriverUserId": "06999152-eda6-4a68-983d-3a23e9befe78",
                        "DriverName": "任福德",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570358822000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.879818,
                            "Longitude": 120.276031,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1221,
                        "VehicleNo": "KED-9396",
                        "DriverUserId": "52e66001-eee8-4725-b4a7-399503e0bef9",
                        "DriverName": "施竣傑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570798649000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8277149,
                            "Longitude": 120.257881,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 310.2K"
                    }, {
                        "VehicleId": 1224,
                        "VehicleNo": "UC-067",
                        "DriverUserId": "05a7e8a9-64d6-4aaa-bc18-f6bf4cdca247",
                        "DriverName": "林秋宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.9367638,
                            "Longitude": 120.251656,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 331.4K"
                    }]
            }, {
                "CompanyId": 28,
                "CompanyName": "中區-中",
                "GroupId": 27,
                "GroupName": "中區-中",
                "Cars": [{
                        "VehicleId": 805,
                        "VehicleNo": "9F-393",
                        "DriverUserId": "e2d1477d-847e-42bc-a06b-d8759e982679",
                        "DriverName": "徐翼廷",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570809642000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.52976,
                            "Longitude": 120.818283,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 798,
                        "VehicleNo": "9F-936",
                        "DriverUserId": "fe4f1abe-36ff-4d99-8001-fa94df0e25f9",
                        "DriverName": "傅金喜",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869564000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6455536,
                            "Longitude": 120.873726,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 813,
                        "VehicleNo": "KEA-9666",
                        "DriverUserId": "0560934e-4825-4962-968c-6de06abbb540",
                        "DriverName": "傅紹翔",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570839654000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6353951,
                            "Longitude": 120.86602,
                            "GAngle": 9,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 119.1K"
                    }, {
                        "VehicleId": 1378,
                        "VehicleNo": "KEG-6090",
                        "DriverUserId": "fac48fff-0283-41c5-b1dd-b02d1f2d863f",
                        "DriverName": "張錦灶",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570868423000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.70151,
                            "Longitude": 120.867088,
                            "GAngle": 65,
                            "Direction": "西北"
                        },
                        "LocationAddr": "國3 北 115.4K"
                    }, {
                        "VehicleId": 786,
                        "VehicleNo": "Q7-346",
                        "DriverUserId": "b14c48be-62de-4110-8232-a57091313638",
                        "DriverName": "傅金龍",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.73135,
                            "Longitude": 120.960922,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 131.4K"
                    }, {
                        "VehicleId": 794,
                        "VehicleNo": "RW-386",
                        "DriverUserId": "9ac180ad-ae74-4e0e-843d-d71aa797e91c",
                        "DriverName": "邱盛華",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596482000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.69043,
                            "Longitude": 120.917473,
                            "GAngle": 130,
                            "Direction": "西南"
                        },
                        "LocationAddr": "國1 南 110.5K"
                    }]
            }, {
                "CompanyId": 14,
                "CompanyName": "友聯-北",
                "GroupId": 13,
                "GroupName": "友聯-北",
                "Cars": [{
                        "VehicleId": 468,
                        "VehicleNo": "069-R5",
                        "DriverUserId": "205c7536-f7c6-423f-8a1a-f9552e9e37c5",
                        "DriverName": "陳昇宏",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869548000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9868069,
                            "Longitude": 121.570633,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 12.4K"
                    }, {
                        "VehicleId": 467,
                        "VehicleNo": "358-TU",
                        "DriverUserId": "3431669c-ea78-41a8-b54c-6eaef9ec409c",
                        "DriverName": "林佳順",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596502000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.1576958,
                            "Longitude": 121.696625,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 461,
                        "VehicleNo": "KEA-2387",
                        "DriverUserId": "30372d68-1ca4-489b-860c-ad6a9572293f",
                        "DriverName": "楊德川",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869573000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0879383,
                            "Longitude": 121.687187,
                            "GAngle": 13,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 473,
                        "VehicleNo": "KEA-7812",
                        "DriverUserId": "51f71f63-36a9-4ea3-a823-466a245c1058",
                        "DriverName": "倪憲章",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596482000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9517574,
                            "Longitude": 121.395477,
                            "GAngle": 279,
                            "Direction": "東"
                        },
                        "LocationAddr": "國3 南 46.5K"
                    }]
            }, {
                "CompanyId": 8,
                "CompanyName": "日友-北",
                "GroupId": 7,
                "GroupName": "日友-北",
                "Cars": [{
                        "VehicleId": 302,
                        "VehicleNo": "002-S5",
                        "DriverUserId": "74b537f3-337a-40f5-9d4d-f94c7068720b",
                        "DriverName": "鍾丞一",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7708931,
                            "Longitude": 121.076767,
                            "GAngle": 199,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 216,
                        "VehicleNo": "083-BX",
                        "DriverUserId": "24e9f301-6d40-4c71-80ef-8d6857954be3",
                        "DriverName": "吳鍾坤",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869539000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.108593,
                            "Longitude": 121.684784,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 9.2K"
                    }, {
                        "VehicleId": 284,
                        "VehicleNo": "086-BI",
                        "DriverUserId": "2eee5154-1c87-48fe-9f09-e177d5e822d3",
                        "DriverName": "莊富鈞",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570179794000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.92654,
                            "Longitude": 121.173363,
                            "GAngle": 1,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1344,
                        "VehicleNo": "180-SL",
                        "DriverUserId": "5ead4583-3721-44a4-8e78-366f441473fd",
                        "DriverName": "戴興業",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596499000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9537487,
                            "Longitude": 121.2103,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 293,
                        "VehicleNo": "188-VA",
                        "DriverUserId": "83bf6727-4007-47b4-b2ac-ed3897068d0b",
                        "DriverName": "劉軒堡",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570633072000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.6758556,
                            "Longitude": 120.473457,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 258,
                        "VehicleNo": "218-RE",
                        "DriverUserId": "6deabd7e-100d-45bf-8c17-95af339d6abc",
                        "DriverName": "廖凱瑆",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570444280000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.1227322,
                            "Longitude": 121.829041,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 224,
                        "VehicleNo": "227-UY",
                        "DriverUserId": "ecda688b-3311-415b-91ce-23477e7f330b",
                        "DriverName": "陳信宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0762959,
                            "Longitude": 121.513954,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 287,
                        "VehicleNo": "319-R6",
                        "DriverUserId": "2a6913ca-d501-4c47-a8d4-0821052d58bf",
                        "DriverName": "陳少普",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596497000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.11861,
                            "Longitude": 121.4688,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 271,
                        "VehicleNo": "340-R9",
                        "DriverUserId": "ed9214e4-5d14-4863-a8f5-b307abe1c36b",
                        "DriverName": "杜家弘",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569696013000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.870306,
                            "Longitude": 121.029793,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 225,
                        "VehicleNo": "348-TC",
                        "DriverUserId": "bb5db69b-0393-4fad-83eb-24755fbde992",
                        "DriverName": "許文萬",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596505000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0728645,
                            "Longitude": 121.43409,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 26.5K"
                    }, {
                        "VehicleId": 280,
                        "VehicleNo": "357-SV",
                        "DriverUserId": "9007640a-2afc-4e1d-91a7-2ec07376a318",
                        "DriverName": "施啟正",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596493000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9897041,
                            "Longitude": 121.485428,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 38.1K"
                    }, {
                        "VehicleId": 215,
                        "VehicleNo": "427-BF",
                        "DriverUserId": "b2ca8c89-770f-4cec-a2f5-2227e03bb68a",
                        "DriverName": "陳志文",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596501000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.02817,
                            "Longitude": 121.4449,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 239,
                        "VehicleNo": "760-R9",
                        "DriverUserId": "e83cd2fb-e15c-4ff9-a05d-b84eb6aba7ec",
                        "DriverName": "王朝祥",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869561000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0573559,
                            "Longitude": 121.635979,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1343,
                        "VehicleNo": "781-RS",
                        "DriverUserId": "375f576c-29b7-4d6d-9adf-f662a5ca6044",
                        "DriverName": "黃享文",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569804467000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7785187,
                            "Longitude": 121.00341,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 304,
                        "VehicleNo": "7F-210",
                        "DriverUserId": "12651621-ab18-4d44-abb9-ab54d13561ed",
                        "DriverName": "范聖桂",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8933086,
                            "Longitude": 121.122696,
                            "GAngle": 157,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 281,
                        "VehicleNo": "7F-961",
                        "DriverUserId": "7b3798c7-c4a9-416d-93da-d2efcd9cf5b2",
                        "DriverName": "陳志和",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596482000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.92813,
                            "Longitude": 121.4138,
                            "GAngle": 303,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 255,
                        "VehicleNo": "881-SL",
                        "DriverUserId": "96a9eda7-3fdd-4e8d-907c-73616337dffb",
                        "DriverName": "王子綱",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570687647000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.965477,
                            "Longitude": 121.4335,
                            "GAngle": 77,
                            "Direction": "西"
                        },
                        "LocationAddr": "國3 北 42.0K"
                    }, {
                        "VehicleId": 272,
                        "VehicleNo": "928-TL",
                        "DriverUserId": "a222acac-6c84-4a51-b727-5705af1d620b",
                        "DriverName": "吳啟東",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569861956000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0746784,
                            "Longitude": 121.654945,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 10.4K"
                    }, {
                        "VehicleId": 273,
                        "VehicleNo": "9F-047",
                        "DriverUserId": "9e59ee6d-baf6-4dc4-b27b-d6080b5b3451",
                        "DriverName": "廖思傑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570183000000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9335117,
                            "Longitude": 121.194511,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 64.9K"
                    }, {
                        "VehicleId": 439,
                        "VehicleNo": "AAD-097",
                        "DriverUserId": "0202607f-4506-47a3-9e94-a232743bccae",
                        "DriverName": "許博鈞",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569717789000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0553837,
                            "Longitude": 121.579834,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 24.4K"
                    }, {
                        "VehicleId": 221,
                        "VehicleNo": "BE-999",
                        "DriverUserId": "b615be12-c728-491a-8c61-40a0e5a9c251",
                        "DriverName": "林家進",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570088187000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9794483,
                            "Longitude": 121.500328,
                            "GAngle": 50,
                            "Direction": "西北"
                        },
                        "LocationAddr": "國3 北 33.9K"
                    }, {
                        "VehicleId": 269,
                        "VehicleNo": "BO-759",
                        "DriverUserId": "1cee219c-76e8-457e-96ee-c6f06e87868e",
                        "DriverName": "鍾汶憲",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570823093000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7632236,
                            "Longitude": 121.087471,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 226,
                        "VehicleNo": "BP-227",
                        "DriverUserId": "1da8139d-0d2b-4912-abce-5e3f9912602f",
                        "DriverName": "林天元",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869566000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.1317348,
                            "Longitude": 121.7192,
                            "GAngle": 26,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 234,
                        "VehicleNo": "BP-797",
                        "DriverUserId": "a2d02a1c-98b0-4883-bf42-7e5c4b060d83",
                        "DriverName": "吳奕炘",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596489000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0417156,
                            "Longitude": 121.304756,
                            "GAngle": 58,
                            "Direction": "西北"
                        },
                        "LocationAddr": "國1高架 北 48.3K"
                    }, {
                        "VehicleId": 211,
                        "VehicleNo": "F5-177",
                        "DriverUserId": "86b34fbb-353e-404f-86ae-7465a9ee04e6",
                        "DriverName": "潘義雄",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568640857000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9784775,
                            "Longitude": 121.504013,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 南下 33.0"
                    }, {
                        "VehicleId": 317,
                        "VehicleNo": "KEA-7779",
                        "DriverUserId": "97a8abc7-ab95-4e80-8838-759f0e778685",
                        "DriverName": "范聖勛",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 2377,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9573689,
                            "Longitude": 121.202858,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 62.2K"
                    }, {
                        "VehicleId": 308,
                        "VehicleNo": "KEA-9868",
                        "DriverUserId": "d5073369-1c12-4314-9e29-d8a364a0fa45",
                        "DriverName": "莊坤達",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9231968,
                            "Longitude": 121.171753,
                            "GAngle": 339,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 253,
                        "VehicleNo": "KED-0169",
                        "DriverUserId": "84786e52-28d1-4aa1-9f2c-81ff8715b07c",
                        "DriverName": "張嘉恬",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.06392,
                            "Longitude": 121.356667,
                            "GAngle": 276,
                            "Direction": "東"
                        },
                        "LocationAddr": "國1 南 42.1K"
                    }, {
                        "VehicleId": 1464,
                        "VehicleNo": "KED-1769",
                        "DriverUserId": "a791d95c-b2dd-4209-bdb1-90153a71fca9",
                        "DriverName": "張秋鴻",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0362473,
                            "Longitude": 121.298637,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1346,
                        "VehicleNo": "KEE-1978",
                        "DriverUserId": "6b723e9e-63eb-47f5-a197-dc4dc5c1944f",
                        "DriverName": "陳建豪",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569083535000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0122681,
                            "Longitude": 121.300377,
                            "GAngle": 64,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 251,
                        "VehicleNo": "KEE-3329",
                        "DriverUserId": "ba1bd004-85d5-4637-a7e6-76b38270365d",
                        "DriverName": "李金燦",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869563000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.1403561,
                            "Longitude": 121.400253,
                            "GAngle": 330,
                            "Direction": "東北"
                        },
                        "LocationAddr": "國1 南 34.5K"
                    }, {
                        "VehicleId": 299,
                        "VehicleNo": "KEE-3888",
                        "DriverUserId": "3dc93ad5-60b5-4225-9a84-f94db5549396",
                        "DriverName": "黃建華",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569870856000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9943085,
                            "Longitude": 121.4873,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 252,
                        "VehicleNo": "KEE-3889",
                        "DriverUserId": "a0e266bd-98d5-4629-92f4-e157f78466d6",
                        "DriverName": "邱顯民",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569675898000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9704914,
                            "Longitude": 121.444412,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 320,
                        "VehicleNo": "KEE-3927",
                        "DriverUserId": "4cc405d1-fa91-45fb-b614-97b2248dc593",
                        "DriverName": "王尚林",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0664139,
                            "Longitude": 121.422958,
                            "GAngle": 86,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1339,
                        "VehicleNo": "KEE-3999",
                        "DriverUserId": "0c2362d1-b7bc-4f49-aef8-2e48e8974e44",
                        "DriverName": "蘇郁富",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570599613000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.06819,
                            "Longitude": 121.430786,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 295,
                        "VehicleNo": "Q6-123",
                        "DriverUserId": "f27baa15-27a4-4211-ae31-d3cb5f93a8cf",
                        "DriverName": "王重仁",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596482000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9306278,
                            "Longitude": 121.285156,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 259,
                        "VehicleNo": "Q6-268",
                        "DriverUserId": "55725308-5082-47c5-9c61-8a955c615af5",
                        "DriverName": "林至隆",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596504000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.1033211,
                            "Longitude": 121.761978,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 237,
                        "VehicleNo": "R6-792",
                        "DriverUserId": "697af0db-935c-44fd-acc3-227e479f0137",
                        "DriverName": "蔡培火",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570464834000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.06339,
                            "Longitude": 121.43969,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 227,
                        "VehicleNo": "RN-575",
                        "DriverUserId": "bb6f16f0-4a69-419e-9d16-193ce873ed9f",
                        "DriverName": "林士堯",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596492000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9683361,
                            "Longitude": 121.51767,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 282,
                        "VehicleNo": "RP-217",
                        "DriverUserId": "00373408-4e4b-4995-9800-b64d8a4effee",
                        "DriverName": "林志穎",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568650891000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.068325,
                            "Longitude": 121.3815,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 296,
                        "VehicleNo": "RP-993",
                        "DriverUserId": "212a9014-9127-439a-920e-33d42780f3b1",
                        "DriverName": "林慶松",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570650475000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.00379,
                            "Longitude": 121.252411,
                            "GAngle": 131,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 31,
                "CompanyName": "日益-中",
                "GroupId": 30,
                "GroupName": "日益-中",
                "Cars": [{
                        "VehicleId": 879,
                        "VehicleNo": "556-SB",
                        "DriverUserId": "4bdf693c-5c86-415b-8a73-f02d17d18de2",
                        "DriverName": "黃健章",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8689651,
                            "Longitude": 120.490288,
                            "GAngle": 13,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 873,
                        "VehicleNo": "KEB-2605",
                        "DriverUserId": "39b7b3a0-f979-420b-9e74-87c22b8e02e3",
                        "DriverName": "謝耀昇",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596493000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.963232,
                            "Longitude": 120.575386,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 874,
                        "VehicleNo": "KEE-9000",
                        "DriverUserId": "73eaf8ac-0926-461e-aebc-5da3b92be3db",
                        "DriverName": "黃緯綸",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568969564000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0908432,
                            "Longitude": 120.602951,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 南 201.7K"
                    }, {
                        "VehicleId": 875,
                        "VehicleNo": "R6-462",
                        "DriverUserId": "0c0d8c39-c6c6-4b94-a2db-1661debe4a7a",
                        "DriverName": "賴嘉張",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869548000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7335968,
                            "Longitude": 120.595772,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 259.6K"
                    }]
            }, {
                "CompanyId": 22,
                "CompanyName": "日勝-中",
                "GroupId": 21,
                "GroupName": "日勝-中",
                "Cars": [{
                        "VehicleId": 635,
                        "VehicleNo": "056-R6",
                        "DriverUserId": "f698aa82-a059-49b3-adfc-6df42afc45ae",
                        "DriverName": "許一乾",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570704118000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2026787,
                            "Longitude": 120.567734,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 632,
                        "VehicleNo": "395-BF",
                        "DriverUserId": "64a0ff8c-0b56-4b58-a3b2-a991d2c939a4",
                        "DriverName": "林宏儒",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596489000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6209526,
                            "Longitude": 120.81131,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 638,
                        "VehicleNo": "512-VK",
                        "DriverUserId": "8751f8e7-1ee1-432e-97ca-ba26b70b8d1c",
                        "DriverName": "邱國峰",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570805855000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.07806,
                            "Longitude": 120.647484,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 651,
                        "VehicleNo": "551-QM",
                        "DriverUserId": "1d8eae26-8745-4c14-8172-4d8a0576a3dc",
                        "DriverName": "陳永勝",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570722087000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9807529,
                            "Longitude": 120.504623,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1443,
                        "VehicleNo": "561-SL",
                        "DriverUserId": "466184de-7bcf-4fa4-85f1-64457c114050",
                        "DriverName": "林冠諭",
                        "cStatus": 1,
                        "OperationalStatus": "前往",
                        "StatusColor": 2,
                        "CarIcon": "C000_Red.gif",
                        "TaskId": 2467,
                        "UpdateTime": "\/Date(1570859504000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0443954,
                            "Longitude": 120.679031,
                            "GAngle": 10,
                            "Direction": "北"
                        },
                        "LocationAddr": "國6 西 4.0K"
                    }, {
                        "VehicleId": 639,
                        "VehicleNo": "883-TW",
                        "DriverUserId": "6c999fec-36ce-44e7-88bc-5d6d9a3b2599",
                        "DriverName": "黃建祐",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6765118,
                            "Longitude": 120.845856,
                            "GAngle": 297,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 650,
                        "VehicleNo": "F2-161",
                        "DriverUserId": "b8317ef3-903f-4b97-907f-21ffacdaf898",
                        "DriverName": "張煌宜",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7885036,
                            "Longitude": 120.47934,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 648,
                        "VehicleNo": "KEA-7138",
                        "DriverUserId": "05e18e91-c504-4cb9-9641-62470a86ed9b",
                        "DriverName": "林俊瑋",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9611969,
                            "Longitude": 120.654457,
                            "GAngle": 352,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 222.5K"
                    }, {
                        "VehicleId": 642,
                        "VehicleNo": "KEA-7193",
                        "DriverUserId": "2e902c6f-7895-4716-ae58-103fe0de53bf",
                        "DriverName": "黃友信",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596500000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1525345,
                            "Longitude": 120.620651,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 181.5K"
                    }, {
                        "VehicleId": 646,
                        "VehicleNo": "KEA-7506",
                        "DriverUserId": "60809170-df81-4c27-b486-f7dd9464915d",
                        "DriverName": "許原瑜",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1045475,
                            "Longitude": 120.679848,
                            "GAngle": 252,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 641,
                        "VehicleNo": "KED-0182",
                        "DriverUserId": "b4c12ccb-303c-427a-981c-78643b57a3bd",
                        "DriverName": "鐘英傑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570859938000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8725128,
                            "Longitude": 120.487259,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 219.4K"
                    }, {
                        "VehicleId": 655,
                        "VehicleNo": "KED-2597",
                        "DriverUserId": "9fd1b451-2f12-452c-8318-e2cecffc68fa",
                        "DriverName": "萬一正",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570864424000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.90198,
                            "Longitude": 120.7059,
                            "GAngle": 134,
                            "Direction": "西南"
                        },
                        "LocationAddr": "國3 南 231.2K"
                    }, {
                        "VehicleId": 1365,
                        "VehicleNo": "KED-3613",
                        "DriverUserId": "2a7b69fc-0b4e-4acb-b38b-6983d0f986ec",
                        "DriverName": "陸浩然",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869546000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0748959,
                            "Longitude": 120.6355,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 172.0K"
                    }, {
                        "VehicleId": 649,
                        "VehicleNo": "KED-5335",
                        "DriverUserId": "8e646029-9fd7-42dd-9143-5ba26b621dec",
                        "DriverName": "朱凱佑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570793466000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8751564,
                            "Longitude": 120.706451,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 234.5K"
                    }]
            }, {
                "CompanyId": 6,
                "CompanyName": "日勝-北",
                "GroupId": 5,
                "GroupName": "日勝-北",
                "Cars": [{
                        "VehicleId": 160,
                        "VehicleNo": "059-BL",
                        "DriverUserId": "df4874c7-3300-4219-a3db-aaf258153069",
                        "DriverName": "吳宏龍",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596503000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9961166,
                            "Longitude": 121.279449,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 149,
                        "VehicleNo": "203-R5",
                        "DriverUserId": "d968b1cc-e617-4673-b04f-041eee1242bb",
                        "DriverName": "陳彥宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570800151000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0585785,
                            "Longitude": 121.214287,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 156,
                        "VehicleNo": "300-TV",
                        "DriverUserId": "cdc73f5f-2f94-47a6-8731-c660e36d0ce7",
                        "DriverName": "黃燕雄",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568989606000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.86858,
                            "Longitude": 121.026,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 南 100.0K"
                    }, {
                        "VehicleId": 151,
                        "VehicleNo": "531-TV",
                        "DriverUserId": "501b107a-19ec-479c-b35a-860416212dd3",
                        "DriverName": "趙振源",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869564000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9606781,
                            "Longitude": 121.225967,
                            "GAngle": 41,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 140,
                        "VehicleNo": "821-UK",
                        "DriverUserId": "12af1b1a-0569-4e96-bf94-deff9109079a",
                        "DriverName": "許勝欽",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596491000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.07106,
                            "Longitude": 121.497192,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 147,
                        "VehicleNo": "AAH-929",
                        "DriverUserId": "6f33b2ad-7edc-40cd-9cac-ae1b8d806930",
                        "DriverName": "沈振國",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596482000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0665321,
                            "Longitude": 121.5912,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 162,
                        "VehicleNo": "KEA-7999",
                        "DriverUserId": "beac89f6-eebc-4b08-978b-6bad7e9e845b",
                        "DriverName": "林信祐",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869566000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.94339,
                            "Longitude": 121.19429,
                            "GAngle": 14,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1高架 北 64.2K"
                    }, {
                        "VehicleId": 155,
                        "VehicleNo": "KEA-8807",
                        "DriverUserId": "5b1b3e9b-a54b-4c8a-811d-de9fd05f8ac7",
                        "DriverName": "張喜盛",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596495000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8932228,
                            "Longitude": 121.262527,
                            "GAngle": 89,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 148,
                        "VehicleNo": "KEC-0357",
                        "DriverUserId": "c2f00f57-a4b1-487c-9875-b86393241ead",
                        "DriverName": "張義豪",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.95435,
                            "Longitude": 121.251343,
                            "GAngle": 342,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 173,
                        "VehicleNo": "KEC-2893",
                        "DriverUserId": "40dd2072-2940-4106-9d15-8c6be2dcb3bd",
                        "DriverName": "簡呈諺",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596495000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9864616,
                            "Longitude": 121.239487,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 175,
                        "VehicleNo": "KED-0067",
                        "DriverUserId": "421bb510-b389-4fc6-bd0d-6e7aa9bd06a7",
                        "DriverName": "徐政章",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0116558,
                            "Longitude": 121.310127,
                            "GAngle": 339,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 165,
                        "VehicleNo": "KED-0099",
                        "DriverUserId": "44bb5590-b802-4bf6-bf5c-32f47416e728",
                        "DriverName": "許勝凱",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869570000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7581367,
                            "Longitude": 120.972176,
                            "GAngle": 281,
                            "Direction": "東"
                        },
                        "LocationAddr": "國3 南 102.2K"
                    }, {
                        "VehicleId": 176,
                        "VehicleNo": "KED-0218",
                        "DriverUserId": "9fedeac5-09f4-4651-9717-b9c1cb1f87f9",
                        "DriverName": "唐偉翔",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570857841000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.00398,
                            "Longitude": 121.314178,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 177,
                        "VehicleNo": "KEE-2908",
                        "DriverUserId": "b949804f-734d-41c1-8ed2-9b66ab8ae43b",
                        "DriverName": "黃俊豪",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570714301000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.075573,
                            "Longitude": 121.513977,
                            "GAngle": 89,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 158,
                        "VehicleNo": "KEE-3337",
                        "DriverUserId": "071ead9b-5a39-4c6f-99e1-03321772c8a8",
                        "DriverName": "李俊承",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568798856000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9837685,
                            "Longitude": 121.289726,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國2 西 13.8K"
                    }, {
                        "VehicleId": 144,
                        "VehicleNo": "KEE-3510",
                        "DriverUserId": "fd6e1007-be29-400d-9f40-f7b8b775f13d",
                        "DriverName": "王朝芳",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570254810000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9942741,
                            "Longitude": 121.593193,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 159,
                        "VehicleNo": "KEE-3838",
                        "DriverUserId": "7525cf68-b74e-4e81-a240-f525f566cc73",
                        "DriverName": "蔡名智",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569615897000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0691776,
                            "Longitude": 121.439369,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 21,
                "CompanyName": "全鋒-中",
                "GroupId": 20,
                "GroupName": "全鋒-中",
                "Cars": [{
                        "VehicleId": 615,
                        "VehicleNo": "889-Q3",
                        "DriverUserId": "78ac2984-da4b-4765-b3ff-a30332ca2fd1",
                        "DriverName": "周志宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596489000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1438961,
                            "Longitude": 120.6907,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 611,
                        "VehicleNo": "KED-3709",
                        "DriverUserId": "fbf5466e-edbb-4850-b3f8-6556eff6a345",
                        "DriverName": "羅名宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1566091674000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.194,
                            "Longitude": 120.723,
                            "GAngle": 149,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 627,
                        "VehicleNo": "QK-510",
                        "DriverUserId": "394d0dd7-bc85-48e8-ae03-ff912790f33e",
                        "DriverName": "鍾昆訓",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0772457,
                            "Longitude": 120.51844,
                            "GAngle": 183,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 609,
                        "VehicleNo": "SG-122",
                        "DriverUserId": "62e2464d-473e-4a9f-8f70-3c6472d12bc5",
                        "DriverName": "陳文鎮",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570164736000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2488155,
                            "Longitude": 120.695282,
                            "GAngle": 64,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 5,
                "CompanyName": "全鋒-北",
                "GroupId": 4,
                "GroupName": "全鋒-北",
                "Cars": [{
                        "VehicleId": 133,
                        "VehicleNo": "580-UD",
                        "DriverUserId": "383edce1-f115-4a70-bad7-07c67d435c1e",
                        "DriverName": "林仁欽",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596490000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0393562,
                            "Longitude": 121.239822,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 131,
                        "VehicleNo": "991-BQ",
                        "DriverUserId": "f478ce3e-b50f-4c68-9c6d-55cc1e932aa4",
                        "DriverName": "莊建琛",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596483000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0393543,
                            "Longitude": 121.239822,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 123,
                        "VehicleNo": "S5-787",
                        "DriverUserId": "bfac4adf-e64a-47a1-acf3-2588947c1d92",
                        "DriverName": "陳政瑋",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596482000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9592819,
                            "Longitude": 121.3918,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 南下 46.0K"
                    }]
            }, {
                "CompanyId": 42,
                "CompanyName": "全鋒-南",
                "GroupId": 41,
                "GroupName": "全鋒-南",
                "Cars": [{
                        "VehicleId": 1054,
                        "VehicleNo": "316-Y5",
                        "DriverUserId": "9cd28f6e-993d-4655-83d7-7b8c13581b2a",
                        "DriverName": "蕭宇盛",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568907809000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.9986649,
                            "Longitude": 120.248695,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1059,
                        "VehicleNo": "586-BF",
                        "DriverUserId": "6bcaf7ac-1296-4891-af6c-56274df8e647",
                        "DriverName": "陳俊瑋",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.67008,
                            "Longitude": 120.329109,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 363.0K"
                    }, {
                        "VehicleId": 1048,
                        "VehicleNo": "841-BG",
                        "DriverUserId": "4ecbdb83-c119-449c-80d2-c62238d78ca6",
                        "DriverName": "劉永憲",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.45857,
                            "Longitude": 120.24324,
                            "GAngle": 272,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1067,
                        "VehicleNo": "KEB-7877",
                        "DriverUserId": "8d64eca0-cb64-48b1-98ad-9fc190a73466",
                        "DriverName": "王郁雯",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596506000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.9928226,
                            "Longitude": 120.319855,
                            "GAngle": 2,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 355.2K"
                    }, {
                        "VehicleId": 1068,
                        "VehicleNo": "KEB-8357",
                        "DriverUserId": "7d781269-d7f9-4178-915b-948307fc4388",
                        "DriverName": "邱永全",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570603567000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.577261,
                            "Longitude": 120.545921,
                            "GAngle": 18,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1044,
                        "VehicleNo": "RN-908",
                        "DriverUserId": "f86ac3d9-dc3d-4f26-8fb4-656371487416",
                        "DriverName": "劉宜芳",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596486000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.31597,
                            "Longitude": 120.332848,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 37,
                "CompanyName": "佳鑫-中",
                "GroupId": 36,
                "GroupName": "佳鑫-中",
                "Cars": [{
                        "VehicleId": 942,
                        "VehicleNo": "588-QS",
                        "DriverUserId": "fc411126-edab-400b-b771-ec21bcab6875",
                        "DriverName": "楊正義",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3024578,
                            "Longitude": 120.718491,
                            "GAngle": 218,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 936,
                        "VehicleNo": "Q5-078",
                        "DriverUserId": "54d6f975-cb35-4f9c-bded-964832877eda",
                        "DriverName": "張圖恩",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570860979000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3283768,
                            "Longitude": 120.7167,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 940,
                        "VehicleNo": "RQ-496",
                        "DriverUserId": "b2f2c031-7617-42d4-b8b7-b032b931c630",
                        "DriverName": "賴傳豐",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3921585,
                            "Longitude": 120.758484,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 29,
                "CompanyName": "金友輪-中",
                "GroupId": 28,
                "GroupName": "金友輪-中",
                "Cars": [{
                        "VehicleId": 838,
                        "VehicleNo": "069-UR",
                        "DriverUserId": "3a01b592-d3a4-4875-95c6-6e0850986875",
                        "DriverName": "張淯瑋",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570810031000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0639648,
                            "Longitude": 120.520813,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 836,
                        "VehicleNo": "117-BF",
                        "DriverUserId": "8768f0a0-2023-4a9c-88f9-fccfa568af49",
                        "DriverName": "林凡立",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869559000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.06822,
                            "Longitude": 120.525574,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 828,
                        "VehicleNo": "KEC-3038",
                        "DriverUserId": "ec6a9bb9-4b94-456f-a41c-8ba14c53e508",
                        "DriverName": "陳友民",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9188137,
                            "Longitude": 120.497345,
                            "GAngle": 182,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 214.9K"
                    }, {
                        "VehicleId": 842,
                        "VehicleNo": "KED-5907",
                        "DriverUserId": "c4f7428b-1639-4bec-b6e5-157a999421fd",
                        "DriverName": "張適俞",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569513477000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0340118,
                            "Longitude": 120.486336,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 822,
                        "VehicleNo": "KEE-7137",
                        "DriverUserId": "6eed360c-3961-479b-9f3f-a082ae28dd64",
                        "DriverName": "洪佩洳",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596486000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0776539,
                            "Longitude": 120.523621,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 197.0K"
                    }, {
                        "VehicleId": 823,
                        "VehicleNo": "KEE-7700",
                        "DriverUserId": "221881cd-e3b9-4d33-851a-ebcc26bbe2a3",
                        "DriverName": "賴明賢",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596491000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0800648,
                            "Longitude": 120.696228,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 南 199.7K"
                    }, {
                        "VehicleId": 832,
                        "VehicleNo": "S5-352",
                        "DriverUserId": "ccbd1722-f0b8-4a9d-83a6-56eefa6bd2f4",
                        "DriverName": "黃彥鈞",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869573000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0146637,
                            "Longitude": 120.691277,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 52,
                "CompanyName": "金勝輪-南",
                "GroupId": 51,
                "GroupName": "金勝輪-南",
                "Cars": [{
                        "VehicleId": 1306,
                        "VehicleNo": "8F-303",
                        "DriverUserId": "6098969c-680f-40b0-a25f-e8e06195b1df",
                        "DriverName": "林志峯",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569906767000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.9391785,
                            "Longitude": 120.236328,
                            "GAngle": 228,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1313,
                        "VehicleNo": "KEB-6037",
                        "DriverUserId": "15e13fcd-46c8-4637-9a76-31bbc606d1c5",
                        "DriverName": "方毓傑",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7312431,
                            "Longitude": 120.334427,
                            "GAngle": 203,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國1 南 355.1K"
                    }, {
                        "VehicleId": 1309,
                        "VehicleNo": "S7-932",
                        "DriverUserId": "72375151-1f24-46ec-9096-27f824c03712",
                        "DriverName": "陳年輝",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596488000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6065674,
                            "Longitude": 120.355606,
                            "GAngle": 107,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 17,
                "CompanyName": "金順烽-北",
                "GroupId": 16,
                "GroupName": "金順烽-北",
                "Cars": [{
                        "VehicleId": 514,
                        "VehicleNo": "AAD-717",
                        "DriverUserId": "a58148db-c070-4c3e-adf5-8d1a8c57800f",
                        "DriverName": "曾榮華",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596502000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9757919,
                            "Longitude": 121.223434,
                            "GAngle": 46,
                            "Direction": "西北"
                        },
                        "LocationAddr": "國1 南下 35.0K"
                    }]
            }, {
                "CompanyId": 20,
                "CompanyName": "金盟座-中",
                "GroupId": 55,
                "GroupName": "金盟座-中",
                "Cars": [{
                        "VehicleId": 587,
                        "VehicleNo": "093-BY",
                        "DriverUserId": "a89e3d41-117b-403b-8961-1fe170a9cddb",
                        "DriverName": "楊証鈞",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596490000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7601814,
                            "Longitude": 120.91925,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 598,
                        "VehicleNo": "105-SR",
                        "DriverUserId": "aaa1e758-2df7-4ece-ad30-d49bc100fade",
                        "DriverName": "陳敦信",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869566000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.77211,
                            "Longitude": 120.698311,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 581,
                        "VehicleNo": "166-BF",
                        "DriverUserId": "4490d063-8935-4474-adfa-2215b993fff9",
                        "DriverName": "白承鑫",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.4761658,
                            "Longitude": 120.785522,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 140.1K"
                    }, {
                        "VehicleId": 293,
                        "VehicleNo": "188-VA",
                        "DriverUserId": "83bf6727-4007-47b4-b2ac-ed3897068d0b",
                        "DriverName": "劉軒堡",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570633072000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.6758556,
                            "Longitude": 120.473457,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 601,
                        "VehicleNo": "538-N5",
                        "DriverUserId": "1c29d706-ee72-48bf-99b5-ea70b0b43e59",
                        "DriverName": "林政權",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8752766,
                            "Longitude": 120.706451,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 234.4K"
                    }, {
                        "VehicleId": 606,
                        "VehicleNo": "766-SM",
                        "DriverUserId": "2d3bd693-c791-4a8b-974c-ba1b6287170b",
                        "DriverName": "黃昱翔",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570739836000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0614185,
                            "Longitude": 120.663193,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 593,
                        "VehicleNo": "AAC-079",
                        "DriverUserId": "e9e71398-50c2-4ed3-9b46-366c251023e5",
                        "DriverName": "黃聖閎",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.579668,
                            "Longitude": 120.857918,
                            "GAngle": 274,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 590,
                        "VehicleNo": "AAD-271",
                        "DriverUserId": "1a6776e2-4797-4155-9799-be3f1712afc5",
                        "DriverName": "賴健瑋",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8066254,
                            "Longitude": 121.158791,
                            "GAngle": 101,
                            "Direction": "西"
                        },
                        "LocationAddr": "國3 北 80.7K"
                    }, {
                        "VehicleId": 597,
                        "VehicleNo": "AAJ-858",
                        "DriverUserId": "b27d57dc-c345-4ed1-8749-303ff505d81e",
                        "DriverName": "劉邦禹",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570580390000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6346931,
                            "Longitude": 120.816086,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 603,
                        "VehicleNo": "BP-508",
                        "DriverUserId": "57c27b8d-4161-40c0-bf0e-0cdca07c0ada",
                        "DriverName": "楊文欽",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7600689,
                            "Longitude": 120.501694,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 596,
                        "VehicleNo": "KEA-9566",
                        "DriverUserId": "62fed486-e185-4212-b187-23c0e138ba47",
                        "DriverName": "傅文芳",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568530572000)\/",
                        "LastCoordinate": {
                            "Latitude": 0,
                            "Longitude": 0,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 589,
                        "VehicleNo": "KEC-0392",
                        "DriverUserId": "0e2c0699-218d-447e-aa8e-3bb6fae07111",
                        "DriverName": "黃信遠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.5196571,
                            "Longitude": 120.822105,
                            "GAngle": 45,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 583,
                        "VehicleNo": "Q6-090",
                        "DriverUserId": "3fed8eaf-b6c4-4a92-8db3-e67c84fdd97b",
                        "DriverName": "江志珉",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570866245000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6918831,
                            "Longitude": 120.921417,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 600,
                        "VehicleNo": "R4-422",
                        "DriverUserId": "33ea3d03-f76c-450d-a9f7-3897884b3a1a",
                        "DriverName": "柯義添",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596496000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9770164,
                            "Longitude": 120.523415,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 602,
                        "VehicleNo": "RW-373",
                        "DriverUserId": "5d076ddb-a5fe-4093-98c7-ba1b198c63b8",
                        "DriverName": "劉軒堡",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596488000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.6757565,
                            "Longitude": 120.4734,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 582,
                        "VehicleNo": "SK-085",
                        "DriverUserId": "9fa40740-17e8-4b98-b9cb-0391c1393e87",
                        "DriverName": "江志文",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.5257168,
                            "Longitude": 120.819626,
                            "GAngle": 345,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 132.9K"
                    }]
            }, {
                "CompanyId": 4,
                "CompanyName": "金盟座-北",
                "GroupId": 3,
                "GroupName": "金盟座-北",
                "Cars": [{
                        "VehicleId": 101,
                        "VehicleNo": "228-UM",
                        "DriverUserId": "4f912750-8df3-431a-8af9-85d19b7c6e82",
                        "DriverName": "楊金山",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596488000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0027676,
                            "Longitude": 121.287331,
                            "GAngle": 181,
                            "Direction": "南"
                        },
                        "LocationAddr": "國2 東 11.2K"
                    }, {
                        "VehicleId": 107,
                        "VehicleNo": "425-BH",
                        "DriverUserId": "fa8939c8-3901-48d6-8031-274c61f3dd23",
                        "DriverName": "柯杰賢\n",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596500000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7494755,
                            "Longitude": 120.9064,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 98,
                        "VehicleNo": "458-VM",
                        "DriverUserId": "67076306-13af-4e0e-8281-2e7fa238f73a",
                        "DriverName": "林保昌\n",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596494000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8250313,
                            "Longitude": 121.036644,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 93,
                        "VehicleNo": "493-VK",
                        "DriverUserId": "df8ed9bd-391d-45b6-bc64-ee6480700f37",
                        "DriverName": "張恩誌\n",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596494000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9104271,
                            "Longitude": 121.169739,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 95,
                        "VehicleNo": "KEA-2090",
                        "DriverUserId": "89a25f59-0d90-42c1-8657-5d2ac5a6b1da",
                        "DriverName": "詹富閔\n",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570849365000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0166988,
                            "Longitude": 121.267632,
                            "GAngle": 60,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1335,
                        "VehicleNo": "KED-0697",
                        "DriverUserId": "ff5fec33-9f0a-4e12-9814-d9e8522a9825",
                        "DriverName": "李世璋",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570637304000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.76024,
                            "Longitude": 120.958412,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1336,
                        "VehicleNo": "KEE-0085",
                        "DriverUserId": "1611e66e-5210-4a8b-94db-88bc68f5fc0f",
                        "DriverName": "曾增家",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596496000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8875751,
                            "Longitude": 121.054558,
                            "GAngle": 325,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1334,
                        "VehicleNo": "Q7-312",
                        "DriverUserId": "0fe74bb7-9294-41e7-acf5-299cc1c04146",
                        "DriverName": "張錦泉\n",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569970032000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7331314,
                            "Longitude": 120.914604,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 108,
                        "VehicleNo": "S5-382",
                        "DriverUserId": "490955e6-20bb-41d7-879b-ae99e051202e",
                        "DriverName": "唐振鴻 ",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869573000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.839838,
                            "Longitude": 121.022507,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 89.2K"
                    }]
            }, {
                "CompanyId": 41,
                "CompanyName": "金盟座-南",
                "GroupId": 40,
                "GroupName": "金盟座-南",
                "Cars": [{
                        "VehicleId": 1037,
                        "VehicleNo": "157-QM",
                        "DriverUserId": "fb48bd7b-fc47-401d-ac5e-bb7ce30bfe1d",
                        "DriverName": "曾勝裕",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596503000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7437782,
                            "Longitude": 120.338356,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1420,
                        "VehicleNo": "178-RS ",
                        "DriverUserId": "304e9b7e-7d14-4aee-a2d5-aca42bd590a7",
                        "DriverName": "張家寶",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.0836639,
                            "Longitude": 120.251526,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 314.9K"
                    }, {
                        "VehicleId": 1025,
                        "VehicleNo": "438-RM",
                        "DriverUserId": "8c46629b-d68c-42a6-95d6-443551a77db3",
                        "DriverName": "李世忠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570855582000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.1867962,
                            "Longitude": 120.238838,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1027,
                        "VehicleNo": "439-RM",
                        "DriverUserId": "8435aa72-a5bc-420e-b708-7f29d63cd7a9",
                        "DriverName": "李春欣",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596487000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3042088,
                            "Longitude": 120.300453,
                            "GAngle": 109,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1036,
                        "VehicleNo": "7U-012",
                        "DriverUserId": "d3c37bf5-a310-4791-8416-f52ae68b1e52",
                        "DriverName": "尤安和",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596479000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.0419941,
                            "Longitude": 120.252869,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1023,
                        "VehicleNo": "909-BV",
                        "DriverUserId": "8b71eb3f-ac26-4b84-96b5-069979934d54",
                        "DriverName": "陳昆祥",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596500000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3061085,
                            "Longitude": 120.289612,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北上 288.7"
                    }, {
                        "VehicleId": 1029,
                        "VehicleNo": "912-UY",
                        "DriverUserId": "abaacac9-8cf7-4fd4-a952-37c962e0f3ce",
                        "DriverName": "李昆榮",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570723165000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.5617142,
                            "Longitude": 120.354424,
                            "GAngle": 1,
                            "Direction": "北"
                        },
                        "LocationAddr": "國10 西 3.6K"
                    }, {
                        "VehicleId": 1022,
                        "VehicleNo": "BR-461",
                        "DriverUserId": "9e47df0e-abca-43af-899f-5a72c84defcc",
                        "DriverName": "張智淵",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570504412000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.0629387,
                            "Longitude": 120.253036,
                            "GAngle": 160,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 317.3K"
                    }, {
                        "VehicleId": 1421,
                        "VehicleNo": "KEE-0015",
                        "DriverUserId": "698e3e8c-918b-4f07-b12e-1c3abd83befd",
                        "DriverName": "李世忠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570357404000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.093544,
                            "Longitude": 120.24231,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1031,
                        "VehicleNo": "RN-983",
                        "DriverUserId": "1d5dbce7-3ff7-4831-bf49-f962b89a9e21",
                        "DriverName": "陳姿蓉",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.9682159,
                            "Longitude": 120.254585,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1030,
                        "VehicleNo": "S3-772",
                        "DriverUserId": "2b66a614-17a1-4008-aebd-aa969dab2f2c",
                        "DriverName": "鄭原裕",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596480000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8829765,
                            "Longitude": 120.494591,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1028,
                        "VehicleNo": "VP-063",
                        "DriverUserId": "271aa166-a171-4c7b-a4f3-3c8cf6a8c4cf",
                        "DriverName": "高盛賢",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570712719000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7861423,
                            "Longitude": 120.312508,
                            "GAngle": 82,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 36,
                "CompanyName": "金億-中",
                "GroupId": 35,
                "GroupName": "金億-中",
                "Cars": [{
                        "VehicleId": 929,
                        "VehicleNo": "583-QS",
                        "DriverUserId": "928db743-b2db-4408-8ee2-14ea32220edf",
                        "DriverName": "鄭光榮",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570770200000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.0250587,
                            "Longitude": 121.553406,
                            "GAngle": 278,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 45,
                "CompanyName": "冠福-南",
                "GroupId": 44,
                "GroupName": "冠福-南",
                "Cars": [{
                        "VehicleId": 1177,
                        "VehicleNo": "036-QL",
                        "DriverUserId": "d0f187bd-903d-4ad4-8aee-093d42580804",
                        "DriverName": "黃智翔",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570076296000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7874756,
                            "Longitude": 120.319221,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 347.6K"
                    }, {
                        "VehicleId": 1166,
                        "VehicleNo": "238-R9",
                        "DriverUserId": "5d795be1-edb0-4cc5-a5e1-1e2af9032ec6",
                        "DriverName": "鄭弘杰",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570780535000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6517544,
                            "Longitude": 120.335152,
                            "GAngle": 161,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 364.9K"
                    }, {
                        "VehicleId": 1171,
                        "VehicleNo": "KEF-1902",
                        "DriverUserId": "b9c26926-9522-4499-b213-cccdeda830fc",
                        "DriverName": "鄧志遠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570287141000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8741875,
                            "Longitude": 120.194252,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 338.2K"
                    }, {
                        "VehicleId": 1145,
                        "VehicleNo": "RN-330",
                        "DriverUserId": "cc3304a6-d1ad-4542-b38f-22655c855147",
                        "DriverName": "王進興",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570853446000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3048458,
                            "Longitude": 120.291115,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1148,
                        "VehicleNo": "RO-989",
                        "DriverUserId": "68cc3a6b-85a5-4253-ae53-2fe2d0929caf",
                        "DriverName": "蔡榮福",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570259607000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.0520267,
                            "Longitude": 120.26947,
                            "GAngle": 48,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1174,
                        "VehicleNo": "UC-849",
                        "DriverUserId": "18dabb94-caee-416b-b69b-47104209cb34",
                        "DriverName": "黃萬輝",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.9912376,
                            "Longitude": 120.248459,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 325.3K"
                    }]
            }, {
                "CompanyId": 43,
                "CompanyName": "南隆-南",
                "GroupId": 42,
                "GroupName": "南隆-南",
                "Cars": [{
                        "VehicleId": 1073,
                        "VehicleNo": "145-UV",
                        "DriverUserId": "1bf1c250-fde0-4a10-8a02-a5554ca61a51",
                        "DriverName": "葉峻助",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1566018348000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.496,
                            "Longitude": 120.455,
                            "GAngle": 203,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1103,
                        "VehicleNo": "261-SH",
                        "DriverUserId": "cb9aa43b-b61f-4824-b52a-4a40c18b69ca",
                        "DriverName": "莊世有",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869564000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8420639,
                            "Longitude": 120.298126,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 342.9K"
                    }, {
                        "VehicleId": 1082,
                        "VehicleNo": "405-BF",
                        "DriverUserId": "70a602f4-1fe1-40b1-ada2-4b5e5e2aa807",
                        "DriverName": "莊世羊",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8099079,
                            "Longitude": 120.314957,
                            "GAngle": 272,
                            "Direction": "東"
                        },
                        "LocationAddr": "國1 南 346.9K"
                    }, {
                        "VehicleId": 1093,
                        "VehicleNo": "BO-237",
                        "DriverUserId": "613d2336-cf44-476c-bfd8-f3e30ec34632",
                        "DriverName": "曹振山",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569998586000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.69928,
                            "Longitude": 120.587585,
                            "GAngle": 310,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1100,
                        "VehicleNo": "KED-2570",
                        "DriverUserId": "dfd378b1-555b-43c5-9826-ab832f21ec7d",
                        "DriverName": "李治文",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6420479,
                            "Longitude": 120.336929,
                            "GAngle": 183,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 366.0K"
                    }, {
                        "VehicleId": 1106,
                        "VehicleNo": "KED-9809",
                        "DriverUserId": "1b81e5b8-1d52-479b-9dbe-f90db5c9335a",
                        "DriverName": "林裕強",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570462789000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7026386,
                            "Longitude": 120.358635,
                            "GAngle": 73,
                            "Direction": "西"
                        },
                        "LocationAddr": "國10 西 6.7K"
                    }, {
                        "VehicleId": 1088,
                        "VehicleNo": "KEF-5587",
                        "DriverUserId": "ed4ccced-c05d-4b67-b2f1-51b127d10513",
                        "DriverName": "邱湧文",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570801054000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7292442,
                            "Longitude": 120.337631,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 357.3K"
                    }, {
                        "VehicleId": 1430,
                        "VehicleNo": "KEF-6219",
                        "DriverUserId": "be75fde0-f7d4-48ef-ad3d-728d47754baa",
                        "DriverName": "何天佑",
                        "cStatus": 1,
                        "OperationalStatus": "前往",
                        "StatusColor": 2,
                        "CarIcon": "C000_Red.gif",
                        "TaskId": 2457,
                        "UpdateTime": "\/Date(1570822233000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.590292,
                            "Longitude": 120.3242,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1089,
                        "VehicleNo": "QG-282",
                        "DriverUserId": "42683332-f301-4c9d-be99-e823557e7c5e",
                        "DriverName": "李家穎",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7813168,
                            "Longitude": 120.424019,
                            "GAngle": 211,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國3 南 383.0K"
                    }, {
                        "VehicleId": 1087,
                        "VehicleNo": "ZX-656",
                        "DriverUserId": "7d347017-40be-4706-b14f-a4e21c3ad635",
                        "DriverName": "孫翼翔",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570345687000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6806755,
                            "Longitude": 120.328804,
                            "GAngle": 92,
                            "Direction": "西"
                        },
                        "LocationAddr": "國1 北 361.6K"
                    }]
            }, {
                "CompanyId": 38,
                "CompanyName": "建明-中",
                "GroupId": 37,
                "GroupName": "建明-中",
                "Cars": [{
                        "VehicleId": 951,
                        "VehicleNo": "8H-875",
                        "DriverUserId": "0873571b-8e3a-4fc6-8995-444ba2d021db",
                        "DriverName": "林利",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570804860000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1911869,
                            "Longitude": 120.639542,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 948,
                        "VehicleNo": "SI-767",
                        "DriverUserId": "0c3b48b4-cc42-4120-b998-c52f30624d2a",
                        "DriverName": "謝彧珄",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570616320000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1525879,
                            "Longitude": 120.620621,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 15,
                "CompanyName": "飛輪-北",
                "GroupId": 14,
                "GroupName": "飛輪-北",
                "Cars": [{
                        "VehicleId": 482,
                        "VehicleNo": "725-BQ",
                        "DriverUserId": "69561143-03fa-4962-941d-7ee0c079b179",
                        "DriverName": "邱世凱",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596483000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0735989,
                            "Longitude": 121.430946,
                            "GAngle": 97,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 487,
                        "VehicleNo": "KEA-1308",
                        "DriverUserId": "34a47703-baa2-4fcb-a2ea-72b30724250d",
                        "DriverName": "黎大忠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596499000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.81274,
                            "Longitude": 121.130608,
                            "GAngle": 144,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 16,
                "CompanyName": "家泰-北",
                "GroupId": 15,
                "GroupName": "家泰-北",
                "Cars": [{
                        "VehicleId": 504,
                        "VehicleNo": "858-R9",
                        "DriverUserId": "a4072fcf-4598-497a-833f-6fa5c3b85c50",
                        "DriverName": "江文宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1560432148000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.049,
                            "Longitude": 121.209,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 27,
                "CompanyName": "海口-中",
                "GroupId": 26,
                "GroupName": "海口-中",
                "Cars": [{
                        "VehicleId": 780,
                        "VehicleNo": "775-SH",
                        "DriverUserId": "54d02b61-437a-4e5d-ad70-bafe55ce44ad",
                        "DriverName": "林訓禮",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596503000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7279415,
                            "Longitude": 120.77494,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 46,
                "CompanyName": "海口-南",
                "GroupId": 45,
                "GroupName": "海口-南",
                "Cars": [{
                        "VehicleId": 1180,
                        "VehicleNo": "308-TP",
                        "DriverUserId": "f910dae0-a45a-4af9-b7bb-d61ecaafbd37",
                        "DriverName": "廖文益",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570583248000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.4494953,
                            "Longitude": 120.489693,
                            "GAngle": 314,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1437,
                        "VehicleNo": "423-SH",
                        "DriverUserId": "9922affc-b305-436d-9a73-3ce91d3c9a78",
                        "DriverName": "魏嘉南",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570722966000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.29413,
                            "Longitude": 120.278282,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 288.2K"
                    }, {
                        "VehicleId": 1187,
                        "VehicleNo": "771-RM",
                        "DriverUserId": "2b9c82c4-411c-495d-bffc-f4732ea63cce",
                        "DriverName": "洪世豐",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570839210000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3093166,
                            "Longitude": 120.284851,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1184,
                        "VehicleNo": "KEB-8857",
                        "DriverUserId": "75d4d860-8aee-40ec-9922-558f2a0c17ed",
                        "DriverName": "羅冠鈞",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570280906000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.4957371,
                            "Longitude": 120.388229,
                            "GAngle": 105,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 50,
                "CompanyName": "益輝-南",
                "GroupId": 49,
                "GroupName": "益輝-南",
                "Cars": [{
                        "VehicleId": 1287,
                        "VehicleNo": "642-SB",
                        "DriverUserId": "5e5ed3e2-f13d-40a9-83a0-e8e5604cde6d",
                        "DriverName": "廖正華",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9234085,
                            "Longitude": 120.498093,
                            "GAngle": 8,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 214.5K"
                    }, {
                        "VehicleId": 1281,
                        "VehicleNo": "8G-853",
                        "DriverUserId": "13a8b3e5-4480-416a-8782-389f16874168",
                        "DriverName": "黃證橙",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3114281,
                            "Longitude": 120.426132,
                            "GAngle": 208,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國3 南 315.8K"
                    }, {
                        "VehicleId": 1288,
                        "VehicleNo": "AAR-518",
                        "DriverUserId": "35fee979-4e9f-4058-8226-caf41a3f20e0",
                        "DriverName": "莊建隆",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869563000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3204346,
                            "Longitude": 120.429222,
                            "GAngle": 189,
                            "Direction": "南"
                        },
                        "LocationAddr": "國3 南 314.8K"
                    }, {
                        "VehicleId": 1303,
                        "VehicleNo": "F3-759",
                        "DriverUserId": "1e7155b6-4e64-43fc-8c7b-33d5ac0770f9",
                        "DriverName": "廖金桂",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570411391000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.4958572,
                            "Longitude": 120.385307,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 264.6K"
                    }, {
                        "VehicleId": 1279,
                        "VehicleNo": "QP-717",
                        "DriverUserId": "fabb5185-9ee8-4b07-a4c8-0e04e5eb17cd",
                        "DriverName": "莊建忠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.328249,
                            "Longitude": 120.431442,
                            "GAngle": 200,
                            "Direction": "南"
                        },
                        "LocationAddr": "國3 南 314.0K"
                    }, {
                        "VehicleId": 1276,
                        "VehicleNo": "RN-257",
                        "DriverUserId": "a7bd8111-2311-429e-a32b-797713899897",
                        "DriverName": "謝文佑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869570000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3470345,
                            "Longitude": 120.44014,
                            "GAngle": 130,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1280,
                        "VehicleNo": "TU-873",
                        "DriverUserId": "80a0fc5d-10cb-4c5a-b5d8-a642ac19ed7d",
                        "DriverName": "廖農坤",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.4435329,
                            "Longitude": 120.362465,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 9,
                "CompanyName": "荃冠-北",
                "GroupId": 8,
                "GroupName": "荃冠-北",
                "Cars": [{
                        "VehicleId": 351,
                        "VehicleNo": "093-RE",
                        "DriverUserId": "a222705d-ee4b-473b-a8c3-c820eb6faf3f",
                        "DriverName": "陳進添",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569388892000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0649452,
                            "Longitude": 121.343163,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 43.5K"
                    }, {
                        "VehicleId": 343,
                        "VehicleNo": "107-S3",
                        "DriverUserId": "265d15a3-999c-4a84-9fbe-9b53c1e804c6",
                        "DriverName": "范綱智",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596498000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7547989,
                            "Longitude": 120.9516,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 344,
                        "VehicleNo": "282-Q2",
                        "DriverUserId": "7ed0170a-cf83-487f-9edc-24b288b101d6",
                        "DriverName": "戴文相",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1559878786000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.876,
                            "Longitude": 121.031,
                            "GAngle": 196,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 339,
                        "VehicleNo": "823-R5",
                        "DriverUserId": "0918b0ef-0e2b-41e3-9d2f-951b48cf9a68",
                        "DriverName": "胡展夫",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869564000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7553635,
                            "Longitude": 121.024879,
                            "GAngle": 269,
                            "Direction": "東"
                        },
                        "LocationAddr": "國3 南 96.0K"
                    }, {
                        "VehicleId": 341,
                        "VehicleNo": "9H-783",
                        "DriverUserId": "c3d9d971-c24b-4f2f-801e-3f8e2d5ec617",
                        "DriverName": "陳萬賀",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596501000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.251049,
                            "Longitude": 121.470039,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 26,
                "CompanyName": "清益-中",
                "GroupId": 25,
                "GroupName": "清益-中",
                "Cars": [{
                        "VehicleId": 752,
                        "VehicleNo": "098-QU",
                        "DriverUserId": "7e65096e-494d-4537-8b44-51e29077d6ee",
                        "DriverName": "賴建志",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570685544000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2671719,
                            "Longitude": 120.80793,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 764,
                        "VehicleNo": "109-SG",
                        "DriverUserId": "dd4fe3f6-f156-438a-b4d5-41d54e3cdfc5",
                        "DriverName": "蔡慶收",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570713371000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0639534,
                            "Longitude": 120.5213,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 759,
                        "VehicleNo": "242-S9",
                        "DriverUserId": "11216df5-49e1-4bda-828a-4d6c8e7783e1",
                        "DriverName": "黃彥智",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570866590000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3291378,
                            "Longitude": 120.715813,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 762,
                        "VehicleNo": "286-SA",
                        "DriverUserId": "f67b503d-558c-4901-a189-b5f99ea1615a",
                        "DriverName": "沈村旭",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869554000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9541245,
                            "Longitude": 120.50312,
                            "GAngle": 187,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 746,
                        "VehicleNo": "329-VE",
                        "DriverUserId": "0747f6bb-3d9e-46be-93c2-f2fe0abf244a",
                        "DriverName": "蔡宗憲",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869566000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3298931,
                            "Longitude": 120.716309,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 160.4K"
                    }, {
                        "VehicleId": 761,
                        "VehicleNo": "406-S8",
                        "DriverUserId": "5b15851b-dd54-4178-b7c2-59324d092ae3",
                        "DriverName": "洪士凱",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1560920099000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.39,
                            "Longitude": 120.76,
                            "GAngle": 105,
                            "Direction": "西"
                        },
                        "LocationAddr": "國1 北 150.3K"
                    }, {
                        "VehicleId": 760,
                        "VehicleNo": "492-S8",
                        "DriverUserId": "d0d4735e-5371-4299-9cdc-134a4aace25c",
                        "DriverName": "蕭義霖",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3914185,
                            "Longitude": 120.758629,
                            "GAngle": 232,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 768,
                        "VehicleNo": "7U-797",
                        "DriverUserId": "00b426d7-af00-4392-8954-b02b8dee0f4b",
                        "DriverName": "盧明哲",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869554000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8875885,
                            "Longitude": 120.492577,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 749,
                        "VehicleNo": "829-VR",
                        "DriverUserId": "9e26c3ae-2a89-4989-ba25-e9978db3b40f",
                        "DriverName": "李瑞隆",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596501000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2703876,
                            "Longitude": 120.691452,
                            "GAngle": 80,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 757,
                        "VehicleNo": "F6-690",
                        "DriverUserId": "82d30a47-6e08-4c34-b529-c86b9fe45e26",
                        "DriverName": "杜進福",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569453555000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2058983,
                            "Longitude": 120.657745,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 774,
                        "VehicleNo": "KEB-2727",
                        "DriverUserId": "5889c73f-eda6-4605-9ae8-3d2d117566e4",
                        "DriverName": "黃冠霖",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.05821,
                            "Longitude": 120.523384,
                            "GAngle": 174,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 199.1K"
                    }, {
                        "VehicleId": 1375,
                        "VehicleNo": "KEG-9198",
                        "DriverUserId": "b9c0f482-16a6-4197-b878-6d643374d1c7",
                        "DriverName": "莊凱博",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3292542,
                            "Longitude": 120.716492,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 158.4K"
                    }, {
                        "VehicleId": 767,
                        "VehicleNo": "Q7-408",
                        "DriverUserId": "fa96275c-e817-416a-8363-3bec36050542",
                        "DriverName": "游智分",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570844549000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0643826,
                            "Longitude": 120.521263,
                            "GAngle": 352,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 10,
                "CompanyName": "祥盛-北",
                "GroupId": 9,
                "GroupName": "祥盛-北",
                "Cars": [{
                        "VehicleId": 372,
                        "VehicleNo": "AAD-632",
                        "DriverUserId": "e762cfe2-f3f0-4331-af9a-fc8253c086c5",
                        "DriverName": "曾源台",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8932114,
                            "Longitude": 121.262474,
                            "GAngle": 231,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國3 北 62.6K"
                    }]
            }, {
                "CompanyId": 13,
                "CompanyName": "祥揚-北",
                "GroupId": 12,
                "GroupName": "祥揚-北",
                "Cars": [{
                        "VehicleId": 444,
                        "VehicleNo": "403-TC",
                        "DriverUserId": "a95f6752-7407-4796-b862-87c2233cdd38",
                        "DriverName": "劉豪傑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596502000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9935265,
                            "Longitude": 121.277473,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 448,
                        "VehicleNo": "730-RS",
                        "DriverUserId": "f568bd34-6e31-4dc7-ac98-72e3166b7ba8",
                        "DriverName": "吳進財",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570784060000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9930744,
                            "Longitude": 121.592957,
                            "GAngle": 314,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 449,
                        "VehicleNo": "AAC-056",
                        "DriverUserId": "7d4527e9-6852-41ba-826f-49c005b1684b",
                        "DriverName": "吳永峰",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596489000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.94239,
                            "Longitude": 121.711807,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國5 北 14.7K"
                    }, {
                        "VehicleId": 442,
                        "VehicleNo": "KEC-0575",
                        "DriverUserId": "b7ddfa8b-c58d-46c6-8481-c57525107483",
                        "DriverName": "陳厚言",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570853538000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9863167,
                            "Longitude": 121.419907,
                            "GAngle": 247,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 443,
                        "VehicleNo": "KEC-0982",
                        "DriverUserId": "6b2c4186-993a-4869-96d5-935abbeaaef0",
                        "DriverName": "陳厚訓",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869490000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9766655,
                            "Longitude": 121.567604,
                            "GAngle": 100,
                            "Direction": "西"
                        },
                        "LocationAddr": "國3 北 25.3K"
                    }]
            }, {
                "CompanyId": 19,
                "CompanyName": "祥碩-中",
                "GroupId": 18,
                "GroupName": "祥碩-中",
                "Cars": [{
                        "VehicleId": 1362,
                        "VehicleNo": "640-UY",
                        "DriverUserId": "ecf7547d-bc18-49e5-8878-87ae542a1baa",
                        "DriverName": "洪嘉展",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869564000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.785675,
                            "Longitude": 120.477371,
                            "GAngle": 12,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 229.9K"
                    }, {
                        "VehicleId": 542,
                        "VehicleNo": "979-BG",
                        "DriverUserId": "174df46b-6d72-44ba-8ece-d6e61ea79c8f",
                        "DriverName": "陳德崴",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2582817,
                            "Longitude": 120.532166,
                            "GAngle": 127,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 561,
                        "VehicleNo": "BP-967",
                        "DriverUserId": "df3e7add-e56e-4cf0-be8b-706e52d61d6e",
                        "DriverName": "游竹儀",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7258453,
                            "Longitude": 120.587181,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 549,
                        "VehicleNo": "BQ-727",
                        "DriverUserId": "f567475d-bdcc-4ba5-a743-0127800cb385",
                        "DriverName": "鄭居和",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570636839000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.4004211,
                            "Longitude": 120.668579,
                            "GAngle": 66,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 3,
                "CompanyName": "祥碩-北",
                "GroupId": 2,
                "GroupName": "祥碩-北",
                "Cars": [{
                        "VehicleId": 65,
                        "VehicleNo": "245-UM",
                        "DriverUserId": "ab603e58-33a1-489a-b4fd-635f4e086ba3",
                        "DriverName": "劉昱婕",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596481000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0662022,
                            "Longitude": 121.591278,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 62,
                        "VehicleNo": "660-BF",
                        "DriverUserId": "00054b9d-ddfa-4282-9b0f-82e33b285f29",
                        "DriverName": "林萬歷",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596482000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0659771,
                            "Longitude": 121.591187,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1329,
                        "VehicleNo": "AAD-059",
                        "DriverUserId": "9b98ebdf-2424-43c4-83bc-880074e0a975",
                        "DriverName": "宋嘉慶",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596495000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.047533,
                            "Longitude": 121.223129,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 70,
                        "VehicleNo": "BR-042",
                        "DriverUserId": "c2db4f7b-28bc-4485-84de-e58149675b4e",
                        "DriverName": "邱顯峯",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568632502000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8022747,
                            "Longitude": 121.009575,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 93.4K"
                    }]
            }, {
                "CompanyId": 40,
                "CompanyName": "祥碩-南",
                "GroupId": 39,
                "GroupName": "祥碩-南",
                "Cars": [{
                        "VehicleId": 995,
                        "VehicleNo": "158-BL",
                        "DriverUserId": "8223f03d-be2b-489d-9a17-7abc68490432",
                        "DriverName": "楊金泉",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3158741,
                            "Longitude": 120.332481,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 996,
                        "VehicleNo": "263-BH",
                        "DriverUserId": "7f6174a1-b8ff-4855-96fe-0ed5f1bdba80",
                        "DriverName": "黃炳祥",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596506000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.1867943,
                            "Longitude": 120.238846,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 993,
                        "VehicleNo": "BS-812",
                        "DriverUserId": "40ebc858-46c6-419a-955a-effedc0d5582",
                        "DriverName": "曾錦兆",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570600682000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.493927,
                            "Longitude": 120.385246,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 997,
                        "VehicleNo": "Z4-133",
                        "DriverUserId": "88fe5604-3140-45dc-a486-02ca070cf904",
                        "DriverName": "鍾蕙如",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596486000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.9913082,
                            "Longitude": 120.247154,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 33,
                "CompanyName": "頂奕-中",
                "GroupId": 32,
                "GroupName": "頂奕-中",
                "Cars": [{
                        "VehicleId": 896,
                        "VehicleNo": "370-VE",
                        "DriverUserId": "4dd59093-ed6d-4fd3-bb72-ba0cf33a4b65",
                        "DriverName": "蕭建宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2506027,
                            "Longitude": 120.692833,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 891,
                        "VehicleNo": "BH-873",
                        "DriverUserId": "e8f27d40-5743-4783-a43d-ceffe7a9e01a",
                        "DriverName": "廖浚傑",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869555000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2695332,
                            "Longitude": 120.694344,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1390,
                        "VehicleNo": "KEE-8718",
                        "DriverUserId": "9ba2fbd0-e28e-4e76-8472-cab1915ff5ea",
                        "DriverName": "沈祺洲",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869564000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2250538,
                            "Longitude": 120.683441,
                            "GAngle": 12,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 170.7K"
                    }, {
                        "VehicleId": 893,
                        "VehicleNo": "SI-419",
                        "DriverUserId": "1ce064d5-a980-4901-a9db-39c2efb06dac",
                        "DriverName": "許肇振",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2503319,
                            "Longitude": 120.690285,
                            "GAngle": 357,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 167.8K"
                    }]
            }, {
                "CompanyId": 34,
                "CompanyName": "頂益-中",
                "GroupId": 33,
                "GroupName": "頂益-中",
                "Cars": [{
                        "VehicleId": 900,
                        "VehicleNo": "131-SE",
                        "DriverUserId": "895a64db-1fdf-4360-89ad-6f587f6a8cf5",
                        "DriverName": "張志豪",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0052528,
                            "Longitude": 120.730804,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國6 東 6.5K"
                    }, {
                        "VehicleId": 901,
                        "VehicleNo": "158-RY",
                        "DriverUserId": "73377c9f-bda9-4c0f-8844-b3e29adda885",
                        "DriverName": "許福田",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869560000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1178818,
                            "Longitude": 120.580284,
                            "GAngle": 1,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 902,
                        "VehicleNo": "302-TM",
                        "DriverUserId": "e118f370-b86a-4586-8868-e90412fa45e9",
                        "DriverName": "廖志偉",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570845513000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1110649,
                            "Longitude": 120.650391,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 905,
                        "VehicleNo": "511-RB",
                        "DriverUserId": "98eb39e3-561c-4a90-bc68-487a161a081b",
                        "DriverName": "施達修",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596505000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1774483,
                            "Longitude": 120.664291,
                            "GAngle": 146,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 908,
                        "VehicleNo": "KEE-7509",
                        "DriverUserId": "d3246b3e-b9ac-4b7f-9a25-144eaeb9b8e6",
                        "DriverName": "賴宏安",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869548000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1799183,
                            "Longitude": 120.616081,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 47,
                "CompanyName": "凱迪-南",
                "GroupId": 46,
                "GroupName": "凱迪-南",
                "Cars": [{
                        "VehicleId": 1198,
                        "VehicleNo": "868-RS",
                        "DriverUserId": "3c9e15a2-08e7-46d2-9a62-67f7153255cb",
                        "DriverName": "陳育助",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.1168823,
                            "Longitude": 120.242378,
                            "GAngle": 194,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1195,
                        "VehicleNo": "896-QU",
                        "DriverUserId": "cd121240-1490-4675-bf0b-c90742949c4a",
                        "DriverName": "賴安邦",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869569000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.5930023,
                            "Longitude": 120.507713,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1197,
                        "VehicleNo": "BQ-227",
                        "DriverUserId": "64cc08ec-d2fe-4552-ad5e-526d3b543abe",
                        "DriverName": "林益謙",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3372269,
                            "Longitude": 120.435806,
                            "GAngle": 206,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國3 南 312.8K"
                    }, {
                        "VehicleId": 1211,
                        "VehicleNo": "ZU-433",
                        "DriverUserId": "6eaec967-da71-4df1-ac6d-0259b642d94c",
                        "DriverName": "王進男",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596505000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.01499,
                            "Longitude": 120.247536,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 322.8K"
                    }]
            }, {
                "CompanyId": 51,
                "CompanyName": "惠鋒-南",
                "GroupId": 50,
                "GroupName": "惠鋒-南",
                "Cars": [{
                        "VehicleId": 1303,
                        "VehicleNo": "F3-759",
                        "DriverUserId": "1e7155b6-4e64-43fc-8c7b-33d5ac0770f9",
                        "DriverName": "廖金桂",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570411391000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.4958572,
                            "Longitude": 120.385307,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 264.6K"
                    }]
            }, {
                "CompanyId": 1,
                "CompanyName": "hantek",
                "GroupId": 53,
                "GroupName": "測試",
                "Cars": [{
                        "VehicleId": 1450,
                        "VehicleNo": "MNH-6077",
                        "DriverUserId": "e92d1de4-7493-43cb-b968-565b6bf98e16",
                        "DriverName": "測試-康宇",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570777326000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0517025,
                            "Longitude": 121.287964,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 30,
                "CompanyName": "焜信-中",
                "GroupId": 29,
                "GroupName": "焜信-中",
                "Cars": [{
                        "VehicleId": 1380,
                        "VehicleNo": "091-BF",
                        "DriverUserId": "fb80489e-0f7c-436d-8799-7b514083df0e",
                        "DriverName": "謝衍暉",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869547000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7781773,
                            "Longitude": 120.476517,
                            "GAngle": 180,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 230.7K"
                    }, {
                        "VehicleId": 859,
                        "VehicleNo": "117-RE",
                        "DriverUserId": "5a797b4a-8d50-4534-a66f-3c221db8e766",
                        "DriverName": "林明懷",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869546000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9538784,
                            "Longitude": 120.503189,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 南 189.8K"
                    }, {
                        "VehicleId": 863,
                        "VehicleNo": "126-QU",
                        "DriverUserId": "d55024da-dd3b-49be-ba1c-e280729cafa8",
                        "DriverName": "王文昌",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569905675000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7863579,
                            "Longitude": 120.473618,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 230.0K"
                    }, {
                        "VehicleId": 860,
                        "VehicleNo": "460-RT",
                        "DriverUserId": "14f1e9f7-ec49-4689-8ffe-454f2fc82c8b",
                        "DriverName": "王文忠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869551000)\/",
                        "LastCoordinate": {
                            "Latitude": 0,
                            "Longitude": 0,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 855,
                        "VehicleNo": "569-UT",
                        "DriverUserId": "5c778597-2d70-4bba-abf6-409ddf86615c",
                        "DriverName": "王焜義",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9540176,
                            "Longitude": 120.50325,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1379,
                        "VehicleNo": "731-RU",
                        "DriverUserId": "64fa11f0-4502-4085-aa18-7bce66f8122c",
                        "DriverName": "許哲嘉",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869546000)\/",
                        "LastCoordinate": {
                            "Latitude": 0,
                            "Longitude": 0,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 854,
                        "VehicleNo": "733-VR",
                        "DriverUserId": "82644b64-685b-444a-8df7-88fa42f0f60e",
                        "DriverName": "張聰猛",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570842252000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9535122,
                            "Longitude": 120.508766,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 850,
                        "VehicleNo": "F6-489",
                        "DriverUserId": "3e3612a0-003a-4be8-be1e-8a2f2d87b3f4",
                        "DriverName": "陳信朋",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8500328,
                            "Longitude": 120.697845,
                            "GAngle": 65,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 856,
                        "VehicleNo": "F9-746",
                        "DriverUserId": "98379b27-4af7-453b-9550-8b903285e210",
                        "DriverName": "林財義",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570745074000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0660057,
                            "Longitude": 120.520378,
                            "GAngle": 238,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國1 南 189.4K"
                    }, {
                        "VehicleId": 861,
                        "VehicleNo": "KEB-0596",
                        "DriverUserId": "d584943e-cfdb-4270-a411-c5e19bf4a447",
                        "DriverName": "鄭啟泓",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596484000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.19643,
                            "Longitude": 120.6482,
                            "GAngle": 65,
                            "Direction": "西北"
                        },
                        "LocationAddr": "國1 北 175.6K"
                    }, {
                        "VehicleId": 853,
                        "VehicleNo": "KED-5299",
                        "DriverUserId": "8ba65a93-5311-4954-84ce-88debaddbfb0",
                        "DriverName": "莊志文",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596501000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.95124,
                            "Longitude": 120.546875,
                            "GAngle": 165,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 848,
                        "VehicleNo": "KED-7928",
                        "DriverUserId": "259f1547-f162-481d-bdde-075914c22383",
                        "DriverName": "陳毓政",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.5790634,
                            "Longitude": 120.4273,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 277.6K"
                    }, {
                        "VehicleId": 851,
                        "VehicleNo": "UC-330",
                        "DriverUserId": "2ca3942f-1e70-4cd5-b344-92aaae994069",
                        "DriverName": "王焜鄰",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869572000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8988132,
                            "Longitude": 120.496834,
                            "GAngle": 16,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 217.3K"
                    }]
            }, {
                "CompanyId": 24,
                "CompanyName": "翔立興-中",
                "GroupId": 23,
                "GroupName": "翔立興-中",
                "Cars": [{
                        "VehicleId": 710,
                        "VehicleNo": "281-UR",
                        "DriverUserId": "e8751f64-85d1-4ace-98f7-5615354a0045",
                        "DriverName": "林旻慶",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596487000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0429363,
                            "Longitude": 120.589973,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 708,
                        "VehicleNo": "6F-998",
                        "DriverUserId": "a3225065-cacf-4fa7-aabe-fae9e148ad8a",
                        "DriverName": "黃朝琮",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596499000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.24185,
                            "Longitude": 120.832184,
                            "GAngle": 141,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 715,
                        "VehicleNo": "719-QH",
                        "DriverUserId": "e13feba6-0755-4882-85f3-8927892ab2af",
                        "DriverName": "朱一維",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568676412000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.15684,
                            "Longitude": 120.723022,
                            "GAngle": 258,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 718,
                        "VehicleNo": "KEE-9701",
                        "DriverUserId": "2369cde0-c676-4b36-8b17-949eacb8eafa",
                        "DriverName": "盧聰洲",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570802801000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.8888645,
                            "Longitude": 120.493523,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 720,
                        "VehicleNo": "Q4-596",
                        "DriverUserId": "f0b0132a-9fd8-45ef-8f0c-e20cd28ad222",
                        "DriverName": "朱銀掀",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596503000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.09258,
                            "Longitude": 120.603409,
                            "GAngle": 313,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 697,
                        "VehicleNo": "RV-022",
                        "DriverUserId": "67fbf0d9-175e-4e17-98ba-8a30aaf9b3cc",
                        "DriverName": "彭世偉",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596500000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6912384,
                            "Longitude": 120.916206,
                            "GAngle": 50,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 35,
                "CompanyName": "詠翔-中",
                "GroupId": 34,
                "GroupName": "詠翔-中",
                "Cars": [{
                        "VehicleId": 914,
                        "VehicleNo": "KEC-5955",
                        "DriverUserId": "f467a87d-b3b9-4eb5-88e8-ed34af03bb6f",
                        "DriverName": "張榆萱",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596507000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.9962444,
                            "Longitude": 120.954559,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 12,
                "CompanyName": "嵩驛-北",
                "GroupId": 11,
                "GroupName": "嵩驛-北",
                "Cars": [{
                        "VehicleId": 432,
                        "VehicleNo": "145-RT",
                        "DriverUserId": "276f99d0-4fbb-4303-880c-d7ca7c0412f6",
                        "DriverName": "張義仙",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1566355794000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.869,
                            "Longitude": 121.225,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1352,
                        "VehicleNo": "AAJ-028",
                        "DriverUserId": "dc26b49c-a0a6-476a-9ea3-f11bcbdd7b5d",
                        "DriverName": "張宇青",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596506000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8839016,
                            "Longitude": 121.211472,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 416,
                        "VehicleNo": "BE-759",
                        "DriverUserId": "3bbbe50e-f468-4450-998a-60531d37cd5b",
                        "DriverName": "陳森朝",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596498000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9419441,
                            "Longitude": 121.297455,
                            "GAngle": 179,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 423,
                        "VehicleNo": "KED-2752",
                        "DriverUserId": "35bfff88-9f73-461e-a6e8-8403bfca1902",
                        "DriverName": "劉修享",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596502000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8622952,
                            "Longitude": 121.222847,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 422,
                        "VehicleNo": "Q2-547",
                        "DriverUserId": "6e8459b3-b8d7-4f48-8ace-71ba8d181ad1",
                        "DriverName": "江全冠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570793996000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8451157,
                            "Longitude": 121.1994,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 23,
                "CompanyName": "新銓億-中",
                "GroupId": 22,
                "GroupName": "新銓億-中",
                "Cars": [{
                        "VehicleId": 1373,
                        "VehicleNo": "025-UA",
                        "DriverUserId": "02ebea13-d9a3-4188-ace5-005dffe8c69f",
                        "DriverName": "陳德源",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570010705000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0805874,
                            "Longitude": 120.688461,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 669,
                        "VehicleNo": "073-S8",
                        "DriverUserId": "3731ed23-2d7a-43bd-a3c7-34b32b820dea",
                        "DriverName": "陳錦聰",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869527000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.27387,
                            "Longitude": 120.557,
                            "GAngle": 290,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 666,
                        "VehicleNo": "243-RS",
                        "DriverUserId": "901187ec-803d-411f-ace5-f35f04ede2fe",
                        "DriverName": "賴桂程",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596498000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3976326,
                            "Longitude": 120.646057,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 663,
                        "VehicleNo": "339-R5",
                        "DriverUserId": "7ea7b561-deed-4009-a9dc-166ef2b854aa",
                        "DriverName": "蔡進忠",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570867791000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0641441,
                            "Longitude": 120.520454,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 679,
                        "VehicleNo": "541-S6",
                        "DriverUserId": "bac300bb-599b-4108-8da0-402d82cd8cd4",
                        "DriverName": "曾安尹",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569297987000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3294373,
                            "Longitude": 120.715828,
                            "GAngle": 50,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 677,
                        "VehicleNo": "747-SH",
                        "DriverUserId": "df8f711d-ce82-4952-9f3b-2e81a74d5533",
                        "DriverName": "洪東成",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570802979000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.6915741,
                            "Longitude": 120.921776,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 672,
                        "VehicleNo": "859-QD",
                        "DriverUserId": "87451b71-5d31-4b4a-80b0-680c73360bea",
                        "DriverName": "李鍵靈",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869566000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2048378,
                            "Longitude": 120.5662,
                            "GAngle": 243,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 674,
                        "VehicleNo": "8F-737",
                        "DriverUserId": "05cc162b-2796-4eeb-ac12-18a90c8562e8",
                        "DriverName": "賴明俊",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570867005000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2798119,
                            "Longitude": 120.59977,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 681,
                        "VehicleNo": "9E-348",
                        "DriverUserId": "9ffc5f13-193a-459d-92f4-8b8a30ef6213",
                        "DriverName": "陳泳福",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869563000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0653152,
                            "Longitude": 120.6643,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 686,
                        "VehicleNo": "K6-803",
                        "DriverUserId": "24b766e2-3d7c-4ca4-90ce-fcf4621e3a48",
                        "DriverName": "李金龍",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869549000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0794964,
                            "Longitude": 120.631065,
                            "GAngle": 311,
                            "Direction": "東北"
                        },
                        "LocationAddr": "國3 北 205.3K"
                    }, {
                        "VehicleId": 692,
                        "VehicleNo": "KEE-5301",
                        "DriverUserId": "e0f14d7f-eaf8-4452-b37b-8ec0a671a426",
                        "DriverName": "陳建榮",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869566000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.08279,
                            "Longitude": 120.5928,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 673,
                        "VehicleNo": "KEE-5790",
                        "DriverUserId": "4e8e3f47-3038-4947-8ea3-aabe1736bd41",
                        "DriverName": "吳青雲",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869567000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2361012,
                            "Longitude": 120.71,
                            "GAngle": 197,
                            "Direction": "南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 665,
                        "VehicleNo": "KEE-7560",
                        "DriverUserId": "1a063b71-9a21-450e-bcee-efbce5e1fa1d",
                        "DriverName": "蔣勝期",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596493000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.396513,
                            "Longitude": 120.670235,
                            "GAngle": 320,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 668,
                        "VehicleNo": "KEG-7611",
                        "DriverUserId": "f4ff8bfc-0a7a-436c-88ba-62ddb24d1554",
                        "DriverName": "賴建利",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1706772,
                            "Longitude": 120.58252,
                            "GAngle": 5,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 687,
                        "VehicleNo": "KEG-7673",
                        "DriverUserId": "6d9c6b0e-cbae-4a31-a98d-7fe020faf506",
                        "DriverName": "莊迅迆",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570695334000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1731415,
                            "Longitude": 121.170288,
                            "GAngle": 210,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 659,
                        "VehicleNo": "SB-906",
                        "DriverUserId": "a6b20bd3-86c0-4b53-9cc2-c546feb57ef8",
                        "DriverName": "宋昭賢",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869536000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.2058926,
                            "Longitude": 120.657852,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北上 174.0"
                    }, {
                        "VehicleId": 691,
                        "VehicleNo": "SK-436",
                        "DriverUserId": "7d4f4fed-66a4-45c8-b2e2-ec023305ef23",
                        "DriverName": "陳榮輝",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0038567,
                            "Longitude": 120.654434,
                            "GAngle": 151,
                            "Direction": "西南"
                        },
                        "LocationAddr": "國3 南 217.7K"
                    }]
            }, {
                "CompanyId": 7,
                "CompanyName": "新銓億-北",
                "GroupId": 6,
                "GroupName": "新銓億-北",
                "Cars": [{
                        "VehicleId": 190,
                        "VehicleNo": "029-UM",
                        "DriverUserId": "bcea896f-ff2e-42ff-96fc-ba0cc5e56503",
                        "DriverName": "黃明永",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596506000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.80984,
                            "Longitude": 120.974136,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 196,
                        "VehicleNo": "373-S6",
                        "DriverUserId": "12e35f28-c1a1-4932-85c2-69b565cdf503",
                        "DriverName": "蔡明輝",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596504000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.06385,
                            "Longitude": 121.2037,
                            "GAngle": 270,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 189,
                        "VehicleNo": "3V-588",
                        "DriverUserId": "0a8379fc-03f8-4ea9-9261-0a7928eff58b",
                        "DriverName": "蔡萬養",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596483000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0808659,
                            "Longitude": 121.446129,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 183,
                        "VehicleNo": "KEB-1358",
                        "DriverUserId": "1bf950fb-68e4-4388-9c67-6375a636e104",
                        "DriverName": "李連生",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0791855,
                            "Longitude": 121.665039,
                            "GAngle": 247,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國1 北 9.3K"
                    }]
            }, {
                "CompanyId": 59,
                "CompanyName": "萬全-中",
                "GroupId": 57,
                "GroupName": "萬全-中",
                "Cars": [{
                        "VehicleId": 539,
                        "VehicleNo": "087-R5",
                        "DriverUserId": "0cd5f1d6-b7ec-49e1-9ca9-7ad4e18ca618",
                        "DriverName": "林建佑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869566000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7339172,
                            "Longitude": 120.595993,
                            "GAngle": 282,
                            "Direction": "東"
                        },
                        "LocationAddr": "國3 北 260.2K"
                    }, {
                        "VehicleId": 536,
                        "VehicleNo": "452-TV",
                        "DriverUserId": "8c823084-23e3-4fca-86a3-32ed8afd8cc1",
                        "DriverName": "洪俊宇",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569397198000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.7360477,
                            "Longitude": 120.469246,
                            "GAngle": 160,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 235.6K"
                    }, {
                        "VehicleId": 521,
                        "VehicleNo": "658-QN",
                        "DriverUserId": "97ac59bf-25b2-467e-9f31-115f78b8a67e",
                        "DriverName": "黃森敏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570684802000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.3970242,
                            "Longitude": 120.646645,
                            "GAngle": 249,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 538,
                        "VehicleNo": "KED-0712",
                        "DriverUserId": "b0ada25a-0a62-4106-ba2d-f41e486477e0",
                        "DriverName": "賴憲億",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0955753,
                            "Longitude": 120.638832,
                            "GAngle": 86,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 530,
                        "VehicleNo": "KED-9165",
                        "DriverUserId": "57d891f2-917e-4df7-9c81-8baba821ed8b",
                        "DriverName": "彭浚銘",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570101735000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1104145,
                            "Longitude": 120.683327,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1359,
                        "VehicleNo": "KED-9165\n",
                        "DriverUserId": "2f5ac0e2-8bf2-4ffa-b8f7-dec8a5fecc55",
                        "DriverName": "林坤成",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.070219,
                            "Longitude": 120.6465,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1361,
                        "VehicleNo": "KEE-0198",
                        "DriverUserId": "d13ea702-d71d-49d1-a955-45ba298a3b0f",
                        "DriverName": "劉瓊華",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569538564000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1088638,
                            "Longitude": 120.63517,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 58,
                "CompanyName": "萬全-北",
                "GroupId": 56,
                "GroupName": "萬全-北",
                "Cars": [{
                        "VehicleId": 36,
                        "VehicleNo": "159-UM",
                        "DriverUserId": "9bd52142-c98a-4ece-ba3d-2fb0985d130f",
                        "DriverName": "陳竹杉",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570812265000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0040932,
                            "Longitude": 121.252411,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 21,
                        "VehicleNo": "191-QP",
                        "DriverUserId": "6d64cb63-8e1e-438a-ba2a-4068a23d0a33",
                        "DriverName": "劉運融",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570852054000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9777,
                            "Longitude": 121.152,
                            "GAngle": 147,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 15,
                        "VehicleNo": "737-R5",
                        "DriverUserId": "61f4fb56-d666-4721-8cbb-b3c74ec246fc",
                        "DriverName": "周宥男",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596498000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9926414,
                            "Longitude": 121.593239,
                            "GAngle": 291,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 38,
                        "VehicleNo": "829-R7",
                        "DriverUserId": "5e58bf3e-19a8-441e-8202-bef3044a5234",
                        "DriverName": "戴煥騏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570799567000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7932529,
                            "Longitude": 121.172173,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 82.6K"
                    }, {
                        "VehicleId": 29,
                        "VehicleNo": "890-TV",
                        "DriverUserId": "b7d918e8-cb51-4a7f-8b91-201fc5edde67",
                        "DriverName": "翁興龍",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9898949,
                            "Longitude": 121.235443,
                            "GAngle": 328,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 4,
                        "VehicleNo": "AAC-179",
                        "DriverUserId": "8a557254-cff2-4202-be9b-24d7d2f22b76",
                        "DriverName": "戴宗璽",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1569928125000)\/",
                        "LastCoordinate": {
                            "Latitude": 25.0082283,
                            "Longitude": 121.515396,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 10,
                        "VehicleNo": "AAD-583",
                        "DriverUserId": "364d55c3-547e-435d-8e4b-d2a36e7b611a",
                        "DriverName": "林竪鈞",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596503000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9932652,
                            "Longitude": 121.592995,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 40,
                        "VehicleNo": "KEC-0297",
                        "DriverUserId": "e4987695-5585-4409-af48-05c443e0e770",
                        "DriverName": "陳金石",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596495000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7998257,
                            "Longitude": 121.191338,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 19,
                        "VehicleNo": "KEC-0328",
                        "DriverUserId": "e843c192-fb36-47a6-b017-d4d252202a0f",
                        "DriverName": "沈朝裕",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869541000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9782257,
                            "Longitude": 121.225937,
                            "GAngle": 226,
                            "Direction": "東南"
                        },
                        "LocationAddr": "國1 南 58.9K"
                    }, {
                        "VehicleId": 22,
                        "VehicleNo": "Q8-955",
                        "DriverUserId": "080cc632-9cf9-44af-a4b2-d734665d22b0",
                        "DriverName": "謝福忠",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570696383000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.7651653,
                            "Longitude": 121.083534,
                            "GAngle": 250,
                            "Direction": "東"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 60,
                "CompanyName": "萬全-南",
                "GroupId": 58,
                "GroupName": "萬全-南",
                "Cars": [{
                        "VehicleId": 986,
                        "VehicleNo": "002-BF",
                        "DriverUserId": "0fa1b8ff-647c-4647-8c12-4079a90588a8",
                        "DriverName": "林裕景",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570006565000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6564121,
                            "Longitude": 120.310493,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 966,
                        "VehicleNo": "170-QN",
                        "DriverUserId": "22ffb962-7ff2-4ab4-b189-a524bb905774",
                        "DriverName": "黃進躬",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869570000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.2298336,
                            "Longitude": 120.36203,
                            "GAngle": 7,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 327.7K"
                    }, {
                        "VehicleId": 984,
                        "VehicleNo": "416-BX",
                        "DriverUserId": "541b5dac-e1dc-44df-b4c8-4a20d3f0bd79",
                        "DriverName": "邱利昌",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596506000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8781624,
                            "Longitude": 120.279678,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 958,
                        "VehicleNo": "661-RM",
                        "DriverUserId": "827c705c-7686-4f81-b569-ffbe99c09184",
                        "DriverName": "蘇家輝\n",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596485000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.3159561,
                            "Longitude": 120.332764,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 976,
                        "VehicleNo": "9H-636",
                        "DriverUserId": "625601ea-bbb4-47be-9641-963c9fec13d3",
                        "DriverName": "葉坤華",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570849157000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6379738,
                            "Longitude": 120.538879,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1397,
                        "VehicleNo": "F9-219\n",
                        "DriverUserId": "01819b7f-cbd3-47b4-9d1f-833092b33c67",
                        "DriverName": "李政道",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869570000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.495842,
                            "Longitude": 120.388733,
                            "GAngle": 124,
                            "Direction": "西南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 964,
                        "VehicleNo": "KEA-2252",
                        "DriverUserId": "c80a6f35-3fc9-4874-b164-b28addfb26b0",
                        "DriverName": "翁朝全",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869573000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.4585781,
                            "Longitude": 120.243057,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 978,
                        "VehicleNo": "KEC-0061",
                        "DriverUserId": "364bd600-0773-4143-abbd-59068592c650",
                        "DriverName": "曾勝傑",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC315_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568615425000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6868477,
                            "Longitude": 120.336456,
                            "GAngle": 313,
                            "Direction": "東北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 44,
                "CompanyName": "僑航-南",
                "GroupId": 43,
                "GroupName": "僑航-南",
                "Cars": [{
                        "VehicleId": 1128,
                        "VehicleNo": "141-TR",
                        "DriverUserId": "f0e96dab-3ecc-448f-9a27-9324d460f4d8",
                        "DriverName": "涂育銘",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC180_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.86364,
                            "Longitude": 120.286369,
                            "GAngle": 159,
                            "Direction": "南"
                        },
                        "LocationAddr": "國1 南 340.2K"
                    }, {
                        "VehicleId": 1115,
                        "VehicleNo": "7U-647",
                        "DriverUserId": "011ec211-3442-405b-9b2b-91e936cef629",
                        "DriverName": "賴秉賢",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568633342000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.31262,
                            "Longitude": 120.324326,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1111,
                        "VehicleNo": "872-QM",
                        "DriverUserId": "81a9454f-fc59-4597-91e5-15edc10aa1eb",
                        "DriverName": "林秋發",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869531000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.0676155,
                            "Longitude": 120.349869,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國8 西 14.9K"
                    }, {
                        "VehicleId": 1116,
                        "VehicleNo": "BS-882",
                        "DriverUserId": "fcf0e32d-0ebf-4aa4-81b6-dd4e7cc050e2",
                        "DriverName": "鍾維陞",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC270_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869556000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.1080189,
                            "Longitude": 120.327232,
                            "GAngle": 288,
                            "Direction": "東"
                        },
                        "LocationAddr": "國3 南 341.9K"
                    }, {
                        "VehicleId": 1132,
                        "VehicleNo": "KEB-6812",
                        "DriverUserId": "18e62211-62f9-4efc-9877-3c7b354273dc",
                        "DriverName": "許宗玄",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570818846000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.56683,
                            "Longitude": 120.327492,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1127,
                        "VehicleNo": "KEB-6891",
                        "DriverUserId": "1ef2b12a-8aa6-4cad-ace0-c5d93132f717",
                        "DriverName": "陳潮葦",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC045_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8652859,
                            "Longitude": 120.316162,
                            "GAngle": 43,
                            "Direction": "西北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1137,
                        "VehicleNo": "KED-9827",
                        "DriverUserId": "6e6ed5ac-a6de-4f0c-a6ff-4413b35b7fe3",
                        "DriverName": "周哲名",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869571000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7157,
                            "Longitude": 120.331306,
                            "GAngle": 15,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 357.7K"
                    }, {
                        "VehicleId": 1435,
                        "VehicleNo": "KEF-6266",
                        "DriverUserId": "14bc7afc-3f22-4900-890f-3fbe49d564ad",
                        "DriverName": "邱永奕",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596484000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.5960026,
                            "Longitude": 120.358231,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1109,
                        "VehicleNo": "KEF-6308",
                        "DriverUserId": "f60efd04-892a-4628-b365-7c2376c70980",
                        "DriverName": "王國珍",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869570000)\/",
                        "LastCoordinate": {
                            "Latitude": 23.2243729,
                            "Longitude": 120.34816,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 49,
                "CompanyName": "維鑫-南",
                "GroupId": 48,
                "GroupName": "維鑫-南",
                "Cars": [{
                        "VehicleId": 1259,
                        "VehicleNo": "572-Y9",
                        "DriverUserId": "13564f1e-21ee-4b4d-9db4-445d7c9154ef",
                        "DriverName": "方冠庭",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596491000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6677189,
                            "Longitude": 120.31691,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1059,
                        "VehicleNo": "586-BF",
                        "DriverUserId": "6bcaf7ac-1296-4891-af6c-56274df8e647",
                        "DriverName": "陳俊瑋",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869565000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.67008,
                            "Longitude": 120.329109,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 363.0K"
                    }, {
                        "VehicleId": 1257,
                        "VehicleNo": "810-Q3",
                        "DriverUserId": "11ef6bac-4962-4317-87e7-a9b234a65be0",
                        "DriverName": "劉秉睿",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570794284000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6097946,
                            "Longitude": 120.530357,
                            "GAngle": 6,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 410.9K"
                    }, {
                        "VehicleId": 1265,
                        "VehicleNo": "KEB-7277",
                        "DriverUserId": "223c8891-2f5b-4f5e-8174-c230db9a9628",
                        "DriverName": "郭如隆",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596498000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7002163,
                            "Longitude": 120.358971,
                            "GAngle": 92,
                            "Direction": "西"
                        },
                        "LocationAddr": "國10 東 6.4K"
                    }, {
                        "VehicleId": 1251,
                        "VehicleNo": "KEB-9237",
                        "DriverUserId": "763d58c9-80fa-4921-b402-401524704ffd",
                        "DriverName": "郭智唯",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC135_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596488000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.6638412,
                            "Longitude": 120.32605,
                            "GAngle": 122,
                            "Direction": "西南"
                        },
                        "LocationAddr": "國1 南 363.4K"
                    }, {
                        "VehicleId": 1438,
                        "VehicleNo": "KEF-8198",
                        "DriverUserId": "ff26d6ce-4d29-4371-8ab4-d4e68d25f04b",
                        "DriverName": "林昱廷",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596507000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7021885,
                            "Longitude": 120.358543,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 376.3K"
                    }, {
                        "VehicleId": 1247,
                        "VehicleNo": "QH-833",
                        "DriverUserId": "9560a360-838a-4b79-95c6-c6abd5191d96",
                        "DriverName": "陳奇宏",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596488000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.5728531,
                            "Longitude": 120.543709,
                            "GAngle": 4,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1268,
                        "VehicleNo": "ZS-801",
                        "DriverUserId": "7eac8005-989d-49bb-ab8a-51b6302d95a0",
                        "DriverName": "吳啟順",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869568000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.8047123,
                            "Longitude": 120.426384,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": "國3 北 380.8K"
                    }, {
                        "VehicleId": 1249,
                        "VehicleNo": "ZS-872",
                        "DriverUserId": "fcebefb3-71bb-425a-b5e7-9114d1336152",
                        "DriverName": "許文智",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570779262000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.55657,
                            "Longitude": 120.5498,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 11,
                "CompanyName": "廣招興-北",
                "GroupId": 10,
                "GroupName": "廣招興-北",
                "Cars": [{
                        "VehicleId": 406,
                        "VehicleNo": "540-SM",
                        "DriverUserId": "492511f6-9d92-4007-a74f-b82ad9b8d8ec",
                        "DriverName": "謝明杰",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596501000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.8547421,
                            "Longitude": 121.220505,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 1350,
                        "VehicleNo": "848-TW",
                        "DriverUserId": "eb85f677-fee4-4ee9-a85f-3302a12c52a2",
                        "DriverName": "錢琦竣",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596486000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.989727,
                            "Longitude": 121.322052,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 399,
                        "VehicleNo": "KED-0595",
                        "DriverUserId": "f0d4d820-c490-44d2-ae89-9272876e3f41",
                        "DriverName": "楊景翔",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570098038000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.9974689,
                            "Longitude": 121.287994,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }, {
                "CompanyId": 53,
                "CompanyName": "龍祥-南",
                "GroupId": 52,
                "GroupName": "龍祥-南",
                "Cars": [{
                        "VehicleId": 1319,
                        "VehicleNo": "BS-676",
                        "DriverUserId": "b2d00d7e-101e-4347-b128-9a0bed5b3d20",
                        "DriverName": "陳金山",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570673300000)\/",
                        "LastCoordinate": {
                            "Latitude": 22.7395439,
                            "Longitude": 120.334831,
                            "GAngle": 355,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 355.0K"
                    }]
            }, {
                "CompanyId": 25,
                "CompanyName": "灥鑫-中",
                "GroupId": 24,
                "GroupName": "灥鑫-中",
                "Cars": [{
                        "VehicleId": 743,
                        "VehicleNo": "163-BF",
                        "DriverUserId": "b0fe3770-f55d-4c5b-98b4-508ade081586",
                        "DriverName": "王健丞",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570867231000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.0639,
                            "Longitude": 120.520821,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 733,
                        "VehicleNo": "AAM-561",
                        "DriverUserId": "cfea0853-1d86-46a5-aa2d-3e47532757a2",
                        "DriverName": "林威呈",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC225_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596492000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.22913,
                            "Longitude": 120.649918,
                            "GAngle": 241,
                            "Direction": "東南"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 728,
                        "VehicleNo": "BS-693",
                        "DriverUserId": "3c09cb58-b852-4a92-9531-61a65d60a445",
                        "DriverName": "謝東模",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "CC090_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570844208000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.20593,
                            "Longitude": 120.657776,
                            "GAngle": 71,
                            "Direction": "西"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 735,
                        "VehicleNo": "BS-738",
                        "DriverUserId": "c2371cc4-5704-4b2a-b852-6cbc2f74eba5",
                        "DriverName": "邱盛賢",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "CC000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869563000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.52251,
                            "Longitude": 120.820915,
                            "GAngle": 344,
                            "Direction": "北"
                        },
                        "LocationAddr": "國1 北 132.8K"
                    }, {
                        "VehicleId": 729,
                        "VehicleNo": "KEA-7603",
                        "DriverUserId": "535a7490-2715-479c-a3b8-7d095ec3fcae",
                        "DriverName": "陳俊明",
                        "cStatus": 9,
                        "OperationalStatus": "排班",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1568596493000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.149662,
                            "Longitude": 120.6239,
                            "GAngle": 18,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }, {
                        "VehicleId": 737,
                        "VehicleNo": "KEC-3816",
                        "DriverUserId": "8d3175b0-3e64-4aa9-91cd-731fb7694385",
                        "DriverName": "蔡家崧",
                        "cStatus": 7,
                        "OperationalStatus": "空車",
                        "StatusColor": 4,
                        "CarIcon": "C000_Green.gif",
                        "TaskId": 0,
                        "UpdateTime": "\/Date(1570869535000)\/",
                        "LastCoordinate": {
                            "Latitude": 24.1362514,
                            "Longitude": 120.5083,
                            "GAngle": 0,
                            "Direction": "北"
                        },
                        "LocationAddr": ""
                    }]
            }]
    }
});


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/all.scss */ "./src/styles/all.scss");
/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_all_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/index */ "./src/store/index.ts");




new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
    store: _store_index__WEBPACK_IMPORTED_MODULE_3__["default"],
    render: (function (h) { return h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]); })
}).$mount('#App');


/***/ }),

/***/ "./src/store/gmap.store.ts":
/*!*********************************!*\
  !*** ./src/store/gmap.store.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/store/index.ts");
/* harmony import */ var vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-module-decorators */ "./node_modules/vuex-module-decorators/dist/esm/index.js");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GMapStore = /** @class */ (function (_super) {
    __extends(GMapStore, _super);
    function GMapStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 87;
        return _this;
    }
    GMapStore.prototype.Add = function () {
        this.context.commit('SETCOUNT', this.count + 1);
    };
    GMapStore.prototype['SETCOUNT'] = function (val) {
        this.count = val;
    };
    __decorate([
        vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__["Action"]
    ], GMapStore.prototype, "Add", null);
    __decorate([
        vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__["Mutation"]
    ], GMapStore.prototype, "SETCOUNT", null);
    GMapStore = __decorate([
        Object(vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__["Module"])({ namespaced: true, dynamic: true, store: _index__WEBPACK_IMPORTED_MODULE_0__["default"], name: 'gmapstore' })
    ], GMapStore);
    return GMapStore;
}(vuex_module_decorators__WEBPACK_IMPORTED_MODULE_1__["VuexModule"]));
/* harmony default export */ __webpack_exports__["default"] = (GMapStore);


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
    state: {},
    actions: {},
    mutations: {},
    modules: {}
}));


/***/ }),

/***/ "./src/styles/all.scss":
/*!*****************************!*\
  !*** ./src/styles/all.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map