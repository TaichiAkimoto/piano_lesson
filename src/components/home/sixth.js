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
  height: '450px',
  backgroundColor: '#FFFFFF',
}
const title = {
  display: 'flex',
  paddingBottom: '50px',
  paddingTop: '50px',
}
const space = {
  fontSize: '40px',
  paddingRight: '20px',
}
const text = {
  paddingBottom: '10px',
}
const button = {
  display: 'inline-block',
  width: '162px',
  height: '46px',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#2f9bcd',
  border: '1px solid #2f9bcd',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  marginTop: '30px',
}

// hover時
const buttonHover = {
  backgroundColor:'#2f9bcd',
  color:'#fff',
  transition: '1s',
}
