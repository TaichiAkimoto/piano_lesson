import React from 'react';
import { Link } from 'react-router-dom'
import Interactive from 'react-interactive'

export const Header = () => {
  return (
    <div style={header}>
      <Interactive
        as="div"
        style={nameText}
        hover={opacity}
      >あきもと音楽教室</Interactive>
      <div style={linkBody}>
        <Interactive
          as={Link}
          to={'/instructor'}
          style={link}
          hover={underline}
        >講師紹介</Interactive>
        <Interactive
          as={Link}
          to={'/classroom'}
          style={link}
          hover={underline}
        >クラス</Interactive>
        <Interactive
          as={Link}
          to={'/lesson'}
          style={link}
          hover={underline}
        >レッスン</Interactive>
        <Interactive
          as={Link}
          to={'/faq'}
          style={link}
          hover={underline}
        >お問い合わせ</Interactive>
      </div>
    </div>
  )
}

const header = {
  display: 'flex',
  flex: 1,
}
const nameText = {
  marginLeft: '150px',
  marginTop: '100px',
  color: 'white',
  fontSize: '50px',
  height: '50px',
}
const linkBody = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  paddingTop: '120px',
  paddingRight:  '70px',
}
const link = {
  textDecoration: 'none',
  color: 'white',
  paddingLeft: '20px',
  paddingRight: '20px',
  fontSize: '20px',
}
// hover時
const opacity = {
  opacity: 0.7,
  transition: '1s',
}
const underline = {
  paddingBottom: '3px',
  borderBottom: '1px solid #fff',
  transition: '1s',
}
