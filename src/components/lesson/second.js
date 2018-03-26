import React, { Component } from 'react'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={space}>レ</div>
          <div style={space}>ッ</div>
          <div style={space}>ス</div>
          <div style={space}>ン</div>
          <div style={space}>に</div>
          <div style={space}>つ</div>
          <div style={space}>い</div>
          <div style={space}>て</div>
        </div>
        <div style={body}>
          <div style={lessons}>
            基本コース（年間43回）
          </div>
          <div style={lessons}>
            基本コース（中学２年生以上)
          </div>
          <div style={lessons}>
            月２回コース（中学生以上)
          </div>
        </div>
        <div style={warning}>
          <div style={semiTitle}>
            ＜レッスンに関する注意事項＞
          </div>
          <div style={content}>
            <div style={text}>* 年間レッスン数には、発表会、クリスマス会が含まれます。</div>
            <div style={text}>*　音楽の専門に進学を希望される方は、上記以外のコースとなりますので、別途ご相談ください。</div>
            <div style={text}>* レッスンの入室は、開始５分前から可能ですので、時間を見計らってお越しください。 </div>
            <div style={text}>* レッスン数の都合上、祝日、振替休日にレッスンを行う場合がありますが、その場合は事前にご連絡します。</div>
            <div style={text}>* 個人レッスンのため、学校行事以外の理由での日程変更はできません。 </div>
            <div style={text}>* 中学生以下の方の場合は、レッスン日の２週間前までに必ず保護者の方からご連絡ください。  </div>
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
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
}
const lessons = {
  width: '30%',
  height: '80%',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#eea2c8',
  border: '1px solid #eea2c8',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
}
const warning = {
  paddingBottom: '20px',
}
const semiTitle = {
  paddingBottom: '10px',
}
const content = {
  display: 'flex',
  flexDirection: 'column',
}
const text = {
  paddingBottom: '10px',
}
