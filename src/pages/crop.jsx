import React, { useEffect, useState, useCallback } from 'react';
import {
  Page,
  zmp,
  Button,
  useStore,
} from 'zmp-framework/react';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import NavbarBack from '../components/navbar-back';
import getCroppedImg from '../components/crop-image';

const CropPage = () => {

    const [imageSrc, setImageSrc] = useState(useStore('image').data);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

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
          setCroppedImage(croppedImage);
          zmp.store.dispatch('setImage' , {data: croppedImage});
          zmp.views.main.router.navigate('/preview');
        } catch (e) {
          console.error(e);
        }
      }, [croppedAreaPixels, rotation])

  return (
    <Page name="crop"
    style={{
    }}>
      <NavbarBack title='Crop'/>
      <div
      style={{
        position: 'relative',
        width:'100%',
        height:'75%'
  }}>
      <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1/1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            </div>
            <Button
                onClick={handleCropClick}
                typeName='primary'
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>Crop</Button>

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
export default CropPage;