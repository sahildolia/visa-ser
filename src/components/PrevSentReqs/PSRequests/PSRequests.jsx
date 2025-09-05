// PSRequests.jsx
import React from 'react'
import PRNavbar from '../PRNavbar/PRNavbar'
import './PSRequests.css'
import WelcomeUserPr from '../WelcomeUserPr/WelcomeUserPr';
function PSRequests() {
  // Sample data for demonstration
  const requests = [
    {
      requestNumber: '291296',
      visaRequestId: '351204',
      registrationNumber: '/',
      name: 'BABU MD',
      office: 'NEW DELHI',
      status: 'Request approved',
      comment: '/',
      attachment: '/',
      visa: 'Visa D',
      // Add PDF file path for each request
      pdfFile: "/documents/sample-1.pdf"
    },
    {
      requestNumber: '285642',
      visaRequestId: '322096',
      registrationNumber: '/',
      name: 'MANOJ RAJIV SHUKLA',
      office: 'LONDON',
      status: 'Processing',
      comment: 'Additional documents required',
      attachment: 'document.pdf',
      visa: 'Visa D',
      pdfFile: "/documents/sample-1.pdf"
    }
  ];

  // Function to open PDF in new tab
  const openPdfInNewTab = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* <PRNavbar/>
      <WelcomeUserPr/> */}

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
              <div className="request-cell" style={{textAlign: "justify"}}></div>
              {/* <div className="request-cell">Visa request ID</div> */}
              <div className="request-cell">Foreign Citizen's Reg. No</div>
              <div className="request-cell">First and last name</div>
              <div className="request-cell">Representative office</div>
              <div className="request-cell">Status</div>
              <div className="request-cell">Comment</div>
              <div className="request-cell">Attachment</div>
              <div className="request-cell"></div>
              <div className="request-cell"></div>
            </div>

            {/* Table Rows */}
            {requests.map((request, index) => (
              <div className="request-row" key={index}>
                <div className="request-cell rc-bold d-block position-relative" data-label="Request number">
                  <div className="request-cell gray" style={{textAlign: "justify"}}>Request number</div>
                  {request.requestNumber} <br /> 
                   <div className="request-cell gray">Visa request ID</div>
                <div className="request-cell rc-bold" data-label="Visa request ID">
                  {request.visaRequestId}
                </div> <br /><br />
                </div>
                <hr />
                <div className="request-cell rc-bold justify-content-center" data-label="Foreign Citizen's Reg. No" style={{alignSelf: "flex-start"}}>
                  {request.registrationNumber}
                </div>
                <div className="request-cell rc-bold" data-label="First and last name" style={{alignSelf: "flex-start"}}>
                  {request.name}
                </div>
                <div className="request-cell rc-bold justify-content-center" data-label="Representative office" style={{alignSelf: "flex-start"}}>
                  {request.office}
                </div>
                <div className="request-cell rc-bold" data-label="Status" style={{alignSelf: "flex-start"}}>
                  <span className={`status-badge ${request.status.toLowerCase().includes('approved') ? 'approved' : 'approved'}`}>
                    {request.status}
                  </span>
                </div>
                <div className="request-cell rc-bold justify-content-center" data-label="Comment" style={{alignSelf: "flex-start"}}>
                  {request.comment}
                </div>
                <div className="request-cell rc-bold justify-content-center" data-label="Attachment" style={{alignSelf: "flex-start"}}>
                  {request.attachment !== '/' ? (
                    <a href="#" className="attachment-link">
                      <i className="fas fa-paperclip"></i> {request.attachment}
                    </a>
                  ) : (
                    request.attachment
                  )}
                </div>
                <div className="request-cell rc-bold d-block pr-36" data-label="Visa">
                   <div className="request-cell gray">Visa</div>
                  {request.visa}
                </div>
                <div className="request-cell rc-bold" data-label="Action" style={{alignSelf: "flex-start"}}>
                  <button 
                    className="open-request-btn text-light"
                    onClick={() => openPdfInNewTab(request.pdfFile)}
                  >
                    Open Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PSRequests