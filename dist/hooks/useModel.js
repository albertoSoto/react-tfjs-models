"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var tfjsWasm = _interopRequireWildcard(require("@tensorflow/tfjs-backend-wasm"));

var tf = _interopRequireWildcard(require("@tensorflow/tfjs-core"));

require("@tensorflow/tfjs-backend-webgl");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

tfjsWasm.setWasmPaths({
  'tfjs-backend-wasm.wasm': "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@" + "".concat(tfjsWasm.version_wasm, "/dist/tfjs-backend-wasm.wasm"),
  'tfjs-backend-wasm-simd.wasm': "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@" + "".concat(tfjsWasm.version_wasm, "/dist/tfjs-backend-wasm-simd.wasm"),
  'tfjs-backend-wasm-threaded-simd.wasm': "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@" + "".concat(tfjsWasm.version_wasm, "/dist/tfjs-backend-wasm-threaded-simd.wasm")
});

var useModel = function useModel(loader, props) {
  var backend = props.backend;
  var modelRef = (0, _react.useRef)(null);
  var load = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return loader(props);

        case 2:
          modelRef.current = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [loader, props]);
  /**
   * Sets the backend.
   * @param {string} backend
   */

  function setBackend(backend) {
    tf.setBackend(backend).then(function () {
      if (!tf.env().getAsync('WASM_HAS_SIMD_SUPPORT') && backend === 'wasm') {
        console.warn('The backend is set to WebAssembly and SIMD support' + 'is turned off.\nThis could bottleneck your performance ' + 'greatly, thus to prevent this enable SIMD Support in ' + 'chrome://flags');
      }
    });
  }

  (0, _react.useEffect)(function () {
    setBackend(backend);
    load();
  }, [backend, load]);
  return modelRef;
};

var _default = useModel;
exports.default = _default;