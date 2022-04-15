import React, { useEffect, useState } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavRight,
  NavTitleLarge,
  Avatar,
  useStore,
  Icon,
  zmp,
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
        <NavRight>
          <Avatar onClick={() => {
            zmp.views.main.router.navigate('/user')
            }}>{user.avatar}</Avatar>
        </NavRight>
      </Navbar>
      
      {/* Grid apps */}
      <AppItems />
    </Page>
  );
}
export default HomePage;