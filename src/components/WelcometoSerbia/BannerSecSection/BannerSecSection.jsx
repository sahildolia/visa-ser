import React from 'react'
import './BannerSecSection.css'
import { Link, Links } from 'react-router-dom'
function BannerSecSection() {
  return (
    <>
<div className='e-application-landing-page'>
        <section className="app-page-section main-section">
          <div className="app-container d-flex" fxlayout="row" fxlayoutalign="start start">
            <div className="main-section__title" fxflex="none">
              <h3>All eServices in one place</h3>
            </div>
            <div className="main-section__content" fxlayout="column" fxflex="">
              <div className="main-section__content__item" fxlayout="column">
                <h4>For foreign citizens</h4>
                <p>
                  Apply for visa C, visa D or temporary residence approval in
                  Republic of Serbia.
                </p>
                <p>List of available services will be presented after you login.</p>
                <div
                  className="main-section__content__item__actions d-flex"
                  fxlayout="row"
                  fxlayoutalign="start center"
                >
                  <Link to="/elect-id">
                    <button className="app-btn app-btn-dark">Login</button>
                  </Link>
                  <Link
                    style={{ marginLeft: "8%" }}
                    className="app-hyperlink align-self-center"
                    to="/"
                  >
                    Register an account
                  </Link>
                </div>
              </div>

              <div className="main-section__content__item" fxlayout="column">
                <h4>For companies in Republic of Serbia</h4>
                <p>Apply if you wish to employe one or more foreign citizens.</p>
                <p>
                  eServices available for companies are group visa D and group
                  temporary residence,
                </p>
                <p>and unified permit for temporary residence and work.</p>
                <p>To access eServices register on eGovernment Portal.</p>
                <div
                  className="main-section__content__item__actions"
                  fxlayout="row"
                  fxlayoutalign="start center"
                >
                  <a href="https://euprava.gov.rs/">
                    <button className="app-btn app-btn-primary">
                      Open eGovernment Portal
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
</div>
    </>
  )
}

export default BannerSecSection