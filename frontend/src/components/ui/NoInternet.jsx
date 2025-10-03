import React, { useEffect, useState } from 'react'
import noInternet from '../../assets/nointernet.jpeg'

const NoInternet = () => {
  const [isOnline,setIsOnline]= useState(true);
  useEffect(()=>{
    setIsOnline(navigator.onLine);

    const handleOnline =()=>setIsOnline(true);
    const handleOffline = ()=>setIsOnline(false);

    window.addEventListener('online',handleOnline);
    window.addEventListener('offline', handleOffline);

    return()=>{
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  },[])

  if(isOnline)return null;
  console.log(navigator.onLine)

  return (
    <div className="absolute h-screen w-screen bg-[#F7F7F7] top-0 inset-0 flex flex-col items-center justify-center z-[50] space-y-3 ">
      <img className='h-[200px] w-auto' src={noInternet}/>
      <h1 className="text-3xl font-bold mb-4">
         No Internet Connection
      </h1>

      <p className=" mb-6 text-center max-w-md">
        It looks like you’re offline. Please check your connection.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-blue-600  rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Retry
      </button>
    </div>
  )
}

export default NoInternet