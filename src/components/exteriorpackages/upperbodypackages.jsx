import { useState } from 'react';
import './upperbodypackages.css';
import GrilleFinish from '../grillefinish/grillefinish';


const UpperBodyPackage=({exteriorcolor,selectedSeat,selectedprimarycolor, selectedsecondarycolor,lowerpackage,upperpackage,setupperpackage,showinfofunction,grille,setgrille})=>{
  
  // const [upperpackage,setupperpackage]=useState('bodycolor');

if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='bodycolor')
  {
   
    const upperbodycolorone=document.querySelector("#upperbodycolorone");


   const upperbodycolortwo= document.querySelector("#upperbodycolortwo");


    
    const currentupperbodyinfoimage=document.querySelector("#currentupperbodyinfoimage");
    
   const colorimage= document.querySelector("#colorimage img");

  //  const currentupperbodyinfoimage =document.querySelector("#currentupperbodyinfoimage");


   if(upperbodycolorone && upperbodycolortwo && currentupperbodyinfoimage && colorimage)
    {
      upperbodycolorone.src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      upperbodycolortwo.src="q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src=" ";
      currentupperbodyinfoimage.src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
   colorimage.src="q_buckinghamshire_green_body_color_lowerbody_package_body_color_upper_body_package_plate_information.jpg";
     
    }
  }


  if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='glossblack')
    {
     
      document.querySelector("#upperbodycolorone").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src="";
  
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    }

    if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='carbonfibre')
      {
        document.querySelector("#upperbodycolorone").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
        document.querySelector("#upperbodycolortwo").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
        document.querySelector("#upperbodycolorthree").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
    
        
        document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      }
    
if(exteriorcolor==='qquantumsilver' && lowerpackage==='bodycolor')
  {
    // console.log("There is no tommorow.");
    document.querySelector("#upperbodycolorone").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolortwo").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolorthree").src="";
    
    
    document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    }
    
  if(exteriorcolor==='qquantumsilver' && lowerpackage==='glossblack')
    {
      document.querySelector("#upperbodycolorone").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src="";

      document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    }

if(exteriorcolor==='qquantumsilver' && lowerpackage==='carbonfibre')
  {
    document.querySelector("#upperbodycolorone").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolortwo").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolorthree").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";

    
    document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
  }

  if(exteriorcolor==='qcasinoroyale' && lowerpackage==='bodycolor')
    {
      document.querySelector("#upperbodycolorone").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolortwo").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolorthree").src="";

    
    document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
  }

  if(exteriorcolor==='qcasinoroyale' && lowerpackage==='glossblack')
    {
      document.querySelector("#upperbodycolorone").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src="";

      document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    }

  if(exteriorcolor==='qcasinoroyale' && lowerpackage==='carbonfibre')
    {
      document.querySelector("#upperbodycolorone").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
  
      
      document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    }


    if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='bodycolor')
      {

        document.querySelector("#upperbodycolorone").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolortwo").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolorthree").src="";

    
    document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      }

    if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='glossblack')
      {
        document.querySelector("#upperbodycolorone").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src="";

      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      }
    if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='carbonfibre')
      {

        document.querySelector("#upperbodycolorone").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
  
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      }

      if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='bodycolor')
        {
          document.querySelector("#upperbodycolorone").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolortwo").src="q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolorthree").src=""
    
    document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
        }

        if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='glossblack')
          {
            document.querySelector("#upperbodycolorone").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src="";

      document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
          }

          if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='carbonfibre')
            {
              
        document.querySelector("#upperbodycolorone").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
        document.querySelector("#upperbodycolortwo").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
        document.querySelector("#upperbodycolorthree").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
    
        
        document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
            }

            if(exteriorcolor==='qseychellesblue' && lowerpackage==='bodycolor')
              {
                document.querySelector("#upperbodycolorone").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolortwo").src="q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolorthree").src=""
    
    document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
              }
            if(exteriorcolor==='qseychellesblue' && lowerpackage==='glossblack')
              {
                document.querySelector("#upperbodycolorone").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                document.querySelector("#upperbodycolortwo").src="q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                document.querySelector("#upperbodycolorthree").src="";
          
                document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
              }
            if(exteriorcolor==='qseychellesblue' && lowerpackage==='carbonfibre')
              {
                document.querySelector("#upperbodycolorone").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                document.querySelector("#upperbodycolortwo").src="q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                document.querySelector("#upperbodycolorthree").src="q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
            
                
                document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
              }

              if(exteriorcolor==='qionblue' && lowerpackage==='bodycolor' )
                {
                  document.querySelector("#upperbodycolorone").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolortwo").src="q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperbodycolorthree").src=""
    
    document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
                }
              if(exteriorcolor==='qionblue' && lowerpackage==='glossblack')
                {
                  document.querySelector("#upperbodycolorone").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                  document.querySelector("#upperbodycolortwo").src="q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                  document.querySelector("#upperbodycolorthree").src="";
            
                  document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                }
              if(exteriorcolor==='qionblue' && lowerpackage==='carbonfibre')
                {
                  document.querySelector("#upperbodycolorone").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                  document.querySelector("#upperbodycolortwo").src="q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                  document.querySelector("#upperbodycolorthree").src="q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
              
                  
                  document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                }

                if(exteriorcolor==='plasmablue' && lowerpackage==='bodycolor' )
                  {
                    document.querySelector("#upperbodycolorone").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolortwo").src="plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperbodycolorthree").src=""
      
      document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
                  }
                if(exteriorcolor==='plasmablue' && lowerpackage==='glossblack')
                  {
                    document.querySelector("#upperbodycolorone").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                    document.querySelector("#upperbodycolortwo").src="plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                    document.querySelector("#upperbodycolorthree").src="";
              
                    document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                  }
                if(exteriorcolor==='plasmablue' && lowerpackage==='carbonfibre')
                  {
                    document.querySelector("#upperbodycolorone").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                    document.querySelector("#upperbodycolortwo").src="plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                    document.querySelector("#upperbodycolorthree").src="plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
                
                    
                    document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                  }


                  if(exteriorcolor==='elwoodblue' && lowerpackage==='bodycolor' )
                    {
                      document.querySelector("#upperbodycolorone").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
        document.querySelector("#upperbodycolortwo").src="elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
        document.querySelector("#upperbodycolorthree").src=""
        
        document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
                    }
                  if(exteriorcolor==='elwoodblue' && lowerpackage==='glossblack')
                    {
                      document.querySelector("#upperbodycolorone").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                      document.querySelector("#upperbodycolortwo").src="elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                      document.querySelector("#upperbodycolorthree").src="";
                
                      document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                    }
                  if(exteriorcolor==='elwoodblue' && lowerpackage==='carbonfibre')
                    {
                      document.querySelector("#upperbodycolorone").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                      document.querySelector("#upperbodycolortwo").src="elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                      document.querySelector("#upperbodycolorthree").src="elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
                  
                      
                      document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                    }

                    if(exteriorcolor==='qdigitalviolet' && lowerpackage==='bodycolor' )
                      {
                        document.querySelector("#upperbodycolorone").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
          document.querySelector("#upperbodycolortwo").src="q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
          document.querySelector("#upperbodycolorthree").src=""
          
          document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
                      }
                    if(exteriorcolor==='qdigitalviolet' && lowerpackage==='glossblack')
                      {
                        document.querySelector("#upperbodycolorone").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                        document.querySelector("#upperbodycolortwo").src="q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                        document.querySelector("#upperbodycolorthree").src="";
                  
                        document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                      }
                    if(exteriorcolor==='qdigitalviolet' && lowerpackage==='carbonfibre')
                      {
                        document.querySelector("#upperbodycolorone").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                        document.querySelector("#upperbodycolortwo").src="q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                        document.querySelector("#upperbodycolorthree").src="q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
                    
                        
                        document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                      }
      

                      if(exteriorcolor==='stormpurple' && lowerpackage==='bodycolor' )
                        {
                          document.querySelector("#upperbodycolorone").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
            document.querySelector("#upperbodycolortwo").src="storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
            document.querySelector("#upperbodycolorthree").src=""
            
            document.querySelector("#currentupperbodyinfoimage").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
                        }
                      if(exteriorcolor==='stormpurple' && lowerpackage==='glossblack')
                        {
                          document.querySelector("#upperbodycolorone").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                          document.querySelector("#upperbodycolortwo").src="storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                          document.querySelector("#upperbodycolorthree").src="";
                    
                          document.querySelector("#currentupperbodyinfoimage").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
                        }
                      if(exteriorcolor==='stormpurple' && lowerpackage==='carbonfibre')
                        {
                          document.querySelector("#upperbodycolorone").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                          document.querySelector("#upperbodycolortwo").src="storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
                          document.querySelector("#upperbodycolorthree").src="storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
                      
                          
                          document.querySelector("#currentupperbodyinfoimage").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
                        }
    
  


    // if(exteriorcolor==='qsatintitaniumgrey' )

    const QBuckinghamshireGreenBodyColorLowerBodyColorUpperBody=()=>{
      document.querySelector("#img1").src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    
    }

    const QBuckinghamshireGreenBodyColorLowerGlossBlackUpperBody=()=>{
      document.querySelector("#img1").src="q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      document.querySelector("#infobuttonforupperbody").style.display="none";
    
    }

    const QBuckinghamshireGreenGlossBlackLowerBodyColorUpperBody=()=>{
      document.querySelector("#img1").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Color Upper Package";
    
      document.querySelector("#colorimage img").src="q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    
    }

    const QBuckinghamshireGreenGlossBlackLowerGlossBlackUpperBody=()=>{

      document.querySelector("#img1").src="q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      
      document.querySelector("#infobuttonforupperbody").style.display="none";
    
    }

    const QBuckinghamshireGreenCarbonFibreLowerBodyColorUpper=()=>{
      document.querySelector("#img1").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Colored Upper Package";
    
      document.querySelector("#colorimage img").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    const QBuckinghamshireGreenCarbonFibreLowerGlossBlackUpperBody=()=>{
      document.querySelector("#img1").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Colored Upper Package";
    
      
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    const QBuckinghamshireGreenCarbonFibreLowerCarbonFibreUpperBody=()=>{

      document.querySelector("#img1").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
      document.querySelector("#img2").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
    
      document.querySelector("#colorimage img").src="q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }
    

const QQuantumSilverBodyColorLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark.jpg";
        document.querySelector("#img2").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      }

}

const QQuantumSilverBodyColorLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      document.querySelector("#infobuttonforupperbody").style.display="none";
    
     
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_quantum_silver_bclbp_gbubp_dark.jpg";
        document.querySelector("#img2").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }
  
}

const QQuantumSilverGlossBlackLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Color Upper Package";
    
      document.querySelector("#colorimage img").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_quantum_silver_gblbp_bcubp_dark.jpg";
        document.querySelector("#img2").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      }

}

const QQuantumSilverGlossBlackLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {
      
      
        document.querySelector("#img1").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
        document.querySelector("#img2").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
        
        document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
        document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
      
       
        document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_quantum_silver_gblbp_gbubp_dark.jpg";
        document.querySelector("#img2").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }

}

const QQuantumSilverCarbonFibreLowerBodyColorUpper=()=>{


  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Colored Upper Package";
    
      document.querySelector("#colorimage img").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";

    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_quantum_silver_cflbp_bcubp_dark.jpg";
        document.querySelector("#img2").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
      }
}

const QQuantumSilverCarbonFibreLowerGlossBlackUpperBody=()=>{


  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Colored Upper Package";
    
      
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_quantum_silver_cflbp_gbubp_dark.jpg";
      document.querySelector("#img2").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }
}

const QQuantumSilverCarbonFibreLowerCarbonFibreUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
      document.querySelector("#img2").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
    
      document.querySelector("#colorimage img").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_quantum_silver_cflbp_cfubp_dark.jpg";
        document.querySelector("#img2").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      }

}

const QCasinoRoyaleBodyColorLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_casino_royale_body_color_lower_body_package_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_casino_royale_bclbp_bcubp_dark.jpg";
        document.querySelector("#img2").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      }
}

const QCasinoRoyaleBodyColorLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
   
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_casino_royale_bclbp_gbubp_dark.jpg";
      document.querySelector("#img2").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }
}

const QCasinoRoyaleGlossBlackLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      document.querySelector("#colorimage img").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_casino_royale_gblbp_bcubp_dark.jpg";
        document.querySelector("#img2").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      }
}

const QCasinoRoyaleGlossBlackLowerGlossBLackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_casino_royale_gblbp_gbubp_dark.jpg";
      document.querySelector("#img2").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }

}


const QCasinoRoyaleCarbonFibreLowerBodyColorUpperBody =()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
      document.querySelector("#img1").src="q_casino_royale_cflbp_bcubp_dark.jpg";
      document.querySelector("#img2").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
    }

}

const QCasinoRoyaleCarbonFibreLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
   
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
      document.querySelector("#img1").src="q_casino_royale_cflbp_gbubp_dark.jpg";
      document.querySelector("#img2").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    }

}

const QCasinoRoyaleCarbonFibreLowerCarbonFibreUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
      document.querySelector("#img2").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
    
      document.querySelector("#colorimage img").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }


    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_casino_royale_cflbp_cfubp_dark.jpg";
        document.querySelector("#img2").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      }
}


const QSatinTitaniumGreyBodyColorLowerBodyColorUpperBody=()=>{

 if(grille==='bright')
  {

    document.querySelector("#img1").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
      document.querySelector("#img1").src="q_satin_titanium_grey_bclbp_bcubp_dark.jpg";
    document.querySelector("#img2").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
    }

}

const QSatinTitaniumGreyBodyColorLowerGlossBlackUpperBody= ()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
     
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }
    
    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_titanium_grey_bclbp_gbubp_dark.jpg";
        document.querySelector("#img2").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }
}

const QSatinTitaniumGreyGlossBlackLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      document.querySelector("#colorimage img").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_titanium_grey_gblbp_bcubp_dark.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      }


}

const QSatinTitaniumGreyGlossBlackLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
   
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_titanium_grey_gblbp_gbubp_dark.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }

}

const QSatinTitaniumGreyCarbonFibreLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_bcubp_dark.jpg";
        document.querySelector("#img2").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
        document.querySelector("#img3").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
        document.querySelector("#img4").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
      }
}

const QSatinTitaniumGreyCarbonFibreLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_gbubp_dark.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      }

}

const QSatinTitaniumGreyCarbonFibreLowerCarbonFibreUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
    
      document.querySelector("#colorimage img").src="q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_titanium_grey_cflbp_cfubp_dark.jpg";
      
      }
}

 const QSatinXenonGreyBodyColorLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_xenon_grey_bclbp_bcubp_dark.jpg";
      }

}

 const QSatinXenonGreyBodyColorLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
   
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_xenon_grey_bclbp_gbubp_dark.jpg";
      }
}

 const QSatinXenonGreyGlossBlackLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      document.querySelector("#colorimage img").src="q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
        document.querySelector("#img1").src="q_satin_xenon_grey_gblbp_bcubp_dark.jpg";
      }
}

const QSatinXenonGreyGlossBlackLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
  
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_satin_xenon_grey_gblbp_gbubp_dark.jpg";

    }

}

const QSatinXenonGreyCarbonFibreLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {
      document.querySelector("#img1").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";

    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_bcubp_dark.jpg";

      }
}

const QSatinXenonGreyCarbonFibreLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
 
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_gbubp_dark.jpg";

      }
}

const QSatinXenonGreyCarbonFibreLowerCarbonFibreUpperBody=()=>{
  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
      document.querySelector("#img2").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
    
      document.querySelector("#colorimage img").src="q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_satin_xenon_grey_cflbp_cfubp_dark.jpg";

      }
}

 const QSeychellesBlueBodyColorLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_seychelles_blue_bclbp_bcubp_dark.jpg";

      }
}

const QSeychellesBlueBodyColorLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
     
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_seychelles_blue_bclbp_gbubp_dark.jpg";

      }
}

const QSeychellesBlueGlossBlackLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
    document.querySelector("#colorimage img").src="q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Gloss Black Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_seychelles_blue_gblbp_bcubp_dark.jpg";

    }

}
const QSeychellesBlueGlossBlackLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  

    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_seychelles_blue_gblbp_gbubp_dark.jpg";

    }

}
const QSeychellesBlueCarbonFibreLowerBodyColorUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_seychelles_blue_cflbp_bcubp_dark.jpg";

      }
}

const QSeychellesBlueCarbonFibreLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
      
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_seychelles_blue_cflbp_gbubp_dark.jpg";

      }
}

const QSeychellesBlueCarbonFibreLowerCarbonFibreUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
    document.querySelector("#img2").src="q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
  
    document.querySelector("#colorimage img").src="q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_seychelles_blue_cflbp_cfubp_dark.jpg";

    }

}

const QIonBlueBodyColorLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_ion_blue_bclbp_bcubp_dark.jpg";

    }

}

const QIonBlueBodyColorLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
  
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_ion_bclbp_gbubp_dark.jpg";

    }

}

const QIonBlueGlossBlackLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {
    
      document.querySelector("#img1").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";

  }

  if(grille==='dark')
    {
      document.querySelector("#img1").src="q_ion_blue_gblbp_bcubp_dark.jpg";

    }
}

const QIonBlueGlossBlackLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
    
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_ion_blue_gblbp_gbubp_dark.jpg";

    }

}

const QIonBlueCarbonFibreLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_ion_blue_cflbp_bcubp_dark.jpg";

    }

}

const QIonBlueCarbonFibreLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
   
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_ion_blue_cflbp_gbubp_dark.jpg";

    }

}

const QIonBlueCarbonFibreLowerCarbonFibreUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
      document.querySelector("#img2").src="q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
    
      document.querySelector("#colorimage img").src="q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="q_ion_blue_cflbp_cfubp_dark.jpg";

      }
}

const PlasmaBlueBodyColorLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    
      document.querySelector("#img1").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package.jpg";
      document.querySelector("#img2").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
    
      document.querySelector("#colorimage img").src="plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
      document.querySelector("#img1").src="plasma_blue_bclbp_bcubp_dark.jpg";

    }
}

const PlasmaBlueBodyColorLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
    
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="plasma_blue_bclbp_gbubp_dark.jpg";

    }

}

const PlasmaBlueGlossBlackLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="plasma_blue_gblbp_bcubp_dark.jpg";

    }

}

const PlasmaBlueGlossBlackLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
  
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="plasma_blue_gblbp_gbubp_dark.jpg";

    }

}

const PlasmaBlueCarbonFibreLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="plasma_blue_cflbp_bcubp.jpg";

    }

}

const PlasmaBlueCarbonFibreLowerGlossBlackUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
     
      document.querySelector("#infobuttonforupperbody").style.display="none";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="plasma_blue_cflbp_gbubp_dark.jpg";

      }
}

const PlasmaBlueCarbonFibreLowerCarbonFibreUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
    document.querySelector("#img2").src="plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
  
    document.querySelector("#colorimage img").src="plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="plasma_blue_cflbp_cfubp_dark.jpg";

    }

}

const ElwoodBlueBodyColorLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }


  if(grille==='dark')
    {
    document.querySelector("#img1").src="elwood_blue_bclbp_bcubp_dark.jpg";

    }


}

const ElwoodBlueBodyColorLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
 
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }


  if(grille==='dark')
    {
    document.querySelector("#img1").src="elwood_blue_bclbp_gbubp_dark.jpg";

    }

}

const ElwoodBlueGlossBlackLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="elwood_blue_gblbp_bcubp_dark.jpg";

    }

}

const ElwoodBlueGlossBlackLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
   
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="elwood_blue_gblbp_gbubp_dark.jpg";

    }

}

const ElwoodBlueCarbonFibreLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="elwood_blue_cflbp_bcubp_dark.jpg";

    }

}

const ElwoodBlueCarbonFibreLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
    
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="elwood_blue_cflbp_gbubp_dark.jpg";

    }

}

const ElwoodBlueCarbonFibreLowerCarbonFibreUpperBody=()=>{

  if(grille==='bright')
    {

      document.querySelector("#img1").src="elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
      document.querySelector("#img2").src="elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
    
      document.querySelector("#colorimage img").src="elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
      document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
    
      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display="block";
    }

    if(grille==='dark')
      {
      document.querySelector("#img1").src="elwood_blue_cflbp_cfubp_dark.jpg";

      }
}

const QDigitalVioletBodyColorLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {
    
    document.querySelector("#img1").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_digital_violet_bclbp_bcubp_dark.jpg";

    }

}

const QDigitalVioletBodyColorLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
 
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_digital_violet_bclbp_gbubp_dark.jpg";

    }

}

const QDigitalVioletGlossBlackLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }


  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_digital_violet_gblbp_bcubp_dark.jpg";

    }

  
}

const QDigitalVioletGlossBlackLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
   
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_digital_violet_gblbp_gbubp_dark.jpg";

    }

}

const QDigitalVioletCarbonFibreLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {
    document.querySelector("#img1").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";

  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_digital_violet_cflbp_bcubp_dark.jpg";

    }

}

const QDigitalVioletCarbonFibreLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  

    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_digital_violet_cflbp_gbubp_dark.jpg";

    }

}

const QDigitalVioletCarbonFibreLowerCarbonFibreUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
    document.querySelector("#img2").src="q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
  
    document.querySelector("#colorimage img").src="q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="q_digital_violet_cflbp_cfubp_dark.jpg";

    }

}

const StormPurpleBodyColorLowerBodyColorUpperBody = ()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="storm_purple_bclbp_bcubp_dark.jpg";

    }

}

const StormPurpleBodyColorLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="storm_purple_body_color_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
    
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }


  if(grille==='dark')
    {
    document.querySelector("#img1").src="storm_purple_bclbp_gbubp_dark.jpg";

    }

}

const StormPurpleGlossBlackLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="storm_purple_gblbp_bcubp_dark.jpg";

    }

}

const StormPurpleGlossBlackLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
  
    
    document.querySelector("#infobuttonforupperbody").style.display="none";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="storm_purple_gblbp_gbubp_dark.jpg";

    }

}

const StormPurpleCarbonFibreLowerBodyColorUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Body Coloured Upper Package";
  
    document.querySelector("#colorimage img").src="storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="storm_purple_cflbp_bcubp_dark.jpg";

    }

}

const StormPurpleCarbonFibreLowerGlossBlackUpperBody=()=>{

if(grille==='bright')
  {
    
      document.querySelector("#img1").src="storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src="storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src="storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src="storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";
      
      document.querySelector("#currentupperbodyinfoimage").src="storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate.jpg";
      document.querySelector("#upperpackagename").innerHTML="Gloss Black Upper Package";
    
     
      document.querySelector("#infobuttonforupperbody").style.display="none";

  }


  if(grille==='dark')
    {
      document.querySelector("#img1").src="storm_purple_cflbp_gbubp_dark.jpg";

    }
}

const StormPurpleCarbonFibreLowerCarbonFibreUpperBody=()=>{

if(grille==='bright')
  {

    document.querySelector("#img1").src="storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package.jpg";
    document.querySelector("#img2").src="storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src="storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
    document.querySelector("#img4").src="storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
    
    document.querySelector("#currentupperbodyinfoimage").src="storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
    document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";
  
    document.querySelector("#colorimage img").src="storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
    document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
  
    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display="block";
  }

  if(grille==='dark')
    {
    document.querySelector("#img1").src="storm_purple_cflbp_cfubp_dark.jpg";

    }

}

// const QQuantumSilverCarbonFibreUpperBody=()=>{
//   document.querySelector("#img1").src="q_quantum_silver_body_color_lower_body_package_carbon_fibre_upper_body_package.jpg";
//   document.querySelector("#img2").src="q_quantum_silver_body_color_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview.jpg";
//   document.querySelector("#img3").src="q_quantum_silver_body_color_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview.jpg";
//   document.querySelector("#img4").src="q_quantum_silver_body_color_lower_body_package_carbon_fibre_upper_body_package_sideview.jpg";
  
//   document.querySelector("#currentupperbodyinfoimage").src="q_quantum_silver_body_color_lower_body_package_carbon_fibre_upper_body_package_plate.jpg";
//   document.querySelector("#upperpackagename").innerHTML="Carbon Fibre Upper Package";

//   document.querySelector("#colorimage img").src="q_quantum_silver_body_color_lower_body_package_carbon_fibre_upper_body_package_plate_information.jpg";
//   document.querySelector("#colorcardcolorname").innerHTML="Carbon Fibre Upper Package";
//   document.querySelector("#colorcardcolorinformation").innerHTML="Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";
// }

   const BodyColorUpperPackages=()=>{

    setupperpackage('bodycolor');

document.querySelector("#uppercolorborderone").style.borderBottom="2px solid white";
document.querySelector("#uppercolorbordertwo").style.borderBottom="none";
document.querySelector("#uppercolorborderthree").style.borderBottom="none";

if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='bodycolor')
  {QBuckinghamshireGreenBodyColorLowerBodyColorUpperBody();}

if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='glossblack')
{QBuckinghamshireGreenGlossBlackLowerBodyColorUpperBody();}

if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='carbonfibre')
{QBuckinghamshireGreenCarbonFibreLowerBodyColorUpper();}


    if(exteriorcolor==='qquantumsilver' && lowerpackage==='bodycolor')
      {QQuantumSilverBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='qquantumsilver' && lowerpackage==='glossblack')
    {QQuantumSilverGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='qquantumsilver' && lowerpackage==='carbonfibre')
    {QQuantumSilverCarbonFibreLowerBodyColorUpper();}

  if(exteriorcolor==='qcasinoroyale' && lowerpackage==='bodycolor')
    {QCasinoRoyaleBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='qcasinoroyale' && lowerpackage==='glossblack')
    {QCasinoRoyaleGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='qcasinoroyale' && lowerpackage==='carbonfibre')
    {QCasinoRoyaleCarbonFibreLowerBodyColorUpperBody();}

  if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='bodycolor')
    {QSatinTitaniumGreyBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='glossblack')
    {QSatinTitaniumGreyGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='carbonfibre')
    {QSatinTitaniumGreyCarbonFibreLowerBodyColorUpperBody();}

  if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='bodycolor')
    {QSatinXenonGreyBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='glossblack')
    {QSatinXenonGreyGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='carbonfibre')
    {QSatinXenonGreyCarbonFibreLowerBodyColorUpperBody();}
if(exteriorcolor==='qseychellesblue' && lowerpackage==='bodycolor')
  {
    QSeychellesBlueBodyColorLowerBodyColorUpperBody();
  }

  if(exteriorcolor==='qseychellesblue' && lowerpackage==='glossblack')
    {QSeychellesBlueGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='qseychellesblue' && lowerpackage==='carbonfibre')
    {QSeychellesBlueCarbonFibreLowerBodyColorUpperBody();}

  if(exteriorcolor==='qionblue' && lowerpackage==='bodycolor'

  )
  {QIonBlueBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='qionblue' && lowerpackage==='glossblack')
    {QIonBlueGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='qionblue' && lowerpackage==='carbonfibre')
    {QIonBlueCarbonFibreLowerBodyColorUpperBody();}

  if(exteriorcolor==='plasmablue' && lowerpackage==='bodycolor'

  )
  {PlasmaBlueBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='plasmablue' && lowerpackage==='glossblack')
    {PlasmaBlueGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='plasmablue' && lowerpackage==='carbonfibre')
    {PlasmaBlueCarbonFibreLowerBodyColorUpperBody();}


  if(exteriorcolor==='elwoodblue' && lowerpackage==='bodycolor'

  )
  {ElwoodBlueBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='elwoodblue' && lowerpackage==='glossblack')
    {ElwoodBlueGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='elwoodblue' && lowerpackage==='carbonfibre')
    {ElwoodBlueCarbonFibreLowerBodyColorUpperBody();}


  if(exteriorcolor==='qdigitalviolet' && lowerpackage==='bodycolor')
  {QDigitalVioletBodyColorLowerBodyColorUpperBody();}

  if(exteriorcolor==='qdigitalviolet' && lowerpackage==='glossblack')
    {QDigitalVioletGlossBlackLowerBodyColorUpperBody();}

  if(exteriorcolor==='qdigitalviolet' && lowerpackage==='carbonfibre')
    {QDigitalVioletCarbonFibreLowerBodyColorUpperBody();}

  if(exteriorcolor==='stormpurple' && lowerpackage==='bodycolor')
    {StormPurpleBodyColorLowerBodyColorUpperBody();}
  
    if(exteriorcolor==='stormpurple' && lowerpackage==='glossblack')
      {StormPurpleGlossBlackLowerBodyColorUpperBody();}
  
    if(exteriorcolor==='stormpurple' && lowerpackage==='carbonfibre')
      {StormPurpleCarbonFibreLowerBodyColorUpperBody();}
  

    }


    const GlossBlackUpperPackages=()=>{
      setupperpackage('glossblack');


      document.querySelector("#uppercolorborderone").style.borderBottom="none";
      document.querySelector("#uppercolorbordertwo").style.borderBottom="2px solid white";
      document.querySelector("#uppercolorborderthree").style.borderBottom="none";


      if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='bodycolor')
        {QBuckinghamshireGreenBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='glossblack')
        {QBuckinghamshireGreenGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='carbonfibre')
        {
          QBuckinghamshireGreenCarbonFibreLowerGlossBlackUpperBody();
        }

      if(exteriorcolor==='qquantumsilver' && lowerpackage==='bodycolor')
        {QQuantumSilverBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qquantumsilver' && lowerpackage==='glossblack')
        {QQuantumSilverGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qquantumsilver' && lowerpackage==='carbonfibre')
        {
          QQuantumSilverCarbonFibreLowerGlossBlackUpperBody();
        }
      if (exteriorcolor==='qcasinoroyale' && lowerpackage==='bodycolor')
        {QCasinoRoyaleBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qcasinoroyale' && lowerpackage==='glossblack')
        {QCasinoRoyaleGlossBlackLowerGlossBLackUpperBody();}

      if(exteriorcolor==='qcasinoroyale' && lowerpackage==='carbonfibre')
        {QCasinoRoyaleCarbonFibreLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='bodycolor')
        {QSatinTitaniumGreyBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='glossblack')
        {QSatinTitaniumGreyGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='carbonfibre')
        {QSatinTitaniumGreyCarbonFibreLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='bodycolor')
        {QSatinXenonGreyBodyColorLowerGlossBlackUpperBody();}
      if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='glossblack')
        {QSatinXenonGreyGlossBlackLowerGlossBlackUpperBody();}
      if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='carbonfibre')
        {QSatinXenonGreyCarbonFibreLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qseychellesblue' && lowerpackage==='bodycolor')
        {QSeychellesBlueBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qseychellesblue' && lowerpackage==='glossblack')
        {QSeychellesBlueGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qseychellesblue' && lowerpackage==='carbonfibre')
        {QSeychellesBlueCarbonFibreLowerGlossBlackUpperBody();}
      if(exteriorcolor==='qionblue' && lowerpackage==='bodycolor')
        {QIonBlueBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qionblue' && lowerpackage==='glossblack')
        {QIonBlueGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qionblue' && lowerpackage==='carbonfibre')
        {QIonBlueCarbonFibreLowerGlossBlackUpperBody();}


      if(exteriorcolor==='plasmablue' && lowerpackage==='bodycolor')
        {PlasmaBlueBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='plasmablue' && lowerpackage==='glossblack')
        {PlasmaBlueGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='plasmablue' && lowerpackage==='carbonfibre')
        {PlasmaBlueCarbonFibreLowerGlossBlackUpperBody();}


      if(exteriorcolor==='elwoodblue' && lowerpackage==='bodycolor')
        {ElwoodBlueBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='elwoodblue' && lowerpackage==='glossblack')
        {ElwoodBlueGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='elwoodblue' && lowerpackage==='carbonfibre')
        {ElwoodBlueCarbonFibreLowerGlossBlackUpperBody();}



      if(exteriorcolor==='qdigitalviolet' && lowerpackage==='bodycolor')
        {QDigitalVioletBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qdigitalviolet' && lowerpackage==='glossblack')
        {QDigitalVioletGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='qdigitalviolet' && lowerpackage==='carbonfibre')
        {QDigitalVioletCarbonFibreLowerGlossBlackUpperBody();}


      if(exteriorcolor==='stormpurple' && lowerpackage==='bodycolor')
        {StormPurpleBodyColorLowerGlossBlackUpperBody();}

      if(exteriorcolor==='stormpurple' && lowerpackage==='glossblack')
        {StormPurpleGlossBlackLowerGlossBlackUpperBody();}

      if(exteriorcolor==='stormpurple' && lowerpackage==='carbonfibre')
        {StormPurpleCarbonFibreLowerGlossBlackUpperBody();}


    }

    const CarbonFibreUpperPackages=()=>{
      setupperpackage('carbonfibre');

      document.querySelector("#uppercolorborderone").style.borderBottom="none";
      document.querySelector("#uppercolorbordertwo").style.borderBottom="none";
      document.querySelector("#uppercolorborderthree").style.borderBottom="2px solid white";
      
      if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='carbonfibre')
        {
          QBuckinghamshireGreenCarbonFibreLowerCarbonFibreUpperBody();
        }

if(exteriorcolor==='qquantumsilver' && lowerpackage==='carbonfibre')
  {
    QQuantumSilverCarbonFibreLowerCarbonFibreUpperBody();
  }

  if(exteriorcolor==='qcasinoroyale' && lowerpackage==='carbonfibre')
    {QCasinoRoyaleCarbonFibreLowerCarbonFibreUpperBody();}

  if(exteriorcolor==='qsatintitaniumgrey' && lowerpackage==='carbonfibre')
    {QSatinTitaniumGreyCarbonFibreLowerCarbonFibreUpperBody();}

  if(exteriorcolor==='qsatinxenongrey' && lowerpackage==='carbonfibre')
    {QSatinXenonGreyCarbonFibreLowerCarbonFibreUpperBody();}

  if(exteriorcolor==='qseychellesblue' && lowerpackage==='carbonfibre')
    {QSeychellesBlueCarbonFibreLowerCarbonFibreUpperBody();}

  if(exteriorcolor==='qionblue' && lowerpackage==='carbonfibre')
    {QIonBlueCarbonFibreLowerCarbonFibreUpperBody();}

  if(exteriorcolor==='plasmablue' && lowerpackage==='carbonfibre')
    {PlasmaBlueCarbonFibreLowerCarbonFibreUpperBody();}


  if(exteriorcolor==='elwoodblue' && lowerpackage==='carbonfibre')
    {ElwoodBlueCarbonFibreLowerCarbonFibreUpperBody();}

  if(exteriorcolor==='qdigitalviolet' && lowerpackage==='carbonfibre')
    {QDigitalVioletCarbonFibreLowerCarbonFibreUpperBody();}
  
  if(exteriorcolor==='stormpurple' && lowerpackage==='carbonfibre')
    {StormPurpleCarbonFibreLowerCarbonFibreUpperBody();}


    }
  return(<>
  
  <div id="upperpackagediv">
            <div id="upperpackage">
              <div id="upperpackageplatesdiv">

              <div id="upperpackageimagesplate">
                <div className="upperpackagehoverhider" id="uppercolorborderone"><img src="q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate.jpg" className="upperbodyscaling" alt=""  id="upperbodycolorone"  onClick={BodyColorUpperPackages}/></div>
                <div className="upperpackagehoverhider" id="uppercolorbordertwo"><img src="q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_plate.jpg" alt="" className="upperbodyscaling" id="upperbodycolortwo"  onClick={GlossBlackUpperPackages}/></div>
                <div className="upperpackagehoverhider" id="uppercolorborderthree" ><img src="q_quantum_silver_carbon_fibre_lower_body_package_plate.jpg" className="upperbodyscaling" alt="" id="upperbodycolorthree" onClick={CarbonFibreUpperPackages}/></div>
              </div>
              </div>

              <div id="upperpackageimageinformationsection">
                <div id="upperpackageimagewithinfo">
                  <img src="q_quantum_silver_gloss_black_lower_body_package_plate.jpg" alt="" id="currentupperbodyinfoimage" />
                  <img src="infobutton.png" alt="" id="infobuttonforupperbody"  onClick={showinfofunction}/>
                </div>
                <div id="upperpackageinformationcontent">
                  <div id="upperpackagename">Body Colored Upper Package</div>
                </div>
              </div>
            </div>
          </div>
  <GrilleFinish selectedSeat={selectedSeat} selectedprimarycolor={selectedprimarycolor} selectedsecondarycolor ={selectedsecondarycolor}showinfofunction={showinfofunction} exteriorcolor={exteriorcolor} lowerpackage={lowerpackage} upperpackage={upperpackage}  grille ={grille} setgrille={setgrille}/>
  </>)
}

export default UpperBodyPackage;