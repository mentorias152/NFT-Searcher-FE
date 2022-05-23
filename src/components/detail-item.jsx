import React from 'react'
import { useStore, Card, Grid, Text, Link, Button, zmp } from 'zmp-framework/react';

const DetailItem = () => {
    const detail = useStore('detail');
    const str = detail.id.split(':');
    const raribleURL = 'https://rarible.com/token/' + str[1] + ':' + str[2];
    console.log(raribleURL);
    return (
        <Grid>
            <div
                style={{
                    width: '100%'
                }}><Card
                    inset key={detail.id}
                    style={{
                        display: 'flex',
                        flexAlign: 'column',
                    }}>
                    <img src={detail.meta_content_url}
                        style={{
                            width: '100%'
                        }} />
                    <hr></hr>
                    <h2
                        style={{
                            textAlign: 'center',
                            border: '20px 10px 0px 10px'
                        }}>
                        {detail.meta_name}
                    </h2>
                    <p
                        style={{
                            textAlign: 'center'
                        }}>On sale for <strong>{detail.lastsale_price} ETH</strong></p>
                    <Text><strong>Description: </strong><br></br>
                    {detail.meta_description}
                    </Text>
                    <a href={raribleURL}>View in Rarible</a>
                </Card></div>
        </Grid>
    );
}

export default DetailItem;