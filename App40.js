import React from 'react';
 
 
//import '../SignInSignUp.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import pic1 from './1-removebg-preview.png'
import Home from './Home.js';
 
import Contact from './Contact';
import CheckBMI from './CheckBMI';
import Products from "../Reactprojectcmr/login/products.js"
import Api from "../Reactprojectcmr/login/Api.js"
import News from '../Reactprojectcmr/login/News.js'
 
import Food12 from '../Reactprojectcmr/login/Food12.js'
import Movies from '../Reactprojectcmr/login/Movies.js'
 
import App from "../Reactprojectcmr/login/Weather1.js"
 import "../Reactprojectcmr/login/Style1.css"
 import SignIn from './login/Signin.js'; 
import SignUp from "../Reactprojectcmr/login/SignUp.js"
import SignInSignupWithLocalStorage from '../Reactprojectcmr/login/SignInSignUp.js';
 
export default function App40() {
  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}
const deleteAccount=()=>{
    localStorage.clear()
    window.location.reload()
}

  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg"   style={{background: "darksalmon"}}>
          <div className="container-fluid "  id="navbarmain">
            <div className='logo' >
            <Link className="navbar-brand" to="/Home">
    
              <img src={pic1} className="d-block" alt="Logo" />
              
            </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav ">
              <ul className="navbar-nav mx-auto p-0">
             
                <li className="nav-item" >
                  <Link className="nav-link" to="/contact"><b>Contact</b></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/CheckBMI"><b>CheckBMI</b></Link>
                </li>
               
                <li className="nav-item dropdown ">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>APIs</b>
                  </Link>
                  <ul className="dropdown-menu " style={{backgroundColor:'gray',color:'white'}} aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Products">Product API</Link></li>
                    <li><Link className="dropdown-item" to="/news">News API</Link></li>
                   
                    <li><Link className="dropdown-item" to="/Food12">Food Recipe API</Link></li>
                    <li><Link className="dropdown-item" to="/Movies">Movie API</Link></li>
                    <li><Link className="dropdown-item" to="/App">Weather API</Link></li>
                  </ul>
                </li>
              
              </ul>
              <p className='name' style={{color: "white",fontFamily:'initial',
                paddingRight:"20px"
              }}>User Name: <span style={{fontSize:'30px',}}>{localStorage.getItem('name')}</span></p>
      
          
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
      
       
            </div>
            
          </div>
      </nav>
        <Routes>
          <Route path="/Home" element={<Home />} /> 
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/CheckBMI" element={<CheckBMI />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/Products" element={<Products />} />
          <Route path='/News' element={<News />} />
          <Route path='/App' element={<App/>} />
          <Route path='/Food12' element={<Food12 />} /> 
           <Route path='/Movies' element={<Movies />} />

           <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route path="/" component={SignInSignupWithLocalStorage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
