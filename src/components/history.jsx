import React, { useEffect, useState } from 'react';
import {
    Title,
    Icon,
    Box,
    Text,
    zmp,
    useStore,
    GridItem,
    Grid
} from 'zmp-framework/react';
import temp from '../static/icons/eth.jpg'

const History = () => {

    const history = useStore('history');
    var category = {};
    const today = new Date().toLocaleDateString('af-ZA').split('-')

    const handleHistoryItemClick = (item,i) => {
        zmp.store.dispatch('setHistoryDetail', category[item]['history'][i]);
        zmp.views.main.router.navigate('/history-detail')
    }

    for (let i = 0; i < Object.keys(history).length; i++) {
        var date = history[i].created_at.split('T')
        date[0] = date[0].split('-');
        if (date[0][0] == today[0]) {
            if (date[0][1] == today[1])
                if (date[0][2] == today[2]) {
                    if (category[0] == null) {
                        category[0] = { title: 'Today', history: []}
                        category[0].history.push(history[i])
                    }
                    else {
                        category[0].history.push(history[i])
                    }
                }
                else {
                    if(parseInt(today[2]) - parseInt(date[0][2]) == 1)
                        if (category[1] == null) {
                            category[1] = { title: 'Yesterday', history: []}
                            category[1].history.push(history[i])
                        }
                        else {
                            category[1].history.push(history[i])
                        }
                    else
                    {
                        if (category[2] == null) {
                            category[2] = { title: 'This month', history: []}
                            category[2].history.push(history[i])
                        }
                        else {
                            category[2].history.push(history[i])
                        }
                    }
                }
            else {
                if (category[3] == null) {
                    category[3] = { title: 'This year', history: []}
                    category[3].history.push(history[i])
                }
                else {
                    category[3].history.push(history[i])
                }
            }
        }
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
            <Title
                size='large'
                noSpace
                style={{
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: 'white',
                }}
            >My history</Title>
            <div
                style={{ width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'white' }}>
                    <Box>
                    {Object.keys(category).map(item => (
                        <Grid
                        columns={2} noBorder>
                            <Box m='5'><Title noSpace>{category[item].title}</Title></Box>
                        {Object.keys(category[item]['history']).map(i => (
                        <GridItem
                            onClick={() => handleHistoryItemClick(item, i)}>
                            <img
                                src={category[item]['history'][i]['search_img_url']} style={{
                                    objectFit: 'cover',
                                    height: '35vw',
                                    width: '35vw',
                                    borderRadius: '10px'
                                }} />
                        </GridItem>
                        ))}</Grid>))}
                    </Box>
            </div>
        </div>
    );
}

export default History;