import React, { Component } from 'react'
import { Header } from '../util/header'
import { images } from '../util/img'
import DownArrow from 'react-icons/lib/fa/chevron-down'
import {animateScroll as scroll } from 'react-scroll'
const topPhoto = [
  images['cat'],
  images['arctic'],
  images['cave'],
  images['city'],
  images['clear'],
]

export default class First extends Component {
  state = {
    photoIndex: 0
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        photoIndex: (this.state.photoIndex+1)%topPhoto.length
      })
    }, 5000)
  }
  render() {
    return (
      <div style={main}>
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            background: `url(${topPhoto[this.state.photoIndex]}) no-repeat center center`,
            backgroundSize: '1800px',
            height: '650px',
            borderRadius: '0px 0px 700px 700px/0px 0px 30px 30px',
            transition: 'background ease-in-out 500ms',
          }}
        >
          <Header />
          <DownArrow style={arrow} onClick={() => scroll.scrollTo(725)}/>
        </div>
      </div>
    )
  }
}

const main = {
  height: '700px',
  backgroundColor: '#F6F6F6',
}
const arrow = {
  alignSelf: 'center',
  fontSize: '30px',
  color: 'white',
  paddingBottom: '70px',
}
