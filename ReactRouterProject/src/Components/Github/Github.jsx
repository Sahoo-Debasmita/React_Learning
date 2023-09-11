import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  // Method-1 of fetching API data
  //   const [Data,setData]=useState([]);
  //  useEffect(()=>{
  //   fetch('https://api.github.com/users/sahoo-debasmita').then(response=>response.json()).then(data=>setData(data))
  //  },[])
  const Data=useLoaderData(); 
  return (
    <div className='text-2xl text-center bg-gray-600 text-white'>
      Github_Followers:{Data.followers}
      <img className='' src={Data.avatar_url} alt="github_profilePicture" width={300} />
    </div>
  )
}

export default Github
// Method-2 (The optimised way) of fetching API data
export const githubLoaderInfo=async ()=>{
  const response=await fetch('https://api.github.com/users/sahoo-debasmita');
  return response;
}
