import './startconfiguration.css';
import Paint from './paint';
import './paint.css';
const StartConfiguration = () => {

  const handleimg1=()=>{

    //removing other images
    const image2=document.getElementById("img2");
    image2.style.display="none";

    const image3=document.getElementById("img3");
    image3.style.display="none";
    const image4=document.getElementById("img4");
    image4.style.display="none";


    //inserting desired image
   const image1=document.getElementById("img1");
   image1.style.display="block";



  }

  const handleimg2=()=>{

    //removing other images 
    const image3=document.getElementById("img3");
    image3.style.display="none";

    const image4=document.getElementById("img4");
    image4.style.display="none";

    const image1=document.getElementById("img1");
    image1.style.display="none";
    
    
    //adding desired images
    const image2=document.getElementById("img2");
    image2.style.display="block";
 
 
 
   }
   const handleimg3=()=>{

    //removing other images 
    const image1=document.getElementById("img1");
    image1.style.display="none";
    const image2=document.getElementById("img2");
    image2.style.display="none";
    const image4=document.getElementById("img4");
    image4.style.display="none";

    //adding desired image
    const image3=document.getElementById("img3");
    image3.style.display="block";
 
 
 
   }
   const handleimg4=()=>{

    //removing other images 
    const image1=document.getElementById("img1");
    image1.style.display="none";
    const image2=document.getElementById("img2");
    image2.style.display="none";
    const image3=document.getElementById("img3");
    image3.style.display="none";

    //adding desired images
    const image4=document.getElementById("img4");
    image4.style.display="block";
 
 
 
   }
//javascript for handleQCasinoRoyale
   const handleQCasinoRoyale=()=>{
    const border = document.querySelector("#BlackPlateTwo");
    border.style.borderBottom = "2px solid white";

//remove border of another plates
document.querySelector("#BlackPlateOne").style.border="none";
document.querySelector("#BlackPlateThree").style.border="none";

document.querySelector("#colorplateimage img").src="q_casino_royale_plate.jpg";


document.querySelector("#colortype").innerHTML="Icon";
document.querySelector("#colorname").innerHTML="Q Casino Royale";

document.querySelector("#colorplateinfobutton").style.display="none";




    const image1=document.getElementById("img1");
    image1.src="q_casino_royale.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_casino_royale_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_casino_royale_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_casino_royale_sideview.jpg";
   }

   const handleQSatinTitaniumGrey=()=>{
    const border = document.querySelector("#BlackPlateThree");
    border.style.borderBottom = "2px solid white";

    //remove border of another plates
    document.querySelector("#BlackPlateOne").style.border="none";
document.querySelector("#BlackPlateTwo").style.border="none";
document.querySelector("#BlackPlateFour").style.border="none";

document.querySelector("#colorplateimage img").src="q_satin_titanium_grey_plate.jpg";

document.querySelector("#colortype").innerHTML="Satin";
document.querySelector("#colorname").innerHTML="Q Satin Titanium Grey";

document.querySelector("#colorimage img").src="q_satin_titanium_grey_plate_information.jpg";
 document.querySelector("#colorcardcolorname").innerHTML="Q Satin Titanium Grey";
 document.querySelector("#colorcardcolorinformation").innerHTML="Titanium Grey has a warm and green-ish hue that makes it both refined and distinctive. Working particularly well in a Satin finish, the coarse metallic effect shines across surfaces and works to flatters any Aston Martin’s sculpted forms.";


    const image1=document.getElementById("img1");
    image1.src="q_satin_titanium_grey.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_satin_titanium_grey_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_satin_titanium_grey_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_satin_titanium_grey_sideview.jpg";
   }

   const handleQSatinXenonGrey=()=>{
    const border = document.querySelector("#BlackPlateFour");
border.style.borderBottom = "2px solid white";
//remove border of another plates
document.querySelector("#BlackPlateOne").style.border="none";
document.querySelector("#BlackPlateTwo").style.border="none";
document.querySelector("#BlackPlateThree").style.border="none";

 document.querySelector("#colorplateimage img").src="q_satin_xenon_grey_plate.jpg";
 document.querySelector("#colortype").innerHTML="Satin";
 document.querySelector("#colorname").innerHTML="Q Satin Xenon Grey";


 document.querySelector("#colorimage img").src="q_satin_xenon_grey_plate_information.jpg";
 document.querySelector("#colorcardcolorname").innerHTML="Q Satin Xenon Grey";
 document.querySelector("#colorcardcolorinformation").innerHTML="Xenon Grey is a striking and visually arresting dark neutral. A statement colour, it has a unique and mineral-like quality that creates a sparkle seldom seen in any grey paint. It is particularly unique with a satin finish. Inspired by the element Xenon, the colour employs multiple semi-coarse and super-coarse coated aluminium's that appear to almost glow blue at certain angles of view. This technology emphasises the crafted contours of an Aston Martin's sculpted body sides while serving as a dramatic design showpiece in its own right.";


    const image1=document.getElementById("img1");
    image1.src="q_satin_xenon_grey.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_satin_xenon_grey_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_satin_xenon_grey_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_satin_xenon_grey_sideview.jpg";
   }


   const QQuantumSilver=()=>{

    const border = document.querySelector("#BlackPlateOne");
border.style.borderBottom = "2px solid white";
//remove border of another plates
document.querySelector("#BlackPlateFour").style.border="none";
document.querySelector("#BlackPlateTwo").style.border="none";
document.querySelector("#BlackPlateThree").style.border="none";

 document.querySelector("#colorplateimage img").src="q_quantum_silver_plate.jpg";
 document.querySelector("#colortype").innerHTML="Icon";
 document.querySelector("#colorname").innerHTML="Q Quantum Silver";

 //remove the infoinformation button because we dont have information about the color 
 document.querySelector("#colorplateinfobutton").style.display="none";



    const image1=document.getElementById("img1");
    image1.src="q_quantum_silver.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_quantum_silver_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_quantum_silver_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_quantum_silver_sideview.jpg";
   }


  


const handleImageHover = (event) => {
  const image = event.target;
  image.style.transform = "scale(1.5)";
}

const handleImageUnhover = (event) => {
  const image = event.target;
  image.style.transform = "scale(1)";
}

const crossbutton=()=>{
  document.querySelector(".colorinfowindow").style.display="none";
}

const showinfo=()=>{
  document.querySelector(".colorinfowindow").style.display="block";
}

var check=true;
const HandleShowPaintSection=()=>{
  if(check===true)
   {
document.querySelector("#paintbar").style.display="block";
document.querySelector("#exteriorpackages,#liveries,#grillefinish,#roof,#wheels,#glazing,#doorhandles,#accesories").style.display="none";

check=false;}

else if(check===false)
{
  document.querySelector("#exteriorpackages,#liveries,#grillefinish,#roof,#wheels,#glazing,#doorhandles,#accesories").style.display="";
  document.querySelector("#paintbar").style.display="none";
check=true;
}
}
   

  return (
    <>
      <div className="startconfiguration">

        <div className="imagessection">
         <div className="images">
         <div className="image1"> <img src="q_buckinghamshire_green.jpg" alt="" id="img1" /></div>
          <img src="q_buckinghamshire_green_defaultalloy.jpg" alt="" id="img2"/>
          <img src="q_buckinghamshire_green_leftsidebacklowview.jpg" alt="" id="img3"/>
          <img src="q_buckinghamshire_green_sideview.jpg" alt=""  id="img4"/>
          {/* <span id="spantp"><img src="" alt="" /></span> */}
        </div> 
          <div className="imagesslider">
            <span className="imageslider" onClick={handleimg1}></span>
            <span className="imageslider" onClick={handleimg2}></span>
            <span className="imageslider"onClick={handleimg3}></span>
            <span className="imageslider" onClick={handleimg4}></span>
          </div>
        </div>
        <div className="selectionsection">
          <div className="features">
            <p id="exterior">Exterior</p>
            <p id="interior">Interior</p>
            <p id="interioroptions">Interior Options</p>
            <p id="personalisation">Personalisation</p>
            <p id="accessories">Accessories</p>
          </div>
          <div className="modifications">
            <p id="paint" onClick={HandleShowPaintSection}>Paint</p>
            <p id="exteriorpackages">Exterior Packages</p>
            <p id="liveries">Liveries</p>
            <p id="grillefinish">Grille Finish</p>
            <p id="roof">Roof</p>
            <p id="wheels">Wheels</p>
            <p id="taillights">Tail Lights</p>
            <p id="glazing">Glazing</p>
            <p id="doorhandles">Door Handles</p>
            <p id="accesories">Accesories</p>
          </div>
          <Paint handleshowPaintSection={HandleShowPaintSection}/>
        
        
          <div className="colorplates">
          <div className="image" onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover} onClick={QQuantumSilver} >  <img src="q_quantum_silver_plate.jpg" id="BlackPlateOne" class="imagescale"   /></div>
           <div className="image" onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover}> <img src="q_casino_royale_plate.jpg" id="BlackPlateTwo"  class="imagescale" onClick={handleQCasinoRoyale}/></div>
           <div className="image"onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover}> <img src="q_satin_titanium_grey_plate.jpg" id="BlackPlateThree" class="imagescale"  onClick={handleQSatinTitaniumGrey}/><img id="colorplateinfobutton" src="infobutton.png"  onClick={showinfo}/></div>
           <div className="image"onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover}> <img src="q_satin_xenon_grey_plate.jpg" alt=""  onClick={handleQSatinXenonGrey} id="BlackPlateFour"class="imagescale" /><img id="colorplateinfobutton" src="infobutton.png"  onClick={showinfo}/>
           </div>

           <div className="colorplateinformation">
            
            <div id="colorplateimage"><img src="q_buckinghamshire_green_plate.jpg" alt="" />
            <img id="colorplateinfobutton" src="infobutton.png"  onClick={showinfo}/>
            </div>
            
                       <div className="colorplatecontent">
              <div id="colortype">Provenance</div>
              <div id="colorname">Q Buckinghamshire Green</div>
            </div>
           </div>


          </div>
        </div>
      </div>
           <div className="colorinfowindow">
            <div ><img src="astonmartinlogowhite.png" id="astonmartinlogo" /></div>
            <div><span id="videocrossbuttonhover" ><img src="videocrossbutton.png" id="informationcrossbutton" onClick={crossbutton} /></span></div>
            <div id="colorcard">
            <div id="colorimage"><img src="q_buckinghamshire_green_plate_information.jpg" alt="" /></div>
            <div id="colorinformation">
              <div id="colorcardcolorname">Q Buckinghamshire Green</div>
              <div id="colorcardcolorinformation">Originally used for the launch of the 1988 Aston Martin Virage, Buckinghamshire Green is a classic and timeless colour inspired by the golden age of motorsport. A deep, rich, tonality with a fine metallic effect - this colour perfectly suits the performance prowess of any Aston Martin you care to mention.</div>
            </div>
            </div>
           </div>
    </>
  );
}

export default StartConfiguration;
