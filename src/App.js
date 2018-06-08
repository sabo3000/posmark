import React, { Component } from 'react'
import store from 'store/dist/store.modern'
import { Layout, Header, Main, Geo } from './components'
import '@atlaskit/css-reset'
import './App.css'

const keyPositions = 'positions'
const keyLastPosition = 'lastPosition'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isListDisplayed: false,
      currentPosition: {},
      positions: store.get(keyPositions) || []
    }
  }

  componentDidMount = () => {
    const geo = new Geo()
    geo.getCoords().then(({latitude, longitude}) => {
      const pos = {
        lat: latitude,
        lng: longitude
      }
      this.setState({currentPosition: pos})
      store.set(keyLastPosition, pos)
    }, (error) => console.error(error))
  }

  addPosition = (pos) => {
    pos.id = this.state.positions.length
    this.setState(prevState => ({
      positions: [...prevState.positions, pos]
    }), () => {
      store.set(keyPositions, this.state.positions)
    })
  }

  deletePosition = (event, posId) => {
    event.preventDefault()
    this.setState(prevState => ({
      positions: prevState.positions.filter(({id}) => id !== posId)
    }), () => {
      store.set(keyPositions, this.state.positions)
    })
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
          positions={this.state.positions}
          initialPosition={store.get(keyLastPosition)}
          currentPosition={this.state.currentPosition}
          deletePosition={this.deletePosition}
          isListDisplayed={this.state.isListDisplayed}
        />
      </Layout>
    )
  }
}

export default App
