import React, { Component } from 'react';
import { Header } from './header'
import { Footer } from './footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>{"How do you do?"}</div>
        <Footer />
      </div>
    );
  }
}

export default Home;