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
              style={{height:'450px',width:'300px',
              borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
            <div style={greeting}>
              <div style={paragraph}>
                教職と母親業の経験を生かし、保護者の皆様とのコミュニケーションを取りながら、
                お一人お一人に合わせたレッスンを心がけています。
                いすに座って楽譜に向き合うピアノ学習の他にリトミック（音楽を身体で表現して学んでいく教育）や
                ソルフェージュ（楽譜が読めるようになるための基礎力をつける教育法）を取り入れることにより、
                スムーズに初めから「正しいこと」を身につけていただけるような指導をしています。
              </div>
            </div>
          </div>
          <div style={name}>
            <div style={charge}>
              <div style={date}>♪火曜日～土曜日 担当</div>
              <div style={teacher}>
                <div style={space}>東</div>
                <div style={space}>西</div>
                <div style={space}>南</div>
                <div style={space}>北</div>
              </div>
            </div>
            <div style={history}>
              <div style={text}>・国立大学　東京大学法学部卒業。</div>
              <div style={text}>
                ・大学時代より指導を始め、横浜市の公立中学校にて勤務後、
                電子オルガンで５年間演奏活動。
                ブライダルプレーヤーとしてホテルにて
              </div>
              <div style={text}>・1989年よりピアノ教室を主催。</div>
              <div style={text}>・アマデウス・モーツァルト氏にピアノを師事。</div>
              <div style={text}>・これまで指導した人数は100人以上。</div>
              <div style={text}>・東京大学所属。</div>
              <div style={text}>・オリンピックメダリスト。</div>
              <div style={text}>・羽生結弦指導者賞</div>
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
  height: '900px',
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
}
const date = {
  paddingLeft: '110px',
}
const teacher = {
  display: 'flex',
  flex: 1,
  alignItems: 'flex-end',
  paddingLeft: '110px',
}
const history = {
  display: 'flex',
  flex: 5,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: '50px',
  paddingLeft: '100px',
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
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
}
const greeting = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-end',
  maxWidth: '500px',
  paddingTop: '30px',
  fontSize: '18px',
}
const paragraph = {
  paddingBottom: '1px',
}
const button = {
  display: 'inline-block',
  width: '162px',
  height: '46px',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#4871a9',
  border: '1px solid #4871a9',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  marginBottom: '40px',
}

// hover時
const buttonHover = {
  backgroundColor:'#4871a9',
  color:'#fff',
  transition: '1s',
}
