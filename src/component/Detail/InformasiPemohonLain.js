import React from 'react'
import ImageSingle from '../Utils/ImageSingle'
import configData from "../../config/config.json"
import ImageMulti from '../Utils/ImageMulti'

function InformasiPemohonLain({data,open,setOpen}) {
  return (
    <div className=' mt-5 p-4 border-2 border-gray rounded-md bg-white'>
    <div className='font-medium text-base mb-2'>
        Informasi Pemberi Kuasa
    </div>
    <div className='grid grid-cols-[15%_80%] text-gray-500 text-sm'>
      <div className='py-2'>
          Nama 
      </div>
      <div className='py-2'>
        : {data && data["nama_kuasa"]}
      </div>
    </div>
    {data && <ImageSingle open={open} setOpen={setOpen} image={configData.Developer_API+`pengajuan/image/${data["id"]}&${data["ktp_kuasa"]}`} judul="KTP"/>}
    {data && <ImageSingle open={open} setOpen={setOpen} image={configData.Developer_API+`pengajuan/image/${data["id"]}&${data["selfie_kuasa"]}`} judul="Foto Selfie"/>}
    {data && <ImageMulti open={open} setOpen={setOpen}  id={data["id"]} image={data["surat_kuasa"]} judul="Surat Kuasa"/>}
</div>
  )
}

export default InformasiPemohonLain