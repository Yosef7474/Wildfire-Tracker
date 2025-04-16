import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100vh'
}

const center = {
  lat: 59.95,
  lng: 30.33
}

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyD3m-s6PnR3cWK0TubSkajurWX8BN1ViqY', // your API key
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
    >
    </GoogleMap>
  )
}

export default Map
