


import { useState, useEffect } from 'react';

import './startconfiguration.css';
import Paint from './paint';
import './paint.css';
// import Purpleblue from './purpleandbluesection';
import Purpleblue from './purpleandblue';

import Interior from './interiorpackage/interior';
import PrimaryColor from './interiorpackage/primarycolor';

import ExteriorPackages from './exteriorpackages/exteriorpackages';

import LowerBodyPackage from './exteriorpackages/lowerbodypackages';

import UpperBodyPackage from './exteriorpackages/upperbodypackages';

import GrilleFinish from './grillefinish/grillefinish';

import Roof from './roof/roof';



const StartConfiguration = () => {

  const [selectedSeat, setSelectedSeat] = useState('sportsplus');
  const [selectedprimarycolor, setselectedprimarycolor] = useState('metallicblack');
  const [selectedsecondarycolor, setselectedsecondarycolor] = useState('oxfordtan');
  const [selectedpaint, setselectedpaint] = useState('black');

  const handleimg1 = () => {

    //removing other images
    const image2 = document.getElementById("img2");
    image2.style.display = "none";

    const image3 = document.getElementById("img3");
    image3.style.display = "none";
    const image4 = document.getElementById("img4");
    image4.style.display = "none";


    //inserting desired image
    const image1 = document.getElementById("img1");
    image1.style.display = "block";



  }

  const handleimg2 = () => {

    //removing other images 
    const image3 = document.getElementById("img3");
    image3.style.display = "none";

    const image4 = document.getElementById("img4");
    image4.style.display = "none";

    const image1 = document.getElementById("img1");
    image1.style.display = "none";


    //adding desired images
    const image2 = document.getElementById("img2");
    image2.style.display = "block";



  }
  const handleimg3 = () => {

    //removing other images 
    const image1 = document.getElementById("img1");
    image1.style.display = "none";
    const image2 = document.getElementById("img2");
    image2.style.display = "none";
    const image4 = document.getElementById("img4");
    image4.style.display = "none";

    //adding desired image
    const image3 = document.getElementById("img3");
    image3.style.display = "block";



  }
  const handleimg4 = () => {

    //removing other images 
    const image1 = document.getElementById("img1");
    image1.style.display = "none";
    const image2 = document.getElementById("img2");
    image2.style.display = "none";
    const image3 = document.getElementById("img3");
    image3.style.display = "none";

    //adding desired images
    const image4 = document.getElementById("img4");
    image4.style.display = "block";



  }




  const [exteriorcolor, setexteriorcolor] = useState('qbuckinghamshiregreen');
  //javascript for handleQCasinoRoyale
  const handleQCasinoRoyale = () => {

    setexteriorcolor('qcasinoroyale')
    setprev('qcasinoroyale')

    const border = document.querySelector("#BlackPlateTwo");
    border.style.borderBottom = "2px solid white";

    //remove border of another plates
    document.querySelector("#BlackPlateOne").style.border = "none";
    document.querySelector("#BlackPlateThree").style.border = "none";

    document.querySelector("#colorplateimage img").src = "q_casino_royale_plate.jpg";


    document.querySelector("#colortype").innerHTML = "Icon";
    document.querySelector("#colorname").innerHTML = "Q Casino Royale";

    document.querySelector("#colorplateinfobutton").style.display = "block";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681438/q_casino_royale_plate_information_gckq2r.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Casino Royale";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Named after the film it was first introduced in, Casino Royale is a colour exhibited on James Bonds DBS Coupe. This is a sophisticated, understated deep Silver.";




    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681437/q_casino_royale_k7va1h.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681437/q_casino_royale_defaultalloy_rczhde.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681438/q_casino_royale_leftsidebacklowview_hdlwhd.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681439/q_casino_royale_sideview_mzzpnp.jpg";
  }

  const handleQSatinTitaniumGrey = () => {

    setexteriorcolor('qsatintitaniumgrey');
    setprev('qsatintitaniumgrey');


    const border = document.querySelector("#BlackPlateThree");
    border.style.borderBottom = "2px solid white";

    //remove border of another plates
    document.querySelector("#BlackPlateOne").style.border = "none";
    document.querySelector("#BlackPlateTwo").style.border = "none";
    document.querySelector("#BlackPlateFour").style.border = "none";

    document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677771/q_satin_titanium_grey_plate_qnfe9v.jpg";

    document.querySelector("#colortype").innerHTML = "Satin";
    document.querySelector("#colorname").innerHTML = "Q Satin Titanium Grey";

    //make the infobutton visible to view information about the color 
    document.querySelector("#colorplateinfobutton").style.display = "block";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685805/q_satin_titanium_grey_plate_information_pwfalu.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Satin Titanium Grey";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Titanium Grey has a warm and green-ish hue that makes it both refined and distinctive. Working particularly well in a Satin finish, the coarse metallic effect shines across surfaces and works to flatters any Aston Martin’s sculpted forms.";


    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677753/q_satin_titanium_grey_xpcnga.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685804/q_satin_titanium_grey_defaultalloy_gteikq.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685806/q_satin_titanium_grey_leftsidebacklowview_p8vwcx.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685807/q_satin_titanium_grey_sideview_fq6oac.jpg";
  }

  const handleQSatinXenonGrey = () => {

    setexteriorcolor('qsatinxenongrey');
    setprev('qsatinxenongrey');

    const border = document.querySelector("#BlackPlateFour");
    border.style.borderBottom = "2px solid white";
    //remove border of another plates
    document.querySelector("#BlackPlateOne").style.border = "none";
    document.querySelector("#BlackPlateTwo").style.border = "none";
    document.querySelector("#BlackPlateThree").style.border = "none";

    document.querySelector("#colorplateimage img").src = "q_satin_xenon_grey_plate.jpg";
    document.querySelector("#colortype").innerHTML = "Satin";
    document.querySelector("#colorname").innerHTML = "Q Satin Xenon Grey";

    //make the infobutton visible to view info about the color;
    document.querySelector("#colorplateinfobutton").style.display = "block";

    document.querySelector("#colorimage img").src = "q_satin_xenon_grey_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Satin Xenon Grey";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Xenon Grey is a striking and visually arresting dark neutral. A statement colour, it has a unique and mineral-like quality that creates a sparkle seldom seen in any grey paint. It is particularly unique with a satin finish. Inspired by the element Xenon, the colour employs multiple semi-coarse and super-coarse coated aluminium's that appear to almost glow blue at certain angles of view. This technology emphasises the crafted contours of an Aston Martin's sculpted body sides while serving as a dramatic design showpiece in its own right.";


    const image1 = document.getElementById("img1");
    image1.src = "q_satin_xenon_grey.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "q_satin_xenon_grey_defaultalloy.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "q_satin_xenon_grey_leftsidebacklowview.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "q_satin_xenon_grey_sideview.jpg";
  }


  const QQuantumSilver = () => {

    setexteriorcolor('qquantumsilver');
    setprev('qquantumsilver');


    const border = document.querySelector("#BlackPlateOne");
    border.style.borderBottom = "2px solid white";
    //remove border of another plates
    document.querySelector("#BlackPlateFour").style.border = "none";
    document.querySelector("#BlackPlateTwo").style.border = "none";
    document.querySelector("#BlackPlateThree").style.border = "none";

    document.querySelector("#colorplateimage img").src = "q_quantum_silver_plate.jpg";
    document.querySelector("#colortype").innerHTML = "Icon";
    document.querySelector("#colorname").innerHTML = "Q Quantum Silver";

    //remove the infoinformation button because we dont have information about the color 
    document.querySelector("#colorplateinfobutton").style.display = "none";




    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677492/q_quantum_silver_powfrx.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677493/q_quantum_silver_defaultalloy_hcmd4c.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677497/q_quantum_silver_leftsidebacklowview_dcw7qb.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677497/q_quantum_silver_sideview_cufyxg.jpg";
  }

  const QSeychellesBlue = () => {

    setexteriorcolor('qseychellesblue');
    setprev('qseychellesblue');

    // console.log("clicked");

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719460/q_seychelles_blue_plate_information_uobwvf.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Seychelles Blue";
    document.querySelector("#colorcardcolorinformation").innerHTML = "A very rare Aston Martin colour-to-date, made most famous by a member of the British Royal family and a DB6 Volante.";

    document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719458/q_seychelles_blue_plate_geohri.jpg";
    document.querySelector("#colortype").innerHTML = "Provenance";
    document.querySelector("#colorname").innerHTML = "Q Seychelles Blue";


    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719455/q_seychelles_blue_usvhnh.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719455/q_seychelles_blue_defaultalloy_obpjs7.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719456/q_seychelles_blue_leftsidebacklowview_jh4yc0.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719462/q_seychelles_blue_sideview_n3idfg.jpg";

    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplatefour,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplateone").style.borderBottom = "1px solid white";
    document.querySelector("#purpleplatetwo").style.border = "none";
    document.querySelector("#purpleplatethree").style.border = "none";
    document.querySelector("#purpleplatefour").style.border = "none";
    document.querySelector("#purpleplatefive").style.border = "none";
    document.querySelector("#purpleplatesix").style.border = "none";
  }


  const QIonBlue = () => {

    setexteriorcolor('qionblue');
    setprev('qionblue');


    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753510/q_ion_blue_plate_information_ausgnr.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Ion Blue";
    document.querySelector("#colorcardcolorinformation").innerHTML = "This colour has extraordinary visual depth - and looks like the paintwork could almost be inches thick. A high concentration of innovative blue effect technologies give a remarkably rich, dark, side tone - while the highlight pops in a vibrant shade of cobalt.";

    //  document.querySelector("#colorplateimage img").src="q_ion_blue_plate.jpg";
    //  document.querySelector("#colortype").innerHTML="Icon";
    //  document.querySelector("#colorname").innerHTML="Q Icon Blue";


    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753507/q_ion_blue_o4pb48.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753507/q_ion_blue_defaultalloy_xzz9hf.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753509/q_ion_blue_leftsidebacklowview_v53lo6.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753512/q_ion_blue_sideview_umyyds.jpg";

    document.querySelector("#purpleplatetwo").style.borderBottom = "1px solid white";
    // document.querySelector("#purpleplateone,#purpleplatethree,#purpleplatefour,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplateone").style.border = "none";
    document.querySelector("#purpleplatethree").style.border = "none";
    document.querySelector("#purpleplatefour").style.border = "none";
    document.querySelector("#purpleplatefive").style.border = "none";
    document.querySelector("#purpleplatesix").style.border = "none";

  }


  const PlasmaBlue = () => {

    setexteriorcolor('plasmablue');
    setprev('plasmablue');

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760096/plasma_blue_plate_information_dgkfeh.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Plasma Blue";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Plasma Blue was designed to give extraordinary visual depth with a deep liquid look. This lustrous mid blue communicates surface movement with a fine metallic shimmer and subtle red side tone unlike any previous Aston Martin shade. In bright sunlight, colour is emphasised – giving a pleasing radiancy. While in darker environments, both strong light-to-dark travel and true visual lustre are maintained.";

    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760118/plasma_blue_wnqxx3.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760113/plasma_blue_defaultalloy_gcpfrr.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760102/plasma_blue_leftsidebacklowview_j3ympm.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760094/plasma_blue_sideview_ltvnwf.jpg";
    document.querySelector("#purpleplatethree").style.borderBottom = "1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplateone,#purpleplatefour,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplatetwo").style.border = "none";
    document.querySelector("#purpleplateone").style.border = "none";
    document.querySelector("#purpleplatefour").style.border = "none";
    document.querySelector("#purpleplatefive").style.border = "none";
    document.querySelector("#purpleplatesix").style.border = "none";
  }


  const ElwoodBlue = () => {

    setexteriorcolor('elwoodblue');
    setprev('elwoodblue');


    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763701/elwood_blue_plate_information_h7w3iz.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Elwood Blue";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elwood Blue was made famous in 2009 when, as part of its engineering sign-off, a prototype V12 Vantage won its class at the N24 race in Germany.";


    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763657/elwood_blue_ck7zxd.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763664/elwood_blue_defaultalloy_x87q31.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763674/elwood_blue_leftsidebacklowview_y031pj.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763710/elwood_blue_sideview_gq1gpa.jpg";
    document.querySelector("#purpleplatefour").style.borderBottom = "1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplateone,#purpleplatefive,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplatetwo").style.border = "none";
    document.querySelector("#purpleplatethree").style.border = "none";
    document.querySelector("#purpleplateone").style.border = "none";
    document.querySelector("#purpleplatefive").style.border = "none";
    document.querySelector("#purpleplatesix").style.border = "none";
  }

  const QDigitalViolet = () => {

    setexteriorcolor('qdigitalviolet');
    setprev('qdigitalviolet');



    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769355/q_digital_violet_plate_information_swbua1.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Digital Violet";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Digital Violet is a new, super saturated metallic with unprecedented travel. A futuristic interpretation of sport and performance inspired by the world of contemporary luxury athleisure. A colour that turns heads maintaining an unmistakable elegance.";


    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769350/q_digital_violet_mlj7b9.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769350/q_digital_violet_defaultalloy_vsgfsp.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769351/q_digital_violet_leftsidebacklowview_vunrfq.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769357/q_digital_violet_sideview_uqah2r.jpg";
    document.querySelector("#purpleplatefive").style.borderBottom = "1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplatefour,#purpleplateone,#purpleplatesix").style.border="none";
    document.querySelector("#purpleplatetwo").style.border = "none";
    document.querySelector("#purpleplatethree").style.border = "none";
    document.querySelector("#purpleplatefour").style.border = "none";
    document.querySelector("#purpleplateone").style.border = "none";
    document.querySelector("#purpleplatesix").style.border = "none";
  }

  const StormPurple = () => {

    setexteriorcolor('stormpurple');
    setprev('stormpurple');


    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770835/storm_purple_plate_information_dfsbgc.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Storm Purple";


    document.querySelector("#colorcardcolorinformation").innerHTML = "Storm Purple embodies the equilibrium of contemporary performance and ultra-luxury in an unexpected purple nuance. Strong and vibrant under direct light, exquisite modern refinement when in shadow.";



    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770812/storm_purple_le1tqf.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770816/storm_purple_defaultalloy_wxtnuf.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770821/storm_purple_leftsidebacklowview_vqoaym.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770841/storm_purple_sideview_ioicvs.jpg";

    document.querySelector("#purpleplatesix").style.borderBottom = "1px solid white";
    // document.querySelector("#purpleplatetwo,#purpleplatethree,#purpleplatefour,#purpleplatefive,#purpleplateone").style.border="none";
    document.querySelector("#purpleplatetwo").style.border = "none";
    document.querySelector("#purpleplatethree").style.border = "none";
    document.querySelector("#purpleplatefour").style.border = "none";
    document.querySelector("#purpleplatefive").style.border = "none";
    document.querySelector("#purpleplateone").style.border = "none";

  }


  const Blackgrey = () => {
    document.querySelector(".colorplatediv").style.display = "block";
    // document.querySelector(".colorplatediv").style.display="none";
    document.querySelector("#interiorwindow").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";


  }







  const crossbutton = () => {
    //   colorinfowindow= document.querySelector(".colorinfowindow");
    //  colorinfowindow.style.display="none";

    // colorinfowindow=document.querySelector(".colorinfowindow");
    // if(colorinfowindow)
    // {
    //   colorinfowindow.style.display="none";
    // }

    document.querySelector(".colorinfowindow").style.display = "none";
  }



  const showinfo = () => {
    document.querySelector(".colorinfowindow").style.display = "block";
    // console.log("showinfo")
  }

  // var check=true;
  const [paint, setpaint] = useState('true')
  const HandleShowPaintSection = () => {
    setexteriorpackagepointer('false')
    document.querySelector("#lowerpackagediv").style.display = "none";
    document.querySelector("#exteriorpackagewindow").style.display = "none";
    document.querySelector(".colorplatediv").style.display = "block";

    document.querySelector("#wheelpackagediv").style.display = "none";
    document.querySelector("#wheels").style.borderBottom = "";

    document.querySelector("#roof").style.borderBottom = "";
    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#grillefinish").style.borderBottom="";
    
    document.querySelector("#brakes").style.borderBottom = "";
    document.querySelector("#glazing").style.borderBottom = "";
    document.querySelector("#glazingpackagediv").style.display = "none";

    
    
    
        if (selectedpaint === 'black') {
          document.querySelector(".colorplatediv").style.display = "block";
          document.querySelector("#purpleblueplatessection").style.display = "none";
        }
    
        if (selectedpaint === 'blue') {
          document.querySelector(".colorplatediv").style.display = "none";
          document.querySelector("#purpleblueplatessection").style.display = "block";
        }


    if (paint === 'true') {
      document.querySelector("#paintbar").style.display = "block";
      // document.querySelector("#exteriorpackages,#liveries,#grillefinish,#roof,#wheels,#glazing,#doorhandles,#accesories").style.display = "none";

     
      setpaint('false')

    }

    else if (paint === 'false') {
      // document.querySelector("#exteriorpackages,#liveries,#grillefinish,#roof,#wheels,#glazing,#doorhandles,#accesories").style.display = "";
      document.querySelector("#paintbar").style.display = "none";
    
      setpaint('true')
    }

 
  }

  const [interior,setinterior]=useState("seating");


  const ShowInterior = () => {
    document.querySelector("#interiorwindow").style.display = "block";
    document.querySelector("#seatingdiv").style.display = "block";

    document.querySelector("#exterior").style.color = "#acaead";
    document.querySelector("#interior").style.color = "white";

    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";


    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776703/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_jesoyi.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776698/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_hlwm5h.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776700/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_kqwvs9.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776702/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_ckl181.jpg";

    document.querySelector("#interior").style.background = "#292b2d";
    document.querySelector("#exterior,#interioroptions,#personalisation,#accessories").style.background = "#3c3f3e";


    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#brakepackagediv").style.display = "none";

    document.querySelector("#brakes").style.borderBottom = "";

    if(interior==='seating')
      {
        document.querySelector("#seatingp").style.borderBottom="2px solid white";
        document.querySelector("#seatingdiv").style.display="block";
      }
      if(interior==='primary')
        {
          document.querySelector("#primarycolorp").style.borderBottom="2px solid white";
          document.querySelector("#primarycolorwindow").style.display="block";
        }
  
        if(interior==='secondary')
          {
            document.querySelector("#secondarycolorp").style.borderBottom="2px solid white";
            document.querySelector("#secondarycolorwindow").style.display="block";
          }
      


// document.querySelector("#seatingp").style.borderBottom="2px solid white";

  }

  const ShowBlackandGreybydefault = () => {
    document.querySelector(".colorplatediv").style.display = "block";
    document.querySelector("#interiorwindow").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";
    document.querySelector("#colorcard").style.width = "47vw";
    document.querySelector("#colorcard").style.transform = "translate(54%,-8%)";
    // document.querySelector("#colorcard").style.left="230px";

    document.querySelector("#colorimage img").style.width = "29%";
    document.querySelector("#colorinformation").style.width = "469px";
    document.querySelector("#colorinformation").style.left = "209px";

    // dont show interior window by default when entering start configuration
    document.querySelector("#interiorwindow").style.display = "none";
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_nuubxl.jpg";
    document.querySelector("#colorimage img").style.background = "";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Buckinghamshire Green";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Originally used for the launch of the 1988 Aston Martin Virage, Buckinghamshire Green is a classic and timeless colour inspired by the golden age of motorsport. A deep, rich, tonality with a fine metallic effect - this colour perfectly suits the performance prowess of any Aston Martin you care to mention.";

    const image1 = document.getElementById("img1");
    image1.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879472/q_buckinghamshire_green_casx55.jpg";

    const image2 = document.getElementById("img2");
    image2.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879473/q_buckinghamshire_green_defaultalloy_y2kp7g.jpg";

    const image3 = document.getElementById("img3");
    image3.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879472/q_buckinghamshire_green_leftsidebacklowview_stqcla.jpg";

    const image4 = document.getElementById("img4");
    image4.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879473/q_buckinghamshire_green_sideview_giyj6r.jpg";

    document.querySelector("#exterior").style.background = "#292b2d";
    document.querySelector("#exterior").style.color = "white";
    document.querySelector("#interior").style.color = "#acaead";
    document.querySelector("#interior,#interioroptions,#personalisation,#accessories").style.background = "#3d403f";

    document.querySelector("#primarycolorwindow").style.display = "none";

    document.querySelector(".features p").style.color = "white";
    // document.querySelector(".features p").style.background="#3d403f";


    // remove the secondary color plates and information when clicked on exterior
    document.querySelector("#secondarycolorwindow").style.display = "none";

   
  

  }


  const ShowPurpleandBlue = () => {
    document.querySelector("#purpleblueplatessection").style.display = "block";
    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#interiorwindow").style.display = "none";
    document.querySelector("#purplesandblues").style.borderBottom = "1px solid white";
  }


  const [exteriorpackagepointer, setexteriorpackagepointer] = useState('true');
  const [pack, setpack] = useState("lower");

  const ShowExteriorPackage = () => {
    setpaint('true')

    document.querySelector("#paintsection").style.display = "none";
    document.querySelector("#lowerpackagediv").style.display = "block";
    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#lowerbodypackage").style.borderBottom = "2px solid white";
    document.querySelector("#lowerbodypackage").style.color = "white";



    document.querySelector("#colorcard").style.width = "87vw";
    document.querySelector("#colorcard").style.height = "72vh";
    document.querySelector("#colorcard").style.transform = "translate(8%,-8%)";


    document.querySelector("#colorimage img").style.width = "49em";
    document.querySelector("#colorimage img").style.height = "34em";

    document.querySelector("#colorinformation").style.width = "29em";
    document.querySelector("#colorinformation").style.left = "50em";


    document.querySelector("#colorimage img").src = "q_quantum_silver_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#grillefinishpackagediv").style.display = "none";
    document.querySelector("#upperpackagediv").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";


    document.querySelector("#wheels").style.borderBottom = "";

    document.querySelector("#wheelpackagediv").style.display = "none";
    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#brakepackagediv").style.display = "none";
    document.querySelector("#glazingpackagediv").style.display = "none";
    document.querySelector("#brakes").style.borderBottom = "";
    document.querySelector("#taillights").style.borderBottom = "";
    document.querySelector("#glazing").style.borderBottom = "";






    // console.log(exteriorpackagepointer)
    if (exteriorpackagepointer === 'true') {
      document.querySelector("#exteriorpackagewindow").style.display = "block";
      setexteriorpackagepointer('false');
    }

    if (exteriorpackagepointer === 'false') {
      document.querySelector("#exteriorpackagewindow").style.display = "none";
      setexteriorpackagepointer('true');

    }

    const colorinfowindowx = document.querySelector(".colorinfowindow")

    // colorinfowindowx=document.querySelector(".colorinfowindow");
    if (colorinfowindowx) {

      colorinfowindowx.style.display = "none";
    }

    else { console.log("still not rendered") }
    // 

    const roofpackagediv = document.querySelector("#roofpackagediv")
    if (roofpackagediv) {

      roofpackagediv.style.display = "none";
    }
    //


    // if(pack==='lower')
    //   {
    //     document.querySelector("#lowerbodypackage").style.borderBottom="2px solid white";
    //     document.querySelector("#upperbodypackage").style.borderBottom="none";
    //   }

    //   if(pack==='upper')
    //     {
    //       document.querySelector("#upperbodypackage").style.borderBottom="2px solid white";
    //       document.querySelector("#lowerbodypackage").style.borderBottom="none";
    //     }

    // check=false;
  }

  const [prev, setprev] = useState("qbuckinghamshiregreen")

  const HoverSatinTitaniumGrey = () => {

    document.querySelector("#colortype").innerHTML = "Satin";
    document.querySelector("#colorname").innerHTML = "Q Satin Titanium Grey";

    document.querySelector("#colorimage img").src = "q_satin_titanium_grey_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Satin Titanium Grey";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Titanium Grey has a warm and green-ish hue that makes it both refined and distinctive. Working particularly well in a Satin finish, the coarse metallic effect shines across surfaces and works to flatters any Aston Martin’s sculpted forms.";

    document.querySelector("#colorplateinfobuttonsatintitaniumgrey").style.display = "block";
    document.querySelector("#colorplateimage img").src = "q_satin_titanium_grey_plate.jpg";

    document.querySelector("#colorplateinfobutton").style.display = "block";


  }

  const LeaveSatinTitaniumGrey = () => {
    // if
    // document.querySelector("#colorplateimage img").src="q_satin_titanium_grey_plate.jpg";

    document.querySelector("#colorplateinfobuttonsatintitaniumgrey").style.display = "none";
    document.querySelector("#colorplateinfobutton").style.display = "none";



    if (prev === 'qbuckinghamshiregreen') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_nuubxl.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Buckinghamshire Green";




    }

    if (prev === 'qsatintitaniumgrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_titanium_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Titanium Grey";




    }
    if (prev === 'qsatinxenongrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_xenon_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Xenon Grey";




    }

    if (prev === 'qcasinoroyale') {
      document.querySelector("#colorplateimage img").src = "q_casino_royale_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Casino Royale";
      document.querySelector("#colorplateinfobutton").style.display = "block";




    }

    if (prev === 'qquantumsilver') {
      document.querySelector("#colorplateimage img").src = "q_quantum_silver_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Quantum Silver";



    }

    if (prev === 'qseychellesblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719458/q_seychelles_blue_plate_geohri.jpg";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Seychelles Blue";



    }

    if (prev === 'qionblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753508/q_ion_blue_plate_djzvfu.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Ion Blue";



    }

    if (prev === 'plasmablue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760107/plasma_blue_plate_facxgz.jpg";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Plasma Blue";



    }
    if (prev === 'elwoodblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763683/elwood_blue_plate_xvrcd7.jpg";

      document.querySelector("#colortype").innerHTML = "Racing Line";
      document.querySelector("#colorname").innerHTML = "Elwood Blue";




    }

    if (prev === 'qdigitalviolet') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769353/q_digital_violet_plate_idnssn.jpg";

      // document.querySelector("#colorimage img").src="q_digital_violet_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Q Digital Violet";
      document.querySelector("#colortype").innerHTML = "Special";
      document.querySelector("#colorname").innerHTML = "Q Digital Violet";


    }

    if (prev === 'stormpurple') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770826/storm_purple_plate_uvqadi.jpg";

      // document.querySelector("#colorimage img").src="storm_purple_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Storm Purple";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Storm Purple";



    }



  }

  const HoverSatinXenonGrey = () => {
    document.querySelector("#colorplateinfobuttonsatinxenongrey").style.display = "block";

    document.querySelector("#colortype").innerHTML = "Satin";
    document.querySelector("#colorname").innerHTML = "Q Satin Xenon Grey";


    document.querySelector("#colorplateimage img").src = "q_satin_xenon_grey_plate.jpg";
    document.querySelector("#colorplateinfobutton").style.display = "block";

    document.querySelector("#colorimage img").src = "q_satin_xenon_grey_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Satin Xenon Grey";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Xenon Grey is a striking and visually arresting dark neutral. A statement colour, it has a unique and mineral-like quality that creates a sparkle seldom seen in any grey paint. It is particularly unique with a satin finish. Inspired by the element Xenon, the colour employs multiple semi-coarse and super-coarse coated aluminium's that appear to almost glow blue at certain angles of view. This technology emphasises the crafted contours of an Aston Martin's sculpted body sides while serving as a dramatic design showpiece in its own right.";


  }

  const LeaveSatinXenonGrey = () => {
    document.querySelector("#colorplateinfobuttonsatinxenongrey").style.display = "none";
    document.querySelector("#colorplateinfobutton").style.display = "none";


    if (prev === 'qbuckinghamshiregreen') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_nuubxl.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Buckinghamshire Green";




    }

    if (prev === 'qsatintitaniumgrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_titanium_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Titanium Grey";




    }
    if (prev === 'qsatinxenongrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_xenon_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Xenon Grey";




    }

    if (prev === 'qcasinoroyale') {
      document.querySelector("#colorplateimage img").src = "q_casino_royale_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Casino Royale";
      document.querySelector("#colorplateinfobutton").style.display = "block";



    }

    if (prev === 'qquantumsilver') {
      document.querySelector("#colorplateimage img").src = "q_quantum_silver_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Quantum Silver";



    }

    if (prev === 'qseychellesblue') {
      document.querySelector("#colorplateimage img").src = "q_seychelles_blue_plate.jpghttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719458/q_seychelles_blue_plate_geohri.jpg";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Seychelles Blue";



    }

    if (prev === 'qionblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753508/q_ion_blue_plate_djzvfu.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Ion Blue";



    }

    if (prev === 'plasmablue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760107/plasma_blue_plate_facxgz.jpg";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Plasma Blue";



    }
    if (prev === 'elwoodblue') {
      document.querySelector("#colorplateimage img").src = "elhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763683/elwood_blue_plate_xvrcd7.jpg";

      document.querySelector("#colortype").innerHTML = "Racing Line";
      document.querySelector("#colorname").innerHTML = "Elwood Blue";




    }

    if (prev === 'qdigitalviolet') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769353/q_digital_violet_plate_idnssn.jpg";

      // document.querySelector("#colorimage img").src="q_digital_violet_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Q Digital Violet";
      document.querySelector("#colortype").innerHTML = "Special";
      document.querySelector("#colorname").innerHTML = "Q Digital Violet";



    }

    if (prev === 'stormpurple') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770826/storm_purple_plate_uvqadi.jpg";

      // document.querySelector("#colorimage img").src="storm_purple_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Storm Purple";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Storm Purple";



    }


  }

  const HoverQuantumSilver = () => {
    document.querySelector("#colorplateimage img").src = "q_quantum_silver_plate.jpg";
    document.querySelector("#colortype").innerHTML = "Icon";
    document.querySelector("#colorname").innerHTML = "Q Quantum Silver";

    //remove the infoinformation button because we dont have information about the color 
    document.querySelector("#colorplateinfobutton").style.display = "none";

    document.querySelector("#colorimage img").src = "q_seychelles_blue_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Seychelles Blue";
    document.querySelector("#colorcardcolorinformation").innerHTML = "A very rare Aston Martin colour-to-date, made most famous by a member of the British Royal family and a DB6 Volante.";
  }

  const LeaveQuantumSilver = () => {
    // document.querySelector("#colorplateinfobuttonsatinxenongrey").style.display="none";
    // document.querySelector("#colorplateinfobutton").style.display="none";


    if (prev === 'qbuckinghamshiregreen') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_nuubxl.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Buckinghamshire Green";




    }

    if (prev === 'qsatintitaniumgrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_titanium_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Titanium Grey";




    }
    if (prev === 'qsatinxenongrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_xenon_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Xenon Grey";




    }

    if (prev === 'qcasinoroyale') {
      document.querySelector("#colorplateimage img").src = "q_casino_royale_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Casino Royale";
      document.querySelector("#colorplateinfobutton").style.display = "block";




    }

    if (prev === 'qquantumsilver') {
      document.querySelector("#colorplateimage img").src = "q_quantum_silver_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Quantum Silver";



    }

    if (prev === 'qseychellesblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719458/q_seychelles_blue_plate_geohri.jpg";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Seychelles Blue";



    }

    if (prev === 'qionblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753508/q_ion_blue_plate_djzvfu.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Ion Blue";



    }

    if (prev === 'plasmablue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760107/plasma_blue_plate_facxgz.jpg";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Plasma Blue";



    }
    if (prev === 'elwoodblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763683/elwood_blue_plate_xvrcd7.jpg";

      document.querySelector("#colortype").innerHTML = "Racing Line";
      document.querySelector("#colorname").innerHTML = "Elwood Blue";




    }

    if (prev === 'qdigitalviolet') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769353/q_digital_violet_plate_idnssn.jpg";

      // document.querySelector("#colorimage img").src="q_digital_violet_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Q Digital Violet";
      document.querySelector("#colortype").innerHTML = "Special";
      document.querySelector("#colorname").innerHTML = "Q Digital Violet";



    }

    if (prev === 'stormpurple') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770826/storm_purple_plate_uvqadi.jpg";

      // document.querySelector("#colorimage img").src="storm_purple_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Storm Purple";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Storm Purple";



    }


  }

  const HoverCasinoRoyale = () => {

    document.querySelector("#colorplateimage img").src = "q_casino_royale_plate.jpg";
    document.querySelector("#colortype").innerHTML = "Icon";
    document.querySelector("#colorname").innerHTML = "Q Casino Royale";

    //remove the infoinformation button because we dont have information about the color 
    document.querySelector("#colorplateinfobutton").style.display = "block";
    document.querySelector("#colorplateinfobuttoncasinoroyale").style.display = "block";

    document.querySelector("#colorimage img").src = "q_casino_royale_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Q Casino Royale";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Named after the film it was first introduced in, Casino Royale is a colour exhibited on James Bonds DBS Coupe. This is a sophisticated, understated deep Silver.";

  }

  const LeaveCasinoRoyale = () => {
    document.querySelector("#colorplateinfobutton").style.display = "none";
    document.querySelector("#colorplateinfobuttoncasinoroyale").style.display = "none";
    // document.querySelector("#colorplateinfobutton").style.display="none";




    if (prev === 'qbuckinghamshiregreen') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_nuubxl.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Buckinghamshire Green";




    }

    if (prev === 'qsatintitaniumgrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_titanium_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Titanium Grey";




    }
    if (prev === 'qsatinxenongrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_xenon_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Xenon Grey";




    }

    if (prev === 'qcasinoroyale') {
      document.querySelector("#colorplateimage img").src = "q_casino_royale_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Casino Royale";
      document.querySelector("#colorplateinfobutton").style.display = "block";




    }

    if (prev === 'qquantumsilver') {
      document.querySelector("#colorplateimage img").src = "q_quantum_silver_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Quantum Silver";



    }

    if (prev === 'qseychellesblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719458/q_seychelles_blue_plate_geohri.jpg";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Seychelles Blue";



    }

    if (prev === 'qionblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753508/q_ion_blue_plate_djzvfu.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Ion Blue";



    }

    if (prev === 'plasmablue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760107/plasma_blue_plate_facxgz.jpg";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Plasma Blue";



    }
    if (prev === 'elwoodblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763683/elwood_blue_plate_xvrcd7.jpg";

      document.querySelector("#colortype").innerHTML = "Racing Line";
      document.querySelector("#colorname").innerHTML = "Elwood Blue";




    }

    if (prev === 'qdigitalviolet') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769353/q_digital_violet_plate_idnssn.jpg";

      // document.querySelector("#colorimage img").src="q_digital_violet_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Q Digital Violet";
      document.querySelector("#colortype").innerHTML = "Special";
      document.querySelector("#colorname").innerHTML = "Q Digital Violet";



    }

    if (prev === 'stormpurple') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770826/storm_purple_plate_uvqadi.jpg";

      // document.querySelector("#colorimage img").src="storm_purple_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Storm Purple";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Storm Purple";



    }



  }
  const HoverInfo = () => {

    if (prev === 'qbuckinghamshiregreen') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_nuubxl.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Buckinghamshire Green";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_information_khmceo.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Q Buckinghamshire Green";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Originally used for the launch of the 1988 Aston Martin Virage, Buckinghamshire Green is a classic and timeless colour inspired by the golden age of motorsport. A deep, rich, tonality with a fine metallic effect - this colour perfectly suits the performance prowess of any Aston Martin you care to mention.";


    }

    if (prev === 'qsatintitaniumgrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_titanium_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Titanium Grey";

      document.querySelector("#colorimage img").src = "q_satin_titanium_grey_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Q Satin Titanium Grey";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Titanium Grey has a warm and green-ish hue that makes it both refined and distinctive. Working particularly well in a Satin finish, the coarse metallic effect shines across surfaces and works to flatters any Aston Martin’s sculpted forms.";


    }
    if (prev === 'qsatinxenongrey') {
      document.querySelector("#colorplateimage img").src = "q_satin_xenon_grey_plate.jpg";
      document.querySelector("#colorplateinfobutton").style.display = "block";

      document.querySelector("#colortype").innerHTML = "Satin";
      document.querySelector("#colorname").innerHTML = "Q Satin Xenon Grey";

      document.querySelector("#colorimage img").src = "q_satin_xenon_grey_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Q Satin Xenon Grey";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Xenon Grey is a striking and visually arresting dark neutral. A statement colour, it has a unique and mineral-like quality that creates a sparkle seldom seen in any grey paint. It is particularly unique with a satin finish. Inspired by the element Xenon, the colour employs multiple semi-coarse and super-coarse coated aluminium's that appear to almost glow blue at certain angles of view. This technology emphasises the crafted contours of an Aston Martin's sculpted body sides while serving as a dramatic design showpiece in its own right.";


    }

    if (prev === 'qcasinoroyale') {
      document.querySelector("#colorplateimage img").src = "q_casino_royale_plate.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Casino Royale";
      document.querySelector("#colorplateinfobutton").style.display = "block";


      document.querySelector("#colorimage img").src = "q_casino_royale_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Q Casino Royale";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Named after the film it was first introduced in, Casino Royale is a colour exhibited on James Bonds DBS Coupe. This is a sophisticated, understated deep Silver.";

    }

    if (prev === 'qquantumsilver') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677353/q_quantum_silver_plate_j5nl1q.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Quantum Silver";

      //   document.querySelector("#colorimage img").src="q_seychelles_blue_plate_information.jpg";
      //  document.querySelector("#colorcardcolorname").innerHTML="Q Seychelles Blue";
      //  document.querySelector("#colorcardcolorinformation").innerHTML="A very rare Aston Martin colour-to-date, made most famous by a member of the British Royal family and a DB6 Volante.";

    }

    if (prev === 'qseychellesblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719458/q_seychelles_blue_plate_geohri.jpg";

      document.querySelector("#colortype").innerHTML = "Provenance";
      document.querySelector("#colorname").innerHTML = "Q Seychelles Blue";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719460/q_seychelles_blue_plate_information_uobwvf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Q Seychelles Blue";
      document.querySelector("#colorcardcolorinformation").innerHTML = "A very rare Aston Martin colour-to-date, made most famous by a member of the British Royal family and a DB6 Volante.";

    }

    if (prev === 'qionblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753508/q_ion_blue_plate_djzvfu.jpg";

      document.querySelector("#colortype").innerHTML = "Icon";
      document.querySelector("#colorname").innerHTML = "Q Ion Blue";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753510/q_ion_blue_plate_information_ausgnr.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Q Ion Blue";
      document.querySelector("#colorcardcolorinformation").innerHTML = "This colour has extraordinary visual depth - and looks like the paintwork could almost be inches thick. A high concentration of innovative blue effect technologies give a remarkably rich, dark, side tone - while the highlight pops in a vibrant shade of cobalt.";

    }

    if (prev === 'plasmablue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760107/plasma_blue_plate_facxgz.jpg";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Plasma Blue";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760096/plasma_blue_plate_information_dgkfeh.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Plasma Blue";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Plasma Blue was designed to give extraordinary visual depth with a deep liquid look. This lustrous mid blue communicates surface movement with a fine metallic shimmer and subtle red side tone unlike any previous Aston Martin shade. In bright sunlight, colour is emphasised – giving a pleasing radiancy. While in darker environments, both strong light-to-dark travel and true visual lustre are maintained.";

    }
    if (prev === 'elwoodblue') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763683/elwood_blue_plate_xvrcd7.jpg";

      document.querySelector("#colortype").innerHTML = "Racing Line";
      document.querySelector("#colorname").innerHTML = "Elwood Blue";

      document.querySelector("#colorimage img").src = "elwood_blue_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Elwood Blue";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Elwood Blue was made famous in 2009 when, as part of its engineering sign-off, a prototype V12 Vantage won its class at the N24 race in Germany.";


    }

    if (prev === 'qdigitalviolet') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769353/q_digital_violet_plate_idnssn.jpg";

      // document.querySelector("#colorimage img").src="q_digital_violet_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Q Digital Violet";
      document.querySelector("#colortype").innerHTML = "Special";
      document.querySelector("#colorname").innerHTML = "Q Digital Violet";

      document.querySelector("#colorimage img").src = "q_digital_violet_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Q Digital Violet";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Digital Violet is a new, super saturated metallic with unprecedented travel. A futuristic interpretation of sport and performance inspired by the world of contemporary luxury athleisure. A colour that turns heads maintaining an unmistakable elegance.";

    }

    if (prev === 'stormpurple') {
      document.querySelector("#colorplateimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770826/storm_purple_plate_uvqadi.jpg";

      // document.querySelector("#colorimage img").src="storm_purple_plate_information.jpg";
      // document.querySelector("#colorcardcolorname").innerHTML="Storm Purple";

      document.querySelector("#colortype").innerHTML = "Signature Metallic";
      document.querySelector("#colorname").innerHTML = "Storm Purple";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770835/storm_purple_plate_information_dfsbgc.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Storm Purple";


      document.querySelector("#colorcardcolorinformation").innerHTML = "Storm Purple embodies the equilibrium of contemporary performance and ultra-luxury in an unexpected purple nuance. Strong and vibrant under direct light, exquisite modern refinement when in shadow.";

    }
  }

  const HoverSeychellesBlue = () => {
    //    const colorplate = document.querySelector("#colorplateimage img");
    //    const colorplateinfobuttonseychellesblue=document.querySelector("#colorplateinfobuttonseychellesblue");
    //    // if(colorplateinfobuttonseychellesblue){
    //    //  colorplateinfobuttonseychellesblue.style.display="block";
    //    // }

    //  const colortype=document.querySelector("#colortype")
    //  const colorname=document.querySelector("#colorname")

    //  const colorimageimg=document.querySelector("#colorimage img")
    //  const colorcardcolorname=document.querySelector("#colorcardcolorname")

    //  const colorcardcolorinformation=document.querySelector("#colorcardcolorinformation")





    //  if(colorplate && colorplateinfobuttonseychellesblue && colortype && colorname && colorimageimg && colorcardcolorname && colorcardcolorinformation){
    //  colorplateinfobuttonseychellesblue.style.display="block";
    //  colorplate.src="q_seychelles_blue_plate.jpg";

    //  colortype.innerHTML="Provenance";
    //  colorname.innerHTML="Q Seychelles Blue";

    //  colorimageimg.src="q_seychelles_blue_plate_information.jpg";
    //  colorcardcolorname.innerHTML="Q Seychelles Blue";
    //  colorcardcolorinformation.innerHTML="A very rare Aston Martin colour-to-date, made most famous by a member of the British Royal family and a DB6 Volante.";

    //  }




  }

  const LeaveSeychellesBlue = () => {

  }

  const [grille, setgrille] = useState("bright");
  const ShowGrilleFinish = () => {
    document.querySelector("#grillefinishpackagediv").style.display = "block";
    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#colorcard").style.width = "84vw";
    document.querySelector("#colorcard").style.transform = "translate(9%,-8%)";
    document.querySelector("#colorimage img").style.width = "47em";
    document.querySelector("#colorinformation").style.left = "48em";
    document.querySelector("#colorinformation").style.top = "-33em";
    document.querySelector("#colorinformation").style.width = "29em";

    // document.querySelector("#grillefinish").style.borderBottom="2px solid white";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879503/q_buckinghamshire_green_bclbp_bcubp_bright_information_plate_aigbvy.jpg";
    document.querySelector("#purpleblueplatessection").style.display = "none";

    document.querySelector("#wheels").style.borderBottom = "";
    document.querySelector("#wheelpackagediv").style.display = "none";
    document.querySelector("#taillights").style.borderBottom = "";
    document.querySelector("#glazing").style.borderBottom = "";




    const upper = document.querySelector("#upperbodypackagediv");
    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#brakepackagediv").style.display = "none";
    document.querySelector("#lowerpackagediv").style.display = "none";
    document.querySelector("#upperpackagediv").style.display = "none";
    document.querySelector("#taillightpackagediv").style.display = "none";
    document.querySelector("#glazingpackagediv").style.display = "none";


    document.querySelector("#brakes").style.borderBottom = "";





    if (upper) {
      upper.style.display = "none";

    }


    if (document.querySelector("#roofpackagediv")) {

      document.querySelector("#roofpackagediv").style.display = "none";
    }


    // console.log("alive");
    if (grille === 'bright') {
      document.querySelector("#grillefinishcolorborderone").style.borderBottom = "2px solid white";
      document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#grillefinishcolorborderone").style.borderBottom = "none";
      document.querySelector("#grillefinishcolorbordertwo").style.borderBottom = "2px solid white";
    }

  }

  const ShowRoof = () => {
    document.querySelector("#roofpackagediv").style.display = "block";
    document.querySelector("#roof").style.borderBottom = "2px solid white";
    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#roofcolorborderone").style.borderBottom = "2px solid white";


    document.querySelector("#colorcard").style.width = "87vw";
    document.querySelector("#colorcard").style.height = "72vh";
    document.querySelector("#colorcard").style.transform = "translate(8%,-8%)";


    document.querySelector("#colorimage img").style.width = "49em";
    document.querySelector("#colorimage img").style.height = "34em";

    document.querySelector("#colorinformation").style.width = "29em";
    document.querySelector("#colorinformation").style.left = "50em";


    // document.querySelector("#colorimage img").src="q_quantum_silver_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#wheels").style.borderBottom = "";
    document.querySelector("#taillights").style.borderBottom = "";
    document.querySelector("#grillefinish").style.borderBottom="";


    document.querySelector("#wheelpackagediv").style.display = "none";

    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black";
    document.querySelector("#colorcardcolorinformation").innerHTML = "A deep gloss black finish to the roof panel";

    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#lowerpackagediv").style.display = "none";
    document.querySelector("#upperpackagediv").style.display = "none";
    document.querySelector("#taillightpackagediv").style.display = "none";
    document.querySelector("#roofpackagediv").style.display = "block";
    document.querySelector("#brakepackagediv").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";
    document.querySelector("#glazingpackagediv").style.display = "none";


    document.querySelector("#brakes").style.borderBottom = "";





    if (exteriorcolor === 'qquantumsilver') {



      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854134/q_quantum_silver_gloss_black_roof_plate_infomation_spwspr.jpg";

    }

    if (exteriorcolor === 'qsatintitaniumgrey') {


      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854133/q_satin_titanium_grey_gloss_black_roof_plate_information_barfv6.jpg";

    }

    if (exteriorcolor === 'qsatinxenongrey') {


      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854134/q_satin_xenon_grey_gloss_black_roof_plate_information_zbcdx9.jpg";

    }

    if (exteriorcolor === 'qcasinoroyale') {


      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854133/q_casino_royale_gloss_black_roof_plate_information_tss0jh.jpg";

    }


    if (exteriorcolor === 'qseychellesblue') {


      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720855903/q_seychelles_blue_gloss_black_roof_plate_information_ksdmvr.jpg";

    }

    if (exteriorcolor === 'qionblue') {

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856514/q_ion_blue_gloss_black_roof_plate_information_prziv5.jpg";

    }

    if (exteriorcolor === 'plasmablue') {


      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/plasma_blue_gloss_black_roof_plate_information_cep2oc.jpg";

    }

    if (exteriorcolor === 'elwoodblue') {


      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/elwood_blue_gloss_black_roof_plate_information_zfvan8.jpg";

    }

    if (exteriorcolor === 'qdigitalviolet') {

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/q_digital_violet_gloss_black_roof_plate_information_yokqpz.jpg";
    }

    if (exteriorcolor === 'stormpurple') {

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856495/storm_purple_gloss_black_roof_plate_information_jbdqey.jpg";
    }
  }


  const ShowWheels = () => {
    document.querySelector("#wheelpackagediv").style.display = "block";
    document.querySelector("#wheels").style.borderBottom = "2px solid white";
    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#upperpackagediv").style.display = "none";
    document.querySelector("#lowerpackagediv").style.display = "none";
    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#taillights").style.borderBottom = "";
    document.querySelector("#grillefinish").style.borderBottom="";




    document.querySelector("#colorcard").style.width = "87vw";
    document.querySelector("#colorcard").style.height = "73vh";
    document.querySelector("#colorcard").style.transform = "translate(8%,-8%)";


    document.querySelector("#colorimage img").style.width = "49em";
    document.querySelector("#colorimage img").style.height = "34em";

    document.querySelector("#colorinformation").style.width = "29em";
    document.querySelector("#colorinformation").style.left = "50em";

    // wheels dont have background hence we have added a brackground 
    document.querySelector("#colorimage img").style.background = "#cccccc";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720866008/y_spoke_wheel_satin_bronze_plate_information_sdrq77.png";
    document.querySelector('#colorcardcolorname').innerHTML = '21" Y-spoke wheel - Satin Bronze';
    document.querySelector("#colorcardcolorinformation").innerHTML = 'A 21" wheel designed for maximum presence. Finished in a Satin Bronze for a contemporary, sporting look.';


    document.querySelector("#roof").style.borderBottom = "";
    document.querySelector("#glazing").style.borderBottom = "";

    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#brakepackagediv").style.display = "none";
    document.querySelector("#upperpackagediv").style.display = "none";
    document.querySelector("#lowerpackagediv").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";
    document.querySelector("#glazingpackagediv").style.display = "none";


    document.querySelector("#brakes").style.borderBottom = "";




  }

  const ShowBrakes = () => {
    document.querySelector("#brakes").style.borderBottom = "2px solid white";
    document.querySelector("#roof").style.borderBottom = "";
    document.querySelector("#wheels").style.borderBottom = "";
    document.querySelector("#taillights").style.borderBottom = "";
    document.querySelector("#glazing").style.borderBottom = "";



    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#wheelpackagediv").style.display = "none";
    document.querySelector("#glazingpackagediv").style.display = "none";

    document.querySelector("#brakepackagediv").style.display = "block";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720869362/carbon_ceramic_brakes_plate_information_orh6ab.png";

    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Ceramic Brakes";
    document.querySelector("#colorcardcolorinformation").innerHTML = "High performance CCB system provides a significant weight saving of 23Kg and enhanced performance under high load to deliver a truly exhilarating driving experience";
  }

  const ShowTailLights = () => {
    document.querySelector("#taillights").style.borderBottom = "2px solid white";
    document.querySelector("#roof").style.borderBottom = "";
    document.querySelector("#wheels").style.borderBottom = "";
    document.querySelector("#brakes").style.borderBottom = "";
    document.querySelector("#glazing").style.borderBottom = "";


    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#wheelpackagediv").style.display = "none";
    document.querySelector("#brakepackagediv").style.display = "none";
    document.querySelector("#glazingpackagediv").style.display = "none";

    document.querySelector("#taillightpackagediv").style.display = "block";

    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#lowerpackagediv").style.display = "none";
    document.querySelector("#upperpackagediv").style.display = "none";
    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#wheelpackagediv").style.display = "none";
    document.querySelector("#brakepackagediv").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";

    if (exteriorcolor === 'qquantumsilver') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_quantum_silver_smoked_tail_lights_plate_dgxgon.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_quantum_silver_smoked_tail_lights_plate_dgxgon.jpg";
    }
    if (exteriorcolor === 'qcasinoroyale') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_casino_royale_smoked_tail_lights_plate_zbpsxt.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_casino_royale_smoked_tail_lights_plate_zbpsxt.jpg";
    }
    if (exteriorcolor === 'qsatintitaniumgrey') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_satin_titanium_grey_smoked_tail_lights_plate_aeiphg.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_satin_titanium_grey_smoked_tail_lights_plate_aeiphg.jpg";
    }
    if (exteriorcolor === 'qsatinxenongrey') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_satin_xenon_grey_smoked_tail_lights_plate_sbipy7.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_satin_xenon_grey_smoked_tail_lights_plate_sbipy7.jpg";
    }
    if (exteriorcolor === 'qseychellesblue') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_seychelles_blue_smoked_tail_lights_plate_nhoitl.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871204/q_seychelles_blue_smoked_tail_lights_plate_nhoitl.jpg";
    }
    if (exteriorcolor === 'qionblue') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/q_ion_blue_smoked_tail_lights_plate_fr9uci.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/q_ion_blue_smoked_tail_lights_plate_fr9uci.jpg";
    }
    if (exteriorcolor === 'plasmablue') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/plasma_blue_smoked_tail_lights_plate_d75ujh.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/plasma_blue_smoked_tail_lights_plate_d75ujh.jpg";
    }
    if (exteriorcolor === 'elwoodblue') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/elwood_blue_smoked_tail_lights_plate_myj8o4.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/elwood_blue_smoked_tail_lights_plate_myj8o4.jpg";
    }

    if (exteriorcolor === 'qdigitalviolet') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/q_digital_violet_smoked_tail_lights_plate_hmyep0.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720871203/q_digital_violet_smoked_tail_lights_plate_hmyep0.jpg";
    }

    if (exteriorcolor === 'stormpurple') {
      document.querySelector("#taillightbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720870348/smoked_tail_lights_plate_ccylbz.jpg";
      document.querySelector("#currenttaillightbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720870348/smoked_tail_lights_plate_ccylbz.jpg";
    }


  }

  const ShowGlazing = () => {
    if (exteriorcolor === 'qquantumsilver') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_quantum_silver_privacy_glass_plate_zoiudr.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_quantum_silver_privacy_glass_plate_zoiudr.jpg";
    }
    if (exteriorcolor === 'qcasinoroyale') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_casino_royale_privacy_glass_plate_ftylep.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_casino_royale_privacy_glass_plate_ftylep.jpg";
    }
    if (exteriorcolor === 'qsatintitaniumgrey') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_satin_titanium_grey_privacy_glass_plate_i5p71i.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_satin_titanium_grey_privacy_glass_plate_i5p71i.jpg";
    }
    if (exteriorcolor === 'qsatinxenongrey') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_satin_xenon_grey_privacy_glass_plate_t304cp.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_satin_xenon_grey_privacy_glass_plate_t304cp.jpg";
    }
    if (exteriorcolor === 'qseychellesblue') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/q_seychelles_blue_privacy_glass_plate_nu8i15.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/q_seychelles_blue_privacy_glass_plate_nu8i15.jpg";
    }
    if (exteriorcolor === 'qionblue') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_ion_blue_privacy_glass_plate_gcyhyz.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876622/q_ion_blue_privacy_glass_plate_gcyhyz.jpg";
    }
    if (exteriorcolor === 'plasmablue') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/plasma_blue_privacy_glass_plate_hw6yqz.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/plasma_blue_privacy_glass_plate_hw6yqz.jpg";
    }
    if (exteriorcolor === 'elwoodblue') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/elwood_blue_privacy_glass_plate_ongcvf.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/elwood_blue_privacy_glass_plate_ongcvf.jpg";
    }
    if (exteriorcolor === 'qdigitalviolet') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/q_digital_violet_privacy_glass_plate_miwgz7.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/q_digital_violet_privacy_glass_plate_miwgz7.jpg";
    }
    if (exteriorcolor === 'stormpurple') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/storm_purple_privacy_glass_plate_jfw9im.jpg";
      
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876621/storm_purple_privacy_glass_plate_jfw9im.jpg";
    }
    if (exteriorcolor === 'qbuckinghamshiregreen') {
      document.querySelector("#glazingbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876702/q_buckinghamshire_green_privacy_glass_plate_ytprfk.jpg";
  
      document.querySelector("#currentglazingbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720876702/q_buckinghamshire_green_privacy_glass_plate_ytprfk.jpg";
    }
    //things to be added
    document.querySelector("#glazingpackagediv").style.display = "block";
    document.querySelector("#glazing").style.borderBottom = "2px solid white";

    //things to be removed
    document.querySelector(".colorplatediv").style.display = "none";
    document.querySelector("#purpleblueplatessection").style.display = "none";
    document.querySelector("#lowerpackagediv").style.display = "none";
    document.querySelector("#upperpackagediv").style.display = "none";
    document.querySelector("#grillefinishpackagediv").style.display = "none";
    document.querySelector("#roofpackagediv").style.display = "none";
    document.querySelector("#brakepackagediv").style.display = "none";
    document.querySelector("#wheelpackagediv").style.display = "none";
    document.querySelector("#taillightpackagediv").style.display = "none";
    
    document.querySelector("#taillights").style.borderBottom = "";
    document.querySelector("#roof").style.borderBottom = "";
    document.querySelector("#wheels").style.borderBottom = "";
    document.querySelector("#brake").style.borderBottom = "";

  }
  
  return (
    <>
      <div className="startconfiguration">

        <div className="imagessection">
          <div className="images">
            <div className="image1"> <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879472/q_buckinghamshire_green_casx55.jpg" alt="" id="img1" /></div>
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_defaultalloy_y2kp7g.jpg" alt="" id="img2" />
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879472/q_buckinghamshire_green_leftsidebacklowview_stqcla.jpg" alt="" id="img3" />
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_sideview_giyj6r.jpg" alt="" id="img4" />
            {/* <span id="spantp"><img src="" alt="" /></span> */}
          </div>
          <div className="imagesslider">
            <span className="imageslider" onClick={handleimg1}></span>
            <span className="imageslider" onClick={handleimg2}></span>
            <span className="imageslider" onClick={handleimg3}></span>
            <span className="imageslider" onClick={handleimg4}></span>
          </div>
        </div>
        <div className="selectionsection">
          <div className="features">
            <p id="exterior" onClick={ShowBlackandGreybydefault}>Exterior</p>
            <p id="interior" onClick={ShowInterior}>Interior</p>
            <p id="interioroptions">Interior Options</p>
            <p id="personalisation">Personalisation</p>
            <p id="accessories">Accessories</p>
          </div>
          <div className="modifications">
            <p id="paint" onClick={HandleShowPaintSection}>Paint</p>
            <p id="exteriorpackages" onClick={ShowExteriorPackage}>Exterior Packages</p>
            {/* <p id="liveries">Liveries</p> */}
            <p id="grillefinish" onClick={ShowGrilleFinish}>Grille Finish</p>
            <p id="roof" onClick={ShowRoof}>Roof</p>
            <p id="wheels" onClick={ShowWheels}>Wheels</p>
            <p id="brakes" onClick={ShowBrakes}>Brakes</p>
            <p id="taillights" onClick={ShowTailLights}>Tail Lights</p>
            <p id="glazing" onClick={ShowGlazing}>Glazing</p>
            {/* <p id="accesories">Accesories</p> */}
          </div>
          <Paint handleshowPaintSection={HandleShowPaintSection} blackgrey={Blackgrey} selectedpaint={selectedpaint} setselectedpaint={setselectedpaint} />
          <Purpleblue qseychellesblue={QSeychellesBlue} info={showinfo} qionblue={QIonBlue} plasmablue={PlasmaBlue} elwoodblue={ElwoodBlue}
            qdigitalviolet={QDigitalViolet} stormpurple={StormPurple} showpurpleblue={ShowPurpleandBlue} interior={ShowInterior} hoverseychellesblue={HoverSeychellesBlue} leaveseychellesblue={LeaveSeychellesBlue} />







          <Interior image1="img1" image2="img2" image3="img3" image4="img4" seatimageinfo="colorimage" seatname="colorcardcolorname"
            seatdescription="colorcardcolorinformation" showinfofunction={showinfo} colorcard="colorcard" colorinformation="colorinformation"
            interior={ShowInterior} selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} selectedprimarycolor={selectedprimarycolor} setselectedprimarycolor={setselectedprimarycolor} selectedsecondarycolor={selectedsecondarycolor} setselectedsecondarycolor={setselectedsecondarycolor} setinterior={setinterior}/>
          <PrimaryColor image11="img1" image22="img2" image33="img3" image44="img4" />


          <div className="colorplatediv">


            <div className="colorplates">
              <div id="colorplatesimagesdiv">

                <div className="image" onClick={QQuantumSilver} id="BlackPlateOne" onMouseEnter={HoverQuantumSilver} onMouseLeave={LeaveQuantumSilver}>  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677353/q_quantum_silver_plate_j5nl1q.jpg" className="imagescale" /></div>
                <div className="image" id="BlackPlateTwo" onMouseEnter={HoverCasinoRoyale} onMouseLeave={LeaveCasinoRoyale}>
                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677714/q_casino_royale_plate_la1z0t.jpg" className="imagescale" onClick={handleQCasinoRoyale} />
                  <img id="colorplateinfobuttoncasinoroyale" src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879541/infobutton_admoia.png" onClick={showinfo} />
                </div>
                <div className="image" onMouseLeave={LeaveSatinTitaniumGrey} id="BlackPlateThree"> <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677771/q_satin_titanium_grey_plate_qnfe9v.jpg" className="imagescale" onClick={handleQSatinTitaniumGrey} onMouseEnter={HoverSatinTitaniumGrey} />
                  <img id="colorplateinfobuttonsatintitaniumgrey" src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879541/infobutton_admoia.png" onClick={showinfo} />
                </div>
                <div className="image" id="BlackPlateFour" onMouseEnter={HoverSatinXenonGrey} onMouseLeave={LeaveSatinXenonGrey}>  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677741/q_satin_xenon_grey_plate_zyiqk5.jpg" alt="" onClick={handleQSatinXenonGrey} className="imagescale" />
                  <img id="colorplateinfobuttonsatinxenongrey" src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879541/infobutton_admoia.png" onClick={showinfo} />
                </div>
              </div>

              <div className="colorplateinformation" >

                <div id="colorplateimage"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879471/q_buckinghamshire_green_plate_nuubxl.jpg" alt="" id="colorplateimagex"
                  onMouseEnter={HoverInfo}
                />
                  <img id="colorplateinfobutton" src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879541/infobutton_admoia.png" onClick={showinfo} />
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
          <div id="colorimage"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879471/q_buckinghamshire_green_plate_information_khmceo.jpg" alt="" /></div>
          <div id="colorinformation">
            <div id="colorcardcolorname">Q Buckinghamshire Green</div>
            <div id="colorcardcolorinformation">Originally used for the launch of the 1988 Aston Martin Virage, Buckinghamshire Green is a classic and timeless colour inspired by the golden age of motorsport. A deep, rich, tonality with a fine metallic effect - this colour perfectly suits the performance prowess of any Aston Martin you care to mention.</div>
          </div>
        </div>
      </div>
      <ExteriorPackages colorplatediv="colorplatediv" pack={pack} setpack={setpack} />
      <LowerBodyPackage exteriorcolor={exteriorcolor} showinfofunction={showinfo} grille={grille} setgrille={setgrille} selectedSeat={selectedSeat} selectedprimarycolor={selectedprimarycolor} selectedsecondarycolor={selectedsecondarycolor} />
      {/* <Roof/> */}
      {/* <UpperBodyPackage exteriorcolor={exteriorcolor} showinfofunction={showinfo}   /> */}
      {/* <GrilleFinish showinfofunction={showinfo}/> */}


    </>
  );
}

export default StartConfiguration;
