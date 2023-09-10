import React, { useEffect, useState } from 'react'

const Github = () => {
    const [Data,setData]=useState([]);
   useEffect(()=>{
    fetch('https://api.github.com/users/sahoo-debasmita').then(response=>response.json()).then(data=>setData(data))
   },[])
  return (
    <div className='text-2xl text-center bg-gray-500 text-white'>
      Github_Followers:{Data.followers}
      <img src={Data.avatar_url} alt="github_profilePicture" width={300} />
    </div>
  )
}

export default Github
