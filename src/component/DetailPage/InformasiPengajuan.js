import React from 'react'
import ktp from "../../images/ktp_testing.jpg"

function InformasiPengajuan() {
  return (
    <div className=' m-1 p-4 border-2 border-gray rounded-md bg-white'>
        <div className='font-medium text-base mb-2'>
            Informasi Pengajuan
        </div>
        <div className='grid grid-cols-[15%_80%] text-gray-500 text-xs'>
          <div className='py-2'>
              Nama 
          </div>
          <div className='py-2'>
            : Sandy Setyanagara
          </div>
          <div className='py-2'>
              Kuasa 
          </div>
          <div className='py-2'>
          : Diri Sendiri
          </div>
          <div className='py-2'>
              NIK 
          </div>
          <div className='py-2'>
          : 2312432343
          </div>
          <div className='py-2'>
              Nomor Hp 
          </div>
          <div className='py-2'>
          : 083832437
          </div>
          <div className='py-2'>
              Foto
          </div>
          <div className='py-2 flex'>
          : <img src={ktp} className="h-42 w-56 mx-2"/>
          </div>
          <div className='py-2'>
              KTP
          </div>
          <div className='py-2 flex'>
          : <img src={ktp} className="h-42 w-56 mx-2"/>
          </div>
          <div className='py-2'>
              Tanda Tangan
          </div>
          <div className='py-2 flex'>
          : <img src={ktp} className="h-42 w-56 mx-2"/>
          </div>
        </div>
    </div>
  )
}

export default InformasiPengajuan