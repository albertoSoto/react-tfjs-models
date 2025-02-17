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

import React from 'react';
import Root, {
  pathCartoonMirror,
  pathFaceMesh,
  pathVideoPlayback,
  pathRockPaperScissors,
} from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CartoonMirror from './demos/CartoonMirror';
import FaceMeshDemo from './demos/FaceMeshDemo';
import RockPaperScissors from './demos/RockPaperScissors';
import VideoPlaybackDemo from './demos/VideoPlaybackDemo';


/**
 * The app component.
 * @return {JSX.Element}
 */
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
    }, {
      path: pathRockPaperScissors,
      element: <RockPaperScissors/>,
    }, {
      path: pathCartoonMirror,
      element: <CartoonMirror/>,
    }, {
      path: pathFaceMesh,
      element: <FaceMeshDemo/>,
    }, {
      path: pathVideoPlayback,
      element: <VideoPlaybackDemo/>,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;
