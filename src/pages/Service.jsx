import service from "../components/servicedata"
import { Link } from "react-router-dom"

export default function Service(){

    return(

        <>
        <div className="min-h-screen flex flex-row gap-5">
               {
                service.map((key)=>(
                    <div key={key.id} className=" text-red-500">
                           <h1> {key.title}</h1>
                           <Link to={`/service/:${key.title}`}><button>client</button></Link>
                    </div>

                ))
               }
               
        </div>
        </>
    )
}