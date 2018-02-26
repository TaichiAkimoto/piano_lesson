import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div style={header}>
      <div style={className}>
        <p style={nameText}>あきもと音楽教室</p>
      </div>
      <div style={linkBody}>
        <Link to={'/instructor'} style={link}>講師紹介</Link>
        <Link to={'/classroom'} style={link}>クラス</Link>
        <Link to={'/lesson'} style={link}>レッスン</Link>
        <Link to={'/faq'} style={link}>お問い合わせ</Link>
      </div>
    </div>
  )
}

const header = {
  display: 'flex',
  flex: 1,
  height: '90px',
}
const className = {
  display: 'flex',
  flex: 1,
  paddingLeft: '150px',
}
const nameText = {
  color: 'white',
  fontSize: '50px',
}
const linkBody = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  paddingTop: '70px',
  paddingRight:  '70px',
}
const link = {
  textDecoration: 'none',
  color: 'white',
  paddingLeft: '20px',
  paddingRight: '20px',
  fontSize: '20px',
}
