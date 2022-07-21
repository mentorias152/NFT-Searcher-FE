import { NavigateBefore } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useStore, Page, Swiper, SwiperSlide, Title, Card, Box, Text, Icon, Link, zmp } from 'zmp-framework/react';
import eth from '../static/icons/eth.png';

const HistoryDetail = () => {

    const detail = useStore('historyDetail');
    const result = detail.result;

    var createdAt = detail.created_at.split('T');
    createdAt[0] = createdAt[0].split('-');
    createdAt[1] = createdAt[1].split(':');

    if (createdAt[0][1] == '01')
        createdAt[0][1] = ' Jan, ';
    if (createdAt[0][1] == '02')
        createdAt[0][1] = ' Feb, ';
    if (createdAt[0][1] == '03')
        createdAt[0][1] = ' Mar, ';
    if (createdAt[0][1] == '04')
        createdAt[0][1] = ' Apr, ';
    if (createdAt[0][1] == '05')
        createdAt[0][1] = ' May, ';
    if (createdAt[0][1] == '06')
        createdAt[0][1] = ' June, ';
    if (createdAt[0][1] == '07')
        createdAt[0][1] = ' July, ';
    if (createdAt[0][1] == '08')
        createdAt[0][1] = ' Aug, ';
    if (createdAt[0][1] == '09')
        createdAt[0][1] = ' Sep, ';
    if (createdAt[0][1] == '10')
        createdAt[0][1] = ' Oct, ';
    if (createdAt[0][1] == '11')
        createdAt[0][1] = ' Nov, ';
    if (createdAt[0][1] == '12')
        createdAt[0][1] = ' Dec, ';
     

    const navigate = (item) => {
        zmp.store.dispatch('setDetail', result[item]);
        zmp.views.main.router.navigate('/detail');
    }

    return (
        <Page style={{ backgroundColor: 'white' }}>

            {/*Topbar and image */}
            <div
                style={{
                    display: 'flex',
                    flexAlign: 'column',
                    height: '100vw',
                    width: '100%',
                    justifyContent: 'center',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    borderBottomLeftRadius: '30px',
                    borderBottomRightRadius: '30px',
                }}>
                <img src={detail.search_img_url}
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        backgroundColor: 'white',
                        borderBottomLeftRadius: '30px',
                        borderBottomRightRadius: '30px',
                    }} />
            </div>
            <Box>
                <Title textAlign='center' size='xlarge'>{createdAt[0][2]} {createdAt[0][1]} {createdAt[0][0]}</Title>
                <Title textAlign='center' size='small' style={{ color: 'grey' }}>{createdAt[1][0]}:{createdAt[1][1]}</Title>
            </Box>
            <Card inset
                style={{ width: '90%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                <Box>
                    <Title textAlign='center'>Results</Title>
                </Box>
                <Swiper effect='creative' centeredSlides={true} slidesPerView={1} pagination>
                    {Object.keys(result).map(item => (
                        <SwiperSlide>
                            <div
                                onClick={() => navigate(item)}
                                style={{
                                    margin: '0px 20px 30px 20px'
                                }}>
                                <img src={result[item].meta_content_url}
                                    style={{
                                        width: '100%',
                                        borderRadius: '5px'
                                    }} />
                                <div
                                    style={{ margin: '10px' }}>
                                    <Title
                                        size='normal'>
                                        {result[item].meta_name}
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
                                            {result[item].price == '-1' ?
                                                <Text>Not for sale</Text>
                                                :
                                                <Text><img style={{ width: '10px' }} src={eth} />{result[item].price}</Text>}
                                        </div>
                                        <div style={{ width: '50%' }}>
                                            <Text
                                                style={{ color: 'gray' }}>
                                                Highest bid
                                            </Text>
                                            {result[item].lastsale_price == '-1' ?
                                                <Text>No data yet</Text>
                                                :
                                                <Text><img style={{ width: '8px' }} src={eth} /> {result[item].lastsale_price}</Text>
                                            }
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Card>
            <Link back
                style={{
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.3)',
                    top: '0px',
                    left: '0px',
                    position: 'fixed',
                    margin: '20px',
                }}><Icon zmp="zi-arrow-left" style={{ color: 'white' }} /></Link>
        </Page>
    )
}

export default HistoryDetail;