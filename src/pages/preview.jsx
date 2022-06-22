import React, { useState } from 'react';
import { Page, zmp, useStore, Button, Fab, Icon } from 'zmp-framework/react';
import FormData from 'form-data';
import NavbarBack from '../components/navbar-back';
import {FiCrop} from 'react-icons/fi';

const PreviewPage = () => {
    const [previewImage, setPreviewImage] = useState(useStore('image').data);
    const api = useStore('api').data;

    //handle if previewImage is a File
    if (typeof (previewImage) == 'object') {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(previewImage);
        fileReader.addEventListener("load", (e) => {
            setPreviewImage(e.target.result);
        })
    }

    let results = [];

    const handleCropClick = () => {
        zmp.views.main.router.navigate('/crop');
    }

    async function handleConfirmButtonClick() {

        //convert image into File
        const blob = await fetch(previewImage).then(res => res.blob());
        const file = new File([blob], 'screenshot.jpg', { type: blob.type });

        //create form
        var form = new FormData();
        form.append('file', file);

        //fetch data
        fetch("http://localhost:9090/api/v1/upload", {
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
    }

    return (
        <Page
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white'
            }}>
                <NavbarBack title='Preview'/>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignTtems: 'center',
                    flexAlign: 'center',
                    height:'90vh',
                    width:'100%',
                }}><img
                    style={{
                        width:'100%',
                        objectFit: 'contain'
                    }}
                    src={previewImage} />
            </div>
            <div
            style={{
                width:'100%',
                position: 'absolute',
          bottom: 0,
          backgroundColor:'white',
          display: 'flex',
          flexDirection: 'row'
            }}>
                <Button typeName='tertiary' style={{width:'50%', margin: '20px 20px 20px 10px'}}
                    onClick={() => zmp.views.main.router.navigate('/crop')}
                >Crop</Button>
                <Button typeName='primary' style={{width:'50%', margin: '20px 20px 20px 10px'}}
                    onClick={handleConfirmButtonClick}
                >Confirm</Button>
            </div>
        </Page>
    );
}

export default PreviewPage;