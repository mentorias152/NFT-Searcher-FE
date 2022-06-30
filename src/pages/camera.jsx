import React, { useRef, useEffect } from 'react';
import Webcam from "react-webcam";
import { RadioButtonChecked } from '@material-ui/icons';
import { zmp, Page, Link, Icon } from 'zmp-framework/react';
import { setNavbar } from '../components/set-navbar';

const CameraPage = () => {

  //set navbar
  setNavbar('Camera', true);

  const videoConstraints = {
    facingMode: "environment"
  };

  const camRef = useRef(null);

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
    zmp.store.dispatch('setLinkBack', { data: '/camera' });
    zmp.store.dispatch('setImage', { data: camRef.current.getScreenshot() });
    zmp.views.main.router.navigate('/preview');
  }, [camRef]);

  const selectFile = () => {
    document.getElementById('selectFile').click();
  }

  const setSelectedFile = (file) => {
    zmp.store.dispatch('setLinkBack', { data: '/camera' });
    zmp.store.dispatch('setImage', { data: file });
    zmp.views.main.router.navigate('/preview');
  }

  return (
    <Page
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Webcam
        audio={false}
        ref={camRef}
        screenshotFormat='image/jpeg'
        videoConstraints={videoConstraints}
        style={{
          height: '100%',
          width: '100%',
        }}
      ></Webcam>

      <RadioButtonChecked
        onClick={capture}
        style={{
          height: 60,
          width: 60,
          color: 'white',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer'
        }} />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          bottom: 30,
          margin: '10px'
        }}>

        <Icon zmp='zi-photo' size='40' color='white' onClick={selectFile} />
        <input id='selectFile' type='file' accept='image/*' style={{ display: 'none' }}
          onChange={(e) => setSelectedFile(e.target.files[0])}></input>
      </div>

    </Page>
  );
}
export default CameraPage;