import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { images } from '../util/img'
import { darkChar } from '../util/character'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={{...space,...darkChar}}>♪</div>
          <div style={{...space,...darkChar}}>講</div>
          <div style={{...space,...darkChar}}>師</div>
          <div style={{...space,...darkChar}}>紹</div>
          <div style={{...space,...darkChar}}>介</div>
        </div>
        <div style={body}>
          <div style={photo}>
            <img src={images.mahosensei} alt='lesson-view'
              style={{height:'38vw',width:'24vw'}}/>
          </div>
          <div style={name}>
            <div style={charge}>
              <div style={teacher}>
                <div style={{...space,...darkChar}}>お</div>
                <div style={{...space,...darkChar}}>名</div>
                <div style={{...space,...darkChar}}>前</div>
              </div>
            </div>
            <div style={history}>
              <div style={{...text,...darkChar}}>・国立音楽大学卒業。</div>
              <div style={{...text,...darkChar}}>
                ・大学時代より指導を始め、横浜市の公立中学校にて勤務後、
                電子オルガンで５年間演奏活動。
                ブライダルプレーヤーとしてホテルにて
              </div>
              <div style={{...text,...darkChar}}>・1989年よりピアノ教室を主催。</div>
              <div style={{...text,...darkChar}}>・これまで指導した人数は100人以上。</div>
              <div style={{...text,...darkChar}}>・ピアノ連盟所属。</div>
              <div style={{...text,...darkChar}}>・ピアノオリンピックメダリスト。</div>
              <div style={{...text,...darkChar}}>・ピアノ指導者賞</div>
              <div style={{...text,...darkChar}}>・上記経歴はサイト制作者による創作です。</div>
            </div>
            <Interactive
              as="a"
              href="https://twitter.com/piano_happy_"
              target="_blank"
              rel="noreferrer noopener"
              style={button}
              hover={buttonHover}
            >ブログへ</Interactive>
          </div>
        </div>
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
  height: '100vh',
  backgroundColor: '#F6F6F6',
}
const title = {
  display: 'flex',
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
const body = {
  display: 'flex',
  flex: 1,
}
const name = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
}
const charge = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
}
const teacher = {
  display: 'flex',
  flex: 1,
  alignItems: 'flex-end',
  paddingBottom: '2vh',
}
const history = {
  display: 'flex',
  flex: 5,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  maxWidth: '50vw',
}
const photo = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1vh',
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
  marginBottom: '5vh',
}

// hover時
const buttonHover = {
  backgroundColor: '#eea2c8',
  color:'#fff',
  transition: '1s',
}
