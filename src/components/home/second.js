import React, { Component } from 'react';

export default class Second extends Component {
  render() {
    return (
      <div style={introduction}>
        <div style={inline}>
          <div style={spacing}>あ</div>
          <div style={spacing}>き</div>
          <div style={spacing}>も</div>
          <div style={spacing}>と</div>
          <div style={spacing}>音</div>
          <div style={spacing}>楽</div>
          <div style={spacing}>教</div>
          <div style={spacing}>室</div>
        </div>
        <div>
          <div style={letter}>はじめまして</div>
          <div style={letter}>横浜市神奈川区のピアノ教室です。</div>
          <div style={letter}>レッスンや発表会、グループレッスンなどで、</div>
          <div style={letter}>自己表現できる場を生徒さんに提供し、</div>
          <div style={letter}>「自分は、できる」という自信を育てます。</div>
        </div>
        <a href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={neoButton}>
          ブログ
        </a>
      </div>
    )
  }
}

const introduction = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '650px',
  backgroundColor: '#F6F6F6',
}
const inline = {
  display: 'flex',
  paddingBottom: '50px',
}
const spacing = {
  fontSize: '40px',
  paddingRight: '20px',
}
const letter = {
  paddingBottom: '10px',
}
const neoButton = {
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
  marginTop: '50px',
}
