import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import configData from "../../config/config.json"

function ItemPengajuan({data}) {

  return (
    <div className='w-[400px] p-3 hover:shadow-[0_25px_30px_-20px_rgba(0,0,0,0.4)] border-slate-300 rounded-md border-2 mb-5 '>
        <div className='flex'>
            <div className='relative  '>
                <img 
                    className=' bg-cover w-[150px] h-[150px]  resize-x  mr-3 rounded-md' 
                    src={`${configData.Developer_API}pengajuan/image/${data["id"]}&${data["tempat"][0]}`}/>
                <div className=' text-sm absolute bottom-0 py-1 px-3 font-medium rounded-tr-md text-white ' style={data["status"] === "diproses" ? {backgroundColor:"rgb(239,68,68)"} : data["status"] === "terverifikasi" ? {backgroundColor:"rgb(234,179,8)"} : data["status"] === "selesai" ? {backgroundColor:"rgb(34,197,94) "}: {backgroundColor:"black"}}>
                    {data["status"]}
                </div>
            </div>
        
            <div className='flex flex-col justify-between'>
                <div  className='flex flex-col'> 
                    <div className="font-bold">
                        {data["nib"]}
                    </div>
                    <div className='font-thin text-sm mt-2'>
                        {data["alamat_denah"]}
                    </div>
                    <div className='font-thin text-sm mt-2'>
                        {data["petugas_cek"]}
                    </div>
                </div>

                <Link to={`/dashboard/detail/${data["id"]}`}>
                    <div className='bg-white text-sm text-blue-500 cursor-pointer py-1 font-medium rounded-md'>
                        Detail
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ItemPengajuan