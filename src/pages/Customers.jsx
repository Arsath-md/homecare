import { faUber } from "@fortawesome/free-brands-svg-icons";
import { faFaceKiss, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Customer_card from "../components/customer_card";


export default function Customers(){

    return(

        <>
        <div className="min-h-screen ">
               <div className="p-1 shadow-lg text-center rounded flex flex-col flex-auto justify-center gap-5 p-5">
                    <h1 className="font-bold text-4xl ">Our Happy clients</h1>
                   <Customer_card/>
               </div>
        </div>
        </>
    )
}