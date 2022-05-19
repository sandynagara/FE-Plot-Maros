import React from 'react'
import { Link } from 'react-router-dom'

function DetailButton({id}) {
  return (
    <Link to={`/dashboard/detail/${id}`}>
      <div className='bg-white text-sm text-blue-500 cursor-pointer py-1 font-medium rounded-md'>
          Detail
      </div>
    </Link>
   
  )
}

export default DetailButton