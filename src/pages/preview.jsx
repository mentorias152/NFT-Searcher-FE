import React, { useEffect, useState } from 'react';
import { Page, zmp, useStore, Button } from 'zmp-framework/react';
import NavbarBack from '../components/navbar-back';
import temp from '../static/icons/512x512.png';


const PreviewPage = () => {
    const previewImage = useStore('image').data;

    const confirm = () => {
        //call api
        //open loading toast
        //navigate to /
    }

    return (
        <Page
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <NavbarBack title='Preview'/>
            <img src={temp} />
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