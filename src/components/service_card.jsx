export default function Service_card({service}){
    return(
        <div className="bg-gray-300 rounded w-fit p-4 shadow-lg">
            <img src={service.image} className="rounded-full h-30px w-30px" style={{height:"200px",width:"200px"}} alt="" />
            <div className="my-2">
                {/* <h2>oxygen</h2> */}
                <h2>{service.title}</h2>
            </div>
            <button className="text-green-700 ring ring-green-800 rounded px-2">enquire now</button>
        </div>
    )
}