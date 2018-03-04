import React, { Component } from 'react';
import { Header } from './header'
import { Footer } from './footer'
import cat from '../img/cat.jpg'
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
          Twitterへ
        </a>
      </div>
      <div style={coaching}>
        <div style={eachCell}>
          <div style={coach}>
            <div style={coachIntro}>
              <div style={spacing}>講</div>
              <div style={spacing}>師</div>
              <div style={spacing}>紹</div>
              <div style={spacing}>介</div>
            </div>
            <span style={{fontSize:'30px'}}>となりのトトロ </span>​<span style={{fontSize:'25px',paddingLeft:'10px'}}>♪火曜日～土曜日 担当</span>
            <br/><span style={{fontSize:'30px'}}>ハリーポッター</span><span style={{fontSize:'25px',paddingLeft:'10px'}}>♪月曜日 担当</span>
          </div>
          <img src={lesson1} alt='lesson-view'
            style={{height:'400px',width:'600px',
            borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
        </div>
        <a href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={coachButton}>
          講師紹介へ
        </a>
      </div>
      <div style={mixedDiv}>
        <img src={lesson2} alt='lesson-view' style={imaged}/>
        <div style={aboutLessonText}>
          <div style={classIntro}>
            <div style={spacing}>教</div>
            <div style={spacing}>室</div>
            <div style={spacing}>に</div>
            <div style={spacing}>つ</div>
            <div style={spacing}>い</div>
            <div style={spacing}>て</div>
          </div>
          <div>
            <div style={letter}>レッスンの行い方、月謝や教室の決まり、</div>
            <div style={letter}>お願い事項などについて、お知らせします。</div>
            <div style={letter}>当教室にご入会いただくうえで、大切な内容となりますので、</div>
            <div style={letter}>必ずご一読いただくようお願いします。</div>
          </div>
        </div>
      </div>
      <div style={lessons}>
        <div style={aboutLesson}>
          <img src={lesson3} alt='lesson-view' style={{height:'400px',width:'600px',
          paddingRight:'150px',borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
          <a href="https://twitter.com/piano_happy_"
            target="_blank"
            rel="noreferrer noopener"
            style={classButton}>
            教室紹介へ
          </a>
        </div>
      </div>
      <div style={lessonIntroduction}>
        <div style={lessonInline}>
          <div style={spacing}>レ</div>
          <div style={spacing}>ッ</div>
          <div style={spacing}>ス</div>
          <div style={spacing}>ン</div>
          <div style={spacing}>に</div>
          <div style={spacing}>つ</div>
          <div style={spacing}>い</div>
          <div style={spacing}>て</div>
        </div>
        <div>
          <div style={letter}>ピアノを始めたい方へ♪</div>
          <div style={letter}>小さいお子様から成人の方まで、</div>
          <div style={letter}>個人レッスンとグループレッスンを組み合わせた各コースをお選びいただき</div>
          <div style={letter}>楽しみながら上達できるよう、丁寧に指導いたします。</div>
        </div>
        <a href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={lessonButton}>
          レッスンへ
        </a>
      </div>
      <div style={halfCircle}></div>
        <Footer />
      </div>
    );
  }
}

const halfCircle = {
  width: '200px',
  height: '100px',
  backgroundColor: 'gold',
  borderTopLeftRadius: '110px',
  borderTopRightRadius: '110px',
  borderBottom: 0,
  display: 'flex',
  flex: 1,
  alignSelf: 'center',
}
const lessonIntroduction = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '450px',
  backgroundColor: '#FFFFFF',
}
const lessonInline = {
  display: 'flex',
  paddingBottom: '50px',
  paddingTop: '50px',
}
const lessonDetail = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '650px',
  backgroundColor: '#FFFFFF',
}
const classIntro = {
  display: 'flex',
  paddingTop: '30px',
  paddingBottom: '50px',
}
const mixedDiv = {
  display:'flex',
  flex:1,
  backgroundColor: '#F6F6F6',
}
const aboutLesson = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}
const aboutLessonText = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const imaged = {
  height:'400px',
  width:'480px',
  bottom: '30px', /* bottom height */
  top: '30%', /* position element 50% from left side */
  marginTop: '-100px',
  paddingLeft: '50px',
  borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px',
}
const coachButton = {
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
  alignSelf: 'center',
  marginBottom: '30px',
}
const classButton = {
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
  alignSelf: 'flex-start',
  marginTop: '30px',
}
const coach = {
  paddingRight: '100px',
}
const coachIntro = {
  display: 'flex',
  paddingBottom: '50px',
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
const lessonButton = {
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
  marginTop: '10px',
}
const eachCell = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
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
const coaching = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '600px',
  backgroundColor: '#FFFFFF',
}
const lessons = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '450px',
  backgroundColor: '#F6F6F6',
}

export default Home;
