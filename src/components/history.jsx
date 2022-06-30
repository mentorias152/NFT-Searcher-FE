import React from 'react';
import {
    Text,
    Box,
    Title
} from 'zmp-framework/react';

import temp from '../static/icons/temp.jpg';

const History = () => {

    const historyList = [
        {
            time: '24-5-2022 19:00',
            name: 'Temp 1'
        },
        {
            time: '24-5-2022 19:00',
            name: 'Temp 2'
        },
        {
            time: '24-5-2022 19:00',
            name: 'Temp 3'
        },
        {
            time: '24-5-2022 19:00',
            name: 'Temp 4'
        },
        {
            time: '24-5-2022 19:00',
            name: 'Temp 6'
        },
        {
            time: '24-5-2022 19:00',
            name: 'Temp 6'
        },
        {
            time: '24-5-2022 19:00',
            name: 'Temp 6'
        },
        
    ]

    return (
        <Box justifyContent='space-around' style={{height: 'calc(100vh-40px)'}}>
            <Box style={{ position:'fixed'}}>
            <Title style={{color:'grey', paddingLeft:'20px'}}>Your search history</Title>
            </Box>
            <Box>{Object.keys(historyList).map(item => (
                <Box flex={'true'} pt={'5'}>
                    <img src={temp} style={{ width:'50%'}}/>
                    <Text>soemthing</Text>
                </Box>
                ))}
        </Box>
        </Box>
    );
}

export default History;