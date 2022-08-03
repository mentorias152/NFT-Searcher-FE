import React from 'react';
import {
    Text,
    Title,
    Card,
    Box,
    zmp,
    Page,
    useStore,
    Link,
    Icon
} from 'zmp-framework/react';

import facebook from '../static/icons/facebook.png'
import gmail from '../static/icons/gmail.png'
import discord from '../static/icons/discord.png'
import zalo from '../static/icons/zalo.png'

const MemberDetail = () => {

    const chosen = useStore('memberDetail');
    const roles = chosen.role.split('/');

    console.log(roles)

    return (
        <Page
        style={{
            backgroundColor:'white',
            }}>

            {/*Topbar and image */}
            <div
                style={{
                    display: 'flex',
                    flexAlign: 'column',
                    width: '100vw',
                    height: '50vh',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                <div
                    style={{
                        margin: '30px',
                        width: '100%',
                        borderRadius: '50%',
                    }}>
                    <img src={chosen.avatar}
                        style={{
                            width: '100%',
                            objectFit: 'cover',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        }} />
                </div>
            </div>
            <div
                style={{
                    height: '10vh',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Title textAlign='center' size='xlarge'>{chosen.name}</Title>
            </div>
            <div
                style={{
                    height: '20vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Title textAlign='center' size='small' style={{ color: 'grey' }}>{roles[0]}</Title>
                <Title textAlign='center' size='small' style={{ color: 'grey' }}>{roles[1]}</Title>
            </div>
            <div style={{
                height: '20vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',

            }}>
                <img src={facebook}/>
                <img src={gmail}/>
                <img src={discord}/>
                <img src={zalo}/>
            </div>
            <Link back
                style={{
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.3)',
                    top: '0px',
                    left: '0px',
                    position: 'fixed',
                    margin: '20px',
                }}><Icon zmp="zi-arrow-left" style={{ color: 'white' }} /></Link>
        </Page>
    )
}

export default MemberDetail;