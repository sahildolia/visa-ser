import React from 'react'
import './EidHeader.css'
function EidHeader() {
  return (
    <>
    <header className="header">
  <div className="head-sections">
    <div className="top-bar"></div>
    <div className="mid-sep"></div>
    <div className="bot-bar"></div>
  </div>

  <div className="container">
    <div className="head-tabs"></div>

    <h1>
      <a
        className="registrationPortalHome"
        title="Electronic identification portal"
        href="https://eid.gov.rs/"
      >
        eID.gov.rs
        <span className="naslov">Electronic identification portal</span>
      </a>
    </h1>

    <a href="/" className="mobile-handle"></a>

    <div className="nav">
      <nav>
        <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
          <li>
            <a title="eID" href="https://eid.gov.rs/en-US/eid">
              eID
            </a>
          </li>
          <li>
            <a
              title="Signature in the cloud"
              href="https://cloud.eid.gov.rs/"
            >
              Signature in the cloud
            </a>
          </li>
          <li>
            <a title="Help" href="https://eid.gov.rs/en-US/help">
              Help
            </a>
          </li>
          <li>
            <a title="Contact" href="https://eid.gov.rs/en-US/contact">
              Contact
            </a>
          </li>
          <li>
            <a title="EGovernment portal" href="https://euprava.gov.rs/">
              EGovernment portal
            </a>
          </li>
          <li style={{listStyle: "none"}} className='align-self-center'>
            {/* Back button handler in React */}
            <button
              className="btn p-0"
              type="button"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </li>
        </ul>
      </nav>

      {/* Language Switcher */}
      <div className="lang">
        <div className="ll-cont">
          <div className="ll-active">
            <a href="/" className='text-light'>Language</a>
          </div>
          {/* <ul id="menuLanguage" className="list-unstyled">
            <li id="1">
              <a href="/">Ћирилица</a>
            </li>
            <li id="2">
              <a href="/">Latinica</a>
            </li>
            <li id="4">
              <a href="/">English</a>
            </li>
          </ul> */}
        </div>
      </div>

      {/* Settings */}
      {/* <div className="settings">
        <div className="settings-box">
          <div className="zoom-note">
            Use
            <br />
            CTRL+ to increase
            <br />
            CTRL- to decrease
          </div>

          <div className="font">
            <h2>Font size</h2>
            <div className="title">Select letter display style</div>
            <ul className="list-unstyled d-flex gap-2">
              <li>
                <a href="/" role="button">
                  Small size
                </a>
              </li>
              <li className="active" role="button">
                <a href="/">Normal size</a>
              </li>
              <li>
                <a href="/" role="button">
                  Large size
                </a>
              </li>
            </ul>
          </div>

          <div className="theme">
            <div className="title">Choose a theme</div>
            <ul className="list-unstyled d-flex gap-2">
              <li className="default active">
                <a href="/" role="button">
                  Basic theme
                </a>
              </li>
              <li className="bw">
                <a href="/" role="button">
                  Black/white theme
                </a>
              </li>
              <li className="inv">
                <a href="/" role="button">
                  Reverse theme
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</header>
    </>
  )
}

export default EidHeader