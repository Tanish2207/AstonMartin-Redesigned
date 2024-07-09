
import { useState} from 'react';
import './lowerbodypackages.css';
import UpperBodyPackage from './upperbodypackages';
import StartConfiguration from '../startconfiguration';

const LowerBodyPackage=({showinfofunction,selectedSeat, selectedprimarycolor, selectedsecondarycolor,exteriorcolor,grille,setgrille})=>{

  
  const [lowerpackage,setlowerpackage]=useState('bodycolor');
  const [upperpackage,setupperpackage]=useState('bodycolor');

  

  
  const QBuckinghamshireGreenBodyColor=()=>{
    setlowerpackage('bodycolor');

    document.querySelector("#img1").src="q_buckinghamshire_green_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="q_buckinghamshire_green_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_buckinghamshire_green_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_buckinghamshire_green_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_buckinghamshire_green_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Color Lower Package";
    
    document.querySelector("#colorimage img").src="q_buckinghamshire_green_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";
    }
    
    const QBuckinghamshireGreenGlossBlack=()=>{
      setlowerpackage('glossblack');

      document.querySelector("#img1").src="q_buckinghamshire_green_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_buckinghamshire_green_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      document.querySelector("#colorimage img").src="q_buckinghamshire_green_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
      }
      
      const QBuckinghamshireGreenCarbonFibre=()=>{
        setlowerpackage('carbonfibre');

        document.querySelector("#img1").src="q_buckinghamshire_green_carbon_fibre_lower_body_package.jpg";
        document.querySelector("#img2").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_defaultalloy.jpg";
        document.querySelector("#img3").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
        document.querySelector("#img4").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_sideview.jpg";
        
        document.querySelector("#currentlowerbodyinfoimage").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_plate.jpg";
        document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
        
        //color information window stuff.
        document.querySelector("#colorimage img").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Body Package";
        document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";
        }
        
        const QSatinXenonGreyBodyColor=()=>{
          
          setlowerpackage('bodycolor');
          
          document.querySelector("#img1").src="q_satin_xenon_grey_body_color_lower_body_package.jpg";
          document.querySelector("#img2").src="q_satin_xenon_grey_body_color_lower_body_package_defaultalloy.jpg";
          document.querySelector("#img3").src="q_satin_xenon_grey_body_color_lower_body_package_leftsidebacklowview.jpg";
          document.querySelector("#img4").src="q_satin_xenon_grey_body_color_lower_body_package_sideview.jpg";
          
          document.querySelector("#currentlowerbodyinfoimage").src="q_satin_xenon_grey_body_color_lower_body_package_plate.jpg";
          document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
          
          
          //color information window stuff.
          document.querySelector("#colorimage img").src="q_satin_xenon_grey_body_color_lower_body_package_plate_information.jpg";
          document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
          document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";
          if(upperpackage==='bodycolor'&& grille==='bright')
            {
          document.querySelector("#img1").src="q_satin_xenon_grey_bclbp_bcubp_bright.jpg";
            }

            if(upperpackage==='bodycolor' && grille==='dark')
              {
          document.querySelector("#img1").src="q_satin_xenon_grey_bclbp_bcubp_dark.jpg";

        }
            if(upperpackage==='glossblack' && grille==='bright')
              {
          document.querySelector("#img1").src="q_satin_xenon_grey_bclbp_gbubp_bright.jpg";

              }

              if(upperpackage==='glossblack' && grille==='dark')
                {
          document.querySelector("#img1").src="q_satin_xenon_grey_bclbp_gbubp_dark.jpg";

                }

             
          }
          
const QSatinXenonGreyGlossBlack=()=>{

  setlowerpackage('glossblack');
  
  document.querySelector("#img1").src="q_satin_xenon_grey_gloss_black_lower_body_package.jpg";
  document.querySelector("#img2").src="q_satin_xenon_grey_gloss_black_lower_body_package_defaultalloy.jpg";
  document.querySelector("#img3").src="q_satin_xenon_grey_gloss_black_lower_body_package_leftsidebacklowview.jpg";
  document.querySelector("#img4").src="q_satin_xenon_grey_gloss_black_lower_body_package_sideview.jpg";
  
  document.querySelector("#currentlowerbodyinfoimage").src="q_satin_xenon_grey_gloss_black_lower_body_package_plate.jpg";
  document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
  
  //color information window stuff.
  document.querySelector("#colorimage img").src="q_satin_xenon_grey_gloss_black_lower_body_package_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
  document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

  if(upperpackage==='bodycolor'&& grille==='bright')
    {
  document.querySelector("#img1").src="q_satin_xenon_grey_gblbp_bcubp_bright.jpg";
    }

    if(upperpackage==='bodycolor' && grille==='dark')
      {
  document.querySelector("#img1").src="q_satin_xenon_grey_gblbp_bcubp_dark.jpg";

}
    if(upperpackage==='glossblack' && grille==='bright')
      {
  document.querySelector("#img1").src="q_satin_xenon_grey_gblbp_gbubp_bright.jpg";

      }

      if(upperpackage==='glossblack' && grille==='dark')
        {
  document.querySelector("#img1").src="q_satin_xenon_grey_gblbp_gbubp_dark.jpg";

        }
  
  }
  
const QSatinXenonGreyCarbonFibre=()=>{

  setlowerpackage('carbonfibre');
  document.querySelector("#img1").src="q_satin_xenon_grey_carbon_fibre_lower_body_package.jpg";
  document.querySelector("#img2").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_defaultalloy.jpg";
  document.querySelector("#img3").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
  document.querySelector("#img4").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_sideview.jpg";
  
  document.querySelector("#currentlowerbodyinfoimage").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_plate.jpg";
  document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
  
  
  //color information window stuff.
  document.querySelector("#colorimage img").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_plate_information.jpg";
  document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Body Package";
  document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


  if(upperpackage==='bodycolor'&& grille==='bright')
    {
  document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_bcubp_bright.jpg";
    }

    if(upperpackage==='bodycolor' && grille==='dark')
      {
  document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_bcubp_dark.jpg";

}
    if(upperpackage==='glossblack' && grille==='bright')
      {
  document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_gbubp_bright.jpg";

      }

      if(upperpackage==='glossblack' && grille==='dark')
        {
  document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_gbubp_dark.jpg";

        }

        if(upperpackage==='carbonfibre' && grille==='bright')
          {
  document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_cfubp_bright.jpg";

          }

          if(upperpackage==='carbonfibre' && grille==='dark')
            {
              document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_cfubp_dark.jpg";
            }
  }
  
  
  
  const QQuantumSilverBodyColor=()=>{
    
    setlowerpackage('bodycolor');
    
    
    document.querySelector("#img1").src="q_quantum_silver_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="q_quantum_silver_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_quantum_silver_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_quantum_silver_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_quantum_silver_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    document.querySelector("#colorimage img").src="q_quantum_silver_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";
    
    
    
    document.querySelector("#colorcard").style.width="87vw";
    document.querySelector("#colorcard").style.height="72vh";
    document.querySelector("#colorcard").style.transform="translate(8%,-8%)";
    
    
    document.querySelector("#colorimage img").style.width="49em";
    document.querySelector("#colorimage img").style.height="34em";
    
    document.querySelector("#colorinformation").style.width="29em";
    document.querySelector("#colorinformation").style.left="50em";


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_quantum_silver_bclbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_quantum_silver_bclbp_gbubp_dark.jpg";

          }
    
    
    }
    
    const QQuantumSilverCarbonFibre=()=>{
      
      setlowerpackage('carbonfibre');
      
      document.querySelector("#img1").src="q_quantum_silver_carbon_fibre_lower_body_package.jpg";
      document.querySelector("#img2").src="q_quantum_silver_carbon_fibre_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="q_quantum_silver_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_carbon_fibre_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_quantum_silver_carbon_fibre_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="q_quantum_silver_carbon_fibre_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";

      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="q_quantum_silver_cflbp_bcubp_bright.jpg";
        }
    
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="q_quantum_silver_cflbp_bcubp_dark.jpg";
    
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="q_quantum_silver_cflbp_gbubp_bright.jpg";
    
          }
    
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="q_quantum_silver_cflbp_gbubp_dark.jpg";
    
            }
    
            if(upperpackage==='carbonfibre' && grille==='bright')
              {
      document.querySelector("#img1").src="q_quantum_silver_cflbp_cfubp_bright.jpg";
    
              }
    
              if(upperpackage==='carbonfibre' && grille==='dark')
                {
                  document.querySelector("#img1").src="q_quantum_silver_cflbp_cfubp_dark.jpg";
                }
      }
      
      const QQuantumSilverGlossBlack=()=>{
        
        setlowerpackage('glossblack');
        
        document.querySelector("#img1").src="q_quantum_silver_gloss_black_lower_body_package.jpg";
        document.querySelector("#img2").src="q_quantum_silver_gloss_black_lower_body_package_defaultalloy.jpg";
        document.querySelector("#img3").src="q_quantum_silver_gloss_black_lower_body_package_leftsidebacklowview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_gloss_black_lower_body_package_sideview.jpg";
        
        document.querySelector("#currentlowerbodyinfoimage").src="q_quantum_silver_gloss_black_lower_body_package_plate.jpg";
        document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
        
        
        //color information window stuff.
        document.querySelector("#colorimage img").src="q_quantum_silver_gloss_black_lower_body_package_plate_information.jpg";
        document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
        document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

        if(upperpackage==='bodycolor'&& grille==='bright')
          {
        document.querySelector("#img1").src="q_quantum_silver_gblbp_bcubp_bright.jpg";
          }
    
          if(upperpackage==='bodycolor' && grille==='dark')
            {
        document.querySelector("#img1").src="q_quantum_silver_gblbp_bcubp_dark.jpg";
    
      }
          if(upperpackage==='glossblack' && grille==='bright')
            {
        document.querySelector("#img1").src="q_quantum_silver_gblbp_gbubp_bright.jpg";
    
            }
    
            if(upperpackage==='glossblack' && grille==='dark')
              {
        document.querySelector("#img1").src="q_quantum_silver_gblbp_gbubp_dark.jpg";
    
              }
        }
        
        
        const QCasinoRoyaleBodyColor=()=>{
          
          setlowerpackage('bodycolor');
          
          document.querySelector("#img1").src="q_casino_royale_body_color_lower_body_package.jpg";
          document.querySelector("#img2").src="q_casino_royale_body_color_lower_body_package_defaultalloy.jpg";
          document.querySelector("#img3").src="q_casino_royale_body_color_lower_body_package_leftsidebacklowview.jpg";
          document.querySelector("#img4").src="q_casino_royale_body_color_lower_body_package_sideview.jpg";
          document.querySelector("#currentlowerbodyinfoimage").src="q_casino_royale_body_color_lower_body_package_plate.jpg";
          document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
          
          //color information window stuff.
          document.querySelector("#colorimage img").src="q_casino_royale_body_color_lower_body_package_plate_information.jpg";
          document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
          document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";

          if(upperpackage==='bodycolor'&& grille==='bright')
            {
          document.querySelector("#img1").src="q_casino_royale_bclbp_bcubp_bright.jpg";
            }
      
            if(upperpackage==='bodycolor' && grille==='dark')
              {
          document.querySelector("#img1").src="q_casino_royale_bclbp_bcubp_dark.jpg";
      
        }
            if(upperpackage==='glossblack' && grille==='bright')
              {
          document.querySelector("#img1").src="q_casino_royale_bclbp_gbubp_bright.jpg";
      
              }
      
              if(upperpackage==='glossblack' && grille==='dark')
                {
          document.querySelector("#img1").src="q_casino_royale_bclbp_gbubp_dark.jpg";
      
                }


          }
          
          const QCasinoRoyaleGlossBlack=()=>{
            
            setlowerpackage('glossblack');
            
            
            document.querySelector("#img1").src="q_casino_royale_gloss_black_lower_body_package.jpg";
            document.querySelector("#img2").src="q_casino_royale_gloss_black_lower_body_package_defaultalloy.jpg";
            document.querySelector("#img3").src="q_casino_royale_gloss_black_lower_body_package_leftsidebacklowview.jpg";
            document.querySelector("#img4").src="q_casino_royale_gloss_black_lower_body_package_sideview.jpg";
            
            document.querySelector("#currentlowerbodyinfoimage").src="q_casino_royale_gloss_black_lower_body_package_plate.jpg";
            document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
            
            //color information window stuff.
            document.querySelector("#colorimage img").src="q_casino_royale_gloss_black_lower_body_package_plate_information.jpg";
            document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
            document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

            if(upperpackage==='bodycolor'&& grille==='bright')
              {
            document.querySelector("#img1").src="q_casino_royale_gblbp_bcubp_bright.jpg";
              }
        
              if(upperpackage==='bodycolor' && grille==='dark')
                {
            document.querySelector("#img1").src="q_casino_royale_gblbp_bcubp_dark.jpg";
        
          }
              if(upperpackage==='glossblack' && grille==='bright')
                {
            document.querySelector("#img1").src="q_casino_royale_gblbp_gbubp_bright.jpg";
        
                }
        
                if(upperpackage==='glossblack' && grille==='dark')
                  {
            document.querySelector("#img1").src="q_casino_royale_gblbp_gbubp_dark.jpg";
        
                  }

            }
            
            
            const QCasinoRoyaleCarbonFibre=()=>{
              
              setlowerpackage('carbonfibre');
              
              document.querySelector("#img1").src="q_casino_royale_carbon_fibre_lower_body_package.jpg";
              document.querySelector("#img2").src="q_casino_royale_carbon_fibre_lower_body_package_defaultalloy.jpg";
              document.querySelector("#img3").src="q_casino_royale_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
              document.querySelector("#img4").src="q_casino_royale_carbon_fibre_lower_body_package_sideview.jpg";
              
              document.querySelector("#currentlowerbodyinfoimage").src="q_casino_royale_carbon_fibre_lower_body_package_plate.jpg";
              document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
              
              
              //color information window stuff.
              document.querySelector("#colorimage img").src="q_casino_royale_carbon_fibre_lower_body_package_plate_information.jpg";
              document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
              document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";

              if(upperpackage==='bodycolor'&& grille==='bright')
                {
              document.querySelector("#img1").src="q_casino_royale_cflbp_bcubp_bright.jpg";
                }
            
                if(upperpackage==='bodycolor' && grille==='dark')
                  {
              document.querySelector("#img1").src="q_casino_royale_cflbp_bcubp_dark.jpg";
            
            }
                if(upperpackage==='glossblack' && grille==='bright')
                  {
              document.querySelector("#img1").src="q_casino_royale_cflbp_gbubp_bright.jpg";
            
                  }
            
                  if(upperpackage==='glossblack' && grille==='dark')
                    {
              document.querySelector("#img1").src="q_casino_royale_cflbp_gbubp_dark.jpg";
            
                    }
            
                    if(upperpackage==='carbonfibre' && grille==='bright')
                      {
              document.querySelector("#img1").src="q_casino_royale_cflbp_cfubp_bright.jpg";
            
                      }
            
                      if(upperpackage==='carbonfibre' && grille==='dark')
                        {
                          document.querySelector("#img1").src="q_casino_royale_cflbp_cfubp_dark.jpg";
                        }
              }
              
  const QSatinTitaniumGreyBodyColor=()=>{
    
    setlowerpackage('bodycolor');
    
    
    document.querySelector("#img1").src="q_satin_titanium_grey_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="q_satin_titanium_grey_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_satin_titanium_grey_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_satin_titanium_grey_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_satin_titanium_grey_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_satin_titanium_grey_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";

    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_satin_titanium_grey_bclbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_satin_titanium_grey_bclbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_satin_titanium_grey_bclbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_satin_titanium_grey_bclbp_gbubp_dark.jpg";

          }
    
    }
    
    const QSatinTitaniumGreyGlossBlack=()=>{
      
      setlowerpackage('glossblack');
      
      document.querySelector("#img1").src="q_satin_titanium_grey_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_satin_titanium_grey_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="q_satin_titanium_grey_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="q_satin_titanium_grey_gblbp_bcubp_bright.jpg";
        }
  
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="q_satin_titanium_grey_gblbp_bcubp_dark.jpg";
  
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="q_satin_titanium_grey_gblbp_gbubp_bright.jpg";
  
          }
  
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="q_satin_titanium_grey_gblbp_gbubp_dark.jpg";
  
            }

      
  }
  
  const QSatinTitaniumGreyCarbonFibre=()=>{
    
    setlowerpackage('carbonfibre');
    
    document.querySelector("#img1").src="q_satin_titanium_grey_carbon_fibre_lower_body_package.jpg";
    document.querySelector("#img2").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_bcubp_bright.jpg";
      }
  
      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_bcubp_dark.jpg";
  
  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_gbubp_bright.jpg";
  
        }
  
        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_gbubp_dark.jpg";
  
          }
  
          if(upperpackage==='carbonfibre' && grille==='bright')
            {
    document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_cfubp_bright.jpg";
  
            }
  
            if(upperpackage==='carbonfibre' && grille==='dark')
              {
                document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_cfubp_dark.jpg";
              }
    }

//  -  - - - - blue and purples 
  const QSeychellesBlueBodyColor=()=>{
    setlowerpackage('bodycolor');
    console.log("q seychelles body function called");
    
    document.querySelector("#img1").src="q_seychelles_blue_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="q_seychelles_blue_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_seychelles_blue_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_seychelles_blue_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_seychelles_blue_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_seychelles_blue_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_seychelles_blue_bclbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_seychelles_blue_bclbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_seychelles_blue_bclbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_seychelles_blue_bclbp_gbubp_dark.jpg";

          }

  }

  const QSeychellesBlueGlossBlack=()=>{
    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");
      
      document.querySelector("#img1").src="q_seychelles_blue_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="q_seychelles_blue_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="q_seychelles_blue_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="q_seychelles_blue_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_seychelles_blue_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="q_seychelles_blue_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="q_seychelles_blue_gblbp_bcubp_bright.jpg";
        }
  
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="q_seychelles_blue_gblbp_bcubp_dark.jpg";
  
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="q_seychelles_blue_gblbp_gbubp_bright.jpg";
  
          }
  
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="q_seychelles_blue_gblbp_gbubp_dark.jpg";
  
            }
      
  }

  const QSeychellesBlueCarbonFibre=()=>{
    setlowerpackage('carbonfibre');
    
    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src="q_seychelles_blue_carbon_fibre_lower_body_package.jpg";
    document.querySelector("#img2").src="q_seychelles_blue_carbon_fibre_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_seychelles_blue_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_seychelles_blue_carbon_fibre_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_seychelles_blue_carbon_fibre_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_seychelles_blue_carbon_fibre_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser."; 


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_seychelles_blue_cflbp_bcubp_bright.jpg";
      }
  
      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_seychelles_blue_cflbp_bcubp_dark.jpg";
  
  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_seychelles_blue_cflbp_gbubp_bright.jpg";
  
        }
  
        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_seychelles_blue_cflbp_gbubp_dark.jpg";
  
          }
  
          if(upperpackage==='carbonfibre' && grille==='bright')
            {
    document.querySelector("#img1").src="q_seychelles_blue_cflbp_cfubp_bright.jpg";
  
            }
  
            if(upperpackage==='carbonfibre' && grille==='dark')
              {
                document.querySelector("#img1").src="q_seychelles_blue_cflbp_cfubp_dark.jpg";
              }
  }


   const QIonBlueBodyColor=()=>{
    setlowerpackage('bodycolor');
    console.log("q seychelles body function called");
    
    document.querySelector("#img1").src="q_ion_blue_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="q_ion_blue_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_ion_blue_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_ion_blue_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_ion_blue_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_ion_blue_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";

    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_ion_blue_bclbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_ion_blue_bclbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_ion_blue_bclbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_ion_blue_bclbp_gbubp_dark.jpg";

          }
   }

   const QIonBlueGlossBlack= ()=>{
    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");
      
      document.querySelector("#img1").src="q_ion_blue_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="q_ion_blue_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="q_ion_blue_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="q_ion_blue_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_ion_blue_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="q_ion_blue_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="q_ion_blue_gblbp_bcubp_bright.jpg";
        }
  
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="q_ion_blue_gblbp_bcubp_dark.jpg";
  
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="q_ion_blue_gblbp_gbubp_bright.jpg";
  
          }
  
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="q_ion_blue_gblbp_gbubp_dark.jpg";
  
            }
      
   }

   const QIonBlueCarbonFibre=()=>{
    setlowerpackage('carbonfibre');
    
    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src="q_ion_blue_carbon_fibre_lower_body_package.jpg";
    document.querySelector("#img2").src="q_ion_blue_carbon_fibre_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_ion_blue_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_ion_blue_carbon_fibre_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_ion_blue_carbon_fibre_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_ion_blue_carbon_fibre_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";
    
    
    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_ion_blue_cflbp_bcubp_bright.jpg";
      }
  
      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_ion_blue_cflbp_bcubp_dark.jpg";
  
  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_ion_blue_cflbp_gbubp_bright.jpg";
  
        }
  
        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_ion_blue_cflbp_gbubp_dark.jpg";
  
          }
  
          if(upperpackage==='carbonfibre' && grille==='bright')
            {
    document.querySelector("#img1").src="q_ion_blue_cflbp_cfubp_bright.jpg";
  
            }
  
            if(upperpackage==='carbonfibre' && grille==='dark')
              {
                document.querySelector("#img1").src="q_ion_blue_cflbp_cfubp_dark.jpg";
              }
   }


   const PlasmaBlueBodyColor=()=>{
    setlowerpackage('bodycolor');
    // console.log("q seychelles body function called");
    
    document.querySelector("#img1").src="plasma_blue_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="plasma_blue_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="plasma_blue_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="plasma_blue_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="plasma_blue_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="plasma_blue_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";

    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_plasma_blue_bclbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_plasma_blue_bclbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_plasma_blue_bclbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_plasma_blue_bclbp_gbubp_dark.jpg";

          }
   }

   const PlasmaBlueGlossBlack=()=>{
    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");
      
      document.querySelector("#img1").src="plasma_blue_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="plasma_blue_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="plasma_blue_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="plasma_blue_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="plasma_blue_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="plasma_blue_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="q_plasma_blue_gblbp_bcubp_bright.jpg";
        }
  
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="q_plasma_blue_gblbp_bcubp_dark.jpg";
  
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="q_plasma_blue_gblbp_gbubp_bright.jpg";
  
          }
  
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="q_plasma_blue_gblbp_gbubp_dark.jpg";
  
            }
   }

   const PlasmaBlueCarbonFibre=()=>{

    setlowerpackage('carbonfibre');
    
    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src="plasma_blue_carbon_fibre_lower_body_package.jpg";
    document.querySelector("#img2").src="plasma_blue_carbon_fibre_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="plasma_blue_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="plasma_blue_carbon_fibre_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="plasma_blue_carbon_fibre_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="plasma_blue_carbon_fibre_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser."; 

    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_plasma_blue_cflbp_bcubp_bright.jpg";
      }
  
      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_plasma_blue_cflbp_bcubp_dark.jpg";
  
  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_plasma_blue_cflbp_gbubp_bright.jpg";
  
        }
  
        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_plasma_blue_cflbp_gbubp_dark.jpg";
  
          }
  
          if(upperpackage==='carbonfibre' && grille==='bright')
            {
    document.querySelector("#img1").src="q_plasma_blue_cflbp_cfubp_bright.jpg";
  
            }
  
            if(upperpackage==='carbonfibre' && grille==='dark')
              {
                document.querySelector("#img1").src="q_plasma_blue_cflbp_cfubp_dark.jpg";
              }
   }


   const ElwoodBlueBodyColor=()=>{
    setlowerpackage('bodycolor');
    // console.log("q seychelles body function called");
    
    document.querySelector("#img1").src="elwood_blue_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="elwood_blue_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="elwood_blue_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="elwood_blue_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="elwood_blue_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";

    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="elwood_blue_gblbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="elwood_blue_gblbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="elwood_blue_gblbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="elwood_blue_gblbp_gbubp_dark.jpg";

          }

   }

   const ElwoodBlueGlossBlack=()=>{
    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");
      
      document.querySelector("#img1").src="elwood_blue_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="elwood_blue_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="elwood_blue_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="elwood_blue_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="elwood_blue_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="elwood_blue_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="elwood_blue_gblbp_bcubp_bright.jpg";
        }
  
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="elwood_blue_gblbp_bcubp_dark.jpg";
  
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="elwood_blue_gblbp_gbubp_bright.jpg";
  
          }
  
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="elwood_blue_gblbp_gbubp_dark.jpg";
  
            }

   }

   const ElwoodBlueCarbonFibre=()=>{
    setlowerpackage('carbonfibre');
    
    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src="elwood_blue_carbon_fibre_lower_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_carbon_fibre_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="elwood_blue_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="elwood_blue_carbon_fibre_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="elwood_blue_carbon_fibre_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="elwood_blue_carbon_fibre_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser."; 


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="elwood_blue_cflbp_bcubp_bright.jpg";
      }
  
      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="elwood_blue_cflbp_bcubp_dark.jpg";
  
  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="elwood_blue_cflbp_gbubp_bright.jpg";
  
        }
  
        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="elwood_blue_cflbp_gbubp_dark.jpg";
  
          }
  
          if(upperpackage==='carbonfibre' && grille==='bright')
            {
    document.querySelector("#img1").src="elwood_blue_cflbp_cfubp_bright.jpg";
  
            }
  
            if(upperpackage==='carbonfibre' && grille==='dark')
              {
                document.querySelector("#img1").src="elwood_blue_cflbp_cfubp_dark.jpg";
              }
   }

   const QDigitalVioletBodyColor=()=>{
    setlowerpackage('bodycolor');
 
    
    document.querySelector("#img1").src="q_digital_violet_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_digital_violet_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_digital_violet_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_digital_violet_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_digital_violet_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_digital_violet_bclbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_digital_violet_gblbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_digital_violet_gblbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_digital_violet_gblbp_gbubp_dark.jpg";

          }
   }

   const QDigitalVioletGlossBlack= ()=>{
    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");
      
      document.querySelector("#img1").src="q_digital_violet_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="q_digital_violet_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="q_digital_violet_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="q_digital_violet_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_digital_violet_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="q_digital_violet_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="q_digital_violet_gblbp_bcubp_bright.jpg";
        }
  
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="q_digital_violet_gblbp_bcubp_dark.jpg";
  
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="q_digital_violet_gblbp_gbubp_bright.jpg";
  
          }
  
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="q_digital_violet_gblbp_gbubp_dark.jpg";
  
            }
   }

   const QDigitalVioletCarbonFibre=()=>{
    setlowerpackage('carbonfibre');
    
    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src="q_digital_violet_carbon_fibre_lower_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_carbon_fibre_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="q_digital_violet_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="q_digital_violet_carbon_fibre_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="q_digital_violet_carbon_fibre_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="q_digital_violet_carbon_fibre_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser."; 


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="q_digital_violet_cflbp_bcubp_bright.jpg";
      }
  
      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="q_digital_violet_cflbp_bcubp_dark.jpg";
  
  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="q_digital_violet_cflbp_gbubp_bright.jpg";
  
        }
  
        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="q_digital_violet_cflbp_gbubp_dark.jpg";
  
          }
  
          if(upperpackage==='carbonfibre' && grille==='bright')
            {
    document.querySelector("#img1").src="q_digital_violet_cflbp_cfubp_bright.jpg";
  
            }
  
            if(upperpackage==='carbonfibre' && grille==='dark')
              {
                document.querySelector("#img1").src="q_digital_violet_cflbp_cfubp_dark.jpg";
              }
   }


  const StormPurpleBodyColor=()=>{
    setlowerpackage('bodycolor');
 
    
    document.querySelector("#img1").src="storm_purple_body_color_lower_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_body_color_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="storm_purple_body_color_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="storm_purple_body_color_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="storm_purple_body_color_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Body Colour Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="storm_purple_body_color_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Body coloured front splitter and side sills deliver a refined and elegant look.";

    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="storm_purple_bclbp_bcubp_bright.jpg";
      }

      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="storm_purple_bclbp_bcubp_dark.jpg";

  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="storm_purple_bclbp_gbubp_bright.jpg";

        }

        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="storm_purple_bclbp_gbubp_dark.jpg";

          }
  }

  const StormPurpleGlossBlack=()=>{
    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");
      
      document.querySelector("#img1").src="storm_purple_gloss_black_lower_body_package.jpg";
      document.querySelector("#img2").src="storm_purple_gloss_black_lower_body_package_defaultalloy.jpg";
      document.querySelector("#img3").src="storm_purple_gloss_black_lower_body_package_leftsidebacklowview.jpg";
      document.querySelector("#img4").src="storm_purple_gloss_black_lower_body_package_sideview.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="storm_purple_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerpackagename").innerHTML="Gloss Black Lower Body Package";
      
      //color information window stuff.
      document.querySelector("#colorimage img").src="storm_purple_gloss_black_lower_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Lower Body Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


      if(upperpackage==='bodycolor'&& grille==='bright')
        {
      document.querySelector("#img1").src="storm_purple_gblbp_bcubp_bright.jpg";
        }
  
        if(upperpackage==='bodycolor' && grille==='dark')
          {
      document.querySelector("#img1").src="storm_purple_gblbp_bcubp_dark.jpg";
  
    }
        if(upperpackage==='glossblack' && grille==='bright')
          {
      document.querySelector("#img1").src="storm_purple_gblbp_gbubp_bright.jpg";
  
          }
  
          if(upperpackage==='glossblack' && grille==='dark')
            {
      document.querySelector("#img1").src="storm_purple_gblbp_gbubp_dark.jpg";
  
            }
  }

  const StormPurpleCarbonFibre= ()=>{
    setlowerpackage('carbonfibre');
    
    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src="storm_purple_carbon_fibre_lower_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_carbon_fibre_lower_body_package_defaultalloy.jpg";
    document.querySelector("#img3").src="storm_purple_carbon_fibre_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src="storm_purple_carbon_fibre_lower_body_package_sideview.jpg";
    
    document.querySelector("#currentlowerbodyinfoimage").src="storm_purple_carbon_fibre_lower_body_package_plate.jpg";
    document.querySelector("#lowerpackagename").innerHTML="Carbon Fibre Lower Package";
    
    
    //color information window stuff.
    document.querySelector("#colorimage img").src="storm_purple_carbon_fibre_lower_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if(upperpackage==='bodycolor'&& grille==='bright')
      {
    document.querySelector("#img1").src="storm_purple_cflbp_bcubp_bright.jpg";
      }
  
      if(upperpackage==='bodycolor' && grille==='dark')
        {
    document.querySelector("#img1").src="storm_purple_cflbp_bcubp_dark.jpg";
  
  }
      if(upperpackage==='glossblack' && grille==='bright')
        {
    document.querySelector("#img1").src="storm_purple_cflbp_gbubp_bright.jpg";
  
        }
  
        if(upperpackage==='glossblack' && grille==='dark')
          {
    document.querySelector("#img1").src="storm_purple_cflbp_gbubp_dark.jpg";
  
          }
  
          if(upperpackage==='carbonfibre' && grille==='bright')
            {
    document.querySelector("#img1").src="storm_purple_cflbp_cfubp_bright.jpg";
  
            }
  
            if(upperpackage==='carbonfibre' && grille==='dark')
              {
                document.querySelector("#img1").src="storm_purple_cflbp_cfubp_dark.jpg";
              }
  }

    // ------------------------------ changing lower body plates
    // if(props.exteriorcolor==='qbuckinghamshiregreen')
    //   {QBuckinghamshireGreenBodyColor()}
    
    if(exteriorcolor==='qbuckingshiregreen')
      {
        document.querySelector("#lowerbodycolorone").src="q_buckinghamshire_green_body_color_lower_body_package_plate.jpg";
      document.querySelector("#lowerbodycolorthree").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_plate.jpg";
      document.querySelector("#lowerbodycolortwo").src="q_buckinghamshire_green_gloss_black_lower_body_package_plate.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_buckinghamshire_green_body_color_lower_body_package_plate.jpg";
      }
    
    if(exteriorcolor==='qquantumsilver'){
      
      
      
      document.querySelector("#lowerbodycolorone").src="q_quantum_silver_body_color_lower_body_package_plate.jpg";
      document.querySelector("#lowerbodycolorthree").src="q_quantum_silver_carbon_fibre_lower_body_package_plate.jpg";
      document.querySelector("#lowerbodycolortwo").src="q_quantum_silver_gloss_black_lower_body_package_plate.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_quantum_silver_body_color_lower_body_package_plate.jpg";
      
      }
      
      if(exteriorcolor==='qsatinxenongrey')
        {
          document.querySelector("#lowerbodycolorone").src="q_satin_xenon_grey_body_color_lower_body_package_plate.jpg";
          document.querySelector("#lowerbodycolortwo").src="q_satin_xenon_grey_gloss_black_lower_body_package_plate.jpg";
          document.querySelector("#lowerbodycolorthree").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_plate.jpg";
          
          document.querySelector("#currentlowerbodyinfoimage").src="q_satin_xenon_grey_body_color_lower_body_package_plate.jpg";
          
          // document.querySelQSatinBodyColor}
          
          
          
          }
          
          if(exteriorcolor==='qcasinoroyale')
            {
              document.querySelector("#lowerbodycolorone").src="q_casino_royale_body_color_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolortwo").src="q_casino_royale_gloss_black_lower_body_package_plate.jpg";
      document.querySelector("#lowerbodycolorthree").src="q_casino_royale_carbon_fibre_lower_body_package_plate.jpg";
      
      document.querySelector("#currentlowerbodyinfoimage").src="q_casino_royale_body_color_lower_body_package_plate.jpg";
      
      }
      
      if(exteriorcolor==='qsatintitaniumgrey')
        {
          document.querySelector("#lowerbodycolorone").src="q_satin_titanium_grey_body_color_lower_body_package_plate.jpg";
          document.querySelector("#lowerbodycolortwo").src="q_satin_titanium_grey_gloss_black_lower_body_package_plate.jpg";
          document.querySelector("#lowerbodycolorthree").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_plate.jpg";
          
          document.querySelector("#currentlowerbodyinfoimage").src="q_satin_titanium_grey_body_color_lower_body_package_plate.jpg";
          
          }
          
          // -----------  plates changing fucntion for blue and purple color
          if(exteriorcolor==='qseychellesblue')
            {
              
              document.querySelector("#lowerbodycolorone").src="q_seychelles_blue_body_color_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolortwo").src="q_seychelles_blue_gloss_black_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolorthree").src="q_seychelles_blue_carbon_fibre_lower_body_package_plate.jpg";
              
              document.querySelector("#currentlowerbodyinfoimage").src="q_seychelles_blue_body_color_lower_body_package_plate.jpg";
              }
              
              

        if(exteriorcolor==='qionblue')
          {
            document.querySelector("#lowerbodycolorone").src="q_ion_blue_body_color_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolortwo").src="q_ion_blue_gloss_black_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolorthree").src="q_ion_blue_carbon_fibre_lower_body_package_plate.jpg";
              
              document.querySelector("#currentlowerbodyinfoimage").src="q_ion_blue_body_color_lower_body_package_plate.jpg";
          }


          if(exteriorcolor==='plasmablue')
            {
              document.querySelector("#lowerbodycolorone").src="plasma_blue_body_color_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolortwo").src="plasma_blue_gloss_black_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolorthree").src="plasma_blue_carbon_fibre_lower_body_package_plate.jpg";
              
              document.querySelector("#currentlowerbodyinfoimage").src="plasma_blue_body_color_lower_body_package_plate.jpg";
            }


            if(exteriorcolor==='elwoodblue')
              {
                document.querySelector("#lowerbodycolorone").src="elwood_blue_body_color_lower_body_package_plate.jpg";
                document.querySelector("#lowerbodycolortwo").src="elwood_blue_gloss_black_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolorthree").src="elwood_blue_carbon_fibre_lower_body_package_plate.jpg";
              
              document.querySelector("#currentlowerbodyinfoimage").src="elwood_blue_body_color_lower_body_package_plate.jpg";
              }

              if(exteriorcolor=='qdigitalviolet')
                {
                  document.querySelector("#lowerbodycolorone").src="q_digital_violet_body_color_lower_body_package_plate.jpg";
                document.querySelector("#lowerbodycolortwo").src="q_digital_violet_gloss_black_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolorthree").src="q_digital_violet_carbon_fibre_lower_body_package_plate.jpg";
              
              document.querySelector("#currentlowerbodyinfoimage").src="q_digital_violet_body_color_lower_body_package_plate.jpg";
                }

                if(exteriorcolor==='stormpurple')
                  {
                    document.querySelector("#lowerbodycolorone").src="storm_purple_body_color_lower_body_package_plate.jpg";
                document.querySelector("#lowerbodycolortwo").src="storm_purple_gloss_black_lower_body_package_plate.jpg";
              document.querySelector("#lowerbodycolorthree").src="storm_purple_carbon_fibre_lower_body_package_plate.jpg";
              
              document.querySelector("#currentlowerbodyinfoimage").src="storm_purple_body_color_lower_body_package_plate.jpg";

                  }
              // -------------------------------- calling functions ------------------------------------------




                const BodyColorFunctions=()=>{

                  document.querySelector("#lowercolorborderone").style.borderBottom="2px solid white";
                  document.querySelector("#lowercolorbordertwo").style.borderBottom="none";
                  document.querySelector("#lowercolorborderthree").style.borderBottom="none";


              if(exteriorcolor==='qbuckinghamshiregreen')
                {QBuckinghamshireGreenBodyColor();}
              
              
              if(exteriorcolor==='qquantumsilver')
                {
                  QQuantumSilverBodyColor();
                  }
                  
                  if(exteriorcolor==='qsatinxenongrey')
                    {
                      QSatinXenonGreyBodyColor();
              }
              
              if(exteriorcolor==='qcasinoroyale')
                {QCasinoRoyaleBodyColor();}
              
              if(exteriorcolor==='qsatintitaniumgrey')
                {QSatinTitaniumGreyBodyColor();}
// ----------------- blues and purples
              if(exteriorcolor==='qseychellesblue')
                {QSeychellesBlueBodyColor();

                  console.log("qseychelles blue is being called.");
                }

                if(exteriorcolor==='qionblue')
                  {QIonBlueBodyColor();


                  }

                  if(exteriorcolor==='plasmablue')
                    {
                      PlasmaBlueBodyColor();
                    }
                    if(exteriorcolor==='elwoodblue')
                      {ElwoodBlueBodyColor();}

                    if(exteriorcolor==='qdigitalviolet')
                      {QDigitalVioletBodyColor();}

                    if(exteriorcolor==='stormpurple')
                      {StormPurpleBodyColor();}
              
              }
              
              const GlossBlackFunctions=()=>{
                document.querySelector("#lowercolorborderone").style.borderBottom="none";
                document.querySelector("#lowercolorbordertwo").style.borderBottom="2px solid white";
                document.querySelector("#lowercolorborderthree").style.borderBottom="none";
            
            if(exteriorcolor==='qbuckinghamshiregreen')
              {QBuckinghamshireGreenGlossBlack();}
            
            if(exteriorcolor==='qquantumsilver')
              {
                QQuantumSilverGlossBlack();
                }
                
                
                if(exteriorcolor==='qsatinxenongrey')
                  {
                    QSatinXenonGreyGlossBlack();
                    }
                    if(exteriorcolor==='qcasinoroyale')
                      {QCasinoRoyaleGlossBlack();}
                    
                    if(exteriorcolor==='qsatintitaniumgrey')
                      {QSatinTitaniumGreyGlossBlack();}     
    // ------------ blue and purples
                    if(exteriorcolor==='qseychellesblue')
                      {QSeychellesBlueGlossBlack();}

                    if(exteriorcolor==='qionblue')
                      {QIonBlueGlossBlack();}

                    if(exteriorcolor==='plasmablue')
                      {PlasmaBlueGlossBlack();}
                    if(exteriorcolor==='elwoodblue')
                      {ElwoodBlueGlossBlack();}
                    
                    if(exteriorcolor==='qdigitalviolet')
                      {
                        QDigitalVioletGlossBlack();
                      }

                      if(exteriorcolor==='stormpurple')
                        {
                          StormPurpleGlossBlack();
                        }
                    }
                    
                    
                    const CarbonFibreFunctions=()=>{
                      document.querySelector("#lowercolorborderone").style.borderBottom="none";
                      document.querySelector("#lowercolorbordertwo").style.borderBottom="none";
                      document.querySelector("#lowercolorborderthree").style.borderBottom="2px solid white";
                      
                      if(exteriorcolor==='qbuckinghamshiregreen')
                        {QBuckinghamshireGreenCarbonFibre();}
                      
                      if(exteriorcolor==='qquantumsilver')
                        {
                          QQuantumSilverCarbonFibre();
                          }
                          if(exteriorcolor==='qsatinxenongrey')
                            {
                              QSatinXenonGreyCarbonFibre();
                              }
                              if(exteriorcolor==='qcasinoroyale')
                                {QCasinoRoyaleCarbonFibre()}
                              if(exteriorcolor==='qsatintitaniumgrey')
                                
                                {
                                  // console.log(props.exteriorcolor);
                                  QSatinTitaniumGreyCarbonFibre();}
//-------------------- blue and purples
                                  if(exteriorcolor==='qseychellesblue')
                                    {QSeychellesBlueCarbonFibre();}
                                  
                        if(exteriorcolor==='qionblue')
                          {
                            QIonBlueCarbonFibre();
                          }

                          if(exteriorcolor==='plasmablue')
                            {PlasmaBlueCarbonFibre();}
                          if(exteriorcolor==='elwoodblue')
                            {ElwoodBlueCarbonFibre();}

                          if(exteriorcolor==='qdigitalviolet')
                            {QDigitalVioletCarbonFibre();

                            }

                            if(exteriorcolor==='stormpurple')
                              {StormPurpleCarbonFibre();}

                                  }

                                  
                                  return(<>
  <div id="lowerpackagediv">
            <div id="lowerpackage">
              <div id="lowerpackageplatesdiv">

              <div id="lowerpackageimagesplate">
                <div className="lowerpackagehoverhider" onClick={BodyColorFunctions}  id="lowercolorborderone"><img src="q_buckinghamshire_green_body_color_lower_body_package_plate.jpg" className="lowerbodyscaling" alt=""  id="lowerbodycolorone"/></div>
                <div className="lowerpackagehoverhider" onClick={GlossBlackFunctions} id="lowercolorbordertwo"><img src="q_buckinghamshire_green_gloss_black_lower_body_package_plate.jpg" alt="" className="lowerbodyscaling" id="lowerbodycolortwo"/></div>
                <div className="lowerpackagehoverhider" onClick={CarbonFibreFunctions} id="lowercolorborderthree"><img src="q_buckinghamshire_green_carbon_fibre_lower_body_package_plate.jpg" className="lowerbodyscaling" alt="" id="lowerbodycolorthree" /></div>
              </div>
              </div>
              <div id="lowerpackageimageinformationsection">
                <div id="lowerpackageimagewithinfo">
                  <img src="q_quantum_silver_gloss_black_lower_body_package_plate.jpg" alt="" id="currentlowerbodyinfoimage" />
                  <img src="infobutton.png" alt="" id="infobuttonforlowerbody" onClick={showinfofunction} />
                </div>
                <div id="lowerpackageinformationcontent">
                  <div id="lowerpackagename">Body Color Lower Package</div>
                </div>
              </div>
            </div>
          </div>
  
  <UpperBodyPackage selectedSeat={selectedSeat} selectedprimarycolor={selectedprimarycolor} selectedsecondarycolor={selectedsecondarycolor}  lowerpackage={lowerpackage} showinfofunction={showinfofunction} exteriorcolor={exteriorcolor} grille ={grille}setgrille={setgrille} upperpackage={upperpackage} setupperpackage={setupperpackage}/>
  </>)
}

export default LowerBodyPackage;