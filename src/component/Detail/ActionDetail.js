import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import configData from "../../config/config.json"
import Swal from "sweetalert2"

function ActionDetail({data,setUpdate}) {

    const [petugas, setPetugas] = useState(false)

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


      const update = () => {
        console.log(petugas)
        if(!petugas && data["status"] !== 'terverifikasi'){
            return
        }

        const url = configData.Developer_API +"pengajuan"
        fetch(url,{
            method:"PATCH",
            credentials:"include",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },body: JSON.stringify({
                progress:data["status"],
                id:data["id"],
                petugas:petugas
            }),
        }).then(res=>res.json()).then(res=>{
            setUpdate(false)
            if(res["RTN"]){
             
                Swal.fire({
                  icon: 'success',
                  title: res["MSG"],
                })
            }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Pengguna gagal ditambahkan',
                  text: res["MSG"],
                })
            }
        }).catch(err=>console.log(err))
      }

  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-20 flex justify-center items-center 
    w-screen min-h-max h-full rounded-md'>
      <div className='bg-white rounded-md w-1/2 relative'>
        <div className='font-bold flex justify-center items-center text-lg py-4 border-b-2 border-gray-300'>
          Pengajuan
          <div className='absolute right-5 top-5 cursor-pointer' onClick={()=>setUpdate(false)}>
            <AiOutlineClose size={20}/>
          </div>
        </div>
        <div className='p-4'>
            {data["status"] !== 'terverifikasi' ? <div>
                <div className='font-medium'>
                    Masukkan Nama Petugas Pencatat :
                </div>
                <input 
                    className="w-full px-3 py-3 my-3 rounded-md border-[1px] border-gray-400 focus:border-sky-600" 
                    placeholder='Nama Petugas'
                    onChange={(e)=>setPetugas(e.target.value)}
                />
            </div> : <div>
            <div className='font-medium'>
                    Apa anda yakin ingin menyelasaikan pengajuan?
                </div>
            </div>}
            
            <div className='w-full flex justify-end'>
                <div className='px-5 py-2 cursor-pointer text-white rounded-md font-medium bg-sky-500 hover:bg-sky-800'
                    onClick={()=>update()}
                >
                    {proses(data["status"])}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ActionDetail