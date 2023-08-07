"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _global = require("./global");

var _useModel = _interopRequireDefault(require("../hooks/useModel"));

var _BlazePoseLoader = _interopRequireDefault(require("../models/BlazePoseLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BlazePose = function BlazePose(props) {
  var videoState = (0, _react.useContext)(_global.VideoContext);
  var loader = props.loader || _BlazePoseLoader.default;
  var detector = (0, _useModel.default)(loader, props);
  var _props$maxPoses = props.maxPoses,
      maxPoses = _props$maxPoses === void 0 ? 1 : _props$maxPoses,
      _props$flipHorizontal = props.flipHorizontal,
      flipHorizontal = _props$flipHorizontal === void 0 ? false : _props$flipHorizontal,
      onPoseEstimate = props.onPoseEstimate;
  /**
   * Processes the video image with the pose estimator.
   *
   * @param {HTMLMediaElement} video
   */

  var onEstimate = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(video) {
      var poseDetector, poses;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            poseDetector = detector.current;

            if (!(poseDetector !== null)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return poseDetector.estimatePoses(video, {
              maxPoses: maxPoses,
              flipHorizontal: flipHorizontal
            });

          case 4:
            poses = _context.sent;
            poses.forEach(function (pose) {
              onPoseEstimate(pose);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [detector, maxPoses, flipHorizontal, onPoseEstimate]);
  (0, _react.useEffect)(function () {
    onEstimate(videoState.video);
  }, [videoState, onEstimate]);
  return null;
};

var _default = BlazePose;
exports.default = _default;