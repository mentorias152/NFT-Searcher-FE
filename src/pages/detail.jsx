import React from 'react'
import { useStore, Page, Card, Grid } from 'zmp-framework/react';
import NavbarBack from '../components/navbar-back';

const DetailPage = () => {
    const detail = useStore('detail');
    const str = detail.id.split(':');
    return (
        <Page>
            <NavbarBack title='Detail' />
            <div>
                <Grid>
                    <Card
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
                        <p> <strong>Collection</strong> <br></br> {str[0]+str[1]}</p>
                        <p>
                            <strong>Creator</strong>
                            <br></br>
                            {detail.creators[0].account}
                        </p>
                        <p>
                            {detail.meta_description}
                        </p>
                    </Card>
                </Grid>
            </div>
        </Page>
    );
}

export default DetailPage;