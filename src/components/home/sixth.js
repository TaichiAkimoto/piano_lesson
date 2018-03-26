import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'

export default class Sixth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={space}>レ</div>
          <div style={space}>ッ</div>
          <div style={space}>ス</div>
          <div style={space}>ン</div>
          <div style={space}>に</div>
          <div style={space}>つ</div>
          <div style={space}>い</div>
          <div style={space}>て</div>
        </div>
        <div>
          <div style={text}>ピアノを始めたい方へ♪</div>
          <div style={text}>小さいお子様から成人の方まで、</div>
          <div style={text}>個人レッスンとグループレッスンを組み合わせた各コースをお選びいただき</div>
          <div style={text}>楽しみながら上達できるよう、丁寧に指導いたします。</div>
        </div>
        <Interactive
          as={Link}
          to={'/lesson'}
          rel="noreferrer noopener"
          style={button}
          hover={buttonHover}
        >レッスンへ</Interactive>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '80vh',
  backgroundColor: '#FFFFFF',
}
const title = {
  display: 'flex',
  paddingBottom: '50px',
  paddingTop: '50px',
}
const space = {
  fontSize: '3vw',
  paddingRight: '1vw',
}
const text = {
  fontSize: '1.5vw',
  paddingBottom: '1vh',
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
