import React from 'react';
import { Page, Navbar, NavLeft, Link, Icon, NavTitle } from 'zmp-framework/react';
import Camera from '../components/camera';

const CameraPage = () => {
    return (
        <Page name='camera'>
            <Navbar>
                <NavLeft displayName="zmp-navleft">
                    <Link className="no-ripple" noLinkClass href='/index'>
                        <Icon zmp="zi-arrow-left" />
                    </Link>
                </NavLeft>
                <NavTitle>Camera</NavTitle>
            </Navbar>
            <Camera />
        </Page>
    );
}
export default CameraPage;