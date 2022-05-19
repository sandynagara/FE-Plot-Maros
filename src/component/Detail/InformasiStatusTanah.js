import React from 'react'
import ImageMulti from '../Utils/ImageMulti'

function InformasiStatusTanah({data = false,open,setOpen}) {
  return (
    <div className=' mt-5 p-4 border-2 border-gray rounded-md bg-white'>
        <div className='font-medium text-base mb-2'>
            Informasi Status Tanah
        </div>
        <div className='grid grid-cols-[15%_80%] text-gray-500 text-sm'>
          <div className='py-2'>
              Jenis Hak 
          </div>
          <div className='py-2'>
            : Milik
          </div>
          <div className='py-2'>
              Nomor Surat Ukur 
          </div>
          <div className='py-2'>
          : {data["nomor_surat"]}
          </div>
          <div className='py-2'>
              NIB 
          </div>
          <div className='py-2'>
          : {data["nib"]}
          </div>
          <div className='py-2'>
              Peruntukan 
          </div>
          <div className='py-2'>
          : {data["peruntukan"]}
          </div>
        </div>
        <div className=' text-gray-500 text-xs'>
          {data && <ImageMulti open={open} setOpen={setOpen} judul={"Sertifikat"} image={data["sertifikat"]} id={data["id"]}/>}
          {data && <ImageMulti open={open} setOpen={setOpen} judul={"PBB"} image={data["pbb"]} id={data["id"]}/>}
          {data && <ImageMulti open={open} setOpen={setOpen} judul={"STTS"} image={data["stts"]} id={data["id"]}/>}
          {data && <ImageMulti open={open} setOpen={setOpen} judul={"Akta Jual Beli"} image={data["akta_jual_beli"]} id={data["id"]}/>}
          {data && data["warisan"] && <ImageMulti judul={"Surat Keterangan Warisan"} image={data["warisan"]} id={data["id"]}/>}
        </div>
    </div>
  )
}

export default InformasiStatusTanah