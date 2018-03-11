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
          <div style={name}>
            <div style={title}>
              <div style={space}>礒</div>
              <div style={space}>崎</div>
              <div style={space}>真</div>
              <div style={space}>帆</div>
            </div>
            <div style={history}>
              <div style={text}>・国立音楽大学　教育音楽学科Ⅰ類卒業。</div>
              <div style={text}>・大学時代より指導を始め、横浜市の公立中学校にて勤務後、</div>
              <div style={text}>・ブライダルプレーヤーとしてホテルにて</div>
              <div style={text}>・電子オルガンで５年間演奏活動。</div>
              <div style={text}>・1989年よりピアノ教室を主催。</div>
              <div style={text}>・郷農久美子氏にピアノを師事。</div>
              <div style={text}>・これまで指導した人数は100人以上。</div>
              <div style={text}>・さいたま音の葉研究会所属。</div>
              <div style={text}>・ＰＴＮＡ会員。</div>
              <div style={text}>・グレンツェンピアノコンクール指導者賞</div>
            </div>
          </div>
          <div style={photo}>
            <img src={images.mahosensei} alt='lesson-view'
              style={{height:'450px',width:'300px',
              borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
            <div style={greeting}>
              <div style={text}>教職と母親業の経験を生かし、</div>
              <div style={text}>保護者の皆様とのコミュニケーションを取りながら、</div>
              <div style={text}>お一人お一人に合わせたレッスンを心がけています。</div>
              <div style={text}>いすに座って楽譜に向き合うピアノ学習の他に</div>
              <div style={text}>リトミック（音楽を身体で表現して学んでいく教育）や</div>
              <div style={text}>ソルフェージュ（楽譜が読めるようになるための基礎力をつける教育法）</div>
              <div style={text}>を取り入れることにより、</div>
              <div style={text}>スムーズに初めから「正しいこと」</div>
              <div style={text}>を身につけていただけるような指導をしています。</div>
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
  height: '800px',
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
}
const history = {
  fontSize: '18px',
}
const text = {
  paddingBottom: '10px',
}
const photo = {

}
const greeting = {
  fontSize: '18px',
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
  marginBottom: '50px',
}

// hover時
const buttonHover = {
  backgroundColor:'#4871a9',
  color:'#fff',
  transition: '1s',
}
