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
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomeUser from './pages/WelcomeUser/WelcomeUser';
import SentRequests from './pages/SentRequests/SentRequests';

function App() {
  return (
    <Router>
        {/* Main Content Area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/elect-id" element={<ElectIdPortal />} />
            <Route path="/ps-requests" element={<SentRequests />} />
            <Route path="/welcome-user" element={<WelcomeUser />} />
          </Routes>
    </Router>
  )
}

export default App