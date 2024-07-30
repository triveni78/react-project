import React, { useEffect, useRef, useState } from "react";
 
 
import './SignInSignUp.css';
import Api from "./Api";
import App40 from "../App40";
import CheckBMI from "../CheckBMI";
 
 
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }
 
   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div className="login">
            <form >
        <div>
            {showHome?<App40/>:
            (show?
                <form>
                <div className="container-fluid">
                  <div className="hello1">
                  <div className="log">
                    <h1 style={{ color: 'white' }}>Hello {localName}</h1>
                    <div className="input_space">
                      <input placeholder="Email" type='text' style={{color:'white'}} required ref={email} />
                    </div>
                    <div className="input_space">
                      <input placeholder="Password" type='password' style={{color:'white'}} required ref={password} />
                    </div>
                  
                    <button type="button" onClick={handleSignIn}>Sign In</button>
                   
                    
                  </div>
                  </div>
                </div>
              </form>
       
                
           :

           <form>
           <div className="container-fluid">
             <div className="hell">
                         <div className="form">
                             <div className="input_space">
                                 <input placeholder="Name" type='text' style={{color:'white'}} ref={name} required/>
                             </div>
                             <div className="input_space">
                                 <input placeholder="Email" type='text'style={{color:'white'}} ref={email} required/>
                             </div>
                             <div className="input_space">
                                 <input placeholder="Password"  type='password' style={{color:'white'}} ref={password} required/>
                             </div>
                             <button className="input_space" onClick={handleClick}>Sign Up</button> 
                             
                     </div>
                     </div>
                     </div>
                     </form>
       
            ) } 
        </div>
        </form>
        </div>
        
    );
}
 export default SignInSignupWithLocalStorage;

 

 