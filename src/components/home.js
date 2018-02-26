import React, { Component } from 'react';
import { Header } from './header'
import { Footer } from './footer'
import paris from '../img/cat.jpg'
import coldplay from '../img/coldplay.jpg'
import Arrow from 'react-icons/lib/fa/chevron-down'

class Home extends Component {
  render() {
    return (
      <div style={home}>
        <div style={backGround}>
          <div style={top}>
            <Header />
            <Arrow style={arrow}/>
          </div>
        </div>
        <div style={introduction}>
        いそざき音楽教室
        はじめまして。横浜市神奈川区のピアノ教室「いそざき音楽教室」です。
        レッスンや発表会、グループレッスンなどで、自己表現できる場を生徒さんに提供し、「自分は、できる」という自信を育てます。
        </div>
        <div style={coaching}>
          coach
        </div>
        <Footer />
      </div>
    );
  }
}

const home = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}
const backGround = {
  backgroundColor: '#F6F6F6',
  height: '700px',
}
const arrow = {
  alignSelf: 'center',
  fontSize: '30px',
  color: 'white',
  paddingBottom: '70px',
}
const introduction = {
  height: '650px',
  backgroundColor: '#F6F6F6',
}
const coaching = {
  height: '650px',
  backgroundColor: '#FFFFFF',
}
const top = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: `url(${coldplay}) no-repeat center center`,
  backgroundSize: '1800px',
  height: '650px',
  borderRadius: '0px 0px 700px 700px/0px 0px 30px 30px',
}

export default Home;
