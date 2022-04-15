import React, { useRef, useEffect, useState } from 'react';
import Webcam from "react-webcam";
import { RadioButtonUnchecked, Translate } from '@material-ui/icons';
import { useStore, zmp, Button, Page } from 'zmp-framework/react';

const WebcamComponent = () => {

  const videoConstraints = {
    width: 360,
    height: 360,
    facingMode: "environment"
  };

  const camRef = useRef(null);
  const [photo, setHasPhoto] = useState(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = camRef.current;
        video.srcObject = stream;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [camRef]);

  const capture = React.useCallback(() => {
    const imageSrc = camRef.current.getScreenshot();
    setHasPhoto(imageSrc);
    zmp.store.dispatch('setImage', { data: photo });
    zmp.views.main.router.navigate('/preview');
  }, [camRef]);

  return (
    <Page
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Webcam
        audio={false}
        ref={camRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{
          height: '100%',
          width: '100%',
        }}
      ></Webcam>
      <RadioButtonUnchecked
        onClick={capture}
        style={{
          height: 40,
          width: 40,
          color: 'white',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }} />
    </Page>
  );
}

export default WebcamComponent