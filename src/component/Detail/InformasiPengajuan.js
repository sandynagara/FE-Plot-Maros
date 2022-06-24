import React,{useState} from 'react'
import ActionDetail from './ActionDetail'

function InformasiPengajuan({data=[],pdf}) {

  const [update, setUpdate] = useState(false)

  const proses = (proses) => {
    var action 
    if(proses === "diajukan"){
      action = "Proses"
    }else if(proses === "diproses"){
      action = "Verifikasi"
    }else if(proses === "terverifikasi"){
      action = "Selesai"
    }else if(proses === "selesai"){
      action = "Selesai"
    }
    return action
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const cekUpdate = () => {
    setUpdate(true)
  }

  return (
    <div className=' mt-5 p-4 border-2 border-gray rounded-md bg-white'>
        {update && <ActionDetail data={data} setUpdate={setUpdate}/>}
        <div className='font-medium text-base mb-2'>
            Informasi Pengajuan
        </div>
        <div className='grid grid-cols-[15%_80%] text-gray-500 text-sm'>
          <div className='py-2'>
              Tanggal Pengajuan
          </div>
          <div className='py-2'>
            : {data["tanggal"]}
          </div>
          <div className='py-2'>
              Progress 
          </div>
          <div className='py-2 font-medium'>
            : {capitalizeFirstLetter(data["status"])}
          </div>
          <div className='py-2'>
            Status pemohon
          </div>
          <div className='py-2'>
          : { data["nama_kuasa"] ? "Orang Lain" : "Pribadi"}
          </div>
          
          <div className='py-2'>
            Petugas pencatat 
          </div>
          <div className='py-2'>
          : {data["petugas_pencatat_date"] ? data["petugas_pencatat"]+" ("+data["petugas_pencatat_date"]+")" : "-"}  
          </div>
          <div className='py-2'>
            Petugas cek lokasi 
          </div>
          <div className='py-2'>
          : {data["petugas_cek_date"] ? data["petugas_cek"]+" ("+data["petugas_cek_date"]+")" : "-"}
          </div>
        </div>
        <div className='w-full flex justify-end'>
        {data["status"] !== "selesai" ?
    
            <div className='px-5 py-2 cursor-pointer text-white rounded-md font-medium bg-sky-500 hover:bg-sky-800'
                onClick={()=>cekUpdate()}
            >
                {proses(data["status"])}
            </div>
            :
              <div className='px-5 py-2 mx-2 cursor-pointer text-white rounded-md font-medium bg-sky-500 hover:bg-sky-800'
                  onClick={pdf}
              >
                  Cetak PDF
              </div>
       
        }
           </div>
    </div>
  )
}

export default InformasiPengajuan