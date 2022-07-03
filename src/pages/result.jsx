import React, { useEffect } from 'react';
import { Page, useStore } from 'zmp-framework/react';
import { setNavbar } from '../components/set-navbar';
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