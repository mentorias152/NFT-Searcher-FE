import React, { useEffect, useState } from 'react';
import { Page, zmp, useStore, Button, Card } from 'zmp-framework/react';
import NavbarBack from '../components/navbar-back';

const PreviewPage = () => {
    const previewImage = useStore('image').data;
    const [imgSrc, setImgSrc] = useState(null);

    const image = useStore('image');

    useEffect(() => {
        setImgSrc(previewImage);
        console.log('Load image succeed!');
    }, [])

    async function confirm() {
        console.log(image.data)
        const res = await fetch('https://60cc-2001-ee0-500f-f5d0-9de5-ee4f-6115-8c7.ap.ngrok.io/image-upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                file: image.data
            }
        })
        console.log(res.json());
        //open loading toast
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
                backgroundColor: 'white'
            }}>
            <NavbarBack title='Preview' />
            <img
                style={{
                    position: 'relative',
                    height: '90%',
                    width: '100%',
                }}
                src={imgSrc} />
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