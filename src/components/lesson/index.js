import React, { Component } from 'react';
import First from './first'
import Second from './second'
import Third from './third'

class Lesson extends Component {
  render() {
    return (
      <div>
        <First />
        <Second />
        <Third />
      </div>
    );
  }
}

export default Lesson;
