import React, { Component } from 'react'

export default class Third extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={space}>♪</div>
          <div style={space}>発</div>
          <div style={space}>表</div>
          <div style={space}>会</div>
          <div style={space}>等</div>
        </div>
        <div style={body}>
          <div style={lessons}>
            発表会
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
}
const title = {
  display: 'flex',
  paddingTop: '50px',
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
  width: '80%',
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
