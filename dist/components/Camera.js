"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactWebcam = _interopRequireDefault(require("react-webcam"));

var _global = require("./global");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initVideoState = {
  video: null
};

var Camera = function Camera(props) {
  var webcamRef = (0, _react.useRef)(null);
  var canvasRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(initVideoState),
      _useState2 = _slicedToArray(_useState, 2),
      videoState = _useState2[0],
      setVideoState = _useState2[1];

  var requestRef = (0, _react.useRef)(null);
  /**
   * Handles animation frames.
   */

  var onAnimate = (0, _react.useCallback)(function () {
    if (webcamRef.current != null && webcamRef.current.video.readyState === 4) {
      var video = webcamRef.current.video;
      var videoWidth = video.videoWidth;
      var videoHeight = video.videoHeight;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      setVideoState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          video: video
        });
      });
    }

    requestRef.current = requestAnimationFrame(onAnimate);
  }, []);
  (0, _react.useEffect)(function () {
    onAnimate();
    return function () {
      return cancelAnimationFrame(requestRef.current);
    };
  }, [onAnimate]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactWebcam.default, {
    ref: webcamRef,
    mirrored: true,
    style: props.style
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: props.style
  }), /*#__PURE__*/React.createElement(_global.VideoContext.Provider, {
    value: videoState
  }, props.children));
};

var _default = Camera;
exports.default = _default;