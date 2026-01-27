import { useParams } from "react-router-dom"
import service from "./servicedata"

export default function Forms(){
            const {name} = useParams();
    return(
        <>
        <h1>{name}</h1>
        
                
        </>
    )
}