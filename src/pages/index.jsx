import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitleLarge,
  Icon,
  Card
} from 'zmp-framework/react';
import AppItems from '../components/app-items';

const HomePage = () => {
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
        <h2 style={{textAlign:'center'}}>About us</h2>
        <hr></hr>
        Something here is writen too long just to test how long would a card be
      </Card>
    </Page>
  );
}
export default HomePage;