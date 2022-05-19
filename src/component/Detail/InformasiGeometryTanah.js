import React,{useState,useEffect} from 'react'
import ImageMulti from '../Utils/ImageMulti'
import Peta from '../Utils/Peta'

function InformasiGeometryTanah({data,open,setOpen}) {

  return (
    <div className='mt-5 p-4 border-2 border-gray rounded-md bg-white'>
    <div className='font-medium text-base mb-2'>
        Informasi Geometry Bidang Tanah
    </div>
    <div className='grid grid-cols-[15%_80%] text-gray-500 text-sm'>
      <div className='py-2'>
          Alamat 
      </div>
      <div className='py-2'>
        : Jalan Merpati No 5 Batokan 
      </div>
    </div>
    {data && <ImageMulti open={open} setOpen={setOpen} judul={"Foto Bidang Tanah"} image={data["tempat"]} id={data["id"]}/>}
    <div  className='grid grid-cols-[15%_80%] text-gray-500 text-sm'>
      <div className='py-2 text-gray-500'>
        Bidang Tanah
      </div>
      <div className='py-2'>
          : 
      </div>
    </div>
   
    <Peta geoJsonData={data["bidang_tanah"]}/>
</div>
  )
}

export default InformasiGeometryTanah