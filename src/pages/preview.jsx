import React from 'react';
import { Page, zmp, useStore, Button, Icon, Link } from 'zmp-framework/react';
import FormData from 'form-data';
import temp from '../static/icons/temp.jpg';

const PreviewPage = () => {
    const previewImage = useStore('image').data;
    let results = [];

    async function confirm() {

        //convert image into File
        const blob = await fetch(previewImage).then(res => res.blob());
        const file = new File([blob], 'screenshot.jpg', { type: blob.type });

        //create form
        var form = new FormData();
        form.append('file', file);

        //fetch data
        fetch('https://0662-115-79-58-54.ap.ngrok.io/image-upload', {
            body: form,
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(res => {

            for (let i = 0; i < res.result.length; i++) {
                results[i] = res.result[i];
                console.log(results[i]);
            }

            zmp.store.dispatch('setResults', results);
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
                backgroundColor: 'white'
            }}>
            <img
                style={{
                    position: 'relative',
                    width: '100%',
                }}
                src={previewImage} />
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    top: 0,
                    margin: '10px'
                }}>
                <Link back>
                    <Icon zmp='zi-arrow-left' color='white' />
                </Link>
            </div>

            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    top: 0,
                    right: 0,
                    margin: '10px'
                }}>
                <Icon zmp='zi-unfold-more' color='white' />
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