import React, { useState } from 'react'

function Products({value, info}){
    const [a,b] = useState(true)
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
            <h1>{value}</h1>
            <h2>{info.age}</h2>
            <h2>{info.name}</h2>
             {/* conditional rendering */}
            <h4 className={`${a === false ? "text-red-600" : "text-green-600"}`}>{a === false ? "hello" : "hey"}</h4>  
            <button onClick={()=>b(!a)}>change</button>
    </div>
  )
}

export default Products