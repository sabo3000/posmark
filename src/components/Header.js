import React from 'react'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import ListIcon from 'material-ui-icons/List'
import AddLocationIcon from 'material-ui-icons/AddLocation'

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const Header = (props) => (
  <AppBar position='static' color='primary'>
    <StyledToolbar>
      <IconButton color='inherit'>
        <ListIcon />
      </IconButton>
      <IconButton color='inherit'>
        <AddLocationIcon />
      </IconButton>
    </StyledToolbar>
  </AppBar>
)

export default Header
