import { createRequire as __rspack_createRequire } from "node:module";
const __rspack_createRequire_require = __rspack_createRequire(import.meta.url);

var __webpack_modules__ = {};
// The module cache
var __webpack_module_cache__ = {};
// The require function
function __webpack_require__(moduleId) {
// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;
}
// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// webpack/runtime/esm_register_module
(() => {
__webpack_require__.add = function registerModules(modules) { Object.assign(__webpack_require__.m, modules) }

})();

__webpack_require__.add({
589(module) {
function __rspack_empty_context(req) {
  var e = new Error("Cannot find module '" + req + "'");
  e.code = 'MODULE_NOT_FOUND';
  throw e;
}
__rspack_empty_context.keys = () => ([]);
__rspack_empty_context.resolve = __rspack_empty_context;
__rspack_empty_context.id = 589;
module.exports = __rspack_empty_context;


},
});
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else return left instanceof right;
}
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var overloaded = _instanceof(value, _overload_yield);
            Promise.resolve(overloaded ? value.v : value).then(function(arg) {
                if (overloaded) {
                    var nextKey = key === "return" ? "return" : "next";
                    if (!value.k || arg.done) return resume(nextKey, arg);
                    else arg = gen[nextKey](arg).value;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
_async_generator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
};
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _await_async_generator(value) {
    return new _overload_yield(value, 0);
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, src_is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) throw new TypeError("attempted to read set only private field");
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
function _class_call_check(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof1(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else return left instanceof right;
}
function src_is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (src_is_native_reflect_construct = function _is_native_reflect_construct() {
        return !!result;
    })();
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function src_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else {
        src_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys, key, i;
    if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
    }
    return target;
}
function _overload_yield(value, kind) {
    this.v = value;
    this.k = kind;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) return call;
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function value() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
    };
}
//                                                                                               [STORE]
// #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
var src_EventEmitter = (__rspack_createRequire_require("node:events").EventEmitter);
var src_rv = function rv(v) {
    return typeof v === "function" ? v() : v;
};
var src_sameValue = function sameValue(a, b) {
    return Object.is(a, b) || _instanceof1(a, Date) && _instanceof1(b, Date) && +a === +b;
};
function wait_for_promise_in_rift(gate, timeoutMs) {
    var timer;
    var timeout = new Promise(function(_, reject) {
        timer = setTimeout(function() {
            return reject(new Error("[rift] wait() timed out after ".concat(timeoutMs, "m")));
        }, timeoutMs);
    });
    return Promise.race([
        gate,
        timeout
    ]).finally(function() {
        return clearTimeout(timer);
    });
}
var src_ORC_SHOUT = /*#__PURE__*/ function() {
    "use strict";
    function ORC_SHOUT() {
        _class_call_check(this, ORC_SHOUT);
        _define_property(this, "c", {
            emerald: {
                10: "#002c22",
                9: "#004f3b",
                8: "#016630",
                7: "#007a55",
                6: "#009966",
                5: "#00bc7d"
            },
            blue: {
                10: "",
                9: "",
                8: "",
                7: "",
                6: "",
                5: ""
            }
        });
        _define_property(this, "t", {
            deep: {
                bg: "#020817",
                txt: "#f8fafc",
                size: 12,
                title_size: 14,
                title_txt: "#94a3b8",
                payload_key: "#a4ed2c",
                payload_value: "#f8fafc",
                font: "monospace",
                border: "2px solid #101727",
                borderRadius: "6px",
                padding: "8px 16px",
                svg: ""
            },
            vintage: {
                bg: "#001B29",
                txt: "#e9e1ba",
                size: 12,
                title_size: 14,
                title_txt: "#ada785",
                payload_key: "#29c3a0",
                payload_value: "#fafafa",
                font: "monospace",
                border: "2px solid #112932",
                borderRadius: "6px",
                padding: "8px 16px",
                svg: ""
            },
            error: {
                bg: "#09090B",
                txt: "#e7000b",
                size: 12,
                title_size: 14,
                title_txt: "#9f0712",
                payload_key: "#a4ed2c",
                payload_value: "#f8fafc",
                font: "monospace",
                border: "2px solid #e7000b",
                borderRadius: "6px",
                padding: "8px 16px",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e7000b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>'
            },
            warn: {
                bg: "#09090B",
                txt: "#e17100",
                size: 12,
                title_size: 14,
                title_txt: "#973c00",
                payload_key: "#a4ed2c",
                payload_value: "#f8fafc",
                font: "monospace",
                border: "2px solid #e17100",
                borderRadius: "6px",
                padding: "8px 16px",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e17100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>'
            },
            success: {
                bg: "#09090B",
                txt: "#009966",
                size: 12,
                title_size: 14,
                title_txt: "#016630",
                payload_key: "#a4ed2c",
                payload_value: "#f8fafc",
                font: "monospace",
                border: "2px solid #009966",
                borderRadius: "6px",
                padding: "8px 16px",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>'
            },
            info: {
                bg: "#09090B",
                txt: "#155dfc",
                size: 12,
                title_size: 14,
                title_txt: "#193cb8",
                payload_key: "#a4ed2c",
                payload_value: "#f8fafc",
                font: "monospace",
                border: "2px solid #155dfc",
                borderRadius: "6px",
                padding: "8px 16px",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#155dfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>'
            }
        });
    }
    _create_class(ORC_SHOUT, [
        {
            key: "log",
            value: function log(msg, p) {
                var theme = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.t.deep;
                var _console;
                var isArray = Array.isArray(msg);
                var title = isArray ? msg[0] : msg;
                var paragraphs = isArray ? msg.slice(1) : [];
                var containerStyle = "\n              background: ".concat(theme.bg, ";\n              ").concat(theme.border ? "border: ".concat(theme.border, ";") : "", "\n              ").concat(theme.borderRadius ? "border-radius: ".concat(theme.borderRadius, ";") : "", "\n              ").concat(theme.padding ? "padding: ".concat(theme.padding, ";") : "", "\n              font-family: ").concat(theme.font, ";\n              display: block;\n              margin: 4px 0;\n          ");
                var titleWithIcon = (theme === null || theme === void 0 ? void 0 : theme.svg) ? "".concat(theme === null || theme === void 0 ? void 0 : theme.svg, " ").concat(title) : title;
                var titleStyle = "\n              color: ".concat(theme.title_txt, ";\n              font-size: ").concat(theme.title_size, "px;\n              font-weight: bold;\n              font-family: ").concat(theme.font, ";\n              display: flex;\n              align-items: center;\n              gap: 8px;\n          ");
                var paragraphStyle = "\n              color: ".concat(theme.txt, ";\n              font-size: ").concat(theme.size, "px;\n              font-family: ").concat(theme.font, ";\n              margin-top: 4px;\n          ");
                var keyStyle = "\n              color: ".concat(theme.payload_key, ";\n              font-weight: bold;\n              font-family: ").concat(theme.font, ";\n          ");
                var valueStyle = "\n              color: ".concat(theme.payload_value, ";\n              font-family: ").concat(theme.font, ";\n          ");
                var payloadStr = "";
                if (p && (typeof p === "undefined" ? "undefined" : _type_of(p)) === "object") {
                    var entries = Object.entries(p);
                    payloadStr = entries.map(function(param) {
                        var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                        return "%c".concat(key, ": %c").concat(JSON.stringify(value, null, 2));
                    }).join("\n");
                }
                var logParts = [
                    "%c".concat(titleWithIcon)
                ].concat(_to_consumable_array(paragraphs.map(function(p) {
                    return "%c".concat(p);
                })), [
                    payloadStr ? "\n".concat(payloadStr) : ""
                ]).filter(Boolean).join("\n");
                var styles = [
                    containerStyle + titleStyle
                ].concat(_to_consumable_array(paragraphs.map(function() {
                    return paragraphStyle;
                })), _to_consumable_array(payloadStr ? [
                    keyStyle,
                    valueStyle
                ] : []));
                (_console = console).log.apply(_console, [
                    logParts
                ].concat(_to_consumable_array(styles)));
            }
        }
    ]);
    return ORC_SHOUT;
}();
var src_Rift = /*#__PURE__*/ function() {
    "use strict";
    function Rift() {
        _class_call_check(this, Rift);
        _define_property(this, "opened", false);
        _define_property(this, "claimed", false);
        _define_property(this, "value", void 0);
        _define_property(this, "resolveFn", void 0);
        _define_property(this, "gate", void 0);
        _define_property(this, "listeners", []);
        _define_property(this, "createdAt", Date.now());
        _define_property(this, "openedAt", void 0);
        this.makeGate();
    }
    _create_class(Rift, [
        {
            key: "makeGate",
            value: function makeGate() {
                var _this = this;
                this.gate = new Promise(function(resolve) {
                    _this.resolveFn = resolve;
                });
            } // CHANGED: default is now "wait forever". Explicit timeout = opt-in rejection.           
        },
        {
            key: "wait",
            value: function wait() {
                var timeoutMs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                if (!timeoutMs) return this.gate;
                else {
                    return wait_for_promise_in_rift(this.gate, timeoutMs);
                }
            }
        },
        {
            key: "open",
            value: function open(value) {
                if (this.opened) return;
                this.opened = true;
                this.openedAt = Date.now();
                this.value = value;
                this.resolveFn(value);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var l = _step.value;
                        l(value);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.opened = false;
                this.claimed = false;
                this.value = undefined;
                this.openedAt = undefined;
                this.makeGate();
            }
        },
        {
            key: "claim",
            value: function claim() {
                if (this.claimed) return false;
                this.claimed = true;
                return true;
            }
        },
        {
            key: "onOpen",
            value: function onOpen(listener) {
                var _this = this;
                this.listeners.push(listener);
                return function() {
                    var i = _this.listeners.indexOf(listener);
                    if (i !== -1) _this.listeners.splice(i, 1);
                };
            }
        },
        {
            key: "isOpen",
            get: function get() {
                return this.opened;
            }
        },
        {
            key: "isClaimed",
            get: function get() {
                return this.claimed;
            }
        },
        {
            key: "current",
            get: function get() {
                return this.value;
            }
        }
    ]);
    return Rift;
}();
var // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
_waiters = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _subs = /*#__PURE__*/ new WeakMap(), _any_subs = /*#__PURE__*/ new WeakMap(), _frozen = /*#__PURE__*/ new WeakMap(), _context = /*#__PURE__*/ new WeakMap(), _meta_context = /*#__PURE__*/ new WeakMap(), _global_notify_context = /*#__PURE__*/ new WeakMap(), _notify_context = /*#__PURE__*/ new WeakMap(), _counter = /*#__PURE__*/ new WeakMap(), _epoch = /*#__PURE__*/ new WeakMap(), _asIterator = /*#__PURE__*/ new WeakSet(), _notify = /*#__PURE__*/ new WeakSet(), //                                                                                                [SLAB]
// #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
_rifts = /*#__PURE__*/ new WeakMap(), _deferTasks = /*#__PURE__*/ new WeakMap(), _multiWaiters = /*#__PURE__*/ new WeakMap();
var src_Registry = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(Registry, EventEmitter);
    function Registry() {
        _class_call_check(this, Registry);
        var _this;
        var _this1;
        _this = _call_super(this, Registry), _this1 = _this, _class_private_method_init(_this, _asIterator), _class_private_method_init(_this, _notify), _class_private_field_init(_this, _waiters, {
            writable: true,
            value: new M2()
        }) // { key, predicate, resolve, reject, timer }
        , _class_private_field_init(_this, _data, {
            writable: true,
            value: new M2()
        }), _class_private_field_init(_this, _subs, {
            writable: true,
            value: new M2()
        }) // key -> Set<fn>   (key-specific)
        , _class_private_field_init(_this, _any_subs, {
            writable: true,
            value: new SET2()
        }) // global watchers
        , _class_private_field_init(_this, _frozen, {
            writable: true,
            value: false
        }), _class_private_field_init(_this, _context, {
            writable: true,
            value: new M2()
        }), _class_private_field_init(_this, _meta_context, {
            writable: true,
            value: new M2()
        }), _class_private_field_init(_this, _global_notify_context, {
            writable: true,
            value: new WeakMap()
        }), _class_private_field_init(_this, _notify_context, {
            writable: true,
            value: new WeakMap()
        }), _class_private_field_init(_this, _counter, {
            writable: true,
            value: void 0
        }), _class_private_field_init(_this, _epoch, {
            writable: true,
            value: 0
        }), _define_property(_this, "r", "_root_"), _define_property(_this, "m", "_master_"), _define_property(_this, "s", "_slave_"), _define_property(_this, "DEVTOOLS_ACTIVE", false), //                                                                                               [STATE]
        // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
        _define_property(_this, "state", {
            getMap: function getMap() {
                var slave = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _this.s, master = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _this.m, rk = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _this.r;
                var root = _class_private_field_get(_this, _context).get(rk); // (globalThis as any)[rk]  //  ; (globalThis as any)[rk] = root;
                if (!root) {
                    root = new M2();
                    _class_private_field_get(_this, _context).set(rk, root);
                }
                var masterMap = root.get(master);
                if (!masterMap) {
                    masterMap = new M2();
                    root.set(master, masterMap);
                }
                var slaveMap = masterMap.get(slave);
                if (!slaveMap) {
                    slaveMap = new M2();
                    masterMap.set(slave, slaveMap);
                }
                return slaveMap;
            },
            getMetadata: function getMetadata() {
                var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _this.s, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _this.m, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _this.r;
                var root = _class_private_field_get(_this, _meta_context).get(r); //  (globalThis as A)[r]; // STATE_CONTEXT === "sauron" ?  : null;
                if (!root) {
                    root = new M2();
                    _class_private_field_get(_this, _meta_context).set(r, root);
                }
                var masterMap = root.get(m);
                if (!masterMap) {
                    masterMap = new M2();
                    root.set(m, masterMap);
                }
                var metaMap = masterMap.get(s);
                if (!metaMap) {
                    metaMap = {
                        _batches: new Set(),
                        _batchQueue: new Map(),
                        _batchOpts: new Map(),
                        _history: new Map(),
                        _timeTravel: new Map(),
                        _globalListeners: new Set(),
                        _global_subscribers: new Map(),
                        _waiters: new Map(),
                        _sys: new Map(),
                        _sealed: new Set(),
                        _frozen: new Set(),
                        _keyContracts: new Map(),
                        _conflicts: new Map(),
                        _conflictStrategies: new Map(),
                        _causal: new Map(),
                        _scopes: new Map(),
                        _msgHandlers: new Map(),
                        _lastWriteSource: new Map(),
                        _mainMap: new Map(),
                        _tupleCache: new Map(),
                        _weakMap: new WeakMap(),
                        _boundaries: new WeakMap()
                    };
                    masterMap.set(s, metaMap);
                }
                return metaMap;
            },
            get: function get(key) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _state = _this.state.getMap(sl_reg, ms_reg, globalKey);
                var _persistent = _this.state.getMap("".concat(sl_reg, "_PERSISTENT"), ms_reg, globalKey);
                var _persistKeys = _this.state.getMap("".concat(sl_reg, "_PERSIST_KEYS"), ms_reg, globalKey);
                // recordDependency(key)
                if (_state.has(key)) return MaybePromise(_state.get(key));
                if (_persistKeys.has(key) && _persistent.has(key)) {
                    var v = _persistent.get(key);
                    _state.set(key, v);
                    return MaybePromise(v);
                }
                return undefined;
            },
            set: function set(key, value) {
                var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r,
                    triggerRender: true,
                    cap: 200
                };
                var _opts_triggerRender = opts.triggerRender, triggerRender = _opts_triggerRender === void 0 ? true : _opts_triggerRender, sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey, cap = opts.cap;
                var _state = _this.state.getMap(sl_reg, ms_reg, globalKey);
                var _persistent = _this.state.getMap("".concat(sl_reg, "_PERSISTENT"), ms_reg, globalKey);
                var _persistKeys = _this.state.getMap("".concat(sl_reg, "_PERSIST_KEYS"), ms_reg, globalKey);
                var _listeners = _this.state.getMap("".concat(sl_reg, "_LISTENERS"), ms_reg, globalKey);
                var prev = _state.get(key);
                var next = typeof value === "function" ? value(prev) : value;
                if (Object.is(prev, next)) return;
                // TIME TRAVEL
                if (!_this.root.TIME_TRAVEL._time_travel_reverting) {
                    var _hist_findLastIndex, _ref;
                    var _hist_;
                    var meta = _this.state.getMetadata(sl_reg, ms_reg, globalKey);
                    var hist = meta._history.get(key);
                    if (!hist) {
                        hist = [];
                        meta._history.set(key, hist);
                    }
                    var lastActive = (_hist_findLastIndex = hist.findLastIndex(function(e) {
                        return !e.undone;
                    })) !== null && _hist_findLastIndex !== void 0 ? _hist_findLastIndex : -1;
                    if (lastActive < hist.length - 1) hist.length = lastActive + 1; // truncate redo tail
                    hist.push({
                        k: ((_ref = (_hist_ = hist[hist.length - 1]) === null || _hist_ === void 0 ? void 0 : _hist_.k) !== null && _ref !== void 0 ? _ref : 0) + 1,
                        prev: prev,
                        next: next,
                        ts: Date.now(),
                        undone: false
                    });
                    var cap_val = cap !== null && cap !== void 0 ? cap : 200;
                    while(hist.length > cap_val)hist.shift();
                }
                _state.set(key, next);
                if (_persistKeys.has(key)) _persistent.set(key, next);
                if (triggerRender) _this.state.scheduleGlobalNotify(key, _this.state.getMetadata(sl_reg, ms_reg, globalKey), opts);
                if (triggerRender) _this.state.scheduleNotify(key, _listeners, _state);
                return MaybePromise(next);
            },
            subscribe: function subscribe(key, listener) {
                var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _listeners = _this.state.getMap("".concat(sl_reg, "_LISTENERS"), ms_reg, globalKey);
                if (!_listeners.has(key)) _listeners.set(key, new Set());
                _listeners.get(key).add(listener);
                return function() {
                    var _listeners_get, _listeners_get1;
                    (_listeners_get = _listeners.get(key)) === null || _listeners_get === void 0 ? void 0 : _listeners_get.delete(listener);
                    if (((_listeners_get1 = _listeners.get(key)) === null || _listeners_get1 === void 0 ? void 0 : _listeners_get1.size) === 0) _listeners.delete(key);
                };
            },
            delete: function _delete(key) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var _listeners_get;
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _state = _this.state.getMap(sl_reg, ms_reg, globalKey);
                var _persistent = _this.state.getMap("".concat(sl_reg, "_PERSISTENT"), ms_reg, globalKey);
                var _persistKeys = _this.state.getMap("".concat(sl_reg, "_PERSIST_KEYS"), ms_reg, globalKey);
                var _listeners = _this.state.getMap("".concat(sl_reg, "_LISTENERS"), ms_reg, globalKey);
                var existed = _state.delete(key);
                if (_persistKeys.has(key)) {
                    _persistKeys.delete(key);
                    _persistent.delete(key);
                }
                (_listeners_get = _listeners.get(key)) === null || _listeners_get === void 0 ? void 0 : _listeners_get.forEach(function(l) {
                    return l(undefined);
                });
                _listeners.delete(key);
                return MaybePromise(existed);
            },
            entries: function entries() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _state = _this.state.getMap(sl_reg, ms_reg, globalKey);
                return MaybePromise(Array.from(_state.entries()));
            },
            persist: function persist(key) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _persistKeys = _this.state.getMap("".concat(sl_reg, "_PERSIST_KEYS"), ms_reg, globalKey);
                _persistKeys.set(key, true);
            },
            unpersist: function unpersist(key) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _persistent = _this.state.getMap("".concat(sl_reg, "_PERSISTENT"), ms_reg, globalKey);
                var _persistKeys = _this.state.getMap("".concat(sl_reg, "_PERSIST_KEYS"), ms_reg, globalKey);
                _persistKeys.delete(key);
                _persistent.delete(key);
            },
            has: function has(key) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _state = _this.state.getMap(sl_reg, ms_reg, globalKey);
                var _persistent = _this.state.getMap("".concat(sl_reg, "_PERSISTENT"), ms_reg, globalKey);
                var _persistKeys = _this.state.getMap("".concat(sl_reg, "_PERSIST_KEYS"), ms_reg, globalKey);
                return _state.has(key) || _persistKeys.has(key) && _persistent.has(key);
            },
            clear: function clear() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _state = _this.state.getMap(sl_reg, ms_reg, globalKey);
                var _listeners = _this.state.getMap("".concat(sl_reg, "_LISTENERS"), ms_reg, globalKey);
                _state.clear();
                _listeners.clear();
            },
            clearPersistent: function clearPersistent() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    sl_reg: _this.s,
                    ms_reg: _this.m,
                    globalKey: _this.r
                };
                var sl_reg = opts.sl_reg, ms_reg = opts.ms_reg, globalKey = opts.globalKey;
                var _persistent = _this.state.getMap("".concat(sl_reg, "_PERSISTENT"), ms_reg, globalKey);
                var _persistKeys = _this.state.getMap("".concat(sl_reg, "_PERSIST_KEYS"), ms_reg, globalKey);
                _persistent.clear();
                _persistKeys.clear();
            },
            _emit: function _emit(key) {
                var sl_reg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _this.s, ms_reg = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _this.m, globalKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _this.r;
                var opts = {
                    sl_reg: sl_reg,
                    ms_reg: ms_reg,
                    globalKey: globalKey
                };
                var _state = _this.state.getMap(sl_reg, ms_reg, globalKey);
                var _listeners = _this.state.getMap("".concat(sl_reg, "_LISTENERS"), ms_reg, globalKey);
                var meta = _this.state.getMetadata(sl_reg, ms_reg, globalKey);
                _this.state.scheduleNotify(key, _listeners, _state);
                _this.state.scheduleGlobalNotify(key, meta, opts);
            },
            scheduleNotify: function scheduleNotify(key, _listeners, _state) {
                var cache = _class_private_field_get(_this, _notify_context).get(_listeners);
                if (!cache) {
                    cache = new Map();
                    _class_private_field_get(_this, _notify_context).set(_listeners, cache);
                }
                var fn = cache.get(key);
                if (!fn) {
                    fn = function fn() {
                        var _listeners_get;
                        cache.delete(key);
                        var val = _state.get(key);
                        (_listeners_get = _listeners.get(key)) === null || _listeners_get === void 0 ? void 0 : _listeners_get.forEach(function(l) {
                            return l(val);
                        });
                    };
                    cache.set(key, fn);
                }
                _this.onFlush(fn);
            },
            scheduleGlobalNotify: function scheduleGlobalNotify(key, meta, opts) {
                var cache = _class_private_field_get(_this, _global_notify_context).get(meta);
                if (!cache) {
                    cache = new Map();
                    _class_private_field_get(_this, _global_notify_context).set(meta, cache);
                }
                var fn = cache.get(key);
                if (!fn) {
                    fn = function fn() {
                        cache.delete(key);
                        var finalVal = _this.state.get(key, opts);
                        var waiters = meta._waiters.get(key);
                        if (waiters) {
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = waiters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var resolveFn = _step.value;
                                    try {
                                        resolveFn(finalVal);
                                    } catch (err) {
                                        console.error("[Sauron Waiter Error]:", err);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            meta._waiters.delete(key);
                        }
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = meta._globalListeners[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var listener = _step1.value;
                                try {
                                    listener(key, finalVal);
                                } catch (err) {
                                    console.error("[Sauron Global Listener Error]:", err);
                                }
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    };
                    cache.set(key, fn);
                }
                _this.onFlush(fn);
            }
        }), _class_private_field_init(_this, _rifts, {
            writable: true,
            value: new M2()
        }), _class_private_field_init(_this, _deferTasks, {
            writable: true,
            value: new M2()
        }), _class_private_field_init(_this, _multiWaiters, {
            writable: true,
            value: new SET2()
        }), _define_property(_this, "nextWaiterId", 0), // Deferred tasks (not results — the results ARE the registry entries above).
        _define_property(_this, "nextDeferId", 0), _define_property(_this, "draining", false), _define_property(_this, "drainAgain", false), _define_property(_this, "deferStats", {
            registered: 0,
            executed: 0,
            completed: 0,
            failed: 0,
            cancelled: 0
        }), _define_property(_this, "autoCloud", undefined), _define_property(_this, "warnedUseBeforeReady", false), _define_property(_this, "ENV_STATE", {
            moduleLevel: null,
            platform: null,
            compilers: [],
            bundler: null,
            adapters: [],
            ready: false
        }), _define_property(_this, "shout", new src_ORC_SHOUT()), _define_property(_this, "maelstrom", function() {
            var fn = function fn() {};
            fn.log = function(where) {
                var detail = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, type = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "info";
                var _this_shout_t_type;
                var payload = _object_spread({}, detail);
                if (_instanceof1(payload.error, Error)) payload.error = payload.error.message;
                _this.shout.log("[MAELSTROM][".concat(where, "]"), payload, (_this_shout_t_type = _this.shout.t[type]) !== null && _this_shout_t_type !== void 0 ? _this_shout_t_type : _this.shout.t.deep);
            }; /** resolve a specifier relative to THIS file, always. Absolute out. */ 
            fn.key_for = function(specifier) {
                try {
                    return ({}).resolve(specifier);
                } catch (unused) {
                    try {
                        return __webpack_require__(589)(specifier).href;
                    } catch (unused) {
                        return specifier;
                    }
                }
            };
            fn.normalizeFallback = function(fallback, fallbackDefault) {
                if (typeof fallback === "function") return fallback;
                if (fallback !== undefined) return function() {
                    return fallback;
                };
                return fallbackDefault;
            }; /** the safe proxy — missing module access is suppressed, never crashed */ 
            fn.createSafeProxy = function() {
                return new Proxy(function noop() {}, {
                    get: function get(_, prop) {
                        if (prop === Symbol.toPrimitive) {
                            _this.maelstrom.log("SAFE_PROXY", {
                                note: "Missing module. Suppressed access to: ".concat(String(prop))
                            }, "warn");
                            return function() {
                                return "";
                            };
                        }
                        if (prop === "valueOf" || prop === "toString") {
                            _this.maelstrom.log("SAFE_PROXY", {
                                note: "Missing module. Suppressed access to: ".concat(String(prop))
                            }, "warn");
                            return function() {
                                return "[MAELSTROM:missing-module]";
                            };
                        }
                        if (prop === "then" || prop === Symbol.iterator) return undefined;
                        var noop = function noop() {};
                        return new Proxy(noop, {
                            get: function get() {
                                return noop;
                            },
                            apply: function apply() {
                                return _this.maelstrom.createSafeProxy();
                            },
                            construct: function construct() {
                                return _this.maelstrom.createSafeProxy();
                            }
                        });
                    },
                    apply: function apply() {
                        return _this.maelstrom.createSafeProxy();
                    },
                    construct: function construct() {
                        return _this.maelstrom.createSafeProxy();
                    }
                });
            };
            fn.toNamespace = function(m) {
                if (m && (typeof m === "undefined" ? "undefined" : _type_of(m)) === "object") return m;
                return {
                    default: m
                };
            };
            fn.blind = function() {
                var fn = function fn() {};
                /** dynamic import with no static dependency — works in every module system */ fn.import = new Function("specifier", "return import(specifier)");
                /** require with no static dependency — null where require does not exist (browser/ESM) */ fn.require =  true ? new Function("specifier", "return require(specifier)") : 0;
                return fn;
            }();
            fn.has = function() {
                var _process_versions, _process, _process_versions1, _process1;
                var fn = function fn() {};
                var blindReq =  true ? new Function("specifier", "return require(specifier)") : 0;
                fn.bun = typeof process !== "undefined" && !!((_process = process) === null || _process === void 0 ? void 0 : (_process_versions = _process.versions) === null || _process_versions === void 0 ? void 0 : _process_versions.bun);
                fn.node = typeof process !== "undefined" && !!((_process1 = process) === null || _process1 === void 0 ? void 0 : (_process_versions1 = _process1.versions) === null || _process_versions1 === void 0 ? void 0 : _process_versions1.node);
                /** does a local file exist, resolved from cwd — the has_local probe */ fn.local = function(filePath, module) {
                    try {
                        if (!_this.maelstrom.has.node && !_this.maelstrom.has.bun) return false;
                        if (!filePath) {
                            _this.maelstrom.log("HAS_LOCAL", {
                                note: "FILE PATH UNDEFINED — DEFINE A PATH",
                                module: module,
                                type: "SYNC"
                            }, "error");
                            return false;
                        }
                        var path = _this.maelstrom.blind.require("path");
                        var fs = _this.maelstrom.blind.require("fs");
                        var resolved = path.resolve(process.cwd(), filePath);
                        return fs.existsSync(resolved);
                    } catch (e) {
                        _this.maelstrom.log("HAS_LOCAL", {
                            module: module,
                            type: "SYNC",
                            error: e
                        }, "error");
                        return false;
                    }
                };
                fn.require = blindReq !== null;
                return fn;
            }();
            fn.is = function() {
                var blindReq =  true ? new Function("specifier", "return require(specifier)") : 0;
                var fn = function fn() {};
                fn.require_available = function() {
                    return blindReq !== null;
                };
                fn.browser = typeof window !== "undefined";
                fn.VSCode = typeof process !== "undefined" && process.env.VSCODE_PID;
                fn.electron = false;
                fn.unix = false;
                fn.windows = true;
                return fn;
            }();
            // ═══════════════════════════════════════════════════════════════════════════════════════════
            // THE SHARED RESULTS SURFACE — a view onto the ONE registry, not a second map
            // ═══════════════════════════════════════════════════════════════════════════════════════════
            /**
        * Record an outcome. This is the single funnel: it tags the registry entry, notifies the
        * entry's subscribers, advances every waiter on the label, and releases deferred tasks.
        * It writes to the ONE registry — it creates no maps.
        */ fn.record = function(label, solver, value) {
                var store = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "local";
                var _rift_openedAt;
                var rift = _this.maelstrom.rift(label);
                rift.solver = solver;
                rift.store = store;
                rift.version++;
                var rec = {
                    label: label,
                    solver: solver,
                    store: store,
                    value: value,
                    ok: value !== undefined && value !== null,
                    openedAt: (_rift_openedAt = rift.openedAt) !== null && _rift_openedAt !== void 0 ? _rift_openedAt : Date.now()
                };
                rift.open(value); // the entry itself notifies its own subscribers
                _this.maelstrom.rift("__results__").reset(); // sentinel re-fires per record (open is idempotent)
                _this.maelstrom.rift("__results__").open(rec); // machine-level watchers ride the same mechanism
                _this.maelstrom.waiter.releaseMulti(label, value);
                _this.maelstrom.defer.drain();
            };
            fn.rift = function() {
                /**
            * get_module: require the specifier → local file read → builtin check → cwd-resolved
            * require → async import as the last resort. Every sync path is tried before anything
            * returns a promise.
            */ var fn = function fn(name) {
                    if (!_class_private_field_get(_this, _rifts).has(name)) _class_private_field_get(_this, _rifts).set(name, _this.maelstrom.rift.make());
                    return _class_private_field_get(_this, _rifts).get(name);
                };
                fn.clear = function() {
                    _class_private_field_get(_this, _rifts).clear();
                };
                fn.inspect = function() {
                    return _to_consumable_array(_class_private_field_get(_this, _rifts).entries()).map(function(param) {
                        var _param = _sliced_to_array(param, 2), name = _param[0], rift = _param[1];
                        return {
                            name: name,
                            isOpen: rift.isOpen,
                            isClaimed: rift.isClaimed,
                            createdAt: rift.createdAt,
                            openedAt: rift.openedAt
                        };
                    });
                };
                /** guard — wait for a rift, then run a fn on its unlock value */ fn.guard = function(name, fn, timeoutMs) {
                    MaybePromise(_this.maelstrom.rift.guard_promise_gate(_this.get, name, fn, timeoutMs));
                };
                /** async load with inflight dedupe — same key always resolves to the same promise */ fn.load = function(specifier) {
                    var key = _this.maelstrom.key_for(specifier);
                    var rift = _this.maelstrom.rift("mod:".concat(key));
                    if (rift.isOpen) return Promise.resolve(rift.current);
                    if (rift.inflight) return rift.inflight;
                    var p = _this.maelstrom.blind.import(key).then(function(mod) {
                        rift.open(mod);
                        _this.maelstrom.module.indexExports(rift, key, mod);
                        rift.inflight = undefined;
                        _this.maelstrom.record("mod:".concat(key), "load_module", mod);
                        return mod;
                    }).catch(function(err) {
                        rift.inflight = undefined; // let it retry later
                        throw err;
                    });
                    rift.inflight = p;
                    return p;
                };
                fn.result = function(label) {
                    var _rift_store, _rift_openedAt;
                    var rift = _class_private_field_get(_this, _rifts).get(label);
                    if (!rift || rift.solver === undefined) return undefined;
                    return {
                        label: label,
                        solver: rift.solver,
                        store: (_rift_store = rift.store) !== null && _rift_store !== void 0 ? _rift_store : "local",
                        value: rift.current,
                        ok: rift.current !== undefined && rift.current !== null,
                        openedAt: (_rift_openedAt = rift.openedAt) !== null && _rift_openedAt !== void 0 ? _rift_openedAt : rift.createdAt
                    };
                };
                fn.resultsFrom = function(solver) {
                    return _this.results.filter(function(r) {
                        return r.solver === solver;
                    });
                }; /** "any result, any solver" — rides the ONE mechanism: the sentinel entry's own subscription */ 
                fn.onResult = function(listener) {
                    return _this.maelstrom.rift("__results__").onOpen(function() {
                        return listener(_this.maelstrom.rift.result("__results__"));
                    });
                };
                fn.place = function(label, value) {
                    var store = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "local";
                    _this.maelstrom.rift(label).open(value);
                    _this.maelstrom.record(label, "place", value, store);
                };
                fn.get_value = function(label) {
                    return _this.maelstrom.rift.read(label);
                };
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // SOLVER · get / place — the plain registry read and write
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.read = function(label) {
                    var store = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "local";
                    var rift = _this.maelstrom.rift(label);
                    var v = rift.current;
                    _this.maelstrom.record(label, "get", v, store);
                    return v;
                };
                fn.clear = function() {
                    _class_private_field_get(_this, _rifts).clear();
                };
                fn.reset = function(name) {
                    var _class_private_field_get_get;
                    (_class_private_field_get_get = _class_private_field_get(_this, _rifts).get(name)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.reset();
                };
                fn.delete = function(name) {
                    return _class_private_field_get(_this, _rifts).delete(name);
                };
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // the bandit. Never throws, always returns a usable envelope.
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.bandit = function(label, module, wait) {
                    var store = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "local";
                    var v;
                    try {
                        v = _this.maelstrom.rift(label);
                        if (v.isOpen) {
                            // check rift registry, return current
                            try {
                                return MaybePromise({
                                    is_waiting: false,
                                    isLoaded: true,
                                    get: v.current
                                });
                            } catch (e) {
                                _this.maelstrom.log("SMASH_N_GRAB", {
                                    msg: "[CHECK RIFT REG, RETURN CURRENT][FAILED][MOVING ON...]",
                                    error: e
                                }, "error");
                            }
                        }
                        if (!module && wait) {
                            // no module but a wait → wait for it
                            try {
                                _this.maelstrom.log("SMASH_N_GRAB", {
                                    msg: "[NO MODULE BUT WAIT SUPPLIED — WAITING]"
                                }, "info");
                                var raw = v.wait(wait);
                                var envelope = function envelope(w) {
                                    return MaybePromise({
                                        is_waiting: !w,
                                        isLoaded: module ? _this.maelstrom.rift.has(module) : false,
                                        mod: w
                                    });
                                };
                                if (_instanceof1(raw, Promise)) {
                                    // a rejected wait is a miss, not a crash
                                    return MaybePromise(raw.then(function(w) {
                                        return envelope(w);
                                    }, function(e) {
                                        _this.maelstrom.log("SMASH_N_GRAB", {
                                            msg: "[WAIT TIMED OUT — RETURNING MISS]",
                                            error: e
                                        }, "warn");
                                        return envelope(undefined);
                                    }));
                                }
                                return envelope(raw);
                            } catch (e) {
                                _this.maelstrom.log("SMASH_N_GRAB", {
                                    msg: "[WAIT PATH FAILED][MOVING ON...]",
                                    error: e
                                }, "error");
                            }
                        }
                        if (label && module && !wait) {
                            // label + module, no wait → open
                            try {
                                return MaybePromise({
                                    is_waiting: false,
                                    isLoaded: true,
                                    mod: v.open(module)
                                });
                            } catch (e) {
                                // all else fails — nuke it
                                var value = _this.maelstrom.module(module);
                                _this.maelstrom.log("SMASH_N_GRAB", {
                                    msg: "try failed, attempting catch gate now...",
                                    error: e
                                }, "error");
                                v.open(value);
                                _this.maelstrom.record(label, "smash_n_grab", value, store);
                                return MaybePromise({
                                    is_waiting: false,
                                    isLoaded: true,
                                    mod: value
                                });
                            }
                        }
                    } catch (e) {
                        _this.maelstrom.log("SMASH_N_GRAB", {
                            error: e
                        }, "error");
                    }
                    var ap = _this.maelstrom.apparation.func();
                    return MaybePromise({
                        is_waiting: false,
                        isLoaded: false,
                        mod: ap
                    });
                };
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // SOLVER · create_rift — the founder
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.create = function(label, module) {
                    var store = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "local";
                    try {
                        if (module) {
                            _this.maelstrom.rift(label).open(module);
                            _this.maelstrom.record(label, "create_rift", module, store);
                            return MaybePromise(module);
                        }
                    } catch (e) {
                        var value = _this.maelstrom.module(module);
                        if (value && !_instanceof1(value, Promise)) {
                            _this.maelstrom.rift(label).open(value);
                            _this.maelstrom.record(label, "create_rift", value, store);
                            return MaybePromise(value);
                        }
                        _this.maelstrom.log("CREATE_RIFT", {
                            error: e,
                            msg: "try failed, attempting catch gate now..."
                        }, "error");
                    }
                    return undefined;
                };
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // SOLVER · use_rift — the traveler. The full resolution ladder.
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.use = function(label, wait, apparation) {
                    var store = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "local";
                    try {
                        var rift = _this.maelstrom.rift(label);
                        if (rift.isOpen) {
                            _this.maelstrom.record(label, "use_rift", rift.current, store);
                            return MaybePromise(rift.current);
                        }
                        if (rift.isClaimed) {
                            try {
                                return MaybePromise(rift.wait(wait));
                            } catch (e) {
                                _this.maelstrom.log("USE_RIFT", {
                                    msg: "try failed...",
                                    error: e
                                }, "error");
                            }
                        }
                        var value = _this.maelstrom.module(label);
                        if (value && !_instanceof1(value, Promise)) {
                            rift.open(value);
                            _this.maelstrom.record(label, "use_rift", value, store);
                            return MaybePromise(value);
                        }
                        _this.maelstrom.record(label, "use_rift", apparation, store);
                        return apparation;
                    } catch (e) {
                        _this.maelstrom.log("USE_RIFT", {
                            error: e
                        }, "error");
                        return apparation;
                    }
                };
                fn.resolve = function() {
                    // ═══════════════════════════════════════════════════════════════════════════════════════════
                    // SOLVER · resolve_global_rift / resolve_rift_initial — the diplomat and the bootstrap
                    // ═══════════════════════════════════════════════════════════════════════════════════════════
                    var cn = function cn(name, v) {
                        try {
                            return _this.maelstrom.rift.resolve.global(name, 15000, v);
                        } catch (e) {
                            var _ref;
                            _this.maelstrom.log("RESOLVE_RIFT_INITIAL", {
                                error: e
                            }, "error");
                            return (_ref = e === null || e === void 0 ? void 0 : e.error) !== null && _ref !== void 0 ? _ref : v;
                        }
                    };
                    cn.global = function(name) {
                        var wait = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 20000, fallback = arguments.length > 2 ? arguments[2] : void 0;
                        try {
                            var rift = _this.maelstrom.rift(name);
                            if (rift.isOpen) return rift.current;
                            if (rift.isClaimed) {
                                try {
                                    return MaybePromise(rift.wait(wait));
                                } catch (e) {
                                    _this.maelstrom.log("RESOLVE_GLOBAL_RIFT", {
                                        error: e
                                    }, "error");
                                    return fallback;
                                }
                            }
                            return fallback;
                        } catch (e) {
                            _this.maelstrom.log("RESOLVE_GLOBAL_RIFT", {
                                error: e
                            }, "error");
                            return fallback;
                        }
                    };
                    return cn;
                }();
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // SOLVER · has — the scout. Four probes, one boolean.
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.has = function(module) {
                    if (_class_private_field_get(_this, _rifts).has(module)) return true;
                    if (_this.maelstrom.module.isLoaded(module)) return true;
                    if (_this.maelstrom.rift(module).isOpen) return true;
                    try {
                        _this.maelstrom.blind.require(module);
                        return true;
                    } catch (unused) {
                        try {
                            void _this.maelstrom.blind.import(module);
                            return true;
                        } catch (unused) {
                            return false;
                        }
                    }
                };
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // THE REGISTRY — every solver reads and writes through here, and nowhere else
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.make = function() {
                    return new src_Rift();
                }; /** true when a shared store can actually round-trip */ 
                fn.conjure = function() {
                    // ═══════════════════════════════════════════════════════════════════════════════════════════
                    // SOLVER · conjure — the conjurer. The full cached/uncached pair.
                    // ═══════════════════════════════════════════════════════════════════════════════════════════
                    /** cached conjuration — one registry entry per moduleName, claimed once, waited on forever after */ var cn = function cn(options) {
                        var moduleName = options.moduleName, rawFallback = options.fallback, _options_module = options.module, module = _options_module === void 0 ? true : _options_module, _options_cache = options.cache, cache = _options_cache === void 0 ? true : _options_cache, _options_preferRequire = options.preferRequire, preferRequire = _options_preferRequire === void 0 ? false : _options_preferRequire, importPromise = options.importPromise, userEnvImports = _object_without_properties(options, [
                            "moduleName",
                            "fallback",
                            "module",
                            "cache",
                            "preferRequire",
                            "importPromise"
                        ]);
                        var fallback = _this.maelstrom.normalizeFallback(rawFallback, _this.maelstrom.createSafeProxy);
                        if (!moduleName || !cache) {
                            return _this.maelstrom.rift.conjure.uncached(_object_spread({
                                moduleName: moduleName,
                                fallback: fallback(),
                                module: module,
                                preferRequire: preferRequire,
                                importPromise: importPromise
                            }, userEnvImports));
                        }
                        var rift = _this.maelstrom.rift(moduleName);
                        if (rift.isOpen) return rift.wait();
                        if (!rift.claim()) return rift.wait();
                        var result = _this.maelstrom.rift.conjure.uncached(_object_spread({
                            moduleName: moduleName,
                            fallback: fallback,
                            module: module,
                            preferRequire: preferRequire,
                            importPromise: importPromise
                        }, userEnvImports));
                        var settle = function settle(resolved) {
                            rift.open(resolved);
                            _this.maelstrom.record(moduleName, "conjure", resolved);
                            return resolved;
                        };
                        return MaybePromise(_instanceof1(result, Promise) ? result.then(settle) : settle(result));
                    }; /** conjure a rift for a whole module namespace */ 
                    cn.get = function(label) {
                        var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, module = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                        var rift = _this.maelstrom.rift(label);
                        if (rift.isOpen) return rift;
                        var raw = _this.maelstrom.rift.conjure({
                            moduleName: label,
                            module: module,
                            cache: cache
                        });
                        var result = MaybePromise(raw);
                        if (rift.isOpen) {
                            return MaybePromise(rift);
                        } else if (raw) {
                            return MaybePromise(raw);
                        } else {
                            var resolve = function resolve(resolved) {
                                if (resolved === undefined || resolved === null) return resolved;
                                rift.open(resolved);
                                _this.maelstrom.record(label, "conjure", resolved);
                                return resolved === null || resolved === void 0 ? void 0 : resolved[label];
                            };
                            return MaybePromise(_instanceof1(result, Promise) ? result.then(resolve) : resolve(result));
                        }
                    }; /** the agnostic auto importer: if it doesn't exist, it doesn't crash */ 
                    cn.uncached = function(options) {
                        var moduleName = options.moduleName, rawFallback = options.fallback, comp_name = options.comp_name, _options_module = options.module, module = _options_module === void 0 ? true : _options_module, _options_preferRequire = options.preferRequire, preferRequire = _options_preferRequire === void 0 ? false : _options_preferRequire, importPromise = options.importPromise, userEnvImports = _object_without_properties(options, [
                            "moduleName",
                            "fallback",
                            "comp_name",
                            "module",
                            "preferRequire",
                            "importPromise"
                        ]);
                        var fallback = _this.maelstrom.normalizeFallback(rawFallback, _this.maelstrom.createSafeProxy);
                        var forceNode = userEnvImports.force !== undefined;
                        var state = {
                            moduleLevel: null,
                            platform: null,
                            compilers: [],
                            bundler: null,
                            adapters: [],
                            ready: false
                        };
                        var priorityKeys = state ? _to_consumable_array(state.adapters).concat(_to_consumable_array(state.compilers), [
                            state.moduleLevel,
                            state.platform,
                            state.bundler
                        ]) : [];
                        var resolveImportCandidate = function resolveImportCandidate(candidate) {
                            return _async_to_generator(function() {
                                var resolved, _tmp, unused;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!candidate) return [
                                                2,
                                                null
                                            ];
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([
                                                1,
                                                5,
                                                ,
                                                6
                                            ]);
                                            if (!(typeof candidate.then === "function")) return [
                                                3,
                                                3
                                            ];
                                            return [
                                                4,
                                                candidate
                                            ];
                                        case 2:
                                            _tmp = _state.sent();
                                            return [
                                                3,
                                                4
                                            ];
                                        case 3:
                                            _tmp = candidate;
                                            _state.label = 4;
                                        case 4:
                                            resolved = _tmp;
                                            return [
                                                2,
                                                resolved !== null && resolved !== void 0 ? resolved : null
                                            ];
                                        case 5:
                                            unused = _state.sent();
                                            return [
                                                2,
                                                null
                                            ];
                                        case 6:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        };
                        var syncResult = undefined;
                        var needsAsync = false;
                        if (!module || importPromise && !moduleName) {
                            if (importPromise && typeof importPromise.then !== "function") {
                                syncResult = importPromise;
                            } else if (importPromise) {
                                needsAsync = true;
                            } else {
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = Object.values(userEnvImports)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var value = _step.value;
                                        if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && typeof value.then === "function") {
                                            needsAsync = true;
                                            break;
                                        }
                                        if (value !== null && value !== undefined) {
                                            syncResult = value;
                                            break;
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                if (!needsAsync && syncResult === undefined) {
                                    syncResult = fallback();
                                }
                            }
                        } else {
                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(var _iterator1 = priorityKeys[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    var key = _step1.value;
                                    if (key && userEnvImports[key]) {
                                        var v = userEnvImports[key];
                                        if (v && (typeof v === "undefined" ? "undefined" : _type_of(v)) === "object" && typeof v.then === "function") {
                                            needsAsync = true;
                                            break;
                                        }
                                        if (v !== null && v !== undefined) {
                                            syncResult = v;
                                            break;
                                        }
                                    }
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                            if (!needsAsync && syncResult === undefined && userEnvImports.default) {
                                var v1 = userEnvImports.default;
                                if (v1 && (typeof v1 === "undefined" ? "undefined" : _type_of(v1)) === "object" && typeof v1.then === "function") {
                                    needsAsync = true;
                                } else if (v1 !== null && v1 !== undefined) {
                                    syncResult = v1;
                                }
                            }
                            if (!needsAsync && syncResult === undefined && moduleName) {
                                if (forceNode) {
                                    try {
                                        var res = typeof forceNode === "function" ? forceNode() : forceNode;
                                        if (res !== null && res !== undefined) syncResult = res;
                                        else needsAsync = true;
                                    } catch (unused) {
                                        needsAsync = true;
                                    }
                                } else if (comp_name) {
                                    if (_this.maelstrom.blind.require && _this.maelstrom.has.require) {
                                        try {
                                            var res1 = _this.maelstrom.blind.require(moduleName);
                                            if (res1 && res1[comp_name] !== undefined) syncResult = res1[comp_name];
                                            else needsAsync = true;
                                        } catch (unused) {
                                            needsAsync = true;
                                        }
                                    } else {
                                        needsAsync = true;
                                    }
                                } else if (preferRequire && _this.maelstrom.has.require) {
                                    try {
                                        var res2 = _this.maelstrom.blind.require(moduleName);
                                        if (res2 !== null && res2 !== undefined) syncResult = res2;
                                        else needsAsync = true;
                                    } catch (unused) {
                                        needsAsync = true;
                                    }
                                } else if (!preferRequire && _this.maelstrom.blind.require && state && (state.bundler === "bun" || _this.maelstrom.is.electron || typeof process !== "undefined") && _this.maelstrom.has.require) {
                                    try {
                                        var res3 = _this.maelstrom.blind.require(moduleName);
                                        if (res3 !== null && res3 !== undefined) syncResult = res3;
                                        else needsAsync = true;
                                    } catch (unused) {
                                        needsAsync = true;
                                    }
                                } else if (_this.maelstrom.has.require && _this.maelstrom.blind.require) {
                                    try {
                                        var res4 = _this.maelstrom.blind.require(moduleName);
                                        if (res4 !== null && res4 !== undefined) syncResult = res4;
                                        else needsAsync = true;
                                    } catch (unused) {
                                        needsAsync = true;
                                    }
                                } else {
                                    needsAsync = true;
                                }
                            }
                            if (!needsAsync && syncResult === undefined) {
                                syncResult = fallback();
                            }
                        }
                        // AND BAM... All sync work is now complete... NOW let us throw down a logic gate so that we can meet the other req's
                        // We first attempt to return the sync result... just like how it is defined in MaybePromise, followed by the promise functionality...
                        // this is A HARD FUCKING REQUIREMENT... This is because javascript does not trigger async work TILL it ACTUALLY see the promised code, so it DOES NOT TRIGGER... SIMPLY WALKING OVER AWAIT at the start of the function... the same goes for async... BUT not all runtimes play nicely... so to ensure this happen everywhere without any errors whats so ever... we lock it behind a logic gate as well, because when javascript executes the code... it can see and view everything except what is behind that logic gate. Thus... allowing us to hide the async functionality, that when triggered fucks our execution right up and slows everything down...
                        if (syncResult) {
                            return MaybePromise(syncResult);
                        } else {
                            return MaybePromise(function() {
                                var timeoutMs = 10000;
                                return new Promise(function(resolve, reject) {
                                    var timer;
                                    if (!module || importPromise && !moduleName) {
                                        if (importPromise) {
                                            var resolved = importPromise;
                                            if (resolved !== null && resolved !== undefined) {
                                                if (timer) clearTimeout(timer);
                                                resolve(resolved);
                                                return;
                                            }
                                        }
                                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        try {
                                            for(var _iterator = Object.values(userEnvImports)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                var value = _step.value;
                                                if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && typeof value.then === "function") {
                                                    try {
                                                        var result = value;
                                                        if (result !== null && result !== undefined) {
                                                            if (timer) clearTimeout(timer);
                                                            resolve(result);
                                                            return;
                                                        }
                                                    } catch (unused) {
                                                        continue;
                                                    }
                                                }
                                            }
                                        } catch (err) {
                                            _didIteratorError = true;
                                            _iteratorError = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                    _iterator.return();
                                                }
                                            } finally{
                                                if (_didIteratorError) {
                                                    throw _iteratorError;
                                                }
                                            }
                                        }
                                    }
                                    if (moduleName) {
                                        if (moduleName && comp_name) {
                                            var res = _this.maelstrom.blind.import(moduleName);
                                            if (res && res[comp_name] !== undefined) {
                                                resolve(res[comp_name]);
                                                if (timer) clearTimeout(timer);
                                                return;
                                            }
                                        } else {
                                            var res2 = _this.maelstrom.blind.import(moduleName);
                                            if (res2 !== null && res2 !== undefined) {
                                                resolve(res2);
                                                if (timer) clearTimeout(timer);
                                                return;
                                            }
                                        }
                                    }
                                    if (userEnvImports.default) {
                                        var res1 = resolveImportCandidate(userEnvImports.default);
                                        if (res1 !== null) {
                                            resolve(res1);
                                            if (timer) clearTimeout(timer);
                                            return;
                                        }
                                    }
                                    if (timeoutMs) {
                                        timer = setTimeout(function() {
                                            reject(new Error("[rift] wait() timed out after ".concat(timeoutMs, "ms")));
                                        }, timeoutMs);
                                    }
                                });
                            }());
                        }
                    };
                    return cn;
                }(); /**
            * The named-export form of use(). `label` is the rift key — one probe per name, ever.
            * `filePath` resolves relative to this file (the "locally sourced" anchor).
            * Cold: sync fallback. Hot: the real named export, as a plain property read.
            */ 
                fn.use_if_available = function(label, filePath, comp_name, fallback, opts) {
                    var rift = _this.maelstrom.rift(label);
                    if (rift.isOpen) return rift.current; // hot path — done, sync
                    if (rift.claim()) {
                        // one-time fire-and-forget probe
                        void function() {
                            return _async_to_generator(function() {
                                var _ref, mod, named, unused, _ref1;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _state.trys.push([
                                                0,
                                                2,
                                                ,
                                                3
                                            ]);
                                            return [
                                                4,
                                                _this1.maelstrom.blind.import(_this1.maelstrom.key_for(filePath))
                                            ];
                                        case 1:
                                            mod = _state.sent();
                                            named = (mod === null || mod === void 0 ? void 0 : mod[comp_name]) !== undefined ? mod[comp_name] : fallback;
                                            rift.open(named);
                                            _this1.maelstrom.record(label, "use_if_available", named, (_ref = opts === null || opts === void 0 ? void 0 : opts.store) !== null && _ref !== void 0 ? _ref : "local");
                                            return [
                                                3,
                                                3
                                            ];
                                        case 2:
                                            unused = _state.sent();
                                            rift.open(fallback);
                                            _this1.maelstrom.record(label, "use_if_available", fallback, (_ref1 = opts === null || opts === void 0 ? void 0 : opts.store) !== null && _ref1 !== void 0 ? _ref1 : "local");
                                            return [
                                                3,
                                                3
                                            ];
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                        }();
                    }
                    return fallback; // cold path — instant
                };
                // SOLVER · probe + use_if_available — the locally sourced named import
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                //
                // Cold path: returns `fallback` synchronously. ZERO await. ZERO promise.
                // One probe per label, ever — every later call is a bare property read.
                // The background import resolves the rift; every subsequent call sees the real value.
                fn.probe = function(label, filePath, comp_name, fallback) {
                    return _this.maelstrom.rift.use_if_available(label, filePath, comp_name, fallback);
                };
                fn.guard_promise_gate = function(get, name, fn, timeoutMs) {
                    return function() {
                        return _async_to_generator(function() {
                            var val;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            _this1.maelstrom.rift(name).wait(timeoutMs)
                                        ];
                                    case 1:
                                        val = _state.sent();
                                        return [
                                            2,
                                            fn(val)
                                        ];
                                }
                            });
                        })();
                    };
                };
                return fn;
            }();
            // ═══════════════════════════════════════════════════════════════════════════════════════════
            // SOLVER · load_module / require_module / export_of — the porters and the index clerk
            // ═══════════════════════════════════════════════════════════════════════════════════════════
            //
            // The module cache IS the registry: loaded modules live under `mod:` labels, sync-required
            // ones under `req:` labels, with the export index stored ON the entry itself. Inflight
            // dedupe lives on the entry too. No separate maps.
            fn.module = function() {
                /**
            * get_module: require the specifier → local file read → builtin check → cwd-resolved
            * require → async import as the last resort. Every sync path is tried before anything
            * returns a promise.
            */ var fn = function fn(module, filePath) {
                    var br = _this.maelstrom.blind.require;
                    try {
                        var v = null;
                        try {
                            v = br(module);
                            return MaybePromise(v);
                        } catch (e) {
                            _this.maelstrom.log("GET_MODULE", {
                                module: module,
                                type: "SYNC",
                                import_used: "blindRequire",
                                error: e
                            }, "error");
                        }
                        if (module && _this.maelstrom.has.local(filePath, module)) {
                            var fs = br("fs");
                            var path = br("path");
                            var resolved = path.resolve(process.cwd(), filePath);
                            if (fs.existsSync(resolved)) {
                                v = fs.readFileSync(resolved, "utf8").trim();
                                return MaybePromise(v);
                            }
                        }
                        if (_this.maelstrom.has.local(filePath)) {
                            var path1 = br("path");
                            var resolved1 = path1.resolve(process.cwd(), filePath);
                            try {
                                v = br(resolved1);
                                return MaybePromise(v);
                            } catch (e) {
                                _this.maelstrom.log("GET_MODULE", {
                                    module: module,
                                    filePath: filePath,
                                    type: "SYNC",
                                    import_used: "local",
                                    error: e
                                }, "error");
                            }
                        }
                        if (_this.maelstrom.has.node || _this.maelstrom.has.bun) {
                            var fs1 = br("fs");
                            var isBuiltin = br("node:module").isBuiltin;
                            if (isBuiltin(module)) {
                                try {
                                    v = br(module);
                                    return MaybePromise(v);
                                } catch (e) {
                                    _this.maelstrom.log("GET_MODULE", {
                                        module: module,
                                        type: "SYNC",
                                        import_used: "builtin",
                                        error: e
                                    }, "error");
                                }
                            }
                            try {
                                var resolved2 = br.resolve(module, {
                                    paths: [
                                        process.cwd()
                                    ]
                                });
                                if (fs1.existsSync(resolved2)) {
                                    v = br(resolved2);
                                    return MaybePromise(v);
                                }
                            } catch (e) {
                                _this.maelstrom.log("GET_MODULE", {
                                    module: module,
                                    type: "SYNC",
                                    import_used: "cwd_resolve",
                                    error: e
                                }, "error");
                            }
                        }
                        _this.maelstrom.log("GET_MODULE", {
                            note: "SYNC PATHS EXHAUSTED — ENTERING ASYNC LAST RESORT",
                            module: module,
                            type: "SYNC"
                        }, "success");
                        if (module) return Promise.resolve().then(function() {
                            return _this.maelstrom.blind.import(module);
                        });
                    } catch (e) {
                        _this.maelstrom.log("GET_MODULE", {
                            module: module,
                            type: "SYNC",
                            error: e
                        }, "error");
                    }
                    return undefined;
                };
                fn.extract_named = function(ns, comp_name) {
                    var _n_comp_name;
                    var _n_default;
                    var n = _this.maelstrom.toNamespace(ns);
                    return (_n_comp_name = n[comp_name]) !== null && _n_comp_name !== void 0 ? _n_comp_name : (_n_default = n.default) === null || _n_default === void 0 ? void 0 : _n_default[comp_name];
                };
                fn.init = function() {
                    /** init-level conjuration: the module itself, no default candidate, no string leak */ var rn = function rn(label) {
                        var module = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                        return _this.maelstrom.rift.conjure.uncached({
                            moduleName: label,
                            module: module
                        });
                    }; /** conjure a rift for a single named export */ 
                    rn.named_export = function(label, comp_name) {
                        var cache = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, module = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
                        var rift = _this.maelstrom.rift(label);
                        if (rift.isOpen) return rift;
                        var raw = _this.maelstrom.rift.conjure({
                            moduleName: label,
                            module: module,
                            cache: cache,
                            comp_name: comp_name
                        });
                        var result = MaybePromise(raw);
                        var resolve = function resolve(resolved) {
                            if (resolved === undefined || resolved === null) {
                                _this.maelstrom.log("CONJURE_NAMED", {
                                    msg: "module_not_found",
                                    label: label
                                }, "warn");
                                return resolved;
                            }
                            if ((typeof resolved === "undefined" ? "undefined" : _type_of(resolved)) !== "object" || !(comp_name in resolved)) {
                                _this.maelstrom.log("CONJURE_NAMED", {
                                    msg: "export_not_found",
                                    label: label,
                                    comp_name: comp_name
                                }, "warn");
                                return resolved;
                            }
                            rift.open(resolved);
                            _this.maelstrom.record(label, "conjure", resolved);
                            return resolved[comp_name];
                        };
                        return MaybePromise(_instanceof1(result, Promise) ? result.then(resolve) : resolve(result));
                    };
                    return rn;
                }();
                fn.named_export = function(label, comp_name) {
                    var module = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                    return _this.maelstrom.rift.conjure.uncached({
                        moduleName: label,
                        module: module,
                        comp_name: comp_name
                    });
                };
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // SOLVER · check — the verifier. One probe per module, ever. Boolean out.
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.check = function(moduleName) {
                    return _async_to_generator(function() {
                        var label, rift;
                        return _ts_generator(this, function(_state) {
                            label = "check:".concat(moduleName);
                            rift = _this1.maelstrom.rift(label);
                            if (rift.claim()) {
                                // check does the ONLY importing anywhere in this flow; open() just records the outcome
                                (function() {
                                    return _async_to_generator(function() {
                                        var result, ok;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this1.maelstrom.rift.conjure.uncached({
                                                            moduleName: moduleName,
                                                            fallback: function fallback() {
                                                                return null;
                                                            }
                                                        })
                                                    ];
                                                case 1:
                                                    result = _state.sent();
                                                    ok = result != null;
                                                    rift.open(ok);
                                                    _this1.maelstrom.record(label, "check", ok);
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    })();
                                })();
                            }
                            return [
                                2,
                                Promise.resolve(rift.wait())
                            ];
                        });
                    })();
                };
                fn.isLoaded = function(specifier) {
                    return _this.maelstrom.rift("mod:".concat(_this.maelstrom.key_for(specifier))).isOpen;
                };
                fn.getLoaded = function(specifier) {
                    return _this.maelstrom.rift("mod:".concat(_this.maelstrom.key_for(specifier))).current;
                };
                /**
            * Find a named export across every loaded module.
            * Ambiguous finds throw — the index never silently guesses.
            */ fn.export_of = function(name, specifier) {
                    var _this_maelstrom_module_getLoaded;
                    if (specifier !== undefined) return (_this_maelstrom_module_getLoaded = _this.maelstrom.module.getLoaded(specifier)) === null || _this_maelstrom_module_getLoaded === void 0 ? void 0 : _this_maelstrom_module_getLoaded[name];
                    var sources = new Map();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _class_private_field_get(_this, _rifts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _sliced_to_array(_step.value, 2), label = _step_value[0], rift = _step_value[1];
                            if (!label.startsWith("mod:") || !rift.isOpen) continue;
                            var idx = rift.exports;
                            var found = idx === null || idx === void 0 ? void 0 : idx.get(name);
                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            if (found) try {
                                for(var _iterator1 = found[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    var _step_value1 = _sliced_to_array(_step1.value, 2), k = _step_value1[0], v = _step_value1[1];
                                    sources.set(k, v);
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    if (sources.size === 0) return undefined;
                    if (sources.size > 1) throw new Error('Ambiguous export "'.concat(name, '" found in: ').concat(_to_consumable_array(sources.keys()).join(", ")));
                    return sources.values().next().value;
                };
                fn.indexExports = function(rift, key, mod) {
                    if (!mod || (typeof mod === "undefined" ? "undefined" : _type_of(mod)) !== "object" && typeof mod !== "function") return;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = Object.keys(mod)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var name = _step.value;
                            var sources = rift.exports.get(name);
                            if (!sources) {
                                sources = new Map();
                                rift.exports.set(name, sources);
                            }
                            sources.set(key, mod[name]);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }; /** the porter's sync twin — blind require, cached, indexed */ 
                fn.require = function(specifier) {
                    var rift = _this.maelstrom.rift("req:".concat(specifier));
                    if (rift.isOpen) return rift.current;
                    if (!_this.maelstrom.blind.require) {
                        // ESM / browser — no require, no crash
                        _this.maelstrom.log("REQUIRE_MODULE", {
                            msg: "require unavailable in this module system — returning undefined",
                            specifier: specifier
                        }, "warn");
                        return undefined;
                    }
                    var mod = _this.maelstrom.blind.require(specifier);
                    rift.open(mod);
                    _this.maelstrom.module.indexExports(rift, specifier, mod);
                    _this.maelstrom.record("req:".concat(specifier), "require_module", mod);
                    return mod;
                };
                return fn;
            }();
            fn.waiter = function() {
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // SOLVER · wait_for / signal — the signal waiter. ONE list.
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                /**
            * register a waiter over one or more signal keys; fires when ALL of them have fired.
            * ONE label → the waiter IS an entry subscription (Rift.onOpen). No parallel list.
            * MANY labels → one row in the multi-waiter table, released by each entry's own
            * subscription firing. Every subscribe call goes through the entry, always.
            */ var fn = function fn(deps, fn) {
                    var keys = _to_consumable_array(new Set(Array.isArray(deps) ? deps : [
                        deps
                    ]));
                    var id = ++_this.nextWaiterId;
                    if (keys.length === 1) {
                        // single-label → pure subscription
                        var unsubs = [];
                        var rift = _this.maelstrom.rift(keys[0]);
                        if (rift.isOpen) {
                            fn(rift.current);
                            return id;
                        }
                        unsubs.push(rift.onOpen(function(v) {
                            fn(v);
                        }));
                        return id;
                    }
                    var entry = {
                        id: id,
                        deps: keys,
                        fn: fn,
                        ready: new Set()
                    }; // multi-label → one table row
                    _class_private_field_get(_this, _multiWaiters).add(entry);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        var _loop = function _loop() {
                            var k = _step.value;
                            var rift = _this.maelstrom.rift(k);
                            if (rift.isOpen) entry.ready.add(k);
                            else rift.onOpen(function(v) {
                                return _this.maelstrom.waiter.releaseMulti(k, v);
                            });
                        };
                        for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    if (entry.ready.size === keys.length) {
                        fn();
                        _class_private_field_get(_this, _multiWaiters).delete(entry);
                    }
                    return id;
                };
                /** advance every multi-label waiter on this label */ fn.releaseMulti = function(k, v) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _to_consumable_array(_class_private_field_get(_this, _multiWaiters))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            if (!entry.deps.includes(k)) continue;
                            entry.ready.add(k);
                            if (entry.ready.size !== entry.deps.length) continue;
                            _class_private_field_get(_this, _multiWaiters).delete(entry);
                            try {
                                entry.fn(v);
                            } catch (e) {
                                queueMicrotask(function() {
                                    throw e;
                                });
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                };
                fn.cancel = function(id) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _class_private_field_get(_this, _multiWaiters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            if (entry.id !== id) continue;
                            _class_private_field_get(_this, _multiWaiters).delete(entry);
                            return true;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return false;
                }; /** rift-shaped wait on a single label — subscribe first, then re-check isOpen */ 
                fn.wait_and_promise = function(timeoutMs, key, isOpen, current) {
                    var rift = _this.maelstrom.rift(key);
                    return new Promise(function(resolve, reject) {
                        // subscribe first, THEN re-check isOpen — closes the gap where the record opens mid-subscribe
                        var timer;
                        var unsub = rift.onOpen(function(v) {
                            if (timer) clearTimeout(timer);
                            unsub();
                            _this.maelstrom.record(key, "wait_for", v);
                            resolve(v);
                        });
                        if (isOpen) {
                            // opened while we were subscribing
                            if (timer) clearTimeout(timer);
                            unsub();
                            _this.maelstrom.record(key, "wait_for", current);
                            resolve(current);
                            return;
                        }
                        if (timeoutMs) {
                            timer = setTimeout(function() {
                                unsub();
                                reject(new Error("[rift] wait() timed out after ".concat(timeoutMs, "ms")));
                            }, timeoutMs);
                        }
                    });
                };
                return fn;
            }();
            // ═══════════════════════════════════════════════════════════════════════════════════════════
            // DEFER — the scheduler. Drain loop, versioned deps, stats, cancellation.
            // ═══════════════════════════════════════════════════════════════════════════════════════════
            //
            // Deferred dependency values are registry entries — `provide` opens a rift under the
            // dependency's label. No separate dependency map. The task table holds tasks only.
            fn.defer = function() {
                var fn = function fn(deps, _fn) {
                    var keys = _to_consumable_array(new Set(typeof deps === "string" ? [
                        deps
                    ] : deps));
                    var id = ++_this.nextDeferId;
                    _this.deferStats.registered++;
                    _class_private_field_get(_this, _deferTasks).set(id, {
                        id: id,
                        deps: keys,
                        fn: _fn,
                        state: "pending"
                    });
                    _this.maelstrom.defer.drain();
                    return id;
                };
                fn.provide = function(k, v) {
                    var entries = typeof k === "string" ? [
                        [
                            k,
                            v
                        ]
                    ] : Object.entries(k);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                            var rift = _this.maelstrom.rift(key);
                            rift.reset(); // replace, don't just first-open
                            rift.open(value);
                            rift.version++;
                            _this.maelstrom.record(key, "manual", value);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    _this.maelstrom.defer.drain();
                };
                fn.resolve = function(k) {
                    _this.maelstrom.defer.provide(k, undefined);
                };
                fn.invalidate = function(k) {
                    return _this.maelstrom.rift.delete(k);
                };
                fn.has = function(k) {
                    return _this.maelstrom.rift(k).isOpen;
                };
                fn.get = function(k) {
                    return _this.maelstrom.rift(k).current;
                };
                fn.cancel = function(id) {
                    var task = _class_private_field_get(_this, _deferTasks).get(id);
                    if (!task || task.state !== "pending") return false;
                    _class_private_field_get(_this, _deferTasks).delete(id);
                    _this.deferStats.cancelled++;
                    return true;
                };
                fn.ready = function(task) {
                    return task.deps.every(function(k) {
                        return _this.maelstrom.rift(k).isOpen;
                    });
                };
                fn.drain = function() {
                    if (_this.draining) {
                        _this.drainAgain = true;
                        return;
                    }
                    _this.draining = true;
                    try {
                        do {
                            _this.drainAgain = false;
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                var _loop = function _loop() {
                                    var task = _step.value;
                                    if (task.state !== "pending" || !_this.maelstrom.defer.ready(task)) return "continue";
                                    task.state = "running"; // claim before execution to prevent duplicate dispatch
                                    _this.deferStats.executed++;
                                    var v = task.deps.map(function(k) {
                                        return _this.maelstrom.rift(k).current;
                                    });
                                    try {
                                        var _task;
                                        var result = (_task = task).fn.apply(_task, _to_consumable_array(v));
                                        if (result != null && typeof result.then === "function") {
                                            Promise.resolve(result).then(function() {
                                                _this.deferStats.completed++;
                                                _this.maelstrom.defer.onSuccess(task.id, task.deps);
                                            }).catch(function(e) {
                                                _this.deferStats.failed++;
                                                _this.maelstrom.defer.reportError(task, e);
                                            }).finally(function() {
                                                _class_private_field_get(_this, _deferTasks).delete(task.id);
                                            });
                                        } else {
                                            _this.deferStats.completed++;
                                            _this.maelstrom.defer.onSuccess(task.id, task.deps);
                                            _class_private_field_get(_this, _deferTasks).delete(task.id);
                                        }
                                    } catch (e) {
                                        _this.deferStats.failed++;
                                        _this.maelstrom.defer.reportError(task, e);
                                        _class_private_field_get(_this, _deferTasks).delete(task.id);
                                    }
                                };
                                for(var _iterator = _class_private_field_get(_this, _deferTasks).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }while (_this.drainAgain);
                    } finally{
                        _this.draining = false;
                    }
                };
                fn.reportError = function(task, e) {
                    try {
                        _this.maelstrom.defer.onError(e, task.id, task.deps);
                    } catch (unused) {
                    /* error reporting must not interrupt the scheduler */ }
                };
                fn.inspect = function() {
                    var pending = _to_consumable_array(_class_private_field_get(_this, _deferTasks).values()).filter(function(x) {
                        return x.state === "pending";
                    }).map(function(x) {
                        return {
                            id: x.id,
                            deps: x.deps,
                            missing: x.deps.filter(function(k) {
                                return !_this.maelstrom.rift(k).isOpen;
                            })
                        };
                    });
                    var running = _to_consumable_array(_class_private_field_get(_this, _deferTasks).values()).filter(function(x) {
                        return x.state === "running";
                    }).map(function(x) {
                        return {
                            id: x.id,
                            deps: x.deps
                        };
                    });
                    return {
                        stats: _object_spread({}, _this.deferStats),
                        pending: pending,
                        running: running
                    };
                };
                fn.clear = function() {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _class_private_field_get(_this, _deferTasks)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _sliced_to_array(_step.value, 2), id = _step_value[0], task = _step_value[1];
                            if (task.state === "pending") {
                                _class_private_field_get(_this, _deferTasks).delete(id);
                                _this.deferStats.cancelled++;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                };
                fn.onError = function(e, id, deps) {
                    _this.maelstrom.log("DEFERRED", {
                        msg: "Task failed",
                        id: id,
                        deps: deps,
                        error: e
                    }, "error");
                };
                fn.onSuccess = function(id, deps) {
                    _this.maelstrom.log("DEFERRED", {
                        msg: "Task fulfilled",
                        id: id,
                        deps: deps
                    }, "info");
                };
                return fn;
            }();
            fn.detect = function() {
                var fn = function fn() {};
                fn.capability = function(name) {
                    var g = typeof globalThis !== "undefined" ? globalThis : {};
                    switch(name){
                        case "shared_worker":
                            return typeof g.SharedWorker !== "undefined";
                        case "service_worker":
                            return typeof g.ServiceWorkerGlobalScope !== "undefined" || typeof g.navigator !== "undefined" && "serviceWorker" in g.navigator;
                        case "unix_worker":
                            var _g_process_versions, _g_process;
                            return typeof g.process !== "undefined" && !!((_g_process = g.process) === null || _g_process === void 0 ? void 0 : (_g_process_versions = _g_process.versions) === null || _g_process_versions === void 0 ? void 0 : _g_process_versions.node);
                        case "broadcastr_channel":
                            return typeof g.BroadcastChannel !== "undefined";
                        case "electron_server":
                        case "electron_client":
                            var _g_process_versions1, _g_process1;
                            return typeof g.process !== "undefined" && !!((_g_process1 = g.process) === null || _g_process1 === void 0 ? void 0 : (_g_process_versions1 = _g_process1.versions) === null || _g_process_versions1 === void 0 ? void 0 : _g_process_versions1.electron);
                        case "named_pipe":
                        case "native_msg_host":
                        case "native_msg_client":
                            var _g_process_versions2, _g_process2;
                            return typeof g.process !== "undefined" && !!((_g_process2 = g.process) === null || _g_process2 === void 0 ? void 0 : (_g_process_versions2 = _g_process2.versions) === null || _g_process_versions2 === void 0 ? void 0 : _g_process_versions2.node);
                        default:
                            return false;
                    }
                };
                fn.bundler = function() {
                    var _ref;
                    var _proc_versions, _proc_versions1, _proc_env;
                    var proc = typeof process !== "undefined" ? process : null;
                    if (!proc || !((_proc_versions = proc.versions) === null || _proc_versions === void 0 ? void 0 : _proc_versions.node)) return null; // .versions check distinguishes real Node from a browser shim
                    if ((_proc_versions1 = proc.versions) === null || _proc_versions1 === void 0 ? void 0 : _proc_versions1.bun) return "bun";
                    var ua = (_ref = (_proc_env = proc.env) === null || _proc_env === void 0 ? void 0 : _proc_env.npm_config_user_agent) !== null && _ref !== void 0 ? _ref : "";
                    if (ua.startsWith("pnpm")) return "pnpm";
                    if (ua.startsWith("yarn")) return "yarn";
                    if (ua.startsWith("npm")) return "npm";
                    return null;
                };
                fn.firstMatch = function(candidates) {
                    return _async_to_generator(function() {
                        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name, err;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        7,
                                        8
                                    ]);
                                    _iterator = candidates[Symbol.iterator]();
                                    _state.label = 2;
                                case 2:
                                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                        3,
                                        5
                                    ];
                                    name = _step.value;
                                    return [
                                        4,
                                        _this1.maelstrom.module.check(name)
                                    ];
                                case 3:
                                    if (_state.sent()) return [
                                        2,
                                        name
                                    ];
                                    _state.label = 4;
                                case 4:
                                    _iteratorNormalCompletion = true;
                                    return [
                                        3,
                                        2
                                    ];
                                case 5:
                                    return [
                                        3,
                                        8
                                    ];
                                case 6:
                                    err = _state.sent();
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                    return [
                                        7
                                    ];
                                case 8:
                                    return [
                                        2,
                                        null
                                    ];
                            }
                        });
                    })();
                };
                fn.all = function(candidates) {
                    return _async_to_generator(function() {
                        var results;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all(candidates.map(function(name) {
                                            return _async_to_generator(function() {
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                _this1.maelstrom.module.check(name)
                                                            ];
                                                        case 1:
                                                            return [
                                                                2,
                                                                _state.sent() ? name : null
                                                            ];
                                                    }
                                                });
                                            })();
                                        }))
                                    ];
                                case 1:
                                    results = _state.sent();
                                    return [
                                        2,
                                        results.filter(function(r) {
                                            return r !== null;
                                        })
                                    ];
                            }
                        });
                    })();
                }; /** runs once. Everything downstream just reads the result. */ 
                fn.environment = function(env_lib) {
                    void function() {
                        return _async_to_generator(function() {
                            var bundler, _ref, moduleLevel, platform, compilers, adapters;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        bundler = _this1.maelstrom.detect.bundler();
                                        return [
                                            4,
                                            Promise.all([
                                                _this1.maelstrom.detect.firstMatch(env_lib ? [
                                                    env_lib
                                                ] : _this1.MODULE_LEVEL_CANDIDATES),
                                                _this1.maelstrom.detect.firstMatch(_this1.PLATFORM_CANDIDATES),
                                                _this1.maelstrom.detect.all(_this1.COMPILER_CANDIDATES),
                                                _this1.maelstrom.detect.all(_this1.ADAPTER_CANDIDATES)
                                            ])
                                        ];
                                    case 1:
                                        _ref = _sliced_to_array.apply(void 0, [
                                            _state.sent(),
                                            4
                                        ]), moduleLevel = _ref[0], platform = _ref[1], compilers = _ref[2], adapters = _ref[3];
                                        _this1.ENV_STATE = {
                                            moduleLevel: moduleLevel,
                                            platform: platform,
                                            compilers: compilers,
                                            bundler: bundler,
                                            adapters: adapters,
                                            ready: true
                                        };
                                        _this1.maelstrom.record("ENV_DETECTION", "detect_environment", _this1.ENV_STATE);
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    }();
                };
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                // what_is_this_item_exactly — the type interrogator, carried whole
                // ═══════════════════════════════════════════════════════════════════════════════════════════
                fn.type = function(v) {
                    // #region ═════════════════════════════════════════════
                    // ── axis 2 first: is it async? thenable (promise-like, not necessarily Promise)  ─────────────────────══
                    if (v != null && typeof v.then === "function") /*                            */ return "thenable";
                    // ─── async iterable ───────────────────────────────────────────────────────────────────────═────────────
                    if (v != null && typeof v[Symbol.asyncIterator] === "function") /*     */ return "async-iterable";
                    // ── axis 1: what shape? ────────────────────────────────────────────────────────────────────────────────
                    if (v === null) /*                           null (typeof null === 'object', so separate) */ return "null";
                    var t = typeof v === "undefined" ? "undefined" : _type_of(v); /*                                                                                  */ 
                    ;
                    if (t !== "object" && t !== "function") /*        primitive: str/num/bool/bigint/sym/undefined */ return t;
                    if (typeof v === "function") /*                                              function */ return "function";
                    if (ArrayBuffer.isView(v)) /*                                     TypedArray or DataView */ return "array";
                    if (_instanceof1(v, Map)) /*                                                                   */ return "map";
                    if (_instanceof1(v, Set)) /*                                                                   */ return "set";
                    if (_instanceof1(v, Date)) /*                                                                 */ return "date";
                    if (_instanceof1(v, RegExp)) /*                                                             */ return "regexp";
                    if (_instanceof1(v, Error)) /*                                                               */ return "error";
                    if (typeof v[Symbol.iterator] === "function") /*                             */ return "iterable";
                    if (t === "object") /*                                                     plain record */ return "object";
                    // ─── iterable ──────────────────────────────────────────────────────────────────────────────────────────
                    if (v != null && typeof v[Symbol.iterator] === "function") /*                */ return "iterator";
                    if (typeof v === "string") /*                                                           */ return "string";
                    if (typeof v === "number") /*                                                           */ return "number";
                    if (typeof v === "boolean") /*                                                         */ return "boolean";
                    if ((typeof v === "undefined" ? "undefined" : _type_of(v)) === "bigint") /*                                                           */ return "bigint";
                    if ((typeof v === "undefined" ? "undefined" : _type_of(v)) === "symbol") /*                                                           */ return "symbol";
                    if (typeof v === "undefined") /*                                                     */ return "undefined";
                    // ─── objects by constructor ────────────────────────────────────────────────────────────────────────────
                    if (_instanceof1(v, Array)) /*                                           or Array.isArray(v) */ return "Array";
                    if (_instanceof1(v, WeakMap)) /*                                                           */ return "WeakMap";
                    if (_instanceof1(v, WeakSet)) /*                                                           */ return "WeakSet";
                    if (_instanceof1(v, Promise)) /*                                                           */ return "Promise";
                    if (_instanceof1(v, ArrayBuffer)) /*                                                   */ return "ArrayBuffer";
                    // ─── node-specific ─────────────────────────────────────────────────────────────────────────────────────
                    if (_instanceof1(v, Buffer)) /*                                                 Node buffer */ return "Buffer";
                    if (_instanceof1(v, URL)) /*                                                       oWHATWG URL */ return "URL";
                    if (_instanceof1(v, URLSearchParams)) /*                                           */ return "URLSearchParams";
                    // ─── plain object / record ─────────────────────────────────────────────────────────────────────────────
                    if ((typeof v === "undefined" ? "undefined" : _type_of(v)) === "object" && v !== null && !Array.isArray(v) && !_instanceof1(v, Map) && !_instanceof1(v, Set)) /*                                                     */ return "plainObject";
                // ───────────────────────────────────────────────────────────────────────────────────────────────────────
                };
                fn.cloudSupport = function() {
                    var g = typeof globalThis !== "undefined" ? globalThis : {};
                    return !!(g.window && g.window !== g) || typeof g.document !== "undefined";
                };
                return fn;
            }();
            fn.useEnvState = function() {
                if (!_this.ENV_STATE.ready && !_this.warnedUseBeforeReady) {
                    _this.warnedUseBeforeReady = true; // warn once, not spam
                    _this.maelstrom.log("USE_ENV_STATE", {
                        note: "called before detect_environment() finished — falling back to defaults"
                    }, "warn");
                }
                return _object_spread_props(_object_spread({}, _this.ENV_STATE), {
                    rt: "ENV_DETECTION",
                    subChannel: "[CSE_ENV]"
                });
            }; // ═══════════════════════════════════════════════════════════════════════════════════════════
            // APPARATION — the no-op factory, carried whole
            // ═══════════════════════════════════════════════════════════════════════════════════════════
            fn.apparation = {
                any: function any() {
                    return {};
                },
                anyGeneric: function anyGeneric() {
                    return {};
                },
                anyProp: function anyProp(v) {
                    return v;
                },
                anyProp2: function anyProp2(v) {
                    return v;
                },
                anyProp3: function anyProp3(v) {
                    return v;
                },
                anyAs: function anyAs(v) {
                    return v;
                },
                promise: function promise() {
                    return Promise.resolve({});
                },
                booleanPromise: function booleanPromise() {
                    return Promise.resolve(false);
                },
                void: function _void() {},
                func: function func() {
                    return function() {
                        return {};
                    };
                },
                funcVoid: function funcVoid() {
                    return function() {};
                },
                universal: function universal() {
                    return new Proxy({}, {
                        get: function get(target, prop) {
                            if ((typeof prop === "undefined" ? "undefined" : _type_of(prop)) === "symbol") return undefined;
                            var propName = prop;
                            if (propName === "then" || propName === "catch" || propName === "finally") return undefined;
                            if (propName === Symbol.iterator) return function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2
                                    ];
                                });
                            };
                            if (propName === "toString" || propName === "valueOf") return function() {
                                return "";
                            };
                            return function() {
                                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                    args[_key] = arguments[_key];
                                }
                                return target;
                            };
                        },
                        set: function set() {
                            return true;
                        },
                        deleteProperty: function deleteProperty() {
                            return true;
                        },
                        ownKeys: function ownKeys() {
                            return [];
                        },
                        getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
                            return undefined;
                        },
                        apply: function apply(target) {
                            return target;
                        },
                        construct: function construct(target) {
                            return target;
                        }
                    });
                },
                universalNoop: function universalNoop() {
                    return new Proxy({}, {
                        get: function get(target, prop) {
                            if ((typeof prop === "undefined" ? "undefined" : _type_of(prop)) === "symbol") return undefined;
                            var propName = prop;
                            if (propName === "then" || propName === "catch" || propName === "finally") return undefined;
                            if (propName === Symbol.iterator) return function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2
                                    ];
                                });
                            };
                            if (propName === "toString" || propName === "valueOf") return function() {
                                return "";
                            };
                            return function() {
                                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                    args[_key] = arguments[_key];
                                }
                                return target;
                            };
                        },
                        set: function set() {
                            return true;
                        },
                        deleteProperty: function deleteProperty() {
                            return true;
                        },
                        ownKeys: function ownKeys() {
                            return [];
                        },
                        getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
                            return undefined;
                        },
                        apply: function apply(target) {
                            return target;
                        },
                        construct: function construct(target) {
                            return target;
                        }
                    });
                },
                simpleNoop: function simpleNoop() {
                    return {};
                },
                noopPromise: function noopPromise() {
                    return Promise.resolve({});
                },
                noopBooleanPromise: function noopBooleanPromise() {
                    return Promise.resolve(false);
                },
                noopVoid: function noopVoid() {},
                noopFunction: function noopFunction() {
                    return function() {
                        return {};
                    };
                },
                thenable: function thenable() {
                    return {
                        then: function then(_onF, _onR) {
                            return new Promise(function() {});
                        }
                    };
                },
                asyncIterable: function asyncIterable() {
                    return _define_property({}, Symbol.asyncIterator, function() {
                        return _wrap_async_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            _await_async_generator(new Promise(function() {}))
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    });
                },
                null: function _null() {
                    return null;
                },
                primitive: function primitive() {
                    return undefined;
                },
                string: function string() {
                    return "";
                },
                number: function number() {
                    return 0;
                },
                boolean: function boolean() {
                    return false;
                },
                bigint: function bigint() {
                    return 0n;
                },
                symbol: function symbol() {
                    return Symbol("apparation");
                },
                undefined: function undefined1() {
                    return undefined;
                },
                undefinedString: function undefinedString() {
                    return "undefined";
                },
                function_: function function_() {
                    return function() {};
                },
                typedArray: function typedArray() {
                    return new Uint8Array();
                },
                dataView: function dataView() {
                    return new DataView(new ArrayBuffer(0));
                },
                arrayBuffer: function arrayBuffer() {
                    return new ArrayBuffer(0);
                },
                map: function map() {
                    return new Map();
                },
                set: function set() {
                    return new Set();
                },
                date: function date() {
                    return new Date(0);
                },
                regexp: function regexp() {
                    return /(?:)/;
                },
                error: function error() {
                    var msg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "[Apparation]";
                    return new Error(msg);
                },
                iterable: function iterable() {
                    return [];
                },
                iterator: function iterator() {
                    return [][Symbol.iterator]();
                },
                object: function object() {
                    return {};
                },
                plainObject: function plainObject() {
                    return {};
                },
                array: function array() {
                    return [];
                },
                weakMap: function weakMap() {
                    return new WeakMap();
                },
                weakSet: function weakSet() {
                    return new WeakSet();
                },
                promiseInstance: function promiseInstance() {
                    return Promise.resolve({});
                },
                url: function url() {
                    return new URL("about:blank");
                },
                urlSearchParams: function urlSearchParams() {
                    return new URLSearchParams();
                },
                buffer: function buffer() {
                    return typeof Buffer !== "undefined" ? Buffer.alloc(0) : new Uint8Array();
                },
                _ArrayBuffer: function _ArrayBuffer() {
                    return new Uint8Array();
                }
            };
            fn.reset = function() {
                _class_private_field_get(_this, _rifts).clear();
                _class_private_field_get(_this, _multiWaiters).clear();
                _class_private_field_get(_this, _deferTasks).clear();
                _this.deferStats = {
                    registered: 0,
                    executed: 0,
                    completed: 0,
                    failed: 0,
                    cancelled: 0
                };
                _this.autoCloud = undefined;
                _this.ENV_STATE = {
                    moduleLevel: null,
                    platform: null,
                    compilers: [],
                    bundler: null,
                    adapters: [],
                    ready: false
                };
            };
            return fn;
        }());
        _class_private_field_set(_this, _counter, new Uint32Array(1));
        return _this;
    }
    _create_class(Registry, [
        {
            key: "_byteid",
            value: function _byteid() {
                if (++_class_private_field_get(this, _counter)[0] === 0) _class_private_field_update(this, _epoch).value++;
                return "".concat(_class_private_field_get(this, _epoch), ":").concat(_class_private_field_get(this, _counter)[0]);
            }
        },
        {
            key: "_sid",
            value: function _sid() {
                return this._byteid();
            }
        },
        {
            key: "b",
            value: function b() {
                return this._byteid();
            }
        },
        {
            key: "onFlush",
            value: function onFlush(cb) {
                this.dirty.add(cb);
                this.scheduleDrain();
            }
        },
        {
            key: "scheduleDrain",
            value: function scheduleDrain() {
                if (this._flushScheduled) return;
                this._flushScheduled = true;
                queueMicrotask(this.drain);
            }
        },
        {
            key: "drain",
            value: function drain() {
                this._flushScheduled = false;
                if (this.dirty.size === 0) return;
                // An explicit openBatch() scope is still open (deliberately spanning an await) —
                // don't drop the pending callbacks, just wait for closeBatch() to let them through.
                if (this.openScopes.size > 0) {
                    this.scheduleDrain();
                    return;
                }
                var callbacks = this.dirty;
                this.dirty = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cb = _step.value;
                        cb();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "set",
            value: //                                                                                                 [SET]
            // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
            function set(key, value) {
                if (_class_private_field_get(this, _frozen)) throw new Error("Store is frozen");
                var prev = _class_private_field_get(this, _data).swap(key, value); // returns previous, writes new
                _class_private_method_get(this, _notify, notify).call(this, key, value, prev);
                return this;
            }
        },
        {
            key: "setLazy",
            value: function setLazy(key, make) {
                var prev = _class_private_field_get(this, _data).g(key);
                var value = make();
                _class_private_field_get(this, _data).s(key, value);
                _class_private_method_get(this, _notify, notify).call(this, key, value, prev);
                return this;
            }
        },
        {
            key: "delete",
            value: function _delete(key) {
                if (!_class_private_field_get(this, _data).h(key)) return false;
                var prev = _class_private_field_get(this, _data).take(key);
                _class_private_method_get(this, _notify, notify).call(this, key, undefined, prev);
                return true;
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _data).toKeys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var key = _step.value;
                        _class_private_method_get(this, _notify, notify).call(this, key, undefined, _class_private_field_get(this, _data).g(key));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                _class_private_field_get(this, _data).clear();
            }
        },
        {
            key: "subscribe",
            value: function subscribe(keyOrFn, maybeFn) {
                var _this = this;
                var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                // global watcher
                if (typeof keyOrFn === "function") {
                    var fn = keyOrFn;
                    _class_private_field_get(this, _any_subs).add(fn);
                    return function() {
                        _class_private_field_get(_this, _any_subs).delete(fn);
                    };
                }
                var key = keyOrFn;
                // iterator form: no maybeFn, or second arg is an options object
                if (maybeFn === undefined || (typeof maybeFn === "undefined" ? "undefined" : _type_of(maybeFn)) === "object" && maybeFn !== null) {
                    var iteratorOpts = (typeof maybeFn === "undefined" ? "undefined" : _type_of(maybeFn)) === "object" && maybeFn || opts;
                    return _class_private_method_get(this, _asIterator, asIterator).call(this, key, iteratorOpts);
                }
                // callback form
                var fn1 = maybeFn;
                var set = _class_private_field_get(this, _subs).getOrM(function() {
                    return new SET2();
                }, key);
                set.add(fn1);
                if (opts.immediate && _class_private_field_get(this, _data).has(key)) {
                    queueMicrotask(function() {
                        return fn1(_class_private_field_get(_this, _data).get(key), undefined, key);
                    });
                }
                // unsubscribe
                return function() {
                    var set = _class_private_field_get(_this, _subs).g(key);
                    if (!set) return;
                    set.delete(fn1);
                    if (set.size === 0) _class_private_field_get(_this, _subs).d(key);
                };
            }
        },
        {
            key: "unsubscribeAll",
            value: function unsubscribeAll(fns) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _subs).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var set = _step.value;
                        set.deleteAll(fns);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                _class_private_field_get(this, _any_subs).deleteAll(fns);
            }
        },
        {
            key: "subscribersOf",
            value: function subscribersOf(keys) {
                var out = new SET2();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var key = _step.value;
                        var set = _class_private_field_get(this, _subs).g(key);
                        if (set) out = out.union(set);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return out;
            }
        },
        {
            key: "get",
            value: function get(key, fallback) {
                return _class_private_field_get(this, _data).has(key) ? _class_private_field_get(this, _data).get(key) : fallback;
            }
        },
        {
            key: "getAll",
            value: function getAll() {
                return _class_private_field_get(this, _data).clone();
            }
        },
        {
            key: "has",
            value: function has(key) {
                return _class_private_field_get(this, _data).has(key);
            }
        },
        {
            key: "freeze",
            value: function freeze() {
                _class_private_field_set(this, _frozen, true);
            }
        },
        {
            key: "wait",
            value: //                                                                                                [WAIT]
            // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
            /*  ====================================================================================================
     wait(key, opts?) -> Promise<value>

     opts.predicate(value, prev) -> boolean   // keep waiting until true

     opts.timeout   -> ms, rejects on timeout

     opts.immediate -> resolve now if predicate passes for current value

     opts.signal    -> AbortSignal
    ============================================================= ⇦✦──⇦✦──✦──✦──← 'pew pew' 🧙 [STORE] */ function wait(key) {
                var _this = this;
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_predicate = _ref.predicate, predicate = _ref_predicate === void 0 ? function() {
                    return true;
                } : _ref_predicate, timeout = _ref.timeout, _ref_immediate = _ref.immediate, immediate = _ref_immediate === void 0 ? true : _ref_immediate, signal = _ref.signal;
                // Fast path: value already satisfies
                if (immediate && _class_private_field_get(this, _data).has(key) && predicate(_class_private_field_get(this, _data).get(key), undefined)) {
                    return Promise.resolve(_class_private_field_get(this, _data).get(key));
                }
                return new Promise(function(resolve, reject) {
                    var waiter = {
                        key: key,
                        predicate: predicate,
                        resolve: resolve,
                        reject: reject,
                        timer: null
                    };
                    var cleanup = function cleanup() {
                        _class_private_field_get(_this, _waiters).delete(waiter);
                        if (waiter.timer) clearTimeout(waiter.timer);
                        if (signal) signal.removeEventListener("abort", onAbort);
                    };
                    var onAbort = function onAbort() {
                        cleanup();
                        var err = new Error("wait aborted");
                        err.name = "AbortError";
                        reject(err);
                    };
                    if (timeout) {
                        waiter.timer = setTimeout(function() {
                            cleanup();
                            var err = new Error("wait('".concat(key, "') timed out after ").concat(timeout, "ms"));
                            err.name = "TimeoutError";
                            reject(err);
                        }, timeout).unref();
                    }
                    if (signal) {
                        if (signal.aborted) return onAbort();
                        signal.addEventListener("abort", onAbort, {
                            once: true
                        });
                    }
                    waiter.cleanup = cleanup;
                    _class_private_field_get(_this, _waiters).getOrM(function() {
                        return new SET2();
                    }, key).add(waiter);
                });
            } // Convenience: wait for a *change* (ignore current value)
        },
        {
            key: "waitChange",
            value: function waitChange(key) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return this.wait(key, _object_spread_props(_object_spread({}, opts), {
                    immediate: false
                }));
            }
        },
        {
            key: "waitFor",
            value: function waitFor(key, predicate) {
                var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.wait(key, _object_spread_props(_object_spread({}, opts), {
                    predicate: predicate
                }));
            }
        },
        {
            key: "setIfAbsent",
            value: //                                                                                              [ATOMIC]
            // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
            function setIfAbsent(key, value) {
                if (!_class_private_field_get(this, _data).setIfAbsent(key, value)) return false;
                _class_private_method_get(this, _notify, notify).call(this, key, value, undefined);
                return true;
            }
        },
        {
            key: "setIfPresent",
            value: function setIfPresent(key, value) {
                var prev = _class_private_field_get(this, _data).g(key);
                if (!_class_private_field_get(this, _data).setIfPresent(key, value)) return false;
                _class_private_method_get(this, _notify, notify).call(this, key, value, prev);
                return true;
            }
        },
        {
            key: "replace",
            value: function replace(key, value) {
                return this.setIfPresent(key, value);
            }
        },
        {
            key: "update",
            value: function update(key, fn, initial) {
                var had = _class_private_field_get(this, _data).h(key);
                var prev = had ? _class_private_field_get(this, _data).g(key) : undefined;
                var next = _class_private_field_get(this, _data).update(key, fn, initial);
                _class_private_method_get(this, _notify, notify).call(this, key, next, prev);
                return next;
            }
        },
        {
            key: "inc",
            value: function inc(key) {
                var by = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
                var prev = _class_private_field_get(this, _data).g(key);
                var next = _class_private_field_get(this, _data).inc(key, by);
                _class_private_method_get(this, _notify, notify).call(this, key, next, prev);
                return next;
            }
        },
        {
            key: "touch",
            value: function touch(key) {
                // register interest without overwriting — useful for the "subscribed but not yet written" case
                if (!_class_private_field_get(this, _data).setIfAbsent(key, undefined)) return false;
                _class_private_method_get(this, _notify, notify).call(this, key, undefined, undefined);
                return true;
            }
        },
        {
            key: "toJSON",
            value: //                                                                                               [OTHER]
            // #region ══════════════════════════════════════════════════════════════════════════════════════════════════════
            function toJSON() {
                return _class_private_field_get(this, _data).toObject();
            }
        },
        {
            key: "entries",
            value: function entries() {
                return _class_private_field_get(this, _data).toArray();
            }
        },
        {
            key: "keys",
            value: function keys() {
                return _class_private_field_get(this, _data).toKeys();
            }
        },
        {
            key: "values",
            value: function values() {
                return _class_private_field_get(this, _data).toValues();
            }
        },
        {
            key: "find",
            value: function find(pred) {
                return _class_private_field_get(this, _data).find(pred);
            }
        },
        {
            key: "findKey",
            value: function findKey(pred) {
                return _class_private_field_get(this, _data).findKey(pred);
            }
        },
        {
            key: "group",
            value: function group(fn) {
                return _class_private_field_get(this, _data).group(fn);
            }
        },
        {
            key: "pick",
            value: function pick(keys) {
                return _class_private_field_get(this, _data).pick(keys);
            }
        },
        {
            key: "omit",
            value: function omit(keys) {
                return _class_private_field_get(this, _data).omit(keys);
            }
        },
        {
            key: "snapshot",
            value: function snapshot() {
                return _class_private_field_get(this, _data).clone();
            }
        },
        {
            key: "equals",
            value: function equals(other) {
                return _class_private_field_get(this, _data).equals(other);
            }
        },
        {
            key: "snapshotSubs",
            value: function snapshotSubs() {
                return _class_private_field_get(this, _subs).mapValues(function(set) {
                    return set.clone();
                });
            }
        },
        {
            key: "results",
            get: /** the results view — computed from the ONE registry, stored nowhere */ function get() {
                var out = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _rifts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), label = _step_value[0], rift = _step_value[1];
                        var _r_store, _rift_openedAt;
                        var r = rift;
                        if (r.solver === undefined) continue;
                        out.push({
                            label: label,
                            solver: r.solver,
                            store: (_r_store = r.store) !== null && _r_store !== void 0 ? _r_store : "local",
                            value: rift.current,
                            ok: rift.current !== undefined && rift.current !== null,
                            openedAt: (_rift_openedAt = rift.openedAt) !== null && _rift_openedAt !== void 0 ? _rift_openedAt : rift.createdAt
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return out;
            }
        },
        {
            key: "size",
            get: function get() {
                return _class_private_field_get(this, _rifts).size;
            }
        }
    ]);
    return Registry;
}(src_EventEmitter);
// ═══════════════════════════════════════════════════════════════════════════════════════════
// SOLVER · detect_environment — the cartographer
// ═══════════════════════════════════════════════════════════════════════════════════════════
_define_property(src_Registry, "MODULE_LEVEL_CANDIDATES", [
    "typescript",
    "rollup",
    "vite",
    "eslint",
    "babel",
    "postcss",
    "tailwindcss",
    "@babel/core",
    "prettier",
    "stylelint",
    "sass",
    "less",
    "jest",
    "vitest",
    "playwright",
    "@types/vscode"
]);
_define_property(src_Registry, "PLATFORM_CANDIDATES", [
    "PROJECT_PLATFORM_KILLER",
    "react",
    "preact",
    "@remix-run/react",
    "@react-router/react",
    "next",
    "nuxt",
    "svelte",
    "solid",
    "vite",
    "arfa",
    "vue",
    "angular",
    "astro",
    "gatsby",
    "dojo",
    "inferno",
    "lupine",
    "ember-source",
    "backbone",
    "alpinejs",
    "lit",
    "marko",
    "@builder.io/qwik",
    "solid-start",
    "@sveltejs/kit",
    "meteor",
    "stencil",
    "aurelia",
    "nodiff",
    "qwik",
    "velo-type",
    "webpack"
]);
_define_property(src_Registry, "COMPILER_CANDIDATES", [
    "rspack",
    "webpack",
    "vite",
    "rollup",
    "esbuild",
    "swc-loader",
    "babel",
    "next",
    "nuxt",
    "@remix-run/react",
    "@react-router/react",
    "svelte",
    "solid",
    "vue",
    "@swc/core",
    "turbopack",
    "parcel",
    "tsup",
    "unbuild",
    "esbuild-loader",
    "@babel/core",
    "terser",
    "@angular/core",
    "@angular/compile"
]);
_define_property(src_Registry, "BUNDLER_CANDIDATES", [
    "bun",
    "pnpm",
    "yarn",
    "npm"
]);
_define_property(src_Registry, "ADAPTER_CANDIDATES", [
    "websocket_dev_server",
    "cross_app_ws_server",
    "terminal_ngin_proxy_register",
    "terminal_ngin_proxy",
    "workspace_hub_server",
    "workspace_hub_client",
    "cross_app_ws_client",
    "cse_cross_app_server",
    "cse_cross_app_client",
    "shared_worker",
    "service_worker",
    "unix_worker",
    "broadcastr_channel",
    "websocket",
    "websocket_server",
    "websocket_client",
    "webrtc",
    "webrtc_server",
    "webrtc_client",
    "electron_server",
    "electron_client",
    "mqtt",
    "sse",
    "named_pipe",
    "worker_thread",
    "native_msg_host",
    "native_msg_client"
]);
_define_property(src_Registry, "CAPABILITY_CANDIDATES", [
    "shared_worker",
    "service_worker",
    "unix_worker",
    "broadcastr_channel",
    "electron_server",
    "electron_client",
    "named_pipe",
    "native_msg_host",
    "native_msg_client"
]);
function asIterator(_0) {
    return _wrap_async_generator(function(key) {
        var _ref, _ref_immediate, immediate, queue, resolve, done, push, unsub, stop;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ref = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {}, _ref_immediate = _ref.immediate, immediate = _ref_immediate === void 0 ? false : _ref_immediate;
                    // buffer events so a slow consumer doesn't lose them
                    queue = [];
                    done = false;
                    push = function push(v) {
                        queue.push(v);
                        if (resolve) {
                            var r = resolve;
                            resolve = null;
                            r();
                        }
                    };
                    unsub = this.subscribe(key, function(v, prev) {
                        return push({
                            value: v,
                            prev: prev
                        });
                    });
                    stop = this.subscribe(function(k, v, prev) {
                        if (k === key) push({
                            value: v,
                            prev: prev
                        });
                    });
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    if (!(immediate && this.has(key))) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        this.get(key)
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    if (!!done) return [
                        3,
                        8
                    ];
                    if (!(queue.length === 0)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        _await_async_generator(new Promise(function(r) {
                            return resolve = r;
                        }))
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    if (!queue.length) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        queue.shift().value
                    ];
                case 6:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 7:
                    return [
                        3,
                        3
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    unsub();
                    stop();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
function notify(key, value, prev) {
    var waiting = _class_private_field_get(this, _waiters).get(key);
    if (waiting) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = waiting[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var w = _step.value;
                if (!w.predicate(value, prev)) continue;
                w.cleanup();
                w.resolve(value);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
}


export { src_Registry as Registry, src_rv as rv, src_sameValue as sameValue };
