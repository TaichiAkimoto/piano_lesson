import React, { Component } from 'react'

export default class Fifth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={space}>♪</div>
          <div style={space}>そ</div>
          <div style={space}>の</div>
          <div style={space}>他</div>
        </div>
        <div style={body}>
          <div style={lessons}>
            欠席・遅刻の連絡
          </div>
        </div>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '750px',
  backgroundColor: '#FFFFFF',
  paddingTop: '50px',
}
const title = {
  display: 'flex',
  paddingBottom: '50px',
}
const space = {
  fontSize: '40px',
  paddingRight: '20px',
}
const body = {
  display: 'flex',
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
}
const lessons = {
  width: '50%',
  height: '80%',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#eea2c8',
  border: '1px solid #eea2c8',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
}
