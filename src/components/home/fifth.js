import React, { Component } from 'react'
import { images } from '../util/img'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'

export default class Fifth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={lesson}>
          <img src={images.lesson3} alt='lesson-view' style={{height:'30vw',width:'45vw',
          marginRight:'10vw',borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
          <Interactive
            as={Link}
            to={'/classroom'}
            rel="noreferrer noopener"
            style={button}
            hover={buttonHover}
          >教室紹介へ</Interactive>
        </div>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '450px',
  backgroundColor: '#F6F6F6',
}
const lesson = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
}
const button = {
  display: 'inline-block',
  width: '10vw',
  height: '8vh',
  lineHeight: '8vh',
  fontSize: '1vw',
  color: '#2f9bcd',
  border: '1px solid #2f9bcd',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  marginTop: '5vh',
}

// hover時
const buttonHover = {
  backgroundColor:'#2f9bcd',
  color:'#fff',
  transition: '1s',
}
