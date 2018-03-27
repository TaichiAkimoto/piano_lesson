import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'
import { darkChar } from '../util/character'

export default class Sixth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={{...space,...darkChar}}>♪</div>
          <div style={{...space,...darkChar}}>レ</div>
          <div style={{...space,...darkChar}}>ッ</div>
          <div style={{...space,...darkChar}}>ス</div>
          <div style={{...space,...darkChar}}>ン</div>
          <div style={{...space,...darkChar}}>に</div>
          <div style={{...space,...darkChar}}>つ</div>
          <div style={{...space,...darkChar}}>い</div>
          <div style={{...space,...darkChar}}>て</div>
        </div>
        <div>
          <div style={{...text,...darkChar}}>ピアノを始めたい方へ♪</div>
          <div style={{...text,...darkChar}}>小さいお子様から成人の方まで、</div>
          <div style={{...text,...darkChar}}>個人レッスンとグループレッスンを組み合わせた各コースをお選びいただき</div>
          <div style={{...text,...darkChar}}>楽しみながら上達できるよう、丁寧に指導いたします。</div>
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
