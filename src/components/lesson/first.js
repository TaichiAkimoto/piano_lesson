import React, { Component } from 'react'
import { Header } from '../util/header'
import { images } from '../util/img'

export default class First extends Component {
  render() {
    return (
      <div style={main}>
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            background: `url(${images['clear']}) no-repeat center center`,
            backgroundSize: '1800px',
            height: '300px',
            borderRadius: '0px 0px 700px 700px/0px 0px 30px 30px',
            transition: 'background ease-in-out 500ms',
          }}
        >
          <Header />
        </div>
      </div>
    )
  }
}

const main = {
  height: '400px',
  backgroundColor: '#F6F6F6',
}
