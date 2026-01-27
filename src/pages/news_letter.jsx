export default function News_letter(){
    return(
        <div className="bg-white rounded m-2 border text-center p-5 font-bold flex flex-col align-center justify-center">
            <h2 className="text-xl">News Letter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sit.</p>
            {/* <div className="flex justify-center align-center w-100%"> */}
            <div  className="flex justify-center">
                <input type="search" name="" id="" className="md:w-2/5 bg-gray-500 rounded-md p-2 mt-3 focus:outline-none focus:ring text-white placeholder-red-500 text-center" placeholder="Enter Email" />
            </div>
            <div className="flex justify-center">
                <button className="bg-red-500 w-fit p-2 rounded-2xl px-5 mt-4 text-center">Subcribe</button>
            </div>
            {/* </div> */}
        </div>
    )
}