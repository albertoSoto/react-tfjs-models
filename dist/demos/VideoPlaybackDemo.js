"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./VideoPlaybackDemo.css");

var _react = require("react");

var posedetection = _interopRequireWildcard(require("@tensorflow-models/pose-detection"));

var _handpose = require("../utils/handpose");

var _MoveNetLoader = _interopRequireDefault(require("../models/MoveNetLoader"));

var _VideoPlayback = _interopRequireDefault(require("../components/VideoPlayback"));

var _BlazePose = _interopRequireDefault(require("../components/BlazePose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VideoPlaybackDemo = function VideoPlaybackDemo(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedFile = _useState2[0],
      setSelectedFile = _useState2[1];

  var canvasRef = (0, _react.useRef)(null);
  var model = posedetection.SupportedModels.MoveNet;
  var keypointIndices = posedetection.util.getKeypointIndexBySide(model);
  var adjacentPairs = posedetection.util.getAdjacentPairs(model);
  var style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9
  };

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      videoSource = _useState4[0],
      setVideoSource = _useState4[1];

  var fileSelectedHandler = function fileSelectedHandler(event) {
    setSelectedFile(event.target.files[0]);
  };

  var fileUploadHandler = function fileUploadHandler() {
    setVideoSource(URL.createObjectURL(selectedFile));
  };

  var onPoseEstimate = function onPoseEstimate(pose) {
    var ctx = canvasRef.current.getContext('2d');
    var canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    (0, _handpose.drawPose)(pose, keypointIndices, adjacentPairs, ctx);
  };

  var setCanvas = function setCanvas(canvas) {
    canvasRef.current = canvas;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, videoSource == null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    onChange: fileSelectedHandler,
    accept: "video/*"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: fileUploadHandler
  }, "Upload")), /*#__PURE__*/React.createElement(_VideoPlayback.default, {
    style: style,
    videoSource: videoSource,
    setCanvas: setCanvas
  }, /*#__PURE__*/React.createElement(_BlazePose.default, {
    backend: "webgl",
    runtime: "tfjs",
    type: posedetection.movenet.modelType.SINGLEPOSE_THUNDER,
    maxPoses: 1,
    flipHorizontal: true,
    loader: _MoveNetLoader.default,
    onPoseEstimate: onPoseEstimate
  })));
};

var _default = VideoPlaybackDemo;
exports.default = _default;