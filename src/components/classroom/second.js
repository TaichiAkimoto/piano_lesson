import React, { Component } from 'react'
import { images } from '../util/img'
import { darkChar } from '../util/character'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={image1}>
          <img src={images.lesson_1} alt='lesson-view1' style={image1_img}/>
        </div>
        <div style={body}>
          <div style={title}>
            <div style={{...space,...darkChar}}>♪</div>
            <div style={{...space,...darkChar}}>ピ</div>
            <div style={{...space,...darkChar}}>ア</div>
            <div style={{...space,...darkChar}}>ノ</div>
            <div style={{...space,...darkChar}}>レ</div>
            <div style={{...space,...darkChar}}>ッ</div>
            <div style={{...space,...darkChar}}>ス</div>
            <div style={{...space,...darkChar}}>ン</div>
          </div>
          <div style={texts}>
            <div style={{...text,...darkChar}}>* ３才から成人まで、一般的な基本コースをはじめ、レッスン時間や回数に応じた各種コースをお選びいただけます。</div>
            <div style={{...text,...darkChar}}>* 各コースとも個人レッスンを中心に、グループレッスンも併せて行います。（一部有料） </div>
            <div style={{...text,...darkChar}}>* レッスン日は、月曜日から土曜日です。（日曜、祝日は原則お休みです。） </div>
            <div style={{...text,...darkChar}}>* 日頃の成果を発揮できる発表会や、 　クリスマス会など楽しいイベントも盛りだくさんです。</div>
            <div style={{...text,...darkChar}}>* 可能な時に、近隣の施設を訪問してのボランティア演奏も行っており、お年寄りとの交流を通じて豊かな心を育てます。</div>
          </div>
        </div>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  height: '90vh',
  justifyContent: 'space-around',
  backgroundColor: '#F6F6F6',
}
const body = {
  display: 'flex',
  flex: 1.5,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: '5vw',
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
const texts = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '50vw',
}
const image1 = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}
const image1_img = {
  height: '24vw',
  width: '32.2vw',
  borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px',
}
