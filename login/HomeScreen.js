 
import React from "react";
// import './commonStyle.css';
import { useLocation, useNavigate } from "react-router-dom";
 
export default function HomeScreen(){
    const data = useLocation() 
    const navigate = useNavigate()
    console.log(data)
    return(
        <div>
            Home {data.state}<br/>
            <button onClick={()=>navigate('/')}>Logout</button>
        </div>
    )
}
  
 