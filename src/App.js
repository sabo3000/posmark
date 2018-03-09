import React, { Component } from 'react'
import { Layout, Header, Main } from './components'
import '@atlaskit/css-reset'

class App extends Component {
  constructor () {
    super()
    this.state = {
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

  render () {
    return (
      <Layout>
        <Header addPosition={this.addPosition} />
        <Main positions={this.state.positions} />
      </Layout>
    )
  }
}

export default App
