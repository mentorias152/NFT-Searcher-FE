import React, { useState } from 'react';
import { Page, zmp, useStore, Button, Icon, Link } from 'zmp-framework/react';
import FormData from 'form-data';
import temp from '../static/icons/temp.jpg';
import NavbarBack from '../components/navbar-back';

const PreviewPage = () => {
    const [previewImage, setPreviewImage] = useState(useStore('image').data);

    //handle if previewImage is a File
    if (typeof (previewImage) == 'object') {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(previewImage);
        fileReader.addEventListener("load", (e) => {
            setPreviewImage(e.target.result);
        })
    }

    let results = [];

    async function confirm() {

        //convert image into File
        const blob = await fetch(previewImage).then(res => res.blob());
        const file = new File([blob], 'screenshot.jpg', { type: blob.type });

        //create form
        var form = new FormData();
        form.append('file', file);

        //fetch data
        fetch('https://1387-115-79-58-54.ap.ngrok.io/image-upload', {
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

        zmp.views.main.router.navigate('/result');
    }

    return (
        <Page
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}>
                <NavbarBack title='Preview'/>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignTtems: 'center',
                    flexAlign: 'center',
                    height:'90vh'
                }}><img
                    style={{
                        width:'100%',
                        objectFit: 'contain'
                    }}
                    src={previewImage} />
            </div>
            
            <Button
                onClick={confirm}
                typeName='primary'
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>Confirm</Button>
        </Page>
    );
}

export default PreviewPage;