import React from 'react'
import './BannerThirdSection.css'
function BannerThirdSection() {
  return (
    <>
<div className='e-application-landing-page'>
<section className="app-page-section banner-section">
          <div className="app-container" fxlayout="row" fxlayoutalign="end center">
            {/* <div
              className="banner-section__content"
              fxlayout="column"
              fxflex="50"
              fxflex-xs="100"
            >
              <h4>Did you find the service you are looking for?</h4>
              <p>
                Learn more about the visa regime. Find more information,
                instructions and documentation needed on Entry &amp; Stay
                Regulations.
              </p>
              <a href="https://welcometoserbia.gov.rs">
                <button className="app-btn app-btn-dark">
                  Entry &amp; Stay Regulations
                </button>
              </a>
            </div> */}
<div className="col-12 col-md-6 banner-section__content">
  <h4>Did you find the service you are looking for?</h4>
  <p>
    Learn more about the visa regime. Find more information,
    instructions and documentation needed on Entry & Stay Regulations.
  </p>
  <a href="https://welcometoserbia.gov.rs">
    <button className="app-btn app-btn-dark">
      Entry & Stay Regulations
    </button>
  </a>
</div>


          </div>
        </section>

        {/* <section className="app-page-section support-section">
          <div className="app-container" fxlayout="row" fxlayoutalign="start center">
            <div className="support-section__main">
              <h4>Support</h4>
              <i className="fa-thin fa-envelope-open-text"></i>
            </div>
            <div className="support-section__content">
              <p className="fw-semi-bold">
                If you have additional questions about the visa regime, permits
                and electronic services, please contact us:
              </p>
              <a href="mailto:office@ite.gov.rs">
                <button className="app-btn app-btn-dark">Contact</button>
              </a>
            </div>
          </div>
        </section> */}
        <section className="app-page-section support-section py-5">
  <div className="container d-flex align-items-center">
    <div className="support-section__main d-flex align-items-center me-4">
      <h4 className="me-2 mb-0">Support</h4>
      <i className="fa-regular fa-envelope-open-text fa-2x"></i>
    </div>

    <div className="support-section__content">
      <p className="fw-semibold mb-3">
        If you have additional questions about the visa regime, permits
        and electronic services, please contact us:
      </p>
      <a href="mailto:office@ite.gov.rs">
        <button className="btn btn-dark">Contact</button>
      </a>
    </div>
  </div>
</section>

</div>
    </>
  )
}

export default BannerThirdSection