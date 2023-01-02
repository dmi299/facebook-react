// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

function App() {
  //JSX
  return (
    <div className="">
      <div className="App-header">
        <div>
          <div className='flex' style={{ paddingRight: "45px" }}>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="App-logo" alt="logo" />

            <h2 className="content_fb">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className='shadow flex'>
            <div className="login-background">
              <div className='login-container App'>
                <div className='login-content row'>
                  <div className='col-12 form-group login-input'>
                    <input type="text" placeholder='Email address or phone number' className='form-control'></input>
                  </div>
                  <div className='col-12 form-group login-input'>
                    <input type="text" placeholder='Password' className='form-control'></input>
                  </div>
                  <div className='col-12'><button className='btn-login text'>Log in</button></div>

                  <div className='col-12'>
                    <a className='App-link' href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Forgotten password?</a>
                  </div>

                  <div className="contentCurve"></div>
                  <div className='col-12'>
                    <button className='text btn-account'>Create new account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <h6>Create a Page</h6><p>for a celebrity brand or business.</p>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
