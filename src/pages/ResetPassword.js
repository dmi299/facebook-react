import React from 'react';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'
import './ResetPassword.css';


function ResetPassword() {

  return (
    <div>
      <div className="content-header-re">
        <div className='shadow login-background'>
          <div className='re-container content'>
            <div className='login-content row'>
              <div className='re-header'>
                Reset Your Password
              </div>
            <div className="contentCurve"></div>
              <div className='re-title'>Please enter your email address or mobile number to send confirmation code.</div>
              <div className='col-12 form-group login-input'>
                <input
                  type="text"
                  placeholder='Email address or mobile number'
                  required
                  autoComplete='email'
                  className='re-input form-control'>
                </input>
              </div>
              <div className="contentCurve"></div>
              <div className='row'>
              <div className='col-12'>
                <button
                  type='button'
                  className='btn-send text'
                ><Link className= 're-linksend' to="/confirmcode">Send</Link>
                </button>
                <button
                  type='button'
                  className='btn-cancel text'
                ><Link className= 're-link' to="/">Cancel</Link>
                </button> 
              </div>
             
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='footer-re'>
        <Footer />
      </div>
    </div>



  );
}

export default ResetPassword;
