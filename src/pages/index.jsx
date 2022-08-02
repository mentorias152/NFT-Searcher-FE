import React, { useRef, useState } from 'react';
import {
  Page,
  Icon,
  zmp,
  Fab,
  FabBackdrop,
  Box,
  Title,
  Text,
  useStore
} from 'zmp-framework/react';
import History from '../components/history';
import About from '../components/about-us';
import empty from '../static/icons/empty.png'

const HomePage = () => {

  const [chosen, setChosen] = useState('History');
  const osName = useStore('os').data;
  const history = useStore('history');

  const setSelectedFile = (file) => {
    zmp.store.dispatch('setLinkBack', { data: '/index' });
    zmp.store.dispatch('setImage', { data: file });
    zmp.views.main.router.navigate('/crop');
  }
  return (
    <Page
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
      {/*Tabs*/}
      <div
        style={{
          height: 'calc(100vh - 50px)',
          width: '100%',
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {chosen == 'History' ?
          (Object.keys(history).length !=0 ) ?
            <History />
            :
            (<div
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: '50%'
              }}>
                <img src={empty}
              style={{
                width: '50%',
                objectFit: 'contain',
              }} />
              <div style={{
                width: '100%',
                padding: '20px',
                textAlign: 'center'
              }}>
                <Box>
                  <Title size='xlarge'>No history found</Title>
                </Box>
                <Box mt='7'>
                  <Text noSpace size='xlarge'>Seem like you have not scanned any NFT yet</Text>
                  <Text noSpace size='xlarge'>Start scanning now</Text>
                </Box>
              </div>
            </div>)
          :
          <About />}
      </div>
      {/*Bottom bar with floating button*/}
      <FabBackdrop slot='fixed' style={{ zIndex: 1400 }} />
      <Fab position='center-bottom' large slot='fixed' style={{ height: '55px', width: '50px' }}
        onClick={() => (osName == 'iOS') ? document.getElementById('selectFile').click() : zmp.views.main.router.navigate('/camera')}>
        <Icon zmp='zi-plus' />
      </Fab>
      <input
        onChange={(e) => setSelectedFile(e.target.files[0])}
        id='selectFile' type={'file'} accept='image/*' style={{ display: 'none' }}></input>
      <div
        style={{
          width: '100%',
          height: '50px',
          bottom: '0px',
          position: 'fixed',
          backgroundColor: 'white',
          display: 'flex',
          borderTop: '1px solid #d9d9d9'
        }}>
        <div
          onClick={() => {
            setChosen('History')
          }
          }
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {chosen == 'History' ? <Icon color='BL300' zmp='zi-list-1' size={'35'} /> : <Icon style={{ color: '#7f7f7f' }} zmp='zi-list-1' size={'30'} />}
        </div>
        <div
          onClick={() => {
            setChosen('About us')
          }
          }
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {chosen == 'About us' ? <Icon color='BL300' zmp='zi-members-solid' size={'35'} /> : <Icon style={{ color: '#7f7f7f' }} zmp='zi-members' size={'30'} />}
        </div>
      </div>
    </Page>
  );
}
export default HomePage;