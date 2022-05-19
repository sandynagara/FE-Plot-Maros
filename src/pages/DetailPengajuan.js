import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import InformasiBidangTanah from '../component/DetailPage/InformasiBidangTanah'
import InformasiPengajuan from '../component/DetailPage/InformasiPengajuan'
import InformasiStatusTanah from '../component/DetailPage/InformasiStatusTanah'

function DetailPengajuan() {
  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-20 flex justify-center items-center 
    w-screen min-h-max h-full rounded-md'>
      <div className='bg-white rounded-md w-1/2 relative'>
        <div className='font-bold flex justify-center text-lg py-4 border-b-2 border-gray-300'>
          Detail Pengajuan
          <div className='absolute right-2 top-3 cursor-pointer'>
            <AiOutlineClose size={20}/>
          </div>
        </div>
        <div className='overflow-y-scroll scroll bg-gray-200 h-[500px] text-left'>
          <InformasiPengajuan/>
          <InformasiStatusTanah/>
          <InformasiBidangTanah/>
        </div>
        
      </div>
    </div>
  )
}

export default DetailPengajuan