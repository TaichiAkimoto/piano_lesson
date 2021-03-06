import React, { Component } from 'react'
import { Header } from '../util/header'
import { images } from '../util/img'
import DownArrow from 'react-icons/lib/fa/chevron-down'
import {animateScroll as scroll } from 'react-scroll'
import { lightChar } from '../util/character'

export default class First extends Component {
  render() {
    return (
      <div style={main}>
        <div style={background}>
          <Header />
          <DownArrow style={{...arrow,...lightChar}} onClick={() => scroll.scrollTo(725)}/>
        </div>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '95vh',
  backgroundColor: '#F6F6F6',
}
const arrow = {
  alignSelf: 'center',
  fontSize: '3vw',
  color: 'white',
  paddingBottom: '70px',
}
const background = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  background: `url(${images['city']}) no-repeat center center`,
  backgroundSize: 'cover',
  height: '80vh',
  transition: 'background ease-in-out 500ms',
}
