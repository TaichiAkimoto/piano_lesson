import React, { Component } from 'react'
import { Footer } from '../util/footer'
import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
import Sixth from './sixth'
import Top from '../util/top'

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div style={home}>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Top />
        <Footer />
      </div>
    )
  }
}

const home = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}

export default Home;
