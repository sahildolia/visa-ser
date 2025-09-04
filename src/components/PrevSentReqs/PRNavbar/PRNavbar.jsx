// PRNavbar.jsx
import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import "./PRNavbar.css"

function PRNavbar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Get username from localStorage when component mounts
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <header style={{ zIndex: 20 }}>
      <div className="app-header e-application-header">
        <div className="app-header__main">
          <div className="app-container d-flex justify-content-between align-items-start">
            
            {/* Logo */}
            <div className="app-header__main__logo-holder d-flex align-items-center">
              <div className="logo-flag">
                <Image src="/src/assets/flag.svg" alt="flag"/>
              </div>
              <div className="logo ms-2">
                <Image src="/src/assets/logo.svg" alt="logo"/>
              </div>
            </div>

            {/* Actions */}
            <div className="app-header__main__actions-holder d-flex align-items-center">
              <div className="main-link-button white-button">
                {/* Display dynamic username */}
                <a href="/home" className='text-uppercase'>
                  {username || 'Guest User'}
                </a> 
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="app-header__menu">
          <div className="app-container">
            <nav className="d-flex justify-content-between" style={{width: "82%", paddingLeft: "29%"}}>
              {/* <ul className="d-flex align-items-center"></ul> */}

              <div className="app-header__menu__buttons d-flex align-items-center"></div>
              <div className="d-flex justify-content-between w-100">
                <div className="app-header__menu__language d-flex align-items-center">
                  <a href="/Home/SetLanguage?culture=sr-Cyrl-RS&returnUrl=/">Home Page</a> &nbsp;
                  <a href="/Home/SetLanguage?culture=sr-Latn-RS&returnUrl=/">Visa C</a> &nbsp;
                  <a href="/Home/SetLanguage?culture=en-US&returnUrl=/">Visa D</a> &nbsp;
                  <a href="/Home/SetLanguage?culture=en-US&returnUrl=/">My requests</a>
                </div>
                <div className="app-header__menu__language d-flex align-items-center">
                  <a href="/Home/SetLanguage?culture=sr-Cyrl-RS&returnUrl=/">ЋИР</a>
                  <a href="/Home/SetLanguage?culture=sr-Latn-RS&returnUrl=/">LAT</a>
                  <a href="/Home/SetLanguage?culture=en-US&returnUrl=/">ENG</a>
                  <i className="fa-solid fa-globe ms-2"></i>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PRNavbar