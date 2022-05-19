import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import configData from "../../config/config.json"

function ViewImageMulti({image,id,setOpen}) {

    const [select, setSelect] = useState(0)

  return (
    <div className='fixed top-0 left-0 p-5  w-screen h-screen flex justify-center items-center' style={{zIndex:1000}}>
        <div className='bg-white rounded-md flex h-full w-[800px] p-4' style={{zIndex:2}}>
            <div className="bg-white w-4/5 h-full flex items-center justify-center">
                <img className="max-h-full max-w-full" src={configData.Developer_API+`/pengajuan/image/${id+"&"+image[select]}`}/>
            </div>
            
            <div className=" w-1/5 h-full px-3 overflow-y-scroll scroll">
                {image.map((gambar,index)=>{
                    const url = configData.Developer_API+`/pengajuan/image/${id+"&"+gambar}`
                    return <img src={url} className="my-1 cursor-pointer rounded-md" key={index} onClick={()=>setSelect(index)}/>
                })}
           
            </div>
            <AiOutlineClose className='text-gray-600 w-6 h-6 cursor-pointer' onClick={()=>setOpen(false)}/>
        </div>
        <div className='fixed bg-black bg-opacity-30 h-full w-screen' style={{zIndex:1}}/>    
    </div>
  )
}

export default ViewImageMulti