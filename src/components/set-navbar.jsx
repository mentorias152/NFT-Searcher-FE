import api from 'zmp-sdk';

export function setNavbar(title, back) {
    //set back button
    if (back) {
        api.setNavigationBarLeftButton({
            type: 'back',
            success: () => {
                console.log('Set left button succeeded!')
            },
            fail: (error) => {
                console.log(error);
            }
        })
    }
    //set title
    if (title) {
        api.setNavigationBarTitle({
            title: title,
            success: () => {
              console.log('Set title succeeded!')
            },
            fail: (error) => {
              console.log(error);
            }
          });
    }
}