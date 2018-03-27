import React, { Component } from 'react'
import { darkChar } from '../util/character'

export default class Second extends Component {
  render() {
    return (
      <div style={main}>
        <div style={body}>
          <div style={title}>
            <div style={{...space,...darkChar}}>♪</div>
            <div style={{...space,...darkChar}}>お</div>
            <div style={{...space,...darkChar}}>問</div>
            <div style={{...space,...darkChar}}>い</div>
            <div style={{...space,...darkChar}}>合</div>
            <div style={{...space,...darkChar}}>わ</div>
            <div style={{...space,...darkChar}}>せ</div>
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
