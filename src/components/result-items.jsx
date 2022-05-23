import React, { useState, useEffect } from 'react';
import { Card, useStore, Grid, zmp, GridItem } from 'zmp-framework/react';
import { FadeLoader } from 'react-spinners';

const ResultItems = () => {

    const temp = [1,2,3,4,5,6,7,8,9,10];

    const results = useStore('results');
    const loading = useStore('loading');

    const navigate = (item) => {
        zmp.store.dispatch('setDetail', results[item]);
        zmp.views.main.router.navigate('/detail');
    }

    return (
        (results != null && loading.data =='false') ?
                <Grid columns={2}>
                    {Object.keys(results).map(item => (
                        <GridItem style={{paddingBottom:'0px', paddingTop:'0px'}}>
                            <Card
                                onClick={ () => navigate(item)}
                                inset key={results[item].id}
                                    style={{
                                        display: 'flex',
                                        flexAlign: 'column',
                                        width:'100%'
                                    }}>
                                    <img src={results[item].meta_content_url}
                                        style={{
                                            width: '90%'
                                        }} />   
                                    <hr></hr>
                                    <h3
                                        style={{
                                            textAlign: 'center',
                                            color:'black'
                                        }}>
                                        {results[item].meta_name}
                                    </h3>
                                    <p
                                    style={{
                                        textAlign:'center',
                                        color:'black'
                                    }}><strong>{results[item].lastsale_price} ETH</strong></p>
                                </Card>
                            </GridItem>))}
                </Grid>
            :
            <div>
                <Grid columns={2} noBorder>
                    {temp.map(item => (
                    <GridItem style={{height:'45vh'}} key={item}>
                        <Card inset style={{width: '100%'}}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height:'37vh'
                    }}>
                        <FadeLoader color='grey' />
                    </div>
                        </Card></GridItem>))}
                </Grid>
            </div>
    );
}

export default ResultItems;