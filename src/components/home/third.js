import React, { Component } from 'react'
import { images } from '../util/img'
import Interactive from 'react-interactive'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={background}>
          <div style={teacher}>
            <div style={title}>
              <div style={space}>講</div>
              <div style={space}>師</div>
              <div style={space}>紹</div>
              <div style={space}>介</div>
            </div>
            <span style={{fontSize:'30px'}}>となりのトトロ </span>​<span style={{fontSize:'25px',paddingLeft:'10px'}}>♪火曜日～土曜日 担当</span>
            <br/><span style={{fontSize:'30px'}}>ハリーポッター</span><span style={{fontSize:'25px',paddingLeft:'10px'}}>♪月曜日 担当</span>
          </div>
          <img src={images.lesson1} alt='lesson-view'
            style={{height:'400px',width:'600px',
            borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
        </div>
        <Interactive
          as="a"
          href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={button}
          hover={{ fontSize: '30px' }}
        >講師紹介</Interactive>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '600px',
  backgroundColor: '#FFFFFF',
}
const background = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
const teacher = {
  paddingRight: '100px',
}
const title = {
  display: 'flex',
  paddingBottom: '50px',
}
const space = {
  fontSize: '40px',
  paddingRight: '20px',
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
  alignSelf: 'center',
  marginBottom: '30px',
}
