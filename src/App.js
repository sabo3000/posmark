import React, { Component } from 'react'
import store from 'store/dist/store.modern'
import { Layout, Header, Main, Geo } from './components'
import '@atlaskit/css-reset'
import './App.css'

const storageKey = 'posmark'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isListDisplayed: false,
      currentPosition: {},
      positions: store.get(storageKey) || []
    }
  }

  componentDidMount = () => {
    const geo = new Geo()
    geo.getCoords().then((coords) => {
      this.setState({
        currentPosition: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      })
    }, (error) => console.error(error))
  }

  addPosition = (pos) => {
    pos.id = this.state.positions.length
    this.setState(prevState => ({
      positions: [...prevState.positions, pos]
    }), () => {
      store.set(storageKey, this.state.positions)
    })
  }

  deletePosition = (event, posId) => {
    event.preventDefault()
    this.setState(prevState => ({
      positions: prevState.positions.filter(({id}) => id !== posId)
    }), () => {
      store.set(storageKey, this.state.positions)
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
          currentPosition={this.state.currentPosition}
          positions={this.state.positions}
          deletePosition={this.deletePosition}
          isListDisplayed={this.state.isListDisplayed}
        />
      </Layout>
    )
  }
}

export default App
