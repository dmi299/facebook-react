import React, { useState } from 'react';
import './Form.css';



const Signup = () => {
  const [inputtext, setinputtext] = useState({
    email: "",
    password: ""
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpassword, setwarnpassword] = useState(false);

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }
    });

  }



  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpassword(false);
    if (inputtext.email === "") {
      setwarnemail(true);
    }
    else if (inputtext.password === "") {
      setwarnpassword(true);
    }
    else {
      alert("form submitted");
    }

  }

  const Eye = () => {
    if (password === "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    }
    else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  }


  return (
    <>
      <div className="container-signup">
        <div className="card-signup">
          <div className="">
            <div className="text-signup">Sign Up </div>
            <div>It's quick and easy.</div>
            <div className="contentCurve"></div>
          </div>
          <form onSubmit={submitForm}>

            <div className='row'><div className="input-text-sgup col-6">
              <input type="text" className={` ${warnemail ? "warning" : ""}`} placeholder="Firstname" value={inputtext.email} onChange={inputEvent} name="email" />
              
            </div>
            <div className="input-text-sgup col-6">
              <input type="text" className={` ${warnemail ? "warning" : ""}`} placeholder="Surname" value={inputtext.email} onChange={inputEvent} name="email" />
              

            </div></div>

            <div className="input-text-sgup">
              <input type="text" className={` ${warnemail ? "warning" : ""}`} placeholder="Email or phone number" value={inputtext.email} onChange={inputEvent} name="email" />
              

            </div>
            <div className="input-text-sgup">
              <input type={password} className={` ${warnpassword ? "warning" : ""} ${type ? "type_password" : ""}`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />
              <i className="fa fa-lock"></i>
              <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
            </div>
            <div className='para'>

            <div>People who use our service may have uploaded your contact information to Facebook. Learn more.</div>
            <div className='para'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</div>
            </div>
            <div className="buttons">
              <button type="submit">Sign in</button>
            </div>
            
            
          </form>
        </div>
      </div>

    </>
  )
}
export default Signup;