import { Link } from 'react-router-dom';
import React from 'react';
export const pathRockPaperScissors = '/rockpaperscissors';
export const pathCartoonMirror = '/cartoonmirror';
export const pathFaceMesh = '/facemesh';
export const pathVideoPlayback = '/videoplayback';
/**
 * Router for application
 * @return {Element}
 * @constructor
 */

export default function Root() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "sidebar"
  }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: pathRockPaperScissors
  }, "RockPaperScissors")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: pathCartoonMirror
  }, "CartoonMirror")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: pathFaceMesh
  }, "FaceMesh")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: pathVideoPlayback
  }, "VideoPlayback"))))));
}