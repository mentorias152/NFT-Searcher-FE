import React, { useRef, useEffect, useState } from 'react';
import {Camera} from 'react-camera-pro';

import { RadioButtonChecked } from '@material-ui/icons';
import { zmp, Page, Link, Icon } from 'zmp-framework/react';

const iOSCamera = () => {

    const camera = useRef(null);
    const [image, setImage] = useState(null);
    
    return (
        <Page>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
    <div style={{width:'100%'}}>
      <Camera
        ref={camera}
        facingMode={"environment"}
        aspectRatio={4 / 3}
      ></Camera>
    </div>
      <RadioButtonChecked
        onClick={() => setImage(camera.current.takePhoto())}
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
        <Icon style={{color: "white",
          position: "absolute",
          left: 0,
          top: 0,
          margin: "10px"}} onClick={() => zmp.views.main.router.navigate('/index')} zmp="zi-arrow-left"/>

      <div
        style={{
            position: "absolute",
            display: "flex",
            bottom: 30,
            left: 10,
            margin: "10px"
        }}>

        <Icon zmp='zi-photo' size='40' color='white' />
        
      </div>
    </div>
    </Page>
    )
}

export default iOSCamera;