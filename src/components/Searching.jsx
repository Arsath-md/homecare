import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Searching(){

    const [navi,setNavi] = useState('')

    const navigation = useNavigate();

    const hdlinpt=(e)=>{
        e.preventDefault();
        setNavi((prev)=>{e.target.value});
        
    }


    return(
        <>
                <div className="shadow-lg z-100 text-black ring ring-green-500 font-bold rounded bg-white/40">
                    <input type="text" className="flex justify-center border-none shadow-xl transition duration-300 p-1" onChange={hdlinpt} value={navi} placeholder="Search Services"/>
                </div>
        </>
    )
}