import React from 'react';
import { Link } from 'react-router-dom'
import FaBeer from 'react-icons/lib/fa/beer';

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
          <FaBeer style={{fontSize: '60px', color: 'white'}}/>
          <p style={nameText}>あきもと音楽教室</p>
        </div>
        <p style={{color: 'white'}}>All rights reserved</p>
      </div>
    </div>
  )
}

const footer = {
  height: '200px',
  backgroundColor: '#13191b',
}
const className = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: '120px',
  backgroundColor: '#656B6D',
}
const classIcon = {
  display: 'flex',
  flex: 1,
  justifyContent: 'row',
  alignItems: 'center',
}
const nameText = {
  color: 'white',
  fontSize: '30px',
}
const linkBody = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#939899',
  height: '80px',
}
const link = {
  textDecoration: 'none',
  color: 'white',
  paddingLeft: '20px',
  paddingRight: '20px',
  fontSize: '20px',
}
