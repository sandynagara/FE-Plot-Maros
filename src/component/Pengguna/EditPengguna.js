import React,{useState} from 'react'
import {AiOutlineClose} from "react-icons/ai"
import configData from "../../config/config.json"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2"

function EditPengguna({setEdit,username,nama,kelasPengguna}) {
  
    const [namaLengkap, setNamaLengkap] = useState(nama)
    const [kelas, setKelas] = useState(kelasPengguna)

    const submit = () => {
        const url = configData.Developer_API +"akun"
        fetch(url,{
            method:"PATCH",
            credentials:"include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                username:username,
                nama:namaLengkap,
                kelas:kelas,
            }),
        }).then(res=>res.json()).then(res=>{
            setEdit(false)
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
      <div className='bg-white rounded-md  min-w-[400px] w-2/5 relative'>
        <div className='font-bold flex justify-center items-center text-lg py-4 border-b-2 border-gray-300'>
          Edit Pengguna
          <div className='absolute right-5 top-5 cursor-pointer'
                onClick={()=>setEdit(false)}
          >
            <AiOutlineClose size={20}/>
          </div>
        </div>
        <div className='py-2 px-4'>
            <TextField
                required
                id="standard-required"
                label="Username"
                margin='dense'
                className='w-full'
                value={username}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                required
                id="standard-required"
                label="Nama Lengkap"
                margin='dense'
                className='w-full'
                value={namaLengkap}
                onChange={(e)=>setNamaLengkap(e.target.value)}
            />
            <TextField
                id="standard-select-currency"
                select
                label="Kelas"
                margin='dense'
                value={kelas}
                onChange={(e)=>setKelas(e.target.value)}
                className='w-full text-left'
                >
                <MenuItem value="admin">
                    Admin
                </MenuItem>
                <MenuItem value="user">
                    User
                </MenuItem>
            </TextField>
            <div className='w-full flex justify-end my-2'>
                <div className='px-5 py-2 cursor-pointer text-white rounded-md font-medium bg-sky-500 hover:bg-sky-800'
                    onClick={submit}
                >
                    Edit
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default EditPengguna