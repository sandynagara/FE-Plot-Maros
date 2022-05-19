import React,{useState} from 'react'
import {AiOutlineClose} from "react-icons/ai"
import configData from "../../config/config.json"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2"

function TambahPengguna({setTambah}) {
  
    const [username, setUsername] = useState("")
    const [namaLengkap, setNamaLengkap] = useState("")
    const [kelas, setKelas] = useState("User")
    const [password, setPassword] = useState("")

    const submit = () => {
        if(username == "" || namaLengkap == "" || password == ""){
            return
        }

        const url = configData.Developer_API +"register"
        fetch(url,{
            method:"POST",
            credentials:"include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                username:username,
                password:password,
                nama:namaLengkap,
                kelas:kelas
            }),
        }).then(res=>res.json()).then(res=>{
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
          Tambah Pengguna
          <div className='absolute right-5 top-5 cursor-pointer'
                onClick={()=>setTambah(false)}
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
                onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField
                required
                id="standard-required"
                label="Nama Lengkap"
                margin='dense'
                className='w-full'
                onChange={(e)=>setNamaLengkap(e.target.value)}
            />
            <TextField
                id="standard-select-currency"
                select
                label="Kelas"
                margin='dense'
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
            <TextField
                required
                id="standard-required"
                label="Password"
                margin='dense'
                className='w-full'
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className='w-full flex justify-end my-2'>
                <div className='px-5 py-2 cursor-pointer text-white rounded-md font-medium bg-sky-500 hover:bg-sky-800'
                    onClick={submit}
                >
                    Tambah
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default TambahPengguna