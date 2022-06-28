import React from 'react';
import { Card, useStore, zmp, Title, Text } from 'zmp-framework/react';
import eth from '../static/icons/eth.jpg'

const ResultItems = () => {

    const temp = [1,2,3,4,5,6,7,8,9,10];

    const results = useStore('results');
    const loading = useStore('loading');

    const navigate = (item) => {
        zmp.store.dispatch('setDetail', results[item]);
        zmp.views.main.router.navigate('/detail');
    }

    return (
                    Object.keys(results).map(item => (
                        <div onClick={() => navigate(item)}>
                            <Card
                                inset key={results[item].id}
                                    style={{
                                        display: 'flex',
                                        flexAlign: 'column'
                                    }}>
                                    <img src={results[item].meta_content_url}
                                        style={{
                                            width: '100%',
                                            borderRadius:'5px'
                                        }} />
                                    <div
                                    style={{margin:'10px'}}>
                                        <Title
                                    size='large'
                                        style={{
                                            color:'black'
                                        }}>
                                        {results[item].meta_name}
                                    </Title>
                                    
                                    </div>
                                    <Card
                                    style={{backgroundColor:'#ededed',
                                    borderRadius:'5px',
                                    }}>
                                        <div style={{
                                    display:'flex',
                                    flexDirection:'row'}}>
                                        <div style={{width:'50%'}}>
                                            <Text
                                            style={{color:'gray'}}>
                                                Price
                                            </Text>
                                        {results[item].lastsale_price == '-1' ?
                                        <Text
                                        style={{
                                            color:'black'
                                        }}>Not for sale</Text>
                                        :
                                        <Text
                                    style={{
                                        color:'black',
                                    }}><img style={{width: '12px'}} src={eth}/>{results[item].lastsale_price}</Text>}
                                    </div>
                                    <div style={{width:'50%'}}>
                                    <Text
                                            style={{color:'gray'}}>
                                                Last sale
                                            </Text>
                                            <Text style={{
                                            color:'black'}}>
                                                No data yet
                                            </Text>
                                    </div>
                                    </div>
                                    </Card>
                                </Card></div>))
    );
}

export default ResultItems;