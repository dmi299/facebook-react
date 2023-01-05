// import logo from './logo.svg';
import './Content.css';
import Footer from './Footer';

function Content() {
  //JSX
  return (
    <div>
      <div className="content-header">
        <div className='content-fb'>
          <div className='flex' style={{ paddingRight: "45px" }}>
            <div className='title-img'> <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="content-logo" alt="logo" /></div>
            <div>
              <h2 className="title-fb">
                Facebook helps you connect and share with the people in your life.
              </h2>
            </div>

          </div>

          <div className='shadow flex'>
            <div className="login-background">
              <div className='login-container content'>
                <div className='login-content row'>
                  <div className='col-12 form-group login-input'>
                    <input type="text" placeholder='Email address or phone number' className='form-control'></input>
                  </div>
                  <div className='col-12 form-group login-input'>
                    <input type="text" placeholder='Password' className='form-control'></input>
                  </div>
                  <div className='col-12'><button className='btn-login text'>Log in</button></div>

                  <div className='col-12'>
                    <a className='content-link' href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Forgotten password?</a>
                  </div>

                  <div className="contentCurve"></div>
                  <div className='col-12'>
                    <button className='text btn-account'>Create new account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Content;
