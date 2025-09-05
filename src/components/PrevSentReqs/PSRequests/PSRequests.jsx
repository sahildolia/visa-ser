// PSRequests.jsx
import React from 'react'
import PRNavbar from '../PRNavbar/PRNavbar'
import './PSRequests.css'
import WelcomeUserPr from '../WelcomeUserPr/WelcomeUserPr';

function PSRequests() {
  // Function to open PDF in new tab
  const openPdfInNewTab = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* <PRNavbar/> */}
      {/* <WelcomeUserPr/> */}

      <section className="breadcrumbs">
        <div className="container">
          <h1 className='text-center'>List of previously sent requests</h1>
        </div>
      </section>

      <section className="requests-section">
        <div className="container">
          <div className="requests-container">
            {/* Table Header */}
            <div className="request-row header-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Request <br /> number</span>
                  <span className="rc-bold">291296</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">351204</span>
                </div>
              </div>

               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Foreign <br /> Citizen's <br />Registration <br /> number</span>
                  <span className="rc-bold">/</span>
                </div>
          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">First and last <br /> name</span>
                  <span className="rc-bold"> BABU MD</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">The <br /> representative <br /> office where <br /> the request <br /> was <br /> submitted</span>
                  <span className="rc-bold">NEW DELHI</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                     <div className="request-cell">
                <span className="status-badge approved me-2">Request approved</span>
              </div>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Comment</span>
                  <span className="rc-bold">/</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Attachment</span>
                  <span className="rc-bold">/</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa D</span>
                </div>          
              </div>
               <div className="request-cell request-details" style={{alignSelf: "center"}}>
                <div className="detail-item">
                  <span className="gray"></span>
                  <span className="rc-bold">
                                  <div className="request-cell">
                <button 
                  className="open-request-btn text-light"
                  onClick={() => openPdfInNewTab("/documents/sample-1.pdf")}
                >
                  Open Request
                </button>
              </div>
                  </span>
                </div>          
              </div>
            </div>

 

            {/* Second Row */}
            <div className="request-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Request <br /> number</span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322096</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Foreign <br /> Citizen's<br /> Registration <br /> number</span>
                  <span className="rc-bold">/</span>
                </div>
          
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">First and last <br /> name</span>
                  <span className="rc-bold"> RD SHARMA</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">The <br /> representative <br /> office where <br /> the request <br /> was <br /> submitted</span>
                  <span className="rc-bold">NEW DELHI</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                     <div className="request-cell">
                <span className="status-badge approved me-2">Request approved</span>
              </div>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Comment</span>
                  <span className="rc-bold">/</span>
                </div>          
              </div>
              {/* <div className="request-cell rc-bold">
                <a href="#" className="attachment-link">
                  <i className="fas fa-paperclip"></i> file.pdf
                </a>
              </div> */}
                             <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Attachment</span>
                  <a href="#" className="attachment-link">
                  <i className="fas fa-paperclip"></i> file.pdf
                </a>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa D</span>
                </div>          
              </div>
               <div className="request-cell request-details" style={{alignSelf: "center"}}>
                <div className="detail-item" style={{alignSelf: "center"}}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                                  <div className="request-cell">
                <button 
                  className="open-request-btn text-light"
                  onClick={() => openPdfInNewTab("/documents/sample-1.pdf")}
                >
                  Open Request
                </button>
              </div>
                  </span>
                </div>          
              </div>
            </div>
            {/* tHIRD rOW*/}

            <div className="request-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Request <br /> number</span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322096</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Foreign <br /> Citizen's<br /> Registration <br /> number</span>
                  <span className="rc-bold">/</span>
                </div>
          
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">First and last <br /> name</span>
                  <span className="rc-bold"> TOMMY</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">The <br /> representative <br /> office where <br /> the request <br /> was <br /> submitted</span>
                  <span className="rc-bold">SAN ANDREAS</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                     <div className="request-cell">
                <span className="status-badge approved me-2">Request approved</span>
              </div>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Comment</span>
                  <span className="rc-bold">/</span>
                </div>          
              </div>
              {/* <div className="request-cell rc-bold">
                <a href="#" className="attachment-link">
                  <i className="fas fa-paperclip"></i> file.pdf
                </a>
              </div> */}
                             <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Attachment</span>
                  <a href="#" className="attachment-link">
                  <i className="fas fa-paperclip"></i> file.pdf
                </a>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa D</span>
                </div>          
              </div>
               <div className="request-cell request-details" style={{alignSelf: "center"}}>
                <div className="detail-item" style={{alignSelf: "center"}}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                                  <div className="request-cell">
                <button 
                  className="open-request-btn text-light"
                  onClick={() => openPdfInNewTab("/documents/sample-1.pdf")}
                >
                  Open Request
                </button>
              </div>
                  </span>
                </div>          
              </div>
            </div>

            {/* Fourth Row */}
            <div className="request-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Request <br /> number</span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322096</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Foreign <br /> Citizen's<br /> Registration <br /> number</span>
                  <span className="rc-bold">/</span>
                </div>
          
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">First and last <br /> name</span>
                  <span className="rc-bold"> BABU RAO</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">The <br /> representative <br /> office where <br /> the request <br /> was <br /> submitted</span>
                  <span className="rc-bold">Mumbai</span>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                     <div className="request-cell">
                <span className="status-badge approved me-2">Request approved</span>
              </div>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Comment</span>
                  <span className="rc-bold">/</span>
                </div>          
              </div>
              {/* <div className="request-cell rc-bold">
                <a href="#" className="attachment-link">
                  <i className="fas fa-paperclip"></i> file.pdf
                </a>
              </div> */}
                             <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Attachment</span>
                  <a href="#" className="attachment-link">
                 <span className="rc-bold">/</span>
                </a>
                </div>          
              </div>
               <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa C</span>
                </div>          
              </div>
               <div className="request-cell request-details" style={{alignSelf: "center"}}>
                <div className="detail-item" style={{alignSelf: "center"}}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                                  <div className="request-cell">
                <button 
                  className="open-request-btn text-light"
                  onClick={() => openPdfInNewTab("/documents/sample-1.pdf")}
                >
                  Open Request
                </button>
              </div>
                  </span>
                </div>          
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PSRequests