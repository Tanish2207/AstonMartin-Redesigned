import './startconfiguration.css';
import Paint from './paint';
import './paint.css';

import Purpleblue from './purpleandblue';

import Interior from './interior';
import PrimaryColor from './primarycolor';

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

//make the infobutton visible to view information about the color 
document.querySelector("#colorplateinfobutton").style.display="block";

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

//make the infobutton visible to view info about the color;
document.querySelector("#colorplateinfobutton").style.display="block";

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

   const QSeychellesBlue=()=>{

    // console.log("clicked");

    document.querySelector("#colorimage img").src="q_seychelles_blue_plate_information.jpg";
 document.querySelector("#colorcardcolorname").innerHTML="Q Seychelles Blue";
 document.querySelector("#colorcardcolorinformation").innerHTML="A very rare Aston Martin colour-to-date, made most famous by a member of the British Royal family and a DB6 Volante.";

    document.querySelector("#colorplateimage img").src="q_seychelles_blue_plate.jpg";
    document.querySelector("#colortype").innerHTML="Provenance";
    document.querySelector("#colorname").innerHTML="Q Seychelles Blue";
   

    const image1=document.getElementById("img1");
    image1.src="q_seychelles_blue.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_seychelles_blue_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_seychelles_blue_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_seychelles_blue_sideview.jpg";

    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplatefour,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplateone").style.borderBottom="1px solid white";
    document.querySelector("#purpleplatetwo").style.border="none";
    document.querySelector("#purpleplatethree").style.border="none";
    document.querySelector("#purpleplatefour").style.border="none";
    document.querySelector("#purpleplatefive").style.border="none";
    document.querySelector("#purpleplatesix").style.border="none";
   }


   const QIconBlue=()=>{

    document.querySelector("#colorimage img").src="q_ion_blue_plate_information.jpg";
 document.querySelector("#colorcardcolorname").innerHTML="Q Icon Blue";
 document.querySelector("#colorcardcolorinformation").innerHTML="This colour has extraordinary visual depth - and looks like the paintwork could almost be inches thick. A high concentration of innovative blue effect technologies give a remarkably rich, dark, side tone - while the highlight pops in a vibrant shade of cobalt.";

//  document.querySelector("#colorplateimage img").src="q_ion_blue_plate.jpg";
//  document.querySelector("#colortype").innerHTML="Icon";
//  document.querySelector("#colorname").innerHTML="Q Icon Blue";
   

    const image1=document.getElementById("img1");
    image1.src="q_ion_blue.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_ion_blue_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_ion_blue_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_ion_blue_sideview.jpg";

    document.querySelector("#purpleplatetwo").style.borderBottom="1px solid white";
    // document.querySelector("#purpleplateone,#purpleplatethree,#purpleplatefour,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplateone").style.border="none";
    document.querySelector("#purpleplatethree").style.border="none";
    document.querySelector("#purpleplatefour").style.border="none";
    document.querySelector("#purpleplatefive").style.border="none";
    document.querySelector("#purpleplatesix").style.border="none";

   }


   const PlasmaBlue=()=>{


    document.querySelector("#colorimage img").src="plasma_blue_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Plasma Blue";
    document.querySelector("#colorcardcolorinformation").innerHTML="Plasma Blue was designed to give extraordinary visual depth with a deep liquid look. This lustrous mid blue communicates surface movement with a fine metallic shimmer and subtle red side tone unlike any previous Aston Martin shade. In bright sunlight, colour is emphasised – giving a pleasing radiancy. While in darker environments, both strong light-to-dark travel and true visual lustre are maintained.";

    const image1=document.getElementById("img1");
    image1.src="plasma_blue.jpg";

    const image2=document.getElementById("img2");
    image2.src="plasma_blue_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="plasma_blue_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="plasma_blue_sideview.jpg";
    document.querySelector("#purpleplatethree").style.borderBottom="1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplateone,#purpleplatefour,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplatetwo").style.border="none";
    document.querySelector("#purpleplateone").style.border="none";
    document.querySelector("#purpleplatefour").style.border="none";
    document.querySelector("#purpleplatefive").style.border="none";
    document.querySelector("#purpleplatesix").style.border="none";
   }


   const ElwoodBlue=()=>{

    document.querySelector("#colorimage img").src="elwood_blue_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Elwood Blue";
    document.querySelector("#colorcardcolorinformation").innerHTML="Elwood Blue was made famous in 2009 when, as part of its engineering sign-off, a prototype V12 Vantage won its class at the N24 race in Germany.";


    const image1=document.getElementById("img1");
    image1.src="elwood_blue.jpg";

    const image2=document.getElementById("img2");
    image2.src="elwood_blue_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="elwood_blue_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="elwood_blue_sideview.jpg";
    document.querySelector("#purpleplatefour").style.borderBottom="1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplateone,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplatetwo").style.border="none";
    document.querySelector("#purpleplatethree").style.border="none";
    document.querySelector("#purpleplateone").style.border="none";
    document.querySelector("#purpleplatefive").style.border="none";
    document.querySelector("#purpleplatesix").style.border="none";
   }
   
   const QDigitalViolet=()=>{


    document.querySelector("#colorimage img").src="q_digital_violet_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Q Digital Violet";
    document.querySelector("#colorcardcolorinformation").innerHTML="Digital Violet is a new, super saturated metallic with unprecedented travel. A futuristic interpretation of sport and performance inspired by the world of contemporary luxury athleisure. A colour that turns heads maintaining an unmistakable elegance.";


    const image1=document.getElementById("img1");
    image1.src="q_digital_violet.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_digital_violet_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_digital_violet_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_digital_violet_sideview.jpg";
    document.querySelector("#purpleplatefive").style.borderBottom="1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplatefour,#purpleplateone,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplatetwo").style.border="none";
    document.querySelector("#purpleplatethree").style.border="none";
    document.querySelector("#purpleplatefour").style.border="none";
    document.querySelector("#purpleplateone").style.border="none";
    document.querySelector("#purpleplatesix").style.border="none";
   }

   const StormPurple=()=>{

    document.querySelector("#colorimage img").src="storm_purple_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Storm Purple";
    document.querySelector("#colorcardcolorinformation").innerHTML="Storm Purple embodies the equilibrium of contemporary performance and ultra-luxury in an unexpected purple nuance. Strong and vibrant under direct light, exquisite modern refinement when in shadow.";



    const image1=document.getElementById("img1");
    image1.src="storm_purple.jpg";

    const image2=document.getElementById("img2");
    image2.src="storm_purple_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="storm_purple_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="storm_purple_sideview.jpg";
    document.querySelector("#purpleplatesix").style.borderBottom="1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplatefour,#purpleplatefive,#purpleplateone").style.border="none";
    document.querySelector("#purpleplatetwo").style.border="none";
    document.querySelector("#purpleplatethree").style.border="none";
    document.querySelector("#purpleplatefour").style.border="none";
    document.querySelector("#purpleplatefive").style.border="none";
    document.querySelector("#purpleplateone").style.border="none";

   }
   

   const Blackgrey=()=>{
    document.querySelector(".colorplatediv").style.display="block";
    // document.querySelector(".colorplatediv").style.display="none";
    document.querySelector("#interiorwindow").style.display="none";
document.querySelector("#purpleblueplatessection").style.display="none";


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

const ShowInterior=()=>{
document.querySelector("#interiorwindow").style.display="block";
document.querySelector("#seatingdiv").style.display="block";

document.querySelector("#exterior").style.color="#acaead";
document.querySelector("#interior").style.color="white";

document.querySelector(".colorplatediv").style.display="none";
document.querySelector("#purpleblueplatessection").style.display="none";


document.querySelector("#img1").src="sports_plus_seat_frontview.jpg";
    document.querySelector("#img2").src="sports_plus_seat_steeringview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_steeringleftbackview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_sideview.jpg";

    document.querySelector("#interior").style.background="#292b2d";
    document.querySelector("#exterior,#interioroptions,#personalisation,#accessories").style.background="#3c3f3e";



}

const ShowBlackandGreybydefault=()=>{
  document.querySelector(".colorplatediv").style.display="block";
  document.querySelector("#interiorwindow").style.display="none";
  document.querySelector("#purpleblueplatessection").style.display="none";
  document.querySelector("#colorcard").style.width="47vw";
  document.querySelector("#colorcard").style.transform="translate(54%,-8%)";
  // document.querySelector("#colorcard").style.left="230px";

  document.querySelector("#colorimage img").style.width="230px";
  document.querySelector("#colorinformation").style.width="469px";
  document.querySelector("#colorinformation").style.left="209px";

// dont show interior window by default when entering start configuration
document.querySelector("#interiorwindow").style.display="none";
  document.querySelector("#colorimage img").src="q_buckinghamshire_green_plate.jpg";
    document.querySelector("#colorimage img").style.background="";
    document.querySelector("#colorcardcolorname").innerHTML="Q Buckinghamshire Green";
    document.querySelector("#colorcardcolorinformation").innerHTML="Originally used for the launch of the 1988 Aston Martin Virage, Buckinghamshire Green is a classic and timeless colour inspired by the golden age of motorsport. A deep, rich, tonality with a fine metallic effect - this colour perfectly suits the performance prowess of any Aston Martin you care to mention.";

    const image1=document.getElementById("img1");
    image1.src="q_buckinghamshire_green.jpg";

    const image2=document.getElementById("img2");
    image2.src="q_buckinghamshire_green_defaultalloy.jpg";

    const image3=document.getElementById("img3");
    image3.src="q_buckinghamshire_green_leftsidebacklowview.jpg";

    const image4=document.getElementById("img4");
    image4.src="q_buckinghamshire_green_sideview.jpg";

    document.querySelector("#exterior").style.background="#292b2d";
    document.querySelector("#exterior").style.color="white";
    document.querySelector("#interior").style.color="#acaead";
    document.querySelector("#interior,#interioroptions,#personalisation,#accessories").style.background="#3d403f";

    document.querySelector("#primarycolorwindow").style.display="none";

document.querySelector(".features p").style.color="white";
// document.querySelector(".features p").style.background="#3d403f";
}
   

const ShowPurpleandBlue=()=>{
  document.querySelector("#purpleblueplatessection").style.display="block";
  document.querySelector(".colorplatediv").style.display="none";
  document.querySelector("#interiorwindow").style.display="none";
  document.querySelector("#purplesandblues").style.borderBottom="1px solid white";
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
            <p id="exterior" onClick={ShowBlackandGreybydefault}>Exterior</p>
            <p id="interior"  onClick={ShowInterior}>Interior</p>
            <p id="interioroptions">Interior Options</p>
            <p id="personalisation">Personalisation</p>
            <p id="accessories">Accessories</p>
          </div>
          <div className="modifications">
            <p id="paint" onClick={HandleShowPaintSection}>Paint</p>
            <p id="exteriorpackages">Exterior Packages</p>
            <p id="liveries">Liveries</p>
            <p id="grillefinish" >Grille Finish</p>
            <p id="roof">Roof</p>
            <p id="wheels">Wheels</p>
            <p id="taillights">Tail Lights</p>
            <p id="glazing">Glazing</p>
            <p id="doorhandles">Door Handles</p>
            <p id="accesories">Accesories</p>
          </div>
          <Paint handleshowPaintSection={HandleShowPaintSection}   blackgrey={Blackgrey}/>
          <Purpleblue  qseychellesblue={QSeychellesBlue} info={showinfo}  qiconblue={QIconBlue} plasmablue={PlasmaBlue}  elwoodblue={ElwoodBlue}
          qdigitalviolet={QDigitalViolet} stormpurple={StormPurple} showpurpleblue={ShowPurpleandBlue}   interior={ShowInterior}/>
          

            <Interior  image1="img1" image2="img2" image3="img3" image4="img4" seatimageinfo="colorimage" seatname="colorcardcolorname"
           seatdescription="colorcardcolorinformation" showinfofunction={showinfo}  colorcard="colorcard" colorinformation="colorinformation"
            interior={ShowInterior} /> 
<PrimaryColor image11="img1" image22="img2" image33="img3" image44="img4"/>
           
        
        <div className="colorplatediv">


          <div className="colorplates">
          <div className="image" onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover} onClick={QQuantumSilver} >  <img src="q_quantum_silver_plate.jpg" id="BlackPlateOne" class="imagescale"   /></div>
           <div className="image" onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover}> <img src="q_casino_royale_plate.jpg" id="BlackPlateTwo"  class="imagescale" onClick={handleQCasinoRoyale}/></div>
           <div className="image"onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover}> <img src="q_satin_titanium_grey_plate.jpg" id="BlackPlateThree" class="imagescale"  onClick={handleQSatinTitaniumGrey}/>
           {/* {/* <img id="colorplateinfobutton" src="infobutton.png"  onClick={showinfo}/> */}
           </div>
           <div className="image"onMouseEnter={handleImageHover} onMouseLeave={handleImageUnhover}> <img src="q_satin_xenon_grey_plate.jpg" alt=""  onClick={handleQSatinXenonGrey} id="BlackPlateFour"class="imagescale" />
            {/* <img id="colorplateinfobutton" src="infobutton.png"  onClick={showinfo}/> */}
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
