import React,{useEffect,useState} from 'react'
import Sidebar from '../component/Sidebar/Sidebar'
import {Routes, Route    } from "react-router-dom";
import Dashboard from './Dashboard';
import Pengguna from './Pengguna';
import Detail from './Detail';
import configData from "../config/config.json"
import {Link ,useNavigate} from "react-router-dom"
import PetaView from './PetaView';

function Main() {

  const [data, setData] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const url = configData.Developer_API +"userOne"
    fetch(url,{
      credentials:"include",
      method:"GET"
    }).then(res=>res.json()).then(res=>{
      console.log(res)
      if(res["RTN"]){
        setData(res)
        navigate("/dashboard");
      }else{
        navigate("/login");
      }
    }).catch(err=>console.log(err))
  }, [])
  

  return (
    <div className='flex'>
        {data && <Sidebar data={data["MSG"]}/>}
        <Routes >
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/admin" element={<Pengguna />}/>
            <Route path="/dashboard/detail/:id" element={<Detail />}/>
            <Route path="/peta" element={<PetaView />}/>
        </Routes>
    </div>
  )
}

export default Main