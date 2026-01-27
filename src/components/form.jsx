import { useParams } from "react-router-dom"
import service from "./servicedata"

export default function Forms(){
            const {title} = useParams();
    return(
        <>
        <h1>{title}</h1>
        
                
        </>
    )
}