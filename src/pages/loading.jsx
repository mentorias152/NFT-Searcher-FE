import React, { useEffect, useState } from 'react';
import {
    Page,
    zmp,
    useStore
} from 'zmp-framework/react';
import octoLoader from '../static/icons/octo-loader.gif';

const LoadingPage = () => {

    const quotes = useStore('quotes');
    const [quote, setQuote] = useState("");

    const generateRandomQuote = () => {
        const r = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[r].data)
    }

    const [text, setText] = useState('loading');

    useEffect(() => {
        setText('Processing your image');
        const r = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[r].data);
        setTimeout(() => zmp.views.main.router.navigate('/result'), 10000);
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
        ><p 
        style={{textAlign: 'center'}}
        onClick={generateRandomQuote}>Fun fact: <br></br>{quote}</p>
        </div>
    </Page>)
}

export default LoadingPage;