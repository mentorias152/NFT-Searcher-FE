import React, { useEffect, useState, useCallback } from 'react';
import {
  Page,
  zmp,
  Icon,
  useStore,
  Fab,
} from 'zmp-framework/react';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import NavbarBack from '../components/navbar-back';
import getCroppedImg from '../components/crop-image';

const CropComponent = () => {

  const api = useStore('api').data;

  const [imageSrc, setImageSrc] = useState(useStore('image').data);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

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
        try {
          const croppedImage = await getCroppedImg(
            imageSrc,
            croppedAreaPixels,
            rotation
          )
          zmp.store.dispatch('setImage' , {data: croppedImage});
          const blob = await fetch(croppedImage).then(res => res.blob());
        const file = new File([blob], 'screenshot.jpg', { type: blob.type });

        //create form
        var form = new FormData();
        form.append('file', file);

        //fetch data
        fetch(api, {
            body: form,
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(res => {

            for (let i = 0; i < res.result.length; i++) {
                results[i] = res.result[i];
            }

            let str = 'false';
            zmp.store.dispatch('setResults', results);
            zmp.store.dispatch('setLoading', str);
        })
            .catch(err => console.error(err));

        zmp.views.main.router.navigate('/loading');

        } catch (e) {
          console.error(e);
        }
      }, [croppedAreaPixels, rotation])

  return (
    <Page name="crop"
    style={{
      backgroundColor: 'white'
    }}>
      <NavbarBack title='Crop'/>
      <div
      style={{
        position: 'relative',
        width:'100%',
        height:'75vh'
  }}>
      <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1/1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              restrictPosition={false}
            />
            </div>
            <Fab position='right-bottom' onClick={handleCropClick}>
                <Icon zmp='zi-arrow-right'/>
            </Fab>

            <div style={{
                margin:'20px'
            }}>
                <p>Rotation</p>
                <Slider 
                value={rotation}
            min={0}
            max={360}
            step={1}
            onChange={(e, rotation) => setRotation(rotation)}/>
            </div>
    </Page>
  );
}
export default CropComponent;