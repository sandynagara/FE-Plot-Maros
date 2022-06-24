import React from 'react'
import configData from "../../config/config.json"
import {AiOutlineClose} from 'react-icons/ai'
import Swal from "sweetalert2"

function Peringatan({username,setHapus}) {

    var deleteAkun = () => {
        const url = configData.Developer_API + "akun"
        fetch(url,{
            method:"DELETE",
            credentials:"include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                  username:username
            }),
        }).then(res=>res.json()).then(res=>{
            setHapus(false)
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
        }).
        catch(err=>console.log(err))
    }

  return (
    <div className='fixed top-0 left-0 bg-black bg-opacity-20 flex justify-center items-center 
    w-screen min-h-max h-full rounded-md'>
      <div className='bg-white rounded-md w-1/2 relative'>
        <div className='font-bold flex justify-center items-center text-lg py-4 border-b-2 border-gray-300'>
          Hapus Pengguna
          <div className='absolute right-5 top-5 cursor-pointer' onClick={()=>setHapus(false)}>
            <AiOutlineClose size={20}/>
          </div>
        </div>
        <div className='p-4'>
           
            <div className='font-medium'>
                Apa anda yakin ingin menghapus akun {username} ?<br/>
                <div className='text-sm text-red-400'>
                    *Menghapus akun akan menghapus semua pengajuan bidang tanah yang dilakukan oleh {username}
                </div>
            </div>
          
            <div className='w-full flex justify-end mt-2'>
                <div className='px-5 py-2 cursor-pointer text-white rounded-md font-medium bg-sky-500 hover:bg-sky-800'
                    onClick={()=>deleteAkun()}
                >
                    Hapus
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Peringatan