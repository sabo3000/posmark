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

  onMapClick = (props) => {
    if (this.state.isInfoVisible) {
      this.setState({
        isInfoVisible: false,
        activeMarker: null
      })
    }
  }

  render () {
    const { google, positions, initialPosition, currentPosition } = this.props
    const { isInfoVisible, activeMarker, selectedPosition } = this.state
    const bounds = new google.maps.LatLngBounds()
    positions.map((pos) => bounds.extend(pos))
    return (
      <Map
        google={google}
        style={{
          width: '100%',
          height: '100%'
        }}
        initialCenter={initialPosition}
        center={currentPosition}
        onClick={this.onMapClick}>
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
