import React, { Component } from 'react'
import Interactive from 'react-interactive'
import { images } from '../util/img'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={space}>講</div>
          <div style={space}>師</div>
          <div style={space}>紹</div>
          <div style={space}>介</div>
        </div>
        <div style={body}>
          <div style={photo}>
            <img src={images.mahosensei} alt='lesson-view'
              style={{height:'525px',width:'350px',
              borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
          </div>
          <div style={name}>
            <div style={charge}>
              <div style={date}>♪火曜日～土曜日 担当</div>
              <div style={teacher}>
                <div style={space}>越</div>
                <div style={space}>路</div>
                <div style={space}>吹</div>
                <div style={space}>雪</div>
              </div>
            </div>
            <div style={history}>
              <div style={text}>・国立音楽大学卒業。</div>
              <div style={text}>
                ・大学時代より指導を始め、横浜市の公立中学校にて勤務後、
                電子オルガンで５年間演奏活動。
                ブライダルプレーヤーとしてホテルにて
              </div>
              <div style={text}>・1989年よりピアノ教室を主催。</div>
              <div style={text}>・坂本龍一氏にピアノを師事。</div>
              <div style={text}>・これまで指導した人数は100人以上。</div>
              <div style={text}>・ピアノ連盟所属。</div>
              <div style={text}>・ピアノオリンピックメダリスト。</div>
              <div style={text}>・ピアノ指導者賞</div>
              <div style={text}>・上記経歴はサイト制作者による創作です。</div>
            </div>
          </div>
        </div>
        <Interactive
          as="a"
          href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={button}
          hover={buttonHover}
        >ブログ</Interactive>
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
  height: '750px',
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
  paddingLeft: '60px',
}
const date = {

}
const teacher = {
  display: 'flex',
  flex: 1,
  alignItems: 'flex-end',
}
const history = {
  display: 'flex',
  flex: 5,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: '50px',
  paddingLeft: '75px',
  maxWidth: '550px',
  fontSize: '18px',
}
const text = {
  paddingBottom: '10px',
}
const photo = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
  marginBottom: '40px',
}

// hover時
const buttonHover = {
  backgroundColor: '#eea2c8',
  color:'#fff',
  transition: '1s',
}
