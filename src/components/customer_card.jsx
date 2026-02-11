import { useRef,useEffect } from "react"
import service from "../datas/servicedata"



export default function Customer_card({review}) {

      

    return (
        <div className="text-center min-w-[280px] snap-start">
             <div className="bg-[#F2F7FB] text-center flex flex-auto flex-col gap-5 p-5 rounded-lg justify-center items-center  ">
                 <div className="flex justify-center">
                      <img src={review.img} className="rounded-full h-30px w-30px" style={{ height: "200px", width: "200px" }} alt="" />
                 </div>
                    <div>
                         <h1 className="heading">{review.reviewerName}</h1>
                    </div>
                            <div>
                                <h2 className="semihead">{review.customerReview} </h2>
                            </div>
                        </div>
                    </div>
    )
}