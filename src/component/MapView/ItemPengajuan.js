import React from 'react'
import { Link } from 'react-router-dom'
import configData from "../../config/config.json"

function ItemPengajuan({data,setPosition}) {

    const setView = () => {
        const url = configData.Developer_API + "lokasi/"+data["id"]
        fetch(url,{
            method:"GET",
            credentials:"include"
        }).then((res)=>res.json()).then(res=>{
            setPosition([res["data"]["coordinates"][1],res["data"]["coordinates"][0]])
        }).catch(err=>console.log(err))
    }

  return (
    <div className='w-[400px] bg-gray-100 border-gray-300 rounded-md border-[3px] mb-5 '>

        <div className='flex p-3'>
            <div className='relative h-[110px] '>
                <img 
                    className=' bg-contain w-[100px] h-[110px]  resize-x  mr-3 rounded-md' 
                    src={`${configData.Developer_API}pengajuan/image/${data["id"]}&${data["tempat"][0]}`}/>
                <div className=' text-xs absolute bottom-0 py-1 px-3 font-medium rounded-tr-md text-white ' style={data["status"] === "diproses" ? {backgroundColor:"rgb(239,68,68)"} : data["status"] === "terverifikasi" ? {backgroundColor:"rgb(234,179,8)"} : data["status"] === "selesai" ? {backgroundColor:"rgb(34,197,94) "}: {backgroundColor:"black"}}>
                    {data["status"]}
                </div>
            </div>
        
            <div className='flex flex-col justify-between'>
                <div  className='flex flex-col'> 
                    <div className="font-bold text-sm">
                        {data["nib"]}
                    </div>
                    <div className=' text-sm mt-2'>
                        {data["alamat_denah"]}
                    </div>
                    <div className=' text-sm mt-2'>
                        {data["tanggal"]}
                    </div>
                </div>

            </div>
        </div>
        <div className='flex mt-1 w-auto'>
            <div className='bg-sky-500 text-center w-1/2 hover:bg-sky-800 text-xs text-white cursor-pointer py-2 font-medium rounded-sm'> 
                <Link to={`/dashboard/detail/${data["id"]}`}>
                    <div className='w-full'>
                        Detail
                    </div>
                    
                </Link>
            </div>
            <div className='bg-white text-center text-xs w-1/2 text-sky-500 hover:text-sky-800 px-5 cursor-pointer py-2 font-medium rounded-sm'
                onClick={setView}
            >
                Lokasi
            </div>
        </div>
        
    </div>
  )
}

export default ItemPengajuan