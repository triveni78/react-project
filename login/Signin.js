import React, { useRef } from "react";
import './SignInSignUp.css';

export default function SignLogin() {
  const email = useRef(null);
  const password = useRef(null);

  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    if (email.current.value === localEmail && password.current.value === localPassword) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload(); // Reload the page after successful login (you might want to use state for this instead)
    } else {
      alert("Please Enter valid Credentials");
    }
  };

  return (
    <div>
      <form>
        <div className="container-fluid">
          <div className="hello1">
          <div className="log">
            <h1 style={{ color: 'blue' }}>Hello {localName}</h1>
            <div className="input_space">
              <input placeholder="Email" type='text' required ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' required ref={password} />
            </div>
          
            <button type="button" class="btn btn-success"onClick={handleSignIn}>Sign In</button>
           
            
          </div>
          </div>
        </div>
      </form>
    </div>
  );
}
