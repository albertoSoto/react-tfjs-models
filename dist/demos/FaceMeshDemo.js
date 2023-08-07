"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Camera = _interopRequireDefault(require("../components/Camera"));

var _FaceMesh = _interopRequireDefault(require("../components/FaceMesh"));

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
  width: 640,
  height: 480
};

var FaceMeshDemo = function FaceMeshDemo(props) {
  /**
   * Handles face estimation.
   * @param {Object} prediction
   */
  function onFaceEstimate(prediction) {
    console.log(prediction);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Camera.default, {
    style: style
  }, /*#__PURE__*/React.createElement(_FaceMesh.default, {
    backend: "webgl",
    onFaceEstimate: onFaceEstimate
  })));
};

var _default = FaceMeshDemo;
exports.default = _default;