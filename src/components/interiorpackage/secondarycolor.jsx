import './secondarycolor.css';





const SecondaryColor = ({ selectedSeat, selectedprimarycolor, selectedsecondarycolor, setselectedsecondarycolor }) => {

  const MetallicBlackSecondary = () => {
    setselectedsecondarycolor('metallicblack');

    //metallic black

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic'
    ) {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776903/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_zoevev.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776901/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_jhkrab.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776898/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_ax0mxa.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776900/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_x6bcky.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_frontview_vrj9f4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_sideview_zkiboj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720798490/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringview_so21yo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_metallic_black_steeringleftbackview_f87z6h.jpg";
    }

    //onyx black
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776667/sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_frontview_pmnpmn.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776665/sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_sideview_upajny.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776557/sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringview_fbqb3t.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776558/sports_plus_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringleftbackview_h69grc.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_metallic_black_frontview_lbuz97.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_metallic_black_sideview_uldgbm.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797473/performance_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringview_qljyn9.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797473/performance_seat_primary_color_onyx_black_secondary_color_metallic_black_steeringleftbackview_yzxrex.jpg";

    }

    //arden green metallic
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776858/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_jgmwmg.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776857/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_w4niqc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776853/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_mon3o2.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776855/sports_plus_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_qhjtmh.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_frontview_ho92qy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_sideview_jmq0vd.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringview_aezbuc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_metallic_black_steeringleftbackview_ghw8a6.jpg";
    }

    //chancellor red

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776804/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_wbaq4t.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776801/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_vvoho1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776797/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_yyfy2j.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776799/sports_plus_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_fjkrxh.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_frontview_fsv7tx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_sideview_enppnk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringview_uo31k3.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_metallic_black_steeringleftbackview_ta97mg.jpg";
    }


    //havana
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776759/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_frontview_kopkxy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776757/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_sideview_wxwubb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776754/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringview_mporke.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776755/sports_plus_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_cbkpkw.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_metallic_black_frontview_szlqe5.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_sideview_eiv2fj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringview_opeslq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797495/performance_seat_primary_color_havana_secondary_color_metallic_black_steeringleftbackview_mqkuvo.jpg";
    }




    // ---------------------------------------- x x x --------------------
    document.querySelector("#secondarycolorimageplate img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720806374/metallic_black_primary_color_plate_pbb1tq.jpg";
    document.querySelector("#secondarycolortype").innerHTML = "Colour Palette";
    document.querySelector("#secondarycolorname").innerHTML = "Metallic Black";


    // for border bottoms
    document.querySelector("#secondaryplateone").style.borderBottom = "1px solid white";
    document.querySelector("#secondaryplatetwo").style.borderBottom = "none";
    document.querySelector("#secondaryplatethree").style.borderBottom = "none";
    document.querySelector("#secondaryplatefour").style.borderBottom = "none";
    document.querySelector("#secondaryplatefive").style.borderBottom = "none";
    document.querySelector("#secondaryplateseven").style.borderBottom = "none";
    document.querySelector("#secondaryplatesix").style.borderBottom = "none";
  }

  const OnyxBlackSecondary = () => {

    setselectedsecondarycolor('onyxblack');


    if (selectedprimarycolor === 'metallicblack' && selectedSeat === 'sportsplus') {
      console.log("first");
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776709/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_u9nsk1.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776708/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_ex69vn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776705/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_gszrit.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776706/sports_plus_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_u7rarb.jpg";
    }
    if (selectedprimarycolor === 'metallicblack' && selectedSeat === 'performance') {
      console.log("second");

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_frontview_w75gw7.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_sideview_kbvyuh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringview_qqn6qi.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797482/performance_seat_primary_color_metallic_black_secondary_color_onyx_black_steeringleftbackview_j5utvz.jpg";
    }

    //arden green metallic

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776895/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_ghwjap.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776892/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_rx8mpy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776893/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_y00uqp.jpg";

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776897/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_i8fzng.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_frontview_eavmjx.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_sideview_nurvbd.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringview_zncetj.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797553/performance_seat_primary_color_arden_green_metallic_secondary_color_onyx_black_steeringleftbackview_ilp1ei.jpg";
    }

    //bison brown
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776850/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_mdpzp2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776847/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_wobotx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776849/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringleftbackview_gne740.jpg";

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776852/sports_plus_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_uzqkr2.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_frontview_r2nqpu.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797545/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_sideview_j7x8k4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringview_pvnbgo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797546/performance_seat_primary_color_bison_brown_secondary_color_onyx_black_steeringleftbackview_sgiaxa.jpg";
    }

    //chancellor red

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776794/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_ge92ep.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776791/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_t3hvz8.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776793/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringleftbackview_vo6gtx.jpg";

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776796/sports_plus_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_kvbm8i.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_frontview_zkx5ef.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_sideview_xuq2x2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797535/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringview_wmpvnf.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_onyx_black_steeringleftbackview_i7zu70.jpg";
    }


    //havana
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776751/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_sideview_tnxela.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776748/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringview_o4t1x0.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776749/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_steeringleftbackview_b6qa8j.jpg";

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776752/sports_plus_seat_primary_color_havana_secondary_color_onyx_black_frontview_ive2zb.jpg";

    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_onyx_black_frontview_ktpsxh.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_onyx_black_sideview_qyccev.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_onyx_black_steeringview_ijqlci.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_onyx_black_steeringleftbackview_w1jlse.jpg";
    }

   




    //  ----------------------------------------------x- x -x x
    document.querySelector("#secondarycolorimageplate img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720806319/onyx_black_primary_color_plate_i26z5i.jpg";
    document.querySelector("#secondarycolortype").innerHTML = "";
    document.querySelector("#secondarycolorname").innerHTML = "Onyx Black";

    // for border bottoms



    document.querySelector("#secondaryplateone").style.borderBottom = "none";
    document.querySelector("#secondaryplatetwo").style.borderBottom = "1px solid white";
    document.querySelector("#secondaryplatethree").style.borderBottom = "none";
    document.querySelector("#secondaryplatefour").style.borderBottom = "none";
    document.querySelector("#secondaryplatefive").style.borderBottom = "none";
    document.querySelector("#secondaryplateseven").style.borderBottom = "none";
    document.querySelector("#secondaryplatesix").style.borderBottom = "none";


  }

  const ArdenGreenMetallicSecondary = () => {
    setselectedsecondarycolor('ardengreenmetallic');

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776734/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_qi9s0p.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776732/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_ptfu8h.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776729/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringview_nceoym.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776731/sports_plus_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_mkmstt.jpg";


    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797491/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_frontview_j5ekbo.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_sideview_kck4pk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797492/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeeringview_c4xyym.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797490/performance_seat_primary_color_metallic_black_secondary_color_arden_green_metallic_steeringleftbackview_palwcw.jpg";
    }

    //onyx black
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776689/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_vd4y2l.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776686/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_mtvgj1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776688/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_jab75t.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776691/sports_plus_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_xj27zv.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797479/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_frontview_llkf12.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_sideview_k22lun.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringview_wafcsw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_arden_green_metallic_steeringleftbackview_guoov1.jpg";

    }
    
    //bison brown

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776876/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_tajjce.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776873/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_oj2gfx.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776874/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_bomxry.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776877/sports_plus_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_xfmvbl.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_frontview_jfifv2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_sideview_evs0zn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringview_sx6pwn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_arden_green_metallic_steeringleftbackview_utfayh.jpg";
    }

    //chancellor red
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776831/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_auaro1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776828/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_nwvmhb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776830/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bpz2yx.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776833/sports_plus_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_peipzi.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_frontview_ctzqnk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797542/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_sideview_yraxw5.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringview_ryybzg.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797538/performance_seat_primary_color_chancellor_red_secondary_color_arden_green_metallic_steeringleftbackview_bdwytw.jpg";
    }

    //havana
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776775/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_zad9qa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776772/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_fkk9m8.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776774/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ptu1zz.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776777/sports_plus_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_cpmuns.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_frontview_nwposf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797499/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_sideview_q6txqm.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringview_mtqozy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_arden_green_metallic_steeringleftbackview_ytqscb.jpg";
    }



    // -------------------- x - x -x x -


    document.querySelector("#secondarycolorimageplate img").src = "arden_green_metallic_primary_color_plate.jpg";
    document.querySelector("#secondarycolortype").innerHTML = "Colour Palette";
    document.querySelector("#secondarycolorname").innerHTML = "Arden Green Metallic";



    // for border bottoms

    document.querySelector("#secondaryplateone").style.borderBottom = "none";
    document.querySelector("#secondaryplatetwo").style.borderBottom = "none";
    document.querySelector("#secondaryplatethree").style.borderBottom = "1px solid white";
    document.querySelector("#secondaryplatefour").style.borderBottom = "none";
    document.querySelector("#secondaryplatefive").style.borderBottom = "none";
    document.querySelector("#secondaryplateseven").style.borderBottom = "none";
    document.querySelector("#secondaryplatesix").style.borderBottom = "none";

  }

  const BisonBrownSecondary = () => {

    setselectedsecondarycolor('bisonbrown');



    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776728/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_ukfpdw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776726/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_ow93xo.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776723/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_phwmqh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776725/sports_plus_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_xl3gg4.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_sideview_yctlef.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797489/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_frontview_wo1gnt.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringview_mm1ny1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_bison_brown_steeringleftbackview_vveih6.jpg";
    }

    // onyx black bison brown 
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776683/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_tppj53.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776680/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_s2i82y.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776682/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_uzqzmx.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776685/sports_plus_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_h6f1xf.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_frontview_uduf04.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_sideview_ozfd0j.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringview_xqvart.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797478/performance_seat_primary_color_onyx_black_secondary_color_bison_brown_steeringleftbackview_a5muez.jpg";

    }

    //ardengreenmetallic
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776921/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_w78sks.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776917/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_qxlmyq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776919/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_o2lujm.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776922/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_tedcda.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_frontview_pljmsf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_sideview_nzq0rc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringview_ri25c4.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797564/performance_seat_primary_color_arden_green_metallic_secondary_color_bison_brown_steeringleftbackview_ecdrcl.jpg";

    }

    //chancellor red
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776815/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview_itkgle.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776811/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_fhjusi.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776813/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_ty0wcd.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776827/sports_plus_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_xbsedw.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_frontview_k5jmw4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_sideview_gjwabw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringview_ruj9z6.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797537/performance_seat_primary_color_chancellor_red_secondary_color_bison_brown_steeringleftbackview_zqulno.jpg";

    }

    //havana
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776769/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_sideview_qbfffh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776766/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringview_krfl7s.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776768/sports_plus_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_aqvjw3.jpg";
      document.querySelector("#img1").src = "sports_plus_seat_primary_color_havana_secondary_color_bison_brown_frontview.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797498/performance_seat_primary_color_havana_secondary_color_bison_brown_frontview_yujyud.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797500/performance_seat_primary_color_havana_secondary_color_bison_brown_sideview_auaiuh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringview_ytwc4n.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_bison_brown_steeringleftbackview_yaeogy.jpg";

    }



    // ------------------------- x- x-x -x 

    document.querySelector("#secondarycolorimageplate img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807344/bison_brown_primary_color_plate_p08ljj.jpg";
    document.querySelector("#secondarycolortype").innerHTML = "Colour Palette";
    document.querySelector("#secondarycolorname").innerHTML = "Bison Brown";


    // for border bottoms
    document.querySelector("#secondaryplateone").style.borderBottom = "none";
    document.querySelector("#secondaryplatetwo").style.borderBottom = "none";
    document.querySelector("#secondaryplatethree").style.borderBottom = "none";
    document.querySelector("#secondaryplatefour").style.borderBottom = "1px solid white";
    document.querySelector("#secondaryplatefive").style.borderBottom = "none";
    document.querySelector("#secondaryplateseven").style.borderBottom = "none";
    document.querySelector("#secondaryplatesix").style.borderBottom = "none";
  }

  const ChancellorRedSecondary = () => {

    setselectedsecondarycolor('chancellorred');


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776721/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_jqfu7q.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776722/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_oo8lb4.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776717/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview_hmxa19.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776718/sports_plus_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_z1myko.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_sideview_dnbtcj.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797487/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_frontview_ccvxzc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringview_mz0ule.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797488/performance_seat_primary_color_metallic_black_secondary_color_chancellor_red_steeringleftbackview_kbegnx.jpg";
    }

    //onyx black

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776679/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_boxpgc.jpg";
        document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776677/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fhvett.jpg";
        document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776674/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_nmf1ya.jpg";
        document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776676/sports_plus_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_deip8a.jpg";

      }
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_frontview_hlrkxq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_sideview_fuffp9.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringview_mmataq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_chancellor_red_steeringleftbackview_dcquax.jpg";
    }

    // arden green metallic
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776914/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_pibmc2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776911/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_vw0qbg.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776913/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_xrtufe.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776916/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_x92cxh.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_frontview_lvjevl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797562/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_sideview_oq0b8f.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringview_thbp8s.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797561/performance_seat_primary_color_arden_green_metallic_secondary_color_chancellor_red_steeringleftbackview_miqsms.jpg";
    }

    //bison brown
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776870/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_mj9om3.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776871/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_j030kz.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776866/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_tgqm4t.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776868/sports_plus_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_kdvpup.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797549/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_sideview_w8ioqi.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797550/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_frontview_obxae2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797547/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringview_iynogo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797557/performance_seat_primary_color_bison_brown_secondary_color_chancellor_red_steeringleftbackview_mfwttn.jpg";

    }

    //havana
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776763/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lfmips.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776765/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_frontview_bhuynt.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776760/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_typ8pv.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776762/sports_plus_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_xtpbp3.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_sideview_lojoe2.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797497/performance_seat_primary_color_havana_secondary_color_chancellor_red_frontview_ifofsq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringview_hiqhzw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797496/performance_seat_primary_color_havana_secondary_color_chancellor_red_steeringleftbackview_zkxleq.jpg";

    }



    // -------------------------------- x- x-x x -
    document.querySelector("#secondarycolorimageplate img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807483/chancellor_red_primary_color_plate_givrfr.jpg";
    document.querySelector("#secondarycolortype").innerHTML = "";
    document.querySelector("#secondarycolorname").innerHTML = "Chancellor Red";

    // for border bottoms
    document.querySelector("#secondaryplateone").style.borderBottom = "none";
    document.querySelector("#secondaryplatetwo").style.borderBottom = "none";
    document.querySelector("#secondaryplatethree").style.borderBottom = "none";
    document.querySelector("#secondaryplatefour").style.borderBottom = "none";
    document.querySelector("#secondaryplatefive").style.borderBottom = "1px solid white";
    document.querySelector("#secondaryplateseven").style.borderBottom = "none";
    document.querySelector("#secondaryplatesix").style.borderBottom = "none";

  }

  const HavanaSecondary = () => {

    setselectedsecondarycolor('havana');


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776714/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_sideview_xpcqwq.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776715/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_frontview_csbapt.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776711/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringview_eyorio.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776712/sports_plus_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_bufboz.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_sideview_sft6b0.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_metallic_black_secondary_color_havana_frontview_ug2apm.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797483/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringview_rbnpjb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_havana_steeringleftbackview_eriicn.jpg";

    }

    //onyx black
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776673/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_frontview_ysrc88.jpg";
        document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776671/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_sideview_nxaoaw.jpg";
        document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776668/sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringview_nftlyi.jpg";
        document.querySelector("#img4").src = "sports_plus_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview.jpg";

      }
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797476/performance_seat_primary_color_onyx_black_secondary_color_havana_frontview_jccbsd.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_sideview_zv3ul0.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797475/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringview_fttts4.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797474/performance_seat_primary_color_onyx_black_secondary_color_havana_steeringleftbackview_zbet5y.jpg";
    }
    //arden green metallic
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic') {

      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776908/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_t3v6wr.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776905/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_wedbth.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776906/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dbjmbj.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776909/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_hfcpnk.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797559/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_frontview_qt0vho.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_sideview_abxqq1.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797558/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringview_j1jh7t.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797560/performance_seat_primary_color_arden_green_metallic_secondary_color_havana_steeringleftbackview_dfdk5n.jpg";
    }

    //bison brown

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {

      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776863/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_sideview_r6irfv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776860/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringview_wyjwqs.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776861/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_rfoeyw.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776865/sports_plus_seat_primary_color_bison_brown_secondary_color_havana_frontview_cztadq.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_frontview_ef1g6a.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_sideview_o8qhld.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringview_bdyuxn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797548/performance_seat_primary_color_bison_brown_secondary_color_havana_steeringleftbackview_bozorf.jpg";
    }

    //chancellor red
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {

      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776808/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_sideview_gyfmai.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776805/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_niwxdk.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776807/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_tsmihp.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776810/sports_plus_seat_primary_color_chancellor_red_secondary_color_havana_frontview_ufgbsx.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_frontview_rcs244.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_sideview_zquzja.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringview_jte5or.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797536/performance_seat_primary_color_chancellor_red_secondary_color_havana_steeringleftbackview_z3buqc.jpg";
    }




    //------------------------------ x- x-x -x 
    document.querySelector("#secondarycolorimageplate img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807536/havana_primary_color_plate_of3kit.jpg";
    document.querySelector("#secondarycolortype").innerHTML = "Colour Palette";
    document.querySelector("#secondarycolorname").innerHTML = "Havana";

    // for border bottoms
    document.querySelector("#secondaryplateone").style.borderBottom = "none";
    document.querySelector("#secondaryplatetwo").style.borderBottom = "none";
    document.querySelector("#secondaryplatethree").style.borderBottom = "none";
    document.querySelector("#secondaryplatefour").style.borderBottom = "none";
    document.querySelector("#secondaryplatefive").style.borderBottom = "none";
    document.querySelector("#secondaryplatesix").style.borderBottom = " 1px solid white";
    document.querySelector("#secondaryplateseven").style.borderBottom = "none"

  }

  const OxfordTanSecondary = () => {
    setselectedsecondarycolor('oxfordtan');


    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776702/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_ckl181.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776703/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_jesoyi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776698/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_hlwm5h.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776700/sports_plus_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_kqwvs9.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'metallicblack') {
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_sideview_izwhh3.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797481/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_frontview_vtc2ha.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797480/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringview_ntkbde.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797484/performance_seat_primary_color_metallic_black_secondary_color_oxford_tan_steeringleftbackview_zdavj8.jpg";

    }

    //onyx black
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'onyxblack') {
      {
        document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776654/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_vfzqdj.jpg";
        document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776653/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_zunzdg.jpg";
        document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776650/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_lgikhk.jpg";
        document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776651/sports_plus_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_jfvzko.jpg";

      }
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'onyxblack') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797472/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_frontview_xhk58y.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797134/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_sideview_f40ipa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797471/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringview_eqf3no.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797091/performance_seat_primary_color_onyx_black_secondary_color_oxford_tan_steeringleftbackview_cssrgc.jpg";
    }
    //arden green metallic
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'ardengreenmetallic') {

      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776889/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview_hxivgr.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776885/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_qhg70y.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776887/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview_e5uyqo.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776890/sports_plus_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_z6dbmc.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'ardengreenmetallic') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_frontview_pgcqed.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797552/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_sideview_j5cxkd.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringview_n6hmv5.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797551/performance_seat_primary_color_arden_green_metallic_secondary_color_oxford_tan_steeringleftbackview_bhpphj.jpg";
    }

    //bison brown

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'bisonbrown') {

      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776844/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview_pa1nys.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776841/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_gibtcs.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776843/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_pqid6o.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776846/sports_plus_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_xqq0ny.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'bisonbrown') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_frontview_fk0epl.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797544/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_sideview_bkyu96.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringview_prdzle.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797543/performance_seat_primary_color_bison_brown_secondary_color_oxford_tan_steeringleftbackview_gftzvv.jpg";
    }

    //chancellor red
    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'chancellorred') {

      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776788/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_jliads.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776785/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_zmwlfv.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776786/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_udsbqx.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776790/sports_plus_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_lkvbld.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'chancellorred') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_frontview_bozwci.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_sideview_ynlk3z.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797533/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringview_gxrhtn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797534/performance_seat_primary_color_chancellor_red_secondary_color_oxford_tan_steeringleftbackview_q3rr29.jpg";
    }

    if (selectedSeat === 'sportsplus' && selectedprimarycolor === 'havana') {

      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776745/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_sideview_ram90l.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776742/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_odem8x.jpg";

      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776743/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview_slmrb0.jpg";
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720776746/sports_plus_seat_primary_color_havana_secondary_color_oxford_tan_frontview_i4dqmp.jpg";
    }

    if (selectedSeat === 'performance' && selectedprimarycolor === 'havana') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797494/performance_seat_primary_color_havana_secondary_color_oxford_tan_frontview_k9efat.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_sideview_pkmtbq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringview_vi7kzi.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720797493/performance_seat_primary_color_havana_secondary_color_oxford_tan_steeringleftbackview_ogqfk1.jpg";
    }




    //------------------------------ x- x-x -x 
    document.querySelector("#secondarycolorimageplate img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807845/oxford_tan_secondary_color_plate_v88svi.jpg";
    document.querySelector("#secondarycolortype").innerHTML = "";
    document.querySelector("#secondarycolorname").innerHTML = "Oxford Tan";

    // for border bottoms
    document.querySelector("#secondaryplateone").style.borderBottom = "none";
    document.querySelector("#secondaryplatetwo").style.borderBottom = "none";
    document.querySelector("#secondaryplatethree").style.borderBottom = "none";
    document.querySelector("#secondaryplatefour").style.borderBottom = "none";
    document.querySelector("#secondaryplatefive").style.borderBottom = "none";
    document.querySelector("#secondaryplatesix").style.borderBottom = "none";
    document.querySelector("#secondaryplateseven").style.borderBottom = "1px solid white"

  }

  return (<>
    <div id="secondarycolorwindow">
      <div id="secondarycolorsection">
        <div id="secondarycolorplates">
          <div className="secondaryimagescaler" id="secondaryplateone"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720806374/metallic_black_primary_color_plate_pbb1tq.jpg" alt="" onClick={MetallicBlackSecondary} /></div>
          <div className="secondaryimagescaler" id="secondaryplatetwo"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720806319/onyx_black_primary_color_plate_i26z5i.jpg" alt="" onClick={OnyxBlackSecondary} /></div>
          <div className="secondaryimagescaler" id="secondaryplatethree"><img src="arden_green_metallic_primary_color_plate.jpg" alt="" onClick={ArdenGreenMetallicSecondary} /></div>
          <div className="secondaryimagescaler" id="secondaryplatefour"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807344/bison_brown_primary_color_plate_p08ljj.jpg" alt="" onClick={BisonBrownSecondary} /></div>
          <div className="secondaryimagescaler" id="secondaryplatefive"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807483/chancellor_red_primary_color_plate_givrfr.jpg" alt="" onClick={ChancellorRedSecondary} /></div>
          <div className="secondaryimagescaler" id="secondaryplatesix"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807536/havana_primary_color_plate_of3kit.jpg" onClick={HavanaSecondary} /></div>
          <div className="secondaryimagescaler" id="secondaryplateseven"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720807845/oxford_tan_secondary_color_plate_v88svi.jpg" onClick={OxfordTanSecondary} /></div>

          {/* <div className="secondaryimagescaler" id="secondaryplatesix"><img src="havana_primary_color_plate.jpg" /></div> */}
        </div>
        <div id="secondarycolorinformationsection">
          <div id="secondarycolorimageplate">
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720806374/metallic_black_primary_color_plate_pbb1tq.jpg" alt="" />
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