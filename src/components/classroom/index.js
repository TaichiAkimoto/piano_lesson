import React, { Component } from 'react';
import First from './first'

class Classroom extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
        <First />
      </div>
    );
  }
}

export default Classroom;
