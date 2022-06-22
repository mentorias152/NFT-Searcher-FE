import React from 'react'
import { useStore, Page, Text, Button, zmp, Title } from 'zmp-framework/react';
import eth from '../static/icons/eth.jpg';
import NavbarBack from '../components/navbar-back';
import api from 'zmp-sdk';

const DetailPage = () => {
    const detail = useStore('detail');
    const str = detail.id.split(':');
    const raribleURL = 'https://rarible.com/token/' + str[1] + ':' + str[2];

    const handleRaribleClick = async () => {
        console.log(raribleURL);
        await api.openWebview({
            url: raribleURL,
            fail: (error) => {
                console.log(error);
            }
        });
    }

    return (
        <Page style={{ backgroundColor: 'white' }}>
            <NavbarBack title='Preview' />
            <div
                style={{
                    width: '100%',
                    backgroundColor: 'white'
                }}>
                <div
                    style={{
                        padding:'20px 20px 0px 20px'
                    }}>
                    <img src={detail.meta_content_url}
                        style={{
                            width: '100%',
                            borderRadius: '5%'
                        }} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                    <div
                        style={{
                            width:'50%',
                        padding: '25px 20px 0px 20px',
                        }}>
                        <Title size='xlarge'>
                            {detail.meta_name}
                        </Title>
                        {detail.lastsale_price == '-1' ? <Text>Not for sale</Text>
                            :
                            <Text
                                style={{
                                }}>On sale for <img src={eth} style={{ width: '12px' }} /> <strong>{detail.lastsale_price}</strong></Text>}
                    </div>
                    <div
                        style={{
                            width:'50%',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                        <Button typeName='tertiary' onClick={handleRaribleClick}>More details</Button>
                    </div>
                </div>
                <Text style={{ padding: '20px' }}>{detail.meta_description}</Text>
            </div>
        </Page>
    );
}

export default DetailPage;