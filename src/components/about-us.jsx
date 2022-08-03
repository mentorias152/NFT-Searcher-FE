import React from 'react';
import {
    Text,
    Title,
    zmp
} from 'zmp-framework/react';
import binh from '../static/avatar/binh.jpg'
import huy from '../static/avatar/huy.png'
import nam from '../static/avatar/nam.jpg'
import anh from '../static/avatar/anh.jpg'

const About = () => {

    const handleOnMemberClick = (member) => {
        zmp.store.dispatch('setMemberDetail', member)
        zmp.views.main.router.navigate('/member-detail')
    }

    return (
        <div
        style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Title
                size='large'
                noSpace
                style={{
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: 'white',
                }}
            >Meet our team</Title>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'auto' }}>
                <div
                onClick={() => handleOnMemberClick({
                    name:'Trần Thanh Bình',
                    role:'Product owner/Team leader',
                    avatar: binh
                })}
                style={{
                    margin:'10px 0px 10px 0px',
                    backgroundColor:'white',
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <div
                        style={{
                            width:'50%',
                            padding:'10px'}}>
                    <img
                        style={{
                            width:'100%',
                            borderRadius:'10px'
                        }}
                        src={binh}/>
                    </div>
                    <div
                        style={{
                            width:'50%',
                            display:'flex',
                            flexDirection:'column',
                            alignContent:'center',
                            alignItems:'center'}}>
                            <Title style={{marginBottom:'20px'}}>Trần Thanh Bình</Title>
                            <Text>Product owner</Text>
                            <Text>Team leader</Text>
                    </div>
                </div>
                <div
                onClick={() => handleOnMemberClick({
                    name:'Phạm Gia Huy',
                    role:'Front-end developer/',
                    avatar: huy
                })}
                style={{
                    margin:'10px 0px 10px 0px',
                    backgroundColor:'white',
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <div
                        style={{
                            width:'50%',
                            display:'flex',
                            flexDirection:'column',
                            alignContent:'center',
                            alignItems:'center'}}>
                            <Title style={{marginBottom:'20px'}}>Phạm Gia Huy</Title>
                            <Text>Front-end engineer</Text>
                    </div>
                    <div
                        style={{
                            width:'50%',
                            padding:'10px'}}>
                    <img
                        style={{
                            width:'100%',
                            borderRadius:'10px'
                        }}
                        src={huy}/>
                    </div>
                </div>
                <div
                onClick={() => handleOnMemberClick({
                    name:'Đặng Phương Nam',
                    role:'Artificial intelligence/Back-end Developer',
                    avatar: nam
                })}
                style={{
                    margin:'10px 0px 10px 0px',
                    backgroundColor:'white',
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <div
                        style={{
                            width:'50%',
                            padding:'10px'}}>
                    <img
                        style={{
                            width:'100%',
                            borderRadius:'10px'
                        }}
                        src={nam}/>
                    </div>
                    <div
                        style={{
                            width:'50%',
                            display:'flex',
                            flexDirection:'column',
                            alignContent:'center',
                            alignItems:'center'}}>
                            <Title
                            style={{marginBottom:'20px'}}>Đặng Phương Nam</Title>
                            <Text>Artificial intelligence</Text>
                            <Text>Back-end Developer</Text>
                    </div>
                </div>
                <div
                onClick={() => handleOnMemberClick({
                    name:'Nguyễn Tiến Anh',
                    role:'DevOps/Back-end developer',
                    avatar: anh
                })}
                style={{
                    margin:'10px 0px 10px 0px',
                    backgroundColor:'white',
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    alignContent:'center',
                    alignItems:'center',
                }}>
                    <div
                        style={{
                            width:'50%',
                            display:'flex',
                            flexDirection:'column',
                            alignContent:'center',
                            alignItems:'center'}}>
                            <Title style={{marginBottom:'20px'}}>Nguyễn Tiến Anh</Title>
                            <Text>DevOps</Text>
                            <Text>Back-end developer</Text>
                    </div>
                    <div
                        style={{
                            width:'50%',
                            padding:'10px'}}>
                    <img
                        style={{
                            width:'100%',
                            borderRadius:'10px'
                        }}
                        src={anh}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;