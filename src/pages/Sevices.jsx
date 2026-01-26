import { useState } from "react"
import Service_card from "../components/service_card"

export default function Services(){
    const[service,setService]=useState([{image:"/src/assets/image.webp",title:"oxygen supply"},{image:"/src/assets/image.webp",title:"oxygen supply"},{image:"/src/assets/image.webp",title:"oxygen supply"},{image:"/src/assets/image.webp",title:"oxygen supply"},{image:"/src/assets/image.webp",title:"oxygen supply"},])
    return(
        <div className="bg-white rounded m-2 border text-center p-4 font-bold">
                <h1 className="text-xl">Our</h1>
                <h1 className="text-xl">Services</h1>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5 mt-5">
                    {service.map((service,index)=>(
                        <Service_card service={service} key={index}/>
                    ))}
                </div>
        </div>
    )
}