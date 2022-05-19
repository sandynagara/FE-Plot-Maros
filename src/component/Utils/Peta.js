import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer,useMap,useMapEvents,GeoJSON} from "react-leaflet";

function Peta({geoJsonData = false}) {

  var Changedview = center => {
    var coordinat = {lat:center["center"][1],lng:center["center"][0]}
    const map = useMap();
    map.setView(coordinat);
    return null;
  }

  return (
    <MapContainer
        center={[-6.956534, 112.505224]}
        zoom={21}
        className="w-3/4 h-[400px] my-2"
        zoomControl={false}
        // whenReady={(e)=>setMap(e)}
      >
          {geoJsonData && <GeoJSON data={geoJsonData}/>}  
          {geoJsonData && <Changedview center={geoJsonData["coordinates"][0][0][0]}/>}
          <TileLayer url={"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"} maxZoom={22}/>
      </MapContainer>
  )
}

export default Peta