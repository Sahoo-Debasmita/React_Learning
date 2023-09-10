import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid}=useParams();
  return (
<div className='bg-red-300 text-2xl p-4 text-center'>
      User: {userid}
    </div>
  )
}

export default User
