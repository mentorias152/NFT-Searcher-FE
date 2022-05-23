import React from 'react';
import { Link, Navbar, NavLeft, Icon, NavTitle, NavRight, zmp, useStore } from 'zmp-framework/react';

const NavbarBackCustom = ({ title, linkRight, labelRight }) => {
  
  const link = useStore('linkBack').data;

  const nav = () => {
    zmp.store.dispatch('setLoading', 'true');
    if (link == '/camera')
      zmp.views.main.router.navigate(link);
      else
      zmp.views.main.router.navigate('/index');
  };
  return (
    <Navbar>
      <NavLeft displayName="zmp-navleft">
          <Icon onClick={nav} zmp="zi-arrow-left"/>
      </NavLeft>
      <NavTitle>{title}</NavTitle>
      {linkRight && labelRight && (
        <NavRight>
          <Link href={linkRight} className="no-ripple" noLinkClass>{labelRight}</Link>
        </NavRight>
      )}
    </Navbar>
  )
}

export default NavbarBackCustom;
