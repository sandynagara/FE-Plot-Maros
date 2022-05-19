import React from 'react'
import configData from "../../config/config.json"
import ViewImageMulti from './ViewImageMulti'
import ViewImage from './ViewImageMulti'

function ImageMulti({image,judul,id,open,setOpen}) {
   
  return (
    <div className='w-full'> 
        { open === judul && <ViewImageMulti image={image} id={id} setOpen={setOpen}/>}
        <div className='py-2 text-gray-500 text-sm'>
            {judul} :
        </div>
        <div className='flex flex-1 flex-wrap'>
            {image.map((gambar,index)=>{
                const url = configData.Developer_API+`/pengajuan/image/${id+"&"+gambar}`
                return (
                    <img src={url} onClick={()=>setOpen(judul)} key={index} className="h-32 my-1 rounded-md cursor-pointer mr-2 hover:shadow-xl" />
                )
            })}
         
        </div>
    </div>
  )
}

export default ImageMulti