import React, { Component } from 'react';
import { Footer } from '../footer'
import { images } from '../img'
import First from './first'
import Second from './second'
import UpArrow from 'react-icons/lib/fa/chevron-up'
import {animateScroll as scroll } from 'react-scroll'

class Home extends Component {
  render() {
    return (
      <div style={home}>
        <First />
        <Second />
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
          <img src={images.lesson1} alt='lesson-view'
            style={{height:'400px',width:'600px',
            borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
        </div>
        <a href="https://twitter.com/piano_happy_"
          target="_blank"
          rel="noreferrer noopener"
          style={coachButton}>
          講師紹介
        </a>
      </div>
      <div style={mixedDiv}>
        <img src={images.lesson2} alt='lesson-view' style={imaged}/>
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
          <img src={images.lesson3} alt='lesson-view' style={{height:'400px',width:'600px',
          paddingRight:'150px',borderRadius: '50px 50px 50px 50px/100px 100px 100px 100px'}}/>
          <a href="https://twitter.com/piano_happy_"
            target="_blank"
            rel="noreferrer noopener"
            style={classButton}>
            教室紹介
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
      <div style={halfCircle}>
        <UpArrow style={{fontSize: '30px',color:'white'}} onClick={() => scroll.scrollToTop()}/>
      </div>
        <Footer />
      </div>
    );
  }
}

const halfCircle = {
  width: '90px',
  height: '45px',
  backgroundColor: '#939899',
  borderTopLeftRadius: '110px',
  borderTopRightRadius: '110px',
  borderBottom: 0,
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
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
const classIntro = {
  display: 'flex',
  paddingTop: '30px',
  paddingBottom: '20px',
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
  color: '#2f9bcd',
  border: '1px solid #2f9bcd',
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
  color: '#4871a9',
  border: '1px solid #4871a9',
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
const letter = {
  paddingBottom: '10px',
}
const lessonButton = {
  display: 'inline-block',
  width: '162px',
  height: '46px',
  lineHeight: '48px',
  fontSize: '14px',
  color: '#2f9bcd',
  border: '1px solid #2f9bcd',
  textAlign: 'center',
  fontFamily: 'Gill Sans Std Book",sans-serif',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  marginTop: '30px',
}
const eachCell = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
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
