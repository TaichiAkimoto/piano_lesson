import React from 'react';
import { Link } from 'react-router-dom'
import FaBeer from 'react-icons/lib/fa/beer';

export const Header = () => {
  return (
    <div style={header}>
      <div style={className}>
        <FaBeer style={{fontSize: '100px', paddingTop: '30px', color: 'white'}}/>
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
  paddingLeft: '80px',
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
  alignItems: 'flex-end',
  paddingRight:  '70px',
}
const link = {
  textDecoration: 'none',
  color: 'white',
  paddingLeft: '20px',
  paddingRight: '20px',
  fontSize: '20px',
}
