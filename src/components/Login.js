import React, { useState } from 'react';
import isEmpty from "validator/lib/isEmpty";
import './Login.css';
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import './Modal.css'
import Form from './Form';

function Login() {
  // khởi tạo
  const [validationMsg, setValidationMsg] = useState('');
  const [username, setUsername] = useState(' ');
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState('');


  const onChangeUsername = (event) => {
    const value = event.target.value
    setUsername(value)
  }

  const onChangePassword = (event) => {
    const value = event.target.value
    setPassword(value)
  }

  //hide/show
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  //validator for email and phone number
  const validateAll = () => {
    const errorMessage = {}

    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    if (isEmpty(username)) {
      errorMessage.username = "The email address or mobile number you entered isn't connected to an account."
    }
    if (!mailFormat.test(username)) {
      errorMessage.username = "Email or PhoneNumber is not valid. Please provide a valid Email Address or phone number.";
    }
    if (isEmpty(password)) {
      errorMessage.password = "The password that you've entered is incorrect."
    }

    setValidationMsg(errorMessage)
    if (Object.keys(errorMessage).length > 0) return false
    return true
  }

  //button login
  const onSubmitLogin = () => {
    const isValid = validateAll()
    if (!isValid) return
  }

  return (
    <div className='shadow flex'>
      <div className="login-background">
        <div className='login-container content'>
          <div className='login-content row'>
            <div className='col-12 form-group login-input'>
              <input
                type="text"
                name='username'
                placeholder='Email address or phone number'
                autoComplete='email'
                onChange={onChangeUsername}
                required
                className='form-control'>
              </input>
              <p className='text-red-400 text-xs italic'>{validationMsg.username}</p>
            </div>
            <div className='col-12 form-group login-input'>
              <input
                type={passwordType}
                name='password'
                placeholder='Password'
                autoComplete='current-password'
                onChange={onChangePassword}
                value={password}
                required
                className='lg-input form-control'>
              </input>
              <button className="btn-toogle"
                onClick={togglePassword}>{passwordType === "password" ?
                  <AiOutlineEyeInvisible className="bi bi-eye-slash"></AiOutlineEyeInvisible>
                  : <AiOutlineEye className="bi bi-eye"></AiOutlineEye>}</button>
              <p className='text-xs italic'>{validationMsg.password}</p>
            </div>
            <div className='col-12'>
              <button
                type='button'
                className='btn-login text'
                onClick={onSubmitLogin}>Log in
              </button>
            </div>

            <div className='col-12'>
              <a className='content-link' href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Forgotten password?</a>
            </div>

            <div className="contentCurve"></div>

            <div className='col-12'>
              <Popup
                trigger={<button className='text btn-account' >Create new account</button>}
                modal
                nested
              >
                {close => (
                  <div className="">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="">
                     <Form/>
                    </div>
                    <div className="">
                      <Popup>
                      </Popup>

                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;