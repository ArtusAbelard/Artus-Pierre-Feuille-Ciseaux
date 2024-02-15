import paper from './../assets/img/icon-paper.svg'
import scissors from './../assets/img/icon-scissors.svg'
import rock from './../assets/img/icon-rock.svg'
import { useState } from 'react'


export default function Picked(props) {
    
    const [txtwinner, settxtwinner] = useState("YOU WIN")
    
    function btnacceuil() {
        props.setactive("acceuil")
        
    }


    return (
        <div className="w-screen flex justify-center items-center flex-col gap-14 pt-14">
            <div className="w-2/3 h-[600px] flex justify-center items-center">
                <div className="w-1/3 h-full  flex justify-center items-center flex-col gap-14">
                    <h1 className="text-white font-bold text-3xl">YOU PICKED</h1>
                    <div className='h-[380px] w-[380px] rounded-full bg-white border-[50px] tracking-widest flex justify-center items-center' style={props.choix == "paper"?{ borderColor: "#1E40AF"}
                                                                                                                                                    : props.choix == "scissors"?{ borderColor: "#854D0E"}
                                                                                                                                                    : props.choix == "rock"?{ borderColor: "#991B1B"}
                                                                                                                                                    :""}>
                        <img className='h-[150px]' src={props.choix == "paper" ? paper
                                                        :props.choix == "scissors" ? scissors
                                                        :props.choix == "rock" ? rock
                                                        :""} alt="" />
                    </div>
                </div>
                <div className="w-1/3 h-full flex flex-col justify-center items-center text-white text-6xl font-bold gap-7">
                    <h1>{txtwinner}</h1>
                    <button onClick={btnacceuil} className='w-[290px] h-[60px] rounded-xl bg-white text-red-700 font-semibold text-xl'>PLAY AGAIN</button>

                </div>
                <div className="w-1/3 h-full  flex justify-center items-center flex-col gap-14">
                <h1 className="text-white font-bold text-3xl">THE HOUSE PICKED</h1>
                    <div className='h-[380px] w-[380px] rounded-full bg-white border-[50px] tracking-widest flex justify-center items-center' style={props.choixenemy == "paper"?{ borderColor: "#1E40AF"}:props.choixenemy == "scissors"?{ borderColor: "#854D0E"}:props.choixenemy == "rock"?{ borderColor: "#991B1B"}:""}>
                        <img className='h-[150px]' src={props.choixenemy == "paper"?paper:props.choixenemy == "scissors"?scissors:props.choixenemy == "rock"?rock:""} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
