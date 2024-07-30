import React, { useState,Link,Route,Routes } from 'react';
import Home from './Home';
//import Style from './Style.css'
// import bk from "./N18.jpg"
// import logo1 from '../img/LOGO-removebg-preview.png'
const Contact = () => {
   
 
  return (
    <div className='background1' id='cmr'>
     
      <div className='container1'>
  
      <div className='contact col-md-12' >
      <div className='Contact p-5'>
    <div style={{ textAlign: 'center', maxWidth: '600px', marginLeft: '30px' }} >
      <h2 style={{color:"black",fontSize:"50px"}}><span style={{color:"white"}}>Contact</span> <span style={{color:"white"}}>Us</span></h2>
 
      <form>
      <label style={{ display: 'block', marginBottom: '5px', color:"white",fontSize:"20px" }}>Name:</label>
          <input style={{padding:"30" ,color:"white"}}
          type="text"
          name="name"
          placeholder='Enter your Name'
        
             
        required/>
            <label style={{ display: 'block', marginBottom: '5px', color:"white",fontSize:"20px" }}>Contact:</label>
        <input 
          type="text"
          name="phone no"
          placeholder='Enter your Number'
                   
        required   style={{paddding:"20px",color:"white"}}/>
        <label style={{ display: 'block', marginBottom: '5px', color:"white",fontSize:"20px" }}>Email:</label>
        <input style={{paddding:"10px",color:"white"}}
          type="email"
          name="email"
          placeholder='Enter your Email'
                required />
        <label style={{ display: 'block', marginBottom: '5px', color:"white", fontSize:"30px" }}>Message:</label>
        <textarea
          name="message" style={{paddding:"10px",color:"white"}}
          placeholder='Enter message here'
           required/>
           <br/>
        <button   >Submit</button>
      </form>
    </div>
    </div>
    </div>
    </div>
    
  </div>
    
    

   
   
  );
};
 
export default Contact;