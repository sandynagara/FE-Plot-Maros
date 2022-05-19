import React from 'react'
import ViewImageSingle from './ViewImageSingle'


function ImageSingle({image,judul,open,setOpen}) {

  return (
    <div> 
        { open === judul && <ViewImageSingle image={image} setOpen={setOpen}/>}
        <div className='py-2 text-gray-500 text-sm'>
            {judul} :
        </div>
        <div className='py-2 flex'>
            <img src={image} onClick={()=>setOpen(judul)} className="h-32 rounded-md cursor-pointer"/>
        </div>
    </div>
  )
}

export default ImageSingle