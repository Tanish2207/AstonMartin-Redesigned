
import { useState } from 'react';
import './lowerbodypackages.css';
import UpperBodyPackage from './upperbodypackages';
import StartConfiguration from '../startconfiguration';

const LowerBodyPackage = ({ showinfofunction, selectedSeat, selectedprimarycolor, selectedsecondarycolor, exteriorcolor, grille, setgrille }) => {


  const [lowerpackage, setlowerpackage] = useState('bodycolor');
  const [upperpackage, setupperpackage] = useState('bodycolor');




  const QBuckinghamshireGreenBodyColor = () => {
    setlowerpackage('bodycolor');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879493/q_buckinghamshire_green_body_color_lower_body_package_bfo2xv.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879489/q_buckinghamshire_green_body_color_lower_body_package_defaultalloy_sh2hrt.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879488/q_buckinghamshire_green_body_color_lower_body_package_leftsidebacklowview_mkekeb.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879488/q_buckinghamshire_green_body_color_lower_body_package_sideview_agwdsm.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Color Lower Package";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_information_uhjgn8.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";
  }

  const QBuckinghamshireGreenGlossBlack = () => {
    setlowerpackage('glossblack');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_gloss_black_lower_body_package_uszi1t.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879475/q_buckinghamshire_green_gloss_black_lower_body_package_defaultalloy_bv3arw.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879476/q_buckinghamshire_green_gloss_black_lower_body_package_leftsidebacklowview_huwxgw.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_sideview_oqlank.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
  }

  const QBuckinghamshireGreenCarbonFibre = () => {
    setlowerpackage('carbonfibre');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_carbon_fibre_lower_body_package_u0dgav.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_defaultalloy_elz66o.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_leftsidebacklowview_e2iy5r.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_sideview_qeu95e.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_iixwwk.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_information_xkjeqz.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";
  }

  const QSatinXenonGreyBodyColor = () => {
document.querySelector("upperbodycolorthree").style.borderBottom="";
    setlowerpackage('bodycolor');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/q_auto/v1720698753/q_satin_xenon_grey_body_color_lower_body_package_adqyoe.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698677/q_satin_xenon_grey_body_color_lower_body_package_defaultalloy_ttraa3.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698628/q_satin_xenon_grey_body_color_lower_body_package_leftsidebacklowview_ci8onl.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698356/q_satin_xenon_grey_body_color_lower_body_package_sideview_kkku5i.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698635/q_satin_xenon_grey_body_color_lower_body_package_plate_jlxpvd.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698616/q_satin_xenon_grey_body_color_lower_body_package_plate_information_pgmwti.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";
    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698823/q_satin_xenon_grey_bclbp_bcubp_bright_h4kyrq.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698802/q_satin_xenon_grey_bclbp_bcubp_dark_kchz3k.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698781/q_satin_xenon_grey_bclbp_gbubp_bright_skwylg.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698767/q_satin_xenon_grey_bclbp_gbubp_dark_x02f7p.jpg";

    }


  }

  const QSatinXenonGreyGlossBlack = () => {

document.querySelector("upperbodycolorthree").style.borderBottom="";

    setlowerpackage('glossblack');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697855/q_satin_xenon_grey_gloss_black_lower_body_package_ficrim.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697794/q_satin_xenon_grey_gloss_black_lower_body_package_defaultalloy_bkizxy.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697753/q_satin_xenon_grey_gloss_black_lower_body_package_leftsidebacklowview_zjcndv.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697732/q_satin_xenon_grey_gloss_black_lower_body_package_sideview_wicrho.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697746/q_satin_xenon_grey_gloss_black_lower_body_package_plate_iym4uy.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697739/q_satin_xenon_grey_gloss_black_lower_body_package_plate_information_sereo3.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697945/q_satin_xenon_grey_gblbp_bcubp_bright_x6nwdy.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697924/q_satin_xenon_grey_gblbp_bcubp_dark_haiz5a.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697897/q_satin_xenon_grey_gblbp_gbubp_bright_ngblpv.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697876/q_satin_xenon_grey_gblbp_gbubp_dark_b0rcsi.jpg";

    }

  }

  const QSatinXenonGreyCarbonFibre = () => {

    setlowerpackage('carbonfibre');
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698346/q_satin_xenon_grey_carbon_fibre_lower_body_package_tryb7z.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698256/q_satin_xenon_grey_carbon_fibre_lower_body_package_defaultalloy_nmwa5d.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698215/q_satin_xenon_grey_carbon_fibre_lower_body_package_leftsidebacklowview_ablo8b.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698194/q_satin_xenon_grey_carbon_fibre_lower_body_package_sideview_nzczco.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698208/q_satin_xenon_grey_carbon_fibre_lower_body_package_plate_upgr5b.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698201/q_satin_xenon_grey_carbon_fibre_lower_body_package_plate_information_axjqqn.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698187/q_satin_xenon_grey_cflbp_bcubp_bright_fcylpc.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698166/q_satin_xenon_grey_cflbp_bcubp_dark_giepr0.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697980/q_satin_xenon_grey_cflbp_gbubp_bright_s2l71u.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697966/q_satin_xenon_grey_cflbp_gbubp_dark_gkrbpl.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698145/q_satin_xenon_grey_cflbp_cfubp_bright_jrgbno.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698124/q_satin_xenon_grey_cflbp_cfubp_dark_bw8znm.jpg";
    }
  }



  const QQuantumSilverBodyColor = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";


    setlowerpackage('bodycolor');


    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_body_color_lower_body_package_zlmmii.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677472/q_quantum_silver_body_color_lower_body_package_defaultalloy_x9m1or.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677470/q_quantum_silver_body_color_lower_body_package_leftsidebacklowview_vspnip.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677469/q_quantum_silver_body_color_lower_body_package_sideview_v7maea.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677470/q_quantum_silver_body_color_lower_body_package_plate_hqtxxm.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677470/q_quantum_silver_body_color_lower_body_package_plate_information_qwxm20.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";



    document.querySelector("#colorcard").style.width = "87vw";
    document.querySelector("#colorcard").style.height = "72vh";
    document.querySelector("#colorcard").style.transform = "translate(8%,-8%)";


    document.querySelector("#colorimage img").style.width = "49em";
    document.querySelector("#colorimage img").style.height = "34em";

    document.querySelector("#colorinformation").style.width = "29em";
    document.querySelector("#colorinformation").style.left = "50em";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677493/q_quantum_silver_bclbp_bcubp_bright_uzhrv2.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677484/q_quantum_silver_bclbp_bcubp_dark_sg0d62.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677475/q_quantum_silver_bclbp_gbubp_bright_zeeoia.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_bclbp_gbubp_dark_d3jli0.jpg";

    }


  }

  const QQuantumSilverCarbonFibre = () => {
   


    setlowerpackage('carbonfibre');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677470/q_quantum_silver_carbon_fibre_lower_body_package_toecjq.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_defaultalloy_rxy25y.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677463/q_quantum_silver_carbon_fibre_lower_body_package_leftsidebacklowview_uwpifo.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677461/q_quantum_silver_carbon_fibre_lower_body_package_sideview_n2vhk7.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677461/q_quantum_silver_carbon_fibre_lower_body_package_plate_tghmo6.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677460/q_quantum_silver_carbon_fibre_lower_body_package_plate_information_cjdhix.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677463/q_quantum_silver_cflbp_bcubp_bright_mc498c.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677457/q_quantum_silver_cflbp_bcubp_dark_pru64k.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677452/q_quantum_silver_cflbp_gbubp_bright_ofvvng.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_cflbp_gbubp_dark_aid796.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_bright_hxen2c.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677456/q_quantum_silver_cflbp_cfubp_dark_zdpcxe.jpg";
    }
  }

  const QQuantumSilverGlossBlack = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gloss_black_lower_body_package_bpgkzh.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677447/q_quantum_silver_gloss_black_lower_body_package_defaultalloy_pfm8rh.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677447/q_quantum_silver_gloss_black_lower_body_package_leftsidebacklowview_lifxkw.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677445/q_quantum_silver_gloss_black_lower_body_package_sideview_d4h03z.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677445/q_quantum_silver_gloss_black_lower_body_package_plate_k753rt.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677445/q_quantum_silver_gloss_black_lower_body_package_plate_information_itbxax.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677451/q_quantum_silver_gblbp_bcubp_bright_t1anvf.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_bcubp_dark_owbgga.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677450/q_quantum_silver_gblbp_gbubp_bright_ejxwwf.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677449/q_quantum_silver_gblbp_gbubp_dark_vulms4.jpg";

    }
  }


  const QCasinoRoyaleBodyColor = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('bodycolor');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681547/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_sxndmt.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681549/q_casino_royale_body_color_lower_body_package_defaultalloy_aj8sdf.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681540/q_casino_royale_body_color_lower_body_package_leftsidebacklowview_d5zzmq.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681536/q_casino_royale_body_color_lower_body_package_sideview_etsaes.jpg";
    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681539/q_casino_royale_body_color_lower_body_package_plate_zmjlgp.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681537/q_casino_royale_body_color_lower_body_package_plate_information_ro3ity.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681586/q_casino_royale_bclbp_bcubp_bright_vds0gp.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681580/q_casino_royale_bclbp_bcubp_dark_k8msm0.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681577/q_casino_royale_bclbp_gbubp_bright_hakozt.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681572/q_casino_royale_bclbp_gbubp_dark_fmlrji.jpg";

    }


  }

  const QCasinoRoyaleGlossBlack = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');


    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681464/q_casino_royale_gloss_black_lower_body_package_mqmabs.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681454/q_casino_royale_gloss_black_lower_body_package_defaultalloy_zpa1h9.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681444/q_casino_royale_gloss_black_lower_body_package_leftsidebacklowview_ecbl2a.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681441/q_casino_royale_gloss_black_lower_body_package_sideview_znkqgy.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681445/q_casino_royale_gloss_black_lower_body_package_plate_tcxs66.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681441/q_casino_royale_gloss_black_lower_body_package_plate_information_ww218f.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681478/q_casino_royale_gblbp_bcubp_bright_ckux94.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681475/q_casino_royale_gblbp_bcubp_dark_fsbiw2.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681472/q_casino_royale_gblbp_gbubp_bright_nc41yw.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681467/q_casino_royale_gblbp_gbubp_dark_dbedsp.jpg";

    }

  }


  const QCasinoRoyaleCarbonFibre = () => {

    setlowerpackage('carbonfibre');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681467/q_casino_royale_gblbp_gbubp_dark_dbedsp.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681517/q_casino_royale_carbon_fibre_lower_body_package_defaultalloy_gr4cm2.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681509/q_casino_royale_carbon_fibre_lower_body_package_leftsidebacklowview_fs8dgh.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681505/q_casino_royale_carbon_fibre_lower_body_package_sideview_mygswl.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681507/q_casino_royale_carbon_fibre_lower_body_package_plate_yyw1mt.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681505/q_casino_royale_carbon_fibre_lower_body_package_plate_information_slne3l.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681503/q_casino_royale_cflbp_bcubp_bright_qytvc8.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681499/q_casino_royale_cflbp_bcubp_dark_oosnzv.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681487/q_casino_royale_cflbp_gbubp_bright_hg4hxg.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681484/q_casino_royale_cflbp_gbubp_dark_gvjdub.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681495/q_casino_royale_cflbp_cfubp_bright_qxfmiv.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681491/q_casino_royale_cflbp_cfubp_dark_ghl1ib.jpg";
    }
  }

  const QSatinTitaniumGreyBodyColor = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('bodycolor');


    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685957/q_satin_titanium_grey_body_color_lower_body_package_mjfwes.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685944/q_satin_titanium_grey_body_color_lower_body_package_defaultalloy_t1ad9g.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685931/q_satin_titanium_grey_body_color_lower_body_package_leftsidebacklowview_t1rc5g.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685927/q_satin_titanium_grey_body_color_lower_body_package_sideview_vlouoh.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685932/q_satin_titanium_grey_body_color_lower_body_package_plate_r5j39t.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685928/q_satin_titanium_grey_body_color_lower_body_package_plate_information_ixfpp8.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685981/q_satin_titanium_grey_bclbp_bcubp_bright_nehimf.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685973/q_satin_titanium_grey_bclbp_bcubp_dark_ccqkh4.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685969/q_satin_titanium_grey_bclbp_gbubp_bright_rd3aku.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685961/q_satin_titanium_grey_bclbp_gbubp_dark_i9z9ei.jpg";

    }

  }

  const QSatinTitaniumGreyGlossBlack = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685831/q_satin_titanium_grey_gloss_black_lower_body_package_mkbjos.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685821/q_satin_titanium_grey_gloss_black_lower_body_package_defaultalloy_jrznsm.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685813/q_satin_titanium_grey_gloss_black_lower_body_package_leftsidebacklowview_ylbbsl.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685809/q_satin_titanium_grey_gloss_black_lower_body_package_sideview_yszdn3.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685811/q_satin_titanium_grey_gloss_black_lower_body_package_plate_c92zu8.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685810/q_satin_titanium_grey_gloss_black_lower_body_package_plate_information_mbqctm.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685848/q_satin_titanium_grey_gblbp_bcubp_bright_olljpm.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685842/q_satin_titanium_grey_gblbp_bcubp_dark_uhqaiy.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685839/q_satin_titanium_grey_gblbp_gbubp_bright_kgvngk.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685835/q_satin_titanium_grey_gblbp_gbubp_dark_vctjwu.jpg";

    }


  }

  const QSatinTitaniumGreyCarbonFibre = () => {

    setlowerpackage('carbonfibre');

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685925/q_satin_titanium_grey_carbon_fibre_lower_body_package_ows1hv.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685900/q_satin_titanium_grey_carbon_fibre_lower_body_package_defaultalloy_qxl6fb.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685890/q_satin_titanium_grey_carbon_fibre_lower_body_package_leftsidebacklowview_sr8dp5.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685884/q_satin_titanium_grey_carbon_fibre_lower_body_package_sideview_r5rkxr.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685887/q_satin_titanium_grey_carbon_fibre_lower_body_package_plate_dvw3yb.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685885/q_satin_titanium_grey_carbon_fibre_lower_body_package_plate_information_hwz1gv.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685879/q_satin_titanium_grey_cflbp_bcubp_bright_vqzfcx.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685876/q_satin_titanium_grey_cflbp_bcubp_dark_alwnfb.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685859/q_satin_titanium_grey_cflbp_gbubp_bright_bayv1x.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685854/q_satin_titanium_grey_cflbp_gbubp_dark_vhycux.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685870/q_satin_titanium_grey_cflbp_cfubp_bright_f9bc61.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685865/q_satin_titanium_grey_cflbp_cfubp_dark_ezvlnf.jpg";
    }
  }

  //  -  - - - - blue and purples 
  const QSeychellesBlueBodyColor = () => {
    setlowerpackage('bodycolor');
    console.log("q seychelles body function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721077/q_seychelles_blue_body_color_lower_body_package_rd24bu.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721060/q_seychelles_blue_body_color_lower_body_package_defaultalloy_betuy8.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721046/q_seychelles_blue_body_color_lower_body_package_leftsidebacklowview_alvrvx.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721039/q_seychelles_blue_body_color_lower_body_package_sideview_jmmtst.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721043/q_seychelles_blue_body_color_lower_body_package_plate_gw22je.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721041/q_seychelles_blue_body_color_lower_body_package_plate_information_phocw9.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721104/q_seychelles_blue_bclbp_bcubp_bright_sb5znf.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721098/q_seychelles_blue_bclbp_bcubp_dark_qlbx2d.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721089/q_seychelles_blue_bclbp_gbubp_bright_lwcsss.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721084/q_seychelles_blue_bclbp_gbubp_dark_rjdxxi.jpg";

    }

  }

  const QSeychellesBlueGlossBlack = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720601/q_seychelles_blue_gloss_black_lower_body_package_atszdk.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720505/q_seychelles_blue_gloss_black_lower_body_package_defaultalloy_reet6n.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720719641/q_seychelles_blue_gloss_black_lower_body_package_leftsidebacklowview_hse5ky.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720719464/q_seychelles_blue_gloss_black_lower_body_package_sideview_hlblsn.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720719468/q_seychelles_blue_gloss_black_lower_body_package_plate_m1kge1.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720719466/q_seychelles_blue_gloss_black_lower_body_package_plate_information_gbuek1.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720808/q_seychelles_blue_gblbp_bcubp_bright_yxb3w2.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720651/q_seychelles_blue_gblbp_bcubp_dark_cgwoxg.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720614/q_seychelles_blue_gblbp_gbubp_bright_phkxe9.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720605/q_seychelles_blue_gblbp_gbubp_dark_uonao9.jpg";

    }

  }

  const QSeychellesBlueCarbonFibre = () => {
    
    setlowerpackage('carbonfibre');

    
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720721037/q_seychelles_blue_carbon_fibre_lower_body_package_bgtl2v.jpg";
    document.querySelector("#img2").src = "q_seychelles_blue_carbon_fibre_lower_body_package_dehttps://res.cloudinary.com/dsctxyrvw/image/upload/v1720721006/q_seychelles_blue_carbon_fibre_lower_body_package_defaultalloy_udsojv.jpgfaultalloy.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720992/q_seychelles_blue_carbon_fibre_lower_body_package_leftsidebacklowview_goraut.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720985/q_seychelles_blue_carbon_fibre_lower_body_package_sideview_gmnzmg.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720989/q_seychelles_blue_carbon_fibre_lower_body_package_plate_ugbjqo.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720987/q_seychelles_blue_carbon_fibre_lower_body_package_plate_information_l8obju.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720980/q_seychelles_blue_cflbp_bcubp_bright_dy6asl.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720975/q_seychelles_blue_cflbp_bcubp_dark_pykeuw.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720953/q_seychelles_blue_cflbp_gbubp_bright_r1vqvs.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720813/q_seychelles_blue_cflbp_gbubp_dark_ikxmdn.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720969/q_seychelles_blue_cflbp_cfubp_bright_p5h2k8.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720720961/q_seychelles_blue_cflbp_cfubp_dark_swhjn4.jpg";
    }
  }


  const QIonBlueBodyColor = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('bodycolor');
  

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753646/q_ion_blue_body_color_lower_body_package_hakqo4.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753635/q_ion_blue_body_color_lower_body_package_defaultalloy_dgamkl.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753626/q_ion_blue_body_color_lower_body_package_leftsidebacklowview_qhagbc.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753621/q_ion_blue_body_color_lower_body_package_sideview_jeq4gf.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753624/q_ion_blue_body_color_lower_body_package_plate_h1ekzp.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753623/q_ion_blue_body_color_lower_body_package_plate_information_hakclp.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753664/q_ion_blue_bclbp_bcubp_bright_aflaq5.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753660/q_ion_blue_bclbp_bcubp_dark_ptnmju.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753655/q_ion_blue_bclbp_gbubp_bright_oh0cql.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753651/q_ion_blue_bclbp_gbubp_dark_jdfruj.jpg";

    }
  }

  const QIonBlueGlossBlack = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753538/q_ion_blue_gloss_black_lower_body_package_sleyvi.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753527/q_ion_blue_gloss_black_lower_body_package_defaultalloy_a7zz4c.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753518/q_ion_blue_gloss_black_lower_body_package_leftsidebacklowview_k408bw.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753513/q_ion_blue_gloss_black_lower_body_package_sideview_ppjzva.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753516/q_ion_blue_gloss_black_lower_body_package_plate_jiqvpe.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753515/q_ion_blue_gloss_black_lower_body_package_plate_information_k4aype.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753556/q_ion_blue_gblbp_bcubp_bright_guqgdw.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753552/q_ion_blue_gblbp_bcubp_dark_wak1em.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753547/q_ion_blue_gblbp_gbubp_bright_glcwvl.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753543/q_ion_blue_gblbp_gbubp_dark_bhr87g.jpg";

    }

  }

  const QIonBlueCarbonFibre = () => {
    setlowerpackage('carbonfibre');

    
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753620/q_ion_blue_carbon_fibre_lower_body_package_uhkkcq.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753599/q_ion_blue_carbon_fibre_lower_body_package_defaultalloy_aofvf0.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753590/q_ion_blue_carbon_fibre_lower_body_package_leftsidebacklowview_mfk3gq.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753586/q_ion_blue_carbon_fibre_lower_body_package_sideview_qczgsn.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753588/q_ion_blue_carbon_fibre_lower_body_package_plate_znvqlo.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753587/q_ion_blue_carbon_fibre_lower_body_package_plate_information_ct7lz4.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753584/q_ion_blue_cflbp_bcubp_bright_falje2.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753579/q_ion_blue_cflbp_bcubp_dark_zfy5sl.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753566/q_ion_blue_cflbp_gbubp_bright_lw7zps.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753561/q_ion_blue_cflbp_gbubp_dark_akzipk.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753575/q_ion_blue_cflbp_cfubp_bright_tnka6a.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720753570/q_ion_blue_cflbp_cfubp_dark_u45ok4.jpg";
    }
  }


  const PlasmaBlueBodyColor = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('bodycolor');
    // console.log("q seychelles body function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760933/plasma_blue_body_color_lower_body_package_f9z0ry.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760893/plasma_blue_body_color_lower_body_package_defaultalloy_h5tjil.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760860/plasma_blue_body_color_lower_body_package_leftsidebacklowview_mwpkcm.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760843/plasma_blue_body_color_lower_body_package_sideview_s4kpxq.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760854/plasma_blue_body_color_lower_body_package_plate_ukrnsx.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760848/plasma_blue_body_color_lower_body_package_plate_information_cxpo7b.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720761089/plasma_blue_bclbp_bcubp_bright_wpafaf.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "plasma_blue_bclbp_bcubp_dark.jpghttps://res.cloudinary.com/dsctxyrvw/image/upload/v1720761072/plasma_blue_bclbp_bcubp_dark_airer9.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760967/plasma_blue_bclbp_gbubp_bright_ix5nfc.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760944/plasma_blue_bclbp_gbubp_dark_qpuz1f.jpg";

    }
  }

  const PlasmaBlueGlossBlack = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760307/plasma_blue_gloss_black_lower_body_package_dav0ap.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760270/plasma_blue_gloss_black_lower_body_package_defaultalloy_thacay.jpg";
    document.querySelector("#img3").src = "plasma_blue_gloss_black_lower_body_package_leftsidebacklowview.jpgplasma_blue_gloss_black_lower_body_package_leftsidebacklowview.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760124/plasma_blue_gloss_black_lower_body_package_sideview_bxoq5g.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760139/plasma_blue_gloss_black_lower_body_package_plate_ob0mq9.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760129/plasma_blue_gloss_black_lower_body_package_plate_information_vrwzkr.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760372/plasma_blue_gblbp_bcubp_bright_xtm4h4.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760356/plasma_blue_gblbp_bcubp_dark_zejkhc.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760339/plasma_blue_gblbp_gbubp_bright_odnisi.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760323/plasma_blue_gblbp_gbubp_dark_iihz21.jpg";

    }
  }

  const PlasmaBlueCarbonFibre = () => {

    setlowerpackage('carbonfibre');

    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760837/plasma_blue_carbon_fibre_lower_body_package_tbokz0.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760531/plasma_blue_carbon_fibre_lower_body_package_defaultalloy_pdqbdu.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760498/plasma_blue_carbon_fibre_lower_body_package_leftsidebacklowview_xrl4us.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760480/plasma_blue_carbon_fibre_lower_body_package_sideview_ikudnr.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760491/plasma_blue_carbon_fibre_lower_body_package_plate_lxb55i.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760485/plasma_blue_carbon_fibre_lower_body_package_plate_information_vysamq.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760474/plasma_blue_cflbp_bcubp_bright_wdb7lb.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760457/plasma_blue_cflbp_bcubp_dark_v6iwdb.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760406/plasma_blue_cflbp_gbubp_bright_d1ltmu.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760388/plasma_blue_cflbp_gbubp_dark_mrfgxa.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760440/plasma_blue_cflbp_cfubp_bright_cklnqt.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720760423/plasma_blue_cflbp_cfubp_dark_ad8qcx.jpg";
    }
  }


  const ElwoodBlueBodyColor = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('bodycolor');
    // console.log("q seychelles body function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765318/elwood_blue_body_color_lower_body_package_rfmmzt.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765252/elwood_blue_body_color_lower_body_package_defaultalloy_cn4hwk.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765196/elwood_blue_body_color_lower_body_package_leftsidebacklowview_paekng.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765168/elwood_blue_body_color_lower_body_package_sideview_erlkvp.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765187/elwood_blue_body_color_lower_body_package_plate_bzxjfi.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765177/elwood_blue_body_color_lower_body_package_plate_information_nzegiw.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764225/elwood_blue_gblbp_bcubp_bright_px9nvp.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764197/elwood_blue_gblbp_bcubp_dark_kvkjxi.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764168/elwood_blue_gblbp_gbubp_bright_arnekm.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764130/elwood_blue_gblbp_gbubp_dark_hmnttc.jpg";

    }

  }

  const ElwoodBlueGlossBlack = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720763902/elwood_blue_gloss_black_lower_body_package_u8vxgs.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720763834/elwood_blue_gloss_black_lower_body_package_defaultalloy_zxh7un.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720763778/elwood_blue_gloss_black_lower_body_package_leftsidebacklowview_clglgf.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720763749/elwood_blue_gloss_black_lower_body_package_sideview_ndewgt.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720763768/elwood_blue_gloss_black_lower_body_package_plate_ne6gv2.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720763758/elwood_blue_gloss_black_lower_body_package_plate_information_jrvvwq.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764225/elwood_blue_gblbp_bcubp_bright_px9nvp.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764197/elwood_blue_gblbp_bcubp_dark_kvkjxi.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764168/elwood_blue_gblbp_gbubp_bright_arnekm.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764130/elwood_blue_gblbp_gbubp_dark_hmnttc.jpg";

    }

  }

  const ElwoodBlueCarbonFibre = () => {
    
    setlowerpackage('carbonfibre');

   
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765159/elwood_blue_carbon_fibre_lower_body_package_wypf9z.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720765037/elwood_blue_carbon_fibre_lower_body_package_defaultalloy_ymp2t9.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764959/elwood_blue_carbon_fibre_lower_body_package_leftsidebacklowview_yr2fvj.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764959/elwood_blue_carbon_fibre_lower_body_package_leftsidebacklowview_yr2fvj.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764948/elwood_blue_carbon_fibre_lower_body_package_plate_el75uo.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764939/elwood_blue_carbon_fibre_lower_body_package_plate_information_romsig.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764920/elwood_blue_cflbp_bcubp_bright_viuhmm.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764891/elwood_blue_cflbp_bcubp_dark_vttnsl.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764283/elwood_blue_cflbp_gbubp_bright_t5clqf.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764254/elwood_blue_cflbp_gbubp_dark_sgwknr.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764862/elwood_blue_cflbp_cfubp_bright_tjc3ea.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720764836/elwood_blue_cflbp_cfubp_dark_d9iosu.jpg";
    }
  }

  const QDigitalVioletBodyColor = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('bodycolor');


    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769526/q_digital_violet_body_color_lower_body_package_xnkg2e.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769513/q_digital_violet_body_color_lower_body_package_defaultalloy_zi5wqa.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769501/q_digital_violet_body_color_lower_body_package_leftsidebacklowview_nl3vy6.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769495/q_digital_violet_body_color_lower_body_package_sideview_vgr3qd.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769499/q_digital_violet_body_color_lower_body_package_plate_b8gbuy.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769497/q_digital_violet_body_color_lower_body_package_plate_information_n6i5wx.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769550/q_digital_violet_bclbp_bcubp_bright_stzic4.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769407/q_digital_violet_gblbp_bcubp_dark_q1diik.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769401/q_digital_violet_gblbp_gbubp_bright_q33dz0.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769395/q_digital_violet_gblbp_gbubp_dark_ovuclh.jpg";

    }
  }

  const QDigitalVioletGlossBlack = () => {

    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');
  

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769389/q_digital_violet_gloss_black_lower_body_package_mdfcib.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769376/q_digital_violet_gloss_black_lower_body_package_defaultalloy_oivzjx.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769365/q_digital_violet_gloss_black_lower_body_package_leftsideview_viogcf.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769359/q_digital_violet_gloss_black_lower_body_package_sideview_tehcpo.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769362/q_digital_violet_gloss_black_lower_body_package_plate_yzi9m4.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769361/q_digital_violet_gloss_black_lower_body_package_plate_information_honwjl.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769411/q_digital_violet_gblbp_bcubp_bright_xobauh.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769407/q_digital_violet_gblbp_bcubp_dark_q1diik.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769401/q_digital_violet_gblbp_gbubp_bright_q33dz0.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769395/q_digital_violet_gblbp_gbubp_dark_ovuclh.jpg";

    }
  }

  const QDigitalVioletCarbonFibre = () => {
    setlowerpackage('carbonfibre');

    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769493/q_digital_violet_carbon_fibre_lower_body_package_ydpopl.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769468/q_digital_violet_carbon_fibre_lower_body_package_defaultalloy_sdbrln.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769456/q_digital_violet_carbon_fibre_lower_body_package_leftsidebacklowview_ru2uo0.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769450/q_digital_violet_carbon_fibre_lower_body_package_sideview_b8icst.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769454/q_digital_violet_carbon_fibre_lower_body_package_plate_jtdsn3.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769452/q_digital_violet_carbon_fibre_lower_body_package_plate_information_pbzdyi.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769448/q_digital_violet_cflbp_bcubp_bright_zrdl3y.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "q_digital_viohttps://res.cloudinary.com/dsctxyrvw/image/upload/v1720769442/q_digital_violet_cflbp_bcubp_dark_fuku5h.jpglet_cflbp_bcubp_dark.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769425/q_digital_violet_cflbp_gbubp_bright_d1ikk1.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769419/q_digital_violet_cflbp_gbubp_dark_rv7yza.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769436/q_digital_violet_cflbp_cfubp_bright_ei2sjk.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720769431/q_digital_violet_cflbp_cfubp_dark_gkkpyt.jpg";
    }
  }


  const StormPurpleBodyColor = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('bodycolor');


    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771368/storm_purple_body_color_lower_body_package_v3yfpx.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771332/storm_purple_body_color_lower_body_package_defaultalloy_b0qrvg.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771295/storm_purple_body_color_lower_body_package_leftsidebacklowview_lwy4re.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771285/storm_purple_body_color_lower_body_package_sideview_ftylhv.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771300/storm_purple_body_color_lower_body_package_plate_ew4mef.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Body Colour Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771290/storm_purple_body_color_lower_body_package_plate_information_zruvww.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";

    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771432/storm_purple_bclbp_bcubp_bright_bofwu0.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771411/storm_purple_bclbp_bcubp_dark_ektzrp.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "storm_phttps://res.cloudinary.com/dsctxyrvw/image/upload/v1720771400/storm_purple_bclbp_gbubp_bright_fdftvs.jpgurple_bclbp_gbubp_bright.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771384/storm_purple_bclbp_gbubp_dark_mzjczp.jpg";

    }
  }

  const StormPurpleGlossBlack = () => {
    document.querySelector("#uppercolorborderthree").style.borderBottom="";

    setlowerpackage('glossblack');
    console.log("q seychelles gloss black function called");

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770928/storm_purple_gloss_black_lower_body_package_ashmsx.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770892/storm_purple_gloss_black_lower_body_package_defaultalloy_ea4pfj.jpgy.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770862/storm_purple_gloss_black_lower_body_package_leftsidebacklowview_w4kiuk.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770846/storm_purple_gloss_black_lower_body_package_sideview_b5dgya.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770856/storm_purple_gloss_black_lower_body_package_plate_rsc0g9.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";

    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770851/storm_purple_gloss_black_lower_body_package_plate_information_xtmmul.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770991/storm_purple_gblbp_bcubp_bright_zxzihz.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770975/storm_purple_gblbp_bcubp_dark_zhmpd7.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770959/storm_purple_gblbp_gbubp_bright_xuqy0o.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720770944/storm_purple_gblbp_gbubp_dark_fzhze2.jpg";

    }
  }

  const StormPurpleCarbonFibre = () => {
    setlowerpackage('carbonfibre');

    console.log("q seychelles blue carbon fibre function called");
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771207/storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_oguvk8.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771212/storm_purple_carbon_fibre_lower_body_package_defaultalloy_prfewl.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771106/storm_purple_carbon_fibre_lower_body_package_leftsidebacklowview_rn46um.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771090/storm_purple_carbon_fibre_lower_body_package_sideview_fg4bsk.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771100/storm_purple_carbon_fibre_lower_body_package_plate_gjus09.jpg";
    document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";


    //color information window stuff.
    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771095/storm_purple_carbon_fibre_lower_body_package_plate_information_m0gf24.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";


    if (upperpackage === 'bodycolor' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771085/storm_purple_cflbp_bcubp_bright_bjhscd.jpg";
    }

    if (upperpackage === 'bodycolor' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771064/storm_purple_cflbp_bcubp_dark_bc6v8o.jpg";

    }
    if (upperpackage === 'glossblack' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771022/storm_purple_cflbp_gbubp_bright_dzwinu.jpg";

    }

    if (upperpackage === 'glossblack' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771006/storm_purple_cflbp_gbubp_dark_ahcdo4.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771053/storm_purple_cflbp_cfubp_bright_lgilzd.jpg";

    }

    if (upperpackage === 'carbonfibre' && grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720771037/storm_purple_cflbp_cfubp_dark_foompj.jpg";
    }
  }

  // ------------------------------ changing lower body plates
  // if(props.exteriorcolor==='qbuckinghamshiregreen')
  //   {QBuckinghamshireGreenBodyColor()}

  if (exteriorcolor === 'qbuckingshiregreen') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_iixwwk.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg";
  }

  if (exteriorcolor === 'qquantumsilver') {



    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677470/q_quantum_silver_body_color_lower_body_package_plate_hqtxxm.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677461/q_quantum_silver_carbon_fibre_lower_body_package_plate_tghmo6.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677445/q_quantum_silver_gloss_black_lower_body_package_plate_k753rt.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677470/q_quantum_silver_body_color_lower_body_package_plate_hqtxxm.jpg";

  }

  if (exteriorcolor === 'qsatinxenongrey') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698635/q_satin_xenon_grey_body_color_lower_body_package_plate_jlxpvd.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697746/q_satin_xenon_grey_gloss_black_lower_body_package_plate_iym4uy.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698208/q_satin_xenon_grey_carbon_fibre_lower_body_package_plate_upgr5b.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698635/q_satin_xenon_grey_body_color_lower_body_package_plate_jlxpvd.jpg";

    // document.querySelQSatinBodyColor}



  }

  if (exteriorcolor === 'qcasinoroyale') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681539/q_casino_royale_body_color_lower_body_package_plate_zmjlgp.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681445/q_casino_royale_gloss_black_lower_body_package_plate_tcxs66.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681507/q_casino_royale_carbon_fibre_lower_body_package_plate_yyw1mt.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681539/q_casino_royale_body_color_lower_body_package_plate_zmjlgp.jpg";

  }

  if (exteriorcolor === 'qsatintitaniumgrey') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685932/q_satin_titanium_grey_body_color_lower_body_package_plate_r5j39t.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685811/q_satin_titanium_grey_gloss_black_lower_body_package_plate_c92zu8.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685887/q_satin_titanium_grey_carbon_fibre_lower_body_package_plate_dvw3yb.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685932/q_satin_titanium_grey_body_color_lower_body_package_plate_r5j39t.jpg";

  }

  // -----------  plates changing fucntion for blue and purple color
  if (exteriorcolor === 'qseychellesblue') {

    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721043/q_seychelles_blue_body_color_lower_body_package_plate_gw22je.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719468/q_seychelles_blue_gloss_black_lower_body_package_plate_m1kge1.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720989/q_seychelles_blue_carbon_fibre_lower_body_package_plate_ugbjqo.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721043/q_seychelles_blue_body_color_lower_body_package_plate_gw22je.jpg";
  }



  if (exteriorcolor === 'qionblue') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753624/q_ion_blue_body_color_lower_body_package_plate_h1ekzp.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753516/q_ion_blue_gloss_black_lower_body_package_plate_jiqvpe.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753588/q_ion_blue_carbon_fibre_lower_body_package_plate_znvqlo.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753624/q_ion_blue_body_color_lower_body_package_plate_h1ekzp.jpg";
  }


  if (exteriorcolor === 'plasmablue') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760854/plasma_blue_body_color_lower_body_package_plate_ukrnsx.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760139/plasma_blue_gloss_black_lower_body_package_plate_ob0mq9.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760491/plasma_blue_carbon_fibre_lower_body_package_plate_lxb55i.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760854/plasma_blue_body_color_lower_body_package_plate_ukrnsx.jpg";
  }


  if (exteriorcolor === 'elwoodblue') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765187/elwood_blue_body_color_lower_body_package_plate_bzxjfi.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763768/elwood_blue_gloss_black_lower_body_package_plate_ne6gv2.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764948/elwood_blue_carbon_fibre_lower_body_package_plate_el75uo.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "elwood_blue_body_color_lower_body_package_plate.jpg";
  }

  if (exteriorcolor == 'qdigitalviolet') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769499/q_digital_violet_body_color_lower_body_package_plate_b8gbuy.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769362/q_digital_violet_gloss_black_lower_body_package_plate_yzi9m4.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769454/q_digital_violet_carbon_fibre_lower_body_package_plate_jtdsn3.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769499/q_digital_violet_body_color_lower_body_package_plate_b8gbuy.jpg";
  }

  if (exteriorcolor === 'stormpurple') {
    document.querySelector("#lowerbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771300/storm_purple_body_color_lower_body_package_plate_ew4mef.jpg";
    document.querySelector("#lowerbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770856/storm_purple_gloss_black_lower_body_package_plate_rsc0g9.jpg";
    document.querySelector("#lowerbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771100/storm_purple_carbon_fibre_lower_body_package_plate_gjus09.jpg";

    document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771300/storm_purple_body_color_lower_body_package_plate_ew4mef.jpg";

  }
  // -------------------------------- calling functions ------------------------------------------




  const BodyColorFunctions = () => {

    document.querySelector("#lowercolorborderone").style.borderBottom = "2px solid white";
    document.querySelector("#lowercolorbordertwo").style.borderBottom = "none";
    document.querySelector("#lowercolorborderthree").style.borderBottom = "none";

    setprevpack("bodycolor")


    if (exteriorcolor === 'qbuckinghamshiregreen') { QBuckinghamshireGreenBodyColor(); }


    if (exteriorcolor === 'qquantumsilver') {
      QQuantumSilverBodyColor();
    }

    if (exteriorcolor === 'qsatinxenongrey') {
      QSatinXenonGreyBodyColor();
    }

    if (exteriorcolor === 'qcasinoroyale') { QCasinoRoyaleBodyColor(); }

    if (exteriorcolor === 'qsatintitaniumgrey') { QSatinTitaniumGreyBodyColor(); }
    // ----------------- blues and purples
    if (exteriorcolor === 'qseychellesblue') {
      QSeychellesBlueBodyColor();

      console.log("qseychelles blue is being called.");
    }

    if (exteriorcolor === 'qionblue') {
      QIonBlueBodyColor();


    }

    if (exteriorcolor === 'plasmablue') {
      PlasmaBlueBodyColor();
    }
    if (exteriorcolor === 'elwoodblue') { ElwoodBlueBodyColor(); }

    if (exteriorcolor === 'qdigitalviolet') { QDigitalVioletBodyColor(); }

    if (exteriorcolor === 'stormpurple') { StormPurpleBodyColor(); }

  }

  const GlossBlackFunctions = () => {
    document.querySelector("#lowercolorborderone").style.borderBottom = "none";
    document.querySelector("#lowercolorbordertwo").style.borderBottom = "2px solid white";
    document.querySelector("#lowercolorborderthree").style.borderBottom = "none";

    setprevpack("glossblack");

    if (exteriorcolor === 'qbuckinghamshiregreen') { QBuckinghamshireGreenGlossBlack(); }

    if (exteriorcolor === 'qquantumsilver') {
      QQuantumSilverGlossBlack();
    }


    if (exteriorcolor === 'qsatinxenongrey') {
      QSatinXenonGreyGlossBlack();
    }
    if (exteriorcolor === 'qcasinoroyale') { QCasinoRoyaleGlossBlack(); }

    if (exteriorcolor === 'qsatintitaniumgrey') { QSatinTitaniumGreyGlossBlack(); }
    // ------------ blue and purples
    if (exteriorcolor === 'qseychellesblue') { QSeychellesBlueGlossBlack(); }

    if (exteriorcolor === 'qionblue') { QIonBlueGlossBlack(); }

    if (exteriorcolor === 'plasmablue') { PlasmaBlueGlossBlack(); }
    if (exteriorcolor === 'elwoodblue') { ElwoodBlueGlossBlack(); }

    if (exteriorcolor === 'qdigitalviolet') {
      QDigitalVioletGlossBlack();
    }

    if (exteriorcolor === 'stormpurple') {
      StormPurpleGlossBlack();
    }
  }


  const CarbonFibreFunctions = () => {
    document.querySelector("#lowercolorborderone").style.borderBottom = "none";
    document.querySelector("#lowercolorbordertwo").style.borderBottom = "none";
    document.querySelector("#lowercolorborderthree").style.borderBottom = "2px solid white";

    setprevpack("carbonfibre");
    if (exteriorcolor === 'qbuckinghamshiregreen') { QBuckinghamshireGreenCarbonFibre(); }

    if (exteriorcolor === 'qquantumsilver') {
      QQuantumSilverCarbonFibre();
    }
    if (exteriorcolor === 'qsatinxenongrey') {
      QSatinXenonGreyCarbonFibre();
    }
    if (exteriorcolor === 'qcasinoroyale') { QCasinoRoyaleCarbonFibre() }
    if (exteriorcolor === 'qsatintitaniumgrey') {
      // console.log(props.exteriorcolor);
      QSatinTitaniumGreyCarbonFibre();
    }
    //-------------------- blue and purples
    if (exteriorcolor === 'qseychellesblue') { QSeychellesBlueCarbonFibre(); }

    if (exteriorcolor === 'qionblue') {
      QIonBlueCarbonFibre();
    }

    if (exteriorcolor === 'plasmablue') { PlasmaBlueCarbonFibre(); }
    if (exteriorcolor === 'elwoodblue') { ElwoodBlueCarbonFibre(); }

    if (exteriorcolor === 'qdigitalviolet') {
      QDigitalVioletCarbonFibre();

    }

    if (exteriorcolor === 'stormpurple') { StormPurpleCarbonFibre(); }

  }


  const[prevpack,setprevpack]=useState("bodycolor")

//   const HoverBodyColor=()=>{

// // document.querySelector("#infobuttonforbodycolor").style.display="block";


// //      if(exteriorcolor==='qbuckinghamshiregreen')
// //      {
// //       document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg";
// //       document.querySelector("#lowerpackagename").innerHTML = "Body Color Lower Package";
  
// //       document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_information_uhjgn8.jpg";
// //       document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
// //       document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";
// //      }
//   }

//   const LeaveBodyColor=()=>{

//     document.querySelector("#infobuttonforbodycolor").style.display="none";


//     if(prevpack==='bodycolor')
//     {
//       if(exteriorcolor==='qbuckinghamshiregreen')
//         {
//          document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg";
//          document.querySelector("#lowerpackagename").innerHTML = "Body Color Lower Package";
     
//          document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_information_uhjgn8.jpg";
//          document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
//          document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";
//         }
//     }

//     if(prevpack==='glossblack')
//     {
//       if(exteriorcolor==='qbuckinghamshiregreen')
//         {
//           document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
//           document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";
      
//           document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
//           document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
//           document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
//         }
//     }

//     if(prevpack==='carbonfibre')
//     {
//       if(exteriorcolor==='qbuckinghamshiregreen')
//         {
//           document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
//           document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";
      
//           document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
//           document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
//           document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
//         }
//     }
//   }

//   const HoverGlossBlack=()=>{

// // document.querySelector("#infobuttonforglossblack").style.display="block";

//     if(exteriorcolor==='qbuckinghamshiregreen')
//     {
//       document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
//       document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";
  
//       document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
//       document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
//       document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
//     }
//   }

//   const LeaveGlossBlack=()=>{
// document.querySelector("#infobuttonforglossblack").style.display="none";

//     if(prevpack==='bodycolor')
//       {
//         if(exteriorcolor==='qbuckinghamshiregreen')
//           {
//            document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg";
//            document.querySelector("#lowerpackagename").innerHTML = "Body Color Lower Package";
       
//            document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_information_uhjgn8.jpg";
//            document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
//            document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";
//           }
//       }
  
//       if(prevpack==='glossblack')
//       {
//         if(exteriorcolor==='qbuckinghamshiregreen')
//           {
//             document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
//             document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";
        
//             document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
//             document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
//             document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
//           }
//       }
  
//       if(prevpack==='carbonfibre')
//       {
//         if(exteriorcolor==='qbuckinghamshiregreen')
//           {
//             document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
//             document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";
        
//             document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
//             document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
//             document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
//           }
//       }
//   }

//   const HoverCarbonFibre=()=>{
//     // document.querySelector("#infobuttonforcarbonfibre").style.display="block";

//     if(exteriorcolor==='qbuckinghamshiregreen')
//     {
//       document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_iixwwk.jpg";
//       document.querySelector("#lowerpackagename").innerHTML = "Carbon Fibre Lower Package";
  
//       //color information window stuff.
//       document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_information_xkjeqz.jpg";
//       document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Lower Body Package";
//       document.querySelector("#colorcardcolorinformation").innerHTML = "Maximising the sporting character, featuring an enhanced splitter and side sills finished in gloss carbon fibre, complimenting the rear diffuser.";
//     }
//   }


//   const LeaveCarbonFibre=()=>{
//     document.querySelector("#infobuttonforcarbonfibre").style.display="none";

//     if(prevpack==='bodycolor')
//       {
//         if(exteriorcolor==='qbuckinghamshiregreen')
//           {
//            document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg";
//            document.querySelector("#lowerpackagename").innerHTML = "Body Color Lower Package";
       
//            document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_information_uhjgn8.jpg";
//            document.querySelector("#colorcardcolorname").innerHTML = "Body Colour Lower Package";
//            document.querySelector("#colorcardcolorinformation").innerHTML = "Body coloured front splitter and side sills deliver a refined and elegant look.";
//           }
//       }
  
//       if(prevpack==='glossblack')
//       {
//         if(exteriorcolor==='qbuckinghamshiregreen')
//           {
//             document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
//             document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";
        
//             document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
//             document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
//             document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
//           }
//       }
  
//       if(prevpack==='carbonfibre')
//       {
//         if(exteriorcolor==='qbuckinghamshiregreen')
//           {
//             document.querySelector("#currentlowerbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg";
//             document.querySelector("#lowerpackagename").innerHTML = "Gloss Black Lower Body Package";
        
//             document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_information_iurgem.jpg";
//             document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Lower Body Package";
//             document.querySelector("#colorcardcolorinformation").innerHTML = "Elevating the sporting character, featuring an enhanced front splitter and side sills, finished in deep gloss black, complimenting the rear diffuser.";
//           }
//       }
//   }


  return (<>
    <div id="lowerpackagediv">
      <div id="lowerpackage">
        <div id="lowerpackageplatesdiv">

          <div id="lowerpackageimagesplate">
            <div className="lowerpackagehoverhider" onClick={BodyColorFunctions} id="lowercolorborderone"
            //  onMouseEnter={HoverBodyColor}
            // onMouseLeave={LeaveBodyColor}
            >
              <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879487/q_buckinghamshire_green_body_color_lower_body_package_plate_zu4uve.jpg" className="lowerbodyscaling" alt="" id="lowerbodycolorone" />
              {/* <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforbodycolor" onClick={showinfofunction} /> */}
              </div>
            <div className="lowerpackagehoverhider" onClick={GlossBlackFunctions} id="lowercolorbordertwo" 
            // onMouseEnter={HoverGlossBlack}
            // onMouseLeave={LeaveGlossBlack}
            >
              <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg" alt="" className="lowerbodyscaling" id="lowerbodycolortwo" />
              {/* <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforglossblack" onClick={showinfofunction} /> */}
              </div>
            <div className="lowerpackagehoverhider" onClick={CarbonFibreFunctions} id="lowercolorborderthree"
            // onMouseEnter={HoverCarbonFibre} onMouseLeave={LeaveCarbonFibre}
            >
              <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_iixwwk.jpg" className="lowerbodyscaling" alt="" id="lowerbodycolorthree" />
              {/* <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforcarbonfibre" onClick={showinfofunction} /> */}
              </div>
          </div>
        </div>
        <div id="lowerpackageimageinformationsection">
          <div id="lowerpackageimagewithinfo">
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677445/q_quantum_silver_gloss_black_lower_body_package_plate_k753rt.jpg" alt="" id="currentlowerbodyinfoimage" />
            {/* <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforlowerbody" onClick={showinfofunction} /> */}
          </div>
          <div id="lowerpackageinformationcontent">
            <div id="lowerpackagename">Body Color Lower Package</div>
          </div>
        </div>
      </div>
    </div>

    <UpperBodyPackage selectedSeat={selectedSeat} selectedprimarycolor={selectedprimarycolor} selectedsecondarycolor={selectedsecondarycolor} lowerpackage={lowerpackage} showinfofunction={showinfofunction} exteriorcolor={exteriorcolor} grille={grille} setgrille={setgrille} upperpackage={upperpackage} setupperpackage={setupperpackage} />
  </>)
}

export default LowerBodyPackage;