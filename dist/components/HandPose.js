"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _global = require("./global");

var _useModel = _interopRequireDefault(require("../hooks/useModel"));

var _HandPoseLoader = _interopRequireDefault(require("../models/HandPoseLoader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var HandPose = function HandPose(props) {
  var videoState = (0, _react.useContext)(_global.VideoContext);
  var detector = (0, _useModel.default)(_HandPoseLoader.default, props);
  var onHandEstimate = props.onHandEstimate;
  /**
   * Processes the video image with the pose estimator.
   *
   * @param {HTMLMediaElement} video
   */

  var onEstimate = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(video) {
      var hands, predictions;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              hands = detector.current;

              if (!(hands !== null)) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return hands.estimateHands(video);

            case 4:
              predictions = _context.sent;
              predictions.forEach(function (prediction) {
                onHandEstimate(prediction);
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [detector, onHandEstimate]);
  (0, _react.useEffect)(function () {
    onEstimate(videoState.video);
  }, [videoState, onEstimate]);
  return null;
};

var _default = HandPose;
exports.default = _default;