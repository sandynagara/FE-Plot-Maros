import "leaflet/dist/leaflet.css";
import React, { useState } from 'react'
import L from "leaflet"
import {SimpleMapScreenshoter} from 'leaflet-simple-map-screenshoter'
import { MapContainer, TileLayer,useMap,GeoJSON} from "react-leaflet";

function Peta({geoJsonData = false,setImageScreenshoot,takeScreenshot,setTakeScreenshoot}) {
  
  const [first, setFirst] = useState(true)

  var Changedview = center => {
    const map = useMap();
    if(first){
      var coordinat = {lat:center["center"][1],lng:center["center"][0]}
      map.setView(coordinat);
      setFirst(false)
      return null;
    }
  }

  var TakeGeometry = () => {
    const map = useMap();
    if(takeScreenshot){
      var screenshoot  =  new SimpleMapScreenshoter({hidden:true}).addTo(map)
      screenshoot.takeScreen('image').then(image => {
      setImageScreenshoot(image)
      }).catch(e => {
          alert(e.toString())
      })
    }
    
    setTakeScreenshoot(!takeScreenshot)
    return null;
  }
  

  return (
    <div>
     
        <MapContainer
          center={[-6.956534, 112.505224]}
          zoom={19}
          className="w-100% h-[400px] my-2"
          zoomControl={false}
        >
          {takeScreenshot && <TakeGeometry/>}
          {geoJsonData && <GeoJSON data={geoJsonData}/>}  
          <Changedview center={geoJsonData["coordinates"][0][0][0]}/>
          <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" crossOrigin="anonymous"  maxZoom={22} alt=""/>
        </MapContainer>
    </div>

  )
}

export default Peta