import { useInsertionEffect } from "react";
import { useState,useEffect } from "react";

function useCustomCurrency(currency){
    cosnt [Data,setData]=useState({});
   useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json).then((res)=>setData(res[currency]));
    console.log(Data);
   },[currency])
   return Data;
}
export default useCustomCurrency;