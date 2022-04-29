import React, { useState, useEffect } from 'react';
import { Card, useStore, Grid } from 'zmp-framework/react';
import { FadeLoader } from 'react-spinners';

const ResultItems = () => {

    const results = useStore('results');

    return (
        results != null ?
            <div>
                <Grid>
                    {Object.keys(results).map(item => {
                        const str = results[item].id.split(':');
                        return (
                            <div
                                style={{
                                    width: '100%'
                                }}><Card inset key={results[item].id}
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
                                    <p>Description here</p>
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