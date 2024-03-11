import { Cat } from '@/types/types';
import React from 'react'

const SSRPage = async() => {
  const response = await fetch(`https://catfact.ninja/fact`,{
    cache:"no-cache"
  })
  const  results  = await response.json();


  return (
    <div className="mt-8">
        {results.fact}
        {results.length}
    </div>
  );
};


export default SSRPage