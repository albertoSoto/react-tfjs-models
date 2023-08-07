"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Camera = _interopRequireDefault(require("../components/Camera"));

var _BlazePose = _interopRequireDefault(require("../components/BlazePose"));

var _fiber = require("@react-three/fiber");

var _Mousy = _interopRequireDefault(require("../components/Mousy"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2021-2022 The SeedV Lab.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var style = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: -1,
  width: 160,
  height: 120
};

var CartoonMirror = function CartoonMirror(props) {
  var keypoints = (0, _react.useRef)();

  var onPoseEstimate = function onPoseEstimate(pose) {
    keypoints.current = pose.keypoints;
  };

  var lights = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ambientLight", {
    intensity: 0.4
  }), /*#__PURE__*/React.createElement("directionalLight", {
    castShadow: true,
    position: [-8, 16, -8],
    intensity: 0,
    "shadow-mapSize-width": 1024,
    "shadow-mapSize-height": 1024,
    "shadow-camera-far": 50,
    "shadow-camera-left": -10,
    "shadow-camera-right": 10,
    "shadow-camera-top": 10,
    "shadow-camera-bottom": -10
  }), /*#__PURE__*/React.createElement("pointLight", {
    position: [0, 50, 0],
    intensity: 2
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Camera.default, {
    style: style
  }, /*#__PURE__*/React.createElement(_BlazePose.default, {
    backend: "wasm",
    runtime: "mediapipe",
    maxPoses: 1,
    flipHorizontal: true,
    onPoseEstimate: onPoseEstimate
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 600,
      height: 600
    }
  }, /*#__PURE__*/React.createElement(_fiber.Canvas, {
    colorManagement: true,
    shadowMap: true,
    camera: {
      position: [0, 0, 2],
      fov: 60
    }
  }, lights, /*#__PURE__*/React.createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement("mesh", {
    position: [0, -1, 0]
  }, /*#__PURE__*/React.createElement(_Mousy.default, {
    keypoints: keypoints
  }))))));
};

var _default = CartoonMirror;
exports.default = _default;