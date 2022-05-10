import React from 'react';
import { Link, Navbar, NavLeft, Icon, NavTitle, NavRight } from 'zmp-framework/react';

const NavbarBackCustom = ({ title, linkRight, labelRight }) => {
  const nav = () => {
    const link = useStore('linkBack').data;
    zmprouter.navigate(link);
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
