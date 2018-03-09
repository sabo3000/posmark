import React from 'react'
import styled from 'styled-components'
import ListView from './ListView'
import MapView from './MapView'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Main = ({positions, displayList}) => (
  <StyledMain>
    <MapView positions={positions} />
    { displayList && <ListView positions={positions} /> }
  </StyledMain>
)

Main.defaultProps = {
  positions: [],
  displayList: false
}
export default Main
