import React, { useRef, useEffect } from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 360,
  height: 360,
  facingMode: "user"
}

const WebcamComponent = () => {
    const videoRef = useRef<Webcam>(null);

    const getVideo = () => {
        navigator.mediaDevices
          .getUserMedia({
            video: true
          })
          .then((stream) => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
          })
          .catch((err) => {
            console.error(err);
          });
      };

    useEffect(() => {
        getVideo();
      },[videoRef]);

    return (
        <div>
            <Webcam 
              audio={false}
              width={360}
              height={360}
              ref={videoRef}
              videoConstraints={videoConstraints}/>
        </div>
    );
}

export default WebcamComponent