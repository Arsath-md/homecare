import { Link } from "react-router-dom"


export default function Service_card({service}){
    return(
        <div className="bg-gray-900 rounded p-4 shadow-md text-center text-white flex flex-col gap-3">
            <div>
            <img src={service.image} className="rounded-full h-30px w-30px"  alt="" />
            </div>
            <div>
                {/* <h2>oxygen</h2> */}
                <h2>{service.title}</h2>
            </div>
            <div>
                <Link to={`/service/${service.title}`}>
                    <button className="text-green-700 ring ring-green-800 rounded p-2">Enquire now</button>
                </Link>
            </div>
            
        </div>
    )
}