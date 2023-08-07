"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Root;
exports.pathVideoPlayback = exports.pathFaceMesh = exports.pathCartoonMirror = exports.pathRockPaperScissors = void 0;

var _reactRouterDom = require("react-router-dom");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathRockPaperScissors = '/rockpaperscissors';
exports.pathRockPaperScissors = pathRockPaperScissors;
var pathCartoonMirror = '/cartoonmirror';
exports.pathCartoonMirror = pathCartoonMirror;
var pathFaceMesh = '/facemesh';
exports.pathFaceMesh = pathFaceMesh;
var pathVideoPlayback = '/videoplayback';
/**
 * Router for application
 * @return {Element}
 * @constructor
 */

exports.pathVideoPlayback = pathVideoPlayback;

function Root() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "sidebar"
  }, /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: pathRockPaperScissors
  }, "RockPaperScissors")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: pathCartoonMirror
  }, "CartoonMirror")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: pathFaceMesh
  }, "FaceMesh")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: pathVideoPlayback
  }, "VideoPlayback"))))));
}