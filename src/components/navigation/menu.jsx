import { Link } from 'react-router-dom';
import './menu.css';
import { RiArrowRightSLine } from "@remixicon/react";
export const Menu = ({ sidebar }) => {

  const handle = () => {
    const modellist = document.getElementById('modellist');
    modellist.style.display = "block";
    const world = document.getElementById("world");
    world.style.display = "none";
    const owner = document.getElementById("owner");
    owner.style.display = "none";
  }

  const handleimg3 = () => {
    const modellist = document.getElementById('modellist');
    modellist.style.display = "none";
    const world = document.getElementById("world");
    world.style.display = "none";
    const owner = document.getElementById("owner");
    owner.style.display = "block";
  }


  const handleimg2 = () => {
    const modellist = document.getElementById('modellist');
    modellist.style.display = "none";

    const owner = document.getElementById("owner");
    owner.style.display = "none";


    const world = document.getElementById("world");
    world.style.display = "block";
  }



  return (
    <div>
      <div className="menu" style={{ left: sidebar ? '0' : '-100%', transition: "all 350ms" }}>
        <div className="links flex flex-col">
          <a href="/home"><li>Home</li></a>
          <li onMouseEnter={handle} ><div className="link-arrow-cont">Models <RiArrowRightSLine /></div></li>
          <a href="select-dealer"><li>Find a Dealer</li></a>
          <a href="/config"><li>Configure</li></a>
          <a href="/tdsteps"><li>Test Drive</li></a>
          <a href="/explore"><li>Explore 3D Model</li></a>
          <li onMouseEnter={handleimg2} ><div className="link-arrow-cont">Our World<RiArrowRightSLine /></div></li>
          <li onMouseEnter={handleimg3} ><div className="link-arrow-cont">Owners<RiArrowRightSLine /></div></li>

        </div>

        <div id='modellist' className="side-drop">
          <div className="links">

            <li>DBX707</li>
            <li>Vantage</li>
            <li>DB12</li>
            <li>DBS</li>
            <li>Valour</li>
            <li>Valkyrie</li>
          </div>
        </div>


        <div id="owner" className="side-drop">
          <div className="links">

            <li>Customer Support</li>
            <li>Servicing</li>
            <li>Owners Guides</li>
          </div>
        </div>

        <div id="world" className="side-drop" >
          <div className="links">
            <li>Brand Stories</li>
            <li>110 Years in the Making</li>
            <li>News</li>
            <li>Partnerships</li>
            <li>Magazine</li>
          </div>
        </div>

      </div>
    </div>

  )
}