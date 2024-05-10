import { ArrangeTD } from "./components/arrangeTD/arrangeTD"
import { Landing } from "./components/landing/landing"
import { Navbar } from "./components/navigation/navbar"
import { Page2 } from "./components/page2/page2"
export const Overlay = () => {
  

  return (
    <>
      <Navbar />
      <Landing />
      <Page2 />
      <ArrangeTD />
    </>
  )
}
