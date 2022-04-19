import React, { useEffect, useState } from 'react';
import { Page, zmp, useStore, Button, Input } from 'zmp-framework/react';
import NavbarBack from '../components/navbar-back';
import FormData from 'form-data';
import temp from '../static/icons/temp.jpg';
import store from '../store';

const PreviewPage = () => {
    const previewImage = useStore('image').data;
    let results = [];

    async function confirm() {
        //convert image into File
        const blob = await fetch(previewImage).then(res => res.blob());
        const file = new File([blob], 'screenshot.jpg', {type: blob.type});

        //fetch data from api
        var form = new FormData();
        form.append('file', file);
        const res = await fetch('https://c33e-27-3-9-158.ngrok.io/image-upload', {
            body: form,
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .catch(err => console.error(err));

        for (let i = 0; i < res.result.length; i++) {
            results[i] = res.result[i];
            console.log(results[i]);
        }

        zmp.store.dispatch('setResults', results);

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
                src={previewImage} />
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