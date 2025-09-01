// EIDforms.jsx
import { useState } from "react";
import './eIDforms.css'

function EIDforms({ onHandleNoDomain }) {
  const [activeTab, setActiveTab] = useState("home");
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
  const [sessionDataKey] = useState("7179dda9-3d17-4fdc-a76b-f5d439d7b929");
  const [usernameCid, setUsernameCid] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function signInUP(e) {
    e.preventDefault();
    if (typeof onHandleNoDomain === "function") {
      onHandleNoDomain("LOCAL", "up", username1, password1, "");
    } else {
      console.log("signInUP", { username1, password1, sessionDataKey });
      alert("signInUP: check console (or pass onHandleNoDomain prop)");
    }
  }

  function signInMFASC(e) {
    e.preventDefault();
    if (typeof onHandleNoDomain === "function") {
      onHandleNoDomain("LOCAL", "mfasc", "", "", "");
    } else {
      console.log("signInMFASC");
      alert("signInMFASC: check console");
    }
  }

  function signInCID(e) {
    e.preventDefault();
    if (typeof onHandleNoDomain === "function") {
      onHandleNoDomain("LOCAL", "mfacid", "", "", usernameCid);
    } else {
      console.log("signInCID", { usernameCid });
      alert("signInCID: check console (or pass onHandleNoDomain prop)");
    }
  }

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <h1>Login</h1>
        </div>
      </section>
      <section className="section-auth gen-form">
        <div className="container">
          <div className="section-auth-style">
            <ul className="nav nav-tabs mb-4" role="tablist">
              <li className={`nav-item ${activeTab === "home" ? "active" : ""}`} role="presentation">
                <button
                  className="nav-link up-style"
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab("home")}
                  aria-selected={activeTab === "home"}
                >
                  <div className="d-flex align-items-center">
                    <div className="text-center w-md-17">
                      <div className={`icon-user ${activeTab === "home" ? "active" : ""}`} />
                    </div>
                    <div className="w-md-83">
                      <span className="up-span up-span-inline">Username and password</span>
                    </div>
                  </div>
                </button>
              </li>

              <li className={`nav-item ${activeTab === "menu1" ? "active" : ""}`} role="presentation">
                <button
                  className="nav-link up-style"
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab("menu1")}
                  aria-selected={activeTab === "menu1"}
                >
                  <div className="d-flex align-items-center">
                    <div className="text-center w-md-17">
                      <div className={`icon-certificate ${activeTab === "menu1" ? "active" : ""}`} />
                    </div>
                    <div className="w-md-83">
                      <span className="up-span up-span-inline">Qualified electronic certificate</span>
                    </div>
                  </div>
                </button>
              </li>

              <li className={`nav-item ${activeTab === "menu2" ? "active" : ""}`} role="presentation">
                <button
                  className="nav-link up-style"
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab("menu2")}
                  aria-selected={activeTab === "menu2"}
                >
                  <div className="d-flex align-items-center">
                    <div className="text-center w-md-17">
                      <div className={`icon-mobile ${activeTab === "menu2" ? "active" : ""}`} />
                    </div>
                    <div className="w-md-83">
                      <span className="up-span up-span-inline">Mobile application</span>
                    </div>
                  </div>
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div
                id="home"
                role="tabpanel"
                className={`tab-pane fade ${activeTab === "home" ? "show active login-box-up in" : ""}`}
              >
                <div className="row mb-3">
                  <div className="col-12 text-center">
                    <div className="user-lg" />
                  </div>
                  <div className="row justify-content-center mb-3">
                    <div className="col-sm-12 col-md-8 text-center">
                      <p className="up-style">
                        Login with a username and password is a basic security login.
                        <a href="https://eid.gov.rs/en-US/user-name-and-password-login" className="up-link" target="_blank" rel="noopener noreferrer"> Find out more. </a>
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={signInUP}>
                  <div className="row mb-3">
                    <div className="col-sm-12">
                      <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group mb-3">
                            <label htmlFor="username1">Username:</label>
                            <div className="up-style-desc mb-1">(Email address used for registration)</div>
                            <div className="ic">
                              <input
                                id="username1"
                                name="username1"
                                type="text"
                                placeholder=""
                                className="form-control"
                                required
                                value={username1}
                                onChange={(e) => setUsername1(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group mb-3">
                            <label htmlFor="password1">Password:</label>
                            <div className="ic">
                              <input
                                id="password1"
                                name="password1"
                                type={showPassword ? "text" : "password"}
                                placeholder=""
                                className="form-control"
                                required
                                autoComplete="off"
                                value={password1}
                                onChange={(e) => setPassword1(e.target.value)}
                              />
                            </div>
                            <button
                              type="button"
                              id="showpass"
                              className="btn btn-sm btn-link show-pw p-0"
                              style={{ cursor: "pointer" }}
                              onClick={() => setShowPassword((s) => !s)}
                            >
                              {showPassword ? "HIDE" : "SHOW"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center aetButtonMargins">
                    <div className="col-sm-12 col-md-6">
                      <input type="hidden" name="sessionDataKey" value={sessionDataKey} />
                      <div className="form-group text-left form-group-mb-0">
                        <div className="form-actions">
                          <button
                            id="aetButtonUP1"
                            type="submit"
                            className="aetButton aetButton-green btn"
                          >
                            <div className="aetB-d-flex">
                              <p className="d-flex align-items-center" style={{ margin: "auto" }}>
                                <span className="first-layer" />
                                <span className="text-light">Sign in</span>
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="form-group text-left form-group-mb-0 mt-2">
                        <div className="form-actions">
                          <a
                            id="passwordRecoverLink"
                            className="password-recoved-link up-link"
                            href="https://prijava.eid.gov.rs/accountrecoveryendpoint/recoveraccountrouter.do?callback=..."
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Password forgotten
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-6 text-center">
                      <p className="up-style">
                        Don't have an account at eid.gov.rs? Register{" "}
                        <a href="https://eid.gov.rs/en-US/start" className="up-link" target="_blank" rel="noopener noreferrer">here.</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>

              <div
                id="menu1"
                role="tabpanel"
                className={`tab-pane fade ${activeTab === "menu1" ? "show active login-box-up" : ""}`}
              >
                <form id="loginFormSC" className="gen-form" onSubmit={(e) => { e.preventDefault(); signInMFASC(e); }}>
                  <div className="row mb-3">
                    <div className="col-12 text-center">
                      <div className="user-lg user-certificate-lg" />
                    </div>
                    <div className="row justify-content-center mb-3">
                      <div className="col-sm-12 col-md-6 text-center">
                        <p className="up-style">
                          Logging in with a qualified electronic certificate is a high level of trust.{" "}
                          <a href="#" className="up-link">Find out more.</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center aetButtonMargins">
                    <div className="col-sm-12 col-md-6">
                      <div className="form-actions text-center">
                        <button
                          id="icon-3"
                          type="button"
                          className="aetButton aetButton-green btn"
                          onClick={signInMFASC}
                        >
                          <div className="aetB-d-flex">
                            <p className="d-flex align-items-center m-0" style={{ margin: "auto" }}>
                              <span className="third-layer" />
                              <span>Sign in</span>
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-6 text-center">
                      <p className="up-style">
                        Don't have an account at eid.gov.rs? Register{" "}
                        <a className="up-link" href="https://eid.gov.rs/en-US/start" target="_blank" rel="noopener noreferrer">here.</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>

              <div
                id="menu2"
                role="tabpanel"
                className={`tab-pane fade ${activeTab === "menu2" ? "show active login-box-up" : ""}`}
              >
                <form id="loginForm" className="gen-form" onSubmit={(e) => { e.preventDefault(); signInCID(e); }}>
                  <div className="row mb-3">
                    <div className="col-12 text-center">
                      <div className="user-lg user-mobile-lg" />
                    </div>
                    <div className="row justify-content-center mb-3">
                      <div className="col-sm-12 col-md-8 text-center">
                        <p className="up-style">
                          Logging in with a mobile phone is done using the ConsentID application and is a high-level login.
                          <a href="#" className="up-link"> Find out more. </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-12">
                      <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group mb-3">
                            <label htmlFor="usernameCid">Username:</label>
                            <div className="up-style-desc mb-1">(Email address used for registration)</div>
                            <div className="ic">
                              <input
                                id="usernameCid"
                                name="usernameCid"
                                type="text"
                                className="form-control"
                                required
                                value={usernameCid}
                                onChange={(e) => setUsernameCid(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center aetButtonMargins">
                    <div className="col-sm-12 col-md-6">
                      <div className="form-actions text-center">
                        <button
                          id="aetButtonCID"
                          type="submit"
                          className="aetButton aetButton-green btn"
                        >
                          <div className="aetB-d-flex">
                            <p className="d-flex align-items-center m-0" style={{ margin: "auto" }}>
                              <span className="third-layer" />
                              <span>Sign in</span>
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-sm-12 col-md-6 text-center">
                      <p className="link-bottom">
                        Don't have an account at eid.gov.rs? Register{" "}
                        <a href="#" className="up-link">here.</a>
                      </p>
                      <p className="link-bottom">
                        <a href="#" className="up-link">How to activate the ConsentID mobile application?</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EIDforms