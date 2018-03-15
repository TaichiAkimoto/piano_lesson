import React, { Component } from 'react'
import First from './first'
import Second from './second'
import Third from './third'
import Top from '../util/top'
import { Footer } from '../util/footer'

class Instructor extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div style={home}>
        <First />
        <Second />
        <Third />
        <Top />
        <Footer />
      </div>
    );
  }
}

const home = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}

export default Instructor;
