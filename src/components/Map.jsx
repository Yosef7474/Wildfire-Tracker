import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import LocationMark from './LocationMark'
// const mapAPI = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const containerStyle = {
  width: '100%',
  height: '100vh',
//   font-family: 'sans-serif',
//   font-size: '16px',
}

const center = {
  lat: 42.3265,
  lng: -122.8756,

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
      zoom={6}
    >

        <LocationMark lat={center.lat} lng={center.lng}/>
  
    </GoogleMap>
  )
}

export default Map
