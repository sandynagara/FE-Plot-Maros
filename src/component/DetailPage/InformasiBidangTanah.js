import React,{useState,useEffect} from 'react'

function InformasiBidangTanah() {

  return (
    <div className=' m-1 p-4 border-2 border-gray rounded-md bg-white'>
    <div className='font-medium text-base mb-2'>
        Informasi Bidang Tanah
    </div>
    <div className='grid grid-cols-[15%_80%] text-gray-500 text-xs'>
      <div className='py-2'>
          Alamat 
      </div>
      <div className='py-2'>
        : Jalan Merpati No 5 Batokan 
      </div>
      <div className='py-2 text-gray-500 text-xs'>
        Bidang Tanah
      </div>
      <div className='py-2'>
          : 
      </div>
    </div>

</div>
  )
}

export default InformasiBidangTanah