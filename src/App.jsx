import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import imgacceuil from './assets/img/bg-triangle.svg'
import Acceuil from './Compoment/Acceuil'
import Picked from './Compoment/Picked'
import imgrules from './assets/img/image-rules.svg'

function App() {
  const [count, setCount] = useState(0)
  const rules = useRef()
  const [active, setactive] = useState("acceuil")
  const [choix, setchoix] = useState("")
  function btnacceuil() {
    setactive("picked")
    console.log(choix);
  }
  
  function rulesshow() {
    rules.current.classList.toggle("hidden")
  }
  
  
  return (
    <div className=' w-screen h-screen flex justify-center items-center flex-col'>
      <div className='w-1/2 h-[200px] rounded-2xl border-[4px] flex '>
            <div className='w-1/2 h-full flex'>
                <ul className='flex flex-col items-start justify-center w-[200px] ps-16 text-5xl font-bold text-white'>
                    <li>ROCK</li>
                    <li>PAPER</li>
                    <li>SCISSORS</li>
                </ul>
            </div>
            <div className='w-1/2 h-full flex flex-col items-end justify-center pe-16'>
                <button className='w-[200px] h-[150px] bg-white rounded-2xl flex flex-col items-center justify-center text-[#3B4D9F] font-bold text-2xl tracking-wide'>score<span className='text-[#58546B] text-7xl '>{count}</span></button>
            </div>
            </div>
      {
        active == "picked" ? <Picked choix={choix} setactive={setactive} active={active} ></Picked> : <Acceuil choix={choix} setchoix={setchoix}  setactive={setactive} active={active} imgacceuil={imgacceuil}></Acceuil>
      }
      
      <div className='w-[90%] h-[100px] top-[88%] flex justify-end items-center'>
        <button onClick={rulesshow} className='text-white font-semibold text-xl tracking-widest w-[170px] h-[50px] rounded-xl me-5 border-[2px]'>RULES</button>
      </div>
      <div ref={rules} className='w-[500px] rounded-xl h-[500px] flex flex-col justify-center items-center hidden bg-white absolute z-20 gap-10'>
        <h1 className='text-[#58546B] text-3xl font-bold pe-[70%]'>RULES</h1>
        <img className='h-[70%]' src={imgrules} alt="" />
      </div>
    </div>
  )
}

export default App
