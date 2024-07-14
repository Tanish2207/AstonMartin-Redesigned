import { useState } from 'react';
import './upperbodypackages.css';
import GrilleFinish from '../grillefinish/grillefinish';


const UpperBodyPackage = ({ exteriorcolor, selectedSeat, selectedprimarycolor, selectedsecondarycolor, lowerpackage, upperpackage, setupperpackage, showinfofunction, grille, setgrille }) => {

  // const [upperpackage,setupperpackage]=useState('bodycolor');

  if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor') {

    const upperbodycolorone = document.querySelector("#upperbodycolorone");


    const upperbodycolortwo = document.querySelector("#upperbodycolortwo");



    const currentupperbodyinfoimage = document.querySelector("#currentupperbodyinfoimage");

    const colorimage = document.querySelector("#colorimage img");

    //  const currentupperbodyinfoimage =document.querySelector("#currentupperbodyinfoimage");


    if (upperbodycolorone && upperbodycolortwo && currentupperbodyinfoimage && colorimage) {
      upperbodycolorone.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate_j4ypmy.jpg";
      upperbodycolortwo.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879488/q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_plate_lmfjo4.jpg";
      document.querySelector("#upperbodycolorthree").src = " ";
      currentupperbodyinfoimage.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate_j4ypmy.jpg";
      colorimage.src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate_information_rrguav.jpg";

    }
  }


  if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'glossblack') {

    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720879476/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate_g6hu8w.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_c3eb6z.jpg";
    document.querySelector("#upperbodycolorthree").src = "";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_autov/1720879476/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate_g6hu8w.jpg";
  }

  if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879486/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_j1nfkg.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879479/q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_swxfwm.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_bbmyvt.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879486/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_j1nfkg.jpg";
  }

  if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor') {
    // console.log("There is no tommorow.");
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate_cjzvhn.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677471/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_plate_jvjkfb.jpg";
    document.querySelector("#upperbodycolorthree").src = "";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677473/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate_cjzvhn.jpg";
  }

  if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677448/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate_p1zdrf.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677445/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_jiazqo.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677448/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate_p1zdrf.jpg";
  }

  if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_bdhrtj.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677463/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_rwwapc.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_t15hyo.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_bdhrtj.jpg";
  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681554/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_plate_azjbsu.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681544/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_plate_ea0baz.jpg";
    document.querySelector("#upperbodycolorthree").src = "";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681554/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_plate_azjbsu.jpg";
  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681460/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate_cl5w0y.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681451/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_d78bmx.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681460/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate_cl5w0y.jpg";
  }

  if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681529/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_yb3d6c.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681512/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_vqs8kj.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681522/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_bdd9ke.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681530/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_rjqf4r.jpg";
  }


  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor') {

    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685951/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate_bfezt8.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685940/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_plate_uwh04a.jpg";
    document.querySelector("#upperbodycolorthree").src = "";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685951/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate_bfezt8.jpg";
  }

  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685826/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_dtt2fw.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685816/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_k0hsa6.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685826/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_dtt2fw.jpg";
  }
  if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre') {

    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685919/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_i7xsni.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685894/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_ctilyc.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685908/q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_aund6d.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685919/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_i7xsni.jpg";
  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698732/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate_wvkvtl.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698656/q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_plate_dgomjt.jpg";
    document.querySelector("#upperbodycolorthree").src = ""

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698732/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate_wvkvtl.jpg";
  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697833/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_wijmz2.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697774/q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_nd9kxc.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697833/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_wijmz2.jpg";
  }

  if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre') {

    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698325/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_pkgk05.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698235/q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_qvkyji.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698284/q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_k3xy5b.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698325/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_pkgk05.jpg";
  }

  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721069/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate_wwj1rp.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721055/q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_hjbu2i.jpg";
    document.querySelector("#upperbodycolorthree").src = ""

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721069/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate_wwj1rp.jpg";
  }
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720514/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_biqryc.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720500/q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_vky5pk.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720514/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_biqryc.jpg";
  }
  if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721029/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_ixy31t.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720999/q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_osisqe.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721018/q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_bkancy.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721027/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_ztkk2a.jpg";
  }

  if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753643/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate_kcli3o.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753630/q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_vpxxyl.jpg";
    document.querySelector("#upperbodycolorthree").src = ""

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753643/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate_kcli3o.jpg";
  }
  if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753533/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_agza6t.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753522/q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_iyv71g.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753533/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_agza6t.jpg";
  }
  if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753615/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_bgutih.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753596/q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_zsig5r.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753607/q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_fyxgec.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753615/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_bgutih.jpg";
  }

  if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760916/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate_xvzpy5.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760876/plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_f39yrk.jpg";
    document.querySelector("#upperbodycolorthree").src = ""

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760916/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate_xvzpy5.jpg";
  }
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760291/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_irpejd.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760253/plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_agw80o.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760291/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_irpejd.jpg";
  }
  if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760820/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_rprw0i.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760514/plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_re03sx.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760553/plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_kzhbwp.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760820/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_rprw0i.jpg";
  }


  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765290/elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate_dqlakc.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765232/elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_uv9hep.jpg";
    document.querySelector("#upperbodycolorthree").src = ""

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765290/elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate_dqlakc.jpg";
  }
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763873/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_dpgpj7.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763805/elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_p569s8.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763873/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_dpgpj7.jpg";
  }
  if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765140/elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_onq1td.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764986/elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_pb4wod.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765074/elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_vxi0zi.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765140/elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_onq1td.jpg";
  }

  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769520/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate_tkuqlp.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769506/q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_plate_vny0ej.jpg";
    document.querySelector("#upperbodycolorthree").src = ""

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769520/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate_tkuqlp.jpg";
  }
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769385/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate_dt6t5a.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769370/q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_zcw0l0.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769385/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate_dt6t5a.jpg";
  }
  if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769487/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_cgo4id.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769464/q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_ert63p.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769476/q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_nkfk6o.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769487/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_cgo4id.jpg";
  }


  if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771353/storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate_s8jkzt.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771316/storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_plate_fadf6n.jpg";
    document.querySelector("#upperbodycolorthree").src = ""

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771353/storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate_s8jkzt.jpg";
  }
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770913/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate_x3dpwx.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770877/storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_il7edc.jpg";
    document.querySelector("#upperbodycolorthree").src = "";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770913/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate_x3dpwx.jpg";
  }
  if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre') {
    document.querySelector("#upperbodycolorone").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771269/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_yi8tix.jpg";
    document.querySelector("#upperbodycolortwo").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771121/storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_sxtg4z.jpg";
    document.querySelector("#upperbodycolorthree").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771233/storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_vv6btt.jpg";


    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771269/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_yi8tix.jpg";
  }




  // if(exteriorcolor==='qsatintitaniumgrey' )

  const QBuckinghamshireGreenBodyColorLowerBodyColorUpperBody = () => {
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_onj9ku.jpg";
    document.querySelector("#img2").src = "q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_sulxom.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_sideview_gr9non.jpg";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate_j4ypmy.jpg";
    document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate_information_rrguav.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display = "block";

  }

  const QBuckinghamshireGreenBodyColorLowerGlossBlackUpperBody = () => {
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879489/q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_dz021x.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879488/q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_srstam.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879489/q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_btmek3.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879489/q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_sideview_fvazog.jpg";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720879488/q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_plate_lmfjo4.jpg";
    document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";

    document.querySelector("#infobuttonforupperbody").style.display = "none";

  }

  const QBuckinghamshireGreenGlossBlackLowerBodyColorUpperBody = () => {
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_keljmp.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720880861/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_wvap4k.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_xllcrc.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879476/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_sideview_obguig.jpg";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879476/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate_g6hu8w.jpg";
    document.querySelector("#upperpackagename").innerHTML = "Body Color Upper Package";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720880958/q_buckinghamshire_green_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_zuvzni.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display = "block";

  }

  const QBuckinghamshireGreenGlossBlackLowerGlossBlackUpperBody = () => {

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879475/q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_ybczj4.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720881036/q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_wc0hdx.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879477/q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_sh7x7l.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879475/q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_xca8dd.jpg";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_c3eb6z.jpg";
    document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


    document.querySelector("#infobuttonforupperbody").style.display = "none";

  }

  const QBuckinghamshireGreenCarbonFibreLowerBodyColorUpper = () => {
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_dkb3pr.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879482/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_d6uyit.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879487/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_mq5tux.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879482/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_bnaieu.jpg";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879486/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_j1nfkg.jpg";
    document.querySelector("#upperpackagename").innerHTML = "Body Colored Upper Package";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879486/q_buckinghamshire_green_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_bgguae.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display = "block";
  }

  const QBuckinghamshireGreenCarbonFibreLowerGlossBlackUpperBody = () => {
    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_ymyjeh.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879479/q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_c3ek3r.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879479/q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_y96ims.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_zzej1e.jpg";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879479/q_buckinghamshire_green_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_swxfwm.jpg";
    document.querySelector("#upperpackagename").innerHTML = "Body Colored Upper Package";


    document.querySelector("#infobuttonforupperbody").style.display = "none";
  }

  const QBuckinghamshireGreenCarbonFibreLowerCarbonFibreUpperBody = () => {

    document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879482/q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_uzuq9m.jpg";
    document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_argoah.jpg";
    document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879482/q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_m00s8f.jpg";
    document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_bcwwij.jpg";

    document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_bbmyvt.jpg";
    document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

    document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879480/q_buckinghamshire_green_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_m7adjg.jpg";
    document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
    document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

    // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
    document.querySelector("#infobuttonforupperbody").style.display = "block";
  }


  const QQuantumSilverBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677473/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_l6ddfr.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_nnv5bg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_njclab.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677473/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_sideview_yk1ftv.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677473/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate_cjzvhn.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_plate_information_d3ayad.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677484/q_quantum_silver_bclbp_bcubp_dark_sg0d62.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_nnv5bg.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_njclab.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677473/q_quantum_silver_body_color_lower_body_package_body_color_upper_body_package_sideview_yk1ftv.jpg";
    }

  }

  const QQuantumSilverBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_ciov9n.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677471/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_wsk74u.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677471/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_duiuvy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_sideview_dfx2z1.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677471/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_plate_jvjkfb.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";

      document.querySelector("#infobuttonforupperbody").style.display = "none";


    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677473/q_quantum_silver_bclbp_gbubp_dark_d3jli0.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677471/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_wsk74u.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677471/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_duiuvy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677472/q_quantum_silver_body_color_lower_body_package_gloss_black_upper_body_package_sideview_dfx2z1.jpg";
    }

  }

  const QQuantumSilverGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677449/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_f0ksxt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677449/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_gm1dos.jpg";
      document.querySelector("#img3").src = "q_quantum_silver_gloss_black_lower_body_package_body_color_uppehttps://res.cloudinary.com/dsctxyrvw/image/upload/v1720677448/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_cvyb7e.jpgr_body_package_backtopcloseview.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677447/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_sideview_ujgun5.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677448/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate_p1zdrf.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Color Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677448/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_tzkgty.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677450/q_quantum_silver_gblbp_bcubp_dark_owbgga.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677449/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_gm1dos.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677448/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_cvyb7e.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677447/q_quantum_silver_gloss_black_lower_body_package_body_color_upper_body_package_sideview_ujgun5.jpg";
    }

  }

  const QQuantumSilverGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {


      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677448/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_ckzdts.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677447/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_fk2g1h.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677446/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_fprf6g.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677447/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_wd6irg.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677445/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_jiazqo.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677449/q_quantum_silver_gblbp_gbubp_dark_vulms4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677447/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_fk2g1h.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677446/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_fprf6g.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677447/q_quantum_silver_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_wd6irg.jpg";
    }

  }

  const QQuantumSilverCarbonFibreLowerBodyColorUpper = () => {


    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677470/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_vdllfv.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677469/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_jfgf26.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677469/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_bdzmmy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_qfnmia.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_bdhrtj.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Colored Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_jzr0jd.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";

    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677457/q_quantum_silver_cflbp_bcubp_dark_pru64k.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677469/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_jfgf26.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677469/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_bdzmmy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_qfnmia.jpg";
    }
  }

  const QQuantumSilverCarbonFibreLowerGlossBlackUpperBody = () => {


    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677463/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_jg26wf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677462/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_tzzlwe.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677462/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_h13zkc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677463/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_gzoptp.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677463/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_rwwapc.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Colored Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677451/q_quantum_silver_cflbp_gbubp_dark_aid796.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677462/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_tzzlwe.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677462/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_h13zkc.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677463/q_quantum_silver_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_gzoptp.jpg";
    }
  }

  const QQuantumSilverCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677469/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_q6x6ul.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_qd76og.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_jwelhk.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_bkccyf.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_t15hyo.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_wbjvq2.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677456/q_quantum_silver_cflbp_cfubp_dark_zdpcxe.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_qd76og.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677467/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_jwelhk.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/v1720677464/q_quantum_silver_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_bkccyf.jpg";
    }

  }

  const QCasinoRoyaleBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681557/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_fekbbm.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681553/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_tnotgr.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681556/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_kfhtpo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681552/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_sideview_akqtyr.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681554/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_plate_azjbsu.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681550/q_casino_royale_body_color_lower_body_package_color_upper_body_package_plate_information_fl8qkt.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681580/q_casino_royale_bclbp_bcubp_dark_k8msm0.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681553/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_tnotgr.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681556/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_kfhtpo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681552/q_casino_royale_body_color_lower_body_package_body_color_upper_body_package_sideview_akqtyr.jpg";
    }
  }

  const QCasinoRoyaleBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681547/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_sxndmt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681543/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_hw3n7z.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681546/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_h0hxgd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681542/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_sideview_mevpph.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681544/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_plate_ea0baz.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681572/q_casino_royale_bclbp_gbubp_dark_fmlrji.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681543/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_hw3n7z.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681546/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_h0hxgd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681542/q_casino_royale_body_color_lower_body_package_gloss_black_upper_body_package_sideview_mevpph.jpg";
    }
  }

  const QCasinoRoyaleGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681463/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_c0cbhe.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681457/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_jnkywn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681461/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_a7uwn1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681455/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_sideview_ket9oy.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681460/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate_cl5w0y.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681458/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_w6uabg.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681475/q_casino_royale_gblbp_bcubp_dark_fsbiw2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681457/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_jnkywn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681461/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_a7uwn1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681455/q_casino_royale_gloss_black_lower_body_package_body_color_upper_body_package_sideview_ket9oy.jpg";
    }
  }

  const QCasinoRoyaleGlossBlackLowerGlossBLackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681453/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_jzj4eb.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681448/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_sojmps.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681450/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_bctcvh.jpg";
      document.querySelector("#img4").src = "q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681451/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_d78bmx.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681467/q_casino_royale_gblbp_gbubp_dark_dbedsp.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681448/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_sojmps.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681450/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_bctcvh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681447/q_casino_royale_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_www4bf.jpg";
    }

  }


  const QCasinoRoyaleCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681533/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_e2p28c.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681528/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_fgsl7u.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681532/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_okyilw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681526/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_mlqxs3.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681530/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_rjqf4r.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681529/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_yb3d6c.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681499/q_casino_royale_cflbp_bcubp_dark_oosnzv.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681528/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_fgsl7u.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681532/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_okyilw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681526/q_casino_royale_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_mlqxs3.jpg";
    }

  }

  const QCasinoRoyaleCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681515/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rzc6ai.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681511/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_nyh2yh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681514/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_unt7zu.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681510/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_g5k3uz.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681512/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_vqs8kj.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681484/q_casino_royale_cflbp_gbubp_dark_gvjdub.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681511/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_nyh2yh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681514/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_unt7zu.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681510/q_casino_royale_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_g5k3uz.jpg";
    }

  }

  const QCasinoRoyaleCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681525/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_fggf3d.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681519/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_vpbzog.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681523/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_pg5qam.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681518/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_djem5d.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681522/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_bdd9ke.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681520/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_r7ywuf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }


    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681491/q_casino_royale_cflbp_cfubp_dark_ghl1ib.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681519/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_vpbzog.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681523/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_pg5qam.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720681518/q_casino_royale_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_djem5d.jpg";
    }
  }


  const QSatinTitaniumGreyBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685955/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_hqn0kt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685947/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_humyaa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685954/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_tvdz7v.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685946/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_sideview_za6gpx.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685951/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate_bfezt8.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685950/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_plate_information_v9mbfm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685973/q_satin_titanium_grey_bclbp_bcubp_dark_ccqkh4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685947/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_humyaa.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685954/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_tvdz7v.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685946/q_satin_titanium_grey_body_color_lower_body_package_body_color_upper_body_package_sideview_za6gpx.jpg";
    }

  }

  const QSatinTitaniumGreyBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685942/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_shgihv.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685936/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_gywltd.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685938/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_gfv3rl.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685935/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_sideview_peyk9s.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685935/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_sideview_peyk9s.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685961/q_satin_titanium_grey_bclbp_gbubp_dark_i9z9ei.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685936/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_gywltd.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685938/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_gfv3rl.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685935/q_satin_titanium_grey_body_color_lower_body_package_gloss_black_upper_body_package_sideview_peyk9s.jpg";
    }
  }

  const QSatinTitaniumGreyGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685829/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_pkcffk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685824/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_aevjch.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685828/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_jwgsip.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685822/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_sideview_en2c0z.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685826/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_dtt2fw.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685825/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_e2jh8f.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685842/q_satin_titanium_grey_gblbp_bcubp_dark_uhqaiy.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685824/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_aevjch.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685828/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_jwgsip.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685822/q_satin_titanium_grey_gloss_black_lower_body_package_body_color_upper_body_package_sideview_en2c0z.jpg";
    }


  }

  const QSatinTitaniumGreyGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685820/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_savbpa.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685815/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_oisrvy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685818/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_srixox.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685814/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_aaat1n.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685816/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_k0hsa6.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685835/q_satin_titanium_grey_gblbp_gbubp_dark_vctjwu.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685815/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_oisrvy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685818/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_srixox.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685814/q_satin_titanium_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_aaat1n.jpg";
    }

  }

  const QSatinTitaniumGreyCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685923/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_aljwiw.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685916/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_wl0ivy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685921/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_ketmtd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685914/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_up1kqk.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685919/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_i7xsni.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685917/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_a3cg3y.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685876/q_satin_titanium_grey_cflbp_bcubp_dark_alwnfb.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685916/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_wl0ivy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685921/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_ketmtd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685914/q_satin_titanium_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_up1kqk.jpg";
    }
  }

  const QSatinTitaniumGreyCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685899/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sevdk0.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685893/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_dbncqj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685897/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_q8powb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685891/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_pjqhhv.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685894/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_ctilyc.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685854/q_satin_titanium_grey_cflbp_gbubp_dark_vhycux.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685893/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_dbncqj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685897/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_q8powb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685891/q_satin_titanium_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_pjqhhv.jpg";
    }

  }

  const QSatinTitaniumGreyCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685912/q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plqqmq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685904/q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_p2oumv.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685910/q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_wxoqav.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685903/q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_ctypaz.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685908/q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_aund6d.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685906/q_satin_titanium_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_kw2fkp.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720685865/q_satin_titanium_grey_cflbp_cfubp_dark_ezvlnf.jpg";

    }
  }

  const QSatinXenonGreyBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698746/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_txtjka.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698700/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_t5jtlp.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698739/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_hcj1qh.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698684/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_sideview_zoummi.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698732/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate_wvkvtl.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698725/q_satin_xenon_grey_body_color_lower_body_package_body_color_upper_body_package_plate_information_z3xqib.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698802/q_satin_xenon_grey_bclbp_bcubp_dark_kchz3k.jpg";
    }

  }

  const QSatinXenonGreyBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698670/q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_spwqqs.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698649/q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_snlbe6.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698663/q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_ngjpzu.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698642/q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_sideview_ihd6wl.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698656/q_satin_xenon_grey_body_color_lower_body_package_gloss_black_upper_body_package_plate_dgomjt.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698767/q_satin_xenon_grey_bclbp_gbubp_dark_x02f7p.jpg";
    }
  }

  const QSatinXenonGreyGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697848/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_mvdlao.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697808/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_ylg3xi.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697841/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_gs9lz0.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697801/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_sideview_y1qckx.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697833/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_wijmz2.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697815/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_jb2jrs.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697815/q_satin_xenon_grey_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_jb2jrs.jpg";
    }
  }

  const QSatinXenonGreyGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697787/q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_ohduoi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697767/q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_emoceq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697781/q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_qgsjwm.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697760/q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_srxw6t.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697774/q_satin_xenon_grey_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_nd9kxc.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697876/q_satin_xenon_grey_gblbp_gbubp_dark_b0rcsi.jpg";

    }

  }

  const QSatinXenonGreyCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698339/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_z1inzo.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698312/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_hjvovn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698312/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_hjvovn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698305/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_uqco72.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698325/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_pkgk05.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698318/q_satin_xenon_grey_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_lajoaf.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";

    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698166/q_satin_xenon_grey_cflbp_bcubp_dark_giepr0.jpg";

    }
  }

  const QSatinXenonGreyCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698249/q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_ovl6u0.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698228/q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_kykg63.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698242/q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_ker7ut.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698222/q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_b5w1ox.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698235/q_satin_xenon_grey_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_qvkyji.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720697966/q_satin_xenon_grey_cflbp_gbubp_dark_gkrbpl.jpg";

    }
  }

  const QSatinXenonGreyCarbonFibreLowerCarbonFibreUpperBody = () => {
    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698298/q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_anwdlt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698270/q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_klqxhk.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698291/q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_fq9dqm.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698263/q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_delz4e.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698284/q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_k3xy5b.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698277/q_satin_xenon_grey_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_f41yi3.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720698124/q_satin_xenon_grey_cflbp_cfubp_dark_bw8znm.jpg";

    }
  }

  const QSeychellesBlueBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721074/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_qtiem2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721065/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_k32zhh.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721072/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_baimmn.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721063/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_sideview_a2nh0x.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721069/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate_wwj1rp.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721067/q_seychelles_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information_vvxcvr.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721098/q_seychelles_blue_bclbp_bcubp_dark_qlbx2d.jpg";

    }
  }

  const QSeychellesBlueBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721058/q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_stlpc2.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721052/q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_dvauwn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721054/q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_ssk8wt.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721049/q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview_nfp834.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721055/q_seychelles_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_hjbu2i.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "q_seychelles_blue_bclbp_gbubp_dark.jpg";

    }
  }

  const QSeychellesBlueGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720599/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_hiyw8c.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720510/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_dnzgfm.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720516/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_bve6xv.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720507/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview_gsmeix.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720514/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_biqryc.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720512/q_seychelles_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_p4lyga.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Gloss Black Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720651/q_seychelles_blue_gblbp_bcubp_dark_cgwoxg.jpg";

    }

  }
  const QSeychellesBlueGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720503/q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_m0bdpu.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720499/q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_awvptx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720500/q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_dpbrhb.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720719948/q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_qhvsou.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720500/q_seychelles_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_vky5pk.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720605/q_seychelles_blue_gblbp_gbubp_dark_uonao9.jpg";

    }

  }
  const QSeychellesBlueCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721034/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_w6xeuq.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721025/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_zubk4w.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721032/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_osaht4.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721023/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_e5efga.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721029/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_ixy31t.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721027/q_seychelles_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_ztkk2a.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720975/q_seychelles_blue_cflbp_bcubp_dark_pykeuw.jpg";

    }
  }

  const QSeychellesBlueCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721004/q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_mv2j7g.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720997/q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_xd4mrm.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721001/q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_dcv7gp.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720994/q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_cgndi2.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720999/q_seychelles_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_osisqe.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720813/q_seychelles_blue_cflbp_gbubp_dark_ikxmdn.jpg";

    }
  }

  const QSeychellesBlueCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721020/q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_dxaq6v.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721011/q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_j6k1zx.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721016/q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_ejuiwe.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721009/q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_do6mo7.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721018/q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_bkancy.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720721013/q_seychelles_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_hpzvud.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720720961/q_seychelles_blue_cflbp_cfubp_dark_swhjn4.jpg";

    }

  }

  const QIonBlueBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753644/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_yzip3t.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753638/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_zpanra.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753641/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_wpn6xy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753637/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_sideview_goi0nf.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753643/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate_kcli3o.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753640/q_ion_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information_lpqvgs.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753660/q_ion_blue_bclbp_bcubp_dark_ptnmju.jpg";

    }

  }

  const QIonBlueBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753634/q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_lnqb6g.jpg";
      document.querySelector("#img2").src = "q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753632/q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_hixsm5.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753627/q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview_gkendb.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753630/q_ion_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_vpxxyl.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753651/q_ion_blue_bclbp_gbubp_dark_jdfruj.jpg";

    }

  }

  const QIonBlueGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753536/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_jh7o37.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753530/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_p1aq8q.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753535/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_ptijr9.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753529/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview_ksulom.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753533/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_agza6t.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753532/q_ion_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_mzx0sq.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";

    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753552/q_ion_blue_gblbp_bcubp_dark_wak1em.jpg";

    }
  }

  const QIonBlueGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753526/q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_zxvdyb.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753521/q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_lggzon.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753524/q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_uxawzs.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753519/q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_ptkbnk.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753522/q_ion_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_iyv71g.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753543/q_ion_blue_gblbp_gbubp_dark_bhr87g.jpg";

    }

  }

  const QIonBlueCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753618/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_ftbodt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753612/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_gikrqc.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753617/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_bfmkef.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753610/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_z9izcb.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753615/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_bgutih.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753613/q_ion_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_rk00d6.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753579/q_ion_blue_cflbp_bcubp_dark_zfy5sl.jpg";

    }

  }

  const QIonBlueCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753598/q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_b5gf0h.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753593/q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_xm9rn5.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753595/q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_vsrjk6.jpg";
      document.querySelector("#img4").src = "q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753596/q_ion_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_zsig5r.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753561/q_ion_blue_cflbp_gbubp_dark_akzipk.jpg";

    }

  }

  const QIonBlueCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753609/q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_fil82a.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753603/q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_qnmha8.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753606/q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_z6htkq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753601/q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_put80t.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753607/q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_fyxgec.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753604/q_ion_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_iy8emp.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720753570/q_ion_blue_cflbp_cfubp_dark_u45ok4.jpg";

    }
  }

  const PlasmaBlueBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {


      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760927/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_s9bfv5.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760905/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_cg7rgq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760921/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_e9m2gw.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760899/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_sideview_p685cy.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760916/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate_xvzpy5.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760910/plasma_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information_yltgtu.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720761072/plasma_blue_bclbp_bcubp_dark_airer9.jpg";

    }
  }

  const PlasmaBlueBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760888/plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_viwjbo.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760871/plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_azfl6b.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760882/plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_isryjz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760865/plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview_fkdpvg.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760876/plasma_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_f39yrk.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760944/plasma_blue_bclbp_gbubp_dark_qpuz1f.jpg";

    }

  }

  const PlasmaBlueGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760302/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_okxdlm.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760280/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_pc1kfn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760296/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_cx1qfo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760275/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview_aoomvi.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760291/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_irpejd.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760286/plasma_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_ehxwiy.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760356/plasma_blue_gblbp_bcubp_dark_zejkhc.jpg";

    }

  }

  const PlasmaBlueGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760264/plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_mhnwat.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760248/plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_z1gwhj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760259/plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_mi8ogy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760145/plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_zdi35f.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760253/plasma_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_agw80o.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760323/plasma_blue_gblbp_gbubp_dark_iihz21.jpg";

    }

  }

  const PlasmaBlueCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760832/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_e11rsr.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760809/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_vvzaia.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760826/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_wq34kz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760803/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_xh4ubp.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760820/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_rprw0i.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760815/plasma_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_cyluzu.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760474/plasma_blue_cflbp_bcubp_bright_wdb7lb.jpg";

    }

  }

  const PlasmaBlueCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760525/plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_q10orr.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760508/plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_n2ehz7.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760520/plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_djdkcf.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760503/plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_d8aiuu.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760514/plasma_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_re03sx.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760388/plasma_blue_cflbp_gbubp_dark_mrfgxa.jpg";

    }
  }

  const PlasmaBlueCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760798/plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_yb4gts.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760542/plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_tzmyqe.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760560/plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_wl3hwq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760537/plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_cyxwam.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760553/plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_kzhbwp.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760548/plasma_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_qhxiab.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720760423/plasma_blue_cflbp_cfubp_dark_ad8qcx.jpg";

    }

  }

  const ElwoodBlueBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765309/elwood_blue_body_color_lower_body_package_body_color_upper_body_package_dhqh3r.jpg";
      document.querySelector("#img2").src = "elwood_blue_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765299/elwood_blue_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_disig9.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765262/elwood_blue_body_color_lower_body_package_body_color_upper_body_package_sideview_mlzwbr.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765290/elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate_dqlakc.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765280/elwood_blue_body_color_lower_body_package_body_color_upper_body_package_plate_information_h5fxwr.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }


    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765414/elwood_blue_bclbp_bcubp_dark_b7yyvi.jpg";

    }


  }

  const ElwoodBlueBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765243/elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_cbq0vk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765215/elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_rxqgpw.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765234/elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_wvqlu1.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765206/elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_sideview_fnmlx5.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765232/elwood_blue_body_color_lower_body_package_gloss_black_upper_body_package_plate_uv9hep.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";

      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }


    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765346/elwood_blue_bclbp_gbubp_dark_jl8svs.jpg";

    }

  }

  const ElwoodBlueGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763892/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_t1v6ku.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763854/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_v2lddu.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763883/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_skoalu.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763843/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_sideview_gegv3c.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763873/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_dpgpj7.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763863/elwood_blue_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_piilv8.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764197/elwood_blue_gblbp_bcubp_dark_kvkjxi.jpg";

    }

  }

  const ElwoodBlueGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763825/elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_s7m2bi.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763796/elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_xu3vgt.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763815/elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_ojipyo.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763787/elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_o1yato.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720763805/elwood_blue_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_p569s8.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764130/elwood_blue_gblbp_gbubp_dark_hmnttc.jpg";

    }

  }

  const ElwoodBlueCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765149/elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_szyqpf.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765112/elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_i1e3dn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765131/elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_spoc7r.jpg";
      document.querySelector("#img4").src = "elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765140/elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_onq1td.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765121/elwood_blue_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_sgrqj9.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764891/elwood_blue_cflbp_bcubp_dark_vttnsl.jpg";

    }

  }

  const ElwoodBlueCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "elwoodhttps://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765007/elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_pmvoqh.jpg_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764977/elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_xhozfb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765055/elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_rivhyq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764968/elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_ltwlvu.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764986/elwood_blue_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_pb4wod.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764254/elwood_blue_cflbp_gbubp_dark_sgwknr.jpg";

    }

  }

  const ElwoodBlueCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765093/elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_vigjda.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765056/elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_g51byq.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765084/elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_si3ufd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765047/elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_duyxwd.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765074/elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_vxi0zi.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720765065/elwood_blue_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_jscdz4.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720764836/elwood_blue_cflbp_cfubp_dark_d9iosu.jpg";

    }
  }

  const QDigitalVioletBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769524/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_hpvmph.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769516/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_sgdm1e.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769522/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_wurbgz.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769514/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_sideview_n8rocd.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769520/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate_tkuqlp.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769518/q_digital_violet_body_color_lower_body_package_body_color_upper_body_package_plate_information_rm36gm.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769544/q_digital_violet_bclbp_bcubp_dark_tpxgnp.jpg";

    }

  }

  const QDigitalVioletBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769511/q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_kiu7fd.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769505/q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_ru5bkb.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769509/q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_hfwy4i.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769503/q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_sideview_ioelju.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769506/q_digital_violet_body_color_lower_body_package_gloss_black_upper_body_package_plate_vny0ej.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769532/q_digital_violet_bclbp_gbubp_dark_g7dtqi.jpg";

    }

  }

  const QDigitalVioletGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769388/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_gg14wr.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769380/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_epikcy.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769384/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_uz5v07.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769378/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_sideview_vlussk.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769385/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate_dt6t5a.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769381/q_digital_violet_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_sygvg7.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }


    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769407/q_digital_violet_gblbp_bcubp_dark_q1diik.jpg";

    }


  }

  const QDigitalVioletGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769374/q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_hegkw4.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769369/q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_gkpjai.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769372/q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_peqwt2.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769366/q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_cd7b1q.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769370/q_digital_violet_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_zcw0l0.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769395/q_digital_violet_gblbp_gbubp_dark_ovuclh.jpg";

    }

  }

  const QDigitalVioletCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769491/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_gxmp8s.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769483/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_mlvo7r.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769490/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_zmdrrd.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769482/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_h5iliv.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769487/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_cgo4id.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769485/q_digital_violet_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_mdjr4l.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";

    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769442/q_digital_violet_cflbp_bcubp_dark_fuku5h.jpg";

    }

  }

  const QDigitalVioletCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769466/q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_fl7bqk.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769460/q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_eg8hdf.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769462/q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_pbngc7.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769458/q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_ispcb6.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769464/q_digital_violet_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_ert63p.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769419/q_digital_violet_cflbp_gbubp_dark_rv7yza.jpg";

    }

  }

  const QDigitalVioletCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769480/q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_dahrze.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769471/q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_jndzcp.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769477/q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_qlspiv.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769470/q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_dx6yim.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769476/q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_nkfk6o.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769474/q_digital_violet_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_m5wgix.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720769431/q_digital_violet_cflbp_cfubp_dark_gkkpyt.jpg";

    }

  }

  const StormPurpleBodyColorLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771363/storm_purple_body_color_lower_body_package_body_color_upper_body_package_k0jjy0.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771342/storm_purple_body_color_lower_body_package_body_color_upper_body_package_rightsidebacklowview_p7zpyd.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771358/storm_purple_body_color_lower_body_package_body_color_upper_body_package_backtopcloseview_dbhcok.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771337/storm_purple_body_color_lower_body_package_body_color_upper_body_package_sideview_gctuvw.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771353/storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate_s8jkzt.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771347/storm_purple_body_color_lower_body_package_body_color_upper_body_package_plate_information_ze071d.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771411/storm_purple_bclbp_bcubp_dark_ektzrp.jpg";

    }

  }

  const StormPurpleBodyColorLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771327/storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_sgw56i.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771311/storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_bg3afn.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771321/storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_backtopcloseview_hifl6q.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771306/storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_sideview_wnwa2m.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771316/storm_purple_body_color_lower_body_package_gloss_black_upper_body_package_plate_fadf6n.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }


    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771384/storm_purple_bclbp_gbubp_dark_mzjczp.jpg";

    }

  }

  const StormPurpleGlossBlackLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770923/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_wloe7m.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770903/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_rightsidebacklowview_cqihau.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770918/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_backtopcloseview_sqepe9.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770898/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_sideview_bzwvmu.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770913/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate_x3dpwx.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770908/storm_purple_gloss_black_lower_body_package_body_color_upper_body_package_plate_information_itkkzl.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770975/storm_purple_gblbp_bcubp_dark_zhmpd7.jpg";

    }

  }

  const StormPurpleGlossBlackLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770887/storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_nwfgqc.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770872/storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_lfwejj.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770882/storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_backtopcloseview_nozjxy.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770867/storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_sideview_ln3eir.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770877/storm_purple_gloss_black_lower_body_package_gloss_black_upper_body_package_plate_il7edc.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720770944/storm_purple_gblbp_gbubp_dark_fzhze2.jpg";

    }

  }

  const StormPurpleCarbonFibreLowerBodyColorUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771275/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_gwfh0z.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771254/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_rightsidebacklowview_fkmbu0.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771264/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_backtopcloseview_ktkwvq.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771249/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_sideview_ztbjtt.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771269/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_yi8tix.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Body Coloured Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771259/storm_purple_carbon_fibre_lower_body_package_body_color_upper_body_package_plate_information_toycao.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Body Coloured Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Matches the roof strake (Coupe) or windscreen surround (Volante) and mirror caps to the body colour, for a classical and elegant look.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771064/storm_purple_cflbp_bcubp_dark_bc6v8o.jpg";

    }

  }

  const StormPurpleCarbonFibreLowerGlossBlackUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771207/storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_oguvk8.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771116/storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_rightsidebacklowview_rcdoh2.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771127/storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_backtopcloseview_uwutws.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771111/storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_sideview_ny45tf.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771121/storm_purple_carbon_fibre_lower_body_package_gloss_black_upper_body_package_plate_sxtg4z.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Gloss Black Upper Package";


      document.querySelector("#infobuttonforupperbody").style.display = "none";

    }


    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771006/storm_purple_cflbp_gbubp_dark_ahcdo4.jpg";

    }
  }

  const StormPurpleCarbonFibreLowerCarbonFibreUpperBody = () => {

    if (grille === 'bright') {

      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771244/storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_y452lt.jpg";
      document.querySelector("#img2").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771223/storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_rightsidebacklowview_adokra.jpg";
      document.querySelector("#img3").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771238/storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_backtopcloseview_xtjruk.jpg";
      document.querySelector("#img4").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771217/storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_sideview_veuvnn.jpg";

      document.querySelector("#currentupperbodyinfoimage").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771233/storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_vv6btt.jpg";
      document.querySelector("#upperpackagename").innerHTML = "Carbon Fibre Upper Package";

      document.querySelector("#colorimage img").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771228/storm_purple_carbon_fibre_lower_body_package_carbon_fibre_upper_body_package_plate_information_dqv1v6.jpg";
      document.querySelector("#colorcardcolorname").innerHTML = "Carbon Fibre Upper Package";
      document.querySelector("#colorcardcolorinformation").innerHTML = "Adds 2x2 Twill Carbon Fibre bonnet blades, roof strakes and mirror caps to the vehicle upper environment. Race inspired yet sophisticated.";

      // document.querySelector("#infobuttonforupperbody").src="infobutton.png";
      document.querySelector("#infobuttonforupperbody").style.display = "block";
    }

    if (grille === 'dark') {
      document.querySelector("#img1").src = "https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720771037/storm_purple_cflbp_cfubp_dark_foompj.jpg";

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

  const BodyColorUpperPackages = () => {

    setupperpackage('bodycolor');

    document.querySelector("#uppercolorborderone").style.borderBottom = "2px solid white";
    document.querySelector("#uppercolorbordertwo").style.borderBottom = "none";
    document.querySelector("#uppercolorborderthree").style.borderBottom = "none";

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor') { QBuckinghamshireGreenBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'glossblack') { QBuckinghamshireGreenGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre') { QBuckinghamshireGreenCarbonFibreLowerBodyColorUpper(); }


    if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor') { QQuantumSilverBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack') { QQuantumSilverGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre') { QQuantumSilverCarbonFibreLowerBodyColorUpper(); }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor') { QCasinoRoyaleBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack') { QCasinoRoyaleGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre') { QCasinoRoyaleCarbonFibreLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor') { QSatinTitaniumGreyBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack') { QSatinTitaniumGreyGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre') { QSatinTitaniumGreyCarbonFibreLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor') { QSatinXenonGreyBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack') { QSatinXenonGreyGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre') { QSatinXenonGreyCarbonFibreLowerBodyColorUpperBody(); }
    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor') {
      QSeychellesBlueBodyColorLowerBodyColorUpperBody();
    }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack') { QSeychellesBlueGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre') { QSeychellesBlueCarbonFibreLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor'

    ) { QIonBlueBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack') { QIonBlueGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre') { QIonBlueCarbonFibreLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor'

    ) { PlasmaBlueBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack') { PlasmaBlueGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre') { PlasmaBlueCarbonFibreLowerBodyColorUpperBody(); }


    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor'

    ) { ElwoodBlueBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack') { ElwoodBlueGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre') { ElwoodBlueCarbonFibreLowerBodyColorUpperBody(); }


    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor') { QDigitalVioletBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack') { QDigitalVioletGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre') { QDigitalVioletCarbonFibreLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor') { StormPurpleBodyColorLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack') { StormPurpleGlossBlackLowerBodyColorUpperBody(); }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre') { StormPurpleCarbonFibreLowerBodyColorUpperBody(); }


  }


  const GlossBlackUpperPackages = () => {
    setupperpackage('glossblack');


    document.querySelector("#uppercolorborderone").style.borderBottom = "none";
    document.querySelector("#uppercolorbordertwo").style.borderBottom = "2px solid white";
    document.querySelector("#uppercolorborderthree").style.borderBottom = "none";


    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'bodycolor') { QBuckinghamshireGreenBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'glossblack') { QBuckinghamshireGreenGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre') {
      QBuckinghamshireGreenCarbonFibreLowerGlossBlackUpperBody();
    }

    if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'bodycolor') { QQuantumSilverBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'glossblack') { QQuantumSilverGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre') {
      QQuantumSilverCarbonFibreLowerGlossBlackUpperBody();
    }
    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'bodycolor') { QCasinoRoyaleBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'glossblack') { QCasinoRoyaleGlossBlackLowerGlossBLackUpperBody(); }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre') { QCasinoRoyaleCarbonFibreLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'bodycolor') { QSatinTitaniumGreyBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'glossblack') { QSatinTitaniumGreyGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre') { QSatinTitaniumGreyCarbonFibreLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'bodycolor') { QSatinXenonGreyBodyColorLowerGlossBlackUpperBody(); }
    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'glossblack') { QSatinXenonGreyGlossBlackLowerGlossBlackUpperBody(); }
    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre') { QSatinXenonGreyCarbonFibreLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'bodycolor') { QSeychellesBlueBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'glossblack') { QSeychellesBlueGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre') { QSeychellesBlueCarbonFibreLowerGlossBlackUpperBody(); }
    if (exteriorcolor === 'qionblue' && lowerpackage === 'bodycolor') { QIonBlueBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'glossblack') { QIonBlueGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre') { QIonBlueCarbonFibreLowerGlossBlackUpperBody(); }


    if (exteriorcolor === 'plasmablue' && lowerpackage === 'bodycolor') { PlasmaBlueBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'glossblack') { PlasmaBlueGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre') { PlasmaBlueCarbonFibreLowerGlossBlackUpperBody(); }


    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'bodycolor') { ElwoodBlueBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'glossblack') { ElwoodBlueGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre') { ElwoodBlueCarbonFibreLowerGlossBlackUpperBody(); }



    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'bodycolor') { QDigitalVioletBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'glossblack') { QDigitalVioletGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre') { QDigitalVioletCarbonFibreLowerGlossBlackUpperBody(); }


    if (exteriorcolor === 'stormpurple' && lowerpackage === 'bodycolor') { StormPurpleBodyColorLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'glossblack') { StormPurpleGlossBlackLowerGlossBlackUpperBody(); }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre') { StormPurpleCarbonFibreLowerGlossBlackUpperBody(); }


  }

  const CarbonFibreUpperPackages = () => {
    setupperpackage('carbonfibre');

    document.querySelector("#uppercolorborderone").style.borderBottom = "none";
    document.querySelector("#uppercolorbordertwo").style.borderBottom = "none";
    document.querySelector("#uppercolorborderthree").style.borderBottom = "2px solid white";

    if (exteriorcolor === 'qbuckinghamshiregreen' && lowerpackage === 'carbonfibre') {
      QBuckinghamshireGreenCarbonFibreLowerCarbonFibreUpperBody();
    }

    if (exteriorcolor === 'qquantumsilver' && lowerpackage === 'carbonfibre') {
      QQuantumSilverCarbonFibreLowerCarbonFibreUpperBody();
    }

    if (exteriorcolor === 'qcasinoroyale' && lowerpackage === 'carbonfibre') { QCasinoRoyaleCarbonFibreLowerCarbonFibreUpperBody(); }

    if (exteriorcolor === 'qsatintitaniumgrey' && lowerpackage === 'carbonfibre') { QSatinTitaniumGreyCarbonFibreLowerCarbonFibreUpperBody(); }

    if (exteriorcolor === 'qsatinxenongrey' && lowerpackage === 'carbonfibre') { QSatinXenonGreyCarbonFibreLowerCarbonFibreUpperBody(); }

    if (exteriorcolor === 'qseychellesblue' && lowerpackage === 'carbonfibre') { QSeychellesBlueCarbonFibreLowerCarbonFibreUpperBody(); }

    if (exteriorcolor === 'qionblue' && lowerpackage === 'carbonfibre') { QIonBlueCarbonFibreLowerCarbonFibreUpperBody(); }

    if (exteriorcolor === 'plasmablue' && lowerpackage === 'carbonfibre') { PlasmaBlueCarbonFibreLowerCarbonFibreUpperBody(); }


    if (exteriorcolor === 'elwoodblue' && lowerpackage === 'carbonfibre') { ElwoodBlueCarbonFibreLowerCarbonFibreUpperBody(); }

    if (exteriorcolor === 'qdigitalviolet' && lowerpackage === 'carbonfibre') { QDigitalVioletCarbonFibreLowerCarbonFibreUpperBody(); }

    if (exteriorcolor === 'stormpurple' && lowerpackage === 'carbonfibre') { StormPurpleCarbonFibreLowerCarbonFibreUpperBody(); }


  }
  return (<>

    <div id="upperpackagediv">
      <div id="upperpackage">
        <div id="upperpackageplatesdiv">

          <div id="upperpackageimagesplate">
            <div className="upperpackagehoverhider" id="uppercolorborderone"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/1720879490/q_buckinghamshire_green_body_color_lower_body_package_body_color_upper_body_package_plate_j4ypmy.jpg" className="upperbodyscaling" alt="" id="upperbodycolorone" onClick={BodyColorUpperPackages} /></div>
            <div className="upperpackagehoverhider" id="uppercolorbordertwo"><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/1720879488/q_buckinghamshire_green_body_color_lower_body_package_gloss_black_upper_body_package_plate_lmfjo4.jpg" alt="" className="upperbodyscaling" id="upperbodycolortwo" onClick={GlossBlackUpperPackages} /></div>
            <div className="upperpackagehoverhider" id="uppercolorborderthree" ><img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879478/q_buckinghamshire_green_carbon_fibre_lower_body_package_plate_iixwwk.jpg" className="upperbodyscaling" alt="" id="upperbodycolorthree" onClick={CarbonFibreUpperPackages} /></div>
          </div>
        </div>

        <div id="upperpackageimageinformationsection">
          <div id="upperpackageimagewithinfo">
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879473/q_buckinghamshire_green_gloss_black_lower_body_package_plate_z4siou.jpg" alt="" id="currentupperbodyinfoimage" />
            <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/q_auto/v1720879541/infobutton_admoia.png" alt="" id="infobuttonforupperbody" onClick={showinfofunction} />
          </div>
          <div id="upperpackageinformationcontent">
            <div id="upperpackagename">Body Colored Upper Package</div>
          </div>
        </div>
      </div>
    </div>
    <GrilleFinish selectedSeat={selectedSeat} selectedprimarycolor={selectedprimarycolor} selectedsecondarycolor={selectedsecondarycolor} showinfofunction={showinfofunction} exteriorcolor={exteriorcolor} lowerpackage={lowerpackage} upperpackage={upperpackage} grille={grille} setgrille={setgrille} />
  </>)
}

export default UpperBodyPackage;