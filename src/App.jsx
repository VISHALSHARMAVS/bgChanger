import { useState } from 'react'



function App() {
  const [bgColor, setBgColor] = useState("red");

  
  return (
   <div className='w-full h-screen duraction-200'
   style={{backgroundColor:bgColor}}>

<div className='fixed flex flex-wrap  justify-center align-center top-60 inset-x-0 px-3 py-2 rounded-3xl'>
<div className='flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    

    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:"red"}} onClick={()=> setBgColor("red")}>Red </button>
     <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'green'}} onClick={()=> setBgColor("green")}>Green </button> 
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'purple'}} onClick={()=> setBgColor("purple")}>Purple </button> 
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:"blue"}} onClick={()=> setBgColor("blue")}>Blue </button> 
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'olive'}} onClick={()=> setBgColor("olive")}>Olive </button>
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'grey'}} onClick={()=> setBgColor("grey")}>Grey </button>
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'yellow'}} onClick={()=> setBgColor("yellow")}>Yellow </button>
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'pink'}} onClick={()=> setBgColor("pink")}>Pink</button>
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'lavender'}} onClick={()=> setBgColor("lavender")}>Lavender </button>
    <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
    style={{backgroundColor:'black'}} onClick={()=> setBgColor("black")}>Black </button>
    <button className='outline-none px-4 py-1 text-black shadow-lg rounded-full'
    style={{backgroundColor:'white'}} onClick={()=> setBgColor("white")}>White </button>
     <button className='outline-none px-4 py-1 text-white shadow-lg rounded-full'
    style={{backgroundColor:'indigo'}} onClick={()=> setBgColor("indigo")}>Indigo </button>
</div>
</div>

   </div>
  )
}

export default App
