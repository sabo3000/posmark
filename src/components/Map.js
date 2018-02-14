import React from 'react'
import styled from 'styled-components'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const ContainerElem = styled.div`
  height: 100%;
`

const LoaderElem = styled.div`
  height: 100%;
`
const apiKey = 'AIzaSyD1aeCOtB3_LSZQED20yRlqr5-HKFZWRIQ'

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=' + apiKey,
    loadingElement: <LoaderElem />,
    containerElement: <ContainerElem />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 46.94, lng: 7.45 }}>
    <Marker position={{ lat: 46.9481229, lng: 7.4472936 }} />
    <Marker position={{ lat: 46.9397992, lng: 7.4661384 }} />
  </GoogleMap>
)

export default Map
