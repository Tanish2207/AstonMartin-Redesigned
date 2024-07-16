import React, { useId, useState } from 'react';
import StartConfiguration from '../startconfiguration';
import './interior.css';
import PrimaryColor from './primarycolor';
import SecondaryColor from './secondarycolor';

const Interior = ({ showinfofunction, selectedSeat, setSelectedSeat, selectedprimarycolor, setselectedprimarycolor, selectedsecondarycolor, setselectedsecondarycolor ,setinterior}) => {
  // const [selectedSeat, setSelectedSeat] = useState('sportsplus');
  // const [selectedprimarycolor,setselectedprimarycolor]=useState('metallicblack');
  // const [selectedsecondarycolor,setselectedsecondarycolor]=useState('oxfordtan');

  const SportsPlusSeat = () => {
    setSelectedSeat('sportsplus');
    setprevseat("sportsplus");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776654/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_vfzqdj.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776650/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_lgikhk.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776651/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_jfvzko.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776653/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_zunzdg.jpg";

    document.querySelector("#currentseatinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776637/sports_plus_seat_plate_shpho2.png";
    document.querySelector("#seatname").innerHTML = "Sports Plus Seat";

    document.querySelector("#colorimage img").style.left = "-36px";
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776639/sports_plus_seat_plate_information_watier.png";
    document.querySelector("#colorimage img").style.background = "#dadada";
    document.querySelector("#colorcardcolorname").innerHTML = "Sports Plus Seat";
    document.querySelector("#colorcardcolorinformation").innerHTML = "The Sports Plus Seat offers added visual presence, enhanced driver support and enhanced adjustability (with 16 way adjust).";

    // document.querySelector("#colorcard").style.width = "82vw";
    // document.querySelector("#colorcard").style.transform = "translate(11%,-8%)";
    // document.querySelector("#colorimage img").style.width = "780px";
    // document.querySelector("#colorinformation").style.width = "520px";
    // document.querySelector("#colorinformation").style.left = "700px";


    document.querySelector("#colorcard").style.width = "87vw";
    document.querySelector("#colorcard").style.height = "73vh";
    document.querySelector("#colorcard").style.transform = "translate(8%,-8%)";


    document.querySelector("#colorimage img").style.width = "49em";
    document.querySelector("#colorimage img").style.height = "34em";

    document.querySelector("#colorinformation").style.width = "29em";
    document.querySelector("#colorinformation").style.left = "50em";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776709/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_u9nsk1.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776705/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_gszrit.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776706/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_u7rarb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776708/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_ex69vn.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776734/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_qi9s0p.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776729/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview_nceoym.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776731/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_mkmstt.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776732/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_ptfu8h.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776728/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_ukfpdw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776723/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_phwmqh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776725/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_xl3gg4.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776726/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_ow93xo.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776722/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_oo8lb4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776717/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview_hmxa19.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776718/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_z1myko.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776721/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_jqfu7q.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776715/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview_csbapt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776711/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview_eyorio.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776712/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_bufboz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776714/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview_xpcqwq.jpg";

    }
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776703/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_jesoyi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776698/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_hlwm5h.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776700/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_kqwvs9.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776702/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_ckl181.jpg";
    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776660/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_w0xtvw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776656/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_dbti3d.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776658/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_zzraux.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776659/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_c1zbqb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776691/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_xj27zv.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776686/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_mtvgj1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776688/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_jab75t.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776689/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_vd4y2l.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776685/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_h6f1xf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776680/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_s2i82y.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776682/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_uzqzmx.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776679/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_boxpgc.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776674/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_nmf1ya.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776676/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_deip8a.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776677/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fhvett.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776673/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview_ysrc88.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776668/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview_nftlyi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776670/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_e4p42z.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776671/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview_nxaoaw.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776654/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_vfzqdj.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776650/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_lgikhk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776651/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_jfvzko.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776653/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_zunzdg.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776903/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_zoevev.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776898/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_ax0mxa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776900/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_x6bcky.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776901/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_jhkrab.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776897/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_i8fzng.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776892/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_rx8mpy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776893/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_y00uqp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776895/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_ghwjap.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776922/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_tedcda.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776917/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_qxlmyq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776919/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_o2lujm.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776921/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_w78sks.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776916/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_x92cxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776911/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_vw0qbg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776913/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_xrtufe.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776914/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_pibmc2.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776909/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_hfcpnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776905/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_wedbth.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776906/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dbjmbj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776908/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_t3v6wr.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmeallic' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776890/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_z6dbmc.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776885/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_qhg70y.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776885/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_qhg70y.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776885/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_qhg70y.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776858/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_jgmwmg.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776853/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_mon3o2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776855/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_qhjtmh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776857/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_w4niqc.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776852/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_uzqkr2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776847/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_wobotx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776850/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_mdpzp2.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776877/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_xfmvbl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776873/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_oj2gfx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776876/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_tajjce.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776871/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_j030kz.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776866/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_tgqm4t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776868/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_kdvpup.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776870/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_mj9om3.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776865/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview_cztadq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776860/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview_wyjwqs.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776861/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_rfoeyw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776863/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview_r6irfv.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776846/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_xqq0ny.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776841/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_gibtcs.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776843/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_pqid6o.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776844/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview_pa1nys.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776804/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_wbaq4t.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776797/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_yyfy2j.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776799/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_fjkrxh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776801/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_vvoho1.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776796/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_kvbm8i.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776791/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_t3hvz8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776794/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_ge92ep.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776833/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_peipzi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776828/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_nwvmhb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776831/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_auaro1.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776827/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_xbsedw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776811/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_fhjusi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776813/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_ty0wcd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780287/sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview_f1ehvm.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776810/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview_ufgbsx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776805/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_niwxdk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776807/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_tsmihp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776808/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview_gyfmai.jpg";
    }
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776790/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_lkvbld.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776785/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_zmwlfv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776786/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_udsbqx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776788/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_jliads.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776759/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview_kopkxy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776754/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview_mporke.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776755/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_cbkpkw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776757/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview_wxwubb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776752/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview_ive2zb.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776748/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview_o4t1x0.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776751/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview_tnxela.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776777/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_cpmuns.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776772/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_fkk9m8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776775/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_zad9qa.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776771/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview_fk43ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776766/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview_krfl7s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776768/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_aqvjw3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780902/sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview_h4eroo.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776765/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview_bhuynt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776760/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_typ8pv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776762/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_xtpbp3.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776746/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_frontview_i4dqmp.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776742/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_odem8x.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_sideview.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_w75gw7.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_qqn6qi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_j5utvz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_kbvyuh.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797491/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_j5ekbo.jpg";
      document.querySelector("#img2").src = "performance_seat_primhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797492/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeeringview_c4xyym.jpgary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_palwcw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_kck4pk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_wo1gnt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_mm1ny1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_vveih6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_yctlef.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797487/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_ccvxzc.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_kbegnx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_dnbtcj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_metallic_black_secondary_color_havana_frontview_ug2apm.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview_rbnpjb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_eriicn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_sideview_sft6b0.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_vtc2ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_ntkbde.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_zdavj8.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_izwhh3.jpg";
    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797398/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_qawod6.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_h11mtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_spau33.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797473/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_wyuu3f.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797479/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_llkf12.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_wafcsw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_guoov1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_k22lun.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_uduf04.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_xqvart.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_a5muez.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_ozfd0j.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_hlrkxq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_mmataq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_dcquax.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fuffp9.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_havana_frontview_jccbsd.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview_fttts4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_zbet5y.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_sideview_zv3ul0.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_xhk58y.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797471/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_eqf3no.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797091/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_cssrgc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797134/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_f40ipa.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_vrj9f4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720798490/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_so21yo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_f87z6h.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_zkiboj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_eavmjx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_zncetj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_ilp1ei.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_nurvbd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_pljmsf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_ri25c4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_ecdrcl.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_nzq0rc.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_lvjevl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_thbp8s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797561/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_miqsms.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_oq0b8f.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_qt0vho.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_j1jh7t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dfdk5n.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_abxqq1.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_pgcqed.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_n6hmv5.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview_bhpphj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview_j5cxkd.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_ho92qy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_aezbuc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_ghw8a6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_jmq0vd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_r2nqpu.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_pvnbgo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_j7x8k4.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_jfifv2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_sx6pwn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_evs0zn.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_obxae2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_iynogo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797557/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_mfwttn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_w8ioqi.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_frontview_ef1g6a.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview_bdyuxn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_bozorf.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_sideview_o8qhld.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_fk0epl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_prdzle.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_gftzvv.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview_bkyu96.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_fsv7tx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_uo31k3.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_ta97mg.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_enppnk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_zkx5ef.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_wmpvnf.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_xuq2x2.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_ctzqnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_ryybzg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_yraxw5.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_k5jmw4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_ruj9z6.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_zqulno.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview_gjwabw.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview_rcs244.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_jte5or.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_z3buqc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview_zquzja.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'chacellorred' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_bozwci.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797533/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_gxrhtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_q3rr29.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_ynlk3z.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_metallic_black_frontview_szlqe5.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview_opeslq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_mqkuvo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_sideview_eiv2fj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_onyx_black_frontview_ktpsxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview_ijqlci.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_onyx_black_sideview_qyccev.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_nwposf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_mtqozy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_q6txqm.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_bison_brown_frontview_yujyud.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview_ytwc4n.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_yaeogy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797500/performance_seat_primary_color_havana_secondary_color_bison_brown_sideview_auaiuh.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview_ifofsq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_hiqhzw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_zkxleq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lojoe2.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview_k9efat.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_vi7kzi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview_ogqfk1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview_pkmtbq.jpg";
    }

  }

  const PerformanceSeat = () => {
    setSelectedSeat('performance');
    setprevseat("performance")

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_vtc2ha.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797479/performance_seat_primary_color_metallic_black_steeringview_vlurmr.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_metallic_black_steeringleftbackview_a3zipr.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_sideview_rmlfa3.jpg";

    document.querySelector("#currentseatinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797469/performance_seat_plate_mh9d47.png";
    document.querySelector("#seatname").innerHTML = "Performance Seat";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797470/performance_seat_plate_information_nqazjs.png";
    document.querySelector("#colorimage img").style.left = "-36px";
    document.querySelector("#colorimage img").style.background = "#dadada";
    document.querySelector("#colorcardcolorname").innerHTML = "Performance Seat";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Full Satin 2x2 Twill Carbon Fibre performance seat combines lightweight construction with uncompromised support and comfort. In the pursuit of weight saving the performance seat has 6 way adjustability with heating function as standard.";

    // document.querySelector("#colorcard").style.width = "82vw";
    // document.querySelector("#colorcard").style.transform = "translate(11%,-8%)";
    // document.querySelector("#colorimage img").style.width = "780px";
    // document.querySelector("#colorinformation").style.width = "520px";
    // document.querySelector("#colorinformation").style.left = "700px";

    document.querySelector("#colorcard").style.width = "87vw";
    document.querySelector("#colorcard").style.height = "73vh";
    document.querySelector("#colorcard").style.transform = "translate(8%,-8%)";


    document.querySelector("#colorimage img").style.width = "49em";
    document.querySelector("#colorimage img").style.height = "34em";

    document.querySelector("#colorinformation").style.width = "29em";
    document.querySelector("#colorinformation").style.left = "50em";
    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview.jpg";
      document.querySelector("#img3").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776734/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_qi9s0p.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776729/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview_nceoym.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776731/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_mkmstt.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776732/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_ptfu8h.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776728/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_ukfpdw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776723/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_phwmqh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776725/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_xl3gg4.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776726/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_ow93xo.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776722/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_oo8lb4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776717/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview_hmxa19.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776718/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_z1myko.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776721/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_jqfu7q.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776715/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview_csbapt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776711/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview_eyorio.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776712/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_bufboz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776714/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview_xpcqwq.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776660/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_w0xtvw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776656/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_dbti3d.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776658/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_zzraux.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776659/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_c1zbqb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776691/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_xj27zv.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776686/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_mtvgj1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776688/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_jab75t.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776689/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_vd4y2l.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776685/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_h6f1xf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776680/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_s2i82y.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776682/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_uzqzmx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776683/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_tppj53.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776679/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_boxpgc.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776674/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_nmf1ya.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776676/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_deip8a.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776677/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fhvett.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776673/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview_ysrc88.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776668/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview_nftlyi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776670/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_e4p42z.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776671/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview_nxaoaw.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776903/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_zoevev.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776898/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_ax0mxa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776900/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_x6bcky.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776901/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_jhkrab.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776897/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_i8fzng.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776892/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_rx8mpy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776893/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_y00uqp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776895/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_ghwjap.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776922/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_tedcda.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776917/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_qxlmyq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776919/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_o2lujm.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776921/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_w78sks.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776916/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_x92cxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776911/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_vw0qbg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776913/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_xrtufe.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776914/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_pibmc2.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776909/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_hfcpnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776905/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_wedbth.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776906/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dbjmbj.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776908/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_t3v6wr.jpgarden_green_metallic_secondary_color_havana_sideview.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776858/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_jgmwmg.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776853/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_mon3o2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776855/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_qhjtmh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776857/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_w4niqc.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776852/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_uzqkr2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776847/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_wobotx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776850/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_mdpzp2.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776877/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_xfmvbl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776873/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_oj2gfx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776876/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_tajjce.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776871/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_j030kz.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776866/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_tgqm4t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776868/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_kdvpup.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776870/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_mj9om3.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776865/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview_cztadq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776860/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview_wyjwqs.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776861/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_rfoeyw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776863/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview_r6irfv.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776804/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_wbaq4t.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776797/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_yyfy2j.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776799/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_fjkrxh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776801/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_vvoho1.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776796/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_kvbm8i.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776791/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_t3hvz8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776794/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_ge92ep.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776833/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_peipzi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776828/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_nwvmhb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776831/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_auaro1.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776827/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_xbsedw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776811/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_fhjusi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776813/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_ty0wcd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780287/sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview_f1ehvm.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776810/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview_ufgbsx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776805/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_niwxdk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776807/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_tsmihp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776808/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview_gyfmai.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776759/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview_kopkxy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776754/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview_mporke.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776755/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_cbkpkw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776757/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview_wxwubb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776752/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview_ive2zb.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776748/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview_o4t1x0.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776751/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview_tnxela.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776777/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_cpmuns.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776772/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_fkk9m8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776775/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_zad9qa.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776771/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview_fk43ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776766/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview_krfl7s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776768/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_aqvjw3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780902/sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview_h4eroo.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776765/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview_bhuynt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776760/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_typ8pv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776762/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_xtpbp3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776763/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lfmips.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_w75gw7.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_qqn6qi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_j5utvz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_kbvyuh.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797491/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_j5ekbo.jpg";
      document.querySelector("#img2").src = "performance_seat_primhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797492/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeeringview_c4xyym.jpgary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_palwcw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_kck4pk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_wo1gnt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_mm1ny1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_vveih6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_yctlef.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797487/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_ccvxzc.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_kbegnx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_dnbtcj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_metallic_black_secondary_color_havana_frontview_ug2apm.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview_rbnpjb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_eriicn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_sideview_sft6b0.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_vtc2ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_ntkbde.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_zdavj8.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_izwhh3.jpg";
    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797398/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_qawod6.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_h11mtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_spau33.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797473/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_wyuu3f.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797479/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_llkf12.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_wafcsw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_guoov1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_k22lun.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_uduf04.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_xqvart.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_a5muez.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_ozfd0j.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_hlrkxq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_mmataq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_dcquax.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fuffp9.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_havana_frontview_jccbsd.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview_fttts4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_zbet5y.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_sideview_zv3ul0.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_xhk58y.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797471/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_eqf3no.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797091/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_cssrgc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797134/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_f40ipa.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_vrj9f4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720798490/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_so21yo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_f87z6h.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_zkiboj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_eavmjx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_zncetj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_ilp1ei.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_nurvbd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_pljmsf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_ri25c4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_ecdrcl.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_nzq0rc.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_lvjevl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_thbp8s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797561/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_miqsms.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_oq0b8f.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_qt0vho.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_j1jh7t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dfdk5n.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_abxqq1.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_pgcqed.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_n6hmv5.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview_bhpphj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview_j5cxkd.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_ho92qy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_aezbuc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_ghw8a6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_jmq0vd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_r2nqpu.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_pvnbgo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_j7x8k4.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_jfifv2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_sx6pwn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_evs0zn.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_obxae2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_iynogo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797557/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_mfwttn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_w8ioqi.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_frontview_ef1g6a.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview_bdyuxn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_bozorf.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_sideview_o8qhld.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_fk0epl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_prdzle.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_gftzvv.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview_bkyu96.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_fsv7tx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_uo31k3.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_ta97mg.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_enppnk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_zkx5ef.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_wmpvnf.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_xuq2x2.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_ctzqnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_ryybzg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_yraxw5.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_k5jmw4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_ruj9z6.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_zqulno.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview_gjwabw.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview_rcs244.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_jte5or.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_z3buqc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview_zquzja.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'chacellorred' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_bozwci.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797533/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_gxrhtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_q3rr29.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_ynlk3z.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_metallic_black_frontview_szlqe5.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview_opeslq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_mqkuvo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_sideview_eiv2fj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_onyx_black_frontview_ktpsxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview_ijqlci.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_onyx_black_sideview_qyccev.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_nwposf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_mtqozy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_q6txqm.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_bison_brown_frontview_yujyud.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview_ytwc4n.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_yaeogy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797500/performance_seat_primary_color_havana_secondary_color_bison_brown_sideview_auaiuh.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview_ifofsq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_hiqhzw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_zkxleq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lojoe2.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview_k9efat.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_vi7kzi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview_ogqfk1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview_pkmtbq.jpg";
    }

  }

  const PrimaryColorDisplay = () => {

    setinterior("primary");

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



    if (selectedprimarycolor === 'metallicblack') {
      document.querySelector("#primaryplateone").style.borderBottom = "2px solid white";
    }

    if (selectedprimarycolor === 'onyxblack') {
      document.querySelector("#primaryplatetwo").style.borderBottom = "2px solid white";
    }

    if (selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#primaryplatethree").style.borderBottom = "2px solid white";
    }

    if (selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#primaryplatefour").style.borderBottom = "2px solid white";
    }

    if (selectedprimarycolor === 'chancellorred') {
      document.querySelector("#primaryplatefive").style.borderBottom = "2px solid white";
    }
    if (selectedprimarycolor === 'havana') {
      document.querySelector("#primaryplatesix").style.borderBottom = "2px solid white";
    }



    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776703/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_jesoyi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776698/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_hlwm5h.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776700/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_kqwvs9.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776702/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_ckl181.jpg";
      // console.log("done");
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776654/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_vfzqdj.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776650/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_lgikhk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776651/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_jfvzko.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776653/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_zunzdg.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776890/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_z6dbmc.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776885/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_qhg70y.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776887/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview_e5uyqo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776889/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview_hxivgr.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776846/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_xqq0ny.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776841/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_gibtcs.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776843/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_pqid6o.jpg";
      document.querySelector("#img4").src = "sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776790/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_lkvbld.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776785/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_zmwlfv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776786/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_udsbqx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776788/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_jliads.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776746/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_frontview_i4dqmp.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776742/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_odem8x.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776743/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview_slmrb0.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776745/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_sideview_ram90l.jpg";
    }

    // ----------------------- performance seat ---------------------------------------




    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776709/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_u9nsk1.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776705/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_gszrit.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776706/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_u7rarb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776708/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_ex69vn.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776734/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_qi9s0p.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776729/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview_nceoym.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776731/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_mkmstt.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776732/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_ptfu8h.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776728/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_ukfpdw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776723/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_phwmqh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776725/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_xl3gg4.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776726/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_ow93xo.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776722/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_oo8lb4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776717/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview_hmxa19.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776718/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_z1myko.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776721/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_jqfu7q.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776715/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview_csbapt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776711/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview_eyorio.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776712/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_bufboz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776714/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview_xpcqwq.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776660/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_w0xtvw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776656/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_dbti3d.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776658/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_zzraux.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776659/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_c1zbqb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776691/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_xj27zv.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776686/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_mtvgj1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776688/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_jab75t.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776689/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_vd4y2l.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776685/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_h6f1xf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776680/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_s2i82y.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776682/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_uzqzmx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776683/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_tppj53.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776679/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_boxpgc.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776674/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_nmf1ya.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776674/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_nmf1ya.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776677/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fhvett.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776673/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview_ysrc88.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776668/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview_nftlyi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776670/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_e4p42z.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776671/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview_nxaoaw.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776903/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_zoevev.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776898/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_ax0mxa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776900/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_x6bcky.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776901/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_jhkrab.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776897/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_i8fzng.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776892/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_rx8mpy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776893/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_y00uqp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776895/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_ghwjap.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776922/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_tedcda.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776917/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_qxlmyq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776919/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_o2lujm.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776921/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_w78sks.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776916/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_x92cxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776911/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_vw0qbg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776913/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_xrtufe.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776914/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_pibmc2.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776909/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_hfcpnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776905/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_wedbth.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776906/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dbjmbj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776908/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_t3v6wr.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776858/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_jgmwmg.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776853/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_mon3o2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776855/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_qhjtmh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776857/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_w4niqc.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776852/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_uzqkr2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776847/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_wobotx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776850/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_mdpzp2.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776877/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_xfmvbl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776873/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_oj2gfx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776876/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_tajjce.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776871/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_j030kz.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776866/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_tgqm4t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776868/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_kdvpup.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776870/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_mj9om3.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776865/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview_cztadq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776860/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview_wyjwqs.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776861/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_rfoeyw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776863/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview_r6irfv.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776804/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_wbaq4t.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776797/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_yyfy2j.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776799/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_fjkrxh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776801/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_vvoho1.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776796/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_kvbm8i.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776791/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_t3hvz8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776794/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_ge92ep.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776833/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_peipzi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776828/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_nwvmhb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776831/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_auaro1.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776827/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_xbsedw.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_colhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776811/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_fhjusi.jpgor_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776813/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_ty0wcd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780287/sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview_f1ehvm.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776810/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview_ufgbsx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776805/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_niwxdk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776807/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_tsmihp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776808/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview_gyfmai.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776759/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview_kopkxy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776754/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview_mporke.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776755/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_cbkpkw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776757/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview_wxwubb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776752/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview_ive2zb.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776748/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview_o4t1x0.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776751/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview_tnxela.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776777/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_cpmuns.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776772/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_fkk9m8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776775/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_zad9qa.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776771/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview_fk43ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776766/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview_krfl7s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776768/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_aqvjw3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780902/sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview_h4eroo.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776765/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview_bhuynt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776760/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_typ8pv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776762/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_xtpbp3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776763/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lfmips.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_w75gw7.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_qqn6qi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_j5utvz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_kbvyuh.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797491/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_j5ekbo.jpg";
      document.querySelector("#img2").src = "performance_seat_primhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797492/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeeringview_c4xyym.jpgary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_palwcw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_kck4pk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_wo1gnt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_mm1ny1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_vveih6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_yctlef.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797487/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_ccvxzc.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_kbegnx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_dnbtcj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_metallic_black_secondary_color_havana_frontview_ug2apm.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview_rbnpjb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_eriicn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_sideview_sft6b0.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_vtc2ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_ntkbde.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_zdavj8.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_izwhh3.jpg";
    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797398/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_qawod6.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_h11mtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_spau33.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797473/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_wyuu3f.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797479/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_llkf12.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_wafcsw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_guoov1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_k22lun.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_uduf04.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_xqvart.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_a5muez.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_ozfd0j.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_hlrkxq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_mmataq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_dcquax.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fuffp9.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_havana_frontview_jccbsd.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview_fttts4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_zbet5y.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_sideview_zv3ul0.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_xhk58y.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797471/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_eqf3no.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797091/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_cssrgc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797134/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_f40ipa.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_vrj9f4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720798490/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_so21yo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_f87z6h.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_zkiboj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_eavmjx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_zncetj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_ilp1ei.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_nurvbd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_pljmsf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_ri25c4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_ecdrcl.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_nzq0rc.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_lvjevl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_thbp8s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797561/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_miqsms.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_oq0b8f.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_qt0vho.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_j1jh7t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dfdk5n.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_abxqq1.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_pgcqed.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_n6hmv5.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview_bhpphj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview_j5cxkd.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_ho92qy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_aezbuc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_ghw8a6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_jmq0vd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_r2nqpu.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_pvnbgo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_j7x8k4.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_jfifv2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_sx6pwn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_evs0zn.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_obxae2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_iynogo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797557/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_mfwttn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_w8ioqi.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_frontview_ef1g6a.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview_bdyuxn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_bozorf.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_sideview_o8qhld.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_fk0epl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_prdzle.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_gftzvv.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview_bkyu96.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_fsv7tx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_uo31k3.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_ta97mg.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_enppnk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_zkx5ef.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_wmpvnf.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_xuq2x2.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_ctzqnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_ryybzg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_yraxw5.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_k5jmw4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_ruj9z6.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_zqulno.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview_gjwabw.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview_rcs244.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_jte5or.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_z3buqc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview_zquzja.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'chacellorred' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_bozwci.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797533/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_gxrhtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_q3rr29.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_ynlk3z.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_metallic_black_frontview_szlqe5.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview_opeslq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_mqkuvo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_sideview_eiv2fj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_onyx_black_frontview_ktpsxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview_ijqlci.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_onyx_black_sideview_qyccev.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_nwposf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_mtqozy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_q6txqm.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_bison_brown_frontview_yujyud.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview_ytwc4n.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_yaeogy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797500/performance_seat_primary_color_havana_secondary_color_bison_brown_sideview_auaiuh.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview_ifofsq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_hiqhzw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_zkxleq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lojoe2.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview_k9efat.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_vi7kzi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview_ogqfk1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview_pkmtbq.jpg";
    }




  }

  const sportsplusseatimagesshow = () => {
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720776654/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_vfzqdj.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720776650/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_lgikhk.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720776651/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_jfvzko.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720776653/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_zunzdg.jpg";
  }

  const performanceseatimagesshow = () => {
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720796904/performance_seat_frontview_vlhh7t.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720796779/performance_seat_steeringview_fece4h.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720797471/performance_seat_steeringleftbackview_da7qw0.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720797471/performance_seat_sideview_d9794y.jpg";
  }

  const Showseats = () => {
    setinterior("seating")
    document.querySelector("#primarycolorwindow").style.display = "none";
    document.querySelector("#seatingdiv").style.display = "block";
    document.querySelector("#seatingp").style.borderBottom = "1px solid white";
    document.querySelector("#primarycolorp").style.borderBottom = "none";
    document.querySelector("#secondarycolorp").style.borderBottom = "none";


    document.querySelector("#secondarycolorwindow").style.display = "none";

    // for secondary color
    // sports plus 
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776709/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_u9nsk1.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776705/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_gszrit.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776706/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_u7rarb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776708/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_ex69vn.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776734/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_qi9s0p.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776729/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview_nceoym.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776731/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_mkmstt.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776732/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_ptfu8h.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776728/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_ukfpdw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776723/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_phwmqh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776725/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_xl3gg4.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776726/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_ow93xo.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776722/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_oo8lb4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776717/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview_hmxa19.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776718/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_z1myko.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776721/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_jqfu7q.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776715/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview_csbapt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776711/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview_eyorio.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776712/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_bufboz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776714/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview_xpcqwq.jpg";

    }


    //  ------------------ sports plus onyx black

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776660/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_w0xtvw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776656/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_dbti3d.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776658/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_zzraux.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776659/sports_plus_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_c1zbqb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776691/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_xj27zv.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776686/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_mtvgj1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776688/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_jab75t.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776689/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_vd4y2l.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776685/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_h6f1xf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776680/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_s2i82y.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776682/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_uzqzmx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776683/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_tppj53.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776679/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_boxpgc.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776674/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_nmf1ya.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776674/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_nmf1ya.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776677/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fhvett.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776673/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview_ysrc88.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776668/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview_nftlyi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776670/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_e4p42z.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776671/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview_nxaoaw.jpg";
    }


    // --------------------- sports plus ardengreenmetallic
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776903/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_zoevev.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776898/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_ax0mxa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776900/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_x6bcky.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776901/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_jhkrab.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776897/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_i8fzng.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776892/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_rx8mpy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776893/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_y00uqp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776895/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_ghwjap.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776922/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_tedcda.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776917/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_qxlmyq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776919/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_o2lujm.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776921/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_w78sks.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776916/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_x92cxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776911/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_vw0qbg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776913/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_xrtufe.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776914/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_pibmc2.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776909/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_hfcpnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776905/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_wedbth.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776906/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dbjmbj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776908/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_t3v6wr.jpg";
    }


    // ----------------- sports bisonbrown
    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776858/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_jgmwmg.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776853/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_mon3o2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776855/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_qhjtmh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776857/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_w4niqc.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776852/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_uzqkr2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776847/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_wobotx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776850/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_mdpzp2.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776877/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_xfmvbl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776873/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_oj2gfx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776876/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_tajjce.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776871/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_j030kz.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776866/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_tgqm4t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776868/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_kdvpup.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776870/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_mj9om3.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776865/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview_cztadq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776860/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview_wyjwqs.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776861/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_rfoeyw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776863/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview_r6irfv.jpg";
    }

    // ------------ sports plus chancellor red

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776804/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_wbaq4t.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776797/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_yyfy2j.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776799/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_fjkrxh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776801/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_vvoho1.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776796/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_kvbm8i.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776791/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_t3hvz8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776794/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_ge92ep.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776833/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_peipzi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776828/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_nwvmhb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776831/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_auaro1.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776827/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_xbsedw.jpg";
      document.querySelector("#img2").src = "sports_plus_seat_primary_colhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776811/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_fhjusi.jpgor_chancellor_red_secondary_color_bison_brown_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776813/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_ty0wcd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780287/sports_plus_seat_primary_chancellor_red_secondary_color_bison_brown_sideview_f1ehvm.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776810/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview_ufgbsx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776805/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_niwxdk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776807/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_tsmihp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776808/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview_gyfmai.jpg";
    }

    //                  -----------------  sports plus havana

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776759/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview_kopkxy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776754/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview_mporke.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776755/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_cbkpkw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776757/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview_wxwubb.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776752/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview_ive2zb.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776748/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview_o4t1x0.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776751/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview_tnxela.jpg";

    }

    if (selectedSeat === "sportsplus" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776777/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_cpmuns.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776772/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_fkk9m8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776775/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_zad9qa.jpg";

    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776771/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview_fk43ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776766/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview_krfl7s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776768/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_aqvjw3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720780902/sports_plus_seat_primary_havana_secondary_color_bison_brown_sideview_h4eroo.jpg";
    }


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776765/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview_bhuynt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776760/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_typ8pv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776762/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_xtpbp3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776763/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lfmips.jpg";
    }

    //        secondary color performance seat
    // performance metallicblack 

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_w75gw7.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_qqn6qi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_j5utvz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_kbvyuh.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797491/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_j5ekbo.jpg";
      document.querySelector("#img2").src = "performance_seat_primhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797492/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeeringview_c4xyym.jpgary_color_metallic_black_secondary_color_arden_green_metallic_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_palwcw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_kck4pk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_wo1gnt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_mm1ny1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_vveih6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_yctlef.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'chancellorred') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797487/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_ccvxzc.jpg";
      document.querySelector("#img2").src = "performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_kbegnx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_dnbtcj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'havana') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_metallic_black_secondary_color_havana_frontview_ug2apm.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview_rbnpjb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_eriicn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_sideview_sft6b0.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_vtc2ha.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_ntkbde.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_zdavj8.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_izwhh3.jpg";
    }


    //  ------------------ performance onyx black

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797398/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_frontview_qawod6.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringview_h11mtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_steeringleftbackview_spau33.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797473/performance_seat_primary_color_onyx_black_secondary_color_onyx_black_sideview_wyuu3f.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797479/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_llkf12.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_wafcsw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_guoov1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_k22lun.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_uduf04.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_xqvart.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_a5muez.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_ozfd0j.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_hlrkxq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_mmataq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_dcquax.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fuffp9.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_havana_frontview_jccbsd.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview_fttts4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_zbet5y.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_sideview_zv3ul0.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_xhk58y.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797471/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_eqf3no.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797091/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_cssrgc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797134/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_f40ipa.jpg";
    }


    // --------------------- performance ardengreenmetallic
    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_vrj9f4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720798490/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_so21yo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_f87z6h.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_zkiboj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_eavmjx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_zncetj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_ilp1ei.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_nurvbd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'bisonbrown') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_pljmsf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_ri25c4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_ecdrcl.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_nzq0rc.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_lvjevl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_thbp8s.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797561/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_miqsms.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_oq0b8f.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_qt0vho.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_j1jh7t.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dfdk5n.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_abxqq1.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_pgcqed.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_n6hmv5.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview_bhpphj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview_j5cxkd.jpg";
    }


    // ----------------- performance bisonbrown
    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_ho92qy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_aezbuc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_ghw8a6.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_jmq0vd.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_r2nqpu.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_pvnbgo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_j7x8k4.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_jfifv2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_sx6pwn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_evs0zn.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_obxae2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_iynogo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797557/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_mfwttn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_w8ioqi.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_frontview_ef1g6a.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview_bdyuxn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_bozorf.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_sideview_o8qhld.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_fk0epl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_prdzle.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_gftzvv.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview_bkyu96.jpg";
    }

    // ------------ performance chancellor red

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_fsv7tx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_uo31k3.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_ta97mg.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_enppnk.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_zkx5ef.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_wmpvnf.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_xuq2x2.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_ctzqnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_ryybzg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_yraxw5.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_k5jmw4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_ruj9z6.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_zqulno.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview_gjwabw.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred' && selectedsecondarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview_rcs244.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_jte5or.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_z3buqc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview_zquzja.jpg";
    }
    if (selectedSeat === 'performance' && selectedprimarycolor === 'chacellorred' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_bozwci.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797533/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_gxrhtn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_q3rr29.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_ynlk3z.jpg";
    }

    //                  -----------------  performance havana

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'metallicblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_metallic_black_frontview_szlqe5.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview_opeslq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_mqkuvo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_sideview_eiv2fj.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'onyxblack') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_onyx_black_frontview_ktpsxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview_ijqlci.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_onyx_black_sideview_qyccev.jpg";

    }

    if (selectedSeat === "performance" && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'ardengreenmetallic') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_nwposf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_mtqozy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_q6txqm.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_bison_brown_frontview_yujyud.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview_ytwc4n.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_yaeogy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797500/performance_seat_primary_color_havana_secondary_color_bison_brown_sideview_auaiuh.jpg";
    }


    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview_ifofsq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_hiqhzw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_zkxleq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lojoe2.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana' && selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview_k9efat.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_vi7kzi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview_ogqfk1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview_pkmtbq.jpg";
    }




  }

  const SecondaryColorDisplay = () => {

    setinterior("secondary");

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


    // border stuff
    if (selectedsecondarycolor === 'oxfordtan') {
      document.querySelector("#secondaryplateseven").style.borderBottom = "2px solid white";
    }

    if (selectedsecondarycolor === 'metallicblack') {
      document.querySelector("#secondaryplateone").style.borderBottom = "2px solid white";
    }


    if (selectedsecondarycolor === 'onyxblack') {
      document.querySelector("#secondaryplatetwo").style.borderBottom = "2px solid white";
    }


    if (selectedsecondarycolor === 'ardengreenmetallic') {
      document.querySelector("#secondaryplatethree").style.borderBottom = "2px solid white";

    }

    if (selectedsecondarycolor === 'bisonbrown') {
      document.querySelector("#secondaryplatefour").style.borderBottom = "2px solid white";

    }


    if (selectedsecondarycolor === 'chancellorred') {
      document.querySelector("#secondaryplatefive").style.borderBottom = "2px solid white";

    }

    if (selectedsecondarycolor === 'havana') {
      document.querySelector("#secondaryplatesix").style.borderBottom = "2px solid white";

    }



  }

const [prevseat,setprevseat]=useState("sportsplus")



  


  

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
                <div className="seathoverhider" id="sportsplushover"
                // onMouseEnter={HoverSportsPlus} onMouseLeave={LeaveSportsPlus}
                >
                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720776637/sports_plus_seat_plate_shpho2.png" className="seatscaling" alt="" onClick={SportsPlusSeat}  />
                  {/* <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforsportsplus" onClick={showinfofunction} /> */}
                  </div>
                <div className="seathoverhider" id="performancehover"
                // onMouseEnter={HoverPerformance} onMouseLeave={LeavePerformance}
                >
                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720797469/performance_seat_plate_mh9d47.png" className="seatscaling" alt="" onClick={PerformanceSeat} />
                  {/* <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforperformance" onClick={showinfofunction} /> */}
                  </div>
              </div>
              <div id="seatimageinformationsection">
                <div id="seatimagewithinfo">
                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720776637/sports_plus_seat_plate_shpho2.png" alt="" id="currentseatinfoimage" />
                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforseat" onClick={showinfofunction} />
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