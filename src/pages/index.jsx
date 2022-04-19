import React, { useEffect, useState } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitleLarge,
  useStore,
  Icon,
  Button
} from 'zmp-framework/react';
import AppItems from '../components/app-items';

const HomePage = () => {
  const user = useStore('user');

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
    </Page>
  );
}
export default HomePage;