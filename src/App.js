import React, { Component } from 'react'
import { Layout, Header, Main, Geo } from './components'
import '@atlaskit/css-reset'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isListDisplayed: false
    }
  }

  componentDidMount = () => {
    this.getCurrentPosition()
  }

  getCurrentPosition = () => {
    const geo = new Geo()
    geo.getCoords().then(({latitude, longitude}) => {
      const pos = {
        lat: latitude,
        lng: longitude
      }
      this.props.store.setCurrentPosition(pos)
    }, (error) => console.error(error))
  }

  addPosition = (pos) => {
    this.props.store.addPosition(pos)
  }

  deletePosition = (event, posId) => {
    event.preventDefault()
    this.props.store.deletePosition(posId)
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
          store={this.props.store}
          getCurrentPosition={this.getCurrentPosition}
          deletePosition={this.deletePosition}
          isListDisplayed={this.state.isListDisplayed}
        />
      </Layout>
    )
  }
}

export default App
