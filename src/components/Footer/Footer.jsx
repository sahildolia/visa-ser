import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/859678d5a14e88271c1a187a5a479caa.png';


function Footer() {
  return (
    <>

<footer className="e-application-footer">
  <div className="e-application-footer__main">
    <div className="app-container d-flex justify-content-end align-items-center">
      <div className="e-application-footer__main__back-to-top d-flex align-items-center">
        <span>Top of the page</span>
        <i className="fa-solid fa-arrow-up ms-2"></i>
      </div>
    </div>
  </div>

  <div className="e-application-footer__content">
    <div className="app-container d-flex align-items-center">
      <div className="e-application-footer__content__logo me-3">
        <img
          src={footerLogo}
          alt="footer_logo"
        />
      </div>

      <div className="e-application-footer__content__content">
        <p className="title mb-1">welcometoserbia.gov.rs</p>
        <p className="subtitle mb-2 ff-M">Welcome to Serbia</p>
        <p className="text mb-2">
          Web presentation is licensed according to license conditions&nbsp;
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/3.0/rs/deed.en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons&nbsp;
          </a>
          Authorship-Non-commercial-Without processing 3.0 Serbia. Web project{" "}
          <a href="https://www.ite.gov.rs" target="_blank" rel="noopener noreferrer">
            ite.gov.rs
          </a>
        </p>
        <a
          href="/Documents/Услови коришћења и Политика приватности - Јединствена дозвола за рад и боравак - eng.docx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy and Terms of Use
        </a>
      </div>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer