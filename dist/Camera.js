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
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { VideoContext } from './global';
import { jsx as _jsx } from "custom-jsx-library/jsx-runtime";
import { jsxs as _jsxs } from "custom-jsx-library/jsx-runtime";
const initVideoState = {
  video: null
};

const Camera = props => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoState, setVideoState] = useState(initVideoState);
  const requestRef = useRef(null);
  /**
   * Handles animation frames.
   */

  const onAnimate = useCallback(() => {
    if (webcamRef.current != null && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      setVideoState(prevState => {
        return { ...prevState,
          video: video
        };
      });
    }

    requestRef.current = requestAnimationFrame(onAnimate);
  }, []);
  useEffect(() => {
    onAnimate();
    return () => cancelAnimationFrame(requestRef.current);
  }, [onAnimate]);
  return _jsxs("div", {
    children: [_jsx(Webcam, {
      ref: webcamRef,
      mirrored: true,
      style: props.style
    }), _jsx("canvas", {
      ref: canvasRef,
      style: props.style
    }), _jsx(VideoContext.Provider, {
      value: videoState,
      children: props.children
    })]
  });
};

export default Camera;