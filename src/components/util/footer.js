import React from 'react';
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div style={main}>
      <div style={link}>
      <Link to={'/'} style={page}>トップ</Link>
        <Link to={'/instructor'} style={page}>講師紹介</Link>
        <Link to={'/classroom'} style={page}>クラス</Link>
        <Link to={'/lesson'} style={page}>レッスン</Link>
        <Link to={'/faq'} style={page}>お問い合わせ</Link>
      </div>
      <div style={subMain}>
        <div style={withIcon}>
          <div style={title}>あきもと音楽教室</div>
        </div>
        <div style={copyRight}>Copyright © 2018 Akimoto Ongaku Kyoshitsu All rights reserved.</div>
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
  color: 'white',
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
  color: 'white',
  fontSize: '2vw',
}
const copyRight = {
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  color: 'white',
  fontSize: '1.3vw',
}
