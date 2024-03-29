import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import ListView from './ListView'
import MapView from './MapView'
import Button from '@atlaskit/button'
import MyLocationIcon from 'material-ui-icons/MyLocation'

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  position: relative;
  @media screen and (orientation: portrait) {
    flex-direction: column;
  }
`

const MapContainer = styled.div`
  flex: 1;
  position: relative;
`

const MyButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  :hover{
    background: #eee;
  }
`

const Main = ({
  store,
  getCurrentPosition,
  deletePosition,
  isListDisplayed
}) => (
  <StyledMain>
    <MapContainer>
      <MapView {...store} />
      <MyButton
        appearance='subtle'
        iconBefore={<MyLocationIcon />}
        onClick={getCurrentPosition}
      />
    </MapContainer>
    <ListView
      positions={store.positions}
      isDisplayed={isListDisplayed}
      deletePosition={deletePosition}
    />
  </StyledMain>
)

export default observer(Main)
