import React, { Component } from 'react'
import { darkChar } from '../util/character'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={{...space,...darkChar}}>レ</div>
          <div style={{...space,...darkChar}}>ッ</div>
          <div style={{...space,...darkChar}}>ス</div>
          <div style={{...space,...darkChar}}>ン</div>
          <div style={{...space,...darkChar}}>に</div>
          <div style={{...space,...darkChar}}>つ</div>
          <div style={{...space,...darkChar}}>い</div>
          <div style={{...space,...darkChar}}>て</div>
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
            <div style={{...text,...darkChar}}>* 年間レッスン数には、発表会、クリスマス会が含まれます。</div>
            <div style={{...text,...darkChar}}>*　音楽の専門に進学を希望される方は、上記以外のコースとなりますので、別途ご相談ください。</div>
            <div style={{...text,...darkChar}}>* レッスンの入室は、開始５分前から可能ですので、時間を見計らってお越しください。 </div>
            <div style={{...text,...darkChar}}>* レッスン数の都合上、祝日、振替休日にレッスンを行う場合がありますが、その場合は事前にご連絡します。</div>
            <div style={{...text,...darkChar}}>* 個人レッスンのため、学校行事以外の理由での日程変更はできません。 </div>
            <div style={{...text,...darkChar}}>* 中学生以下の方の場合は、レッスン日の２週間前までに必ず保護者の方からご連絡ください。  </div>
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
