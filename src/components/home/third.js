import React, { Component } from 'react'
import { images } from '../util/img'
import Interactive from 'react-interactive'
import { Link } from 'react-router-dom'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={teacher}>
          <div style={title}>
            <div style={space}>講</div>
            <div style={space}>師</div>
            <div style={space}>紹</div>
            <div style={space}>介</div>
          </div>
          <span style={{fontSize:'30px'}}>となりのトトロ </span>​<span style={{fontSize:'25px',paddingLeft:'10px'}}>♪火曜日～土曜日 担当</span>
          <br/><span style={{fontSize:'30px'}}>ハリーポッター</span><span style={{fontSize:'25px',paddingLeft:'10px'}}>♪月曜日 担当</span>
          <Interactive
            as={Link}
            to={'/instructor'}
            rel="noreferrer noopener"
            style={button}
            hover={buttonHover}
          >講師紹介へ</Interactive>
        </div>
        <img src={images.lesson1} alt='lesson-view'
          style={image}/>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '600px',
  backgroundColor: '#FFFFFF',
}
const teacher = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}
const title = {
  display: 'flex',
  paddingBottom: '50px',
}
const space = {
  fontSize: '40px',
  paddingRight: '20px',
}
const image = {
  height:'400px',
  width:'600px',
  borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px',
}
const button = {
  display: 'inline-block',
  width: '162px',
  height: '46px',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#2f9bcd',
  border: '1px solid #2f9bcd',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
}

// hover時
const buttonHover = {
  backgroundColor:'#2f9bcd',
  color:'#fff',
  transition: '1s',
}
