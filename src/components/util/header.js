import React from 'react';
import { Link } from 'react-router-dom'
import Interactive from 'react-interactive'
import { lightChar } from './character'

export const Header = () => {
  return (
    <div style={header}>
      <div style={nameCover}>
        <Interactive
          as={Link}
          to={'/'}
          style={{...nameText, ...lightChar}}
          hover={opacity}
        >あきもと音楽教室</Interactive>
      </div>
      <div style={linkBody}>
        <Interactive
          as={Link}
          to={'/'}
          style={{...link,...lightChar}}
          hover={underline}
        >トップ</Interactive>
        <Interactive
          as={Link}
          to={'/instructor'}
          style={{...link,...lightChar}}
          hover={underline}
        >講師紹介</Interactive>
        <Interactive
          as={Link}
          to={'/classroom'}
          style={{...link,...lightChar}}
          hover={underline}
        >クラス</Interactive>
        <Interactive
          as={Link}
          to={'/lesson'}
          style={{...link,...lightChar}}
          hover={underline}
        >レッスン</Interactive>
        <Interactive
          as={Link}
          to={'/faq'}
          style={{...link,...lightChar}}
          hover={underline}
        >お問い合わせ</Interactive>
      </div>
    </div>
  )
}

const header = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
}
const nameCover = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  paddingTop: '15vh',
}
const nameText = {
  display: 'flex',
  flex: 1,
  textDecoration: 'none',
  fontSize: '4vw',
}
const linkBody = {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-around',
  paddingTop: '18vh',
}
const link = {
  display: 'flex',
  flex: 1,
  textDecoration: 'none',
  color: 'white',
  fontSize: '1.4vw',
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
