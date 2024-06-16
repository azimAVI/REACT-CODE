import React, { useState } from 'react'
import Products from './Products';

const App = () => {
  var [a,b] = useState(100);
  return (
    // <div className='bg-zinc-900 text-white w-full h-screen'>2
    //   <h1>{a}</h1>
    //   <div className='grid gap-4 grid-cols-2 w-44'>
    //         <button onClick={() => b(a+1)} className='px-3 py-1 bg-green-500 rounded-xl text-slate-700' >Add +</button>
    //         <button onClick={() => b(a-1)} className='px-3 py-1 bg-red-500 rounded-xl text-slate-700' >Minus -</button>
    //   </div>
    // </div>
    <div className='bg-zinc-900 w-full h-screen p-5'>
      <Products value="12" info={{age: 21, name:"Aayush"}} />
    </div>
  )
}

export default App