import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom"
import TestDriveSteps from './components/tdSteps/tdSteps.jsx'
import Navbar from './components/navbar.jsx'
import SelectDealer from './components/01_selectDealer/selectDealer.jsx'
import UserDetails from './components/03_userDetails.jsx/userDetails.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Routes>
        <Route exact path="/"
          element={<App />} />
        <Route exact path="/tdsteps"
          element={<><Navbar /><TestDriveSteps /></>} />
        <Route exact path="/select-dealer"
          element={<><Navbar /><SelectDealer /></>} />
        <Route exact path="/user-details"
          element={<><Navbar /><UserDetails /></>} />
      </Routes>
    </Router>
  </>
)
