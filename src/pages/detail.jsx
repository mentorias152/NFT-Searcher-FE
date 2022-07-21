import React, { useEffect, useState, useRef } from 'react'
import { useStore, Page, Text, Button, zmp, Title, Card, Icon, Link, Avatar } from 'zmp-framework/react';
import eth from '../static/icons/eth.jpg';
import api from 'zmp-sdk';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const DetailPage = () => {

    const detail = useStore('detail');
    const str = detail.id.split(':');
    const raribleURL = 'https://rarible.com/token/' + str[1] + ':' + str[2];

    var creatorID = detail.creators[0].account;
    creatorID = creatorID.split(':');

    const attributes = detail.attributes;

    const handleRaribleClick = async () => {
        console.log(raribleURL);
        api.openWebview({
            url: raribleURL,
            fail: (error) => {
                console.log(error);
            }
        });
    }

    const toast = useRef(null);
    const openToast = (message) => {
        toast.current = zmp.toast.create({
            text: message,
            position: 'bottom',
            closeTimeout: 3000
        });
        toast.current.open();
    }

    return (
        <Page style={{ backgroundColor: 'white' }}>
            <div style={{
                width: '100%',
                display: 'flex',
                flexAlign: 'column',
                justifyContent: 'center'
            }}>
                {/*Topbar and image */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        width: '100%',
                    }}>
                    <div
                        style={{
                            borderRadius: '20px',
                            display: 'flex',
                            flexAlign: 'column',
                            height: '50vh',
                            width: '100%',
                            justifyContent: 'center',
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        }}>
                        <img src={detail.meta_content_url}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                backgroundColor: 'white',
                                borderBottomRightRadius: '20px',
                                borderBottomLeftRadius: '20px',
                            }} />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                        <div
                            style={{
                                width: '60%',
                                padding: '25px 20px 0px 20px',
                            }}>
                            <Title size='xlarge'>
                                {detail.meta_name}
                            </Title>
                            {detail.price == '-1' ? <Text>Not for sale</Text>
                                :
                                <Text
                                    style={{
                                    }}>On sale for <img src={eth} style={{ width: '12px' }} /> <strong>{detail.price}</strong></Text>}
                        </div>
                        <div
                            style={{
                                width: '40%',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <Button typeName='tertiary' onClick={handleRaribleClick}>More details</Button>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                        }}><Title noSpace style={{ padding: '20px 20px 0px 20px' }}>Description</Title></div>
                    <Text style={{ padding: '0px 20px 0px 20px' }}>{detail.meta_description}</Text>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                        <div
                            style={{
                                width: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                            <Title style={{ padding: '20px 20px 0px 20px' }}>Creator</Title>
                            <CopyToClipboard text={creatorID[1]} onCopy={() => openToast('Copied creator ID succesfully')}>
                                <div
                                    style={{
                                        paddingLeft: '20px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Avatar avatarColor='orange-red' />
                                    <p
                                        style={{
                                            paddingLeft: '10px',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            width: '20vw',
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>{creatorID[1]}</p>
                                </div>
                            </CopyToClipboard>
                        </div>
                        <div
                            style={{
                                width: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                            <Title style={{ padding: '20px 20px 0px 20px' }}>Collection</Title>
                            <CopyToClipboard text={str[1]} onCopy={() => openToast('Copied collection ID successfully')}>
                                <div
                                    style={{
                                        paddingLeft: '20px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Avatar avatarColor='purple-blue' />
                                    <p
                                        style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            paddingLeft:'10px',
                                            width: '20vw',
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>{str[1]}</p>
                                </div>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            padding: '10px',
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                            }}>
                            <Title style={{ padding: '10px' }}>Properties</Title>
                        </div>
                        {Object.keys(attributes).map(item => (
                            <Card inset
                                style={{
                                    margin: '10px'
                                }}>
                                <Text style={{ color: 'grey' }} noSpace size='xxsmall'>{attributes[item].key}</Text>
                                <Text size='large'>{attributes[item].value}</Text>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Link back noLinkClass
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    margin: '15px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.3)',
                }}>
                <Icon size='25' style={{ color: 'white' }} zmp="zi-arrow-left" /></Link>
        </Page>
    );
}

export default DetailPage;