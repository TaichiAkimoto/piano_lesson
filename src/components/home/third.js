import React, { Component } from 'react'
import { images } from '../util/img'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'
import { darkChar } from '../util/character'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={teacher}>
          <div style={title}>
            <div style={{...space,...darkChar}}>♪</div>
            <div style={{...space,...darkChar}}>講</div>
            <div style={{...space,...darkChar}}>師</div>
            <div style={{...space,...darkChar}}>紹</div>
            <div style={{...space,...darkChar}}>介</div>
          </div>
          <div style={{...names,...darkChar}}>
            <div>
              <strong>お名前1</strong> ♪火曜日～土曜日 担当
            </div>
            <div style={{...names,...darkChar}}>
              <strong>お名前2</strong>  ♪月曜日 担当
            </div>
          </div>
          <Interactive
            as={Link}
            to={'/instructor'}
            rel="noreferrer noopener"
            style={button}
            hover={buttonHover}
            after={{display: 'block',clear: 'both',content: "",}}
          >講師紹介へ</Interactive>
        </div>
        <img src={images.lesson1} alt='lesson-view'
          style={image}/>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  backgroundColor: '#FFFFFF',
}
const names = {
  fontSize: '1.5vw',
}
const teacher = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
}
const title = {
  display: 'flex',
  paddingBottom: '5vh',
}
const space = {
  fontSize: '3vw',
  paddingRight: '1vw',
}
const image = {
  height:'30vw',
  width:'45vw',
  marginRight: '10vw',
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
