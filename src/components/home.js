import React, { Component } from 'react';
import { Header } from './header'
import { Footer } from './footer'
import cat from '../img/cat.jpg'
import oldClock from '../img/coldplay.jpg'
import arctic from '../img/arctic.jpg'
import cave from '../img/cave.jpg'
import city from '../img/city.jpg'
import clear from '../img/clear.jpg'
import Arrow from 'react-icons/lib/fa/chevron-down'
import lesson1 from '../img/first.jpg'
import lesson2 from '../img/second.jpg'
import lesson3 from '../img/third.jpg'
const imageArray = [
  cat,
  oldClock,
  arctic,
  cave,
  city,
  clear
]

class Home extends Component {
  state = {
    currentIndex: 0
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        currentIndex: (this.state.currentIndex+1)%imageArray.length
      })
    }, 5000)
  }
  render() {
    let page = 'about';
    if (!page) page = 'home';
    return (
      <div style={home}>
      <div style={backGround}>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: `url(${imageArray[this.state.currentIndex]}) no-repeat center center`,
          backgroundSize: '1800px',
          height: '650px',
          borderRadius: '0px 0px 700px 700px/0px 0px 30px 30px',
          transition: 'background ease-in-out 500ms'
        }}>
          <Header />
          <Arrow style={arrow}/>
        </div>
      </div>
      <div style={introduction}>
        <div style={inline}>
          <div style={spacing}>あ</div>
          <div style={spacing}>き</div>
          <div style={spacing}>も</div>
          <div style={spacing}>と</div>
          <div style={spacing}>音</div>
          <div style={spacing}>楽</div>
          <div style={spacing}>教</div>
          <div style={spacing}>室</div>
        </div>
        <div>
          <div style={letter}>はじめまして</div>
          <div style={letter}>横浜市神奈川区のピアノ教室です。</div>
          <div style={letter}>レッスンや発表会、グループレッスンなどで、</div>
          <div style={letter}>自己表現できる場を生徒さんに提供し、</div>
          <div style={letter}>「自分は、できる」という自信を育てます。</div>
        </div>
        <a href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={neoButton}>
          Twitter
        </a>
      </div>
      <div style={coaching}>
        <div style={explanation}>
          <div style={eachCell}>
            <img src={lesson1} alt='lesson-view' style={{height:'300px',width:'450px'}}/>
            <div>
              <div>講師紹介</div>
              <div>となりのトトロ ​♪火曜日～土曜日 担当</div>
              <div>ハリーポッター ♪月曜日 担当</div>
            </div>
          </div>
          <div style={eachCell}>
            <img src={lesson2} alt='lesson-view' style={{height:'300px',width:'360px'}}/>
            <div style={{width:'350px'}}>
              <div>教室について</div>
              <div>レッスンの行い方、月謝や教室の決まり、お願い事項などについて、お知らせします。</div>
              <div>当教室にご入会いただくうえで、大切な内容となりますので、必ずご一読いただくようお願いします。</div>
            </div>
          </div>
          <div style={eachCell}>
            <img src={lesson3} alt='lesson-view' style={{height:'300px',width:'450px'}}/>
            <div style={{width:'400px'}}>
              <div>ピアノを始めたい方へ♪</div>
              <div>小さいお子様から成人の方まで、</div>
              <div>個人レッスンとグループレッスンを組み合わせた各コースをお選びいただき</div>
              <div>楽しみながら上達できるよう、丁寧に指導いたします。</div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    );
  }
}

const neoButton = {
  display: 'inline-block',
  width: '162px',
  height: '46px',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#13191b',
  border: '1px solid #13191b',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  marginTop: '50px',
}
const eachCell = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
const inline = {
  display: 'flex',
  paddingBottom: '50px',
}
const letter = {
  paddingBottom: '10px',
}
const spacing = {
  fontSize: '40px',
  paddingRight: '20px',
}
const home = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}
const backGround = {
  backgroundColor: '#F6F6F6',
  height: '700px',
}
const arrow = {
  alignSelf: 'center',
  fontSize: '30px',
  color: 'white',
  paddingBottom: '70px',
}
const introduction = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '650px',
  backgroundColor: '#F6F6F6',
}
const explanation = {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-around',
  paddingTop: '50px',
}
const coaching = {
  height: '650px',
  backgroundColor: '#FFFFFF',
}

export default Home;
