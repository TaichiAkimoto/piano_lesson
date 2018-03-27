import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'
import { images } from '../util/img'
import { darkChar } from '../util/character'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={body}>
          <div style={title}>
            <div style={{...space,...darkChar}}>♪</div>
            <div style={{...space,...darkChar}}>グ</div>
            <div style={{...space,...darkChar}}>ル</div>
            <div style={{...space,...darkChar}}>ー</div>
            <div style={{...space,...darkChar}}>プ</div>
            <div style={{...space,...darkChar}}>レ</div>
            <div style={{...space,...darkChar}}>ッ</div>
            <div style={{...space,...darkChar}}>ス</div>
            <div style={{...space,...darkChar}}>ン</div>
          </div>
          <div style={texts}>
            <div style={{...text,...darkChar}}>* 個人レッスンとはまた違った内容でリトミックやソルフェージュを取り入れ、楽譜を読む力、音を聴く力、表現する力などが 自然に身につくように、ゲームやクイズなど工夫しながら楽しく行っています。ピアノを通して「音楽」を学ぶことを目的としています。</div>
            <div>
              <span style={{...text,...darkChar}}>* レッスンの詳細、月謝等につきましては、</span>
              <Interactive
                as={Link}
                to={'/lesson'}
                rel="noreferrer noopener"
                style={button}
                hover={buttonHover}
              >レッスンへ</Interactive>
              <span style={{...text,...darkChar}}>　をご覧ください。</span>
            </div>
          </div>
        </div>　　
        <div style={image2}>
          <img src={images.lesson_2} alt='lesson-view2' style={image2_img}/>
        </div>　
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  height: '80vh',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
}
const body = {
  display: 'flex',
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const texts = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40vw',
}
const title = {
  display: 'flex',
  paddingTop: '5vh',
  paddingBottom: '5vh',
}
const space = {
  fontSize: '3vw',
  paddingRight: '1vw',
}
const text = {
  fontSize: '1.5vw',
  paddingBottom: '1vh',
}
const image2 = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: '5vw',
}
const image2_img = {
  height: '24vw',
  width: '32.2vw',
  borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px',
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
}

// hover時
const buttonHover = {
  backgroundColor:'#eea2c8',
  color:'#fff',
  transition: '1s',
}
