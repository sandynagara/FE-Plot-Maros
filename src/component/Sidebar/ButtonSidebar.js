import React from 'react'


function ButtonSidebar({judul,icon,color="white"}) {
  return (
        <div style={{color:`${color}`}} className='flex items-center pl-3 text-light cursor-pointer py-4 hover:bg-slate-600'>
            <div className='mr-4'>
                {icon}
            </div>  
            {judul}
        </div>
  )
}

export default ButtonSidebar