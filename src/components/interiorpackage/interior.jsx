import React, { useId, useState } from 'react';
import StartConfiguration from '../startconfiguration';
import './interior.css';
import PrimaryColor from '../primarycolor';
import SecondaryColor from './secondarycolor/secondarycolor';

const Interior = ({ showinfofunction, selectedSeat, setSelectedSeat, selectedprimarycolor, setselectedprimarycolor, selectedsecondarycolor, setselectedsecondarycolor }) => {
  // const [selectedSeat, setSelectedSeat] = useState('sportsplus');
  // const [selectedprimarycolor,setselectedprimarycolor]=useState('metallicblack');
  // const [selectedsecondarycolor,setselectedsecondarycolor]=useState('oxfordtan');

  const SportsPlusSeat = () => {
    setSelectedSeat('sportsplus');

    document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
    document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
    document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
    document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";

    document.querySelector("#currentseatinfoimage").src = "sports_plus_seat_plate.png";
    document.querySelector("#seatname").innerHTML = "Sports Plus Seat";

    document.querySelector("#colorimage img").style.left = "-36px";
    document.querySelector("#colorimage img").src = "sports_plus_seat_plate_information.png";
    document.querySelector("#colorimage img").style.background = "#dadada";
    document.querySelector("#colorcardcolorname").innerHTML = "Sports Plus Seat";
    document.querySelector("#colorcardcolorinformation").innerHTML = "The Sports Plus Seat offers added visual presence, enhanced driver support and enhanced adjustability (with 16 way adjust).";

    document.querySelector("#colorcard").style.width = "82vw";
    document.querySelector("#colorcard").style.transform = "translate(11%,-8%)";
    document.querySelector("#colorimage img").style.width = "780px";
    document.querySelector("#colorinformation").style.width = "520px";
    document.querySelector("#colorinformation").style.left = "700px";

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
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmeallic' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
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
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "performance_seat_primary_color_ardengreenmetallic_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_ardengreenmetallic_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_ardengreenmetallic_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_ardengreenmetallic_secondary_color_oxford_tan_sideview.jpg";
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
    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
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
    if (selectedSeat === 'performance' && selectedprimarycolor === 'chacellorred' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview.jpg";
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

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview.jpg";
    }

  }

  const PerformanceSeat = () => {
    setSelectedSeat('performance');

    document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
    document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_steeringview.jpg";
    document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_steeringleftbackview.jpg";
    document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_sideview.jpg";

    document.querySelector("#currentseatinfoimage").src = "performance_seat_plate.png";
    document.querySelector("#seatname").innerHTML = "Performance Seat";

    document.querySelector("#colorimage img").src = "performance_seat_plate_information.png";
    document.querySelector("#colorimage img").style.left = "-36px";
    document.querySelector("#colorimage img").style.background = "#dadada";
    document.querySelector("#colorcardcolorname").innerHTML = "Performance Seat";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Full Satin 2x2 Twill Carbon Fibre performance seat combines lightweight construction with uncompromised support and comfort. In the pursuit of weight saving the performance seat has 6 way adjustability with heating function as standard.";

    document.querySelector("#colorcard").style.width = "82vw";
    document.querySelector("#colorcard").style.transform = "translate(11%,-8%)";
    document.querySelector("#colorimage img").style.width = "780px";
    document.querySelector("#colorinformation").style.width = "520px";
    document.querySelector("#colorinformation").style.left = "700px";

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

  const PrimaryColorDisplay = () => {
    document.querySelector("#primarycolorwindow").style.display = "block";
    document.querySelector("#seatingdiv").style.display = "none";
    document.querySelector("#secondarycolorwindow").style.display = "none";


    document.querySelector("#primarycolorp").style.borderBottom = "2px solid white";
    document.querySelector("#seatingp").style.borderBottom = "none";
    document.querySelector("#secondarycolorp").style.borderBottom = "none";

    if (selectedSeat === 'sportsplus') {
      sportsplusseatimagesshow();
    } else {
      performanceseatimagesshow();
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview.jpg";
      // console.log("done");
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_sideview.jpg";
    }

    // ----------------------- performance seat ---------------------------------------

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview.jpg";
      document.querySelector("#img3").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview.jpg";
    }



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

  const sportsplusseatimagesshow = () => {
    document.querySelector("#img1").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview.jpg";
    document.querySelector("#img2").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview.jpg";
    document.querySelector("#img3").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview.jpg";
    document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview.jpg";
  }

  const performanceseatimagesshow = () => {
    document.querySelector("#img1").src = "performance_seat_frontview.jpg";
    document.querySelector("#img2").src = "performance_seat_steeringview.jpg";
    document.querySelector("#img3").src = "performance_seat_steeringleftbackview.jpg";
    document.querySelector("#img4").src = "performance_seat_sideview.jpg";
  }

  const Showseats = () => {
    document.querySelector("#primarycolorwindow").style.display = "none";
    document.querySelector("#seatingdiv").style.display = "block";
    document.querySelector("#seatingp").style.borderBottom = "1px solid white";
    document.querySelector("#primarycolorp").style.borderBottom = "none";
    document.querySelector("#secondarycolorp").style.borderBottom = "none";


    document.querySelector("#secondarycolorwindow").style.display = "none";

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

  const SecondaryColorDisplay = () => {
    document.querySelector("#primarycolorwindow").style.display = "none";
    document.querySelector("#seatingdiv").style.display = "none";
    document.querySelector("#secondarycolorwindow").style.display = "block";


    document.querySelector("#primarycolorp").style.borderBottom = "none";
    document.querySelector("#seatingp").style.borderBottom = "none";
    document.querySelector("#secondarycolorp").style.borderBottom = "2px solid white";


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

  }

  return (
    <>
      <PrimaryColor selectedSeat={selectedSeat} selectedprimarycolor={selectedprimarycolor} setselectedprimarycolor={setselectedprimarycolor} selectedsecondarycolor={selectedsecondarycolor} setselectedsecondarycolor={setselectedsecondarycolor} />
      {/* <SecondaryColor selectedSeat={selectedSeat} /> */}
      <div id="interiorwindow">
        <div id="interiorsection">
          <div id="interiorbar">
            <p>Environments</p>
            <p>Inspire Sport- Duotone</p>
            <p onClick={Showseats} id="seatingp">Seating</p>
            <p onClick={PrimaryColorDisplay} id="primarycolorp">Primary Colour</p>
            <p onClick={SecondaryColorDisplay} id="secondarycolorp">Secondary Colour</p>
            <p>Headlining</p>
          </div>

          <div id="seatingdiv">
            <div id="seating">
              <div id="seatimagesplate">
                <div className="seathoverhider"><img src="sports_plus_seat_plate.png" className="seatscaling" alt="" onClick={SportsPlusSeat} /></div>
                <div className="seathoverhider"><img src="performance_seat_plate.png" className="seatscaling" alt="" onClick={PerformanceSeat} /></div>
              </div>
              <div id="seatimageinformationsection">
                <div id="seatimagewithinfo">
                  <img src="sports_plus_seat_plate.png" alt="" id="currentseatinfoimage" />
                  <img src="infobutton.png" alt="" id="infobuttonforseat" onClick={showinfofunction} />
                </div>
                <div id="seatinformationcontent">
                  <div id="seatname">Sports Plus Seat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Interior;
