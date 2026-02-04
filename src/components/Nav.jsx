import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Searching from "./Searching"


export default function Nav(){

       const [opened,setOpened] = useState(false)
 
    return(
        <>
         {/* navigtion bar */}
                <nav className="flex justify-between flex-auto p-2 bg-black/10">
                    <div className="z-110 rounded-full h-15 w-15 rounded-pill">
                    <img src="https://ik.imagekit.io/hifi/imgs/hclogo.png?updatedAt=1770127333262"  alt="" /></div>
                    <div className="text-center z-100">
                    <h1 className="font-bold text-3xl z-110" style={{fontFamily:"cursive",color:"blue"}}>Velan</h1>
                    <h1 className="font-bold text-xl text-white">homecare Nursing</h1>
                    </div>
                    <div className={`p-1 z-100 rounded-full text-center h-8 w-8 ${opened ?"bg-red-600":"bg-black"} transition duration-300`}>
                        <button type="button"  onClick={()=>setOpened(!opened)}><FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" size="1x" /></button>
                       </div>

                    
                </nav>  
               {opened && ( 
                <div className="flex justify-center transition duration-400">
                    <Searching/>
                </div>
               )}
                {/* navigation bar setting */}
        </>
    )
}