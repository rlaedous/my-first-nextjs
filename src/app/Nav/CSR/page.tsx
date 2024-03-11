'use client'
import { Cat } from '@/types/types';
import React, { useEffect, useState } from 'react'

const CSRPage = () => {
  const [data,setData] = useState<Cat | null>(null)
  useEffect(()=>{
    const fetchData = async() => {
    const response = await fetch(`https://catfact.ninja/fact`,{
      cache:"no-cache"
    })
    const  results  = await response.json();

    setData(results)
  }
  fetchData()
  },[])

  if(!data){
    return <div>로딩중 ...</div>

  }

  return (
    <div className="mt-8">
        {data?.fact}
        {data?.length}
    </div>
  );
};

export default CSRPage