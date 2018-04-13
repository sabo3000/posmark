import React from 'react'
import styled from 'styled-components'
import ListView from './ListView'
import MapView from './MapView'

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  @media screen and (orientation: portrait) {
    flex-direction: column;
  }
`

const Main = ({positions, isListDisplayed}) => (
  <StyledMain>
    <MapView positions={positions} />
    <ListView positions={positions} isDisplayed={isListDisplayed} />
  </StyledMain>
)

Main.defaultProps = {
  positions: [],
  isListDisplayed: false
}
export default Main
