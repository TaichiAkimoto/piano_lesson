import React, { Component } from 'react'
import Interactive from 'react-interactive'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={paragraph}>
          <div style={text}>教職と母親業の経験を生かし、</div>
          <div style={text}>保護者の皆様とのコミュニケーションを取りながら、</div>
          <div style={text}>お一人お一人に合わせたレッスンを心がけています。</div>
          <div style={text}>いすに座って楽譜に向き合うピアノ学習の他に</div>
          <div style={text}>リトミック（音楽を身体で表現して学んでいく教育）や</div>
          <div style={text}>ソルフェージュ（楽譜が読めるようになるための基礎力をつける教育法）</div>
          <div style={text}>を取り入れることにより、</div>
          <div style={text}>スムーズに初めから「正しいこと」を</div>
          <div style={text}>身につけていただけるような指導をしています。</div>
        </div>
        <Interactive
          as="a"
          href="https://twitter.com/piano_happy_"
          target="_blank"
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
  height: '500px',
  backgroundColor: '#FFFFFF',
  paddingTop: '40px',
}
const paragraph = {
  maxWidth: '700px',
}
const text = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
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
  marginTop: '20px',
}

// hover時
const buttonHover = {
  backgroundColor:'#2f9bcd',
  color:'#fff',
  transition: '1s',
}
