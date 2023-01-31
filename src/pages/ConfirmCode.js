import React from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'
import './ResetPassword.css';
const ConfirmCode = () => {
    return (
        <div>
            <div className="content-header-re">
                <div className='shadow login-background'>
                    <div className='re-container content'>
                        <div className='login-content row'>
                            <div className='re-header'>
                                Enter security code
                            </div>
                            <div className="contentCurve"></div>
                            <div className='re-title'>Please check your emails or mobile number for a message with your code. Your code is 6 numbers long.</div>

                            <div className='col-2 form-group login-input'>
                                <input

                                    required
                                    autoComplete='email'
                                    className='re-input form-control'>
                                </input>
                            </div>
                            <div className='col-2 form-group login-input'>
                                <input

                                    required
                                    autoComplete='email'
                                    className='re-input form-control'>
                                </input>
                            </div>
                            <div className='col-2 form-group login-input'>
                                <input


                                    required
                                    autoComplete='email'
                                    className='re-input form-control'>
                                </input>
                            </div>
                            <div className='col-2 form-group login-input'>
                                <input


                                    required
                                    autoComplete='email'
                                    className='re-input form-control'>
                                </input>
                            </div>
                            <div className='col-2 form-group login-input'>
                                <input


                                    required
                                    autoComplete='email'
                                    className='re-input form-control'>
                                </input>
                            </div>
                            <div className='col-2 form-group login-input'>
                                <input
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
                                    ><Link className='re-linksend' to="/confirmcode">Confirm</Link>
                                    </button>
                                    <button
                                        type='button'
                                        className='btn-cancel text'
                                    ><Link className='re-link' to="/resetpassword">Cancel</Link>
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
    )
}

export default ConfirmCode
