import Customer_card from "../components/customer_card";

export default function Customer(){
    return(
        <div className="bg-white rounded m-2 border text-center p-2 font-bold">
            <h1 className="text-xl">Our</h1>
            <h1 className="text-xl">Happy Customer</h1>
            <div className="flex justify-center">
                <Customer_card/>
            </div>
        </div>
    )
}