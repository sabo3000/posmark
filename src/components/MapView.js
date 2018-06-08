import React, { PureComponent } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'

class MapView extends PureComponent {
  constructor () {
    super()
    this.state = {
      isInfoVisible: false,
      activeMarker: {},
      selectedPosition: {}
    }
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      isInfoVisible: true,
      activeMarker: marker,
      selectedPosition: props
    })
  }

  render () {
    const { google, positions } = this.props
    const { isInfoVisible, activeMarker, selectedPosition } = this.state
    return (
      <Map
        google={google}
        style={{
          width: '100%',
          height: '100%'
        }}
        initialCenter={{
          lat: 46.94,
          lng: 7.45
        }}
        zoom={14}>
        { positions.map(({id, name, lat, lng}) =>
          <Marker
            key={id}
            name={name}
            title={name}
            position={{ lat: lat, lng: lng }}
            onClick={this.onMarkerClick}
          />
        )}
        <InfoWindow
          marker={activeMarker}
          visible={isInfoVisible}>
          <h4>{ selectedPosition.name }</h4>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1aeCOtB3_LSZQED20yRlqr5-HKFZWRIQ'
})(MapView)
