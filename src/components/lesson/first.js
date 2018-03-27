import React, { Component } from 'react'
import { Header } from '../util/header'
import { images } from '../util/img'

export default class First extends Component {
  render() {
    return (
      <div style={main}>
        <div style={background}>
          <Header />
        </div>
      </div>
    )
  }
}

const main = {
  height: '80vh',
  backgroundColor: '#F6F6F6',
}
const background = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  background: `url(${images['arctic']}) no-repeat center center`,
  backgroundSize: 'cover',
  height: '70vh',
  transition: 'background ease-in-out 500ms',
}
