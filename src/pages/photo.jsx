import React from 'react';
import { Page } from 'zmp-framework/react';
import NavbarBack from '../components/navbar-back';

const PhotoPage = () => {
    return(
        <Page name='photo'>
            <NavbarBack title='Gallery'/>
        </Page>
    );
}

export default PhotoPage;