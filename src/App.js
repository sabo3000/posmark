import React, { Component } from 'react'
import { Main } from './components'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>posmark - position marker webapp</h1>
        </header>
        <Main />
      </div>
    )
  }
}

export default App
