"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mousy;

var _react = _interopRequireWildcard(require("react"));

var _fiber = require("@react-three/fiber");

var _drei = require("@react-three/drei");

var _keypoints = require("../utils/keypoints");

var _three = require("three");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Renders a <Mousy/> component.
 *
 * @param {Props} props
 * @return {string} rendered JSX.
 */
function Mousy(props) {
  var kp;
  var group = (0, _react.useRef)();

  var _useGLTF = (0, _drei.useGLTF)('../../../mousy.glb'),
      nodes = _useGLTF.nodes,
      materials = _useGLTF.materials;

  (0, _fiber.useFrame)(function (state, delta) {
    kp = props.keypoints.current;

    if (kp != null) {
      nodes.Ch14.skeleton.bones[5].setRotationFromEuler((0, _keypoints.getHeadRotation)(kp));
      var lShoulder = new _three.Vector3(kp[11].z, kp[11].x, kp[11].y);
      var rShoulder = new _three.Vector3(kp[12].z, kp[12].x, kp[12].y);
      var lElbow = new _three.Vector3(kp[13].z, kp[13].x, kp[13].y);
      var rElbow = new _three.Vector3(kp[14].z, kp[14].x, kp[14].y);
      var lWrist = new _three.Vector3(kp[15].z, kp[15].x, kp[15].y);
      var rWrist = new _three.Vector3(kp[16].z, kp[16].x, kp[16].y);
      nodes.Ch14.skeleton.bones[8].setRotationFromQuaternion((0, _keypoints.quaternionFrom)(rShoulder, lShoulder, lElbow));
      nodes.Ch14.skeleton.bones[9].setRotationFromQuaternion((0, _keypoints.quaternionFrom)(lShoulder, lElbow, lWrist));
      nodes.Ch14.skeleton.bones[28].setRotationFromQuaternion((0, _keypoints.quaternionFrom)(rElbow, rShoulder, lShoulder));
      nodes.Ch14.skeleton.bones[29].setRotationFromQuaternion((0, _keypoints.quaternionFrom)(rWrist, rElbow, rShoulder));
    }
  });
  return /*#__PURE__*/_react.default.createElement("group", _extends({
    ref: group
  }, props, {
    dispose: null
  }), /*#__PURE__*/_react.default.createElement("group", {
    name: "Armature",
    rotation: [Math.PI / 2, 0, 0],
    scale: [0.01, 0.01, 0.01]
  }, /*#__PURE__*/_react.default.createElement("primitive", {
    object: nodes.mixamorigHips
  }), /*#__PURE__*/_react.default.createElement("skinnedMesh", {
    geometry: nodes.Ch14.geometry,
    material: materials.Ch14_Body,
    skeleton: nodes.Ch14.skeleton
  })));
}