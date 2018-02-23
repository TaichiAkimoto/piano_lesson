import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div style={header}>
      <Link to={'/instructor'}>講師紹介</Link>
      <Link to={'/classroom'}>クラス</Link>
      <Link to={'/lesson'}>レッスン</Link>
      <Link to={'/faq'}>お問い合わせ</Link>
    </div>
  )
}

const header = {
  border: '1px solid gray',
  height: '50px',
}
