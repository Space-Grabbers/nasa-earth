import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import About from './components/About';

import LandingPage from './components/LandingPage'
import OpenScience from './components/OpenScience';
import SharingData from './components/SharingData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='about' element={<About />} />
        <Route path='open-science' element={<OpenScience />} />
        <Route path='open-science/sharing-of-data' element={<SharingData />} />
      </Routes>
    </Router>
  )
}

export default App