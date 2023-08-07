"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawHand = drawHand;
exports.drawPose = drawPose;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

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
var fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20]
};
var scoreThreshold = 0.65;
/**
 * Draws a hand.
 * @param {Array<number>} landmarks
 * @param {CanvasRenderingContext2D} ctx
 */

function drawHand(landmarks, ctx) {
  for (var j = 0; j < Object.keys(fingerJoints).length; j++) {
    var finger = Object.keys(fingerJoints)[j]; //  Loop through pairs of joints

    for (var k = 0; k < fingerJoints[finger].length - 1; k++) {
      // Get pairs of joints
      var firstJointIndex = fingerJoints[finger][k];
      var secondJointIndex = fingerJoints[finger][k + 1];
      drawPath(landmarks[firstJointIndex], landmarks[secondJointIndex], ctx);
    }
  }

  landmarks.forEach(function (landmark) {
    drawPoint(landmark[0], landmark[1], ctx);
  });
}
/**
 * Draws a point.
 * @param {number} x
 * @param {number} y
 * @param {CanvasRenderingContext2D} ctx
 */


function drawPoint(x, y, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}
/**
 * Draws a path.
 * @param {number} from
 * @param {number} to
 * @param {CanvasRenderingContext2D} ctx
 */


function drawPath(from, to, ctx) {
  ctx.beginPath();
  ctx.moveTo(from[0], from[1]);
  ctx.lineTo(to[0], to[1]);
  ctx.strokeStyle = 'lime';
  ctx.lineWidth = 4;
  ctx.stroke();
}
/**
 * Draws a pose.
 * @param {Object} predictions
 * @param {Array<Object>} keypointIndices
 * @param {Array<Object>} adjacentPairs
 * @param {CanvasRenderingContext2D} ctx
 */


function drawPose(predictions, keypointIndices, adjacentPairs, ctx) {
  var keypoints = predictions.keypoints;
  drawKeypoints(keypoints, keypointIndices, ctx);
  drawSkeleton(keypoints, adjacentPairs, ctx);
}
/**
 * Draws all keypoints. The keypoints to the left are in lime, the keypoints to
 * the right are in red, the keypoints to the middle are in yellow.
 * @param {Array<Object>} keypoints
 * @param {Array<Object>} keypointIndices
 * @param {CanvasRenderingContext2D} ctx
 */


function drawKeypoints(keypoints, keypointIndices, ctx) {
  var _iterator = _createForOfIteratorHelper(keypointIndices.middle),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      drawKeypoint(keypoints[i], 'yellow', ctx);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(keypointIndices.left),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _i = _step2.value;
      drawKeypoint(keypoints[_i], 'lime', ctx);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(keypointIndices.right),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _i2 = _step3.value;
      drawKeypoint(keypoints[_i2], 'red', ctx);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
/**
 * Draws a keypoint.
 * @param {Object} keypoint
 * @param {string} color
 * @param {CanvasRenderingContext2D} ctx
 */


function drawKeypoint(keypoint, color, ctx) {
  var score = keypoint.score != null ? keypoint.score : 1;

  if (score >= scoreThreshold) {
    ctx.beginPath();
    ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
}
/**
 * Draws a skeleton.
 * @param {Array<Object>} keypoints
 * @param {Array<Object>} adjacentPairs
 * @param {CanvasRenderingContext2D} ctx
 */


function drawSkeleton(keypoints, adjacentPairs, ctx) {
  ctx.fillStyle = 'White';
  ctx.strokeStyle = 'White';
  ctx.lineWidth = 3;
  adjacentPairs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        i = _ref2[0],
        j = _ref2[1];

    var kp1 = keypoints[i];
    var kp2 = keypoints[j]; // If score is null, just show the keypoint.

    var score1 = kp1.score != null ? kp1.score : 1;
    var score2 = kp2.score != null ? kp2.score : 1;

    if (score1 >= scoreThreshold && score2 >= scoreThreshold) {
      ctx.beginPath();
      ctx.moveTo(kp1.x, kp1.y);
      ctx.lineTo(kp2.x, kp2.y);
      ctx.stroke();
    }
  });
}