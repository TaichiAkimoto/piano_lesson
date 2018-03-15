import React, { Component } from 'react'
import { images } from '../util/img'

export default class Fourth extends Component {
  render() {
    return (
      <div style={main}>
        <img src={images.lesson3} alt='lesson-view' style={image}/>
        <div style={lesson}>
          <div style={title}>
            <div style={space}>教</div>
            <div style={space}>室</div>
            <div style={space}>に</div>
            <div style={space}>つ</div>
            <div style={space}>い</div>
            <div style={space}>て</div>
          </div>
          <div style={body}>
            <div style={text}>レッスンの行い方、月謝や教室の決まり、</div>
            <div style={text}>お願い事項などについて、お知らせします。</div>
            <div style={text}>当教室にご入会いただくうえで、大切な内容となりますので、</div>
            <div style={text}>必ずご一読いただくようお願いします。</div>
          </div>
        </div>
      </div>
    )
  }
}

const main = {
  display:'flex',
  flex:1,
  backgroundColor: '#F6F6F6',
}
const image = {
  height:'400px',
  width:'600px',
  bottom: '30px', /* bottom height */
  top: '30%', /* position element 50% from left side */
  marginTop: '-100px',
  marginLeft: '50px',
  borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px',
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
  paddingTop: '30px',
  paddingBottom: '20px',
}
const body = {
  paddingBottom: '10px',
}
const space = {
  fontSize: '40px',
  paddingRight: '20px',
}
const text = {
  paddingBottom: '10px',
}
