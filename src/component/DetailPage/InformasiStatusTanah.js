import React from 'react'
import ktp from "../../images/ktp_testing.jpg"

function InformasiStatusTanah() {
  return (
    <div className=' m-1 p-4 border-2 border-gray rounded-md bg-white'>
        <div className='font-medium text-base mb-2'>
            Informasi Status Tanah
        </div>
        <div className=' text-gray-500 text-xs'>
          <div className='py-2'>
              Sertifikat
          </div>
          <div className='py-2 flex'>
          : <img src={ktp} className="h-42 w-56 mx-2"/> 
          <img src={ktp} className="h-42 w-56 mx-2"/>
          <img src={ktp} className="h-42 w-56 mx-2"/>
          </div>
          <div className='py-2'>
              KTP
          </div>
          <div className='py-2 flex'>
          : <img src={ktp} className="h-42 w-56"/>
          </div>
          <div className='py-2'>
              Tanda Tangan :
          </div>
          <img src={ktp} className="h-42 w-56"/>
        </div>
    </div>
  )
}

export default InformasiStatusTanah