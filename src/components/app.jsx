import React, { useState, useEffect, useRef } from 'react';
import {
  zmpready,
  App,
  View,
  Icon,
  zmp
} from 'zmp-framework/react';
import store from '../store';
import api from 'zmp-sdk';
import { osName } from 'react-device-detect';

const MyApp = () => {

  const dialog = useRef(null);

  // ZMP Parameters
  const zmpparams = {
    name: 'NFT-Verifier', // App name
      theme: 'auto', // Automatic theme detection
      // App store
      store: store,
  };

  zmpready(() => {
    
    console.log(osName)
    zmp.store.dispatch('setOs', {data: osName});

    // Call ZMP APIs here

    api.setNavigationBarColor({
      color:'',
      success: () => {
          console.log('Hide navbar')
      },
      fail: (error) => {
          console.log(error);
      }
  })

    api.login({
      success: () => {
        api.getUserInfo({
          success: (data) => {
            zmp.store.dispatch('setUserID', {data: data.userInfo.id})
            fetch('https://zalo-nft.nguyenanhdevops.live/users/' + data.userInfo.id + '/history')
            .then(res => res.json().then(res => {
              zmp.store.dispatch('setHistory', res)
            }))
          },
          fail: (error) => {
            console.log(error);
          }
        });
      },
      fail: (error) => {
        console.log(error);
      }
    });

    api.onNetworkStatusChange(function (data) {
      const { isConnected, networkType } = data;
      
      if (!dialog.current) {
        dialog.current = zmp.dialog.create({
          title: "Disconnected",
          text: "Please check your connection.",
          buttons: [
            {
              text: "Reload",
              onClick() {
                zmp.views.main.router.navigate('/index')
              }
            },
          ],
          on: {
            closed() {
              dialog.current = null;
            },
          },
          closeByBackdropClick: true,
        });
      }

      if (!isConnected) {
        dialog.current.open();
      }
    });
  });

  return (
    <App { ...zmpparams } >

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

    </App>
  );
}
export default MyApp;