import React, { useEffect } from 'react';
import { Page, zmp, Navbar, NavLeft, NavTitle, Link, Icon } from 'zmp-framework/react';
import NavbarBackCustom from '../components/navbar-back-custom';
import ResultItems from '../components/result-items';
import Loading from '../components/loading';

const ResultPage = () => {
  //set navbar
  setNavbar('Result', true);

  const results = useStore('results');
  const loading = useStore('loading').data;

  return (
    <Page >
      {
      (loading == "false" && results!=null)?
      <ResultItems/>
      :
      <Loading/>
      }
    </Page>
  );
}

export default ResultPage