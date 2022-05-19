import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  return (
    <MapContainer center={[-6.956534, 112.505224]} zoom={17} style={{height: 300, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
      />
    </MapContainer>
  )
}

export default Map