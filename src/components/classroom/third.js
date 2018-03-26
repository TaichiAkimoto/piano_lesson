import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={body}>
          <div style={title}>
            <div style={space}>♪</div>
            <div style={space}>グ</div>
            <div style={space}>ル</div>
            <div style={space}>ー</div>
            <div style={space}>プ</div>
            <div style={space}>レ</div>
            <div style={space}>ッ</div>
            <div style={space}>ス</div>
            <div style={space}>ン</div>
          </div>
          <div style={content}>
            <div style={text}>* 個人レッスンとはまた違った内容で</div>
            <div style={text}>　リトミックやソルフェージュを取り入れ、</div>
            <div style={text}>  楽譜を読む力、音を聴く力、表現する力などが </div>
            <div style={text}>　自然に身につくように、</div>
            <div style={text}>  ゲームやクイズなど工夫しながら楽しく行っています。 </div>
            <div style={text}>　ピアノを通して「音楽」を学ぶことを目的としています。 </div>
            <div style={text}>＊レッスンの詳細、月謝等につきましては、</div>
            <Interactive
              as={Link}
              to={'/lesson'}
              rel="noreferrer noopener"
              style={button}
              hover={buttonHover}
            >レッスンへ</Interactive>
            <div style={text}>　をご覧ください。</div>
          </div>
        </div>　　　
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  height: '600px',
  backgroundColor: '#FFFFFF',
}
const body = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const title = {
  display: 'flex',
  paddingBottom: '20px',
  paddingTop: '20px',
}
const content = {
  display: 'flex',
  flexDirection: 'column',
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
  marginLeft: '20px',
  marginBottom: '10px',
}

// hover時
const buttonHover = {
  backgroundColor:'#eea2c8',
  color:'#fff',
  transition: '1s',
}
