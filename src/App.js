import React, { Component } from 'react'
import { Layout, Header, Main } from './components'
import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import blueGrey from 'material-ui/colors/blueGrey'
import lightBlue from 'material-ui/colors/lightBlue'
import deepOrange from 'material-ui/colors/deepOrange'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: lightBlue,
    error: deepOrange
  }
})

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Layout>
          <Header />
          <Main />
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default App
