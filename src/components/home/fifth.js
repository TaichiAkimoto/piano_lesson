import React, { Component } from 'react'
import { images } from '../util/img'
import Interactive from 'react-interactive'

export default class Fifth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={lesson}>
          <img src={images.lesson3} alt='lesson-view' style={{height:'400px',width:'600px',
          paddingRight:'150px',borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
          <Interactive
            as="a"
            href="https://twitter.com/piano_happy_"
            target="_blank"
            rel="noreferrer noopener"
            style={button}
            hover={buttonHover}
          >教室紹介</Interactive>
        </div>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '450px',
  backgroundColor: '#F6F6F6',
}
const lesson = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
}
const button = {
  display: 'inline-block',
  width: '162px',
  height: '46px',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#4871a9',
  border: '1px solid #4871a9',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  marginTop: '30px',
}

// hover時
const buttonHover = {
  backgroundColor:'#4871a9',
  color:'#fff',
  transition: '1s',
}
