import React, { useEffect } from 'react';
import { Page, zmp, Navbar, NavLeft, NavTitle, Link, Icon } from 'zmp-framework/react';
import NavbarBackCustom from '../components/navbar-back-custom';
import ResultItems from '../components/result-items';

const ResultPage = () => {

  return (
    <Page >
      <NavbarBackCustom title='Results'/>
      <ResultItems />
    </Page>
  );
}

export default ResultPage