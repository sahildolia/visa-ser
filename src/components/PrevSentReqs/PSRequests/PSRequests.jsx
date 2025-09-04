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
      registrationNumber: 'RC-784512',
      name: 'BABU MD',
      office: 'NEW DELHI',
      status: 'Request approved',
      comment: '/',
      attachment: '/',
      visa: 'Visa D'
    },
    {
      requestNumber: '285642',
      visaRequestId: '322096',
      registrationNumber: 'RC-893467',
      name: 'JOHN SMITH',
      office: 'LONDON',
      status: 'Processing',
      comment: 'Additional documents required',
      attachment: 'document.pdf',
      visa: 'Visa C'
    }
  ];

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
              <div className="request-cell" style={{textAlign: "justify"}}>Request number</div>
              <div className="request-cell">Visa request ID</div>
              <div className="request-cell">Foreign Citizen's Reg. No</div>
              <div className="request-cell">First and last name</div>
              <div className="request-cell">Representative office</div>
              <div className="request-cell">Status</div>
              <div className="request-cell">Comment</div>
              <div className="request-cell">Attachment</div>
              <div className="request-cell">Visa</div>
              <div className="request-cell">Action</div>
            </div>

            {/* Table Rows */}
            {requests.map((request, index) => (
              <div className="request-row" key={index}>
                <div className="request-cell" data-label="Request number">
                  {request.requestNumber}
                </div>
                <div className="request-cell" data-label="Visa request ID">
                  {request.visaRequestId}
                </div>
                <div className="request-cell" data-label="Foreign Citizen's Reg. No">
                  {request.registrationNumber}
                </div>
                <div className="request-cell" data-label="First and last name">
                  {request.name}
                </div>
                <div className="request-cell" data-label="Representative office">
                  {request.office}
                </div>
                <div className="request-cell" data-label="Status">
                  <span className={`status-badge ${request.status.toLowerCase().includes('approved') ? 'approved' : 'approved'}`}>
                    {request.status}
                  </span>
                </div>
                <div className="request-cell" data-label="Comment">
                  {request.comment}
                </div>
                <div className="request-cell" data-label="Attachment">
                  {request.attachment !== '/' ? (
                    <a href="#" className="attachment-link">
                      <i className="fas fa-paperclip"></i> {request.attachment}
                    </a>
                  ) : (
                    request.attachment
                  )}
                </div>
                <div className="request-cell" data-label="Visa">
                  {request.visa}
                </div>
                <div className="request-cell" data-label="Action">
                  <button className="open-request-btn text-light">
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