import React, { useEffect } from 'react';
import { Page, zmp, Navbar, NavLeft, NavTitle, Link, Icon } from 'zmp-framework/react';
import ResultItems from '../components/result-items';

const ResultPage = () => {

  return (
    <Page >
      <Navbar>
        <NavLeft displayName="zmp-navleft">
          <Link href='/index'>
            <Icon zmp="zi-arrow-left" onClick={() => {zmp.store.dispatch('setLoading', 'true')}}/>
          </Link>
        </NavLeft>
        <NavTitle>Result</NavTitle>
      </Navbar>
      <ResultItems />
    </Page>
  );
}

export default ResultPage