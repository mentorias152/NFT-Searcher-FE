import React from 'react';
import { Page, Button } from 'zmp-framework/react';
import WebcamComponent from '../components/camera';
import NavbarBack from '../components/navbar-back';

const CameraPage = () => {
        return (
            <Page name='camera'>
                <NavbarBack title='Camera' />
                <WebcamComponent />
                <Button>Huy</Button>
            </Page>
        );
}
export default CameraPage;