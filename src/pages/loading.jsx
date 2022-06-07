import React, { useEffect, useState } from 'react';
import {
    Page,
    zmp
} from 'zmp-framework/react';
import octoLoader from '../static/icons/octo-loader.gif';

const LoadingPage = () => {
    const [text, setText] = useState('loading');

    useEffect(() => {
        setText('Processing your image');
        setTimeout(() => zmp.views.main.router.navigate('/result'), 5000)
    }, [])

    return (<Page style={{
        backgroundColor: 'white'
    }}>
        <div
            style={{
                width: '100%',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        ><img src={octoLoader}
        style={{
            width:'100%',
            objectFit:'contain'
        }}/>
        <div style={{
            width:'100%',
            textAlign:'center'}}>
        <h2>{text}</h2>
        </div>
        </div>
        <div
            style={{
                width: '100%',
                height: '20vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        ><p style={{textAlign: 'center'}}>Fun fact: <br></br> NFT is unique</p>
        </div>
    </Page>)
}

export default LoadingPage;