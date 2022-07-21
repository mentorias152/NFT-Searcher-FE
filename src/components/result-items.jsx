import React from 'react';
import { Card, useStore, zmp, Title, Text, Navbar, NavLeft, NavTitle, Icon, Page } from 'zmp-framework/react';
import eth from '../static/icons/eth.png'
import NavbarBackCustom from './navbar-back-custom';

const ResultItems = () => {

    const results = useStore('results');

    const navigate = (item) => {
        zmp.store.dispatch('setDetail', results[item]);
        zmp.views.main.router.navigate('/detail');
    }

    const userID = useStore('userID').data;

    const link = useStore('linkBack').data;
    const nav = () => {
        if (link == '/camera')
            zmp.views.main.router.navigate(link);
        else
            zmp.views.main.router.navigate('/index');

        fetch('https://zalo-nft.nguyenanhdevops.live/users/' + userID + '/history')
            .then(res => res.json().then(res => {
                console.log(res)
                zmp.store.dispatch('setHistory', res )
            }))
    };

    return (
        <Page style={{
            backgroundColor: 'white',
        }}>
            <Navbar>
                <NavLeft displayName="zmp-navleft">
                    <Icon onClick={nav} zmp="zi-arrow-left" />
                </NavLeft>
                <NavTitle>Results</NavTitle>
            </Navbar>
            {Object.keys(results).map(item => (
                <div onClick={() => navigate(item)}>
                    <Card
                        inset key={results[item].id}
                        style={{
                            display: 'flex',
                            flexAlign: 'column',
                        }}>
                        <img src={results[item].meta_content_url}
                            style={{
                                width: '100%',
                                borderRadius: '5px'
                            }} />
                        <div
                            style={{ margin: '10px' }}>
                            <Title
                                size='large'
                                style={{
                                    color: 'black'
                                }}>
                                {results[item].meta_name}
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
                                    {results[item].price == '-1' ?
                                        <Text
                                            style={{
                                                color: 'black'
                                            }}>Not for sale</Text>
                                        :
                                        <Text
                                            style={{
                                                color: 'black',
                                            }}><img style={{ width: '8px' }} src={eth} />{results[item].price}</Text>}
                                </div>
                                <div style={{ width: '50%' }}>
                                    <Text
                                        style={{ color: 'gray' }}>
                                        Highest bid
                                    </Text>
                                    {results[item].price == '-1' ?
                                        <Text>No data yet</Text>
                                        :
                                        <Text><img style={{ width: '8px' }} src={eth} /> {results[item].lastsale_price}</Text>
                                    }
                                </div>
                            </div>
                        </Card>
                    </Card>
                </div>))}
        </Page>
    );
}

export default ResultItems;