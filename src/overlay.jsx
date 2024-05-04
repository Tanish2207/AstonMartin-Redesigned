import ArrangeTD from "./components/arrangeTD/arrangeTD"
import Landing from "./components/landing/landing"
import Navbar from "./components/navbar"
import Page2 from "./components/page2/page2"
import TestDriveSteps from "./components/tdSteps/tdSteps"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const Overlay = () => {


  return (
    <>
      <Navbar />
      <Landing />
      <Page2 />
      <ArrangeTD />
    </>
  )
}

export default Overlay