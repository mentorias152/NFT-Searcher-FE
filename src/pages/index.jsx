import React, {useRef} from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitleLarge,
  Icon,
  Card,
  Button,
  zmp
} from 'zmp-framework/react';

import AppItems from '../components/app-items';

const HomePage = () => {

  fetch('https://searcher-88e63-default-rtdb.asia-southeast1.firebasedatabase.app/url.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json()).then(res => {
    zmp.store.dispatch('setApi', { data: res })
  });

  return (
    <Page name="home" navbarLarge>
      {/* Top Navbar */}
      <Navbar>
        <NavLeft displayname='navLeft'>
          <Icon zmp='zi-home'></Icon>
        </NavLeft>
        <NavTitleLarge>NFT Verifier</NavTitleLarge>
      </Navbar>

      {/* Grid apps */}
      <AppItems />
      <Card inset>
        <h2 style={{ textAlign: 'center' }}>About us</h2>
        <hr></hr>
        Something here is writen too long just to test how long a card could be
      </Card>

    </Page>
  );
}
export default HomePage;