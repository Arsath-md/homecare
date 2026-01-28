import imgs from "../assets/senior_care.png"
import { useLoaderData, useLocation, useParams } from "react-router-dom";


export default function Forms(){
            const {title} = useParams();
            const locatin = useLocation();

            const imgs = locatin.state?.images
            
    return(
        <>
          <div >
                <div className="p-5 flex flex-col gap-4">
                    <div  className="text-center font-bold text-2xl">
                        <h1 >{title}</h1>
                    </div>

                    <div>
                        <img src={imgs || null} alt="preview" />
                    </div>

                    <div>
                        <form action="" className="flex flex-col font-semibold text-lg shadow-md gap-3 p-5  ">
                            <input type="text" placeholder="Enter name" onChange={null}/>
                            <input type="tel" placeholder="Enter phone number" onChange={null}/>
                            <input type="text" value={title} onChange={null} readOnly/>

                            <button className="border p-2 font-semibold rounded-full">Send details</button>
                        </form>
                    </div>
                </div>   
         </div>        
                
        </>
    )
}