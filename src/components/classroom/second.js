import React, { Component } from 'react'
import { images } from '../util/img'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <img src={images.lesson_1} alt='lesson-view1'
          style={image1}/>
        <div style={body}>
          <div style={title}>
            <div style={space}>♪</div>
            <div style={space}>ピ</div>
            <div style={space}>ア</div>
            <div style={space}>ノ</div>
            <div style={space}>レ</div>
            <div style={space}>ッ</div>
            <div style={space}>ス</div>
            <div style={space}>ン</div>
          </div>
          <div style={text}>* ３才から成人まで、一般的な基本コースをはじめ、</div>
          <div style={text}>　レッスン時間や回数に応じた各種コースをお選びいただけます。</div>
          <div style={text}>* 各コースとも個人レッスンを中心に、 </div>
          <div style={text}>　グループレッスンも併せて行います。（一部有料）</div>
          <div style={text}>* レッスン日は、月曜日から土曜日です。 </div>
          <div style={text}>　（日曜、祝日は原則お休みです。）</div>
          <div style={text}>* 日頃の成果を発揮できる発表会や、 </div>
          <div style={text}>　クリスマス会など楽しいイベントも盛りだくさんです。</div>
          <div style={text}>* 可能な時に、近隣の施設を訪問してのボランティア演奏も行っており、</div>
          <div style={text}>　お年寄りとの交流を通じて豊かな心を育てます。</div>
        </div>
        <img src={images.lesson_2} alt='lesson-view2'
          style={image2}/>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  height: '600px',
  backgroundColor: '#F6F6F6',
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
}
const space = {
  fontSize: '40px',
  paddingRight: '20px',
}
const text = {
  paddingBottom: '10px',
}
const image1 = {
  height: '350px',
  width: '469px',
  alignSelf: 'center',
  marginLeft: '10px',
  borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px',
}
const image2 = {
  height: '310px',
  width: '200px',
  alignSelf: 'center',
  marginRight: '10px',
  borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px',
}
