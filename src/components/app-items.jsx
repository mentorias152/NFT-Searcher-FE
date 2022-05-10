import React from 'react';
import { Icon, Grid, GridItem, zmp, Box } from 'zmp-framework/react';

const AppItems = () => {
  const zmprouter = zmp.views.main.router;
  const items = [
    { icon: 'zi-camera', label: 'Camera', link: '/camera' },
    { icon: 'zi-photo', label: 'Photo', link: '/photo' },
  ]

  const navigate = (itemLink) => {
    itemLink=='/photo' ?
        document.getElementById('selectFile').click()
      :
      zmprouter.navigate(itemLink);
  };

  const setSelectedFile = (file) => {
    zmp.store.dispatch('setImage', { data: file });
    zmp.views.main.router.navigate('/preview');
  }

  return (
    <div>
      <Grid columns={1} noBorder>
        {items.map(item => (
          <GridItem
            style={{
              width: '100%'}}
            key={item.icon}
            onClick={() => navigate(item.link)}>
          <Box
          p='3'
          style={{
            backgroundColor:'white',
            width: '50%',
            borderRadius:'8px'
          }}>
            <Icon
            size={100}
              style={{
                color: 'black',
              }}
              zmp={item.icon} />
              </Box>
              </GridItem>
        ))}
      </Grid>

      <input 
      onChange={(e) => setSelectedFile(e.target.files[0])}
      id='selectFile' type='file' style={{display:'none'}}></input>
    </div>
  )
}

AppItems.displayName = 'zmp-app-items'

export default AppItems
