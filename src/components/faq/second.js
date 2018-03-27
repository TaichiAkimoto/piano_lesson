import React, { Component } from 'react'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={body}>
          <div style={title}>
            <div style={space}>♪</div>
            <div style={space}>お</div>
            <div style={space}>問</div>
            <div style={space}>い</div>
            <div style={space}>合</div>
            <div style={space}>わ</div>
            <div style={space}>せ</div>
          </div>
        </div>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  flex: 1,
  height: '90vh',
  justifyContent: 'space-around',
  backgroundColor: '#F6F6F6',
}
const body = {
  display: 'flex',
  flex: 1.5,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '5vw',
}
const title = {
  display: 'flex',
  paddingTop: '5vh',
  paddingBottom: '5vh',
}
const space = {
  fontSize: '3vw',
  paddingRight: '1vw',
}
