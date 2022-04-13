import React from 'react';
import { Icon, Grid, GridItem, zmp } from 'zmp-framework/react';

const AppItems = () => {
  const zmprouter = zmp.views.main.router;
  const items = [
    { icon: 'zi-camera', label: 'Camera', link: '/camera' },
    { icon: 'zi-photo', label: 'Photo', link: '/photo' },
    { icon: 'zi-memory', label: 'History', link:'/history' },
    { icon: 'zi-help-circle', label: 'About us', link:'/about' },
  ]

  const nav = (itemLink) => {
    zmprouter.navigate(itemLink);
  };

  return (
    <div>
      <Grid >
        {items.map(item => (
          <GridItem
            label={item.label}
            style={{ 
              width: '50%',
              backgroundColor: 'var(--zmp-color-w300)' }}
            key={item.icon}
            icon={<Icon
              style={{
                color: 'black'
              }}
              zmp={item.icon} />}
            onClick={() => nav(item.link)}
          />
        ))}
      </Grid>
    </div>
  )
}

AppItems.displayName = 'zmp-app-items'

export default AppItems
