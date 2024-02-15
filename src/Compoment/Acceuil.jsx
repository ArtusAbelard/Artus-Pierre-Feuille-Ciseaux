import paper from './../assets/img/icon-paper.svg'
import scissors from './../assets/img/icon-scissors.svg'
import rock from './../assets/img/icon-rock.svg'
import { useState } from 'react'
export default function Acceuil(props) {
    
    function btnacceuil() {
        props.setactive("picked")
        props.setchoix("paper")
        setrdmnumber(Math.floor(Math.random() * 3))
        props.choixenemie()
     }
    function btnacceuilscissors() {
        props.setactive("picked")
        props.setchoix("scissors")
        setrdmnumber(Math.floor(Math.random() * 3))
        props.choixenemie()
     }
    function btnacceuilrock() {
        props.setactive("picked")
        props.setchoix("rock")
        props.setrdmnumber(Math.floor(Math.random() * 3))
        props.choixenemie()
     }
     
    return (
       <div className="w-screen flex justify-center items-center flex-col gap-14 pt-14">
            
            <div className='w-1/2 h-[600px] flex justify-center items-center flex-col relative'>
            <img className='flex justify-center items-center h-[60%] z-0 absolute' src={props.imgacceuil} alt="" /> 
            <div className='h-1/2 w-full z-10 flex'>
                <div className='w-1/2 h-full  z-10 flex justify-center items-center ps-[15%]'>
                    <div onClick={btnacceuil} className='h-[250px] w-[250px] rounded-full bg-white border-[30px] border-blue-800 flex justify-center items-center'>
                        <img className='h-[100px]' src={paper} alt="" />
                    </div>
                </div>
                <div className='w-1/2 h-full z-10 flex justify-center items-center pe-[15%]'>
                    <div onClick={btnacceuilscissors} className='h-[250px] w-[250px] rounded-full bg-white border-[30px] border-yellow-800 flex justify-center items-center'>
                        <img className='h-[100px]' src={scissors} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-1/2 w-full z-10 flex justify-center items-center pb-[3%]'>
                <div onClick={btnacceuilrock} className='h-[250px] w-[250px] rounded-full bg-white flex border-[30px] border-red-800 justify-center items-center'>
                    <img className='h-[100px]' src={rock} alt="" />
                </div>
            </div>
            </div>
       </div>
    )
}
