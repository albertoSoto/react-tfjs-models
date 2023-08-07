import {Link} from 'react-router-dom';
import React from 'react';

const pathRockPaperScissors = '/rockpaperscissors';
const pathCartoonMirror = '/cartoonmirror';
const pathFaceMesh = '/facemesh';
const pathVideoPlayback = '/videoplayback';
/**
 * Router for application
 * @return {Element}
 * @constructor
 */
export default function Root() {
  return (<>
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={pathRockPaperScissors}>
                            RockPaperScissors
            </Link>
          </li>
          <li>
            <Link to={pathCartoonMirror}>CartoonMirror</Link>
          </li>
          <li>
            <Link to={pathFaceMesh}>FaceMesh</Link>
          </li>
          <li>
            <Link to={pathVideoPlayback}>VideoPlayback</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>);
}
