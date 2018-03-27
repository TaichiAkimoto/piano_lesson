import React, { Component } from 'react'
import { darkChar } from '../util/character'

export default class Fourth extends Component {
  render() {
    return (
      <div style={main}>
        <div style={title}>
          <div style={{...space,...darkChar}}>♪</div>
          <div style={{...space,...darkChar}}>月</div>
          <div style={{...space,...darkChar}}>謝</div>
          <div style={{...space,...darkChar}}>・</div>
          <div style={{...space,...darkChar}}>年</div>
          <div style={{...space,...darkChar}}>会</div>
          <div style={{...space,...darkChar}}>費</div>
        </div>
        <div style={body}>
          <div style={gessha}>
            基本コース（年間43回）
          </div>
          <div style={nenkaihi}>
            基本コース（中学２年生以上)
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
  height: '80vh',
  backgroundColor: '#F6F6F6',
  paddingTop: '10vh',
}
const title = {
  display: 'flex',
  paddingBottom: '50px',
}
const space = {
  fontSize: '40px',
  paddingRight: '20px',
  color: '#13191b',
}
const body = {
  display: 'flex',
  flex: 1,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
}
const gessha = {
  display: 'flex',
  width: '40%',
  height: '80%',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#eea2c8',
  border: '1px solid #eea2c8',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  marginRight: '5px',
}
const nenkaihi = {
  display: 'flex',
  width: '20%',
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
