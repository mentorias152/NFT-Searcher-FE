import React, { useRef, useState } from 'react';
import {
  Page,
  Icon,
  zmp,
  Fab,
  Title
} from 'zmp-framework/react';
import { setNavbar } from '../components/set-navbar';
import History from '../components/history';
import About from '../components/about-us';


const HomePage = () => {

  const [chosen, setChosen] = useState('History');

  fetch('https://searcher-88e63-default-rtdb.asia-southeast1.firebasedatabase.app/url.json', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(res => res.json()).then(res => {
    zmp.store.dispatch('setApi', { data: res })
  });

  return (

    <Page 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
      }}>

        {/*Top welcome bar*/}
      <div
        style={{
          height:'30vh',
          width:'100%',
          backgroundColor:'#1843ef',
          position:'fixed',
          top:'0',
        }}>
          <p
          style={{
            color:'white',
            textAlign:'center',
            fontSize:'30px',
            paddingTop:'30px'
          }}>Welcome to NFT Verifier
          </p>
          <p
          style={{
            color:'white',
            textAlign:'center',
            fontSize:'20px',
            }}>Scan to find NFT now
          </p>
      </div>

      {/*Tabs*/}
      <div
        style={{
          height:'calc(80vh - 50px)',
          width:'100%',
          top:'20vh',
          position:'fixed',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          backgroundColor:'white',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          }}>
      {chosen == 'History' ? <History/> : <About/>}
      </div>
      {/*Bottom bar with floating button*/}
      <Fab position='center-bottom' large slot='fixed' style={{height: '55px', width:'50px'}}
      onClick={() => zmp.views.main.router.navigate('/camera')}>
        <Icon zmp='zi-camera-solid'></Icon>
      </Fab>

      <div
        style={{
          width: '100%',
          height: '50px',
          bottom: '0px',
          position: 'fixed',
          backgroundColor: 'white',
          display: 'flex',
        }}>
        <div
          onClick={() => {
            setNavbar('History', false)
            setChosen('History')}
          }
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {chosen == 'History' ? <Icon color='BL300' zmp='zi-list-1' size={'35'} /> : <Icon zmp='zi-list-1' size={'30'} />}
        </div>
        <div
          onClick={() => {
            setNavbar('About us', false)
            setChosen('About us')}
          }
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {chosen == 'About us' ? <Icon color='BL300' zmp='zi-group' size={'35'} /> : <Icon zmp='zi-group' size={'30'} />}
        </div>
      </div>

    </Page>
  );
}
export default HomePage;