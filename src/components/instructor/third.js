import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'
import { darkChar } from '../util/character'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={{...space,...darkChar}}>♪</div>
          <div style={{...space,...darkChar}}>方</div>
          <div style={{...space,...darkChar}}>針</div>
        </div>
        <div style={paragraph}>
          <div style={{...text,...darkChar}}>教職と母親業の経験を生かし、保護者の皆様とのコミュニケーションを取りながら、お一人お一人に合わせたレッスンを心がけています。いすに座って楽譜に向き合うピアノ学習の他に
          リトミック（音楽を身体で表現して学んでいく教育）やソルフェージュ（楽譜が読めるようになるための基礎力をつける教育法）を取り入れることにより、スムーズに初めから「正しいこと」を身につけていただけるような指導をしています。</div>
        </div>
        <Interactive
          as={Link}
          to={'/'}
          rel="noreferrer noopener"
          style={button}
          hover={buttonHover}
        >トップに戻る</Interactive>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '65vh',
  backgroundColor: '#FFFFFF',
  paddingTop: '1vh',
}
const title = {
  display: 'flex',
  paddingTop: '5vh',
}
const space = {
  fontSize: '3vw',
  paddingRight: '1vw',
}
const paragraph = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: '60vw',
  paddingTop: '1vh',
}
const text = {
  fontSize: '1.5vw',
  lineHeight: '6vh',
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
  marginTop: '3vh',
}

// hover時
const buttonHover = {
  backgroundColor:'#2f9bcd',
  color:'#fff',
  transition: '1s',
}
