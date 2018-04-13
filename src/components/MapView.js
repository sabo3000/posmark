import React from 'react'
import styled from 'styled-components'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const ContainerElem = styled.div`
  flex: 1;
`

const LoaderElem = styled.div`
  height: 100%;
`
const apiKey = 'AIzaSyD1aeCOtB3_LSZQED20yRlqr5-HKFZWRIQ'

const MapView = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=' + apiKey,
    loadingElement: <LoaderElem />,
    containerElement: <ContainerElem />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({positions}) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 46.94, lng: 7.45 }}>
    { positions.map(({id, lat, lng}) =>
      <Marker key={id} position={{ lat: lat, lng: lng }} />
    )}
  </GoogleMap>
)

export default MapView
