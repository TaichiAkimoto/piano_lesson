import React, { Component } from 'react'
import { darkChar } from '../util/character'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={{...space,...darkChar}}>♪</div>
          <div style={{...space,...darkChar}}>あ</div>
          <div style={{...space,...darkChar}}>き</div>
          <div style={{...space,...darkChar}}>も</div>
          <div style={{...space,...darkChar}}>と</div>
          <div style={{...space,...darkChar}}>音</div>
          <div style={{...space,...darkChar}}>楽</div>
          <div style={{...space,...darkChar}}>教</div>
          <div style={{...space,...darkChar}}>室</div>
        </div>
        <div>
          <div style={{...text,...darkChar}}>はじめまして</div>
          <div style={{...text,...darkChar}}>横浜市神奈川区のピアノ教室です。</div>
          <div style={{...text,...darkChar}}>レッスンや発表会、グループレッスンなどで、</div>
          <div style={{...text,...darkChar}}>自己表現できる場を生徒さんに提供し、</div>
          <div style={{...text,...darkChar}}>「自分は、できる」という自信を育てます。</div>
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
  height: '90vh',
  backgroundColor: '#F6F6F6',
}
const title = {
  display: 'flex',
  paddingTop: '5vh',
  paddingBottom: '10vh',
}
const space = {
  fontSize: '3vw',
  paddingRight: '1vw',
}
const text = {
  fontSize: '1.5vw',
  paddingBottom: '1vh',
}
