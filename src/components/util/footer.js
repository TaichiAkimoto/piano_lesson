import React from 'react';
import { Link } from 'react-router-dom'
import { lightChar } from './character'

export const Footer = () => {
  return (
    <div style={main}>
      <div style={link}>
      <Link to={'/'} style={{...page,...lightChar}}>トップ</Link>
        <Link to={'/instructor'} style={{...page,...lightChar}}>講師紹介</Link>
        <Link to={'/classroom'} style={{...page,...lightChar}}>クラス</Link>
        <Link to={'/lesson'} style={{...page,...lightChar}}>レッスン</Link>
        <Link to={'/faq'} style={{...page,...lightChar}}>お問い合わせ</Link>
      </div>
      <div style={subMain}>
        <div style={withIcon}>
          <div style={{...title,...lightChar}}>あきもと音楽教室</div>
        </div>
        <div style={{...copyRight,...lightChar}}>Copyright © 2018 Akimoto Ongaku Kyoshitsu All rights reserved.</div>
      </div>
    </div>
  )
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '30vh',
  backgroundColor: '#13191b',
}
const link = {
  display: 'flex',
  flex: 2,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#939899',
}
const page = {
  textDecoration: 'none',
  padding: '1vw',
  fontSize: '1.3vw',
}
const subMain = {
  display: 'flex',
  flex: 3,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#656B6D',
}
const withIcon = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const title = {
  fontSize: '2vw',
}
const copyRight = {
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  fontSize: '1.3vw',
}
