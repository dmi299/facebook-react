import React from 'react';
import './Content.css';
import Footer from './Footer';
import Login from './Login';


function Content() {
  const content = {
    imgSrc: 'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg',
    title: 'Facebook helps you connect and share with the people in your life.'
  };
  //JSX
  return (
    <div>
      <div className="content-header">
        <div className='content-fb'>
          <div className='flex' style={{ paddingRight: "45px" }}>
            <div className='title-img'> <img src={content.imgSrc} className="content-logo" alt="logo" /></div>
            <div>
              <h2 className="title-fb">
                {content.title}
              </h2>
            </div>

          </div>
          
         <Login/>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Content;
