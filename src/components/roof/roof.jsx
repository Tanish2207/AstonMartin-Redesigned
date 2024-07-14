import './roof.css';

import Wheels from '../wheels/wheels';

const Roof=({selectedSeat, selectedprimarycolor, selectedsecondarycolor,showinfofunction, exteriorcolor,lowerpackage, upperpackage,  grille,setgrille})=>{
  
    if(exteriorcolor==='qquantumsilver')
    {
      document.querySelector("#roofbodycolorone").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored_plate.jpg";
      // document.querySelector("#roofbodycolortwo").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_black_plate.jpg";
      // document.querySelector("#roofbodycolorthree").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre_plate.jpg";
  
      // document.querySelector("#roofbodycolorfour").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof_plate.jpg";


      document.querySelector("#currentroofbodyinfoimage").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored_plate.jpg";
        document.querySelector("#roofpackagename").innerHTML="Gloss Black";

        document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
        document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";

        document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854134/q_quantum_silver_gloss_black_roof_plate_infomation_spwspr.jpg";

    }

    if(exteriorcolor==='qsatintitaniumgrey')
    {
      document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720853269/q_satin_titanium_grey_gloss_black_roof_plate_vg6cc4.jpg";

      document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720853269/q_satin_titanium_grey_gloss_black_roof_plate_vg6cc4.jpg";
      document.querySelector("#roofpackagename").innerHTML="Gloss Black";
      
            document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
              document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";

      document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854133/q_satin_titanium_grey_gloss_black_roof_plate_information_barfv6.jpg";

    }

    if(exteriorcolor==='qsatinxenongrey')
    {
      document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720853269/q_satin_xenon_grey_gloss_black_roof_qtygaz.jpg";

      document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720853269/q_satin_xenon_grey_gloss_black_roof_qtygaz.jpg";
      document.querySelector("#roofpackagename").innerHTML="Gloss Black";

      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
        document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";

      document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854134/q_satin_xenon_grey_gloss_black_roof_plate_information_zbcdx9.jpg";

    }

    if(exteriorcolor==='qcasinoroyale')
    {
      document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720853269/q_casino_royale_gloss_black_roof_plate_c5mmux.jpg";

      document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720853269/q_casino_royale_gloss_black_roof_plate_c5mmux.jpg";
      document.querySelector("#roofpackagename").innerHTML="Gloss Black";

      document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
        document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";

      document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720854133/q_casino_royale_gloss_black_roof_plate_information_tss0jh.jpg";

    }


    if(exteriorcolor==='qseychellesblue')
      {
        document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720855902/q_seychelles_blue_gloss_black_roof_plate_bye22u.jpg";
  
        document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720855902/q_seychelles_blue_gloss_black_roof_plate_bye22u.jpg";
        document.querySelector("#roofpackagename").innerHTML="Gloss Black";
  
        document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
          document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";
  
        document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720855903/q_seychelles_blue_gloss_black_roof_plate_information_ksdmvr.jpg";
  
      }

      if(exteriorcolor==='qionblue')
        {
          document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856594/q_ion_blue_gloss_black_roof_plate_cscscp.jpg";
    
          document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856594/q_ion_blue_gloss_black_roof_plate_cscscp.jpg";
          document.querySelector("#roofpackagename").innerHTML="Gloss Black";
    
          document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
            document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";
    
          document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856514/q_ion_blue_gloss_black_roof_plate_information_prziv5.jpg";
    
        }

        if(exteriorcolor==='plasmablue')
          {
            document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/plasma_blue_gloss_black_roof_plate_oy4obc.jpg";
      
            document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/plasma_blue_gloss_black_roof_plate_oy4obc.jpg";
            document.querySelector("#roofpackagename").innerHTML="Gloss Black";
      
            document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
              document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";
      
            document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/plasma_blue_gloss_black_roof_plate_information_cep2oc.jpg";
      
          }

          if(exteriorcolor==='elwoodblue')
            {
              document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/elwood_blue_gloss_black_roof_plate_lkbega.jpg";
        
              document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/elwood_blue_gloss_black_roof_plate_lkbega.jpg";
              document.querySelector("#roofpackagename").innerHTML="Gloss Black";
        
              document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
                document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";
        
              document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/elwood_blue_gloss_black_roof_plate_information_zfvan8.jpg";
        
            }

            if(exteriorcolor==='qdigitalviolet')
              {
                document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856495/q_digital_violet_gloss_black_roof_plate_sf3rq6.jpg";
          
                document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856495/q_digital_violet_gloss_black_roof_plate_sf3rq6.jpg";
                document.querySelector("#roofpackagename").innerHTML="Gloss Black";
          
          
                
                document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
                document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";
                document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856496/q_digital_violet_gloss_black_roof_plate_information_yokqpz.jpg";
              }

              if(exteriorcolor==='stormpurple')
                {
                  document.querySelector("#roofbodycolorone").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856495/storm_purple_gloss_black_roof_plate_jczjpb.jpg";
            
                  document.querySelector("#currentroofbodyinfoimage").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856495/storm_purple_gloss_black_roof_plate_jczjpb.jpg";
                  document.querySelector("#roofpackagename").innerHTML="Gloss Black";
            
            
                  
                  document.querySelector("#colorcardcolorname").innerHTML="Gloss Black";
                  document.querySelector("#colorcardcolorinformation").innerHTML="A deep gloss black finish to the roof panel";
                  document.querySelector("#colorimage img").src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720856495/storm_purple_gloss_black_roof_plate_information_jbdqey.jpg";
                }



//   const BodyColouredRoof=()=>{
//     document.querySelector("#img2").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacklowview.jpg";
//     document.querySelector("#img3").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacktopview.jpg";
//     document.querySelector("#img4").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_leftsidebacklowview.jpg";


//   document.querySelector("#roofcolorborderone").style.borderBottom="2px solid white";
//   document.querySelector("#roofcolorbordertwo").style.borderBottom="none";
//   document.querySelector("#roofcolorborderthree").style.borderBottom="none";
//   document.querySelector("#roofcolorborderfour").style.borderBottom="none";


// //   console.log(exteriorcolor)
// //   console.log(lowerpackage)
// //   console.log(upperpackage)
// //   console.log(grille)
// //   console.log(selectedSeat)
// // console.log(selectedprimarycolor)
// // console.log(selectedsecondarycolor)
//     if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='bodycolor' && upperpackage==='bodycolor' && grille==='bright')
//     {

//      if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//      {
//        document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored.jpg";
      
       
//       }
//       if(selctedcolor==='performance' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='onyxblack')
//       {
//         document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_onyx_black_roof_body_colored.jpg";
//       }
      
//     else if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//       {
//         document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored.jpg"
//         console.log("alive")
//       }

      
//     }


//     if(exteriorcolor==='qquantumsilver' && lowerpackage==='bodycolor' && upperpackage==='bodycolor'  )
//       {
        
//         document.querySelector("#currentroofbodyinfoimage").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored_plate.jpg";
//         document.querySelector("#roofpackagename").innerHTML="Body Colored";
        
        

//         if(grille==='bright')
//         {

//           document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored.jpg";
//         document.querySelector("#img2").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacklowview.jpg";
//         document.querySelector("#img3").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacktopview.jpg";
//         document.querySelector("#img4").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_body_colored_leftsidebacklowview.jpg";

//         if(selectedSeat==='sportsplus')
//         {

//         }

//         if(selectedSeat==='performance')
//         {

//         }

//         }

//         if(grille==='dark')
//         {
//           document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark_s_p_metallic_black_s_oxford_tan_roof_body_colored.jpg";
         
//         }
//     }

//   }

//   const GlossBlackRoof=()=>{
//     document.querySelector("#img2").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacklowview.jpg";
//     document.querySelector("#img3").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacktopview.jpg";
//     document.querySelector("#img4").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_leftsidebacklowview.jpg";

//     document.querySelector("#roofcolorbordertwo").style.borderBottom="2px solid white";
//     document.querySelector("#roofcolorborderone").style.borderBottom="none";
//     document.querySelector("#roofcolorborderthree").style.borderBottom="none";
//     document.querySelector("#roofcolorborderfour").style.borderBottom="none";

//     if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='bodycolor' && upperpackage==='bodycolor' && grille==='bright')
//       {
//         if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//           {
//             document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_gloss_black.jpg";
     
//           }
     
//           if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//           {
//            document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_black.jpg"
//           }
//       }

//       if(exteriorcolor==='qquantumsilver' && lowerpackage==='bodycolor' && upperpackage==='bodycolor' )
//       {
//         document.querySelector("#currentroofbodyinfoimage").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_black_plate.jpg";
//         document.querySelector("#roofpackagename").innerHTML="Gloss Black";
        
//         if(grille==='bright')
//         {

//           document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_black.jpg";
//         document.querySelector("#img2").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_black_rightsidebacklowview.jpg";
//         document.querySelector("#img3").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_black_rightsidebacktopview.jpg";
//         document.querySelector("#img4").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_black_leftsidebacklowview.jpg";
//         }

//         if(grille==='dark')
//           {
//             document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark_s_p_metallic_black_s_oxford_tan_roof_gloss_black.jpg";
           
//           }
//         }

//   }


//   const GlossCarbonFibreRoof=()=>{


//     document.querySelector("#img2").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacklowview.jpg";
//     document.querySelector("#img3").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacktopview.jpg";
//     document.querySelector("#img4").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_leftsidebacklowview.jpg";

//     document.querySelector("#roofcolorborderthree").style.borderBottom="2px solid white";
//     document.querySelector("#roofcolorborderone").style.borderBottom="none";
//     document.querySelector("#roofcolorbordertwo").style.borderBottom="none";
//     document.querySelector("#roofcolorborderfour").style.borderBottom="none";

//     if(exteriorcolor==='qbuckinghamshiregreen' && lowerpackage==='bodycolor' && upperpackage==='bodycolor' && grille==='bright')
//       {
//         if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//           {
//             document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre.jpg";
     
//           }
     
//           if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//           {
//            document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre.jpg"
//           }
        
//       }

//       if(exteriorcolor==='qquantumsilver' && lowerpackage==='bodycolor' && upperpackage==='bodycolor' )
//         {
          
//           document.querySelector("#currentroofbodyinfoimage").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre_plate.jpg";
//           document.querySelector("#roofpackagename").innerHTML="Body Colored";
          
          

//           if(grille==='bright')
//           {

//             document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre.jpg";
//           document.querySelector("#img2").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre_rightsidebacklowview.jpg";
//           document.querySelector("#img3").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre_rightsidebacktopview.jpg";
//           document.querySelector("#img4").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre_leftsidebacklowview.jpg";
//           }

//           if(grille==='dark')
//             {
//               document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark_s_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre.jpg";
             
//             }
//       }




//   }


//   const PanoramicGlassRoof=()=>{
//     // document.querySelector("#img2").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacklowview.jpg";
//     // document.querySelector("#img3").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacktopview.jpg";
//     // document.querySelector("#img4").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_leftsidebacklowview.jpg";

//     document.querySelector("#roofcolorborderfour").style.borderBottom="2px solid white";
//     document.querySelector("#roofcolorborderone").style.borderBottom="none";
//     document.querySelector("#roofcolorbordertwo").style.borderBottom="none";
//     document.querySelector("#roofcolorborderthree").style.borderBottom="none";

//     if(exteriorcolor==='qbuckinghamshiregreen' )
//       {
//         // if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//         //   {
//         //     document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof.jpg";
     
//         //   }
     
//         //   if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//         //   {
//         //    document.querySelector("#img1").src="q_buckinghamshire_green_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof.jpg"
//         //   }
        

//         if( lowerpackage==='bodycolor' && upperpackage==='bodycolor')
//         {

//         }

//         if(lowerpackage==='glossblack' && upperpackage==='bodycolor')
//         {
//           if(grille==='bright')
//           {
//             if(selectedSeat==='performance')
//             {

//               if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//               {document.querySelector("#img1").src="q_buckinghamshire_green_gblbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored.jpg"
//                 document.querySelector("#img2").src="q_buckinghamshire_green_gblbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacklowview.jpg";
//                 document.querySelector("#img3").src="q_buckinghamshire_green_gblbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_rightsidebacktopview.jpg";
//                 document.querySelector("#img4").src="q_buckinghamshire_green_gblbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_body_colored_leftsidebacklowview.jpg";
            
//               }
//             }
//           }
//         }
//       }


//       if(exteriorcolor==='qquantumsilver' && lowerpackage==='bodycolor' && upperpackage==='bodycolor' )
//         {
          
//           document.querySelector("#currentroofbodyinfoimage").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof_plate.jpg";
//           document.querySelector("#roofpackagename").innerHTML="Body Colored";

//          if ( grille==='bright')
//          {

//            document.querySelector("#img2").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof_rightsidebacklowview.jpg";
//            document.querySelector("#img3").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof_rightsidebacktopview.jpg";
//            document.querySelector("#img4").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof_leftsidebacklowview.jpg";
           
//            if(selectedSeat==='sportsplus')
//            {

//             if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//             {
//               document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof.jpg";

//             }

//             if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='chancellorred')
//             {
//               document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright_s_p_metallic_black_s_chancellor_red_roof_panoramic_glass_roof.jpg";

//             }
  
           
//            }
          
//            if(selectedSeat==='performance')
//            {

//             if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//             {

//               document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof.jpg";
//             }

//             if(selectedprimarycolor==="metallicblack" && selectedsecondarycolor==='chancellorred')
//             {
//               document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_bright_p_p_metallic_black_s_chancellor_red_roof_panoramic_glass_roof.jpg";

//             }
             
          
//            }


//          }

//          if(grille==='dark')
//           {

//             if(selectedSeat==='sportsplus')
//             {

//               if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//               {

//                 document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark_s_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof.jpg";
//               }

//               if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='chancellorred')
//               {
//                 document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark_s_p_metallic_black_s_chancellor_red_roof_panoramic_glass_roof.jpg";

//               }
//             }

//             if(selectedSeat==='performance')
//             {

//               if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='oxfordtan')
//               {
                
//                 document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark_p_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof.jpg";
//               }

// if(selectedprimarycolor==='metallicblack' && selectedsecondarycolor==='chancellorred')
// {
//   document.querySelector("#img1").src="q_quantum_silver_bclbp_bcubp_dark_p_p_metallic_black_s_chancellor_red_roof_panoramic_glass_roof.jpg";

// }

//             }
           
//           }


//       }

//   }
  return (
  <>
  <div id="roofpackagediv">
      <div id="roofpackage">
        <div id="roofpackageplatesdiv">

          <div id="roofpackageimagesplate">
            <div className="roofpackagehoverhider" id="roofcolorborderone"
            //  onClick={BodyColouredRoof}
             ><img src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_gloss_black_plate.jpg" className="roofbodyscaling" alt="" id="roofbodycolorone"  /></div>

            {/* <div className="roofpackagehoverhider" id="roofcolorbordertwo" onClick={GlossBlackRoof}><img src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_gloss_black_plate.jpg" alt="" className="roofbodyscaling" id="roofbodycolortwo"  /></div>

            <div className="roofpackagehoverhider" id="roofcolorborderthree" onClick={GlossCarbonFibreRoof}>
              <img src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_gloss_carbon_fibre_plate.jpg" className="roofbodyscaling" id="roofbodycolorthree"/>
            </div>

            <div className="roofpackagehoverhider" id="roofcolorborderfour" onClick={PanoramicGlassRoof}>
              <img src="q_buckinghamshire_green_bclbp_bcubp_bright_p_p_metallic_black_s_oxford_tan_roof_panoramic_glass_roof_plate.jpg" className="roofbodyscaling" id="roofbodycolorfour" />
            </div> */}

          </div>
        </div>
        <div id="roofpackageimageinformationsection">
          <div id="roofpackageimagewithinfo">
            <img src="q_buckinghamshire_green_bclbp_bcubp_bright_plate.jpg" alt="" id="currentroofbodyinfoimage" />
            <img src="infobutton.png" alt="" id="infobuttonforroofbody"
             onClick={showinfofunction} 
             />
          </div>
          <div id="roofpackageinformationcontent">
            <div id="roofpackagename">Bright</div>
          </div>
        </div>
      </div>
    </div>
  <Wheels showinfofunction={showinfofunction}/>
  </>
  )
}

export default Roof;