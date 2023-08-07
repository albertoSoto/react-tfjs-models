"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scissor = exports.paper = exports.rock = void 0;

var _fingerpose = _interopRequireDefault(require("fingerpose"));

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
var rock = new _fingerpose.default.GestureDescription('rock');
exports.rock = rock;
rock.addCurl(_fingerpose.default.Finger.Thumb, _fingerpose.default.FingerCurl.FullCurl, 1.0);
rock.addCurl(_fingerpose.default.Finger.Index, _fingerpose.default.FingerCurl.FullCurl, 1.0);
rock.addCurl(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerCurl.FullCurl, 1.0);
rock.addCurl(_fingerpose.default.Finger.Ring, _fingerpose.default.FingerCurl.FullCurl, 1.0);
rock.addCurl(_fingerpose.default.Finger.Pinky, _fingerpose.default.FingerCurl.FullCurl, 1.0);
var paper = new _fingerpose.default.GestureDescription('paper');
exports.paper = paper;
paper.addCurl(_fingerpose.default.Finger.Thumb, _fingerpose.default.FingerCurl.NoCurl, 1.0);
paper.addCurl(_fingerpose.default.Finger.Index, _fingerpose.default.FingerCurl.NoCurl, 1.0);
paper.addDirection(_fingerpose.default.Finger.Index, _fingerpose.default.FingerDirection.VerticalUp, 1.0);
paper.addDirection(_fingerpose.default.Finger.Index, _fingerpose.default.FingerDirection.DiagonalUpLeft, 0.75);
paper.addDirection(_fingerpose.default.Finger.Index, _fingerpose.default.FingerDirection.DiagonalUpRight, 0.75);
paper.addCurl(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerCurl.NoCurl, 1.0);
paper.addDirection(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerDirection.VerticalUp, 1.0);
paper.addDirection(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerDirection.DiagonalUpLeft, 0.75);
paper.addDirection(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerDirection.DiagonalUpRight, 0.75);
paper.addCurl(_fingerpose.default.Finger.Ring, _fingerpose.default.FingerCurl.NoCurl, 1.0);
paper.addDirection(_fingerpose.default.Finger.Ring, _fingerpose.default.FingerDirection.VerticalUp, 1.0);
paper.addDirection(_fingerpose.default.Finger.Ring, _fingerpose.default.FingerDirection.DiagonalUpLeft, 0.75);
paper.addDirection(_fingerpose.default.Finger.Ring, _fingerpose.default.FingerDirection.DiagonalUpRight, 0.75);
paper.addCurl(_fingerpose.default.Finger.Pinky, _fingerpose.default.FingerCurl.NoCurl, 1.0);
paper.addDirection(_fingerpose.default.Finger.Pinky, _fingerpose.default.FingerDirection.VerticalUp, 1.0);
paper.addDirection(_fingerpose.default.Finger.Pinky, _fingerpose.default.FingerDirection.DiagonalUpLeft, 0.75);
paper.addDirection(_fingerpose.default.Finger.Pinky, _fingerpose.default.FingerDirection.DiagonalUpRight, 0.75);
var scissor = new _fingerpose.default.GestureDescription('scissor');
exports.scissor = scissor;
scissor.addCurl(_fingerpose.default.Finger.Thumb, _fingerpose.default.FingerCurl.HalfCurl, 0.5);
scissor.addCurl(_fingerpose.default.Finger.Thumb, _fingerpose.default.FingerCurl.NoCurl, 0.5);
scissor.addDirection(_fingerpose.default.Finger.Thumb, _fingerpose.default.FingerDirection.VerticalUp, 1.0);
scissor.addDirection(_fingerpose.default.Finger.Thumb, _fingerpose.default.FingerDirection.DiagonalUpLeft, 1.0);
scissor.addCurl(_fingerpose.default.Finger.Index, _fingerpose.default.FingerCurl.NoCurl, 1.0);
scissor.addDirection(_fingerpose.default.Finger.Index, _fingerpose.default.FingerDirection.VerticalUp, 0.75);
scissor.addDirection(_fingerpose.default.Finger.Index, _fingerpose.default.FingerDirection.DiagonalUpLeft, 1.0);
scissor.addCurl(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerCurl.NoCurl, 1.0);
scissor.addDirection(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerDirection.VerticalUp, 0.75);
scissor.addDirection(_fingerpose.default.Finger.Middle, _fingerpose.default.FingerDirection.DiagonalUpRight, 1.0);
scissor.addCurl(_fingerpose.default.Finger.Ring, _fingerpose.default.FingerCurl.FullCurl, 1.0);
scissor.addCurl(_fingerpose.default.Finger.Ring, _fingerpose.default.FingerCurl.HalfCurl, 0.5);
scissor.addCurl(_fingerpose.default.Finger.Pinky, _fingerpose.default.FingerCurl.FullCurl, 1.0);
scissor.addCurl(_fingerpose.default.Finger.Pinky, _fingerpose.default.FingerCurl.HalfCurl, 0.5);
scissor.setWeight(_fingerpose.default.Finger.Index, 2);
scissor.setWeight(_fingerpose.default.Finger.Middle, 2);