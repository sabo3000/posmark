import React from 'react'
import styled from 'styled-components'
import ListView from './ListView'
import MapView from './MapView'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const positions = [
  {
    id: 1,
    name: 'Home',
    lat: 46.9397992,
    lng: 7.4661384
  },
  {
    id: 2,
    name: 'Urbanfish',
    lat: 46.9481229,
    lng: 7.4472936
  }
]

const Main = ({displayList}) => (
  <StyledMain>
    <MapView positions={positions} />
    { displayList && <ListView positions={positions} /> }
  </StyledMain>
)

Main.defaultProps = {
  displayList: false
}
export default Main
