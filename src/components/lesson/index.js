import React, { Component } from 'react';
import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
import Top from '../util/top'
import { Footer } from '../util/footer'

class Lesson extends Component {
  render() {
    return (
      <div style={home}>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
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

export default Lesson;
