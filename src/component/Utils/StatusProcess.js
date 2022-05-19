import React from 'react'

function StatusProcess({status = "diajukan"}) {

    var HandleStatus = () => {
        if(status == "diajukan"){
            return <div className='bg-black text-white text-sm px-2 py-1 font-medium rounded-md'>
                Diajukan
            </div>
            
        }else if(status == "diproses"){
            return (
            <div className='bg-red-500 text-white text-sm px-2 py-1 font-medium rounded-md'>
                Diproses
            </div>
            )
        }else if(status == "terverifikasi"){
            return (
            <div className='bg-yellow-500 text-white text-sm px-2 py-1 font-medium rounded-md'>
                Terverifikasi
            </div>
            )
        }else if(status == "selesai"){
            return (
            <div className='bg-green-500 text-white text-sm px-2 py-1 font-medium rounded-md'>
                Selesai
            </div>
            )
        }
    }
    

  return (
 
        <HandleStatus/>
  
  )
}

export default StatusProcess