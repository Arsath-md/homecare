export default function Customer_card() {
    return (
        <div className="bg-gray-300 rounded w-fit p-5 md:w-1/3 mt-3 shadow-lg">
            <div className="flex justify-center">
                <img src="/src/assets/image.webp" className="rounded-full h-30px w-30px" style={{ height: "200px", width: "200px" }} alt="" />
            </div>
            <h3 className="my-3 text-xl">David warmer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quae. Nesciunt fuga sed repellendus non dolorum architecto molestiae quod ipsa.</p>
        </div>
    )
}