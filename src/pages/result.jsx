import React from 'react';
import { Page, useStore } from 'zmp-framework/react';
import ResultItems from '../components/result-items';
import Loading from '../components/loading';

const ResultPage = () => {

  const results = useStore('results');
  const loading = useStore('loading').data;

  return (
    <Page>
      {(loading == "false" && results != null) ?
        <ResultItems />
        :
        <Loading />
      }
    </Page>
  );

}

export default ResultPage