import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  // Initializing Variables for Password Generator
const [length,setlength]=useState(8);
const [Numbers, NumbersAllowed]=useState(false);
const [Charecters,CharactersAllowed]=useState(false);
const [Password,SetPassword]=useState("");
// Logic for generating password
const PasswordGenerator=useCallback(()=>{
  let GeneratedPassword="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(Numbers) str+="0123456789";
  if(Charecters) str+="!@#$^&*";
for(let i=1;i<=length;i++){
  let getindex=Math.floor(Math.random()*str.length+1);
  GeneratedPassword+=str.charAt(getindex);
}
SetPassword(GeneratedPassword);

},[length,Numbers,Charecters,SetPassword])
// Displaying generated password/ Calling the PasswordGenerator function
useEffect(()=>{
  PasswordGenerator();
},[length,Numbers,Charecters,PasswordGenerator])
// Copying password to clipboard
const passwordref=useRef(null);
const copytoclipboard=useCallback(()=>{
   passwordref.current?.select();
  //  Here we can select a range to which we want to copy the password
  //  passwordref.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(Password);
},[Password])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-600 '>
      <h1 className='text-white text-center text-2xl my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input className='outline-none w-full py-1 px-3' type="text" ref={passwordref} value={Password} placeholder='password' readOnly />
        <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500' onClick={copytoclipboard}>COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={50} value={length} onChange={(e)=>{setlength(e.target.value)}} className='cursor-pointer'/>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={Numbers} onChange={()=>{NumbersAllowed((prev)=>!prev)}}/>
          <label>Numbers</label>  
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={Charecters} onChange={()=>{CharactersAllowed((prev)=>!prev)}}/>
          <label>Characters</label>  
        </div>
      </div>
    </div>
    </>
  )
}

export default App
