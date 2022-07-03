import React, {useEffect, useState} from 'react'
import { useStore, Page, Text, Button, zmp, Title, Card } from 'zmp-framework/react';
import eth from '../static/icons/eth.jpg';
import NavbarBack from '../components/navbar-back';
import api from 'zmp-sdk';
import { setNavbar } from '../components/set-navbar';

const DetailPage = () => {
    
    //set navbar
    setNavbar('Camera', true);

    const detail = useStore('detail');
    const str = detail.id.split(':');
    const raribleURL = 'https://rarible.com/token/' + str[1] + ':' + str[2];

    const attributes = [
        {
            'key': 'Attribute 1',
            'value': 'temp'
        },
        {
            'key': 'A2',
            'value': 'placeholder'
        },
        {
            'key': 'Att 3',
            'value': 'temp'
        },
        {
            'key': 'Attribute 4',
            'value': 'long value goes here'
        },
    ]

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
                    width: '100%'
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

            <Title style={{ paddingLeft:'20px'}}>Properties</Title>
            <div
                style={{
                    display:'flex',
                    flexWrap: 'wrap',
                    padding: '10px',
                }}>
                    {Object.keys(attributes).map(item => (
                        <Card inset
                        style={{
                            margin:'10px'
                        }}>
                            <Text style={{color: 'grey'}} noSpace size='xxsmall'>{attributes[item].key}</Text>
                            <Text size='large'>{attributes[item].value}</Text>
                        </Card>
                    ))}
            </div>
        </Page>
    );
}

export default DetailPage;