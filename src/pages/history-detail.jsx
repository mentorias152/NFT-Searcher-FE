import React, { useEffect, useState } from 'react'
import { useStore, Page, Swiper, SwiperSlide, Title, Card, Box, Text } from 'zmp-framework/react';
import temp from '../static/icons/temp.jpg';
import NavbarBack from '../components/navbar-back';
import { setNavbar } from '../components/set-navbar';

const HistoryDetail = () => {

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
                        height: '20vh',
                        width: '100%',
                        backgroundColor: '#1843ef',
                        top: '0',
                        borderBottomLeftRadius: '40px',
                        borderBottomRightRadius: '40px',
                    }}></div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        top: '5vh',
                        position: 'absolute',
                        width: '100%',
                        borderRadius: '20px',
                    }}>
                    <div
                        style={{
                            borderRadius: '20px',
                            display: 'flex',
                            flexAlign: 'column',
                            height: '30vh',
                            width: '90%',
                            justifyContent: 'center',
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        }}>
                        <img src={temp}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                backgroundColor: 'white',
                                borderRadius: '20px',
                            }} />
                    </div>
                    <Box>
                        <Title textAlign='center' size='xlarge'>Date</Title>
                        <Title textAlign='center' size='small' style={{ color: 'grey' }}>Time</Title>
                    </Box>
                    <Card inset
                        style={{ width: '90%' }}>
                        <Box>
                            <Title textAlign='center'>Results</Title>
                        </Box>
                        <Swiper effect='creative' centeredSlides={true} slidesPerView={1} pagination>
                            <SwiperSlide>
                                <div onClick={() => console.log('clicked')}>
                                <img src={temp}
                                    style={{
                                        width: '100%',
                                        borderRadius: '5px'
                                    }} />
                                <div
                                    style={{ margin: '10px' }}>
                                    <Title
                                        size='normal'>
                                        NFT Name 1
                                    </Title>

                                </div>
                                <Card
                                    style={{
                                        backgroundColor: '#ededed',
                                        borderRadius: '5px',
                                    }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                        <div style={{ width: '50%' }}>
                                            <Text
                                                style={{ color: 'gray' }}>
                                                Price
                                            </Text>
                                            <Text>No data yet</Text>
                                        </div>
                                        <div style={{ width: '50%' }}>
                                            <Text
                                                style={{ color: 'gray' }}>
                                                Highest bid
                                            </Text>
                                            <Text>No data yet</Text>
                                        </div>
                                    </div>
                                </Card>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src={temp}
                                    style={{
                                        width: '100%',
                                        borderRadius: '5px'
                                    }} />
                                <div
                                    style={{ margin: '10px' }}>
                                    <Title
                                        size='normal'
                                    >
                                        NFT Name 1
                                    </Title>

                                </div>
                                <Card
                                    style={{
                                        backgroundColor: '#ededed',
                                        borderRadius: '5px',
                                    }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                        <div style={{ width: '50%' }}>
                                            <Text
                                                style={{ color: 'gray' }}>
                                                Price
                                            </Text>
                                            <Text>No data yet</Text>
                                        </div>
                                        <div style={{ width: '50%' }}>
                                            <Text
                                                style={{ color: 'gray' }}>
                                                Highest bid
                                            </Text>
                                            <Text>No data yet</Text>
                                        </div>
                                    </div>
                                </Card>
                                </SwiperSlide>
                        </Swiper>
                    </Card>
                </div>
            </div>

        </Page>
    )
}

export default HistoryDetail;