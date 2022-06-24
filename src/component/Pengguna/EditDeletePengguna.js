import React,{useState} from 'react'
import {AiFillDelete,AiFillEdit} from "react-icons/ai"
import EditPengguna from './EditPengguna'
import Peringatan from './Peringatan'

function EditDeletePengguna({username,nama,kelasPengguna}) {

    const [hapus, setHapus] = useState(false)
    const [edit, setEdit] = useState(false)

  return (
    <div className='flex'>
        {hapus &&  <Peringatan username={username} setHapus={setHapus}/>}
        {edit &&  <EditPengguna username={username} nama={nama} kelasPengguna={kelasPengguna} setEdit={setEdit}/>}
        <div className='bg-sky-500 hover:bg-sky-700 cursor-pointer p-1 rounded-md'
              onClick={()=>setEdit(true)}
        >   
            <AiFillEdit size={18} color="white"/>
        </div>
        <div className='bg-red-500 hover:bg-red-700 cursor-pointer p-1 rounded-md ml-2'
            onClick={()=>setHapus(true)}
        >   
            <AiFillDelete size={18} color="white"/>
        </div>
    </div>
  )
}

export default EditDeletePengguna