import React, { useState, useEffect } from 'react';
import { Card, useStore, Grid } from 'zmp-framework/react';

const ResultItems = () => {

    const results = useStore('results');
    const size = '30vh';
 
    return (
        <div>
            <Grid>
            {Object.keys(results).map(item =>
                {
                const str = results[item].id.split(':');
                return (<Card inset key={results[item].id}>
                    <h2
                        style={{
                            textAlign: 'center',
                            border: '20px 10px 0px 10px'
                        }}>
                        {results[item].meta_name}
                    </h2>
                    <hr></hr>
                    <div
                        style={{
                            display: 'flex',
                            flexAlign: 'row',

                        }}
                    >
                        <img src={results[item].meta_content_url}
                            style={{
                                width: '50%'
                            }} />
                        <div
                            style={{
                                padding: '10px',
                                width: '50%',
                                height: '80%'
                            }}>
                            <Card title='Details'
                            >
                                <hr></hr>
                                <p>${results[item].lastsale_price}</p>
                                <p style={{
                                    fontSize: '20px'
                                }}>Blockchain: {str[0]}</p>
                                <p>{results[item].meta_description}</p>
                            </Card>
                        </div>
                    </div>
                </Card>)})}
            </Grid>
        </div>
    );
}

export default ResultItems;