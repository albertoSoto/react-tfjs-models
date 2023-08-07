"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Camera = _interopRequireDefault(require("../components/Camera"));

var _fingerpose = _interopRequireDefault(require("fingerpose"));

var _react = require("react");

var _gesture = require("../utils/gesture");

var _HandPose = _interopRequireDefault(require("../components/HandPose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var style = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: -1,
  width: 640,
  height: 480
};
var emojiMap = {
  'scissor': '✌🏻',
  'rock': '✊',
  'paper': '✋'
};

var RockPaperScissors = function RockPaperScissors(props) {
  var estimator = (0, _react.useRef)(new _fingerpose.default.GestureEstimator([_gesture.rock, _gesture.paper, _gesture.scissor]));

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      gesture = _useState2[0],
      setGesture = _useState2[1];
  /**
   * Handles hand estimate.
   * @param {Object} predictions
   */


  function onHandEstimate(predictions) {
    var estimated = estimator.current.estimate(predictions.landmarks, 7.5);

    if (estimated.gestures.length > 0) {
      var best = estimated.gestures.reduce(function (a, b) {
        return a.confidence > b.confidence ? a : b;
      });

      if (gesture !== best.name) {
        setGesture(best.name);
      }
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 32
    }
  }, /*#__PURE__*/React.createElement("h1", null, emojiMap[gesture])), /*#__PURE__*/React.createElement(_Camera.default, {
    style: style
  }, /*#__PURE__*/React.createElement(_HandPose.default, {
    backend: "webgl",
    onHandEstimate: onHandEstimate
  })));
};

var _default = RockPaperScissors;
exports.default = _default;