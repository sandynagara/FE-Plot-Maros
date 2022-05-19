import React from 'react'
import logo from "../../images/Logo.png"

function LogoBpn() {
  return (
    <div className='flex items-center font-medium'>
        <img src={logo} className="w-10 h-10 mr-3"/>
        Badan Pertanahan Nasional Kabupaten Maros
    </div>
  )
}

export default LogoBpn