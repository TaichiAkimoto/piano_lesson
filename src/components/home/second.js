import React, { Component } from 'react'
import Interactive from 'react-interactive'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={space}>あ</div>
          <div style={space}>き</div>
          <div style={space}>も</div>
          <div style={space}>と</div>
          <div style={space}>音</div>
          <div style={space}>楽</div>
          <div style={space}>教</div>
          <div style={space}>室</div>
        </div>
        <div>
          <div style={text}>はじめまして</div>
          <div style={text}>横浜市神奈川区のピアノ教室です。</div>
          <div style={text}>レッスンや発表会、グループレッスンなどで、</div>
          <div style={text}>自己表現できる場を生徒さんに提供し、</div>
          <div style={text}>「自分は、できる」という自信を育てます。</div>
        </div>
        <Interactive
          as="a"
          href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={button}
          hover={buttonHover}
        >twitterへ</Interactive>
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
  height: '650px',
  backgroundColor: '#F6F6F6',
}
const title = {
  display: 'flex',
  paddingBottom: '50px',
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
  color: '#eea2c8',
  border: '1px solid #eea2c8',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  marginTop: '50px',
}

// hover時
const buttonHover = {
  backgroundColor:'#eea2c8',
  color:'#fff',
  transition: '1s',
}
