import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px 0;
  img {
    height: 40px;
    margin-right: 10px;
  }
  h1{
    padding: 0;
    font-size: 1.2em;
  }
`

const Header = (props) => (
  <StyledHeader>
    <img src={logo} alt='logo' />
    <h1>posmark</h1>
  </StyledHeader>
)

export default Header
