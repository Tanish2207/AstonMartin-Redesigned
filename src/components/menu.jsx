

import "./model.css"
import './menu.css';
import './owner.css';
import './ourworld.css';
import styles from "./menu.module.css";
const Menu = ()=>{

// const handle=()=>{
//   const model=document.querySelector(".models");

//  model.classList.add(".models");
//  model.style.display=true;
  
  

// }

// code for models dropdown
var check = true;
const handle = () => {

  const modellist = document.getElementById('modellist');
  modellist.style.display="block";
  const world=document.getElementById("world");
  world.style.display="none";
  const owner=document.getElementById("owner");
  owner.style.display="none";


//   if(check){
// check =false;
//   }
// else{
//   modellist.style.display="none";
//   check=true;
// }
  
  // const model = document.querySelector(".models");
  // model.classList.add("models"); // Remove the dot
  //model.style.display = "block";  Set display to "block" to make it visible


}


//code for owners dropdown
// var checkowner=true;
const handleimg2=()=>{

  const modellist = document.getElementById('modellist');
  modellist.style.display="none";
  //first remove the ourworld dropdown;
  const world=document.getElementById("world");
  world.style.display="none";
  const owner=document.getElementById("owner");
  owner.style.display="block";
 

  // if(checkowner){
  //   checkowner=false;
  // }

  // else{
  //   owner.style.display="none";
  //   checkowner=true;
  // }
}


//code for removing menu when clicked on cross button
const handlecross=()=>{
  const cross=document.querySelector(".menu");
  cross.style.display="none";
}

//code for ourworld dropdown
// var checkworld=true;
const handleimg3=()=>{
//first remove the dropdown of models
  const modellist = document.getElementById('modellist');
  modellist.style.display="none";

  //first remove the dropdown of owners
  const owner=document.getElementById("owner");
  owner.style.display="none";
 

  const world=document.getElementById("world");
  world.style.display="block";

  // if(checkworld){
  //   checkworld=false;
  // }

  // else{
  //   owner.style.display="none";
  //   checkworld=true;
  // }
}



  return(<>
  {/* <div className={styles.menu}> */}
  <div className="menu">
    <div className={styles.cross}><img src="x-button.png" className="crosss" onClick={handlecross}></img></div>
    <div className={styles.links}>
    <li>Home</li>
    <li>Models <img src="down-chevron.png"  className={styles.img1}   onMouseEnter={handle}/></li>
    <li>Find a Dealer</li>
    <li>Preowned</li>
    <li>Owners<img src="down-chevron.png" className={styles.img2} onMouseEnter={handleimg2}/></li>
    <li>Our World<img src="/down-chevron.png" className={styles.img3}   onMouseEnter={handleimg3}/></li>
    <li>Experiences</li>
    <li>Store</li>
    <li>F1 Team</li>

    </div>

  </div>
  <div id='modellist' className="models">
  <div className="modellist">

<li>All Models</li>
<li>DBX707</li>
<li>Vantage</li>
<li>DB12</li>
<li>DBS</li>
<li>Valour</li>
<li>Valhalla</li>
<li>Valkyrie</li>
<li>AMR24</li>
</div>
  </div>
 

  <div  id="owner" className="owners">
    <div className="customersupport">

    <li>Customer Support</li>
    <li>Servicing</li>
    <li>Owners Guides</li>
    </div>
  </div> 

  <div id="world" className="ourworld">
    <div className="intensity">

<li>Intensity. Driven</li>
<li>Brand Stories</li>
<li> Racing. Green</li>
<li> News</li>
<li>110 Years in the Making</li>
<li>Partnerships</li>
<li>Magazine</li>

    </div>
  </div>
  
  
  </>)
}



export default Menu;


