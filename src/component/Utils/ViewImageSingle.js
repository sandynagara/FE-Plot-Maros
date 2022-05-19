import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function ViewImageSingle({image,setOpen}) {

  return (
    <div className='fixed top-0 left-0 p-5  w-screen h-screen flex justify-center items-center' style={{zIndex:1000}}>
        <div className='bg-white rounded-md flex h-full w-[800px] p-4' style={{zIndex:2}}>
            <div className="bg-white w-full h-full flex items-center justify-center">
                <img className="max-h-full max-w-full" src={image}/>
            </div>
            <AiOutlineClose className='text-gray-600 w-6 h-6 cursor-pointer' onClick={()=>setOpen(false)}/>
        </div>
        <div className='fixed bg-black bg-opacity-30 h-full w-screen' style={{zIndex:1}}/>    
    </div>
  )
}

export default ViewImageSingle