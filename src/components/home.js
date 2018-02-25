import React, { Component } from 'react';
import { Header } from './header'
import { Footer } from './footer'
import paris from '../img/france.jpg'

class Home extends Component {
  render() {
    return (
      <div style={home}>
        <div style={top}>
          <Header />
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

const top = {
  background: `url(${paris}) no-repeat center center`,
  backgroundSize: '1800px',
  height: '650px',
  borderRadius: '0px 0px 700px 700px/0px 0px 30px 30px',
}

export default Home;
