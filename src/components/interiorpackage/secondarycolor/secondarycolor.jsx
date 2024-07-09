import './secondarycolor.css';





const SecondaryColor=({selectedSeat,selectedprimarycolor,selectedsecondarycolor,setselectedsecondarycolor})=>{

  const MetallicBlackSecondary=()=>{
    setselectedsecondarycolor('metallicblack');

//metallic black

if(selectedSeat==='sportsplus' && selectedprimarycolor==='ardengreenmetallic'
)
{
  document.querySelector("#img1").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
        document.querySelector("#img2").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";
        document.querySelector("#img3").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
        document.querySelector("#img4").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
}

if( selectedSeat==='performance' && selectedprimarycolor==='ardengreenmetallic')
  {
    document.querySelector("#img1").src="performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
    document.querySelector("#img2").src="performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";
    document.querySelector("#img3").src="performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
    document.querySelector("#img4").src="performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
  }

    //onyx black
    if( selectedSeat==='sportsplus' && selectedprimarycolor==='onyxblack')
      {
        document.querySelector("#img1").src="sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_frontview.jpg";
        document.querySelector("#img2").src="sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_sideview.jpg";
        document.querySelector("#img3").src="sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringview.jpg";
        document.querySelector("#img4").src="sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringleftbackview.jpg";
      }
      
      if(selectedSeat==='performance' && selectedprimarycolor==='onyxblack')
        {
          document.querySelector("#img1").src="performance_seat_primary_color_onyx_black_secondary_color_metallic_black_frontview.jpg";
        document.querySelector("#img2").src="performance_seat_primary_color_onyx_black_secondary_color_metallic_black_sideview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringleftbackview.jpg";

        }

        //arden green metallic
        if( selectedSeat==='sportsplus' && selectedprimarycolor==='bisonbrown')
          {
            document.querySelector("#img1").src="sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
            document.querySelector("#img2").src="sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";
            document.querySelector("#img3").src="sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
            document.querySelector("#img4").src="sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
          }

          if(selectedSeat==='performance' && selectedprimarycolor==='bisonbrown')
            {
              document.querySelector("#img1").src="performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
            document.querySelector("#img2").src="performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";
            document.querySelector("#img3").src="performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
            document.querySelector("#img4").src="performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
            }

            //chancellor red

            if( selectedSeat==='sportsplus' && selectedprimarycolor==='chancellorred')
              {
                document.querySelector("#img1").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
                document.querySelector("#img2").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";
                document.querySelector("#img3").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
                document.querySelector("#img4").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
              }
    
              if(selectedSeat==='performance' && selectedprimarycolor==='chancellorred')
                {
                  document.querySelector("#img1").src="performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
                document.querySelector("#img2").src="performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";
                document.querySelector("#img3").src="performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
                document.querySelector("#img4").src="performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
                }


                //havana
                if( selectedSeat==='sportsplus' && selectedprimarycolor==='havana')
                  {
                    document.querySelector("#img1").src="sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
                    document.querySelector("#img2").src="sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";
                    document.querySelector("#img3").src="sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
                    document.querySelector("#img4").src="sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
                  }
        
                  if(selectedSeat==='performance' && selectedprimarycolor==='havana')
                    {
                      document.querySelector("#img1").src="performance_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
                    document.querySelector("#img2").src="performance_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";
                    document.querySelector("#img3").src="performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
                    document.querySelector("#img4").src="performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
                    }




                  // ---------------------------------------- x x x --------------------
                  document.querySelector("#secondarycolorimageplate img").src="metallic_black_primary_color_plate.jpg";
                  document.querySelector("#secondarycolortype").innerHTML="Colour Palette";
                  document.querySelector("#secondarycolorname").innerHTML="Metallic Black";


                  // for border bottoms
                  document.querySelector("#secondaryplateone").style.borderBottom="1px solid white";
                  document.querySelector("#secondaryplatetwo").style.borderBottom="none";
                  document.querySelector("#secondaryplatethree").style.borderBottom="none";
                  document.querySelector("#secondaryplatefour").style.borderBottom="none";
                  document.querySelector("#secondaryplatefive").style.borderBottom="none";
                  document.querySelector("#secondaryplateseven").style.borderBottom="none";
                  document.querySelector("#secondaryplatesix").style.borderBottom="none";
  }

  const OnyxBlackSecondary=()=>{

    setselectedsecondarycolor('onyxblack');

    // console.log("clicked");
    // console.log(props.selectedprimarycolor);
    // console.log(props.selectedSeat);
    // if(selectedprimarycolor==='onyxblack' && selectedSeat==='sportsplus')
    //   {
    //     document.querySelector("#img2").src="sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";
    //     document.querySelector("#img3").src="sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
    //     document.querySelector("#img4").src="sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
    //     document.querySelector("#img1").src="sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
    //   }
      
    // if(selectedprimarycolor==='onyxblack' && selectedSeat==='performance')
    //   {     document.querySelector("#img1").src="performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
    // document.querySelector("#img2").src="performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";
    // document.querySelector("#img3").src="performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
    // document.querySelector("#img4").src="performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";

    //   }

    if(selectedprimarycolor==='metallicblack' && selectedSeat==='sportsplus')
      {
        console.log("first");
        document.querySelector("#img1").src="sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
        document.querySelector("#img2").src="sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";
        document.querySelector("#img3").src="sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
        document.querySelector("#img4").src="sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      }
      if(selectedprimarycolor==='metallicblack' && selectedSeat==='performance')
        {
        console.log("second");

          document.querySelector("#img1").src="performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
          document.querySelector("#img2").src="performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";
          document.querySelector("#img3").src="performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
          document.querySelector("#img4").src="performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
        }

        //arden green metallic

        if(selectedSeat==='sportsplus' && selectedprimarycolor==='ardengreenmetallic' )
          {
            document.querySelector("#img2").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";
            document.querySelector("#img3").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
            document.querySelector("#img4").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview.jpg";
                 
            document.querySelector("#img1").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
            
          }
          
        if(selectedSeat==='performance' && selectedprimarycolor==='ardengreenmetallic' )
          {     document.querySelector("#img1").src="performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
        document.querySelector("#img2").src="performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview.jpg";
  }

  //bison brown
  if(selectedSeat==='sportsplus' && selectedprimarycolor==='bisonbrown' )
    {
      document.querySelector("#img2").src="sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";
      document.querySelector("#img3").src="sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img4").src="sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringleftbackview.jpg";
           
      document.querySelector("#img1").src="sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      
    }

    if(selectedSeat==='performance' && selectedprimarycolor==='bisonbrown' )
      {     document.querySelector("#img1").src="performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
    document.querySelector("#img2").src="performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";
    document.querySelector("#img3").src="performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
    document.querySelector("#img4").src="performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringleftbackview.jpg";
}

//chancellor red

if(selectedSeat==='sportsplus' && selectedprimarycolor==='chancellorred' )
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringleftbackview.jpg";
         
    document.querySelector("#img1").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
    
  }

  if(selectedSeat==='performance' && selectedprimarycolor==='chancellorred' )
    {     document.querySelector("#img1").src="performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
  document.querySelector("#img2").src="performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";
  document.querySelector("#img3").src="performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
  document.querySelector("#img4").src="performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringleftbackview.jpg";
}


//havana
if(selectedSeat==='sportsplus' && selectedprimarycolor==='havana' )
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringleftbackview.jpg";
         
    document.querySelector("#img1").src="sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
    
  }

  if(selectedSeat==='performance' && selectedprimarycolor==='havana' )
    {     document.querySelector("#img1").src="performance_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
  document.querySelector("#img2").src="performance_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";
  document.querySelector("#img3").src="performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
  document.querySelector("#img4").src="performance_seat_primary_color_havana_secondary_color_onyx_black_steeringleftbackview.jpg";
}

  //

//     if(selectedprimarycolor==='ardengreenmetallic' && selectedSeat==='sportsplus')
// {

//   document.querySelector("#img1").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
//   document.querySelector("#img2").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";
//   document.querySelector("#img3").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
//   document.querySelector("#img4").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";

// }
// if(selectedprimarycolor==='ardengreenmetallic' && selectedSeat==='performance')
//   {
//     document.querySelector("#img1").src="performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
//     document.querySelector("#img2").src="performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";
//     document.querySelector("#img3").src="pperformance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
//     document.querySelector("#img4").src="performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
//   }

//   if(selectedprimarycolor==='bisonbrown' && selectedSeat==='sportsplus')
//   {
//     document.querySelector("#img1").src="sports_plus_seat_primary_color_bison_brown_frontview.jpg";
//     document.querySelector("#img2").src="sports_plus_seat_primary_color_bison_brown_sideview.jpg";
//     document.querySelector("#img3").src="sports_plus_seat_primary_color_bison_brown_steeringview.jpg";
//     document.querySelector("#img4").src="sports_plus_seat_primary_color_bison_brown_steeringleftbackview.jpg";
//   }
  
//     if(selectedprimarycolor==='bisonbrown' && selectedSeat==='performance')
//     {
//       document.querySelector("#img1").src="performance_seat_primary_color_bison_brown_frontview.jpg";
//       document.querySelector("#img2").src="performance_seat_primary_color_bison_brown_sideview.jpg";
//       document.querySelector("#img3").src="performance_seat_primary_color_bison_brown_steeringview.jpg";
//       document.querySelector("#img4").src="performance_seat_primary_color_bison_brown_steeringleftbackview.jpg";
//     }

//   if(selectedprimarycolor==='chancellorred' && selectedSeat==='sportsplus')
//     {
//       document.querySelector("#img1").src="sports_plus_seat_primary_color_chancellor_red_frontview.jpg";
//       document.querySelector("#img2").src="sports_plus_seat_primary_color_chancellor_red_sideview.jpg";
//       document.querySelector("#img3").src="sports_plus_seat_primary_color_chancellor_red_steeringview.jpg";
//       document.querySelector("#img4").src="sports_plus_seat_primary_color_chancellor_red_steeringleftbackview.jpg";
//     }


//     if(selectedprimarycolor==='chancellorred' && selectedSeat==='performance')
//       {
//         document.querySelector("#img1").src="performance_seat_primary_color_chancellor_red_frontview.jpg";
//         document.querySelector("#img2").src="performance_seat_primary_color_chancellor_red_sideview.jpg";
//         document.querySelector("#img3").src="performance_seat_primary_color_chancellor_red_steeringview.jpg";
//         document.querySelector("#img4").src="performance_seat_primary_color_chancellor_red_steeringleftbackview.jpg";
//       }
//       if(selectedprimarycolor==='havana' && selectedSeat==='sportsplus')
//       {
//         document.querySelector("#img1").src="sports_plus_seat_primary_color_havana_frontview.jpg";
//         document.querySelector("#img2").src="sports_plus_seat_primary_color_havana_sideview.jpg";
//         document.querySelector("#img3").src="sports_plus_seat_primary_color_havana_steeringview.jpg";
//         document.querySelector("#img4").src="sports_plus_seat_primary_color_havana_steeringleftbackview.jpg";
//       }
      
//         if(selectedprimarycolor==='havana' && selectedSeat==='performance')
//         {
//           document.querySelector("#img1").src="performance_seat_primary_color_havana_frontview.jpg";
//           document.querySelector("#img2").src="performance_seat_primary_color_havana_sideview.jpg";
//           document.querySelector("#img3").src="performance_seat_primary_color_havana_steeringview.jpg";
//           document.querySelector("#img4").src="performance_seat_primary_color_havana_steeringleftbackview.jpg";
//         }




//  ----------------------------------------------x- x -x x
document.querySelector("#secondarycolorimageplate img").src="onyx_black_primary_color_plate.jpg";
                  document.querySelector("#secondarycolortype").innerHTML="";
                  document.querySelector("#secondarycolorname").innerHTML="Onyx Black";
  
  // for border bottoms



  document.querySelector("#secondaryplateone").style.borderBottom="none";
  document.querySelector("#secondaryplatetwo").style.borderBottom="1px solid white";
  document.querySelector("#secondaryplatethree").style.borderBottom="none";
  document.querySelector("#secondaryplatefour").style.borderBottom="none";
  document.querySelector("#secondaryplatefive").style.borderBottom="none";
                  document.querySelector("#secondaryplateseven").style.borderBottom="none";
  document.querySelector("#secondaryplatesix").style.borderBottom="none";


  }

  const ArdenGreenMetallicSecondary=()=>{
    setselectedsecondarycolor('ardengreenmetallic');

    if(selectedSeat==='sportsplus'&& selectedprimarycolor==='metallicblack')
      {
        document.querySelector("#img1").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
  document.querySelector("#img2").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";
  document.querySelector("#img3").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
  document.querySelector("#img4").src="sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";


      }

      if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack' )
        {
          document.querySelector("#img1").src="performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
          document.querySelector("#img2").src="performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";
          document.querySelector("#img3").src="pperformance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
          document.querySelector("#img4").src="performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
        }

//onyx black
        if(selectedSeat==='sportsplus' && selectedprimarycolor==='onyxblack' )
          {
            document.querySelector("#img2").src="sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";
            document.querySelector("#img3").src="sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
            document.querySelector("#img4").src="sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
            document.querySelector("#img1").src="sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
          }
          
        if(selectedSeat==='performance' && selectedprimarycolor==='onyxblack' )
          {     document.querySelector("#img1").src="performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
        document.querySelector("#img2").src="performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
    
          }
          //arden green metallic

          if(selectedSeat==='sportsplus' && selectedprimarycolor==='ardengreenmetallic' )
            {
              document.querySelector("#img2").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_sideview.jpg";
              document.querySelector("#img3").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringview.jpg";
              document.querySelector("#img4").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
              document.querySelector("#img1").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_frontview.jpg";
            }
            
          if(selectedSeat==='performance' && selectedprimarycolor==='ardengreenmetallic' )
            {     document.querySelector("#img1").src="performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_frontview.jpg";
          document.querySelector("#img2").src="performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_sideview.jpg";
          document.querySelector("#img3").src="performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringview.jpg";
          document.querySelector("#img4").src="performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
    }

    //bison brown

    if(selectedSeat==='sportsplus' && selectedprimarycolor==='bisonbrown' )
      {
        document.querySelector("#img2").src="sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";
        document.querySelector("#img3").src="sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
        document.querySelector("#img4").src="sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
        document.querySelector("#img1").src="sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      }
      
    if(selectedSeat==='performance' && selectedprimarycolor==='bisonbrown' )
      {     document.querySelector("#img1").src="performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
    document.querySelector("#img2").src="performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";
    document.querySelector("#img3").src="performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
    document.querySelector("#img4").src="performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
}

//chancellor red
if(selectedSeat==='sportsplus' && selectedprimarycolor==='chancellorred' )
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='chancellorred' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
document.querySelector("#img4").src="performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
}

//havana
if(selectedSeat==='sportsplus' && selectedprimarycolor==='havana' )
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='havana' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
document.querySelector("#img4").src="performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
}



// -------------------- x - x -x x -


document.querySelector("#secondarycolorimageplate img").src="arden_green_metallic_primary_color_plate.jpg";
                  document.querySelector("#secondarycolortype").innerHTML="Colour Palette";
                  document.querySelector("#secondarycolorname").innerHTML="Arden Green Metallic";



                  // for border bottoms

                  document.querySelector("#secondaryplateone").style.borderBottom="none";
                  document.querySelector("#secondaryplatetwo").style.borderBottom="none";
                  document.querySelector("#secondaryplatethree").style.borderBottom="1px solid white";
                  document.querySelector("#secondaryplatefour").style.borderBottom="none";
                  document.querySelector("#secondaryplatefive").style.borderBottom="none";
                  document.querySelector("#secondaryplateseven").style.borderBottom="none";
                  document.querySelector("#secondaryplatesix").style.borderBottom="none";

  }

const BisonBrownSecondary=()=>{

  setselectedsecondarycolor('bisonbrown');



  if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack')
    {
      document.querySelector("#img1").src="sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src="sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";
      document.querySelector("#img3").src="sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img4").src="sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
    }

    if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack')
      {
        document.querySelector("#img2").src="performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";
        document.querySelector("#img1").src="performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      }

      // onyx black bison brown 
      if(selectedSeat==='sportsplus' && selectedprimarycolor==='onyxblack' )
        {
          document.querySelector("#img2").src="sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";
          document.querySelector("#img3").src="sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
          document.querySelector("#img4").src="sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
          document.querySelector("#img1").src="sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
        }
        
      if(selectedSeat==='performance' && selectedprimarycolor==='onyxblack' )
        {     document.querySelector("#img1").src="performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src="performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";
      document.querySelector("#img3").src="performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img4").src="performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
                                           
}

//arden green metallic
if(selectedSeat==='sportsplus' && selectedprimarycolor==='ardengreenmetallic' )
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='ardengreenmetallic' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
                                    
document.querySelector("#img4").src="performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
                                     
}

//chancellor red
if(selectedSeat==='sportsplus' && selectedprimarycolor==='chancellorred' )
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='chancellorred' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
                                    
document.querySelector("#img4").src="performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
                                     
}

//havana
if(selectedSeat==='sportsplus' && selectedprimarycolor==='havana' )
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_havana_secondary_color_bison_brown_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='havana' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_havana_secondary_color_bison_brown_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
                                    
document.querySelector("#img4").src="performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
                                     
}



// ------------------------- x- x-x -x 

document.querySelector("#secondarycolorimageplate img").src="bison_brown_primary_color_plate.jpg";
                  document.querySelector("#secondarycolortype").innerHTML="Colour Palette";
                  document.querySelector("#secondarycolorname").innerHTML="Bison Brown";


                  // for border bottoms
                  document.querySelector("#secondaryplateone").style.borderBottom="none";
                  document.querySelector("#secondaryplatetwo").style.borderBottom="none";
                  document.querySelector("#secondaryplatethree").style.borderBottom="none";
                  document.querySelector("#secondaryplatefour").style.borderBottom="1px solid white";
                  document.querySelector("#secondaryplatefive").style.borderBottom="none";
                  document.querySelector("#secondaryplateseven").style.borderBottom="none";
                  document.querySelector("#secondaryplatesix").style.borderBottom="none";
}

const ChancellorRedSecondary=()=>{

  setselectedsecondarycolor('chancellorred');


  if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack')
    {
      document.querySelector("#img2").src="sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";
      document.querySelector("#img1").src="sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img3").src="sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img4").src="sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
    }

    if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack')
      {
        document.querySelector("#img2").src="performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";
        document.querySelector("#img1").src="performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      }

      //onyx black

      if(selectedSeat==='sportsplus' && selectedprimarycolor==='onyxblack')
        {
          {     document.querySelector("#img1").src="sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
          document.querySelector("#img2").src="sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
          document.querySelector("#img3").src="sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
          document.querySelector("#img4").src="sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      
            }
        }

        if(selectedSeat==='performance' && selectedprimarycolor==='onyxblack')
          {
               document.querySelector("#img1").src="performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
            document.querySelector("#img2").src="performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
            document.querySelector("#img3").src="performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
            document.querySelector("#img4").src="performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
          }

          // arden green metallic
          if(selectedSeat==='sportsplus' && selectedprimarycolor==='ardengreenmetallic' )
            {
              document.querySelector("#img2").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
              document.querySelector("#img3").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
              document.querySelector("#img4").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
              document.querySelector("#img1").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
            }
            
          if(selectedSeat==='performance' && selectedprimarycolor==='ardengreenmetallic' )
            {     document.querySelector("#img1").src="performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
          document.querySelector("#img2").src="performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
          document.querySelector("#img3").src="performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
          document.querySelector("#img4").src="performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
    }

    //bison brown
    if(selectedSeat==='sportsplus' && selectedprimarycolor==='bisonbrown')
      {
        document.querySelector("#img2").src="sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
        document.querySelector("#img1").src="sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
        document.querySelector("#img3").src="sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
        document.querySelector("#img4").src="sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      }
    
      if(selectedSeat==='performance' && selectedprimarycolor==='bisonbrown')
        {
          document.querySelector("#img2").src="performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
            document.querySelector("#img1").src="performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
            document.querySelector("#img3").src="performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
            document.querySelector("#img4").src="performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
    
        }

        //havana
        if(selectedSeat==='sportsplus' && selectedprimarycolor==='havana')
          {
            document.querySelector("#img2").src="sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
            document.querySelector("#img1").src="sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
            document.querySelector("#img3").src="sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
            document.querySelector("#img4").src="sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
          }
        
          if(selectedSeat==='performance' && selectedprimarycolor==='havana')
            {
              document.querySelector("#img2").src="performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
                document.querySelector("#img1").src="performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
                document.querySelector("#img3").src="performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
                document.querySelector("#img4").src="performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
        
            }



            // -------------------------------- x- x-x x -
            document.querySelector("#secondarycolorimageplate img").src="chancellor_red_primary_color_plate.jpg";
                  document.querySelector("#secondarycolortype").innerHTML="";
                  document.querySelector("#secondarycolorname").innerHTML="Chancellor Red";

                  // for border bottoms
                  document.querySelector("#secondaryplateone").style.borderBottom="none";
                  document.querySelector("#secondaryplatetwo").style.borderBottom="none";
                  document.querySelector("#secondaryplatethree").style.borderBottom="none";
                  document.querySelector("#secondaryplatefour").style.borderBottom="none";
                  document.querySelector("#secondaryplatefive").style.borderBottom="1px solid white";
                  document.querySelector("#secondaryplateseven").style.borderBottom="none";
                  document.querySelector("#secondaryplatesix").style.borderBottom="none";
          
}

const HavanaSecondary=()=>{

  setselectedsecondarycolor('havana');


  if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack')
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
  }

  if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack')
    {
      document.querySelector("#img2").src="performance_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";
        document.querySelector("#img1").src="performance_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";

    }

    //onyx black
    if(selectedSeat==='sportsplus' && selectedprimarycolor==='onyxblack')
      {
        {     document.querySelector("#img1").src="sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
        document.querySelector("#img2").src="sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
        document.querySelector("#img3").src="sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
        document.querySelector("#img4").src="sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
    
          }
      }

      if(selectedSeat==='performance' && selectedprimarycolor==='onyxblack')
        {
             document.querySelector("#img1").src="performance_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
          document.querySelector("#img2").src="performance_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
          document.querySelector("#img3").src="performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
          document.querySelector("#img4").src="performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
        }
//arden green metallic
        if(selectedSeat==='sportsplus' && selectedprimarycolor==='ardengreenmetallic' )
          {
            
            document.querySelector("#img2").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
            document.querySelector("#img3").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
                                                 
            document.querySelector("#img4").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
            document.querySelector("#img1").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
          }
          
        if(selectedSeat==='performance' && selectedprimarycolor==='ardengreenmetallic' )
          {     document.querySelector("#img1").src="performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
        document.querySelector("#img2").src="performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
  }

  //bison brown

  if(selectedSeat==='sportsplus' && selectedprimarycolor==='bisonbrown' )
    {
      
      document.querySelector("#img2").src="sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
      document.querySelector("#img3").src="sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
                                           
      document.querySelector("#img4").src="sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img1").src="sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
    }
    
  if(selectedSeat==='performance' && selectedprimarycolor==='bisonbrown' )
    {     document.querySelector("#img1").src="performance_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
  document.querySelector("#img2").src="performance_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
  document.querySelector("#img3").src="performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
  document.querySelector("#img4").src="performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
}

//chancellor red
if(selectedSeat==='sportsplus' && selectedprimarycolor==='chancellorred' )
  {
    
    document.querySelector("#img2").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
                                         
    document.querySelector("#img4").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='chancellorred' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
document.querySelector("#img4").src="performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
}




//------------------------------ x- x-x -x 
document.querySelector("#secondarycolorimageplate img").src="havana_primary_color_plate.jpg";
                  document.querySelector("#secondarycolortype").innerHTML="Colour Palette";
                  document.querySelector("#secondarycolorname").innerHTML="Havana";

                  // for border bottoms
                  document.querySelector("#secondaryplateone").style.borderBottom="none";
                  document.querySelector("#secondaryplatetwo").style.borderBottom="none";
                  document.querySelector("#secondaryplatethree").style.borderBottom="none";
                  document.querySelector("#secondaryplatefour").style.borderBottom="none";
                  document.querySelector("#secondaryplatefive").style.borderBottom="none";
                  document.querySelector("#secondaryplatesix").style.borderBottom=" 1px solid white";
                  document.querySelector("#secondaryplateseven").style.borderBottom="none"

}

const OxfordTanSecondary=()=>{
  setselectedsecondarycolor('oxfordtan');


  if(selectedSeat==='sportsplus' && selectedprimarycolor==='metallicblack')
  {
    document.querySelector("#img2").src="sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview.jpg";
    document.querySelector("#img4").src="sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
  }

  if(selectedSeat==='performance' && selectedprimarycolor==='metallicblack')
    {
      document.querySelector("#img2").src="performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview.jpg";
        document.querySelector("#img1").src="performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview.jpg";

    }

    //onyx black
    if(selectedSeat==='sportsplus' && selectedprimarycolor==='onyxblack')
      {
        {     document.querySelector("#img1").src="sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
        document.querySelector("#img2").src="sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
        document.querySelector("#img3").src="sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
        document.querySelector("#img4").src="sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
    
          }
      }

      if(selectedSeat==='performance' && selectedprimarycolor==='onyxblack')
        {
             document.querySelector("#img1").src="performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
          document.querySelector("#img2").src="performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
          document.querySelector("#img3").src="performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
          document.querySelector("#img4").src="performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
        }
//arden green metallic
        if(selectedSeat==='sportsplus' && selectedprimarycolor==='ardengreenmetallic' )
          {
            
            document.querySelector("#img2").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview.jpg";
            document.querySelector("#img3").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview.jpg";
                                                 
            document.querySelector("#img4").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview.jpg";
            document.querySelector("#img1").src="sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview.jpg";
          }
          
        if(selectedSeat==='performance' && selectedprimarycolor==='ardengreenmetallic' )
          {     document.querySelector("#img1").src="performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview.jpg";
        document.querySelector("#img2").src="performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview.jpg";
        document.querySelector("#img3").src="performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview.jpg";
        document.querySelector("#img4").src="performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview.jpg";
  }

  //bison brown

  if(selectedSeat==='sportsplus' && selectedprimarycolor==='bisonbrown' )
    {
      
      document.querySelector("#img2").src="sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
      document.querySelector("#img3").src="sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview.jpg";
                                           
      document.querySelector("#img4").src="sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img1").src="sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview.jpg";
    }
    
  if(selectedSeat==='performance' && selectedprimarycolor==='bisonbrown' )
    {     document.querySelector("#img1").src="performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview.jpg";
  document.querySelector("#img2").src="performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
  document.querySelector("#img3").src="performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview.jpg";
  document.querySelector("#img4").src="performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview.jpg";
}

//chancellor red
if(selectedSeat==='sportsplus' && selectedprimarycolor==='chancellorred' )
  {
    
    document.querySelector("#img2").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview.jpg";
                                         
    document.querySelector("#img4").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='chancellorred' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview.jpg";
document.querySelector("#img4").src="performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview.jpg";
}

if(selectedSeat==='sportsplus' && selectedprimarycolor==='havana' )
  {
    
    document.querySelector("#img2").src="sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_sideview.jpg";
    document.querySelector("#img3").src="sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringview.jpg";
                                         
    document.querySelector("#img4").src="sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview.jpg";
    document.querySelector("#img1").src="sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_frontview.jpg";
  }
  
if(selectedSeat==='performance' && selectedprimarycolor==='havana' )
  {     document.querySelector("#img1").src="performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview.jpg";
document.querySelector("#img2").src="performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview.jpg";
document.querySelector("#img3").src="performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview.jpg";
document.querySelector("#img4").src="performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview.jpg";
}




//------------------------------ x- x-x -x 
document.querySelector("#secondarycolorimageplate img").src="oxford_tan_secondary_color_plate.jpg";
                  document.querySelector("#secondarycolortype").innerHTML="";
                  document.querySelector("#secondarycolorname").innerHTML="Oxford Tan";

                  // for border bottoms
                  document.querySelector("#secondaryplateone").style.borderBottom="none";
                  document.querySelector("#secondaryplatetwo").style.borderBottom="none";
                  document.querySelector("#secondaryplatethree").style.borderBottom="none";
                  document.querySelector("#secondaryplatefour").style.borderBottom="none";
                  document.querySelector("#secondaryplatefive").style.borderBottom="none";
                  document.querySelector("#secondaryplatesix").style.borderBottom="none";
                  document.querySelector("#secondaryplateseven").style.borderBottom="1px solid white"

}

  return(<>
  <div id="secondarycolorwindow">
  <div id="secondarycolorsection">
    <div id="secondarycolorplates">
      <div className="secondaryimagescaler" id="secondaryplateone"><img src="metallic_black_primary_color_plate.jpg" alt="" onClick={MetallicBlackSecondary}/></div>
      <div className="secondaryimagescaler" id="secondaryplatetwo"><img src="onyx_black_primary_color_plate.jpg" alt="" onClick={OnyxBlackSecondary}/></div>
      <div className="secondaryimagescaler" id="secondaryplatethree"><img src="arden_green_metallic_primary_color_plate.jpg" alt="" onClick={ArdenGreenMetallicSecondary}/></div>
      <div className="secondaryimagescaler" id="secondaryplatefour"><img src="bison_brown_primary_color_plate.jpg" alt="" onClick={BisonBrownSecondary}/></div>
      <div className="secondaryimagescaler" id="secondaryplatefive"><img src="chancellor_red_primary_color_plate.jpg" alt="" onClick={ChancellorRedSecondary}/></div>
      <div className="secondaryimagescaler" id="secondaryplatesix"><img src="havana_primary_color_plate.jpg"  onClick={HavanaSecondary}/></div>
      <div className="secondaryimagescaler" id="secondaryplateseven"><img src="oxford_tan_secondary_color_plate.jpg"  onClick={OxfordTanSecondary}/></div>
      
      {/* <div className="secondaryimagescaler" id="secondaryplatesix"><img src="havana_primary_color_plate.jpg" /></div> */}
    </div>
    <div id="secondarycolorinformationsection">
      <div id="secondarycolorimageplate">
        <img src="metallic_black_primary_color_plate.jpg" alt="" />
      </div>
      <div id="secondarycolorcontent">
       {/* <div id="primarycolorcurrentimage">
       </div> */}
      <div id="secondarycolortype">Colour Pallete</div>
      <div id="secondarycolorname">Metallic Black</div>
      </div>
    </div>
  </div>
</div>
  
  
  
  
  </>)
}

export default SecondaryColor;

