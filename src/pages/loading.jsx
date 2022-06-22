import React, { useEffect, useState } from 'react';
import {
    Page,
<<<<<<< Updated upstream
    zmp
=======
    zmp,
    Text,
    useStore
>>>>>>> Stashed changes
} from 'zmp-framework/react';
import octoLoader from '../static/icons/octo-loader.gif';

const LoadingPage = () => {
<<<<<<< Updated upstream
    const [text, setText] = useState('loading');

    useEffect(() => {
        setText('Processing your image');
        setTimeout(() => zmp.views.main.router.navigate('/result'), 5000)
=======

    const quotes = useStore('quotes');
    const [quote, setQuote] = useState("");
    const [text, setText] = useState('loading');

    const generateRandomQuote = () => {
        const r = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[r].data)
    }

    useEffect(() => {
        setText('Processing your image');
        setQuote('Click me if you want to read more fun facts');
        setTimeout(() => zmp.views.main.router.navigate('/result'), 10000);
>>>>>>> Stashed changes
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
        onClick={generateRandomQuote}
            style={{
                width: '100%',
                height: '20vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
<<<<<<< Updated upstream
        ><p style={{textAlign: 'center'}}>Fun fact: <br></br> NFT is unique</p>
=======
        ><Text 
        size='large'
        style={{textAlign: 'center'}}
        >Fun fact: <br></br>{quote}</Text>
>>>>>>> Stashed changes
        </div>
    </Page>)
}

export default LoadingPage;