"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _root = _interopRequireWildcard(require("./routes/root"));

var _reactRouterDom = require("react-router-dom");

var _CartoonMirror = _interopRequireDefault(require("./demos/CartoonMirror"));

var _FaceMeshDemo = _interopRequireDefault(require("./demos/FaceMeshDemo"));

var _RockPaperScissors = _interopRequireDefault(require("./demos/RockPaperScissors"));

var _VideoPlaybackDemo = _interopRequireDefault(require("./demos/VideoPlaybackDemo"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2021-2022 The SeedV Lab.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The app component.
 * @return {JSX.Element}
 */
function App() {
  var router = (0, _reactRouterDom.createBrowserRouter)([{
    path: '/',
    element: /*#__PURE__*/_react.default.createElement(_root.default, null)
  }, {
    path: _root.pathRockPaperScissors,
    element: /*#__PURE__*/_react.default.createElement(_RockPaperScissors.default, null)
  }, {
    path: _root.pathCartoonMirror,
    element: /*#__PURE__*/_react.default.createElement(_CartoonMirror.default, null)
  }, {
    path: _root.pathFaceMesh,
    element: /*#__PURE__*/_react.default.createElement(_FaceMeshDemo.default, null)
  }, {
    path: _root.pathVideoPlayback,
    element: /*#__PURE__*/_react.default.createElement(_VideoPlaybackDemo.default, null)
  }]);
  return /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.RouterProvider, {
    router: router
  }));
}

var _default = App;
exports.default = _default;