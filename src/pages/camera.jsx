import React from 'react';
import { Page, Button, Link, Icon, zmp } from 'zmp-framework/react';
import Camera from '../components/camera';
import NavbarBack from '../components/navbar-back';

const CameraPage = () => {
    zmp.store.dispatch('setLinkBack', '/camera');
    return (
        <Page name='camera'>
            <NavbarBack title='Camera'/>
            <Camera />
        </Page>
    );
}
export default CameraPage;