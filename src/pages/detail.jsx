import React from 'react'
import { useStore, Page, Card, Grid, Button } from 'zmp-framework/react';
import eth from '../static/icons/eth.jpg';

const DetailPage = () => {
    const detail = useStore('detail');
    const str = detail.id.split(':');
    const raribleURL = 'https://rarible.com/token/' + str[1] + ':' + str[2];
    return (
        <Page>
            <Grid>
            <div
                style={{
                    width:'100%',
                    minHeight:'100vh'
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
                    {detail.lastsale_price == '-1' ? <p style={{
                            textAlign: 'center'
                        }}>Not for sale</p> : <p
                        style={{
                            textAlign: 'center'
                        }}>On sale for <img src={eth} style={{width:'12px'}}/> <strong>{detail.lastsale_price}</strong></p>}
                    <p><strong>    Description: </strong><br></br>
                    {detail.meta_description}
                    </p>
                    <Button type='ghost' >View in Rarible</Button>
                </Card></div>
        </Grid>
        </Page>
    );
}

export default DetailPage;