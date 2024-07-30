import React, { useRef } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleClick = () => {
    const existingEmails = JSON.parse(localStorage.getItem("emails")) || [];
    if (existingEmails.includes(email.current.value)) {
      alert("User already exists with this email!");
      return;
    }

    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);

      existingEmails.push(email.current.value);
      localStorage.setItem("emails", JSON.stringify(existingEmails));

      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  return (
    <div className="login">
      <form>
        <div className="hell">
          <div className="form">
            <div className="input_space">
              <input placeholder="Name" type='text' style={{ color: 'white' }} ref={name} required />
            </div>
            <div className="input_space">
              <input placeholder="Email" type='text' style={{ color: 'white' }} ref={email} required />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' style={{ color: 'white' }} ref={password} required />
            </div>
            <button className="input_space" onClick={handleClick}>Sign Up</button>
            <p style={{ color: 'white' }}>Already have an account? <Link to="/signin" style={{ color: 'white' }}>Sign In</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
