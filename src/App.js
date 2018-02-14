import React, { Component } from 'react'
import styled from 'styled-components'
import { Header, Main } from './components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

class App extends Component {
  render () {
    return (
      <Layout>
        <Header />
        <Main />
      </Layout>
    )
  }
}

export default App
