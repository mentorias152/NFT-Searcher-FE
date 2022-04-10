import React from 'react';
import {
  Page,
  Box,
  Navbar,
  NavLeft,
  NavRight,
  NavTitleLarge,
  Avatar,
  Link,
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
          <Link href='#'>
            <Icon zmp='zi-home'></Icon>
          </Link>
        </NavLeft>
        <NavTitleLarge>NFT Verifier</NavTitleLarge>
        <NavRight><Avatar onClick={() => zmp.views.main.router.navigate('/user')}>{user.avatar}</Avatar></NavRight>
      </Navbar>

      <Box></Box>
      {/* Grid apps */}
      <AppItems />
    </Page>
  );
}
export default HomePage;