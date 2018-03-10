import React, { Component } from 'react'
import UpArrow from 'react-icons/lib/fa/chevron-up'
import {animateScroll as scroll } from 'react-scroll'

export default class Top extends Component {
  render() {
    return (
      <div style={main}>
        <UpArrow style={{fontSize: '30px',color:'white'}} onClick={() => scroll.scrollToTop()}/>
      </div>
    )
  }
}

const main = {
  width: '90px',
  height: '45px',
  backgroundColor: '#939899',
  borderTopLeftRadius: '110px',
  borderTopRightRadius: '110px',
  borderBottom: 0,
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
}
