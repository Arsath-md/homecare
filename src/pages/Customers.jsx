import review from "../datas/customerdata";
import Customer_card from "../components/customer_card";


export default function Customers(){


    return(
 
        <>
        <div className="min-h-screen " data-aos="fade">
               <div className="p-1 shadow-lg text-center rounded flex flex-col flex-auto justify-center gap-5 p-5 " >
                    <h1 className="font-bold text-4xl ">Our Happy clients</h1>
                    <div className="flex flex-auto items-start gap-5 overflow-x-auto snap-x snap-mandatory transition duration-600">
                      {
                        review.map((datum)=>(
                             <Customer_card review={datum} key={datum.id}/>
                        ))
                      }

                  
                   
                   </div>
               </div>
        </div>
        </>
    )
}