import { useState } from 'react';
import './primarycolor.css';
import SecondaryColor from './secondarycolor/secondarycolor';

const PrimaryColor = ({ selectedSeat, selectedprimarycolor, setselectedprimarycolor, selectedsecondarycolor, setselectedsecondarycolor }) => {
  // const [selectedprimarycolor,setselectedprimarycolor]=useState('metallicblack');


  const MetallicBlack = () => {

    setselectedprimarycolor('metallicblack');
    // console.log(selectedprimarycolor);
    // console.log(selectedSeat);

    if (selectedSeat === 'sportsplus') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_sideview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_steeringleftbackview.jpg";
    }

    else {
      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
    }

    document.querySelector("#primaryplateone").style.borderBottom = "2px solid white";
    // document.querySelector("#primaryplatetwo,#primaryplatethree,#primaryplatefour").style.borderBottom="";
    document.querySelector("#primaryplatetwo").style.border = "none";
    document.querySelector("#primaryplatethree").style.border = "none";
    document.querySelector("#primaryplatefour").style.border = "none";
    document.querySelector("#primaryplatefive").style.borderBottom = "none";
    document.querySelector("#primaryplatesix").style.borderBottom = "none";




    document.querySelector("#primarycolorimageplate img").src = "metallic_black_primary_color_plate.jpg";
    document.querySelector("#primarycolortype").innerHTML = "Colour Pallete";
    document.querySelector("#primarycolorname").innerHTML = "Metallic Black";


    //as we have removed arden green , but now we want it for this primary color;
    document.querySelector("#secondaryplatethree").style.display = "block";

    //add secondary onyx black for primary metallic black
    document.querySelector("#secondaryplatetwo").style.display = "block";

    //add secondary onyx black for primary metallic black
    document.querySelector("#secondaryplateone").style.display = "none";

    //remove secondary color bison brown for primary color metallic black
    document.querySelector("#secondaryplatefour").style.display = "block";

    //add secondary color chancellor red for primary color metallic black
    document.querySelector("#secondaryplatefive").style.display = "block";

    //add secondary color havana for primary color bison brown
    document.querySelector("#secondaryplatesix").style.display = "block";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

  }
  const OnyxBlack = () => {
    setselectedprimarycolor('onyxblack');

    if (selectedSeat === 'sportsplus') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_sideview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_steeringleftbackview.jpg";
    }
    else {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
    }

    document.querySelector("#primaryplatetwo").style.borderBottom = "2px solid white";
    // document.querySelector("#primaryplateone,#primaryplatethree,#primaryplatefour").style.borderBottom="";
    document.querySelector("#primaryplateone").style.border = "none";
    document.querySelector("#primaryplatethree").style.border = "none";
    document.querySelector("#primaryplatefour").style.border = "none";
    document.querySelector("#primaryplatefive").style.borderBottom = "none";
    document.querySelector("#primaryplatesix").style.borderBottom = "none";



    document.querySelector("#primarycolorimageplate img").src = "onyx_black_primary_color_plate.jpg";
    document.querySelector("#primarycolortype").innerHTML = " ";
    document.querySelector("#primarycolorname").innerHTML = "Onyx Black";

    //as we have removed arden green , but now we want it for this primary color;
    document.querySelector("#secondaryplatethree").style.display = "block";

    //remove secondary onyx black plate for primary onyx black 
    document.querySelector("#secondaryplatetwo").style.display = "none";

    //add secondary color metallic black for onyx black 
    document.querySelector("#secondaryplateone").style.display = "block";

    //remove secondary color bison brown for primary color onyx black
    document.querySelector("#secondaryplatefour").style.display = "block";

    //add secondary color chancellor red for primary color onyx black
    document.querySelector("#secondaryplatefive").style.display = "block";

    //add secondary color havana for primary color bison brown
    document.querySelector("#secondaryplatesix").style.display = "block";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }


  }
  const ArdenGreenMetallic = () => {

    setselectedprimarycolor('ardengreenmetallic');

    if (selectedSeat === 'sportsplus') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_sideview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_steeringleftbackview.jpg";

    }
    else {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview.jpg";
    }


    document.querySelector("#primaryplatethree").style.borderBottom = "2px solid white";
    // document.querySelector("#primaryplateone,#primaryplatetwo,#primaryplatefour").style.borderBottom="none";
    document.querySelector("#primaryplatetwo").style.border = "none";
    document.querySelector("#primaryplateone").style.border = "none";
    document.querySelector("#primaryplatefour").style.border = "none";
    document.querySelector("#primaryplatefive").style.borderBottom = "none";
    document.querySelector("#primaryplatesix").style.borderBottom = "none";


    document.querySelector("#primarycolorimageplate img").src = "arden_green_metallic_primary_color_plate.jpg";
    document.querySelector("#primarycolortype").innerHTML = "Colour Pallete";
    document.querySelector("#primarycolorname").innerHTML = "Arden Green Metallic";

    //remove arden green metallic from secondary color because we don't have arden green arden green combination
    document.querySelector("#secondaryplatethree").style.display = "none";

    //add secondary onyx black for primary ardengreenmetallic
    document.querySelector("#secondaryplatetwo").style.display = "block";

    //add secondary color metallic black for arden green metallic 
    document.querySelector("#secondaryplateone").style.display = "block";

    //remove secondary color bison brown for primary color arden green metallic
    document.querySelector("#secondaryplatefour").style.display = "block";

    //add secondary color chancellor red for primary arden green metallic
    document.querySelector("#secondaryplatefive").style.display = "block";

    //add secondary color havana for primary color bison brown
    document.querySelector("#secondaryplatesix").style.display = "block";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }


  }
  const BisonBrown = () => {

    setselectedprimarycolor('bisonbrown');


    if (selectedSeat === 'sportsplus') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_sideview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_steeringleftbackview.jpg";
    }

    else {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview.jpg";
    }

    document.querySelector("#primaryplatefour").style.borderBottom = "2px solid white";
    // document.querySelector("#primaryplatetwo,#primaryplatethree,#primaryplateone").style.borderBottom="none";
    document.querySelector("#primaryplatetwo").style.border = "none";
    document.querySelector("#primaryplatethree").style.border = "none";
    document.querySelector("#primaryplateone").style.border = "none";
    document.querySelector("#primaryplatefive").style.borderBottom = "none";
    document.querySelector("#primaryplatesix").style.borderBottom = "none";


    document.querySelector("#primarycolorimageplate img").src = "bison_brown_primary_color_plate.jpg";
    document.querySelector("#primarycolortype").innerHTML = "Colour Pallete";
    document.querySelector("#primarycolorname").innerHTML = "Bison Brown";


    //as we have removed arden green , but now we want it for this primary color;
    document.querySelector("#secondaryplatethree").style.display = "block";

    //add secondary onyx black for primary bison brown 
    document.querySelector("#secondaryplatetwo").style.display = "block";

    //add secondary color metallic black for bison brown
    document.querySelector("#secondaryplateone").style.display = "block";

    //remove secondary color bison brown for primary color bison brown
    document.querySelector("#secondaryplatefour").style.display = "none";


    //add secondary color chancellor red for primary color bison brown
    document.querySelector("#secondaryplatefive").style.display = "block";

    //add secondary color havana for primary color bison brown
    document.querySelector("#secondaryplatesix").style.display = "block";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

  }

  const ChancellorRed = () => {

    setselectedprimarycolor('chancellorred');

    if (selectedSeat === 'sportsplus') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_sideview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_steeringleftbackview.jpg";
    }
    else {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_sideview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_steeringleftbackview.jpg";
    }


    document.querySelector("#primaryplatefive").style.borderBottom = "2px solid white";
    document.querySelector("#primaryplatefour").style.borderBottom = "";
    document.querySelector("#primaryplatetwo").style.border = "none";
    document.querySelector("#primaryplatethree").style.border = "none";
    document.querySelector("#primaryplateone").style.border = "none";
    document.querySelector("#primaryplatesix").style.borderBottom = "none";



    document.querySelector("#primarycolorimageplate img").src = "chancellor_red_primary_color_plate.jpg";
    document.querySelector("#primarycolortype").innerHTML = " ";
    document.querySelector("#primarycolorname").innerHTML = "Chancellor Red";

    //as we have removed arden green , but now we want it for this primary color;
    document.querySelector("#secondaryplatethree").style.display = "block";

    //add secondary onyx black for primary chancellor red
    document.querySelector("#secondaryplatetwo").style.display = "block";

    //add secondary color metallic black for chancellor red
    document.querySelector("#secondaryplateone").style.display = "block";

    //remove secondary color bison brown for primary color chancellor red
    document.querySelector("#secondaryplatefour").style.display = "block";

    //remove secondary color chancellor for primary color chancellor red
    document.querySelector("#secondaryplatefive").style.display = "none";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }


  }

  const Havana = () => {

    setselectedprimarycolor('havana');

    if (selectedSeat === 'sportsplus') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_sideview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_steeringview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_steeringleftbackview.jpg";
    }
    else {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_sideview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_steeringview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_steeringleftbackview.jpg";
    }

    document.querySelector("#primaryplatesix").style.borderBottom = "2px solid white";

    document.querySelector("#primaryplatefive").style.borderBottom = "none";
    document.querySelector("#primaryplatefour").style.borderBottom = "none";
    document.querySelector("#primaryplatetwo").style.border = "none";
    document.querySelector("#primaryplatethree").style.border = "none";
    document.querySelector("#primaryplateone").style.border = "none";


    document.querySelector("#primarycolorimageplate img").src = "havana_primary_color_plate.jpg";
    document.querySelector("#primarycolortype").innerHTML = "Colour Palette";
    document.querySelector("#primarycolorname").innerHTML = "Havana";


    //as we have removed arden green , but now we want it for this primary color;
    document.querySelector("#secondaryplatethree").style.display = "block";

    //add secondary onyx black for primary havana
    document.querySelector("#secondaryplatetwo").style.display = "block";

    //add secondary color metallic black for havana
    document.querySelector("#secondaryplateone").style.display = "block";
    //remove secondary color bison brown for primary color havana
    document.querySelector("#secondaryplatefour").style.display = "block";

    //add secondary color chancellor red for primary havana
    document.querySelector("#secondaryplatefive").style.display = "block";

    //remove secondary color havana for primary colour havana
    document.querySelector("#secondaryplatesix").style.display = "none";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_havana_sideview.jpg";

    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_havana_sideview.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_havana_sideview.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_chancellor_red_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_metallic_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_havana_secondary_color_bison_brown_sideview.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

  }


  return (<>
    <SecondaryColor selectedprimarycolor={selectedprimarycolor} selectedSeat={selectedSeat} selectedsecondarycolor={selectedsecondarycolor} setselectedsecondarycolor={setselectedsecondarycolor}></SecondaryColor>
    <div id="primarycolorwindow">
      <div id="primarycolorsection">
        <div id="primarycolorplates">
          <div className="imagescaler" id="primaryplateone"><img src="metallic_black_primary_color_plate.jpg" alt="" onClick={MetallicBlack} /></div>
          <div className="imagescaler" id="primaryplatetwo"><img src="onyx_black_primary_color_plate.jpg" alt="" onClick={OnyxBlack} /></div>
          <div className="imagescaler" id="primaryplatethree"><img src="arden_green_metallic_primary_color_plate.jpg" alt="" onClick={ArdenGreenMetallic} /></div>
          <div className="imagescaler" id="primaryplatefour"><img src="bison_brown_primary_color_plate.jpg" alt="" onClick={BisonBrown} /></div>
          <div className="imagescaler" id="primaryplatefive"><img src="chancellor_red_primary_color_plate.jpg" onClick={ChancellorRed} /></div>
          <div className="imagescaler" id="primaryplatesix"><img src="havana_primary_color_plate.jpg" onClick={Havana} /></div>
        </div>
        <div id="primarycolorinformationsection">
          <div id="primarycolorimageplate">
            <img src="metallic_black_primary_color_plate.jpg" alt="" />
          </div>
          <div id="primarycolorcontent">
            {/* <div id="primarycolorcurrentimage">
       </div> */}
            <div id="primarycolortype">Colour Pallete</div>
            <div id="primarycolorname">Metallic Black</div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default PrimaryColor;