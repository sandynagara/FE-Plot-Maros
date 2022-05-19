import React from 'react'
import {AiOutlinePoweroff} from "react-icons/ai"
import LogoBpn from './LogoBpn'

function UserLogin() {
  return (
    <div className='w-full flex justify-between mb-4'>
        <LogoBpn/>
        {/* <div className='flex'>
          <div  className='py-2 px-4 rounded-md bg-black text-white font-medium mr-2'>
              Hai, Sandy Setyanagara
          </div>
          <div  className='py-2 px-3 rounded-md bg-red-500 hover:bg-red-700 cursor-pointer text-white font-medium flex justify-center items-center'>
              <AiOutlinePoweroff size={20}/>
          </div>
        </div> */}
    </div>
  )
}

export default UserLogin