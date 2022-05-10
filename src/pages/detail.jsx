import React from 'react'
import { useStore, Page, Card, Grid } from 'zmp-framework/react';
import DetailItem from '../components/detail-item';
import NavbarBack from '../components/navbar-back';

const DetailPage = () => {
    const detail = useStore('detail');
    const str = detail.id.split(':');
    return (
        <Page>
            <NavbarBack title='Detail' />
                <DetailItem/>
        </Page>
    );
}

export default DetailPage;