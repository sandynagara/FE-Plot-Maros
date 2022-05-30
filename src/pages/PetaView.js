import React,{useEffect,useState} from 'react'
import UserLogin from '../component/Dashboard/UserLogin'
import ItemPengajuan from '../component/MapView/ItemPengajuan'
import configData from "../config/config.json"
import Map from '../component/MapView/Map'
import {AiOutlineArrowLeft} from "react-icons/ai"

function PetaView() {

  const [data, setData] = useState(false)
  const [open, setOpen] = useState(true)
  const [select, setSelect] = useState(false)
  const [update, setUpdate] = useState(true)

  useEffect(() => {
    const url = configData.Developer_API+"pengajuan"
    console.log(url)
    fetch(url,{
        method: 'GET',
        credentials: 'include'
    }).then(res=>res.json()).then((res)=>{
        setData(res)
    }).catch(err=>console.log(err))
}, [update])

  return (
    <div className='bg-gray-200 w-screen min-h-screen h-full flex flex-col px-10 py-5 text-left'>
      <UserLogin/>
      <div className='p-5 rounded-md  relative bg-white'>
        <div className=' h-screen pr-4 absolute flex items-center z-[1000] ' >
          <div className='overflow-y-scroll bg-white p-2 h-screen duration-500  w-full' style={open ? {width:"100%"} : {width:"0px"}}>
            <div className='p-2 w-[400px] mb-1 font-medium flex items-center text-center '>
              {select && <AiOutlineArrowLeft size={20} color="red" className='cursor-pointer mr-3' 
              onClick={()=>
                {
                  setUpdate(!update)
                  setSelect(false)
                }
              }/>}
              Daftar Pengajuan
            </div>
              {data && 
                data.map((data,index)=>{
                  return <ItemPengajuan key={index} data={data} />
                })
              }
            </div>
          <div className='bg-white px-2 py-5 rounded-tr-md rounded-br-md cursor-pointer' onClick={()=>setOpen(!open)}>
            <AiOutlineArrowLeft className='cursor-pointer duration-500' style={open ? {transform:"rotate(0deg)"} : {transform:"rotate(180deg)"}} />
          </div>
        </div>
        <Map  setData={setData} setSelect={setSelect}/>
      </div>
    </div>
  )
}

export default PetaView