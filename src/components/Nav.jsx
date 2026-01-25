import { useState } from "react"



export default function Nav({show , setShow}){

    

    return(
        <>
         {/* navigtion bar */}
                <nav className="flex justify-start gap-15 flex-auto p-2">
                    <button onClick={()=>{setShow(!show)}} className="z-100"><img src="./vite.svg"  alt="" /></button>
                    <h1 className="font-bold text-2xl text-white">Homecare nursing</h1>
                </nav>    
                {/* navigation bar setting */}
        </>
    )
}