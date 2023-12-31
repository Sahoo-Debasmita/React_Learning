import { useInsertionEffect } from "react";
import { useState,useEffect } from "react";

function useCustomCurrency(currency){
    const [Data,setData]=useState({});
   useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setData(res[currency]));
},[currency])
console.log(Data);
   return Data;
}
export default useCustomCurrency;