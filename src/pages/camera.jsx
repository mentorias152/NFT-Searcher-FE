import React from 'react';
import { Page, Button, Link, Icon } from 'zmp-framework/react';
import WebcamComponent from '../components/camera';

const CameraPage = () => {
    return (
        <Page name='camera'>
            <WebcamComponent />
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    top: 10,
                    margin: '10px'
                }}>
                <Link back>
                    <Icon zmp='zi-arrow-left' color='white' />
                </Link>
            </div>
        </Page>
    );
}
export default CameraPage;