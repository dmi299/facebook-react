import React, { useState } from 'react';
import './Form.css';
// import {RiErrorWarningLine} from 'react-icons/ri'
// import { AiOutlineEyeInvisible } from 'react-icons/ai'
// import { AiOutlineEye } from 'react-icons/ai'
import { AiFillQuestionCircle } from 'react-icons/ai'
import Select from 'react-select';
const Signup = () => {
  const [inputtext, setInputText] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });

  const [warnfirstname, setWarnFirstname] = useState(false);
  const [warnsurname, setWarnSurname] = useState(false);
  const [warnemail, setWarnEmail] = useState(false);
  const [warnpassword, setWarnPassword] = useState(false);

  const [eye, setEye] = useState(true);
  const [password, setPassword] = useState("password");
  const [type, setType] = useState(false);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputText((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      }
    });

  }



  const submitForm = (e) => {
    e.preventDefault();
    setWarnFirstname(false);
    setWarnSurname(false);
    setWarnEmail(false);
    setWarnPassword(false);
    if (inputtext.firstname === "") {
      setWarnFirstname(true);
    }
    else if (inputtext.surname === "") {
      setWarnSurname(true);
    }
    else if (inputtext.email === "") {
      setWarnEmail(true);
    }
    else if (inputtext.password === "") {
      setWarnPassword(true);
    }
    else {
      alert("form submitted");
    }
  }



  const Eye = () => {
    if (password === "password") {
      setPassword("text");
      setEye(false);
      setType(true);
    }
    else {
      setPassword("password");
      setEye(true);
      setType(false);
    }
  }

  const [showtextfield, setShowTextField] = useState(false)
  // const handleclickCustom = (e) => {
  //   if(e.target.value ==="3"){
  //     setshowtextfield(true);
  //   }

  // }

  const setGender = (event) => {
    console.log(event.target.value);
    setShowTextField(false)
    if (event.target.value === "3") {
      setShowTextField(true);
    }
  }

  //dropdown
  const data = [
    { label: "She: 'Wish her a happy bithday'", value: 1 },
    { label: "He: 'Wish him a happy bithday'", value: 2 },
    { label: "They: 'Wish them a happy bithday'", value: 3 },
  ];

  return (

    <div className="container-signup">
      <div className="card-signup">
        <div className="">
          <div className="text-signup">Sign Up </div>
          <div>It's quick and easy.</div>
          <div className="contentCurve"></div>
        </div>
        <form onSubmit={submitForm}>

          <div className='row'><div className="input-text-sgup col-6 "  >
            <input type="text" className={` ${warnfirstname ? "warning" : ""}`} placeholder="Firstname" value={inputtext.firstname} onChange={inputEvent} name="firstname" checked />

          </div>
            <div className="input-text-sgup col-6">
              <input type="text" className={` ${warnsurname ? "warning" : ""}`} placeholder="Surname" value={inputtext.surname} onChange={inputEvent} name="surname" />


            </div></div>

          <div className="input-text-sgup">
            <input type="text" className={` ${warnemail ? "warning" : ""}`} placeholder="Mobile phone or email address" value={inputtext.email} onChange={inputEvent} name="email" />
            {/* <RiErrorWarningLine></RiErrorWarningLine> */}

          </div>
          <div className="input-text-sgup">
            <input type={password} className={` ${warnpassword ? "warning" : ""} ${type ? "type_password" : ""}`} placeholder="New password" value={inputtext.password} onChange={inputEvent} name="password" />
            <i className="fa fa-lock"></i>
            <span onClick={Eye}><i className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i></span>
          </div>


          <div
            style={{
              margin: '8px 0px -15px 0px',
              fontSize: '11px'
            }}>Gender
            <AiFillQuestionCircle
              style={{ margin: '-2px 0px 0px 2px' }}>
            </AiFillQuestionCircle></div>

          <div className="frame-sgup" datatype='radio' onClick={event => setGender(event)}>
            <div className='radio-sgup'>
              <label className='gender'>Female</label>
              <input className='input-radio' type="radio" value="1" onChange={inputEvent} name="sex" />
            </div>
            <div className='radio-sgup'>
              <label className='gender'>Male</label>
              <input className='input-radio' type="radio" value="2" onChange={inputEvent} name="sex" />
            </div>

            <div className='radio-sgup' >
              <label className='gender'>Custom</label>
              <input className='input-radio' value="3" type="radio" onChange={inputEvent} name="sex" />
            </div>
          </div>

          <div className={` ${showtextfield ? "custom-show" : "custom-hide"}`} >
            <div className='input-text-sgup col-12'>
              <Select
                options={data}
                style={{ color: 'black' }}
                placeholder='Select your pronoun'></Select>
            </div>
            <div
              style={{
                margin: '8px 0px -15px 0px',
                fontSize: '11px'
              }}>
              Your pronoun is visible to everyone.
            </div>
            <div className="input-text-sgup col-12">
              <input type="text" placeholder="Gender(optional)" />
            </div>
          </div>

          <div className='para'>

            <div>People who use our service may have uploaded your contact information to Facebook. <span className='content-link-signup'>Learn more.</span></div>
            <div className='para'>By clicking Sign Up, you agree to our <span className='content-link-signup'>Terms</span>, <span className='content-link-signup'>Privacy Policy</span> and <span className='content-link-signup'>Cookies Policy.</span> You may receive SMS notifications from us and can opt out at any time.</div>
          </div>
          <div className="buttons">
            <button type="submit">Sign in</button>
          </div>


        </form>
      </div>
    </div>


  )
}
export default Signup;