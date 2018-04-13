import React, { Component } from 'react'
import { Layout, Header, Main } from './components'
import '@atlaskit/css-reset'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isListDisplayed: false,
      positions: [
        {
          id: 0,
          name: 'Home',
          lat: 46.9397992,
          lng: 7.4661384
        },
        {
          id: 1,
          name: 'Urbanfish',
          lat: 46.9481229,
          lng: 7.4472936
        }
      ]
    }
  }

  addPosition = (pos) => {
    pos.id = this.state.positions.length
    this.setState(prevState => ({
      positions: [...prevState.positions, pos]
    }))
  }

  toggleList = () => {
    this.setState(prevState => ({
      isListDisplayed: !prevState.isListDisplayed
    }))
  }

  render () {
    return (
      <Layout>
        <Header
          addPosition={this.addPosition}
          toggleList={this.toggleList}
          isListDisplayed={this.state.isListDisplayed}
        />
        <Main
          isListDisplayed={this.state.isListDisplayed}
          positions={this.state.positions}
        />
      </Layout>
    )
  }
}

export default App
