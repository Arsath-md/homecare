import { useState } from "react"
import { Link } from "react-router-dom"
import service from "../components/servicedata"
import Service_card from "../components/service_card"

export default function Services(){
    return(
        <>
        <div className="text-center">
            <h1 className="font-bold p-4 text-4xl">Our service</h1>
            <div className="bg-white rounded m-2 shadow-xl text-center p-4 ">
                <div className="grid grid-cols-2 rounded shadow-md gap-3 md:grid-cols-5 mt-5">
                    {service.map((service)=>(
                        <Service_card service={service} key={service.id}/>
                    ))}
                </div>
             </div>
        </div>
         
        </>
       
    )
}