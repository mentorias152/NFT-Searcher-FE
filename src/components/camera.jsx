import React, { useRef, useEffect } from 'react';
import { Webcam } from 'react-webcam';
import { Page, Icon  } from 'zmp-framework/react';


const WebcamComponent = () => {
    const videoRef = React.useRef(null);
    var temp = '';

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
            <video
                id='cam'
                ref={videoRef}
                style={{ height: 420, width: 420,}}
            />
        </div>
    );
}

export default WebcamComponent