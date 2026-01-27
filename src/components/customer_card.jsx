import { faFaceKiss, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Customer_card() {
    return (
        <div className="text-center">
                        <div className="bg-[#F2F7FB] text-center flex flex-auto flex-col gap-5 p-5 rounded-lg justify-center items-center ">
                            <div className="h-24 w-24 border rounded-full flex justify-center items-center">
                                <FontAwesomeIcon icon={faUserAstronaut} size="3x" />
                            </div>
                            <div>
                                <h1 className="heading">akash</h1>
                            </div>
                            <div>
                                <h2 className="semihead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, porro. Veritatis, porro modi obcaecati ducimus deserunt odit quas? </h2>
                            </div>
                        </div>
                    </div>
    )
}