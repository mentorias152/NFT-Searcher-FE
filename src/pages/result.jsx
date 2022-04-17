import React, { useEffect, useState } from 'react';
import { Page, zmp, useStore, Button, Navbar, NavLeft, NavTitle, Link, Icon } from 'zmp-framework/react';
import ResultItems from '../components/result-items';

const ResultPage = () => {
  const image = useStore('image');
  const url = 'https://60cc-2001-ee0-500f-f5d0-9de5-ee4f-6115-8c7.ap.ngrok.io/image-upload';

  const callapi = async () => {
    console.log('Call api here')
    const res = await fetch(url, {
      method: 'POST',
      
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(image.data)
    })
    console.log(res.json());
  }

  useEffect( () => {
    callapi;
  }, [])

    return (
        <Page>
            <Navbar>
      <NavLeft displayName="zmp-navleft">
        <Link href='/index'>
          <Icon zmp="zi-arrow-left" />
        </Link>
      </NavLeft>
      <NavTitle>Result</NavTitle>
    </Navbar>
            <ResultItems />
        </Page>
    );
}

export default ResultPage