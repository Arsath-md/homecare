import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"



export default function Nav(){

    

    return(
        <>
         {/* navigtion bar */}
                <nav className="flex justify-between  flex-auto p-1">
                    <button className="z-100"><img src="./vite.svg"  alt="" /></button>
                    <div className="text-center">
                    <h1 className="font-bold text-3xl text-white">Homecare nursing</h1>
                    </div>
                    <div className="p-2"><FontAwesomeIcon icon={faSearch} size="1x"/></div>

                    
                </nav>    
                {/* navigation bar setting */}
        </>
    )
}