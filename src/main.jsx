import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TestDriveSteps } from './components/tdSteps/tdSteps.jsx';
import { Navbar } from './components/navigation/navbar.jsx';
import { SelectDealer } from './components/01_selectDealer/selectDealer.jsx';
import { UserDetails } from './components/03_userDetails.jsx/userDetails.jsx';
import { Configure } from './components/configure/configure.jsx';
import Customize from './components/customize/customize.jsx';
import { SelectModel } from './components/02_selectModel/selectModel.jsx';
import { DealerSelection } from './contexts/dealerSelection.js';
import { Preloader } from './components/preloader/preloader.jsx';
import { Explore3D } from './components/explore3D/explore3D.jsx';
import StartConfiguration from './components/startconfiguration.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <DealerSelection.Provider value={[0, 0, 0]}>
        <Routes>
          <Route exact path="/"
            element={<><Preloader /><App /></>} />
          <Route exact path="/home"
            element={<App />} />
          <Route exact path="/tdsteps"
            element={<><Navbar /><TestDriveSteps /></>} />
          <Route exact path="/config"
            element={<><Navbar /><Configure /></>} />
          <Route exact path="/customize"
            element={<><Navbar /><Customize /></>} />
          <Route exact path="/explore"
            element={<><Navbar /><Explore3D /></>} />
          <Route exact path="/startconfig"
            element={<StartConfiguration />} />
        </Routes>
      </DealerSelection.Provider >
    </BrowserRouter>
  </>
)
