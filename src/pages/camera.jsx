import React from 'react';
import { Page, Button, Link, Icon } from 'zmp-framework/react';
import Camera from '../components/camera';
import NavbarBack from '../components/navbar-back';

const CameraPage = () => {
    return (
        <Page name='camera'>
            <NavbarBack title='Camera'/>
            <Camera />
        </Page>
    );
}
export default CameraPage;