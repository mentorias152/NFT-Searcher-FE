import React from 'react';
import {
    Title,
    List,
    ListItem,
    zmp
} from 'zmp-framework/react';

import temp from '../static/icons/temp.jpg';

const History = () => {

    const handleHistoryItemClick = () => {
        zmp.views.main.router.navigate('/history-detail')
    }

    return (
        <div
            style={{
            width:'calc(100% - 40px)',
            height: '100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'}}>
            <Title 
            size='large'
            style={{
              marginTop:'20px',
              textAlign:'center'
            }}
            >My history</Title>
            <div
                style={{ width:'100%', height: '100%', marginTop:'20px',overflow:'auto'}}>
                <Title
                    size={'normal'}
                    style={{ paddingLeft: '20px' }}>Today</Title>
                <div>
                    <List
                        noHairlines
                        noHairlinesBetween
                        style={{margin:'10px'}}>
                        <ListItem
                            onClick={handleHistoryItemClick}
                            title='NFT 1'
                            description='Today 19:45'>
                            <img
                                slot={'media'}
                                src={temp} style={{
                                    objectFit: 'cover',
                                    height: '10vh',
                                    width: '10vh',
                                    borderRadius: '10px'
                                }} />
                        </ListItem>
                        <ListItem
                            title='NFT 2'
                            description='Today 09:00'>
                            <img
                                slot={'media'}
                                src={temp} style={{
                                    objectFit: 'cover',
                                    height: '10vh',
                                    width: '10vh',
                                    borderRadius: '10px'
                                }} />
                        </ListItem>
                    </List>
                </div>
                <Title
                    size={'normal'}
                    style={{ paddingLeft: '20px' }}>Yesterday</Title>
                <div>
                    <List
                        noHairlines
                        noHairlinesBetween
                        style={{margin:'10px'}}>
                        <ListItem
                            title='NFT 1'
                            description='Today 19:45'>
                            <img
                                slot={'media'}
                                src={temp} style={{
                                    objectFit: 'cover',
                                    height: '10vh',
                                    width: '10vh',
                                    borderRadius: '10px'
                                }} />
                        </ListItem>
                        <ListItem
                            title='NFT 2'
                            description='Today 09:00'>
                            <img
                                slot={'media'}
                                src={temp} style={{
                                    objectFit: 'cover',
                                    height: '10vh',
                                    width: '10vh',
                                    borderRadius: '10px'
                                }} />
                        </ListItem>
                    </List>
                </div>
                <Title
                    size={'normal'}
                    style={{ paddingLeft: '20px' }}>This week</Title>
                <div>
                    <List
                        noHairlines
                        noHairlinesBetween
                        style={{margin:'10px'}}>
                        <ListItem
                            title='NFT 1'
                            description='Today 19:45'>
                            <img
                                slot={'media'}
                                src={temp} style={{
                                    objectFit: 'cover',
                                    height: '10vh',
                                    width: '10vh',
                                    borderRadius: '10px'
                                }} />
                        </ListItem>
                        <ListItem
                            title='NFT 2'
                            description='Today 09:00'>
                            <img
                                slot={'media'}
                                src={temp} style={{
                                    objectFit: 'cover',
                                    height: '10vh',
                                    width: '10vh',
                                    borderRadius: '10px'
                                }} />
                        </ListItem>
                    </List>
                </div>
            </div>
            </div>
    );
}

export default History;