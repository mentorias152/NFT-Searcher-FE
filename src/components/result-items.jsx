import React, { useState, useEffect } from 'react';
import { Card, useStore, Grid, zmp, GridItem, SkeletonImage, SkeletonText } from 'zmp-framework/react';
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
        (results != null && loading.data =='false') ?
                <Grid columns={2} noBorder>
                    {Object.keys(results).map(item => (
                        <GridItem onClick={() => navigate(item)}style={{paddingBottom:'0px', paddingTop:'0px'}}>
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
                                    {results[item].lastsale_price == '-1' ?
                                        <p
                                        style={{
                                            textAlign:'center',
                                            color:'black'
                                        }}><strong>Not for sale</strong></p>
                                        :
                                        <p
                                    style={{
                                        textAlign:'center',
                                        color:'black'
                                    }}><img style={{width: '12px'}} src={eth}/> <strong>{results[item].lastsale_price}</strong></p>}
                                </Card>
                            </GridItem>))}
                </Grid>
            :
            <div>
                <Grid columns={2} noBorder>
                    {temp.map(item => (
                    <GridItem style={{height:'30vh'}} key={item}>
                        <Card inset style={{display: 'flex',
                                        height:'25vh',
                                        flexAlign: 'column',
                                        width:'100%'}}>
                            <SkeletonImage effect='wave' />
                            <SkeletonText effect='wave'>Collection - ID <br/> Price</SkeletonText>
                        </Card></GridItem>))}
                </Grid>
            </div>
    );
}

export default ResultItems;