import React from 'react';
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div style={footer}>
      <div style={linkBody}>
        <p style={link}>top</p>
        <Link to={'/instructor'} style={link}>講師紹介</Link>
        <Link to={'/classroom'} style={link}>クラス</Link>
        <Link to={'/lesson'} style={link}>レッスン</Link>
        <Link to={'/faq'} style={link}>お問い合わせ</Link>
      </div>
      <div style={className}>
        <div style={classIcon}>
          <div style={nameText}>あきもと音楽教室</div>
        </div>
        <div style={reserveRight}>All rights reserved</div>
      </div>
    </div>
  )
}

const footer = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '200px',
  backgroundColor: '#13191b',
}
const className = {
  display: 'flex',
  flex: 3,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#656B6D',
}
const classIcon = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const nameText = {
  color: 'white',
  fontSize: '15px',
}
const reserveRight = {
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  color: 'white',
  fontSize: '15px',
}
const linkBody = {
  display: 'flex',
  flex: 2,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#939899',
}
const link = {
  textDecoration: 'none',
  color: 'white',
  paddingLeft: '20px',
  paddingRight: '20px',
  fontSize: '20px',
}
