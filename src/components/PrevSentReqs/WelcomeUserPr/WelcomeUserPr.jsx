import React from "react";
import './WelcomeUserPr.css'
function WelcomeUserPr() {
  return (
    <>
      <main className="app-page e-application-landing-page">
        <section className="app-page-section header-section">
          <div className="app-container" fxlayout="column" fxlayoutalign="center center">
            <h1>Welcome to eServices</h1>
            <p className="fw-semi-bold">
              Here you can use electronic services of diplomatic and consular
              offices and other competent authorities of the Republic of Serbia.
            </p>
          </div>
        </section>
      </main>


    </>
  );
}

export default WelcomeUserPr;
