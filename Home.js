 
 
import React, { useEffect, useRef, useState } from "react";
import pic2 from './api banner4.webp'
import pic3 from './api banner2.webp'
import pic4 from './api banner 1.webp'
import p1 from "./image.jpg"
import image from "./bmi1.png"
import food from "./food.png"
import weather  from "./weather.png";
// import p3 from "./image.png"
import p2 from "./image (1).jpg"
import social from "./social-removebg-preview.png"
// import pic5 from './pic.jpg'
import "../Reactprojectcmr/login/Style1.css"
import pic6 from './traning pics.jpg'
export default function Home() {
 
  return (
    <>
      <div className='container-fluid'>
        <div id="carouselExample" className="carousel slide">
          <div className=" carousel-inner" style={{ height: '350px' }} >
            <div className="carousel-item active">
              <img src={p2} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={p1} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={pic4} class="d-block w-100" alt="..." />
            </div>
         
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
 
 
 
 
 
      <div className='container-fluid'>
 
        <div className='row'>
          <div className='col-md-7 p-4'>
            <h1 style={{ fontFamily: 'sans-serif', color: 'black', fontWeight: "600" }}>Hi &#128075; ,</h1>
            <h1><b>I'm  MTM</b></h1>
            <h1 className="PT-3"> <b> FRONT-END DEVELOPER</b> </h1>
            <p className='pt-1' style={{ fontFamily: 'sans-serif' }}>The year 2015 has been a milestone for global development as governments
              have adopted the 2030 Agenda for Sustainable Development, along with the
              Sustainable Development Goals (SDGs). The bold agenda sets out a globalframework to end extreme poverty,
              fight inequality and injustice, and fix climate change until 2030.</p>
            <br />
 
          </div>
          <div className='profile col-md-4'  >
            <img src={pic6} alt='' style={{ height: "290px", width: '450px', margin: '30px', borderRadius: '20px' }} />
          </div>
          <div className="container-fluid">
            <div className='row'>
              <div className="col-md-12">
 
                <marquee width="100%" direction="right" style={{ backgroundColor: "gray" }} >
                  <h1 >Our API's</h1>
 
 
                </marquee>
              </div>
              <div className='col-md-4 mb-4'>
               <h1 style={{textAlign:'center'}}>BMI calculate</h1>
                <img src={image} className="card-img-top" style={{ height: '300px',  borderRadius:"20px", padding:"10px" }} />
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <h4 className='card-title'></h4>
                  <a href="#" className="bbbb"  style={{padding:"10px",margin:'10px'}} >Click Cn BMI</a>
 
                </div>
              </div>
              <div className='col-md-4 mb-4'>
               <h1 style={{textAlign:'center'}}>Recipe API</h1>
                <img src={food} className="card-img-top" style={{ height: '300px',  borderRadius:"20px", padding:"10px" }} />
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <h4 className='card-title'></h4>
                  <a href="#" className="bbbb"  style={{padding:"10px",margin:'10px'}} >Click Cn API</a>
 
                </div>
              </div>
              <div className='col-md-4 mb-4'>
               <h1 style={{textAlign:'center'}}>Weather</h1>
                <img src={weather} className="card-img-top" style={{ height: '300px',  borderRadius:"20px", padding:"10px" }} />
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <h4 className='card-title'></h4>
                  <a href="#" className="bbbb"  style={{padding:"10px",margin:'10px'}} >Click Cn API</a>
 
                </div>
              </div>
           
 
 
            </div>
          </div>
          <div className="foot container-fluid">
            <div className='row'>
              <div className="col-md-12">
                <h4 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>Our Social Network</h4>
                <p style={{ textAlign: "center", color: "white" }}> Follow us on Twitter,Facebook,Instagram,linkedin.</p>
                <div className="social" style={{ margin: 'auto' }} >
                  <marquee width="100%" direction="right"  >
                    <img src={social} />
 
 
                  </marquee>
                </div>
 
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </>
 
  )
}
  