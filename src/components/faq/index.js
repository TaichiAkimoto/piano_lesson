import React, { Component } from 'react';
import First from './first'
import Second from './second'

class Faq extends Component {
  render() {
    return (
      <div style={main}>
        <First />
        <Second />
      </div>
    );
  }
}

export default Faq;

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}
