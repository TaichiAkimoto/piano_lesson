import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home/index'
import Instructor from './components/instructor/index'
import Classroom from './components/classroom/index'
import Lesson from './components/lesson/index'
import Faq from './components/faq/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Home />
        )}/>
        <Route path='/instructor' render={() => (
          <Instructor />
        )}/>
        <Route path='/classroom' render={() => (
          <Classroom />
        )}/>
        <Route path='/lesson' render={() => (
          <Lesson />
        )}/>
        <Route path='/faq' render={() => (
          <Faq />
        )}/>
      </div>
    );
  }
}

export default App;
