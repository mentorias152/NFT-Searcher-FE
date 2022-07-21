import React, { useEffect, useState, useCallback } from 'react';
import {
  Page,
  zmp,
  Icon,
  useStore,
  Box,
  Link,
  Text,
  Title
} from 'zmp-framework/react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../components/crop-image';

const CropComponent = () => {

  const ratio = [
    {text: '1:1'},
    {text: '4:5'},
    {text: '4:3'},
    {text: '2:1'},
    {text: '5:7'},
    {text: '7:4'},
    {text: '16:9'},
    {text: '9:16'},
    {text: '7:5'},
    {text: '5:3'},
    {text: '2:3'},
    {text: '3:2'},
  ];

  const [chosen, setChosen] = useState('1:1');
  const [imageSrc, setImageSrc] = useState(useStore('image').data);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [aspect, setAspect] = useState(1 / 1);
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const userID = useStore('userID');

  if (typeof (imageSrc) == 'object') {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(imageSrc);
    fileReader.addEventListener("load", (e) => {
      setImageSrc(e.target.result);
    })
  }

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const handleCropClick = useCallback(async () => {
    zmp.store.dispatch('setLoading', 'true');
    zmp.views.main.router.navigate("/result");
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      )
      zmp.store.dispatch('setImage', { data: croppedImage });
      const blob = await fetch(croppedImage).then(res => res.blob());
      const file = new File([blob], 'screenshot.jpg', { type: blob.type });

      //create form
      var form = new FormData();
      form.append('data', file);

      //fetch data
      fetch('https://zalo-nft.nguyenanhdevops.live/users/' + userID.data + '/search', {
        body: form,
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(res => {
        let results = [];
        for (let i = 0; i < res.result.length; i++) {
          results[i] = res.result[i];
        }

        let str = 'false';
        zmp.store.dispatch('setResults', results);
        zmp.store.dispatch('setLoading', str);
      })
        .catch(err => console.error(err));

    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation])

  const handleRatio = (item) => {
    let str = ratio[item].text;
    let stra = [];
    stra = str.split(':');
    setAspect(parseInt(stra[0]) / parseInt(stra[1]))
    setChosen(ratio[item].text)

  }

  return (
    <Page name="crop"
      style={{
        backgroundColor: 'white'
      }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh'
        }}>
        <Cropper
          image={imageSrc}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          restrictPosition={false}
          showGrid={true}
        />
      </div>
      <div style={{
        width: '100%',
        height: '150px',
        bottom: '0px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            overflow: 'auto',
          }}>
          {Object.keys(ratio).map(item => {
            if (ratio[item].text == chosen)
              return (<Box p='5'
              style={{ 
                backgroundColor: '#404040', 
                borderRadius: '10px',
              }}>
                <Text style={{ color: 'white' }}> {ratio[item].text}</Text></Box>)
            else return (
              <div onClick={() => handleRatio(item)}>
            <Box p='5' >
              <Text style={{ color: 'white'}}> {ratio[item].text} </Text>
            </Box></div>)
})}
        </div>
        <div
          style={{
            width: '100%',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
          <Icon zmp='zi-check'
          onClick={handleCropClick}
            style={{ margin: '20px', color:'white' }} />
        </div>
      </div>

      <Title
        style={{
          position: 'absolute',
          top: 25,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          color: 'white'
        }}>
        Crop
      </Title>
      <Link back noLinkClass
        style={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          margin: '15px'
        }}>
        <Icon size='25' style={{ color: 'white' }} zmp="zi-arrow-left" /></Link>
    </Page>
  );
}
export default CropComponent;