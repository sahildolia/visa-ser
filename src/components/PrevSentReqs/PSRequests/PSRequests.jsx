import { useEffect, useState } from "react";
import "./PSRequests.css";

function PSRequests() {

  const [status1, setStatus1] = useState(() => {
    const savedStatus = localStorage.getItem("status_291296");
    return savedStatus || "Request approved";
  });
  const [status2, setStatus2] = useState(() => {
    const savedStatus = localStorage.getItem("status_2912962");
    return savedStatus || "Request approved";
  });
  const [status3, setStatus3] = useState(() => {
    const savedStatus = localStorage.getItem("status_2912963");
    return savedStatus || "Request approved";
  });
  const [status4, setStatus4] = useState(() => {
    const savedStatus = localStorage.getItem("status_2912964");
    return savedStatus || "Request approved";
  });
  const [status5, setStatus5] = useState(() => {
    const savedStatus = localStorage.getItem("status_2912965");
    return savedStatus || "Request approved";
  });
  const [status6, setStatus6] = useState(() => {
    const savedStatus = localStorage.getItem("status_2912966");
    return savedStatus || "Request approved";
  });
  const [status7, setStatus7] = useState(() => {
    const savedStatus = localStorage.getItem("status_2912967");
    return savedStatus || "Request approved";
  });
  const [status8, setStatus8] = useState(() => {
    const savedStatus = localStorage.getItem("status_2912968");
    return savedStatus || "Request approved";
  });

  // Save status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("status_291296", status1);
    localStorage.setItem("status_2912962", status2);
    localStorage.setItem("status_2912968", status3);
    localStorage.setItem("status_2912963", status4);
    localStorage.setItem("status_2912964", status5);
    localStorage.setItem("status_2912965", status6);
    localStorage.setItem("status_2912966", status7);
    localStorage.setItem("status_2912967", status8);
  }, [status1, status2, status3, status4, status5, status6, status7, status8]);

  // Toggle functions for each row
  const toggleStatus1 = () => {
    setStatus1(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  const toggleStatus2 = () => {
    setStatus2(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  const toggleStatus3 = () => {
    setStatus3(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  const toggleStatus4 = () => {
    setStatus4(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  const toggleStatus5 = () => {
    setStatus5(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  const toggleStatus6 = () => {
    setStatus6(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  const toggleStatus7 = () => {
    setStatus7(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  const toggleStatus8 = () => {
    setStatus8(prevStatus => 
      prevStatus === "Request approved" ? "Request processing" : "Request approved"
    );
  };
  // Function to open PDF in new tab
  const openPdfInNewTab = (pdfPath) => {
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  return (
    <>

      <section className="breadcrumbs">
        <div className="container">
          <h1 className="text-center">List of previously sent requests</h1>
        </div>
      </section>

      <section className="requests-section">
        <div className="container">
          <div className="requests-container">
            {/* Table Header */}
            <div className="request-row header-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">291296</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">351204</span>
                </div>
              </div>

              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's <br />
                    Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> BABU MD</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">NEW DELHI</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
                    <span className={`status-badge ${status1==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus1}>
                     {status1}
                    </span>
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
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item">
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
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
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322096</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's
                    <br /> Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> RD SHARMA</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">NEW DELHI</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
 <span className={`status-badge ${status2==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus2}>
                     {status2}
                    </span>
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
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item" style={{ alignSelf: "center" }}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
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
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322096</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's
                    <br /> Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> TOMMY</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">SAN ANDREAS</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
 <span className={`status-badge ${status3==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus3}>
                     {status3}
                    </span>
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
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item" style={{ alignSelf: "center" }}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
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
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322096</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's
                    <br /> Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> U. TAKER</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">Mumbai</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
 <span className={`status-badge ${status4==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus4}>
                     {status4}
                    </span>
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
                  <a href="#" className="attachment-link">
                    <i className="fas fa-paperclip"></i> file.pdf
                  </a>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa C</span>
                </div>
              </div>
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item" style={{ alignSelf: "center" }}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
                      >
                        Open Request
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            {/* Fifth Row */}
            <div className="request-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">5454545</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's
                    <br /> Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> Shamsher</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">Mumbai</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
 <span className={`status-badge ${status5==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus5}>
                     {status5}
                    </span>
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
                  <a href="#" className="attachment-link">
                    <i className="fas fa-paperclip"></i> file.pdf
                  </a>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa C</span>
                </div>
              </div>
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item" style={{ alignSelf: "center" }}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
                      >
                        Open Request
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            {/* Sixth Row */}
            <div className="request-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322345</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's
                    <br /> Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> ROMAN R.</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">Mumbai</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
 <span className={`status-badge ${status6==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus6}>
                     {status6}
                    </span>
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
                  <a href="#" className="attachment-link">
                    <i className="fas fa-paperclip"></i> file.pdf
                  </a>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa C</span>
                </div>
              </div>
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item" style={{ alignSelf: "center" }}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
                      >
                        Open Request
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            {/* Seventh Row */}
            <div className="request-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">285642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">322096</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's
                    <br /> Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> BROC LESNAR</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">Delhi</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
 <span className={`status-badge ${status7==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus7}>
                     {status7}
                    </span>
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
                  <a href="#" className="attachment-link">
                    <i className="fas fa-paperclip"></i> file.pdf
                  </a>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa C</span>
                </div>
              </div>
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item" style={{ alignSelf: "center" }}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
                      >
                        Open Request
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            {/* eighth Row */}
            <div className="request-row">
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Request <br /> number
                  </span>
                  <span className="rc-bold">545642</span>
                </div>
                <div className="detail-item">
                  <span className="gray">Visa request ID</span>
                  <span className="rc-bold">324596</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    Foreign <br /> Citizen's
                    <br /> Registration <br /> number
                  </span>
                  <span className="rc-bold">/</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    First and last <br /> name
                  </span>
                  <span className="rc-bold"> Kasper</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">
                    The <br /> representative <br /> office where <br /> the
                    request <br /> was <br /> submitted
                  </span>
                  <span className="rc-bold">Mumbai</span>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Status</span>
                  <div className="request-cell">
 <span className={`status-badge ${status8==="Request approved" ? "approved" : ""} me-2`} onClick={toggleStatus8}>
                     {status8}
                    </span>
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
                  <a href="#" className="attachment-link">
                    <i className="fas fa-paperclip"></i> file.pdf
                  </a>
                </div>
              </div>
              <div className="request-cell request-details">
                <div className="detail-item">
                  <span className="gray">Visa</span>
                  <span className="rc-bold"> Visa C</span>
                </div>
              </div>
              <div
                className="request-cell request-details"
                style={{ alignSelf: "center" }}
              >
                <div className="detail-item" style={{ alignSelf: "center" }}>
                  <span className="gray"></span>
                  <span className="rc-bold">
                    <div className="request-cell">
                      <button
                        className="open-request-btn text-light"
                        onClick={() =>
                          openPdfInNewTab("/documents/sample-1.pdf")
                        }
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
  );
}

export default PSRequests;
