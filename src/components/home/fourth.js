import React, { Component } from 'react'
import { images } from '../util/img'
import { darkChar } from '../util/character'

export default class Fourth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={lesson}>
          <div style={title}>
            <div style={{...space,...darkChar}}>♪</div>
            <div style={{...space,...darkChar}}>教</div>
            <div style={{...space,...darkChar}}>室</div>
            <div style={{...space,...darkChar}}>に</div>
            <div style={{...space,...darkChar}}>つ</div>
            <div style={{...space,...darkChar}}>い</div>
            <div style={{...space,...darkChar}}>て</div>
          </div>
          <div style={body}>
            <div style={{...text,...darkChar}}>レッスンの行い方、月謝や教室の決まり、お願い事項などについて、お知らせします。当教室にご入会いただくうえで、大切な内容となりますので、必ずご一読いただくようお願いします。</div>
          </div>
        </div>
        <div style={imageWrap}>
          <img src={images.lesson3} alt='lesson-view' style={image}/>
        </div>
      </div>
    )
  }
}

const main = {
  display:'flex',
  flex:1,
  height: '40vh',
  backgroundColor: '#F6F6F6',
}
const image = {
  height:'30vw',
  width:'40vw',
  marginTop: '-5vw',
}
const imageWrap = {
  display:'flex',
  flex:1,
}
const lesson = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const title = {
  display: 'flex',
  paddingTop: '5vh',
  paddingBottom: '5vh',
}
const body = {
  paddingBottom: '1vh',
  maxWidth: '40vw',
}
const space = {
  fontSize: '3vw',
  paddingRight: '1vw',
}
const text = {
  fontSize: '1.5vw',
  paddingBottom: '1vh',
}
