import React, {useRef} from 'react';
import {
  Page,
  Icon,
  zmp,
} from 'zmp-framework/react';
import { setNavbar } from '../components/set-navbar';
import History from '../components/history';

const HomePage = () => {

  const [chosen, setChosen] = useState('home');

  fetch('https://searcher-88e63-default-rtdb.asia-southeast1.firebasedatabase.app/url.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json()).then(res => {
    zmp.store.dispatch('setApi', { data: res })
  });
  setNavbar('Home', false)

  return (
    
    <Page name="home">
      <History />

      {/*Bottom bar*/}
      <div
        style={{
          width: '100%',
          height: '60px',
          bottom: '0px',
          position: 'fixed',
          backgroundColor: 'white',
          display: 'flex'
        }}>
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
          <Icon zmp='zi-home' size={'40'}/>
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
          <Icon zmp='zi-info-circle' size={'40'}/>
        </div>
      </div>
    </Page>
  );
}
export default HomePage;