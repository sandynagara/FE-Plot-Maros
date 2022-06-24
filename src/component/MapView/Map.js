import React,{useState} from 'react'
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import * as WMS from "leaflet.wms"
import configApi from "../../config/config.json"
import { MapContainer, TileLayer,useMap,useMapEvents} from "react-leaflet";

function Map({setData,setSelect,position,setPosition}) {

  const [map, setMap] = useState(false)
  const [first, setFirst] = useState(true)
    
  var getFeatureInfoUrl = (url, map, e,layer) => {
    // Construct a GetFeatureInfo request URL given a point
    var size = map.getSize(),
      params = {
        request: "GetFeatureInfo",
        service: "WMS",
        srs: "EPSG:4326",
        styles: "",
        transparent: true,
        version: "1.1.1",
        format: "application/json",
        bbox: map.getBounds().toBBoxString(),
        height: size.y,
        width: size.x,
        layers: layer,
        query_layers: layer,
        info_format: "application/json",
        X: Math.round(e.containerPoint.x),
        Y: Math.round(e.containerPoint.y),
      };

    return url + L.Util.getParamString(params, url, true);
  };

  var GetFeatureInfoUrlHandle = () =>{
    var map = useMap();
    map = useMapEvents({
      click(e) { 
        var url = getFeatureInfoUrl(
            configApi.Developer_Geoserver_API+"geoserver/plot_maros/wms?",map,e,"Pengajuan"
        );
        fetch(url).then(res=>res.json()).then((res)=>{
            console.log(res)
            if(res["features"].length === 0){
                return
            }
            const data = res["features"][0]["properties"]["id"]
            
            const url = configApi.Developer_API+"pengajuan/"+data
            console.log(url)
            fetch(url,{
                method:"GET",
                credentials:"include"
            }).then(res=>res.json()).then(res=>{
                if(res !== null){
                  setSelect(true)
                  setData([res])
                }
            }).catch(err=>console.log(err))

         
            // setData(data)
        }).catch((err)=>console.log(err))
      },
    });
    return null
  }

  var CustomWMSLayer =  (props) => {
    var map = useMap();
      if(first){
        console.log(props)
        const { url, options, layers } = props;
        const source = WMS.source(url, options);
        var layer= source.getLayer(layers)
        layer.addTo(map);
        setFirst(false);
      }
    return null;
  }

  var Changedview = center => {
    const map = useMap();
    if(position){
      map.setView(center.center);
    }
    return null;
  }

  return (
    <div className='w-full' style={{height:"calc(100vh-200px)"}}>
        <MapContainer
            center={[-4.999963, 119.572435]}
            zoom={17}
            zoomControl={false}
            className="h-screen"
            style={{
                width:"calc(100%-200px)",
            }}
            whenReady={(e)=>setMap(e)}
        >
          <Changedview center={position}/>
          <CustomWMSLayer
          url={configApi.Developer_Geoserver_API+"geoserver/plot_maros/wms"}
          layers={"plot_maros:Pengajuan"}
          options={{
              format: "image/png",
              transparent: "true",
              tiled: "true",
              info_format: "application/json",
              identify: false,
              maxZoom: 22,
          }}
          />
          <GetFeatureInfoUrlHandle/>
          <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" maxZoom={22} />
        </MapContainer>
    </div>
  )
}

export default Map