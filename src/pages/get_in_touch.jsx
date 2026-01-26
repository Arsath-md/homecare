import Customer_support from "../components/customer_support";

export default function Get_in_touch(){ 
    return(
        <div className="bg-white rounded m-2 border text-center p-2 font-bold">
            <h1 className="text-xl">Get in Touch</h1>
            <div className="flex justify-center mt-4">
                <img src="/src/assets/image.webp" className="rounded-xl items-center" style={{height:"300px",width:"300px"}} alt="" />
            </div>
            <Customer_support/>
        </div>
    )
}   