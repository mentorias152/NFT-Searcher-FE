import React, { useState, useEffect } from 'react';
import { Card, useStore, Grid, zmp } from 'zmp-framework/react';
import { FadeLoader } from 'react-spinners';

const ResultItems = () => {

    const results = useStore('results');
    const loading = useStore('loading');

    const navigate = (item) => {
        zmp.store.dispatch('setDetail', results[item]);
        zmp.views.main.router.navigate('/detail');
    }

    return (
        (results != null && loading.data =='false') ?
            <div>
                <Grid>
                    {Object.keys(results).map(item => {
                        const str = results[item].id.split(':');
                        return (
                            <div onClick={ () => navigate(item)}
                                style={{
                                    width: '100%'
                                }}><Card
                                inset key={results[item].id}
                                    style={{
                                        display: 'flex',
                                        flexAlign: 'column',
                                    }}>
                                    <img src={results[item].meta_content_url}
                                        style={{
                                            width: '100%'
                                        }} />
                                    <hr></hr>
                                    <h2
                                        style={{
                                            textAlign: 'center',
                                            border: '20px 10px 0px 10px'
                                        }}>
                                        {results[item].meta_name}
                                    </h2>
                                    <p
                                    style={{
                                        textAlign:'center'
                                    }}>On sale for <strong>{results[item].lastsale_price} ETH</strong></p>
                                </Card></div>)
                    })}
                </Grid>
            </div>
            :
            <div>
                <Card inset >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '65vh'
                    }}>
                        <FadeLoader color='grey' />
                    </div>
                </Card>
                <Card inset >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '65vh'
                    }}>
                        <FadeLoader color='grey' />
                    </div>
                </Card>
            </div>
    );
}

export default ResultItems;