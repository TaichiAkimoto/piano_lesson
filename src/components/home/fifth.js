import React, { Component } from 'react'
import { images } from '../util/img'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'

export default class Fifth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={lesson}>
          <div style={buttonWrap}>
            <Interactive
              as={Link}
              to={'/classroom'}
              rel="noreferrer noopener"
              style={button}
              hover={buttonHover}
            >教室紹介へ</Interactive>
          </div>
          <div style={imageWrap}>
            <img src={images.contest} alt='lesson-view' style={{height:'30vw',width:'45vw'}}/>
          </div>
        </div>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  height: '70vh',
  backgroundColor: '#F6F6F6',
}
const lesson = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
}
const imageWrap = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
}
const buttonWrap = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
}
const button = {
  display: 'inline-block',
  width: '10vw',
  height: '8vh',
  lineHeight: '8vh',
  fontSize: '1vw',
  color: '#eea2c8',
  border: '1px solid #eea2c8',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  marginTop: '5vh',
}

// hover時
const buttonHover = {
  backgroundColor:'#eea2c8',
  color:'#fff',
  transition: '1s',
}
