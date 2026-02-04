import Nav from "../components/Nav";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faHamburger, faHome, faHomeAlt, faHomeLg, faHomeUser, faL, faNavicon, faPhone, faServer, faUsd, faUserNurse, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faServicestack, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Services from "./Sevices";
import Customers from "./Customers";
import News_letter from "./news_letter";
import Get_in_touch from "./get_in_touch";
import service from "../components/servicedata";
import { Link } from "react-router-dom";


export default function Home(){
  const [show, setShow] = useState(false);
  const showref = useRef(null)
  const [content,setContent] = useState(false)


  
  // used for sticky nav bar in the bottom
  useEffect(()=>{
      const observer = new IntersectionObserver( ([entry])=>{
          if(!entry.isIntersecting){
                  setContent(true)
          }else{
            setContent(false)
          }
      } ,{})

      if(showref.current) observer.observe(showref.current)

      return ()=> observer.disconnect();
  },[])


  return (
    <> 
    <div className="bg-gray-300">
  <div
      className="relative min-h-screen bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url(https://ik.imagekit.io/hifi/imgs/project1.png?updatedAt=1769523710540)` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* navbar */}
      <Nav />

      {/* side menu */}
      <div
        className={`${
          show ? "test-on" : "test-off"
        } flex flex-col justify-start items-center absolute z-120`}
      >
        <div className="flex flex-col  gap-5 text-white font-bold text-center">
         <h1>comming.....</h1>
        </div>
      </div>

      {/* hero content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center text-white shadow-lg rounded"  ref={showref}>
        <h1 className="text-4xl font-bold mb-4">
          Best home nursing for your loved ones
        </h1>

        <p className="text-lg mb-6">
          With the most talented and experienced nurses
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded bg-green-500 px-4 py-2 font-bold">
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </button>

          <button className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-bold">
            <FontAwesomeIcon icon={faPhone} />
            Call Us
          </button>
  
        </div>
      </div>

      {/* fixed bar  */}

      <div className={`fixed bottom-0 left-0 w-full  bg-black/70 z-150  flex flex-auto justify-between rounded-pill text-center p-1 transition duration-300  ${content?"opacity-100":"opacity-0"}`}>
        <div><FontAwesomeIcon icon={faUserNurse} color="white" size="2x" className="py-2 "/></div>

        <button className="flex items-center gap-2 rounded-full bg-green-500  h-11 w-11 font-bold flex justify-center">
            <FontAwesomeIcon icon={faWhatsapp}  size="2x"/>
            
          </button>
          
          <button className="flex items-center gap-2 rounded bg-red-500 h-11 w-11 rounded-full font-bold flex justify-center ">
            <FontAwesomeIcon icon={faPhone} size="2x" color="white"/>
          </button>

          <button onClick={()=>{setShow(!show)}} className=" z-100 right-0">
            <FontAwesomeIcon icon={faNavicon} size="2x" color="white" />
          </button>

      </div>
    </div>

   
            <Services/>
            <Customers/>
            <News_letter/>
            <Get_in_touch/>
    
   
      
    </div>
    
  

    </>
   
  );
}
