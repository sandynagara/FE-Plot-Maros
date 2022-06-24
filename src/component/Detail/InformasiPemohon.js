import React from 'react'
import ImageSingle from '../Utils/ImageSingle'
import configData from "../../config/config.json"

function InformasiPemohon({data=false  ,open ,setOpen}) {



  return (
    <div className=' mt-5 p-4 border-2 border-gray rounded-md bg-white'>
        <div className='font-medium text-base mb-2'>
            Informasi Pemohon
        </div>
        <div className='grid grid-cols-[15%_80%] text-gray-500 text-sm'>
          <div className='py-2'>
              Nama 
          </div>
          <div className='py-2'>
            : {data && data["User"]["nama"]}
          </div>
          <div className='py-2'>
              NIK 
          </div>
          <div className='py-2'>
          : {data && data["User"]["nik"]} 
          </div>
          <div className='py-2'>
              Nomor Hp 
          </div>
          <div className='py-2'>
          : {data && data["User"]["telepon"]}
          </div>
        </div>
        {data && <ImageSingle open={open} setOpen={setOpen} image={configData.Developer_API+`profil/foto/${data["User"]["id"]}&${data["User"]["selfie_name"]}`} judul="Foto"/>}
        {data && <ImageSingle open={open} setOpen={setOpen} image={configData.Developer_API+`profil/foto/${data["User"]["id"]}&${data["User"]["ktp_name"]}`} judul="KTP"/>}
        {data && <ImageSingle open={open} setOpen={setOpen} image={configData.Developer_API+`profil/foto/${data["User"]["id"]}&${data["User"]["tanda_tangan_name"]}`} judul="Tanda Tangan"/>}
    </div>
  )
}

export default InformasiPemohon