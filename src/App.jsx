// import './App.css'
// import Home from './pages/Home/Home'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import ElectIdPortal from './pages/ElectIdPortal/ElectIdPortal';
// import PSRequests from './components/PSRequests/PSRequests';

// function App() {

//   return (
//     <>
// {/* <Home/> */}
// {/* <ElectIdPortal/> */}
// <PSRequests/>
//     </>
//   )
// }

// export default App

import './App.css'
import Home from './pages/Home/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ElectIdPortal from './pages/ElectIdPortal/ElectIdPortal';
import PSRequests from './components/PrevSentReqs/PSRequests/PSRequests';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* Navigation Header */}
    
            <ul className="nav-menu d-flex bg-dark text-light justify-content-around">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/elect-id" className="nav-link">Electronic ID</Link>
              </li>
              <li className="nav-item">
                <Link to="/ps-requests" className="nav-link">PS Requests</Link>
              </li>
            </ul>
        {/* Main Content Area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/elect-id" element={<ElectIdPortal />} />
            <Route path="/ps-requests" element={<PSRequests />} />
          </Routes>
    </Router>
  )
}

export default App